// Subway Surfers 3D - Main Application Entry Point
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { Player } from './player.js';
import { WorldManager } from './world.js';
import { GameEngine, GAME_STATES } from './game.js';
import * as Audio from './audio.js';
import { 
  initFirebase, 
  initAuth, 
  subscribeToAuth, 
  signInWithGoogle, 
  signOutUser, 
  recordGameSession, 
  fetchLeaderboard, 
  getLocalRunHistory, 
  getCurrentUser,
  saveFirebaseConfig,
  getSavedFirebaseConfig,
  clearFirebaseConfig
} from './firebase.js';

// DOM Elements
const container = document.getElementById('game-container');
const hud = document.getElementById('hud');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const pauseScreen = document.getElementById('pause-screen');
const leaderboardModal = document.getElementById('leaderboard-modal');
const recordsModal = document.getElementById('records-modal');
const settingsModal = document.getElementById('settings-modal');

// HUD Elements
const hudScore = document.getElementById('hud-score');
const hudCoins = document.getElementById('hud-coins');
const hudDistance = document.getElementById('hud-distance');
const hudMultiplier = document.getElementById('hud-multiplier');
const powerupTimers = document.getElementById('powerup-timers');
const hoverboardIndicator = document.getElementById('hoverboard-indicator');

// Buttons
const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const btnResume = document.getElementById('btn-resume');
const btnRestart = document.getElementById('btn-restart');
const btnPauseRestart = document.getElementById('btn-pause-restart');
const btnPauseHome = document.getElementById('btn-pause-home');
const btnOverHome = document.getElementById('btn-over-home');
const btnGoogleAuth = document.getElementById('btn-google-auth');
const authBtnText = document.getElementById('auth-btn-text');
const btnOpenLeaderboard = document.getElementById('btn-open-leaderboard');
const btnOverLeaderboard = document.getElementById('btn-over-leaderboard');
const btnCloseLeaderboard = document.getElementById('btn-close-leaderboard');
const btnRefreshLeaderboard = document.getElementById('btn-refresh-leaderboard');
const btnOpenRecords = document.getElementById('btn-open-records');
const btnCloseRecords = document.getElementById('btn-close-records');
const btnOpenSettings = document.getElementById('btn-open-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnToggleSound = document.getElementById('btn-toggle-sound');
const btnSoundSetting = document.getElementById('btn-sound-setting');
const btnMusicSetting = document.getElementById('btn-music-setting');
const btnSaveFirebase = document.getElementById('btn-save-firebase');
const btnResetFirebase = document.getElementById('btn-reset-firebase');

// User profile in UI
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const userTopScore = document.getElementById('user-top-score');

// Game Over Elements
const finalScore = document.getElementById('final-score');
const finalCoins = document.getElementById('final-coins');
const finalDistance = document.getElementById('final-distance');
const allTimeBest = document.getElementById('all-time-best');
const newHighBanner = document.getElementById('new-high-score-banner');
const syncStatus = document.getElementById('sync-status');

// Leaderboard & Records Elements
const leaderboardBody = document.getElementById('leaderboard-body');
const myRankBanner = document.getElementById('my-rank-banner');
const recordTotalRuns = document.getElementById('record-total-runs');
const recordHighScore = document.getElementById('record-high-score');
const recordTotalCoins = document.getElementById('record-total-coins');
const recordLongestDist = document.getElementById('record-longest-dist');
const historyRunsList = document.getElementById('history-runs-list');
const firebaseConfigJson = document.getElementById('firebase-config-json');
const firebaseConnectMsg = document.getElementById('firebase-connect-msg');

// ============================================================================
// THREE.JS SETUP
// ============================================================================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 300);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
container.appendChild(renderer.domElement);

// Setup World and Player
const worldManager = new WorldManager(scene);
const player = new Player();
scene.add(player.mesh);

// Setup Game Engine
const game = new GameEngine(player, worldManager, {
  onGameStart: () => {
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    pauseScreen.classList.add('hidden');
    hud.classList.remove('hidden');
  },
  onHUDUpdate: ({ score, coins, distance, multiplier, activePowerups }) => {
    hudScore.textContent = score.toLocaleString();
    hudCoins.textContent = coins.toLocaleString();
    hudDistance.textContent = distance.toLocaleString();
    hudMultiplier.textContent = `x${multiplier}`;

    // Render powerup timers
    renderPowerupTimers(activePowerups);
  },
  onHoverboardToggle: (active) => {
    if (active) {
      hoverboardIndicator.classList.remove('hidden');
    } else {
      hoverboardIndicator.classList.add('hidden');
    }
  },
  onPause: () => {
    pauseScreen.classList.remove('hidden');
  },
  onResume: () => {
    pauseScreen.classList.add('hidden');
  },
  onGameOver: async ({ score, coins, distance }) => {
    hud.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    hoverboardIndicator.classList.add('hidden');

    finalScore.textContent = score.toLocaleString();
    finalCoins.textContent = `🪙 ${coins.toLocaleString()}`;
    finalDistance.textContent = `${distance.toLocaleString()} m`;

    const currentUser = getCurrentUser();
    const prevBest = currentUser?.highScore || 0;
    allTimeBest.textContent = Math.max(prevBest, score).toLocaleString();

    if (score > prevBest) {
      newHighBanner.classList.remove('hidden');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      newHighBanner.classList.add('hidden');
    }

    syncStatus.textContent = '☁️ Syncing record with Cloud Leaderboard...';
    try {
      const res = await recordGameSession({ score, coins, distance });
      if (res.cloudSynced) {
        syncStatus.textContent = '✅ Record successfully synced to Global Cloud Leaderboard!';
      } else {
        syncStatus.textContent = '💾 Record stored securely in your career history & local leaderboard.';
      }
    } catch (e) {
      syncStatus.textContent = '💾 Record saved locally.';
    }
  }
});

function renderPowerupTimers(powerups) {
  powerupTimers.innerHTML = '';
  const configs = [
    { key: 'jetpack', name: 'Jetpack', max: 10, icon: '🚀', color: '#10b981' },
    { key: 'magnet', name: 'Coin Magnet', max: 12, icon: '🧲', color: '#ef4444' },
    { key: 'sneakers', name: 'Super Sneakers', max: 12, icon: '👟', color: '#8b5cf6' },
    { key: 'multiplier', name: '2X Score', max: 15, icon: '✖️2', color: '#ec4899' }
  ];

  configs.forEach(cfg => {
    const timeLeft = powerups[cfg.key];
    if (timeLeft > 0) {
      const pct = Math.min(100, (timeLeft / cfg.max) * 100);
      const div = document.createElement('div');
      div.className = 'powerup-meter';
      div.innerHTML = `
        <span class="icon">${cfg.icon}</span>
        <div class="bar-wrap">
          <span class="p-name">${cfg.name}</span>
          <div class="p-progress">
            <div class="p-fill" style="width: ${pct}%; background: ${cfg.color}"></div>
          </div>
        </div>
      `;
      powerupTimers.appendChild(div);
    }
  });
}

// Camera Follow System
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (game.state === GAME_STATES.PLAYING) {
    game.update(delta);
    
    // Smooth Third-Person Camera follow behind runner
    const pPos = player.mesh.position;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pPos.x * 0.45, delta * 8);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pPos.y * 0.35 + 4.6, delta * 6);
    camera.position.z = pPos.z + 8.2;

    camera.lookAt(pPos.x * 0.15, pPos.y * 0.25 + 2.2, pPos.z - 7);
  } else if (game.state === GAME_STATES.MENU) {
    // Gentle idling camera pan in subway station
    const time = Date.now() * 0.001;
    camera.position.set(Math.sin(time * 0.5) * 1.5, 3.8, 8.5);
    camera.lookAt(0, 1.8, -4);
    player.updateAnimation(delta, 10, { isJumping: false, isRolling: false });
  }

  renderer.render(scene, camera);
}
animate();

