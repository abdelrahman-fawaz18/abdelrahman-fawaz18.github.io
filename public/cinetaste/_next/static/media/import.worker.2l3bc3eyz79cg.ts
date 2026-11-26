import { loadCatalog } from "./catalog.ts";
import { loadCredits } from "./credits.ts";
import type { CreditMatch, CreditsIndex } from "./credits.ts";
import { creditQuery } from "../chat/people-query.ts";
import { releasedFilters } from "../chat/shortlist.ts";
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

async function prepareChat(search: ChatSearch): Promise<ChatShortlist> {
  const empty = { eligibleCount: 0, candidates: [] };
  if (!session) return empty;
  const clear = releasedFilters(search.prompt);
  const prior = clear.credit ? undefined : search.previousFilters?.credit;
  const query = creditQuery(clear.text);
  const candidate = query
    ? ({
        name: query.name,
        role: query.role ?? search.creditRole ?? prior?.role ?? "cast",
      } as const)
    : prior;
  if (!candidate) return session.prepareChat(search);
  let match: CreditMatch;
  try {
    if (!creditCatalog) throw new Error("Credits unavailable");
    credits ??= loadCredits(creditCatalog.url, creditCatalog.version);
    const index = await credits;
    match = index.match(candidate);
  } catch {
    credits = undefined;
    match = { status: "unavailable", filter: candidate };
  }
  if (match.status === "matched") return session.prepareChat(search, match.credit);
  if (match.status === "missing" && query && !query.required && !prior && !search.creditRole) {
    return session.prepareChat(search);
  }
  return {
    ...empty,
    creditIssue: match,
    appliedFilters: {
      minRuntime: null,
      maxRuntime: null,
      minYear: null,
      maxYear: null,
      included: [],
      excluded: [],
      ...search.previousFilters,
      credit: candidate,
    },
  };
}

worker.onmessage = async ({ data }) => {
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
  try {
    exported = data.type === "sample" ? createSample() : await parseExport(data.file);
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
