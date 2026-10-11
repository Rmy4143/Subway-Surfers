// Procedural 3D Subway Environment, Trains, Obstacles, and Collectibles
import * as THREE from 'three';

export const LANE_WIDTH = 3.2;
export const LANES = [-LANE_WIDTH, 0, LANE_WIDTH];

export class WorldManager {
  constructor(scene) {
    this.scene = scene;
    
    // Object pools and active sets
    this.trackChunks = [];
    this.obstacles = [];
    this.trains = [];
    this.coins = [];
    this.powerups = [];
    this.sceneryProps = [];

    this.chunkLength = 60;
    this.totalChunks = 7;
    this.nextChunkZ = -this.chunkLength;

    // Shared materials for high performance
    this.materials = {
      ground: new THREE.MeshStandardMaterial({ color: 0x1a2130, roughness: 0.9, metalness: 0.1 }),
      rail: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3, metalness: 0.8 }),
      sleeper: new THREE.MeshStandardMaterial({ color: 0x3d271d, roughness: 0.9 }),
      wall: new THREE.MeshStandardMaterial({ color: 0x242d3d, roughness: 0.8 }),
      concrete: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 }),
      trainBodyRed: new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.4, roughness: 0.4 }),
      trainBodySilver: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.7, roughness: 0.3 }),
      trainWindow: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.9 }),
      headlight: new THREE.MeshBasicMaterial({ color: 0xfff7ed }),
      barrierStripe: new THREE.MeshLambertMaterial({ color: 0xf59e0b }),
      barrierLeg: new THREE.MeshLambertMaterial({ color: 0xffffff }),
      coin: new THREE.MeshStandardMaterial({ 
        color: 0xffd700, 
        metalness: 0.85, 
        roughness: 0.2, 
        emissive: 0x996500 
      }),
      magnet: new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.6, roughness: 0.3 }),
      jetpack: new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.7, roughness: 0.2, emissive: 0x047857 }),
      sneakers: new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.5, roughness: 0.4, emissive: 0x6d28d9 }),
      multiplier: new THREE.MeshStandardMaterial({ color: 0xec4899, metalness: 0.6, roughness: 0.3, emissive: 0xbe185d })
    };

    // Shared geometries
    this.coinGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.1, 16);
    this.coinGeo.rotateX(Math.PI / 2);

    this.initEnvironment();
  }

  initEnvironment() {
    // Ambient and directional lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5eb, 1.6);
    dirLight.position.set(20, 40, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 120;
    dirLight.shadow.camera.left = -25;
    dirLight.shadow.camera.right = 25;
    dirLight.shadow.camera.top = 25;
    dirLight.shadow.camera.bottom = -25;
    this.scene.add(dirLight);

    // Subtle atmospheric fog for infinite distance feel
    this.scene.fog = new THREE.Fog(0x090d16, 50, 150);

    // Inspector Chaser Model
    this.createInspector();

    // Generate initial track chunks
    for (let i = 0; i < this.totalChunks; i++) {
      const z = -(i * this.chunkLength) + 30;
      this.spawnTrackChunk(z, i === 0);
    }
  }

  createInspector() {
    this.inspectorGroup = new THREE.Group();
    
    // Inspector body (Officer in blue uniform)
    const officerMat = new THREE.MeshLambertMaterial({ color: 0x1e3a8a });
    const capMat = new THREE.MeshLambertMaterial({ color: 0x0f172a });
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xffdfc4 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.9, 0.5), officerMat);
    body.position.y = 1.4;
    this.inspectorGroup.add(body);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), skinMat);
    head.position.y = 2.05;
    this.inspectorGroup.add(head);

    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.2, 0.56), capMat);
    cap.position.y = 2.22;
    this.inspectorGroup.add(cap);

    // Inspector's barking Bulldog
    const dogMat = new THREE.MeshLambertMaterial({ color: 0x78350f });
    const dog = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.7), dogMat);
    dog.position.set(0.7, 0.3, 0.2);
    this.inspectorGroup.add(dog);

    this.inspectorGroup.position.set(0, 0, 7); // Chasing right behind player
    this.scene.add(this.inspectorGroup);
  }

  spawnTrackChunk(zPos, isSafeStart = false) {
    const chunk = new THREE.Group();
    chunk.position.z = zPos;

    // Ground gravel ballast
    const groundGeo = new THREE.PlaneGeometry(24, this.chunkLength);
    const ground = new THREE.Mesh(groundGeo, this.materials.ground);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    chunk.add(ground);

    // Sidewalk walls / barriers
    const wallGeo = new THREE.BoxGeometry(1.2, 4.5, this.chunkLength);
    const leftWall = new THREE.Mesh(wallGeo, this.materials.wall);
    leftWall.position.set(-8.5, 2.25, 0);
    chunk.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeo, this.materials.wall);
    rightWall.position.set(8.5, 2.25, 0);
    chunk.add(rightWall);

    // Rails and Wooden Sleepers for the 3 lanes
    LANES.forEach(laneX => {
      // 2 Steel Rails per lane
      const railGeo = new THREE.BoxGeometry(0.1, 0.12, this.chunkLength);
      const railL = new THREE.Mesh(railGeo, this.materials.rail);
      railL.position.set(laneX - 0.75, 0.08, 0);
      chunk.add(railL);

      const railR = new THREE.Mesh(railGeo, this.materials.rail);
      railR.position.set(laneX + 0.75, 0.08, 0);
      chunk.add(railR);

      // Sleepers (cross-ties)
      const sleeperGeo = new THREE.BoxGeometry(2.0, 0.08, 0.4);
      for (let sZ = -this.chunkLength / 2; sZ < this.chunkLength / 2; sZ += 2.2) {
        const sleeper = new THREE.Mesh(sleeperGeo, this.materials.sleeper);
        sleeper.position.set(laneX, 0.04, sZ);
        chunk.add(sleeper);
      }
    });

    // Overhead Subway Arch Gantries
    const archGeo = new THREE.BoxGeometry(18, 0.6, 0.6);
    const archPillarGeo = new THREE.BoxGeometry(0.6, 7, 0.6);
    
    const arch = new THREE.Mesh(archGeo, this.materials.concrete);
    arch.position.set(0, 6.8, 0);
    chunk.add(arch);

    const pillarL = new THREE.Mesh(archPillarGeo, this.materials.concrete);
    pillarL.position.set(-8, 3.5, 0);
    chunk.add(pillarL);

    const pillarR = new THREE.Mesh(archPillarGeo, this.materials.concrete);
    pillarR.position.set(8, 3.5, 0);
    chunk.add(pillarR);

    this.scene.add(chunk);
    this.trackChunks.push(chunk);

    // Populate with obstacles and items if not safe start zone
    if (!isSafeStart) {
      this.populateChunkContent(zPos);
    }
  }

  populateChunkContent(zPos) {
    // Choose obstacles and trains for the 3 lanes
    const laneOccupied = [false, false, false];

    // Guarantee that at least ONE lane is always free or safe to pass!
    // 1. Train placement chance (45%)
    LANES.forEach((laneX, laneIdx) => {
      if (Math.random() < 0.45 && !laneOccupied[laneIdx]) {
        // Can spawn a train in this lane
        const occupiedCount = laneOccupied.filter(Boolean).length;
        if (occupiedCount < 2) { // Keep at least one clear lane
          laneOccupied[laneIdx] = true;
          const isMoving = Math.random() < 0.35;
          const hasRamp = Math.random() < 0.55;
          this.spawnTrain(laneX, zPos + (Math.random() * 15 - 7.5), isMoving, hasRamp);
        }
      }
    });

    // 2. Barriers & Hurdles on remaining lanes
    LANES.forEach((laneX, laneIdx) => {
      if (!laneOccupied[laneIdx] && Math.random() < 0.5) {
        const occupiedCount = laneOccupied.filter(Boolean).length;
        if (occupiedCount < 2) {
          const type = Math.random() < 0.5 ? 'low' : 'high'; // 'low' requires jump, 'high' requires roll!
          this.spawnBarrier(laneX, zPos + (Math.random() * 20 - 10), type);
          laneOccupied[laneIdx] = true;
        }
      }
    });

    // 3. Coins trails & Powerups
    this.spawnCoinsAndPowerups(zPos, laneOccupied);
  }

  spawnTrain(laneX, zPos, isMoving = false, hasRamp = false) {
    const trainGroup = new THREE.Group();
    trainGroup.position.set(laneX, 0, zPos);

    const trainLen = 22;
    const trainWidth = 2.4;
    const trainHeight = 3.6;

    // Main Train Body
    const bodyGeo = new THREE.BoxGeometry(trainWidth, trainHeight, trainLen);
    const bodyMat = Math.random() < 0.5 ? this.materials.trainBodyRed : this.materials.trainBodySilver;
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = trainHeight / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    trainGroup.add(body);

    // Front Windshield
    const windowGeo = new THREE.BoxGeometry(trainWidth * 0.85, 1.2, 0.2);
    const frontWindow = new THREE.Mesh(windowGeo, this.materials.trainWindow);
    frontWindow.position.set(0, trainHeight * 0.7, trainLen / 2 + 0.05);
    trainGroup.add(frontWindow);

    // Glowing Headlights
    const lightGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 12);
    lightGeo.rotateX(Math.PI / 2);
    
    const headL = new THREE.Mesh(lightGeo, this.materials.headlight);
    headL.position.set(-0.75, 1.2, trainLen / 2 + 0.1);
    trainGroup.add(headL);

    const headR = new THREE.Mesh(lightGeo, this.materials.headlight);
    headR.position.set(0.75, 1.2, trainLen / 2 + 0.1);
    trainGroup.add(headR);

    // Train Ramp (allows runner to launch up onto train roof)
    if (hasRamp) {
      const rampGeo = new THREE.BoxGeometry(trainWidth, 0.2, 5);
      const ramp = new THREE.Mesh(rampGeo, this.materials.barrierStripe);
      ramp.position.set(0, 1.8, trainLen / 2 + 2.4);
      ramp.rotation.x = 0.58; // Angled upward ramp
      ramp.castShadow = true;
      trainGroup.add(ramp);
      trainGroup.hasRamp = true;
    }

    // Coins on train roof!
    for (let cZ = -trainLen / 2 + 2; cZ < trainLen / 2 - 2; cZ += 2.2) {
      this.spawnSingleCoin(laneX, trainHeight + 0.5, zPos + cZ);
    }

    trainGroup.isMoving = isMoving;
    trainGroup.speed = isMoving ? 14 : 0;
    trainGroup.bounds = {
      laneX,
      width: trainWidth,
      height: trainHeight,
      length: trainLen,
      hasRamp
    };

    this.scene.add(trainGroup);
    this.trains.push(trainGroup);
  }

  spawnBarrier(laneX, zPos, type) {
    const barrierGroup = new THREE.Group();
    barrierGroup.position.set(laneX, 0, zPos);
    barrierGroup.barrierType = type; // 'low' or 'high'

    if (type === 'low') {
      // Low wooden hurdle (Jump over!)
      const barGeo = new THREE.BoxGeometry(2.6, 0.35, 0.2);
      const bar = new THREE.Mesh(barGeo, this.materials.barrierStripe);
      bar.position.y = 0.95;
      bar.castShadow = true;
      barrierGroup.add(bar);

      const legGeo = new THREE.BoxGeometry(0.18, 1.0, 0.18);
      const legL = new THREE.Mesh(legGeo, this.materials.barrierLeg);
      legL.position.set(-1.1, 0.5, 0);
      legL.castShadow = true;
      barrierGroup.add(legL);

      const legR = new THREE.Mesh(legGeo, this.materials.barrierLeg);
      legR.position.set(1.1, 0.5, 0);
      legR.castShadow = true;
      barrierGroup.add(legR);

      barrierGroup.bounds = { laneX, yMin: 0, yMax: 1.2, z: zPos, radius: 0.8 };
    } else {
      // High barrier / Toll gate (Roll under!)
      const topBarGeo = new THREE.BoxGeometry(2.6, 0.5, 0.3);
      const topBar = new THREE.Mesh(topBarGeo, this.materials.barrierStripe);
      topBar.position.y = 2.4;
      topBar.castShadow = true;
      barrierGroup.add(topBar);

      const postGeo = new THREE.BoxGeometry(0.2, 2.7, 0.2);
      const postL = new THREE.Mesh(postGeo, this.materials.barrierLeg);
      postL.position.set(-1.15, 1.35, 0);
      barrierGroup.add(postL);

      const postR = new THREE.Mesh(postGeo, this.materials.barrierLeg);
      postR.position.set(1.15, 1.35, 0);
      barrierGroup.add(postR);

      // Warning sign hanging
      const signGeo = new THREE.BoxGeometry(1.6, 0.4, 0.1);
      const sign = new THREE.Mesh(signGeo, this.materials.trainBodyRed);
      sign.position.set(0, 1.9, 0);
      barrierGroup.add(sign);

      barrierGroup.bounds = { laneX, yMin: 1.5, yMax: 2.7, z: zPos, radius: 0.8 };
    }

    this.scene.add(barrierGroup);
    this.obstacles.push(barrierGroup);
  }

  spawnSingleCoin(x, y, z) {
    const coin = new THREE.Mesh(this.coinGeo, this.materials.coin);
    coin.position.set(x, y, z);
    coin.castShadow = true;
    this.scene.add(coin);
    this.coins.push(coin);
  }

  spawnCoinsAndPowerups(zPos, laneOccupied) {
    // Pick an available lane for ground coins
    const openLanes = LANES.filter((_, idx) => !laneOccupied[idx]);
    if (openLanes.length > 0) {
      const selectedLane = openLanes[Math.floor(Math.random() * openLanes.length)];
      
      // Arc or straight line of coins
      const coinCount = 6;
      const isArc = Math.random() < 0.35;
      for (let i = 0; i < coinCount; i++) {
        const cZ = zPos + (i - coinCount / 2) * 2.2;
        let cY = 0.6;
        if (isArc) {
          cY += Math.sin((i / (coinCount - 1)) * Math.PI) * 2.2;
        }
        this.spawnSingleCoin(selectedLane, cY, cZ);
      }

      // 15% chance to spawn a powerup
      if (Math.random() < 0.2) {
        const pTypes = ['magnet', 'jetpack', 'sneakers', 'multiplier'];
        const chosenType = pTypes[Math.floor(Math.random() * pTypes.length)];
        this.spawnPowerup(selectedLane, zPos + 12, chosenType);
      }
    }
  }

  spawnPowerup(laneX, zPos, type) {
    const pGroup = new THREE.Group();
    pGroup.position.set(laneX, 1.2, zPos);
    pGroup.powerupType = type;

    let mesh;
    if (type === 'magnet') {
      mesh = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.12, 8, 16, Math.PI), this.materials.magnet);
      mesh.rotation.z = Math.PI;
    } else if (type === 'jetpack') {
      mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.7, 8), this.materials.jetpack);
    } else if (type === 'sneakers') {
      mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.7), this.materials.sneakers);
    } else { // multiplier
      mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.4), this.materials.multiplier);
    }

    mesh.castShadow = true;
    pGroup.add(mesh);

    // Glowing halo ring around powerup
    const haloGeo = new THREE.RingGeometry(0.55, 0.65, 16);
    const haloMat = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      side: THREE.DoubleSide, 
      transparent: true, 
      opacity: 0.6 
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    pGroup.add(halo);

    this.scene.add(pGroup);
    this.powerups.push(pGroup);
  }

  update(delta, playerPos, isJetpacking, magnetActive) {
    // 1. Move moving trains
    this.trains.forEach(train => {
      if (train.isMoving) {
        train.position.z += train.speed * delta;
      }
    });

    // 2. Rotate spinning coins and attract if magnet is active
    this.coins.forEach(coin => {
      coin.rotation.z += delta * 4;

      if (magnetActive && !isJetpacking) {
        const dist = coin.position.distanceTo(playerPos);
        if (dist < 18) {
          // Pull coin smoothly towards player
          coin.position.lerp(playerPos, delta * 9);
        }
      }
    });

    // 3. Bob and spin powerups
    this.powerups.forEach(p => {
      p.rotation.y += delta * 3;
      p.position.y = 1.2 + Math.sin(Date.now() * 0.005) * 0.2;
    });

    // 4. Update Inspector & dog chase
    if (this.inspectorGroup) {
      // If player stumbled, inspector gets closer; otherwise stays ~7 units behind
      const targetZ = playerPos.z + 7.5;
      this.inspectorGroup.position.z = THREE.MathUtils.lerp(this.inspectorGroup.position.z, targetZ, 0.05);
      this.inspectorGroup.position.x = THREE.MathUtils.lerp(this.inspectorGroup.position.x, playerPos.x, 0.08);
      
      // Running bounce for officer & dog
      const bounce = Math.abs(Math.sin(Date.now() * 0.01)) * 0.2;
      this.inspectorGroup.position.y = bounce;
    }

    // 5. Infinite track recycling
    // When oldest chunk is far behind player, remove it and generate a new one ahead
    if (this.trackChunks.length > 0) {
      const oldestChunk = this.trackChunks[0];
      if (oldestChunk.position.z > playerPos.z + 40) {
        this.scene.remove(oldestChunk);
        this.trackChunks.shift();

        // Spawn new chunk in front
        const newestZ = this.trackChunks[this.trackChunks.length - 1].position.z;
        this.spawnTrackChunk(newestZ - this.chunkLength, false);
      }
    }

    // Clean up objects that have passed far behind player
    this.cleanupBehind(playerPos.z + 30);
  }

  cleanupBehind(maxZ) {
    // Obstacles
    this.obstacles = this.obstacles.filter(obs => {
      if (obs.position.z > maxZ) {
        this.scene.remove(obs);
        return false;
      }
      return true;
    });

    // Trains
    this.trains = this.trains.filter(train => {
      if (train.position.z > maxZ + 20) {
        this.scene.remove(train);
        return false;
      }
      return true;
    });

    // Coins
    this.coins = this.coins.filter(coin => {
      if (coin.position.z > maxZ) {
        this.scene.remove(coin);
        return false;
      }
      return true;
    });

    // Powerups
    this.powerups = this.powerups.filter(p => {
      if (p.position.z > maxZ) {
        this.scene.remove(p);
        return false;
      }
      return true;
    });
  }

  reset() {
    // Clear all spawned items
    [...this.obstacles, ...this.trains, ...this.coins, ...this.powerups].forEach(obj => {
      this.scene.remove(obj);
    });
    this.obstacles = [];
    this.trains = [];
    this.coins = [];
    this.powerups = [];

    // Reset track chunks
    this.trackChunks.forEach(chunk => this.scene.remove(chunk));
    this.trackChunks = [];

    for (let i = 0; i < this.totalChunks; i++) {
      const z = -(i * this.chunkLength) + 30;
      this.spawnTrackChunk(z, i === 0);
    }

    if (this.inspectorGroup) {
      this.inspectorGroup.position.set(0, 0, 7);
    }
  }
}