// Resize Handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================================
// KEYBOARD CONTROLS
// ============================================================================
window.addEventListener('keydown', (e) => {
  Audio.initAudio();

  // Global Start / Restart shortcuts
  if (e.code === 'Space' && (game.state === GAME_STATES.MENU || game.state === GAME_STATES.GAMEOVER)) {
    e.preventDefault();
    game.startRun();
    return;
  }

  if (e.code === 'KeyP' || e.code === 'Escape') {
    e.preventDefault();
    if (game.state === GAME_STATES.PLAYING) game.pause();
    else if (game.state === GAME_STATES.PAUSED) game.resume();
    return;
  }

  if (game.state === GAME_STATES.PLAYING) {
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        e.preventDefault();
        game.moveLeft();
        break;
      case 'ArrowRight':
      case 'KeyD':
        e.preventDefault();
        game.moveRight();
        break;
      case 'ArrowUp':
      case 'KeyW':
        e.preventDefault();
        game.jump();
        break;
      case 'ArrowDown':
      case 'KeyS':
        e.preventDefault();
        game.roll();
        break;
      case 'Space':
        e.preventDefault();
        game.handleSpacePress();
        break;
    }
  }
});

// ============================================================================
// TOUCH & SWIPE CONTROLS (Mobile, Tablet, Mouse gestures)
// ============================================================================
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;

window.addEventListener('touchstart', (e) => {
  Audio.initAudio();
  const t = e.changedTouches[0];
  touchStartX = t.clientX;
  touchStartY = t.clientY;
  touchStartTime = Date.now();
}, { passive: true });

