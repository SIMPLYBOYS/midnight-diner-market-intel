import { useState, useEffect, useRef, useCallback } from 'react';
import { Howler } from 'howler';
import { GameCanvas } from './components/GameCanvas';
import { TopNav } from './ui/TopNav';
import { PlaybackBar } from './ui/PlaybackBar';
import { MarketDashboard } from './ui/MarketDashboard';
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
    // Reset scale to measure natural size
    el.style.transform = 'none';
    const rect = el.getBoundingClientRect();
    const scaleX = window.innerWidth / rect.width;
    const scaleY = window.innerHeight / rect.height;
    const scale = Math.min(scaleX, scaleY, 1); // never scale up
    el.style.transform = `scale(${scale})`;
    el.style.transformOrigin = 'top center';
  }, [shellRef]);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);
}

function App() {
  const [started, setStarted] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  useViewportScale(shellRef);

  const handleStart = () => {
    // Unlock Web Audio API
    Howler.ctx?.resume();
    setStarted(true);
  };

  if (!started) {
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <div className="app">
      <div className="app-shell" ref={shellRef}>
        <TopNav />
        <div className="app-main">
          <div className="scene-panel">
            <GameCanvas />
          </div>
          <div className="dashboard-panel">
            <MarketDashboard />
          </div>
        </div>
        <PlaybackBar />
      </div>
    </div>
  );
}

export default App;
