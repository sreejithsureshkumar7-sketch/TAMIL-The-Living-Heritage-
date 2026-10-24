/**
 * Procedural Web Audio Engine for Temple Atmosphere & Tamil Letter Audio
 * Zero external audio assets required; 100% resilient and offline-capable.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private droneGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private isDronePlaying: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopDrone();
    } else {
      this.initCtx();
      this.startDrone();
      this.playTempleChime();
    }
    return !this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  // Play a metallic ancient temple bell chime (resonant, golden harmonics)
  public playTempleChime() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Bell fundamental frequencies (Sa - Pa harmonic resonance)
      const frequencies = [261.63, 392.00, 523.25, 783.99, 1046.50];
      const masterBellGain = this.ctx.createGain();
      masterBellGain.gain.setValueAtTime(0.2, now);
      masterBellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);
      masterBellGain.connect(this.ctx.destination);

      frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const partialGain = this.ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq * (1 + (Math.random() - 0.5) * 0.01), now);

        partialGain.gain.setValueAtTime(0.3 / (idx + 1), now);
        partialGain.gain.exponentialRampToValueAtTime(0.0001, now + (3.5 - idx * 0.4));

        osc.connect(partialGain);
        partialGain.connect(masterBellGain);
        osc.start(now);
        osc.stop(now + 4);
      });
    } catch {
      // AudioContext unavailable
    }
  }

  // Start continuous meditative ancient tanpura drone (Acoustic grounding)
  public startDrone() {
    if (this.isMuted || this.isDronePlaying) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.001, now);
      this.droneGain.gain.linearRampToValueAtTime(0.04, now + 2);
      this.droneGain.connect(this.ctx.destination);

      // 110Hz (A2 note) and 165Hz (E3 note) for meditative tanpura harmony
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sawtooth';
      this.droneOsc1.frequency.setValueAtTime(110, now);

      // Low pass filter to create warm brassy acoustic resonance
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'sine';
      this.droneOsc2.frequency.setValueAtTime(165, now);

      this.droneOsc1.connect(filter);
      this.droneOsc2.connect(filter);
      filter.connect(this.droneGain);

      this.droneOsc1.start(now);
      this.droneOsc2.start(now);
      this.isDronePlaying = true;
    } catch {
      // Fallback
    }
  }

  public stopDrone() {
    if (this.isDronePlaying && this.droneGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.droneGain.gain.linearRampToValueAtTime(0.0001, now + 0.5);
        setTimeout(() => {
          this.droneOsc1?.stop();
          this.droneOsc2?.stop();
          this.droneOsc1?.disconnect();
          this.droneOsc2?.disconnect();
          this.isDronePlaying = false;
        }, 550);
      } catch {
        this.isDronePlaying = false;
      }
    }
  }

  // Speak or phonetically pronounce Tamil letter / word
  public speakTamil(text: string) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ta-IN';
        utterance.rate = 0.85;
        utterance.pitch = 1.0;
        
        // Find Tamil voice if available
        const voices = window.speechSynthesis.getVoices();
        const tamilVoice = voices.find(v => v.lang.includes('ta') || v.lang.includes('ta-IN'));
        if (tamilVoice) {
          utterance.voice = tamilVoice;
        }

        window.speechSynthesis.speak(utterance);
      } catch {
        // Fallback tone
        this.playTempleChime();
      }
    } else {
      this.playTempleChime();
    }
  }
}

export const soundEngine = new SoundEngine();
