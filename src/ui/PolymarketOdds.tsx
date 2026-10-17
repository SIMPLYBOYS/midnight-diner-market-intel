import { useCallback, useEffect, useState } from 'react';
import { eventBus } from '../engine/EventBus';
import type { PolymarketMarket, PolymarketOddsPayload } from '../engine/types';
import { AnimatedLineChart, DonutChart, HorizontalBars } from './charts/CrtCharts';

function formatEndDate(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function formatVolume(v?: number): string | null {
  if (v === undefined) return null;
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v.toFixed(0)}`;
}

function formatAsOf(iso?: string): string {
  if (!iso) return 'SNAPSHOT · baked';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'SNAPSHOT · baked';
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `LIVE · fetched ${hh}:${mm}`;
}

function truncate(s: string, n: number): string {
  return s.length > n ? `${s.slice(0, n - 1)}…` : s;
}

function oddsColor(yes: number): string {
  return yes >= 0.5 ? '#22cc55' : '#ee4444';
}

export function PolymarketOdds() {
  const [markets, setMarkets] = useState<PolymarketMarket[]>([]);
  const [highlightSlug, setHighlightSlug] = useState<string | undefined>();
  const [asOf, setAsOf] = useState<string | undefined>();
  const [flash, setFlash] = useState(false);

  const handle = useCallback((payload: PolymarketOddsPayload) => {
    setFlash(true);
    setTimeout(() => setFlash(false), 300);
    setMarkets(payload.markets);
    setHighlightSlug(payload.highlightSlug);
    setAsOf(payload.asOf);
  }, []);

  useEffect(() => {
    eventBus.on('polymarket:update', handle);
    return () => eventBus.off('polymarket:update', handle);
  }, [handle]);

  if (markets.length === 0) {
    return (
      <div style={styles.empty}>
        <div style={styles.header}>
          <span style={styles.title}>預測市場 · Polymarket</span>
          <span style={styles.chipIdle}>STAND-BY</span>
        </div>
        <div style={styles.emptyText}>
          賭盤還沒開。等劇情推進到 Polymarket 段落，這裡會出現即時機率。
        </div>
      </div>
    );
  }

  const highlight =
    markets.find((m) => m.slug === highlightSlug) ?? markets[0];
  const peers = markets.filter((m) => m.slug !== highlight.slug);
  const yesPct = Math.round(highlight.yesProbability * 100);
  const isLive = Boolean(asOf);

  return (
    <div
      style={{
        ...styles.container,
        borderColor: flash ? '#e6a23c66' : 'transparent',
      }}
    >
      <div style={styles.header}>
        <span style={styles.title}>預測市場 · Polymarket</span>
        <span style={isLive ? styles.chipLive : styles.chipSnapshot}>
          {formatAsOf(asOf)}
        </span>
      </div>

      <div style={styles.spotlightRow}>
        <DonutChart
          value={yesPct}
          color={oddsColor(highlight.yesProbability)}
          size={86}
          radius={32}
          stroke={7}
          label={`YES ${yesPct}%`}
        />
        <div style={styles.spotlightMeta}>
          <div style={styles.spotlightQuestion}>
            {truncate(highlight.question, 64)}
          </div>
          <div style={styles.chipRow}>
            {formatEndDate(highlight.endDate) && (
              <span style={styles.metaChip}>ends {formatEndDate(highlight.endDate)}</span>
            )}
            {formatVolume(highlight.volume) && (
              <span style={styles.metaChip}>vol {formatVolume(highlight.volume)}</span>
            )}
          </div>
          {highlight.history && highlight.history.length >= 2 && (
            <div style={{ marginTop: '4px' }}>
              <AnimatedLineChart
                data={highlight.history.map((h) => Math.round(h.p * 100))}
                color={oddsColor(highlight.yesProbability)}
                width={240}
                height={42}
              />
            </div>
          )}
        </div>
      </div>

      {peers.length > 0 && (
        <div style={styles.peersSection}>
          <div style={styles.peersLabel}>其他合約</div>
          <HorizontalBars
            items={peers.map((m) => ({
              label: truncate(m.question, 14),
              value: Math.round(m.yesProbability * 100),
              color: oddsColor(m.yesProbability),
            }))}
          />
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  empty: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  emptyText: {
    fontSize: '10px',
    color: '#666',
    fontStyle: 'italic',
    fontFamily: "'Courier New', monospace",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    border: '1px solid transparent',
    borderRadius: '4px',
    padding: '2px',
    transition: 'border-color 0.3s',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '10px',
    color: '#aaa',
    fontWeight: 'bold',
  },
  chipLive: {
    fontSize: '8px',
    color: '#22cc55',
    background: '#142a1e',
    border: '1px solid #22cc5544',
    padding: '1px 6px',
    borderRadius: '3px',
    fontFamily: 'monospace',
  },
  chipSnapshot: {
    fontSize: '8px',
    color: '#888',
    background: '#1a1a2a',
    border: '1px solid #2a2a3a',
    padding: '1px 6px',
    borderRadius: '3px',
    fontFamily: 'monospace',
  },
  chipIdle: {
    fontSize: '8px',
    color: '#666',
    background: '#1a1a2a',
    border: '1px solid #2a2a3a',
    padding: '1px 6px',
    borderRadius: '3px',
    fontFamily: 'monospace',
  },
  spotlightRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  spotlightMeta: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    minWidth: 0,
  },
  spotlightQuestion: {
    fontSize: '11px',
    color: '#ddd',
    fontFamily: "'Courier New', monospace",
    lineHeight: 1.3,
  },
  chipRow: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  metaChip: {
    fontSize: '8px',
    color: '#4488cc',
    background: '#1a2a3a',
    padding: '1px 6px',
    borderRadius: '3px',
    fontFamily: 'monospace',
  },
  peersSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    borderTop: '1px solid #2a2a3a',
    paddingTop: '6px',
  },
  peersLabel: {
    fontSize: '9px',
    color: '#666',
    fontFamily: 'monospace',
  },
};
