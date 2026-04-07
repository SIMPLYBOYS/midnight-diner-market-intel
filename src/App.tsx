import { GameCanvas } from './components/GameCanvas';
import { TopNav } from './ui/TopNav';
import { HudBar } from './ui/HudBar';
import { MarketDashboard } from './ui/MarketDashboard';
import './App.css';

function App() {
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
