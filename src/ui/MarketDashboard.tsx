import { useEffect, useState, useRef, useCallback } from 'react';
import { eventBus } from '../engine/EventBus';
import type { MarketDataPayload, MarketTicker } from '../engine/types';
import {
  AnimatedLineChart,
  BarChart,
  DonutChart,
  HorizontalBars,
  CrtOverlay,
} from './charts/CrtCharts';
import { PolymarketOdds } from './PolymarketOdds';

// ── Ticker row (marquee with simulated price jitter) ────────────

const TICKER_JITTER_MS = 600;
const TICKER_JITTER_AMPLITUDE = 0.0005; // ±0.05% wiggle around the authored price

/**
 * Strip the parenthesized annotation episodes attach to ticker symbols.
 * Episode scripts write things like `"Kospi（6/1 收、再破紀錄）"` so the label
 * carries context for the sectors chart, but the marquee row only has room
 * for the short identifier — keep "Kospi", drop the rest.
 */
function cleanSymbol(s: string): string {
  return s.replace(/\s*[（(].*$/u, '').trim() || s;
}

function TickerRow({ tickers }: { tickers: MarketTicker[] }) {
  // Per-ticker simulated price — small random walk around the authored value
  // so the tape feels alive without misrepresenting the daily move.
  const [simPrices, setSimPrices] = useState<number[]>(() => tickers.map((t) => t.price));

  useEffect(() => {
    setSimPrices(tickers.map((t) => t.price));
  }, [tickers]);

  useEffect(() => {
    if (tickers.length === 0) return;
    const id = setInterval(() => {
      setSimPrices((prev) =>
        prev.map((_, i) => {
          const base = tickers[i]?.price ?? 0;
          if (base === 0) return 0;
          return base * (1 + (Math.random() - 0.5) * 2 * TICKER_JITTER_AMPLITUDE);
        }),
      );
    }, TICKER_JITTER_MS);
    return () => clearInterval(id);
  }, [tickers]);

  if (tickers.length === 0) {
    return <div style={styles.tickerMarquee} />;
  }

  const renderItem = (t: MarketTicker, key: number, idx: number) => {
    const up = t.change >= 0;
    const displayPrice = simPrices[idx] ?? t.price;
    return (
      <span key={key} style={styles.tickerItem}>
        <span style={styles.tickerSymbol}>{cleanSymbol(t.symbol)}</span>
        <span style={styles.tickerPrice}>
          {displayPrice > 0 ? displayPrice.toFixed(2) : '—'}
        </span>
        <span style={{ ...styles.tickerChange, color: up ? '#22cc55' : '#ee4444' }}>
          {up ? '+' : ''}
          {t.change.toFixed(1)}%
        </span>
      </span>
    );
  };

  // Key on the symbol list so React remounts the track when the ticker set
  // changes — the keyframe restarts at offset 0 instead of continuing from
  // a stale percentage of a now-different track width.
  const trackKey = tickers.map((t) => t.symbol).join('|');

  return (
    <div style={styles.tickerMarquee}>
      <div key={trackKey} style={styles.tickerTrack}>
        {/* Two copies side-by-side; CSS keyframe translates -50% for seamless loop. */}
        {tickers.map((t, i) => renderItem(t, i, i))}
        {tickers.map((t, i) => renderItem(t, i + tickers.length, i))}
      </div>
    </div>
  );
}

// ── Headline flash ──────────────────────────────────────────────

function Headline({ text }: { text: string }) {
  return (
    <div style={styles.headline}>
      <span style={styles.headlineBadge}>ALERT</span>
      <span style={styles.headlineText}>{text}</span>
    </div>
  );
}

// ── Default data ────────────────────────────────────────────────

const DEFAULT_PRICE_HISTORY = [420, 435, 428, 445, 460, 452, 470, 465, 480, 475, 490, 485, 500, 492, 488];
const DEFAULT_VOLUME_HISTORY = [32, 45, 28, 55, 40, 62, 38, 50, 44, 58, 35, 48];
const DEFAULT_TICKERS: MarketTicker[] = [
  { symbol: 'NVDA', price: 875.30, change: 0.0 },
  { symbol: 'AAPL', price: 198.11, change: 0.0 },
  { symbol: 'TSLA', price: 241.55, change: 0.0 },
  { symbol: 'MSFT', price: 422.86, change: 0.0 },
];
const DEFAULT_SECTORS = [
  { label: 'Tech', value: 1580, color: '#4488cc' },
  { label: 'Finance', value: 1220, color: '#44aa66' },
  { label: 'Energy', value: 890, color: '#cc8844' },
  { label: 'Health', value: 760, color: '#aa4488' },
  { label: 'Retail', value: 540, color: '#6644aa' },
];

// ── Main Dashboard ──────────────────────────────────────────────

export function MarketDashboard() {
  const [tickers, setTickers] = useState<MarketTicker[]>(DEFAULT_TICKERS);
  const [priceHistory, setPriceHistory] = useState<number[]>(DEFAULT_PRICE_HISTORY);
  const [volumeHistory, setVolumeHistory] = useState<number[]>(DEFAULT_VOLUME_HISTORY);
  const [volatility, setVolatility] = useState(34);
  const [vix, setVix] = useState(18.5);
  const [rsi, setRsi] = useState(52.1);
  const [beta, setBeta] = useState(1.12);
  const [sectors, setSectors] = useState(DEFAULT_SECTORS);
  const [headline, setHeadline] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const headlineTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMarketUpdate = useCallback((payload: MarketDataPayload) => {
    // Flash effect on any update
    setFlash(true);
    setTimeout(() => setFlash(false), 300);

    if (payload.tickers) {
      // Each episode's market-data is a complete snapshot — replace rather
      // than merge, otherwise the default NVDA/AAPL/... defaults accumulate
      // with the episode's tickers and the marquee track silently widens
      // mid-animation (the keyframe -50% endpoint shifts → visual "snap").
      setTickers(payload.tickers);
    }
    if (payload.priceHistory) {
      setPriceHistory((prev) => [...prev.slice(-10), ...payload.priceHistory!]);
    }
    if (payload.volumeHistory) {
      setVolumeHistory((prev) => [...prev.slice(-8), ...payload.volumeHistory!]);
    }
    if (payload.volatility !== undefined) setVolatility(payload.volatility);
    if (payload.vix !== undefined) setVix(payload.vix);
    if (payload.rsi !== undefined) setRsi(payload.rsi);
    if (payload.beta !== undefined) setBeta(payload.beta);
    if (payload.sectors) setSectors(payload.sectors);
    if (payload.headline) {
      setHeadline(payload.headline);
      if (headlineTimer.current) clearTimeout(headlineTimer.current);
      headlineTimer.current = setTimeout(() => setHeadline(null), 5000);
    }
  }, []);

  useEffect(() => {
    eventBus.on('market:update', handleMarketUpdate);
    return () => {
      eventBus.off('market:update', handleMarketUpdate);
      if (headlineTimer.current) clearTimeout(headlineTimer.current);
    };
  }, [handleMarketUpdate]);

  const vixUp = vix > 20;

  return (
    <div style={{
      ...styles.dashboard,
      borderColor: flash ? '#e6a23c66' : '#2a2a3a',
    }}>
      <CrtOverlay />

      <div style={styles.header}>
        <span style={styles.title}>市場情報總覽</span>
        <div style={styles.statusDot}>
          <span style={styles.liveDot} />
          <span style={{ fontSize: '9px', color: '#22cc55' }}>LIVE</span>
        </div>
      </div>

      {/* Ticker strip */}
      <TickerRow tickers={tickers} />

      {/* Breaking headline */}
      {headline && <Headline text={headline} />}

      <div style={styles.grid}>
        {/* Line chart card */}
        <div style={{ ...styles.card, gridColumn: 'span 2' }}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>價格走勢</span>
            <span style={styles.cardBadge}>即時更新 ↻</span>
          </div>
          <AnimatedLineChart data={priceHistory} color="#4488cc" />
        </div>

        {/* Donut chart card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>波動率</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DonutChart value={volatility} color="#e6a23c" />
            <div style={{ fontSize: '9px', color: '#888', fontFamily: 'monospace', lineHeight: 1.6 }}>
              <div>VIX <span style={{ color: vixUp ? '#ee4444' : '#22cc55' }}>
                {vixUp ? '↑' : '↓'} {vix.toFixed(1)}
              </span></div>
              <div>RSI <span style={{ color: rsi > 70 ? '#ee4444' : rsi < 30 ? '#22cc55' : '#aaa' }}>
                {rsi.toFixed(1)}
              </span></div>
              <div>Beta <span style={{ color: '#aaa' }}>{beta.toFixed(2)}</span></div>
            </div>
          </div>
        </div>

        {/* Volume bar chart */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>成交量分佈</span>
          </div>
          <BarChart data={volumeHistory} color="#44aa88" />
        </div>

        {/* Sector bars */}
        <div style={{ ...styles.card, gridColumn: 'span 2' }}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>板塊資金流</span>
          </div>
          <HorizontalBars items={sectors} />
        </div>

        {/* Polymarket prediction odds */}
        <div style={{ ...styles.card, gridColumn: 'span 2' }}>
          <PolymarketOdds />
        </div>
      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  dashboard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: '#14141e',
    border: '1px solid #2a2a3a',
    borderRadius: '6px',
    padding: '10px',
    fontFamily: "'Courier New', monospace",
    overflow: 'hidden',
    transition: 'border-color 0.3s',
    height: '100%',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    paddingBottom: '6px',
    borderBottom: '1px solid #2a2a3a',
  },
  title: {
    color: '#ddd',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  statusDot: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  liveDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#22cc55',
    boxShadow: '0 0 6px #22cc55',
    animation: 'pulse 2s infinite',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    flex: 1,
  },
  card: {
    background: '#1a1a28',
    border: '1px solid #2a2a3a',
    borderRadius: '4px',
    padding: '8px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  cardTitle: {
    fontSize: '10px',
    color: '#aaa',
    fontWeight: 'bold',
  },
  cardBadge: {
    fontSize: '8px',
    color: '#4488cc',
    background: '#1a2a3a',
    padding: '1px 6px',
    borderRadius: '3px',
  },

  // Ticker strip — horizontal marquee with seamless loop.
  // The outer box clips; the inner track holds two copies of the ticker list
  // and is animated by `marqueeScroll` (App.css) translating 0 → -50%, so as
  // the first copy leaves the left edge the second copy slides into place.
  tickerMarquee: {
    overflow: 'hidden',
    padding: '4px 0 6px',
    borderBottom: '1px solid #2a2a3a',
    marginBottom: '8px',
    minWidth: 0,
  },
  tickerTrack: {
    display: 'flex',
    width: 'max-content',
    whiteSpace: 'nowrap',
    animation: 'marqueeScroll 40s linear infinite',
  },
  tickerItem: {
    display: 'inline-flex',
    gap: '6px',
    fontSize: '10px',
    paddingRight: '24px',
    flexShrink: 0,
  },
  tickerSymbol: {
    color: '#aaa',
    fontWeight: 'bold',
  },
  tickerPrice: {
    color: '#ddd',
  },
  tickerChange: {
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },

  // Headline
  headline: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 8px',
    marginBottom: '8px',
    background: '#2a1a1a',
    border: '1px solid #ee444466',
    borderRadius: '4px',
    animation: 'headlineSlide 0.4s ease-out',
  },
  headlineBadge: {
    fontSize: '8px',
    fontWeight: 'bold',
    color: '#fff',
    background: '#ee4444',
    padding: '1px 5px',
    borderRadius: '2px',
    flexShrink: 0,
  },
  headlineText: {
    fontSize: '10px',
    color: '#ee8888',
    fontFamily: "'Courier New', monospace",
  },
};
