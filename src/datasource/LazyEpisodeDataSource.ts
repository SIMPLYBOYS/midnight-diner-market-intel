import type { Episode, EpisodeMeta } from '../engine/types';
import type { DataSource } from './interface';
import { listEpisodeMetas, loadEpisode, LATEST_EPISODE_ID } from '../assets/episodes';

/**
 * DataSource backed by the lazy glob episode registry. Episodes are
 * code-split per file and fetched on demand; metadata loads everything
 * once (cached) for menu listings.
 */
export class LazyEpisodeDataSource implements DataSource {
  listEpisodes(): Promise<EpisodeMeta[]> {
    return listEpisodeMetas();
  }

  getEpisode(id: string): Promise<Episode> {
    return loadEpisode(id);
  }

  getLatestEpisodeId(): Promise<string> {
    return Promise.resolve(LATEST_EPISODE_ID);
  }
}
