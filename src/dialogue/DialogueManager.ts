import type { DinerScene } from '../scenes/DinerScene';
import { DialogueBubble } from './DialogueBubble';
import { NarrationOverlay } from './NarrationOverlay';
import { EmoteBubble } from './EmoteBubble';
import { eventBus } from '../engine/EventBus';

/** Character display names for the dialogue bubble name tag. */
const CHARACTER_NAMES: Record<string, string> = {
  'chef': 'Master',
  'customer-a': 'Customer A',
  'customer-b': 'Customer B',
};

/**
 * Manages all dialogue UI elements and listens to EventBus events.
 * Created once per DinerScene lifecycle.
 */
export class DialogueManager {
  private scene: DinerScene;
  private bubble: DialogueBubble;
  private narration: NarrationOverlay;
  private emoteBubble: EmoteBubble;

  private onDialogueShow: (payload: { character: string; text: string }) => void;
  private onDialogueHide: () => void;
  private onNarrationShow: (payload: { text: string }) => void;
  private onNarrationHide: () => void;
  private onEmoteShow: (payload: { character: string; emote: string }) => void;
  private onEmoteHide: () => void;

  constructor(scene: DinerScene) {
    this.scene = scene;
    this.bubble = new DialogueBubble(scene);
    this.narration = new NarrationOverlay(scene);
    this.emoteBubble = new EmoteBubble(scene);

    // Bind event handlers
    this.onDialogueShow = ({ character, text }) => {
      const char = this.scene.getCharacter(character);
      if (!char) return;
      const name = CHARACTER_NAMES[character] ?? character;
      this.bubble.show(char.getSprite(), name, text);
    };

    this.onDialogueHide = () => {
      this.bubble.hide();
    };

    this.onNarrationShow = ({ text }) => {
      this.narration.show(text);
    };

    this.onNarrationHide = () => {
      this.narration.hide();
    };

    this.onEmoteShow = ({ character, emote }) => {
      const char = this.scene.getCharacter(character);
      if (!char) return;
      this.emoteBubble.show(char.getSprite(), emote);
    };

    this.onEmoteHide = () => {
      this.emoteBubble.hide();
    };

    eventBus.on('dialogue:show', this.onDialogueShow);
    eventBus.on('dialogue:hide', this.onDialogueHide);
    eventBus.on('narration:show', this.onNarrationShow);
    eventBus.on('narration:hide', this.onNarrationHide);
    eventBus.on('emote:show', this.onEmoteShow);
    eventBus.on('emote:hide', this.onEmoteHide);
  }

  /** Call in scene update loop to keep bubble positioned above moving characters. */
  update(): void {
    this.bubble.update();
  }

  destroy(): void {
    eventBus.off('dialogue:show', this.onDialogueShow);
    eventBus.off('dialogue:hide', this.onDialogueHide);
    eventBus.off('narration:show', this.onNarrationShow);
    eventBus.off('narration:hide', this.onNarrationHide);
    eventBus.off('emote:show', this.onEmoteShow);
    eventBus.off('emote:hide', this.onEmoteHide);

    this.bubble.destroy();
    this.narration.destroy();
    this.emoteBubble.destroy();
  }
}
