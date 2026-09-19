import { useEffect, useState, useRef } from 'react';
import { eventBus } from '../engine/EventBus';
import { TYPEWRITER_SPEED, GAME_WIDTH, GAME_HEIGHT, GAME_SCALE } from '../constants';

export function NarrationOverlay() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [manual, setManual] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onShow = (payload: { text: string }) => {
      if (fadeTimerRef.current) {
        clearTimeout(fadeTimerRef.current);
        fadeTimerRef.current = null;
      }
      setText(payload.text);
      setDisplayText('');
      setVisible(true);
      setFading(false);
      setTypingDone(false);
    };
    const onHide = () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      setFading(true);
      fadeTimerRef.current = setTimeout(() => {
        setVisible(false);
        setFading(false);
        setText('');
        setDisplayText('');
        setTypingDone(false);
        fadeTimerRef.current = null;
      }, 400);
    };
    const onMode = ({ enabled }: { enabled: boolean }) => setManual(enabled);

    eventBus.on('narration:show', onShow);
    eventBus.on('narration:hide', onHide);
    eventBus.on('player:set-manual-mode', onMode);
    return () => {
      eventBus.off('narration:show', onShow);
      eventBus.off('narration:hide', onHide);
      eventBus.off('player:set-manual-mode', onMode);
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
        setTypingDone(true);
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

  const handleAdvance = () => {
    if (!manual) return;
    eventBus.emit('player:advance');
  };

  return (
    <div
      onClick={handleAdvance}
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
        pointerEvents: manual ? 'auto' : 'none',
        cursor: manual ? 'pointer' : 'default',
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
        {manual && typingDone && (
          <span
            style={{
              marginLeft: '10px',
              color: '#e6a23c',
              animation: 'dialogueAdvancePulse 1s ease-in-out infinite',
            }}
          >
            ▶
          </span>
        )}
      </span>
    </div>
  );
}
