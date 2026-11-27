import { loadCatalog } from "./catalog.ts";
import { loadCredits } from "./credits.ts";
import type { CreditMatch, CreditsIndex } from "./credits.ts";
import { creditQuery } from "../chat/people-query.ts";
import { MAX_PERSON_SUGGESTIONS } from "../chat/person-lookup.ts";
import { withoutDiscoveryClauses } from "../chat/intent.ts";
import { buildShortlist, releasedFilters } from "../chat/shortlist.ts";
import type { ChatSearch, ChatShortlist } from "../chat/shortlist.ts";
import { parseExport } from "./letterboxd.ts";
import type { Reply, Request } from "./protocol.ts";
import { DEFAULT_FILTERS } from "./ranking.ts";
import { createSample } from "./sample.ts";
import { createSession } from "./session.ts";
import { ImportError } from "./zip.ts";

// This entry point runs only in a dedicated worker. The app's TS project also includes DOM types.
const worker = globalThis as unknown as {
  postMessage(reply: Reply): void;
  onmessage: ((event: MessageEvent<Request>) => void) | null;
};
let session: ReturnType<typeof createSession> | null = null;
let creditCatalog: { url: URL; version: string } | undefined;
let credits: Promise<CreditsIndex> | undefined;
let started = false;

function getCredits(): Promise<CreditsIndex> {
  if (!creditCatalog) return Promise.reject(new Error("Credits unavailable"));
  credits ??= loadCredits(creditCatalog.url, creditCatalog.version).catch((error: unknown) => {
    credits = undefined;
    throw error;
  });
  return credits;
}

async function prepareChat(search: ChatSearch): Promise<ChatShortlist> {
  const empty = { eligibleCount: 0, candidates: [] };
  if (!session) return empty;
  const clear = releasedFilters(search.prompt);
  const prior = clear.credit ? undefined : search.previousFilters?.credit;
  const query = creditQuery(
    search.scope === "outside" ? withoutDiscoveryClauses(clear.text) : clear.text,
  );
  const candidate = query
    ? ({
        name: query.name,
        role: query.role ?? search.creditRole ?? prior?.role ?? "cast",
      } as const)
    : prior;
  if (!candidate) return session.prepareChat(search);
  let match: CreditMatch;
  try {
    const index = await getCredits();
    match = index.match(candidate);
  } catch {
    credits = undefined;
    match = { status: "unavailable", filter: candidate };
  }
  if (match.status === "matched") {
    const result = session.prepareChat(search, match.credit);
    if (match.correctedFrom)
      result.creditCorrection = { from: match.correctedFrom, to: match.credit.name };
    return result;
  }
  if (match.status === "missing" && query && !query.required && !prior && !search.creditRole) {
    return session.prepareChat(search);
  }
  const pending = buildShortlist([], session.genres, search);
  return {
    ...pending,
    creditIssue: match,
    appliedFilters: {
      minRuntime: null,
      maxRuntime: null,
      minYear: null,
      maxYear: null,
      included: [],
      excluded: [],
      ...pending.appliedFilters,
      credit: candidate,
    },
  };
}

worker.onmessage = async ({ data }) => {
  if (data.type === "verify-names") {
    const names = await getCredits()
      .then((index) => [
        ...new Set(
          data.names.slice(0, MAX_PERSON_SUGGESTIONS).flatMap((name) => {
            const exact = index.verifiedName({ name, role: data.role });
            return exact ? [exact] : [];
          }),
        ),
      ])
      .catch((): string[] => []);
    worker.postMessage({ type: "names-verified", id: data.id, names });
    return;
  }
  if (data.type === "chat-shortlist") {
    const results = await prepareChat(data.search);
    worker.postMessage({ type: "chat-shortlisted", id: data.id, results });
    return;
  }
  if (data.type === "rank") {
    if (session)
      worker.postMessage({ type: "ranked", id: data.id, results: session.recommend(data.filters) });
    return;
  }
  if (started) return;
  started = true;
  let exported;
  let chatProfile: Promise<string | undefined> = Promise.resolve(
    data.type === "sample" ? "sample" : undefined,
  );
  try {
    exported =
      data.type === "sample"
        ? createSample()
        : await parseExport(data.file, (bytes) => {
            // Hash the already-read archive to identify its local tab-session transcript.
            if (!globalThis.crypto?.subtle) return;
            chatProfile = crypto.subtle
              .digest("SHA-256", bytes)
              .then((digest) =>
                Array.from(new Uint8Array(digest), (byte) =>
                  byte.toString(16).padStart(2, "0"),
                ).join(""),
              )
              .catch(() => undefined);
          });
  } catch (error) {
    worker.postMessage({
      type: "error",
      message:
        error instanceof ImportError ? error.message : "CineTaste couldn't read that export.",
    });
    return;
  }
  worker.postMessage({
    type: "phase",
    message: "Matching films and ranking watchlist picks…",
  });
  try {
    const catalogUrl = new URL(data.manifestUrl);
    const catalog = await loadCatalog(catalogUrl);
    if (catalog.version) creditCatalog = { url: catalogUrl, version: catalog.version };
    session = createSession(exported, catalog, Math.floor(Date.now() / 86_400_000));
    const { summary, genres } = session;
    worker.postMessage({
      type: "ready",
      summary,
      genres,
      chatProfile: await chatProfile,
      results: session.recommend(DEFAULT_FILTERS),
    });
  } catch {
    worker.postMessage({
      type: "error",
      message:
        data.type === "sample"
          ? "CineTaste couldn't load its film catalog. Try the sample again."
          : "CineTaste couldn't load its film catalog. Try choosing the export again.",
    });
  }
};
