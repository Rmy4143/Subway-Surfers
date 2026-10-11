// Web Audio API Synthesizer & Procedural Sound Effects Engine

let audioCtx = null;
let bgmInterval = null;
let isSoundEnabled = true;
let isMusicEnabled = true;

export function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

export function toggleSound(enabled) {
  isSoundEnabled = enabled;
  return isSoundEnabled;
}

export function toggleMusic(enabled) {
  isMusicEnabled = enabled;
  if (!isMusicEnabled) {
    stopBGM();
  } else {
    startBGM();
  }
  return isMusicEnabled;
}

// Sparkly Coin Pickup Sound
export function playCoinSound() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, now); // B5
    osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.08); // E6

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  } catch (e) {}
}

// Jump Swoosh
export function playJumpSound() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(580, now + 0.18);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch (e) {}
}

// Roll / Duck Swoosh
export function playRollSound() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.16);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  } catch (e) {}
}

// Lane Switch Dash
export function playLaneSwitchSound() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  } catch (e) {}
}

// Powerup Acquired (Fanfare Arpeggio)
export function playPowerupSound() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
    notes.forEach((freq, index) => {
      const now = audioCtx.currentTime + index * 0.07;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    });
  } catch (e) {}
}

// Train Horn Warning
export function playTrainHorn() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    [311.13, 370.0, 466.16].forEach(freq => { // D#4, F#4, A#4
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    });
  } catch (e) {}
}

// Crash & Game Over Sound
export function playCrashSound() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    // Low noise burst
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.4);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.45);

    // Sad descending tones
    [240, 210, 180, 140].forEach((freq, idx) => {
      const toneNow = now + 0.15 + idx * 0.12;
      const tOsc = audioCtx.createOscillator();
      const tGain = audioCtx.createGain();
      tOsc.type = 'sine';
      tOsc.frequency.setValueAtTime(freq, toneNow);
      tGain.gain.setValueAtTime(0.15, toneNow);
      tGain.gain.exponentialRampToValueAtTime(0.001, toneNow + 0.14);
      tOsc.connect(tGain);
      tGain.connect(audioCtx.destination);
      tOsc.start(toneNow);
      tOsc.stop(toneNow + 0.15);
    });
  } catch (e) {}
}

// Hoverboard Activation Shield
export function playHoverboardSound() {
  if (!isSoundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  } catch (e) {}
}

// Background Music Beat (Procedural 128 BPM Subway Runner Funk)
let step = 0;
const bassNotes = [110, 110, 130.81, 110, 146.83, 110, 130.81, 98]; // A2, A2, C3, A2, D3, A2, C3, G2
const leadNotes = [440, 0, 523.25, 587.33, 440, 0, 659.25, 587.33];

export function startBGM() {
  if (bgmInterval || !isMusicEnabled) return;
  step = 0;
  const tempoMs = 120; // ~125 BPM

  bgmInterval = setInterval(() => {
    if (!audioCtx || !isMusicEnabled) return;
    try {
      const now = audioCtx.currentTime;
      const bIdx = step % bassNotes.length;
      const lIdx = step % leadNotes.length;

      // Bass Kick/Pluck
      const bFreq = bassNotes[bIdx];
      const bOsc = audioCtx.createOscillator();
      const bGain = audioCtx.createGain();
      bOsc.type = 'triangle';
      bOsc.frequency.setValueAtTime(bFreq, now);

      bGain.gain.setValueAtTime(0.08, now);
      bGain.gain.exponentialRampToValueAtTime(0.005, now + 0.1);

      bOsc.connect(bGain);
      bGain.connect(audioCtx.destination);
      bOsc.start(now);
      bOsc.stop(now + 0.11);

      // Hi-hat click on every odd step
      if (step % 2 === 1) {
        const hOsc = audioCtx.createOscillator();
        const hGain = audioCtx.createGain();
        hOsc.type = 'square';
        hOsc.frequency.setValueAtTime(6000, now);
        hGain.gain.setValueAtTime(0.015, now);
        hGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        hOsc.connect(hGain);
        hGain.connect(audioCtx.destination);
        hOsc.start(now);
        hOsc.stop(now + 0.035);
      }

      // Melody chirp occasionally
      if (leadNotes[lIdx] > 0 && step % 4 === 0) {
        const lOsc = audioCtx.createOscillator();
        const lGain = audioCtx.createGain();
        lOsc.type = 'sine';
        lOsc.frequency.setValueAtTime(leadNotes[lIdx], now);
        lGain.gain.setValueAtTime(0.04, now);
        lGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        lOsc.connect(lGain);
        lGain.connect(audioCtx.destination);
        lOsc.start(now);
        lOsc.stop(now + 0.19);
      }

      step++;
    } catch (e) {}
  }, tempoMs);
}

export function stopBGM() {
  if (bgmInterval) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
}
