import { Howl } from 'howler';
import { eventBus } from '../engine/EventBus';

// ── Asset imports (Vite handles these as URLs) ──────────────────
import bossaLofiUrl from '../assets/audio/bgm/bossa-lofi.mp3';
import chillLofiUrl from '../assets/audio/bgm/chill-lofi-loop.ogg';
import dingUrl from '../assets/audio/sfx/Ding.ogg';
import chimesUrl from '../assets/audio/sfx/chimes.ogg';
import alarmUrl from '../assets/audio/sfx/alarm.ogg';
import click1Url from '../assets/audio/sfx/click_1.ogg';
import click2Url from '../assets/audio/sfx/click_2.ogg';
import dingDeepUrl from '../assets/audio/sfx/ding_deep.ogg';

// ── Types ───────────────────────────────────────────────────────

export type BgmKey = 'bossa-lofi' | 'chill-lofi';
export type SfxKey =
  | 'ding'
  | 'chimes'
  | 'alarm'
  | 'click'
  | 'click2'
  | 'ding-deep';

// ── Registry ────────────────────────────────────────────────────

const BGM_REGISTRY: Record<BgmKey, string> = {
  'bossa-lofi': bossaLofiUrl,
  'chill-lofi': chillLofiUrl,
};

const SFX_REGISTRY: Record<SfxKey, string> = {
  'ding': dingUrl,
  'chimes': chimesUrl,
  'alarm': alarmUrl,
  'click': click1Url,
  'click2': click2Url,
  'ding-deep': dingDeepUrl,
};

const BGM_FADE_MS = 1500;
const DEFAULT_BGM_VOLUME = 0.35;
const DEFAULT_SFX_VOLUME = 0.5;

// ── AudioManager (singleton) ────────────────────────────────────

class AudioManager {
  private bgmPool = new Map<string, Howl>();
  private sfxPool = new Map<string, Howl>();
  private currentBgm: Howl | null = null;
  private currentBgmKey: string | null = null;
  private bgmVolume = DEFAULT_BGM_VOLUME;
  private sfxVolume = DEFAULT_SFX_VOLUME;
  private muted = false;

  constructor() {
    this.bindEvents();
  }

  // ── BGM ─────────────────────────────────────────────────────

  playBgm(key: BgmKey, fade = true): void {
    if (this.currentBgmKey === key && this.currentBgm?.playing()) return;

    const next = this.getOrCreateBgm(key);

    // Fade out current
    if (this.currentBgm && this.currentBgm.playing()) {
      const prev = this.currentBgm;
      if (fade) {
        prev.fade(prev.volume(), 0, BGM_FADE_MS);
        prev.once('fade', () => prev.stop());
      } else {
        prev.stop();
      }
    }

    this.currentBgm = next;
    this.currentBgmKey = key;
    next.volume(fade ? 0 : this.bgmVolume);
    next.play();
    if (fade) {
      next.fade(0, this.bgmVolume, BGM_FADE_MS);
    }
  }

  stopBgm(fade = true): void {
    if (!this.currentBgm) return;
    const bgm = this.currentBgm;
    if (fade) {
      bgm.fade(bgm.volume(), 0, BGM_FADE_MS);
      bgm.once('fade', () => bgm.stop());
    } else {
      bgm.stop();
    }
    this.currentBgm = null;
    this.currentBgmKey = null;
  }

  // ── SFX ─────────────────────────────────────────────────────

  playSfx(key: SfxKey): void {
    const sfx = this.getOrCreateSfx(key);
    sfx.play();
  }

  // ── Volume control ──────────────────────────────────────────

  setBgmVolume(vol: number): void {
    this.bgmVolume = Math.max(0, Math.min(1, vol));
    if (this.currentBgm) {
      this.currentBgm.volume(this.bgmVolume);
    }
  }

  setSfxVolume(vol: number): void {
    this.sfxVolume = Math.max(0, Math.min(1, vol));
    for (const sfx of this.sfxPool.values()) {
      sfx.volume(this.sfxVolume);
    }
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    Howler.mute(this.muted);
    return this.muted;
  }

  isMuted(): boolean {
    return this.muted;
  }

  // ── Auto-SFX bindings ──────────────────────────────────────

  private bindEvents(): void {
    // Door chime when customer enters
    eventBus.on('timeline:action', ({ action }) => {
      if (action.type === 'enter' && action.character !== 'chef') {
        this.playSfx('chimes');
      }
    });

    // Ding on dialogue
    eventBus.on('dialogue:show', () => {
      this.playSfx('click');
    });

    // Alert sound on market headline
    eventBus.on('market:update', (payload) => {
      if (payload.headline) {
        this.playSfx('alarm');
      } else {
        this.playSfx('ding');
      }
    });

    // Deep ding on episode start
    eventBus.on('timeline:started', () => {
      this.playSfx('ding-deep');
    });
  }

  // ── Internal ───────────────────────────────────────────────

  private getOrCreateBgm(key: BgmKey): Howl {
    let howl = this.bgmPool.get(key);
    if (!howl) {
      howl = new Howl({
        src: [BGM_REGISTRY[key]],
        loop: true,
        volume: this.bgmVolume,
        preload: true,
      });
      this.bgmPool.set(key, howl);
    }
    return howl;
  }

  private getOrCreateSfx(key: SfxKey): Howl {
    let howl = this.sfxPool.get(key);
    if (!howl) {
      howl = new Howl({
        src: [SFX_REGISTRY[key]],
        volume: this.sfxVolume,
        preload: true,
      });
      this.sfxPool.set(key, howl);
    }
    return howl;
  }
}

/** Singleton audio manager */
export const audioManager = new AudioManager();