window.addEventListener('touchend', (e) => {
  const t = e.changedTouches[0];
  const diffX = t.clientX - touchStartX;
  const diffY = t.clientY - touchStartY;
  const duration = Date.now() - touchStartTime;

  if (game.state === GAME_STATES.PLAYING) {
    const minDistance = 25;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal swipe
      if (Math.abs(diffX) > minDistance) {
        if (diffX < 0) game.moveLeft();
        else game.moveRight();
      }
    } else {
      // Vertical swipe
      if (Math.abs(diffY) > minDistance) {
        if (diffY < 0) game.jump();
        else game.roll();
      }
    }

    // Double tap for hoverboard
    if (duration < 250 && Math.abs(diffX) < 15 && Math.abs(diffY) < 15) {
      game.handleSpacePress();
    }
  }
}, { passive: true });

// ============================================================================
// UI EVENT LISTENERS & MODALS
// ============================================================================
btnPlay.addEventListener('click', () => {
  Audio.initAudio();
  game.startRun();
});

btnPause.addEventListener('click', () => game.pause());
btnResume.addEventListener('click', () => game.resume());
btnRestart.addEventListener('click', () => {
  Audio.initAudio();
  game.startRun();
});
btnPauseRestart.addEventListener('click', () => {
  pauseScreen.classList.add('hidden');
  game.startRun();
});

btnPauseHome.addEventListener('click', () => {
  pauseScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
  hud.classList.add('hidden');
  game.state = GAME_STATES.MENU;
  Audio.stopBGM();
});

btnOverHome.addEventListener('click', () => {
  gameOverScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
  game.state = GAME_STATES.MENU;
});

// Google Authentication
btnGoogleAuth.addEventListener('click', async () => {
  const currentUser = getCurrentUser();
  if (currentUser?.isGoogle) {
    if (confirm(`Currently signed in as ${currentUser.displayName}. Would you like to sign out?`)) {
      await signOutUser();
    }
  } else {
    authBtnText.textContent = 'Signing in...';
    const res = await signInWithGoogle();
    if (!res.success && res.error) {
      authBtnText.textContent = 'Google Sign In';
    }
  }
});

// Subscribe to Auth state changes to update UI avatar and name
subscribeToAuth((user) => {
  if (user) {
    userName.textContent = user.displayName;
    userAvatar.src = user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.uid}`;
    userTopScore.textContent = (user.highScore || 0).toLocaleString();
    if (user.isGoogle) {
      authBtnText.textContent = 'Signed in (Google)';
      btnGoogleAuth.style.background = '#e0f2fe';
    } else {
      authBtnText.textContent = 'Google Sign In';
      btnGoogleAuth.style.background = '#ffffff';
    }
  }
});

// Global Leaderboard Modal
async function openLeaderboard() {
  leaderboardModal.classList.remove('hidden');
  leaderboardBody.innerHTML = `<tr><td colspan="5" class="loading-cell">Loading live world rankings...</td></tr>`;
  
  const list = await fetchLeaderboard();
  leaderboardBody.innerHTML = '';

  if (!list || list.length === 0) {
    leaderboardBody.innerHTML = `<tr><td colspan="5" class="loading-cell">No rankings recorded yet. Be the first!</td></tr>`;
    return;
  }

  const currentUser = getCurrentUser();
  let userRankFound = false;

  list.forEach(entry => {
    const tr = document.createElement('tr');
    let rankBadgeClass = '';
    if (entry.rank === 1) rankBadgeClass = 'rank-1';
    else if (entry.rank === 2) rankBadgeClass = 'rank-2';
    else if (entry.rank === 3) rankBadgeClass = 'rank-3';

    const isCurrent = currentUser && (entry.uid === currentUser.uid || entry.name === currentUser.displayName);
    if (isCurrent) {
      tr.style.background = 'rgba(255, 208, 0, 0.12)';
      userRankFound = true;
      myRankBanner.textContent = `Your Rank: #${entry.rank} with ${entry.score.toLocaleString()} points!`;
    }

    tr.innerHTML = `
      <td><span class="rank-badge ${rankBadgeClass}">${entry.rank}</span></td>
      <td>
        <div class="surfer-cell">
          <img src="${entry.photoURL || 'https://api.dicebear.com/7.x/bottts/svg?seed=surfer'}" alt="" class="surfer-mini-avatar" />
          <span class="surfer-name">${entry.name || 'Surfer'}</span>
        </div>
      </td>
      <td class="score-cell">${(entry.score || 0).toLocaleString()}</td>
      <td class="coin-cell">🪙 ${(entry.coins || 0).toLocaleString()}</td>
      <td class="date-cell">${entry.date || 'Recent'}</td>
    `;
    leaderboardBody.appendChild(tr);
  });

  if (!userRankFound && currentUser) {
    myRankBanner.textContent = currentUser.isGoogle 
      ? `Play a run to set your global ranking!`
      : `Sign in with Google to submit your score to the world!`;
  }
}

