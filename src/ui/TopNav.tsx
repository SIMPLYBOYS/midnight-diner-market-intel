import { useEffect, useState } from 'react';
import { eventBus } from '../engine/EventBus';

export function TopNav() {
  const [episodeTitle, setEpisodeTitle] = useState('');
  const [status, setStatus] = useState<'idle' | 'playing' | 'finished'>('idle');

  useEffect(() => {
    const onStart = ({ episodeId }: { episodeId: string }) => {
      setEpisodeTitle(episodeId);
      setStatus('playing');
    };
    const onFinish = () => setStatus('finished');

    eventBus.on('timeline:started', onStart);
    eventBus.on('timeline:finished', onFinish);
    return () => {
      eventBus.off('timeline:started', onStart);
      eventBus.off('timeline:finished', onFinish);
    };
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <span style={styles.logo}>☰</span>
        <span style={styles.breadcrumb}>深夜食堂</span>
        <span style={styles.sep}>›</span>
        <span style={styles.breadcrumbActive}>{episodeTitle || 'Market Intel'}</span>
      </div>
      <div style={styles.right}>
        <span style={{
          ...styles.statusBadge,
          background: status === 'playing' ? '#22aa44' : status === 'finished' ? '#666' : '#555',
        }}>
          {status === 'playing' ? '● LIVE' : status === 'finished' ? '● END' : '● IDLE'}
        </span>
        <span style={styles.icon}>📊</span>
        <span style={styles.icon}>⚙</span>
        <span style={styles.icon}>🔔</span>
      </div>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 16px',
    background: '#1a1a28',
    borderBottom: '1px solid #333',
    fontFamily: "'Courier New', monospace",
    fontSize: '12px',
    color: '#aaa',
    height: '36px',
    boxSizing: 'border-box',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logo: {
    fontSize: '14px',
    color: '#666',
    cursor: 'pointer',
  },
  breadcrumb: {
    color: '#888',
  },
  sep: {
    color: '#555',
  },
  breadcrumbActive: {
    color: '#e6a23c',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  statusBadge: {
    padding: '2px 8px',
    borderRadius: '10px',
    fontSize: '10px',
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  icon: {
    fontSize: '14px',
    cursor: 'pointer',
    opacity: 0.6,
  },
};
