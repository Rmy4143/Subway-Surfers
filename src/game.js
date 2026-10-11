// Core Game Logic, Physics, Collision Detection, and State Management
import * as THREE from 'three';
import { LANE_WIDTH, LANES } from './world.js';
import * as Audio from './audio.js';

export const GAME_STATES = {
  MENU: 'MENU',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  GAMEOVER: 'GAMEOVER'
};

export class GameEngine {
  constructor(player, worldManager, uiCallbacks) {
    this.player = player;
    this.world = worldManager;
    this.ui = uiCallbacks;

    this.state = GAME_STATES.MENU;

    // Movement & Physics
    this.currentLane = 1; // 0: Left, 1: Middle, 2: Right
    this.targetX = LANES[1];
    this.baseSpeed = 22;
    this.speed = this.baseSpeed;
    this.maxSpeed = 48;

    this.yVel = 0;
    this.gravity = -44;
    this.jumpForce = 15.5;
    this.sneakerJumpForce = 24.5;

    this.isJumping = false;
    this.isRolling = false;
    this.rollTimer = 0;
    this.rollDuration = 0.7;

    this.groundY = 0;
    this.currentSurfaceY = 0;

    // Run Stats
    this.score = 0;
    this.coinsCollected = 0;
    this.distance = 0;
    this.baseMultiplier = 1;

    // Powerup states & timers
    this.activePowerups = {
      jetpack: 0,
      magnet: 0,
      sneakers: 0,
      multiplier: 0
    };

    this.hoverboardActive = false;
    this.lastSpacePressTime = 0;

    // Shake camera effect
    this.shakeIntensity = 0;
  }

  startRun() {
    this.state = GAME_STATES.PLAYING;
    this.score = 0;
    this.coinsCollected = 0;
    this.distance = 0;
    this.speed = this.baseSpeed;

    this.currentLane = 1;
    this.targetX = LANES[1];
    this.player.mesh.position.set(0, 0, 0);
    this.player.reset();

    this.isJumping = false;
    this.isRolling = false;
    this.yVel = 0;
    this.groundY = 0;
    this.currentSurfaceY = 0;

    this.activePowerups = { jetpack: 0, magnet: 0, sneakers: 0, multiplier: 0 };
    this.hoverboardActive = false;

    this.world.reset();
    Audio.startBGM();

    this.ui.onGameStart();
  }

  // Lane Changing
  moveLeft() {
    if (this.state !== GAME_STATES.PLAYING) return;
    if (this.currentLane > 0) {
      this.currentLane--;
      this.targetX = LANES[this.currentLane];
      this.player.tiltAngle = 0.35; // Bank into turn
      Audio.playLaneSwitchSound();
    }
  }

  moveRight() {
    if (this.state !== GAME_STATES.PLAYING) return;
    if (this.currentLane < LANES.length - 1) {
      this.currentLane++;
      this.targetX = LANES[this.currentLane];
      this.player.tiltAngle = -0.35;
      Audio.playLaneSwitchSound();
    }
  }

  jump() {
    if (this.state !== GAME_STATES.PLAYING) return;
    if (this.activePowerups.jetpack > 0) return; // Cannot jump during jetpack

    // Allow jump if on ground or running on train roof
    const onSurface = Math.abs(this.player.mesh.position.y - this.currentSurfaceY) < 0.15;
    if (onSurface || !this.isJumping) {
      const force = this.activePowerups.sneakers > 0 ? this.sneakerJumpForce : this.jumpForce;
      this.yVel = force;
      this.isJumping = true;
      this.isRolling = false;
      Audio.playJumpSound();
    }
  }

  roll() {
    if (this.state !== GAME_STATES.PLAYING) return;
    if (this.activePowerups.jetpack > 0) return;

    this.isRolling = true;
    this.rollTimer = this.rollDuration;

    // Fast-drop if mid-air
    if (this.isJumping) {
      this.yVel = -28;
    }
    Audio.playRollSound();
  }

  toggleHoverboard() {
    if (this.state !== GAME_STATES.PLAYING) return;
    if (!this.hoverboardActive) {
      this.hoverboardActive = true;
      this.player.setHoverboard(true);
      Audio.playHoverboardSound();
      this.ui.onHoverboardToggle(true);
    }
  }

