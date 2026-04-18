import type { Action, Episode, PolymarketOddsAction } from '../engine/types';
import { PolymarketClient } from './PolymarketClient';

export function isLiveMode(): boolean {
  if (typeof window !== 'undefined') {
    const url = new URLSearchParams(window.location.search);
    if (url.get('live') === '1') return true;
  }
  return import.meta.env.VITE_POLYMARKET_LIVE === '1';
}

function isPolymarket(a: Action): a is PolymarketOddsAction {
  return a.type === 'polymarket-odds';
}

/**
 * Replace baked Polymarket payloads with live Gamma data, keyed by slug.
 * On any failure, returns the original episode — demo stays offline-safe.
 */
export async function enrichEpisodeWithLivePolymarket(ep: Episode): Promise<Episode> {
  const pmActions = ep.actions.filter(isPolymarket);
  if (pmActions.length === 0) return ep;

  const slugs = [...new Set(pmActions.flatMap((a) => a.data.markets.map((m) => m.slug)))];
  const client = new PolymarketClient();

  try {
    const live = await client.fetchMarkets({ slugs, includeHistory: true });
    if (live.length === 0) return ep;

    const bySlug = new Map(live.map((m) => [m.slug, m]));
    const now = new Date().toISOString();
    const rewritten: Action[] = ep.actions.map((a) => {
      if (!isPolymarket(a)) return a;
      return {
        ...a,
        data: {
          ...a.data,
          asOf: now,
          markets: a.data.markets.map((m) => {
            const liveM = bySlug.get(m.slug);
            if (!liveM) return m;
            // Preserve the baked question if live payload omits it (slug-only authoring).
            return { ...liveM, question: liveM.question || m.question };
          }),
        },
      };
    });
    return { ...ep, actions: rewritten };
  } catch {
    return ep;
  }
}
