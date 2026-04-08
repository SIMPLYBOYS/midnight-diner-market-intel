import { useEffect, useState } from 'react';
import { eventBus } from '../engine/EventBus';
import { ALL_EPISODES } from '../assets/episodes';

export function TopNav() {
  const [currentEpisode, setCurrentEpisode] = useState(ALL_EPISODES[0].id);
  const [status, setStatus] = useState<'idle' | 'playing' | 'finished'>('idle');

  useEffect(() => {
    const onStart = ({ episodeId }: { episodeId: string }) => {
      setCurrentEpisode(episodeId);
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

  const handleSelect = (episodeId: string) => {
    if (episodeId === currentEpisode && status === 'playing') return;
    eventBus.emit('episode:select', { episodeId });
  };

  const currentTitle = ALL_EPISODES.find(e => e.id === currentEpisode)?.title ?? '';

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <span style={styles.logo}>☰</span>
        <span style={styles.breadcrumb}>深夜食堂</span>
        <span style={styles.sep}>›</span>
        <span style={styles.breadcrumbActive}>{currentTitle}</span>
      </div>
      <div style={styles.center}>
        {ALL_EPISODES.map((ep) => {
          const active = ep.id === currentEpisode;
          return (
            <button
              key={ep.id}
              onClick={() => handleSelect(ep.id)}
              style={{
                ...styles.episodeBtn,
                ...(active ? styles.episodeBtnActive : {}),
              }}
              title={ep.description}
            >
              {ep.title}
            </button>
          );
        })}
      </div>
      <div style={styles.right}>
        <span style={{
          ...styles.statusBadge,
          background: status === 'playing' ? '#22aa44' : status === 'finished' ? '#666' : '#555',
        }}>
          {status === 'playing' ? '● LIVE' : status === 'finished' ? '● END' : '● IDLE'}
        </span>
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
  center: {
    display: 'flex',
    gap: '4px',
  },
  episodeBtn: {
    background: 'transparent',
    border: '1px solid #333',
    borderRadius: '4px',
    padding: '2px 10px',
    color: '#666',
    fontSize: '10px',
    fontFamily: "'Courier New', monospace",
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  episodeBtnActive: {
    background: '#2a2a4a',
    borderColor: '#e6a23c',
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
};
