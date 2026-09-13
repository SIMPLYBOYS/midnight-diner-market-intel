import type { DataSource } from './interface';
import { LazyEpisodeDataSource } from './LazyEpisodeDataSource';

/**
 * The app's single DataSource instance. Both the Phaser scene and the React
 * episode menu read through this — swap this one line (e.g. to an
 * LlmDataSource) to repoint the whole app without touching any consumer.
 */
export const dataSource: DataSource = new LazyEpisodeDataSource();

export type { DataSource } from './interface';
