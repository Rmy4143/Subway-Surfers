// 3D Player Character Model & Rigging (Jake The Surfer)
import * as THREE from 'three';

export class Player {
  constructor() {
    this.mesh = new THREE.Group();
    
    // Character materials
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xffdfc4 });
    const capMat = new THREE.MeshLambertMaterial({ color: 0xff2a42 });
    const capBrimMat = new THREE.MeshLambertMaterial({ color: 0x1e293b });
    const hoodieMat = new THREE.MeshLambertMaterial({ color: 0x3b82f6 });
    const shirtMat = new THREE.MeshLambertMaterial({ color: 0xf8fafc });
    const jeansMat = new THREE.MeshLambertMaterial({ color: 0x1e3a8a });
    const shoeWhiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const shoeRedMat = new THREE.MeshLambertMaterial({ color: 0xef4444 });
    const hoverboardMat = new THREE.MeshStandardMaterial({ 
      color: 0x00e5ff, 
      emissive: 0x005577, 
      metalness: 0.8, 
      roughness: 0.2 
    });
    const jetpackMat = new THREE.MeshStandardMaterial({ 
      color: 0xff9900, 
      emissive: 0x442200, 
      metalness: 0.6, 
      roughness: 0.3 
    });

    // Root node for character body
    this.bodyGroup = new THREE.Group();
    this.mesh.add(this.bodyGroup);

    // Torso / Hoodie
    const torsoGeo = new THREE.BoxGeometry(0.7, 0.85, 0.45);
    this.torso = new THREE.Mesh(torsoGeo, hoodieMat);
    this.torso.position.y = 1.35;
    this.torso.castShadow = true;
    this.bodyGroup.add(this.torso);

    // Inner t-shirt stripe
    const shirtGeo = new THREE.BoxGeometry(0.35, 0.75, 0.47);
    const shirtMesh = new THREE.Mesh(shirtGeo, shirtMat);
    shirtMesh.position.y = 1.35;
    this.bodyGroup.add(shirtMesh);

    // Head
    const headGeo = new THREE.BoxGeometry(0.5, 0.52, 0.5);
    this.head = new THREE.Mesh(headGeo, skinMat);
    this.head.position.y = 1.95;
    this.head.castShadow = true;
    this.bodyGroup.add(this.head);

    // Backwards Cap
    const capGeo = new THREE.BoxGeometry(0.54, 0.22, 0.54);
    this.cap = new THREE.Mesh(capGeo, capMat);
    this.cap.position.y = 2.12;
    this.bodyGroup.add(this.cap);

    // Cap Brim pointing backward
    const brimGeo = new THREE.BoxGeometry(0.48, 0.05, 0.28);
    const brim = new THREE.Mesh(brimGeo, capBrimMat);
    brim.position.set(0, 2.05, -0.32);
    this.bodyGroup.add(brim);

    // Arms
    const armGeo = new THREE.BoxGeometry(0.2, 0.7, 0.2);
    
    // Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.48, 1.65, 0);
    const lArmMesh = new THREE.Mesh(armGeo, hoodieMat);
    lArmMesh.position.y = -0.3;
    lArmMesh.castShadow = true;
    this.leftArm.add(lArmMesh);
    this.bodyGroup.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.48, 1.65, 0);
    const rArmMesh = new THREE.Mesh(armGeo, hoodieMat);
    rArmMesh.position.y = -0.3;
    rArmMesh.castShadow = true;
    this.rightArm.add(rArmMesh);
    this.bodyGroup.add(this.rightArm);

    // Legs
    const legGeo = new THREE.BoxGeometry(0.24, 0.75, 0.26);

    // Left Leg
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.22, 0.85, 0);
    const lLegMesh = new THREE.Mesh(legGeo, jeansMat);
    lLegMesh.position.y = -0.35;
    lLegMesh.castShadow = true;
    this.leftLeg.add(lLegMesh);
    
    // Left Shoe
    const shoeGeo = new THREE.BoxGeometry(0.26, 0.18, 0.42);
    const lShoe = new THREE.Mesh(shoeGeo, shoeRedMat);
    lShoe.position.set(0, -0.72, 0.06);
    this.leftLeg.add(lShoe);
    this.bodyGroup.add(this.leftLeg);

    // Right Leg
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.22, 0.85, 0);
    const rLegMesh = new THREE.Mesh(legGeo, jeansMat);
    rLegMesh.position.y = -0.35;
    rLegMesh.castShadow = true;
    this.rightLeg.add(rLegMesh);

    // Right Shoe
    const rShoe = new THREE.Mesh(shoeGeo, shoeRedMat);
    rShoe.position.set(0, -0.72, 0.06);
    this.rightLeg.add(rShoe);
    this.bodyGroup.add(this.rightLeg);

    // Shadow blob
    const shadowGeo = new THREE.CircleGeometry(0.55, 16);
    const shadowMat = new THREE.MeshBasicMaterial({ 
      color: 0x000000, 
      transparent: true, 
      opacity: 0.4 
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.02;
    this.mesh.add(this.shadowMesh);

    // Hoverboard accessory
    this.hoverboard = new THREE.Group();
    const boardGeo = new THREE.BoxGeometry(0.8, 0.08, 1.4);
    const boardMesh = new THREE.Mesh(boardGeo, hoverboardMat);
    this.hoverboard.add(boardMesh);
    
    // Hoverboard neon edge light
    const edgeGeo = new THREE.BoxGeometry(0.84, 0.04, 1.44);
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
    this.hoverboard.add(edgeMesh);
    this.hoverboard.position.y = 0.12;
    this.hoverboard.visible = false;
    this.mesh.add(this.hoverboard);

    // Jetpack accessory
    this.jetpack = new THREE.Group();
    const tankGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.65, 8);
    const leftTank = new THREE.Mesh(tankGeo, jetpackMat);
    leftTank.position.set(-0.2, 1.4, -0.3);
    const rightTank = new THREE.Mesh(tankGeo, jetpackMat);
    rightTank.position.set(0.2, 1.4, -0.3);
    this.jetpack.add(leftTank);
    this.jetpack.add(rightTank);
    
    // Jetpack thruster nozzles
    const nozzleGeo = new THREE.ConeGeometry(0.14, 0.2, 8);
    const nozzleMat = new THREE.MeshBasicMaterial({ color: 0xff3300 });
    const leftNozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
    leftNozzle.position.set(-0.2, 1.0, -0.3);
    leftNozzle.rotation.x = Math.PI;
    const rightNozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
    rightNozzle.position.set(0.2, 1.0, -0.3);
    rightNozzle.rotation.x = Math.PI;
    this.jetpack.add(leftNozzle);
    this.jetpack.add(rightNozzle);
    
    this.jetpack.visible = false;
    this.bodyGroup.add(this.jetpack);

    // Animation state
    this.animTime = 0;
    this.isJumping = false;
    this.isRolling = false;
    this.isHoverboarding = false;
    this.isJetpacking = false;
    this.isDead = false;
    this.tiltAngle = 0;
  }

  setHoverboard(active) {
    this.isHoverboarding = active;
    this.hoverboard.visible = active;
  }

  setJetpack(active) {
    this.isJetpacking = active;
    this.jetpack.visible = active;
  }

  updateAnimation(delta, speed, state) {
    if (this.isDead) {
      // Tumble / fall backward
      this.bodyGroup.rotation.x = THREE.MathUtils.lerp(this.bodyGroup.rotation.x, -Math.PI / 3, 0.1);
      this.bodyGroup.position.y = THREE.MathUtils.lerp(this.bodyGroup.position.y, 0.2, 0.1);
      return;
    }

    this.animTime += delta * speed * 0.45;
    
    // Smooth lane tilt
    this.bodyGroup.rotation.z = THREE.MathUtils.lerp(this.bodyGroup.rotation.z, this.tiltAngle, 0.2);

    if (state.isRolling) {
      // Crouch and roll tuck
      this.bodyGroup.scale.set(1.1, 0.5, 1.1);
      this.bodyGroup.position.y = -0.3;
      this.bodyGroup.rotation.x = -this.animTime * 3; // Fast forward spin
      this.leftArm.rotation.x = 0;
      this.rightArm.rotation.x = 0;
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      if (this.isHoverboarding) {
        this.hoverboard.position.y = 0.05;
      }
    } else if (state.isJumping || this.isJetpacking) {
      // Jump pose
      this.bodyGroup.scale.set(1, 1, 1);
      this.bodyGroup.position.y = 0;
      this.bodyGroup.rotation.x = 0;
      
      const tuck = 0.6;
      this.leftLeg.rotation.x = -tuck;
      this.rightLeg.rotation.x = -tuck * 0.8;
      this.leftArm.rotation.x = tuck * 1.2;
      this.rightArm.rotation.x = tuck * 1.2;
      this.leftArm.rotation.z = -0.3;
      this.rightArm.rotation.z = 0.3;
    } else if (this.isHoverboarding) {
      // Surfing pose on hoverboard
      this.bodyGroup.scale.set(1, 1, 1);
      this.bodyGroup.position.y = 0.15;
      this.bodyGroup.rotation.x = 0;
      this.bodyGroup.rotation.y = 0.35; // Angled surf stance
      
      this.leftLeg.rotation.x = 0.1;
      this.rightLeg.rotation.x = -0.1;
      this.leftArm.rotation.z = -0.6;
      this.rightArm.rotation.z = 0.6;
      
      // Hoverboard gentle bobbing
      this.hoverboard.position.y = 0.15 + Math.sin(this.animTime * 4) * 0.05;
    } else {
      // Normal run cycle
      this.bodyGroup.scale.set(1, 1, 1);
      this.bodyGroup.position.y = Math.abs(Math.sin(this.animTime * 2)) * 0.12;
      this.bodyGroup.rotation.x = 0.1; // Forward lean
      this.bodyGroup.rotation.y = 0;

      const swing = Math.sin(this.animTime * 2);
      this.leftLeg.rotation.x = swing * 0.75;
      this.rightLeg.rotation.x = -swing * 0.75;

      this.leftArm.rotation.x = -swing * 0.8;
      this.rightArm.rotation.x = swing * 0.8;
      this.leftArm.rotation.z = 0;
      this.rightArm.rotation.z = 0;
    }
  }

  reset() {
    this.isDead = false;
    this.bodyGroup.rotation.set(0, 0, 0);
    this.bodyGroup.position.set(0, 0, 0);
    this.bodyGroup.scale.set(1, 1, 1);
    this.tiltAngle = 0;
    this.setHoverboard(false);
    this.setJetpack(false);
  }
}
