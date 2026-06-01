import { useEffect, useState, useCallback } from 'react';
import { eventBus } from '../engine/EventBus';
import { audioManager } from '../audio/AudioManager';
import type { MarketTicker } from '../engine/types';

// ── Ticker data (updated via market:update) ─────────────────────

const DEFAULT_TICKERS: MarketTicker[] = [
  { symbol: 'NVDA', price: 875.30, change: 0.0 },
  { symbol: 'AAPL', price: 198.11, change: 0.0 },
  { symbol: 'TSLA', price: 241.55, change: 0.0 },
  { symbol: 'MSFT', price: 422.86, change: 0.0 },
];

const MANUAL_MODE_KEY = 'midnight-diner.manualMode';

export function PlaybackBar() {
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused' | 'finished'>('idle');
  const [actionIdx, setActionIdx] = useState(0);
  const [totalActions, setTotalActions] = useState(0);
  const [muted, setMuted] = useState(false);
  const [tickers, setTickers] = useState<MarketTicker[]>(DEFAULT_TICKERS);
  const [manual, setManual] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(MANUAL_MODE_KEY) === '1';
  });

  useEffect(() => {
    const onStarted = ({ totalActions: total }: { episodeId: string; totalActions: number }) => {
      setStatus('playing');
      setActionIdx(0);
      setTotalActions(total);
    };
    const onAction = ({ index }: { index: number }) => setActionIdx(index);
    const onPaused = () => setStatus('paused');
    const onResumed = () => setStatus('playing');
    const onFinished = () => setStatus('finished');
    const onMarket = (payload: { tickers?: MarketTicker[] }) => {
      if (payload.tickers) {
        // Replace, don't merge — defaults shouldn't accumulate with the
        // episode's tickers (would widen the marquee mid-animation).
        setTickers(payload.tickers);
      }
    };

    eventBus.on('timeline:started', onStarted);
    eventBus.on('timeline:action', onAction);
    eventBus.on('timeline:paused', onPaused);
    eventBus.on('timeline:resumed', onResumed);
    eventBus.on('timeline:finished', onFinished);
    eventBus.on('market:update', onMarket);

    return () => {
      eventBus.off('timeline:started', onStarted);
      eventBus.off('timeline:action', onAction);
      eventBus.off('timeline:paused', onPaused);
      eventBus.off('timeline:resumed', onResumed);
      eventBus.off('timeline:finished', onFinished);
      eventBus.off('market:update', onMarket);
    };
  }, []);

  const handlePlayPause = useCallback(() => {
    if (status === 'playing') {
      eventBus.emit('player:pause');
    } else if (status === 'paused') {
      eventBus.emit('player:resume');
    } else if (status === 'finished') {
      eventBus.emit('player:restart');
    }
  }, [status]);

  const handleMute = useCallback(() => {
    const nowMuted = audioManager.toggleMute();
    setMuted(nowMuted);
  }, []);

  // Broadcast manual-mode to the timeline player whenever it changes
  // (including the initial hydration from localStorage).
  useEffect(() => {
    eventBus.emit('player:set-manual-mode', { enabled: manual });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(MANUAL_MODE_KEY, manual ? '1' : '0');
    }
  }, [manual]);

  const handleToggleManual = useCallback(() => {
    setManual((v) => !v);
  }, []);

  const progress = totalActions > 0 ? ((actionIdx + 1) / totalActions) * 100 : 0;

  return (
    <div style={styles.bar}>
      {/* Controls */}
      <div style={styles.controls}>
        <button onClick={handlePlayPause} style={styles.btn} title={
          status === 'playing' ? 'Pause' : status === 'paused' ? 'Resume' : 'Restart'
        }>
          {status === 'playing' ? '⏸' : status === 'finished' ? '↻' : '▶'}
        </button>
        <button onClick={handleMute} style={styles.btn} title={muted ? 'Unmute' : 'Mute'}>
          {muted ? '🔇' : '🔊'}
        </button>
        <button
          onClick={handleToggleManual}
          style={{
            ...styles.btn,
            width: 'auto',
            padding: '0 6px',
            color: manual ? '#e6a23c' : '#888',
            borderColor: manual ? '#e6a23c' : '#333',
            fontSize: '10px',
          }}
          title={manual ? 'Manual: click dialogue to advance' : 'Auto: dialogue advances automatically'}
        >
          {manual ? 'MANUAL' : 'AUTO'}
        </button>
      </div>

      {/* Progress */}
      <div style={styles.progressSection}>
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
        <span style={styles.counter}>
          {String(actionIdx + 1).padStart(2, '0')}/{String(totalActions).padStart(2, '0')}
        </span>
      </div>

      {/* Divider */}
      <span style={styles.divider}>│</span>

      {/* Mini ticker — scrolling marquee */}
      <PlaybackTicker tickers={tickers} />
    </div>
  );
}

// ── PlaybackBar ticker marquee ──────────────────────────────────

const TICKER_JITTER_MS = 600;
const TICKER_JITTER_AMPLITUDE = 0.0005;

/** Strip the parenthesized annotation episode scripts attach to symbols. */
function cleanSymbol(s: string): string {
  return s.replace(/\s*[（(].*$/u, '').trim() || s;
}

function PlaybackTicker({ tickers }: { tickers: MarketTicker[] }) {
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

  if (tickers.length === 0) return <div style={styles.ticker} />;

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

  // See MarketDashboard: remount track on ticker change so keyframe restarts.
  const trackKey = tickers.map((t) => t.symbol).join('|');

  return (
    <div style={styles.ticker}>
      <div key={trackKey} style={styles.tickerTrack}>
        {tickers.map((t, i) => renderItem(t, i, i))}
        {tickers.map((t, i) => renderItem(t, i + tickers.length, i))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bar: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 12px',
    background: '#12121e',
    borderTop: '1px solid #333',
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    color: '#888',
    height: '32px',
    boxSizing: 'border-box',
    gap: '10px',
  },
  controls: {
    display: 'flex',
    gap: '4px',
    flexShrink: 0,
  },
  btn: {
    background: 'transparent',
    border: '1px solid #333',
    borderRadius: '4px',
    color: '#aaa',
    fontSize: '12px',
    width: '26px',
    height: '22px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    transition: 'border-color 0.2s',
  },
  progressSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: '0 0 160px',
  },
  progressTrack: {
    flex: 1,
    height: '4px',
    background: '#2a2a3a',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: '#e6a23c',
    borderRadius: '2px',
    transition: 'width 0.3s ease-out',
  },
  counter: {
    fontSize: '9px',
    color: '#666',
    fontFamily: "'Courier New', monospace",
    flexShrink: 0,
  },
  divider: {
    color: '#333',
    flexShrink: 0,
  },
  // Marquee container — clips the wide track to the available width.
  ticker: {
    flex: 1,
    overflow: 'hidden',
    minWidth: 0,
  },
  // Inner track — two ticker copies side by side, animated by `marqueeScroll`
  // (App.css) translating 0 → -50% so the loop is seamless.
  tickerTrack: {
    display: 'flex',
    width: 'max-content',
    whiteSpace: 'nowrap',
    animation: 'marqueeScroll 35s linear infinite',
  },
  tickerItem: {
    display: 'inline-flex',
    gap: '4px',
    paddingRight: '20px',
    flexShrink: 0,
  },
  tickerSymbol: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: '10px',
  },
  tickerPrice: {
    color: '#ccc',
    fontSize: '10px',
  },
  tickerChange: {
    fontWeight: 'bold',
    fontSize: '10px',
    transition: 'color 0.3s',
  },
};
