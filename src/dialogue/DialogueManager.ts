import type { DinerScene } from '../scenes/DinerScene';
import { EmoteBubble } from './EmoteBubble';
import { eventBus } from '../engine/EventBus';

/**
 * Manages Phaser-side dialogue UI (emote bubbles only).
 * Speech bubbles and narration are handled by React overlays
 * for crisp text rendering above the pixel-art canvas.
 */
export class DialogueManager {
  private scene: DinerScene;
  private emoteBubble: EmoteBubble;

  private onEmoteShow: (payload: { character: string; emote: string }) => void;
  private onEmoteHide: () => void;

  constructor(scene: DinerScene) {
    this.scene = scene;
    this.emoteBubble = new EmoteBubble(scene);

    this.onEmoteShow = ({ character, emote }) => {
      const char = this.scene.getCharacter(character);
      if (!char) return;
      this.emoteBubble.show(char.getSprite(), emote);
    };

    this.onEmoteHide = () => {
      this.emoteBubble.hide();
    };

    eventBus.on('emote:show', this.onEmoteShow);
    eventBus.on('emote:hide', this.onEmoteHide);
  }

  update(): void {
    // Reserved for future per-frame updates
  }

  destroy(): void {
    eventBus.off('emote:show', this.onEmoteShow);
    eventBus.off('emote:hide', this.onEmoteHide);
    this.emoteBubble.destroy();
  }
}
