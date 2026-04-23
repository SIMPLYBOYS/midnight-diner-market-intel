import { useEffect, useState, useRef } from 'react';
import { eventBus } from '../engine/EventBus';
import { audioManager } from '../audio/AudioManager';
import { TYPEWRITER_SPEED, GAME_WIDTH, GAME_SCALE } from '../constants';

interface DialogueState {
  character: string;
  text: string;
  screenX: number;
  screenY: number;
  visible: boolean;
}

const CHARACTER_NAMES: Record<string, string> = {
  'chef': 'Master',
  'customer-a': 'Customer A',
  'customer-b': 'Customer B',
};

export function DialogueOverlay() {
  const [state, setState] = useState<DialogueState>({
    character: '',
    text: '',
    screenX: 0,
    screenY: 0,
    visible: false,
  });
  const [displayText, setDisplayText] = useState('');
  const [manual, setManual] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onShow = (payload: { character: string; text: string; screenX: number; screenY: number }) => {
      setState({
        character: payload.character,
        text: payload.text,
        screenX: payload.screenX,
        screenY: payload.screenY,
        visible: true,
      });
      setDisplayText('');
      setTypingDone(false);
    };
    const onHide = () => {
      setState((s) => ({ ...s, visible: false }));
      setDisplayText('');
      setTypingDone(false);
    };
    const onMode = ({ enabled }: { enabled: boolean }) => setManual(enabled);

    eventBus.on('dialogue:show', onShow);
    eventBus.on('dialogue:hide', onHide);
    eventBus.on('player:set-manual-mode', onMode);
    return () => {
      eventBus.off('dialogue:show', onShow);
      eventBus.off('dialogue:hide', onHide);
      eventBus.off('player:set-manual-mode', onMode);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!state.visible || !state.text) return;

    let idx = 0;
    timerRef.current = setInterval(() => {
      idx++;
      setDisplayText(state.text.slice(0, idx));
      // Play typing sound every 2 characters (skip spaces/punctuation)
      const ch = state.text[idx - 1];
      if (idx % 2 === 1 && ch && !/\s/.test(ch)) {
        audioManager.playTypingSound(state.character);
      }
      if (idx >= state.text.length && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTypingDone(true);
      }
    }, TYPEWRITER_SPEED);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [state.visible, state.text]);

  if (!state.visible) return null;

  const name = CHARACTER_NAMES[state.character] ?? state.character;
  const canvasW = GAME_WIDTH * GAME_SCALE;
  const bubbleMaxW = 240;
  const borderW = 3;
  const borderColor = '#333';
  const bgColor = '#ffffffee';
  const tailSize = 40;

  // Position bubble above character, clamped to canvas edges
  const left = Math.max(
    8,
    Math.min(state.screenX - bubbleMaxW / 2, canvasW - bubbleMaxW - 8),
  );
  // Tail points toward speaker — offset from bubble left edge
  const tailX = Math.max(20, Math.min(state.screenX - left, bubbleMaxW - 20));

  const handleAdvance = () => {
    if (!manual) return;
    eventBus.emit('player:advance');
  };

  return (
    <div
      onClick={handleAdvance}
      style={{
        position: 'absolute',
        left: `${left}px`,
        top: `${state.screenY + 20}px`,
        transform: 'translateY(-100%)',
        width: `${bubbleMaxW}px`,
        pointerEvents: manual ? 'auto' : 'none',
        cursor: manual ? 'pointer' : 'default',
        zIndex: 10,
      }}
    >
      {/* Bubble + tail as one SVG for clean connected shape */}
      <svg
        width={bubbleMaxW}
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `calc(100% + ${tailSize}px)`,
          overflow: 'visible',
        }}
      >
        <defs>
          <clipPath id="bubble-clip">
            <rect x="0" y="0" width={bubbleMaxW} height="1000" rx="8" ry="8" />
          </clipPath>
        </defs>
      </svg>

      {/* Content area */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            background: bgColor,
            border: `${borderW}px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '6px 10px',
          }}
        >
          <div style={styles.name}>{name}</div>
          <div style={styles.text}>
            {displayText}
            {manual && typingDone && <span style={styles.advanceHint}>▶</span>}
          </div>
        </div>

        {/* Tail: angled tab extending from bottom-left of bubble */}
        <svg
          width={bubbleMaxW}
          height={tailSize + borderW}
          style={{ display: 'block', marginTop: `-${borderW}px` }}
        >
          {/* Border tail */}
          <polygon
            points={`${tailX - 12},0 ${tailX - 14},${tailSize} ${tailX + 2},0`}
            fill={borderColor}
          />
          {/* Inner white tail */}
          <polygon
            points={`${tailX - 10},0 ${tailX - 12},${tailSize - 3} ${tailX},0`}
            fill={bgColor}
          />
        </svg>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  name: {
    fontSize: '11px',
    fontFamily: "'Courier New', monospace",
    fontWeight: 'bold',
    color: '#d4a024',
    marginBottom: '2px',
    lineHeight: 1.2,
  },
  text: {
    fontSize: '12px',
    fontFamily: "'Courier New', monospace",
    color: '#222',
    lineHeight: 1.4,
    wordBreak: 'break-word',
  },
  advanceHint: {
    marginLeft: '6px',
    color: '#d4a024',
    fontSize: '11px',
    animation: 'dialogueAdvancePulse 1s ease-in-out infinite',
  },
};
