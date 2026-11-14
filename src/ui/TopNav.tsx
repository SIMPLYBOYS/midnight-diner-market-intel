import { useEffect, useMemo, useRef, useState } from 'react';
import { eventBus } from '../engine/EventBus';
import { dataSource } from '../datasource';
import type { EpisodeMeta } from '../engine/types';

function formatDateLabel(date?: string): string {
  if (!date) return '';
  const d = new Date(date + 'T00:00:00');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${month}/${day}`;
}

function formatDateCompact(date?: string): string {
  if (!date) return '';
  return date.replace(/-/g, '');
}

export function TopNav() {
  const [currentEpisode, setCurrentEpisode] = useState('');
  const [status, setStatus] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [metas, setMetas] = useState<EpisodeMeta[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const orderedEpisodes = useMemo(() => [...metas].reverse(), [metas]);

  // Episode metadata loads lazily (each episode is its own chunk); the menu
  // populates shortly after mount instead of bloating the initial bundle.
  // The current selection is also seeded from the DataSource's latest id, then
  // kept in sync by timeline:started events below.
  useEffect(() => {
    let alive = true;
    dataSource.listEpisodes().then((m) => {
      if (alive) setMetas(m);
    });
    dataSource.getLatestEpisodeId().then((id) => {
      if (alive) setCurrentEpisode((prev) => prev || id);
    });
    return () => {
      alive = false;
    };
  }, []);

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

  const scroll = (dir: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: dir * 140, behavior: 'smooth' });
  };

  const currentEp = metas.find(e => e.id === currentEpisode);
  const currentTitle = currentEp?.title ?? '';

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <span style={styles.logo}>☰</span>
        <span style={styles.breadcrumb}>深夜食堂</span>
        <span style={styles.sep}>›</span>
        <span style={styles.breadcrumbActive}>{currentTitle}</span>
      </div>
      <div style={styles.selectorWrap}>
        <button style={styles.arrowBtn} onClick={() => scroll(-1)}>◀</button>
        <div ref={scrollRef} className="episode-scroll" style={styles.scrollContainer}>
          {orderedEpisodes.map((ep) => {
            const active = ep.id === currentEpisode;
            const dateLabel = formatDateLabel(ep.date);
            const dateCompact = formatDateCompact(ep.date);
            // Extract title without date prefix
            const shortTitle = ep.title.replace(/^\d{8}\s*/, '');
            return (
              <button
                key={ep.id}
                onClick={() => handleSelect(ep.id)}
                style={{
                  ...styles.episodeBtn,
                  ...(active ? styles.episodeBtnActive : {}),
                }}
                title={`${dateCompact} ${shortTitle}${ep.description ? ' — ' + ep.description : ''}`}
              >
                <span style={{
                  ...styles.dateText,
                  color: active ? '#e6a23c' : '#888',
                }}>{dateLabel}</span>
                <span style={{
                  ...styles.titleText,
                  color: active ? '#e6a23c' : '#666',
                }}>{shortTitle}</span>
              </button>
            );
          })}
        </div>
        <button style={styles.arrowBtn} onClick={() => scroll(1)}>▶</button>
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
    padding: '4px 16px',
    background: '#1a1a28',
    borderBottom: '1px solid #333',
    fontFamily: "'Courier New', monospace",
    fontSize: '12px',
    color: '#aaa',
    height: '44px',
    boxSizing: 'border-box',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
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
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  selectorWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flex: 1,
    justifyContent: 'center',
    minWidth: 0,
    maxWidth: '500px',
    margin: '0 12px',
  },
  arrowBtn: {
    background: 'transparent',
    border: 'none',
    color: '#666',
    fontSize: '10px',
    cursor: 'pointer',
    padding: '2px 4px',
    flexShrink: 0,
    fontFamily: "'Courier New', monospace",
  },
  scrollContainer: {
    display: 'flex',
    gap: '4px',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    flex: 1,
    minWidth: 0,
  },
  episodeBtn: {
    background: 'transparent',
    border: '1px solid #333',
    borderRadius: '4px',
    padding: '2px 10px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1px',
    flexShrink: 0,
    minWidth: '80px',
  },
  episodeBtnActive: {
    background: '#2a2a4a',
    borderColor: '#e6a23c',
  },
  dateText: {
    fontSize: '10px',
    fontFamily: "'Courier New', monospace",
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  titleText: {
    fontSize: '9px',
    fontFamily: "'Courier New', monospace",
    whiteSpace: 'nowrap',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexShrink: 0,
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