btnOpenLeaderboard.addEventListener('click', openLeaderboard);
btnOverLeaderboard.addEventListener('click', openLeaderboard);
btnRefreshLeaderboard.addEventListener('click', openLeaderboard);
btnCloseLeaderboard.addEventListener('click', () => leaderboardModal.classList.add('hidden'));

// Career Records Modal
function openRecords() {
  recordsModal.classList.remove('hidden');
  const user = getCurrentUser() || {};
  recordTotalRuns.textContent = (user.totalRuns || 0).toLocaleString();
  recordHighScore.textContent = (user.highScore || 0).toLocaleString();
  recordTotalCoins.textContent = (user.totalCoins || 0).toLocaleString();
  recordLongestDist.textContent = `${(user.longestDist || 0).toLocaleString()} m`;

  const history = getLocalRunHistory();
  historyRunsList.innerHTML = '';
  if (history.length === 0) {
    historyRunsList.innerHTML = `<div class="empty-history">No runs recorded yet. Start surfing!</div>`;
  } else {
    history.forEach(run => {
      const item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML = `
        <div class="history-score">${run.score.toLocaleString()} pts</div>
        <div class="history-meta">
          <span>🪙 ${run.coins}</span>
          <span>🏃 ${run.distance} m</span>
          <span>📅 ${run.date}</span>
        </div>
      `;
      historyRunsList.appendChild(item);
    });
  }
}

btnOpenRecords.addEventListener('click', openRecords);
btnCloseRecords.addEventListener('click', () => recordsModal.classList.add('hidden'));

// Settings Modal
btnOpenSettings.addEventListener('click', () => {
  settingsModal.classList.remove('hidden');
  const saved = getSavedFirebaseConfig();
  if (saved) {
    firebaseConfigJson.value = JSON.stringify(saved, null, 2);
  }
});
btnCloseSettings.addEventListener('click', () => settingsModal.classList.add('hidden'));

// Sound & Music Toggles
let soundOn = true;
let musicOn = true;

btnToggleSound.addEventListener('click', () => {
  soundOn = !soundOn;
  Audio.toggleSound(soundOn);
  btnToggleSound.textContent = `🔊 Sound: ${soundOn ? 'ON' : 'MUTED'}`;
  btnSoundSetting.textContent = `Sound: ${soundOn ? 'ENABLED' : 'DISABLED'}`;
  btnSoundSetting.className = `toggle-btn ${soundOn ? 'active' : ''}`;
});

btnSoundSetting.addEventListener('click', () => {
  soundOn = !soundOn;
  Audio.toggleSound(soundOn);
  btnSoundSetting.textContent = `Sound: ${soundOn ? 'ENABLED' : 'DISABLED'}`;
  btnSoundSetting.className = `toggle-btn ${soundOn ? 'active' : ''}`;
  btnToggleSound.textContent = `🔊 Sound: ${soundOn ? 'ON' : 'MUTED'}`;
});

btnMusicSetting.addEventListener('click', () => {
  musicOn = !musicOn;
  Audio.toggleMusic(musicOn);
  btnMusicSetting.textContent = `Music: ${musicOn ? 'ENABLED' : 'DISABLED'}`;
  btnMusicSetting.className = `toggle-btn ${musicOn ? 'active' : ''}`;
});

// Firebase Config Save
btnSaveFirebase.addEventListener('click', async () => {
  const text = firebaseConfigJson.value.trim();
  if (!text) {
    firebaseConnectMsg.textContent = '❌ Please paste a valid Firebase JSON config object.';
    firebaseConnectMsg.style.color = '#ff3366';
    return;
  }
  try {
    const parsed = JSON.parse(text);
    saveFirebaseConfig(parsed);
    const initRes = await initFirebase(parsed);
    if (initRes.success) {
      firebaseConnectMsg.textContent = '✅ Connected successfully! Initializing Google Auth...';
      firebaseConnectMsg.style.color = '#00e676';
      initAuth();
    } else {
      firebaseConnectMsg.textContent = `⚠️ Saved, but connect returned: ${initRes.message}`;
      firebaseConnectMsg.style.color = '#f59e0b';
    }
  } catch (err) {
    firebaseConnectMsg.textContent = `❌ Invalid JSON format: ${err.message}`;
    firebaseConnectMsg.style.color = '#ff3366';
  }
});

btnResetFirebase.addEventListener('click', () => {
  clearFirebaseConfig();
  firebaseConfigJson.value = '';
  firebaseConnectMsg.textContent = 'Reset to default high-speed persistent mode.';
  firebaseConnectMsg.style.color = '#94a3b8';
  initFirebase();
  initAuth();
});

// Initial boot
(async function boot() {
  await initFirebase();
  initAuth();
})();
