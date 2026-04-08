import { useState } from 'react';
import { Howler } from 'howler';
import { GameCanvas } from './components/GameCanvas';
import { TopNav } from './ui/TopNav';
import { HudBar } from './ui/HudBar';
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

function App() {
  const [started, setStarted] = useState(false);

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
      <div className="app-shell">
        <TopNav />
        <div className="app-main">
          <div className="scene-panel">
            <GameCanvas />
          </div>
          <div className="dashboard-panel">
            <MarketDashboard />
          </div>
        </div>
        <HudBar />
      </div>
    </div>
  );
}

export default App;
