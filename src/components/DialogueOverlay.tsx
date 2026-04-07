import { useEffect, useState, useRef } from 'react';
import { eventBus } from '../engine/EventBus';
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
    };
    const onHide = () => {
      setState((s) => ({ ...s, visible: false }));
      setDisplayText('');
    };

    eventBus.on('dialogue:show', onShow);
    eventBus.on('dialogue:hide', onHide);
    return () => {
      eventBus.off('dialogue:show', onShow);
      eventBus.off('dialogue:hide', onHide);
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
      if (idx >= state.text.length && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
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

  // Position bubble centered above character, clamped to canvas edges
  const left = Math.max(
    8,
    Math.min(state.screenX - bubbleMaxW / 2, canvasW - bubbleMaxW - 8),
  );
  // Tail offset: how far from bubble left edge the tail should point
  const tailLeft = Math.max(12, Math.min(state.screenX - left, bubbleMaxW - 12));

  return (
    <div
      style={{
        position: 'absolute',
        left: `${left}px`,
        top: `${state.screenY}px`,
        transform: 'translateY(-100%)',
        maxWidth: `${bubbleMaxW}px`,
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <div style={styles.bubble}>
        <div style={styles.name}>{name}</div>
        <div style={styles.text}>{displayText}</div>
      </div>
      <div
        style={{
          ...styles.tail,
          marginLeft: `${tailLeft - 6}px`,
        }}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bubble: {
    background: '#ffffffee',
    border: '2px solid #444',
    borderRadius: '6px',
    padding: '6px 10px',
  },
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
  tail: {
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '8px solid #444',
  },
};
