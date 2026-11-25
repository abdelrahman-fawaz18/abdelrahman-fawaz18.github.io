import { loadCatalog } from "./catalog.ts";
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
let started = false;

worker.onmessage = async ({ data }) => {
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
    const catalog = await loadCatalog(new URL(data.manifestUrl));
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
