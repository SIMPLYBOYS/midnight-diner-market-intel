import type { Episode, EpisodeMeta } from '../../engine/types';
import { logger } from '../../logger';

/**
 * Episode registry — discovered via Vite glob, loaded lazily.
 *
 * Every `episodeNN.ts` in this directory is picked up automatically; there
 * is no manual import list to maintain. Vite code-splits each episode into
 * its own chunk, so the initial bundle no longer carries the full script
 * library (~1.3MB source and growing daily) — an episode's chunk is fetched
 * the first time it is loaded.
 *
 * Convention: the filename `episodeNN.ts` must match the episode's internal
 * `id: 'ep-NN'` (zero-padded the same way). A mismatch logs a warning and
 * the module's own id wins for playback.
 */
const modules = import.meta.glob<Record<string, unknown>>('./episode*.ts');

interface RegistryEntry {
  id: string;
  num: number;
  load: () => Promise<Record<string, unknown>>;
}

const registry: RegistryEntry[] = Object.entries(modules)
  .map(([path, load]): RegistryEntry | null => {
    const m = /episode(\d+)\.ts$/.exec(path);
    if (!m) return null;
    return { id: `ep-${m[1]}`, num: Number(m[1]), load };
  })
  .filter((e): e is RegistryEntry => e !== null)
  .sort((a, b) => a.num - b.num);

/** All episode ids in chronological (file-number) order. Synchronous. */
export const EPISODE_IDS: string[] = registry.map((e) => e.id);

/** Newest episode id — what the scene auto-plays on startup. */
export const LATEST_EPISODE_ID: string = EPISODE_IDS[EPISODE_IDS.length - 1];

const cache = new Map<string, Episode>();

function isEpisode(v: unknown): v is Episode {
  return (
    typeof v === 'object' && v !== null && 'id' in v && 'actions' in v && Array.isArray((v as Episode).actions)
  );
}

/** Load one episode by id, fetching its chunk on first access. */
export async function loadEpisode(id: string): Promise<Episode> {
  const hit = cache.get(id);
  if (hit) return hit;

  const entry = registry.find((e) => e.id === id);
  if (!entry) throw new Error(`Episode not found: ${id}`);

  const mod = await entry.load();
  const ep = Object.values(mod).find(isEpisode);
  if (!ep) throw new Error(`No Episode export found in module for ${id}`);
  if (ep.id !== id) {
    logger.warn(`episode id mismatch: filename implies ${id}, module declares ${ep.id}`);
  }

  cache.set(id, ep);
  return ep;
}

/**
 * Metadata for every episode (id/date/title/description), for menus.
 * Loads all episode chunks (cached) — call after first paint, not before.
 */
export async function listEpisodeMetas(): Promise<EpisodeMeta[]> {
  const eps = await Promise.all(EPISODE_IDS.map((id) => loadEpisode(id)));
  return eps.map(({ id, date, title, description }) => ({ id, date, title, description }));
}
