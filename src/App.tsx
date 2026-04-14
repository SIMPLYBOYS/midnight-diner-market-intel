import { useState, useEffect, useRef, useCallback } from 'react';
import { Howler } from 'howler';
import { GameCanvas } from './components/GameCanvas';
import { TopNav } from './ui/TopNav';
import { PlaybackBar } from './ui/PlaybackBar';
import { MarketDashboard } from './ui/MarketDashboard';
import { ChatLog } from './ui/ChatLog';
import './audio/AudioManager'; // initialize singleton (auto-binds events)
import './App.css';

function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="start-screen" onClick={onStart}>
      <div className="start-content">
        <div className="start-title">深夜食堂</div>
        <div className="start-subtitle">Market Intel</div>
        <div className="start-hint">Click anywhere to start</div>
      </div>
    </div>
  );
}

function useViewportScale(shellRef: React.RefObject<HTMLDivElement | null>) {
  const update = useCallback(() => {
    const el = shellRef.current;
    if (!el) return;
    // Temporarily remove scale to measure natural size
    el.style.transform = 'none';
    // Force layout recalc
    const natural = el.scrollWidth;
    const naturalH = el.scrollHeight;
    const scaleX = window.innerWidth / natural;
    const scaleY = window.innerHeight / naturalH;
    const scale = Math.min(scaleX, scaleY, 1);
    el.style.transform = `scale(${scale})`;
    el.style.transformOrigin = 'top left';
    // Center horizontally via margin
    const scaledWidth = natural * scale;
    const marginLeft = Math.max(0, (window.innerWidth - scaledWidth) / 2);
    el.style.marginLeft = `${marginLeft}px`;
    // Set explicit width/height so the scaled element doesn't leave blank space
    el.style.width = `${natural}px`;
    el.style.height = `${naturalH}px`;
    // Collapse wrapper to scaled height
    const wrapper = el.parentElement;
    if (wrapper) {
      wrapper.style.height = `${naturalH * scale}px`;
    }
  }, [shellRef]);

  useEffect(() => {
    // Delay first measure to ensure DOM is fully rendered
    const raf = requestAnimationFrame(update);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
    };
  }, [update]);
}

function App() {
  const [started, setStarted] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    // Unlock Web Audio API
    Howler.ctx?.resume();
    setStarted(true);
  };

  // Only activate scaling after start (shell must be in DOM)
  useViewportScale(started ? shellRef : { current: null });

  if (!started) {
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <div className="app">
      <div className="portrait-hint">
        <div className="portrait-hint-icon">📱</div>
        <div className="portrait-hint-text">Please rotate your device to landscape</div>
      </div>
      <div className="app-shell" ref={shellRef}>
        <TopNav />
        <div className="app-main">
          <div className="scene-panel">
            <GameCanvas />
          </div>
          <div className="dashboard-panel">
            <MarketDashboard />
          </div>
          <div className="chatlog-panel">
            <ChatLog />
          </div>
        </div>
        <PlaybackBar />
      </div>
    </div>
  );
}

export default App;
