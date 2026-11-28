import type { Action, Episode, PolymarketOddsAction } from '../engine/types';
import { PolymarketClient } from './PolymarketClient';
import { logger } from '../logger';

/** Give up on live data after this long so a slow API can't stall episode load. */
const LIVE_FETCH_TIMEOUT_MS = 5000;

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
 * On any failure, timeout, or external abort, returns the original episode —
 * the demo stays offline-safe. `externalSignal` lets the caller cancel a
 * stale fetch when the user switches episodes mid-flight.
 */
export async function enrichEpisodeWithLivePolymarket(
  ep: Episode,
  externalSignal?: AbortSignal,
): Promise<Episode> {
  const pmActions = ep.actions.filter(isPolymarket);
  if (pmActions.length === 0) return ep;

  const slugs = [...new Set(pmActions.flatMap((a) => a.data.markets.map((m) => m.slug)))];
  const client = new PolymarketClient();

  // Abort on either the caller's signal or our own timeout.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), LIVE_FETCH_TIMEOUT_MS);
  const onExternalAbort = (): void => controller.abort();
  externalSignal?.addEventListener('abort', onExternalAbort);

  try {
    const live = await client.fetchMarkets({ slugs, includeHistory: true, signal: controller.signal });
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
  } catch (err) {
    logger.warn('live Polymarket enrich failed; falling back to baked payloads', err);
    return ep;
  } finally {
    clearTimeout(timeout);
    externalSignal?.removeEventListener('abort', onExternalAbort);
  }
}
