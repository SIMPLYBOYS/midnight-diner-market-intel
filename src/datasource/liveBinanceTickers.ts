import type { Action, Episode, MarketDataAction, MarketTicker } from '../engine/types';
import { BinanceClient } from './BinanceClient';
import { logger } from '../logger';
import { cleanSymbol } from '../utils/symbols';

/** Give up on live data after this long. */
const LIVE_FETCH_TIMEOUT_MS = 5000;

/**
 * Episode scripts author display names like `"Nvidia（6/5）"` or
 * `"Marvell（6/5、晶片鏈最慘）"`. Strip the parenthesized annotation, lowercase,
 * and look up the matching Binance USDS-M perpetual symbol. Unmapped names
 * fall back to the baked price/change — exactly what we want when an episode
 * references something Binance doesn't trade (Kospi, Nikkei, SoftBank, oil).
 *
 * Keep this map conservative; "if it's not here, fall back" is safer than
 * inferring symbols from fuzzy CJK text.
 */
const NAME_TO_BINANCE: Record<string, string> = {
  // Mega-cap tech
  'nvidia': 'NVDAUSDT',
  'nvda': 'NVDAUSDT',
  'tesla': 'TSLAUSDT',
  'tsla': 'TSLAUSDT',
  'apple': 'AAPLUSDT',
  'aapl': 'AAPLUSDT',
  'microsoft': 'MSFTUSDT',
  'msft': 'MSFTUSDT',
  'amazon': 'AMZNUSDT',
  'amzn': 'AMZNUSDT',
  'google': 'GOOGLUSDT',
  'googl': 'GOOGLUSDT',
  'goog': 'GOOGLUSDT',
  'meta': 'METAUSDT',
  'broadcom': 'AVGOUSDT',
  'avgo': 'AVGOUSDT',
  // Semis often referenced in episodes
  'marvell': 'MRVLUSDT',
  'mrvl': 'MRVLUSDT',
  'micron': 'MUUSDT',
  'mu': 'MUUSDT',
  'amd': 'AMDUSDT',
  // Other names that may surface
  'netflix': 'NFLXUSDT',
  'nflx': 'NFLXUSDT',
  'coinbase': 'COINUSDT',
  'coin': 'COINUSDT',
};

function toBinanceSymbol(displaySymbol: string): string | null {
  return NAME_TO_BINANCE[cleanSymbol(displaySymbol).toLowerCase()] ?? null;
}

function isMarketData(a: Action): a is MarketDataAction {
  return a.type === 'market-data';
}

/**
 * Replace baked stock prices/changes with Binance perpetual snapshots, by
 * symbol mapping. Non-stock tickers (indexes, oil, FX) are passed through
 * unchanged. On any failure / timeout / abort, returns the original episode —
 * the demo stays offline-safe.
 */
export async function enrichEpisodeWithLiveBinance(
  ep: Episode,
  externalSignal?: AbortSignal,
): Promise<Episode> {
  const mdActions = ep.actions.filter(isMarketData);
  if (mdActions.length === 0) return ep;

  // Build display→Binance map from every market-data action's tickers.
  const displayToBinance = new Map<string, string>();
  for (const a of mdActions) {
    for (const t of a.data.tickers ?? []) {
      const b = toBinanceSymbol(t.symbol);
      if (b) displayToBinance.set(t.symbol, b);
    }
  }
  if (displayToBinance.size === 0) return ep;

  const client = new BinanceClient();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), LIVE_FETCH_TIMEOUT_MS);
  const onExternalAbort = (): void => controller.abort();
  externalSignal?.addEventListener('abort', onExternalAbort);

  try {
    const binanceSymbols = [...new Set(displayToBinance.values())];
    const live = await client.fetchStockTickers({ symbols: binanceSymbols, signal: controller.signal });
    if (live.size === 0) return ep;

    const rewritten: Action[] = ep.actions.map((a) => {
      if (!isMarketData(a)) return a;
      const tickers = a.data.tickers;
      if (!tickers || tickers.length === 0) return a;

      const newTickers: MarketTicker[] = tickers.map((t) => {
        const binanceSym = displayToBinance.get(t.symbol);
        if (!binanceSym) return t; // not a mapped stock, keep baked
        const snap = live.get(binanceSym);
        if (!snap) return t;       // fetch failed for this one, keep baked
        return { ...t, price: snap.price, change: snap.changePercent };
      });

      return { ...a, data: { ...a.data, tickers: newTickers } };
    });
    return { ...ep, actions: rewritten };
  } catch (err) {
    logger.warn('live Binance enrich failed; falling back to baked stock prices', err);
    return ep;
  } finally {
    clearTimeout(timeout);
    externalSignal?.removeEventListener('abort', onExternalAbort);
  }
}
