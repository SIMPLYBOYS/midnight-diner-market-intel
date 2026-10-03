import { useEffect, useState } from 'react';
import { eventBus } from '../engine/EventBus';

interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  up: boolean;
}

const TICKER_DATA: TickerItem[] = [
  { symbol: 'NVDA', price: '875.30', change: '-5.2%', up: false },
  { symbol: 'AAPL', price: '198.11', change: '+1.1%', up: true },
  { symbol: 'TSLA', price: '241.55', change: '-2.8%', up: false },
  { symbol: 'MSFT', price: '422.86', change: '+0.4%', up: true },
  { symbol: 'GOOG', price: '155.72', change: '+0.8%', up: true },
  { symbol: 'AMZN', price: '186.40', change: '-0.3%', up: false },
  { symbol: 'META', price: '502.30', change: '+2.1%', up: true },
  { symbol: 'JPM', price: '198.55', change: '-1.5%', up: false },
];

export function HudBar() {
  const [actionIdx, setActionIdx] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onAction = ({ index }: { index: number }) => setActionIdx(index);
    eventBus.on('timeline:action', onAction);
    return () => eventBus.off('timeline:action', onAction);
  }, []);

  // Scrolling ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((o) => o + 1);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const tickerWidth = TICKER_DATA.length * 140;

  return (
    <div style={styles.bar}>
      <div style={styles.left}>
        <span style={styles.label}>ACT</span>
        <span style={styles.value}>{String(actionIdx + 1).padStart(2, '0')}</span>
        <span style={styles.divider}>│</span>
        <span style={styles.label}>TIME</span>
        <span style={styles.value}>{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
      </div>
      <div style={styles.ticker}>
        <div style={{
          display: 'flex',
          gap: '0px',
          transform: `translateX(-${offset % tickerWidth}px)`,
          whiteSpace: 'nowrap',
        }}>
          {[...TICKER_DATA, ...TICKER_DATA].map((item, i) => (
            <span key={i} style={styles.tickerItem}>
              <span style={styles.tickerSymbol}>{item.symbol}</span>
              <span style={styles.tickerPrice}>{item.price}</span>
              <span style={{ ...styles.tickerChange, color: item.up ? '#22cc55' : '#ee4444' }}>
                {item.change}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bar: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 16px',
    background: '#12121e',
    borderTop: '1px solid #333',
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    color: '#888',
    height: '28px',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexShrink: 0,
    marginRight: '16px',
  },
  label: {
    color: '#555',
    fontSize: '9px',
    letterSpacing: '1px',
  },
  value: {
    color: '#e6a23c',
    fontWeight: 'bold',
  },
  divider: {
    color: '#333',
  },
  ticker: {
    flex: 1,
    overflow: 'hidden',
  },
  tickerItem: {
    display: 'inline-flex',
    gap: '6px',
    padding: '0 20px',
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
  },
};
