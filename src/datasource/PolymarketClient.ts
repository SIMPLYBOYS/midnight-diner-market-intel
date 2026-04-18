import type { PolymarketHistoryPoint, PolymarketMarket } from '../engine/types';

const GAMMA_BASE = 'https://gamma-api.polymarket.com/markets';
const CLOB_HISTORY = 'https://clob.polymarket.com/prices-history';

interface GammaMarket {
  slug: string;
  question: string;
  outcomes: string[] | string;
  outcomePrices: string[] | string;
  volume?: number;
  volumeNum?: number;
  liquidity?: number;
  liquidityNum?: number;
  endDate?: string;
  clobTokenIds?: string[] | string;
}

interface ClobHistoryResponse {
  history: Array<{ t: number; p: number | string }>;
}

export interface FetchOptions {
  slugs: string[];
  includeHistory?: boolean;
  signal?: AbortSignal;
}

function parseMaybeArray(v: string[] | string | undefined): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  try {
    const parsed = JSON.parse(v);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function parseYes(m: GammaMarket): number {
  const outcomes = parseMaybeArray(m.outcomes);
  const prices = parseMaybeArray(m.outcomePrices);
  const yesIdx = outcomes.findIndex((o) => o.toLowerCase() === 'yes');
  const raw = prices[yesIdx === -1 ? 0 : yesIdx];
  const n = Number(raw);
  return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : 0;
}

export class PolymarketClient {
  async fetchMarkets(opts: FetchOptions): Promise<PolymarketMarket[]> {
    const results = await Promise.all(
      opts.slugs.map((slug) => this.fetchOne(slug, opts)),
    );
    return results.filter((m): m is PolymarketMarket => m !== null);
  }

  private async fetchOne(slug: string, opts: FetchOptions): Promise<PolymarketMarket | null> {
    const url = `${GAMMA_BASE}?slug=${encodeURIComponent(slug)}`;
    let res: Response;
    try {
      res = await fetch(url, { signal: opts.signal });
    } catch {
      return null;
    }
    if (!res.ok) return null;

    const payload: unknown = await res.json().catch(() => null);
    const market = Array.isArray(payload) ? (payload[0] as GammaMarket | undefined) : undefined;
    if (!market) return null;

    const tokenIds = parseMaybeArray(market.clobTokenIds);
    let history: PolymarketHistoryPoint[] | undefined;
    if (opts.includeHistory && tokenIds.length > 0) {
      const h = await this.fetchHistory(tokenIds[0], opts.signal);
      if (h && h.length > 0) history = h;
    }

    return {
      slug: market.slug,
      question: market.question,
      yesProbability: parseYes(market),
      volume: market.volumeNum ?? market.volume,
      liquidity: market.liquidityNum ?? market.liquidity,
      endDate: market.endDate,
      history,
    };
  }

  private async fetchHistory(tokenId: string, signal?: AbortSignal): Promise<PolymarketHistoryPoint[] | null> {
    const url = `${CLOB_HISTORY}?market=${encodeURIComponent(tokenId)}&interval=1w&fidelity=60`;
    let res: Response;
    try {
      res = await fetch(url, { signal });
    } catch {
      return null;
    }
    if (!res.ok) return null;
    const payload = (await res.json().catch(() => null)) as ClobHistoryResponse | null;
    if (!payload || !Array.isArray(payload.history)) return null;
    return payload.history.map((pt) => ({
      t: pt.t,
      p: typeof pt.p === 'string' ? Number(pt.p) : pt.p,
    }));
  }
}
