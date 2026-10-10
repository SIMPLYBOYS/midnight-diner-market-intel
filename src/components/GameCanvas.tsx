import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { gameConfig } from '../game/config';
import { GAME_WIDTH, GAME_HEIGHT, GAME_SCALE } from '../constants';
import { DialogueOverlay } from './DialogueOverlay';
import { NarrationOverlay } from './NarrationOverlay';

export function GameCanvas() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current) return;

    gameRef.current = new Phaser.Game(gameConfig);

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: `${GAME_WIDTH * GAME_SCALE}px`,
        height: `${GAME_HEIGHT * GAME_SCALE}px`,
        overflow: 'hidden',
      }}
    >
      <div id="game-container" />
      <DialogueOverlay />
      <NarrationOverlay />
    </div>
  );
}
