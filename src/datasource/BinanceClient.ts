/**
 * Minimal Binance USDS-M futures public market-data client.
 *
 * Used for stock-perpetual price/24h-change snapshots (NVDA, TSLA, AAPL, ...).
 * Public endpoints — no auth, no API key. The futures base is `fapi.binance.com`,
 * distinct from spot's `api.binance.com` / `data-api.binance.vision`.
 *
 * Failures (network / non-2xx / unparseable / aborted) return null. The caller
 * decides whether to skip that symbol — typical pattern is "keep the baked
 * value." Geographic blocks (US IPs) surface as 451/403; same fallback path.
 */

const FUTURES_BASE = 'https://fapi.binance.com/fapi/v1';

interface Binance24hr {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}

export interface BinanceTickerSnapshot {
  symbol: string;        // Binance symbol, e.g. NVDAUSDT
  price: number;
  changePercent: number; // already a percent, e.g. -4.18
}

export interface FetchOptions {
  symbols: string[];
  signal?: AbortSignal;
}

export class BinanceClient {
  async fetchStockTickers(opts: FetchOptions): Promise<Map<string, BinanceTickerSnapshot>> {
    const results = await Promise.all(
      opts.symbols.map((s) => this.fetchOne(s, opts.signal)),
    );
    const map = new Map<string, BinanceTickerSnapshot>();
    for (const r of results) {
      if (r) map.set(r.symbol, r);
    }
    return map;
  }

  private async fetchOne(symbol: string, signal?: AbortSignal): Promise<BinanceTickerSnapshot | null> {
    const url = `${FUTURES_BASE}/ticker/24hr?symbol=${encodeURIComponent(symbol)}`;
    let res: Response;
    try {
      res = await fetch(url, { signal });
    } catch {
      return null;
    }
    if (!res.ok) return null;

    const data = (await res.json().catch(() => null)) as Binance24hr | null;
    if (!data || typeof data.lastPrice !== 'string') return null;

    const price = Number(data.lastPrice);
    const changePercent = Number(data.priceChangePercent);
    if (!Number.isFinite(price) || !Number.isFinite(changePercent)) return null;

    return { symbol: data.symbol, price, changePercent };
  }
}
