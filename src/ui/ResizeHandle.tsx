import { useCallback, useEffect, useRef } from 'react';

interface ResizeHandleProps {
  width: number;
  onChange: (next: number) => void;
  min: number;
  max: number;
  /** Drag direction: 'right' grows the panel as you drag right; 'left' grows as you drag left. */
  grow: 'right' | 'left';
}

export function ResizeHandle({ width, onChange, min, max, grow }: ResizeHandleProps) {
  const dragRef = useRef<{ startX: number; startW: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startW: width };
  }, [width]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const rawDelta = e.clientX - drag.startX;
    // The shell is CSS-scaled to fit the viewport, so screen-pixel delta
    // must be divided by the current scale to get logical-pixel delta.
    const shell = (e.target as HTMLElement).closest('.app-shell') as HTMLElement | null;
    let delta = rawDelta;
    if (shell) {
      const rect = shell.getBoundingClientRect();
      const scale = rect.width / shell.scrollWidth;
      if (scale > 0) delta = rawDelta / scale;
    }
    const dir = grow === 'left' ? -1 : 1;
    const next = Math.max(min, Math.min(max, drag.startW + dir * delta));
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => onChange(next));
  }, [onChange, min, max, grow]);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }, []);

  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="resize-handle"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      title="Drag to resize"
    />
  );
}
