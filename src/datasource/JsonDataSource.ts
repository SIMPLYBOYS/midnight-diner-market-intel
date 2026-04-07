import type { Episode, EpisodeMeta } from '../engine/types';
import type { DataSource } from './interface';

export class JsonDataSource implements DataSource {
  private episodes: Map<string, Episode>;

  constructor(episodes: Episode[]) {
    this.episodes = new Map(episodes.map((ep) => [ep.id, ep]));
  }

  async listEpisodes(): Promise<EpisodeMeta[]> {
    return [...this.episodes.values()].map(({ id, title, description }) => ({
      id,
      title,
      description,
    }));
  }

  async getEpisode(id: string): Promise<Episode> {
    const ep = this.episodes.get(id);
    if (!ep) throw new Error(`Episode not found: ${id}`);
    return ep;
  }
}