  handleSpacePress() {
    const now = Date.now();
    if (now - this.lastSpacePressTime < 350) {
      // Double tap detected -> Trigger Hoverboard!
      this.toggleHoverboard();
    } else {
      this.jump();
    }
    this.lastSpacePressTime = now;
  }

  update(delta) {
    if (this.state !== GAME_STATES.PLAYING) return;

    // Cap delta to prevent huge jumps on tab switch
    const dt = Math.min(delta, 0.1);

    // 1. Forward progression & Speed curve
    this.player.mesh.position.z -= this.speed * dt;
    this.distance = Math.floor(Math.abs(this.player.mesh.position.z));
    
    // Gradual speed scaling
    this.speed = Math.min(this.maxSpeed, this.baseSpeed + (this.distance / 120) * 0.8);

    // 2. Score Calculation
    const multi = (this.activePowerups.multiplier > 0 ? 2 : 1) * this.baseMultiplier;
    this.score += Math.floor(this.speed * dt * multi * 1.5);

    // 3. Smooth Lane Swerve (X axis)
    this.player.mesh.position.x = THREE.MathUtils.lerp(this.player.mesh.position.x, this.targetX, dt * 14);
    this.player.tiltAngle = THREE.MathUtils.lerp(this.player.tiltAngle, 0, dt * 8);

    // 4. Powerup Countdown Timers
    this.updatePowerupTimers(dt);

    // 5. Vertical Physics & Surface Height (Y axis)
    this.updateVerticalPhysics(dt);

    // 6. Check Collisions (Trains, Obstacles, Coins, Powerups)
    this.checkCollisions();

    // 7. Update 3D World & Character Animations
    this.world.update(
      dt, 
      this.player.mesh.position, 
      this.activePowerups.jetpack > 0, 
      this.activePowerups.magnet > 0
    );

    this.player.updateAnimation(dt, this.speed, {
      isJumping: this.isJumping,
      isRolling: this.isRolling
    });

    // 8. Update HUD callback
    this.ui.onHUDUpdate({
      score: this.score,
      coins: this.coinsCollected,
      distance: this.distance,
      multiplier: multi,
      activePowerups: this.activePowerups
    });
  }

  updateVerticalPhysics(dt) {
    // Check if player is above a train roof or riding up a ramp
    const playerZ = this.player.mesh.position.z;
    const playerX = this.player.mesh.position.x;
    const currentY = this.player.mesh.position.y;
    let surfaceHeight = 0;

    for (const train of this.world.trains) {
      const b = train.bounds;
      const trainMinZ = train.position.z - b.length / 2;
      const trainFrontZ = train.position.z + b.length / 2;
      const rampLen = b.hasRamp ? 4.5 : 0;
      const trainMaxZ = trainFrontZ + rampLen;

      // Within train length & lane
      if (playerZ >= trainMinZ && playerZ <= trainMaxZ && Math.abs(playerX - b.laneX) < 1.2) {
        if (b.hasRamp && playerZ > trainFrontZ - 0.5) {
          // Running up the front ramp!
          const rampProgress = Math.max(0, Math.min(1, (trainMaxZ - playerZ) / rampLen));
          surfaceHeight = rampProgress * b.height;
          break;
        } else if (currentY >= b.height - 0.3) {
          // ONLY land on train top if player is already at or above roof height!
          // Cannot climb up from the ground or by hitting the side!
          surfaceHeight = b.height;
          break;
        }
      }
    }

    this.currentSurfaceY = surfaceHeight;

    if (this.activePowerups.jetpack > 0) {
      // Soar high in the sky!
      const targetSkyY = 8.5;
      this.player.mesh.position.y = THREE.MathUtils.lerp(this.player.mesh.position.y, targetSkyY, dt * 6);
      this.isJumping = false;
      this.isRolling = false;
      return;
    }

    // Apply gravity
    this.yVel += this.gravity * dt;
    this.player.mesh.position.y += this.yVel * dt;

    // Land on current surface (ground or train roof)
    if (this.player.mesh.position.y <= this.currentSurfaceY) {
      this.player.mesh.position.y = this.currentSurfaceY;
      this.yVel = 0;
      this.isJumping = false;
    } else {
      this.isJumping = true;
    }

    // Roll timer countdown
    if (this.isRolling) {
      this.rollTimer -= dt;
      if (this.rollTimer <= 0) {
        this.isRolling = false;
      }
    }
  }

