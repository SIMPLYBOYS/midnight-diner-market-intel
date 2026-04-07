import { useEffect, useState, useRef } from 'react';
import { eventBus } from '../engine/EventBus';
import { TYPEWRITER_SPEED, GAME_WIDTH, GAME_HEIGHT, GAME_SCALE } from '../constants';

export function NarrationOverlay() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onShow = (payload: { text: string }) => {
      setText(payload.text);
      setDisplayText('');
      setVisible(true);
      setFading(false);
    };
    const onHide = () => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        setFading(false);
        setText('');
        setDisplayText('');
      }, 400);
    };

    eventBus.on('narration:show', onShow);
    eventBus.on('narration:hide', onHide);
    return () => {
      eventBus.off('narration:show', onShow);
      eventBus.off('narration:hide', onHide);
    };
  }, []);

  // Typewriter
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!visible || !text) return;

    let idx = 0;
    timerRef.current = setInterval(() => {
      idx++;
      setDisplayText(text.slice(0, idx));
      if (idx >= text.length && timerRef.current) {
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
  }, [visible, text]);

  if (!visible) return null;

  const canvasW = GAME_WIDTH * GAME_SCALE;
  const canvasH = GAME_HEIGHT * GAME_SCALE;

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: `${canvasH / 2 - 30}px`,
        width: `${canvasW}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '14px 0',
        background: 'rgba(0, 0, 0, 0.75)',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }}
    >
      <span
        style={{
          fontSize: '14px',
          fontFamily: "'Courier New', monospace",
          color: '#e8d5b0',
          letterSpacing: '1px',
          textAlign: 'center',
        }}
      >
        {displayText}
      </span>
    </div>
  );
}
