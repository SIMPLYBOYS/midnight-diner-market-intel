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

export function PlaybackBar() {
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused' | 'finished'>('idle');
  const [actionIdx, setActionIdx] = useState(0);
  const [totalActions, setTotalActions] = useState(0);
  const [muted, setMuted] = useState(false);
  const [tickers, setTickers] = useState<MarketTicker[]>(DEFAULT_TICKERS);

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
        setTickers((prev) => {
          const map = new Map(prev.map(t => [t.symbol, t]));
          for (const t of payload.tickers!) map.set(t.symbol, t);
          return Array.from(map.values());
        });
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

      {/* Mini ticker */}
      <div style={styles.ticker}>
        {tickers.map((t) => {
          const up = t.change >= 0;
          return (
            <span key={t.symbol} style={styles.tickerItem}>
              <span style={styles.tickerSymbol}>{t.symbol}</span>
              <span style={{ ...styles.tickerChange, color: up ? '#22cc55' : '#ee4444' }}>
                {up ? '+' : ''}{t.change.toFixed(1)}%
              </span>
            </span>
          );
        })}
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
  ticker: {
    display: 'flex',
    gap: '12px',
    flex: 1,
    overflow: 'hidden',
  },
  tickerItem: {
    display: 'inline-flex',
    gap: '4px',
    flexShrink: 0,
  },
  tickerSymbol: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: '10px',
  },
  tickerChange: {
    fontWeight: 'bold',
    fontSize: '10px',
    transition: 'color 0.3s',
  },
};
