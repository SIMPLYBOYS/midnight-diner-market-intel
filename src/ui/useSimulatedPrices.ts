import { useEffect, useState } from 'react';
import type { MarketTicker } from '../engine/types';

const JITTER_MS = 600;
const JITTER_AMPLITUDE = 0.0005; // ±0.05% wiggle around the authored price

/**
 * Simulated "live" prices for a ticker marquee: each ticker's displayed
 * price walks ±0.05% around its authored value every 600ms so the tape
 * feels alive without misrepresenting the day's real move.
 *
 * State holds only the random FACTORS; the displayed price is derived at
 * render time as `authored price × factor`. That means a ticker update
 * (new authored price) shows immediately — no reset effect needed, which
 * is also what keeps this clear of react-hooks/set-state-in-effect.
 *
 * Tickers with price 0 (unpriced single stocks, holiday markers) stay 0;
 * callers render those as "—".
 */
export function useSimulatedPrices(tickers: MarketTicker[]): number[] {
  const [factors, setFactors] = useState<number[]>([]);

  useEffect(() => {
    if (tickers.length === 0) return;
    const id = setInterval(() => {
      setFactors(tickers.map(() => 1 + (Math.random() - 0.5) * 2 * JITTER_AMPLITUDE));
    }, JITTER_MS);
    return () => clearInterval(id);
  }, [tickers]);

  return tickers.map((t, i) => (t.price === 0 ? 0 : t.price * (factors[i] ?? 1)));
}
