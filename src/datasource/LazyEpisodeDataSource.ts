import type { Episode, EpisodeMeta } from '../engine/types';
import type { DataSource } from './interface';
import { listEpisodeMetas, loadEpisode } from '../assets/episodes';

/**
 * DataSource backed by the lazy glob episode registry. Episodes are
 * code-split per file and fetched on demand; metadata loads everything
 * once (cached) for menu listings.
 *
 * JsonDataSource remains as the eager-array implementation of the same
 * interface (useful for tests or embedding a fixed episode set).
 */
export class LazyEpisodeDataSource implements DataSource {
  listEpisodes(): Promise<EpisodeMeta[]> {
    return listEpisodeMetas();
  }

  getEpisode(id: string): Promise<Episode> {
    return loadEpisode(id);
  }
}
