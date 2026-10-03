// Shared CRT-themed chart primitives. Consumed by MarketDashboard and PolymarketOdds.

export function AnimatedLineChart({
  data,
  color = '#4488cc',
  width = 220,
  height = 70,
}: {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
}) {
  if (data.length < 2) return <svg width={width} height={height} />;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) =>
    `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * height * 0.85 - 5}`
  ).join(' ');

  const areaPoints = `0,${height} ${points} ${width},${height}`;
  const gradId = `grad-${color.replace('#', '')}-${width}-${height}`;

  const lastX = width;
  const lastY = height - ((data[data.length - 1] - min) / range) * height * 0.85 - 5;

  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradId})`}>
        <animate attributeName="opacity" from="0.5" to="1" dur="0.6s" fill="freeze" />
      </polygon>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <animate attributeName="stroke-dashoffset" from="600" to="0" dur="0.8s" fill="freeze" />
      </polyline>
      <circle cx={lastX} cy={lastY} r="3" fill={color}>
        <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function BarChart({ data, color = '#4488cc' }: { data: number[]; color?: string }) {
  const w = 100, h = 60;
  const max = Math.max(...data, 1);
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
          >
            <animate attributeName="height" from="0" to={barH} dur="0.5s" fill="freeze" />
            <animate attributeName="y" from={h} to={h - barH} dur="0.5s" fill="freeze" />
          </rect>
        );
      })}
    </svg>
  );
}

export function DonutChart({
  value,
  color = '#e6a23c',
  size = 60,
  radius = 22,
  stroke = 5,
  label,
}: {
  value: number;
  color?: string;
  size?: number;
  radius?: number;
  stroke?: number;
  /** Custom center text (e.g. "YES 67%"). Defaults to `${value}%`. */
  label?: string;
}) {
  const circ = 2 * Math.PI * radius;
  const filled = circ * (value / 100);
  const center = size / 2;
  const text = label ?? `${value}%`;

  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      <circle cx={center} cy={center} r={radius} fill="none" stroke="#2a2a3a" strokeWidth={stroke} />
      <circle
        cx={center} cy={center} r={radius}
        fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${filled} ${circ - filled}`}
        strokeDashoffset={circ * 0.25}
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from={`0 ${circ}`}
          to={`${filled} ${circ - filled}`}
          dur="0.8s"
          fill="freeze"
        />
      </circle>
      <text
        x={center}
        y={center + 4}
        textAnchor="middle"
        fill="#ddd"
        fontSize={size > 80 ? '13' : '11'}
        fontFamily="monospace"
      >
        {text}
      </text>
    </svg>
  );
}

export function HorizontalBars({ items }: { items: { label: string; value: number; color: string }[] }) {
  const max = Math.max(...items.map(i => i.value), 1);
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
              transition: 'width 0.8s ease-out',
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

export function CrtOverlay() {
  return (
    <div style={styles.crtOverlay} aria-hidden="true">
      <div style={styles.scanlines} />
      <div style={styles.crtVignette} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  crtOverlay: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 10,
    borderRadius: '6px',
    overflow: 'hidden',
  },
  scanlines: {
    position: 'absolute',
    inset: 0,
    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
    animation: 'scanlineScroll 8s linear infinite',
  },
  crtVignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)',
  },
};
