import type { Episode, EpisodeMeta } from '../engine/types';

export interface DataSource {
  listEpisodes(): Promise<EpisodeMeta[]>;
  getEpisode(id: string): Promise<Episode>;
  /** The id the app should auto-play / select on startup. */
  getLatestEpisodeId(): Promise<string>;
}