  updatePowerupTimers(dt) {
    for (const key in this.activePowerups) {
      if (this.activePowerups[key] > 0) {
        this.activePowerups[key] -= dt;
        if (this.activePowerups[key] <= 0) {
          this.activePowerups[key] = 0;
          if (key === 'jetpack') {
            this.player.setJetpack(false);
          }
        }
      }
    }
  }

  checkCollisions() {
    const pPos = this.player.mesh.position;
    const isJet = this.activePowerups.jetpack > 0;

    // 1. Collect Coins
    for (let i = this.world.coins.length - 1; i >= 0; i--) {
      const coin = this.world.coins[i];
      const dist = pPos.distanceTo(coin.position);
      if (dist < 1.35) {
        // Collect!
        this.coinsCollected++;
        this.score += 60;
        Audio.playCoinSound();
        this.world.scene.remove(coin);
        this.world.coins.splice(i, 1);
      }
    }

    // 2. Collect Powerups
    for (let i = this.world.powerups.length - 1; i >= 0; i--) {
      const p = this.world.powerups[i];
      const dist = pPos.distanceTo(p.position);
      if (dist < 1.6) {
        // Activate powerup
        const type = p.powerupType;
        if (type === 'jetpack') {
          this.activePowerups.jetpack = 10;
          this.player.setJetpack(true);
        } else if (type === 'magnet') {
          this.activePowerups.magnet = 12;
        } else if (type === 'sneakers') {
          this.activePowerups.sneakers = 12;
        } else if (type === 'multiplier') {
          this.activePowerups.multiplier = 15;
        }

        Audio.playPowerupSound();
        this.world.scene.remove(p);
        this.world.powerups.splice(i, 1);
      }
    }

    // If soaring on jetpack, immune to ground obstacles!
    if (isJet) return;

    // 3. Barriers / Hurdles
    for (const obs of this.world.obstacles) {
      const b = obs.bounds;
      const zDiff = Math.abs(pPos.z - obs.position.z);
      const xDiff = Math.abs(pPos.x - b.laneX);

      if (zDiff < 0.9 && xDiff < 1.0) {
        if (obs.barrierType === 'low') {
          // Low barrier: Must jump over!
          if (pPos.y < 1.1) {
            this.handleCrash();
            return;
          }
        } else if (obs.barrierType === 'high') {
          // High barrier: Must roll under!
          if (!this.isRolling) {
            this.handleCrash();
            return;
          }
        }
      }
    }

    // 4. Train Collisions (Front & Side Crash)
    // If hitting the side or front of a train while below roof level, player MUST get out (crash)!
    for (const train of this.world.trains) {
      const b = train.bounds;
      const trainFrontZ = train.position.z + b.length / 2;
      const trainBackZ = train.position.z - b.length / 2;
      const rampLen = b.hasRamp ? 4.5 : 0;
      const xDiff = Math.abs(pPos.x - b.laneX);

      // Check if player is along the length of the train
      if (pPos.z <= trainFrontZ + (b.hasRamp ? 0.2 : 0) && pPos.z >= trainBackZ) {
        // If player is below roof level:
        if (pPos.y < b.height - 0.35) {
          // If entering or swiping into the train body (half width ~1.2m + player margin):
          if (xDiff < 1.35) {
            // Side hit or front crash! Must get out!
            this.handleCrash();
            return;
          }
        }
      }
    }
  }

  handleCrash() {
    if (this.hoverboardActive) {
      // Hoverboard shields the player from this crash!
      this.hoverboardActive = false;
      this.player.setHoverboard(false);
      this.ui.onHoverboardToggle(false);
      Audio.playCrashSound(); // Quick impact sound
      // Push slightly back and flash
      this.yVel = 8;
      return;
    }

    // Fatal Crash
    this.state = GAME_STATES.GAMEOVER;
    this.player.isDead = true;
    Audio.stopBGM();
    Audio.playCrashSound();

    this.ui.onGameOver({
      score: this.score,
      coins: this.coinsCollected,
      distance: this.distance
    });
  }

  pause() {
    if (this.state === GAME_STATES.PLAYING) {
      this.state = GAME_STATES.PAUSED;
      Audio.stopBGM();
      this.ui.onPause();
    }
  }

  resume() {
    if (this.state === GAME_STATES.PAUSED) {
      this.state = GAME_STATES.PLAYING;
      Audio.startBGM();
      this.ui.onResume();
    }
  }
}
