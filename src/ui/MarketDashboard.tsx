import { useEffect, useState } from 'react';
import { eventBus } from '../engine/EventBus';

// ── Mini chart components ───────────────────────────────────────

function LineChart({ data, color = '#4488cc' }: { data: number[]; color?: string }) {
  const w = 220, h = 70;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) =>
    `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h * 0.85 - 5}`
  ).join(' ');

  const areaPoints = `0,${h} ${points} ${w},${h}`;

  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${color})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function BarChart({ data, color = '#4488cc' }: { data: number[]; color?: string }) {
  const w = 100, h = 60;
  const max = Math.max(...data);
  const barW = w / data.length - 2;

  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      {data.map((v, i) => {
        const barH = (v / max) * h * 0.85;
        return (
          <rect
            key={i}
            x={i * (barW + 2) + 1}
            y={h - barH}
            width={barW}
            height={barH}
            fill={color}
            opacity={0.6 + (i / data.length) * 0.4}
            rx={1}
          />
        );
      })}
    </svg>
  );
}

function DonutChart({ value, color = '#e6a23c' }: { value: number; color?: string }) {
  const r = 22, stroke = 5;
  const circ = 2 * Math.PI * r;
  const filled = circ * (value / 100);

  return (
    <svg width={60} height={60} style={{ display: 'block' }}>
      <circle cx={30} cy={30} r={r} fill="none" stroke="#2a2a3a" strokeWidth={stroke} />
      <circle
        cx={30} cy={30} r={r}
        fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${filled} ${circ - filled}`}
        strokeDashoffset={circ * 0.25}
        strokeLinecap="round"
      />
      <text x={30} y={33} textAnchor="middle" fill="#ddd" fontSize="11" fontFamily="monospace">
        {value}%
      </text>
    </svg>
  );
}

function HorizontalBars({ items }: { items: { label: string; value: number; color: string }[] }) {
  const max = Math.max(...items.map(i => i.value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '9px', color: '#888', width: '40px', textAlign: 'right', fontFamily: 'monospace' }}>
            {item.label}
          </span>
          <div style={{ flex: 1, height: '8px', background: '#1a1a2a', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              width: `${(item.value / max) * 100}%`,
              height: '100%',
              background: item.color,
              borderRadius: '4px',
              opacity: 0.7,
            }} />
          </div>
          <span style={{ fontSize: '9px', color: '#aaa', width: '30px', fontFamily: 'monospace' }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Sample data ─────────────────────────────────────────────────

const PRICE_DATA = [420, 435, 428, 445, 460, 452, 470, 465, 480, 475, 490, 485, 500, 492, 488];
const VOLUME_DATA = [32, 45, 28, 55, 40, 62, 38, 50, 44, 58, 35, 48];
const SECTOR_DATA = [
  { label: 'Tech', value: 1580, color: '#4488cc' },
  { label: 'Finance', value: 1220, color: '#44aa66' },
  { label: 'Energy', value: 890, color: '#cc8844' },
  { label: 'Health', value: 760, color: '#aa4488' },
  { label: 'Retail', value: 540, color: '#6644aa' },
];

// ── Main Dashboard ──────────────────────────────────────────────

export function MarketDashboard() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const onDialogue = () => {
      setHighlight(true);
      setTimeout(() => setHighlight(false), 600);
    };
    eventBus.on('dialogue:show', onDialogue);
    return () => eventBus.off('dialogue:show', onDialogue);
  }, []);

  return (
    <div style={{
      ...styles.dashboard,
      borderColor: highlight ? '#e6a23c44' : '#2a2a3a',
    }}>
      <div style={styles.header}>
        <span style={styles.title}>市場情報總覽</span>
        <div style={styles.tabs}>
          <span style={styles.tabActive}>即時數據</span>
          <span style={styles.tab}>趨勢分析</span>
          <span style={styles.tab}>風險評估</span>
        </div>
      </div>

      <div style={styles.grid}>
        {/* Line chart card */}
        <div style={{ ...styles.card, gridColumn: 'span 2' }}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>價格走勢</span>
            <span style={styles.cardBadge}>即時更新 ↻</span>
          </div>
          <LineChart data={PRICE_DATA} color="#4488cc" />
        </div>

        {/* Donut chart card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>波動率</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DonutChart value={34} color="#e6a23c" />
            <div style={{ fontSize: '9px', color: '#888', fontFamily: 'monospace', lineHeight: 1.6 }}>
              <div>VIX <span style={{ color: '#ee4444' }}>↑ 2.3</span></div>
              <div>RSI <span style={{ color: '#22cc55' }}>52.1</span></div>
              <div>Beta <span style={{ color: '#aaa' }}>1.12</span></div>
            </div>
          </div>
        </div>

        {/* Volume bar chart */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>成交量分佈</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <span style={styles.toggleActive}>日</span>
              <span style={styles.toggle}>週</span>
            </div>
          </div>
          <BarChart data={VOLUME_DATA} color="#44aa88" />
        </div>

        {/* Sector bars */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>板塊資金流</span>
          </div>
          <HorizontalBars items={SECTOR_DATA} />
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  dashboard: {
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
    marginBottom: '10px',
    paddingBottom: '8px',
    borderBottom: '1px solid #2a2a3a',
  },
  title: {
    color: '#ddd',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  tabs: {
    display: 'flex',
    gap: '4px',
  },
  tabActive: {
    fontSize: '9px',
    padding: '2px 8px',
    background: '#2a2a4a',
    color: '#e6a23c',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  tab: {
    fontSize: '9px',
    padding: '2px 8px',
    color: '#666',
    cursor: 'pointer',
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
  toggleActive: {
    fontSize: '8px',
    padding: '1px 6px',
    background: '#2a3a4a',
    color: '#4488cc',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  toggle: {
    fontSize: '8px',
    padding: '1px 6px',
    color: '#555',
    cursor: 'pointer',
  },
};
