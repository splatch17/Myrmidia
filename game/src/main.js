import * as THREE from 'three';
import { createRenderer, createCamera } from './core/renderer.js';

// Scaffold entry point for the Three.js/Vite migration (see design docs for
// the full vision). This proves the render pipeline end to end — ground,
// one light rig, a placeholder ant capsule — and is the seam where the
// world (Atta) and player/camera/gameplay (Cataglyphis) modules attach.
// Nothing here is final art or final gameplay.

const container = document.getElementById('app');
const renderer = createRenderer(container);
const camera = createCamera();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1610);
scene.fog = new THREE.Fog(0x1a1610, 40, 160);

const hemi = new THREE.HemisphereLight(0xfff2d0, 0x2a2015, 0.6);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffe3a8, 2.2);
sun.position.set(30, 45, 20);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -60;
sun.shadow.camera.right = 60;
sun.shadow.camera.top = 60;
sun.shadow.camera.bottom = -60;
scene.add(sun);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(200, 200),
  new THREE.MeshStandardMaterial({ color: 0x3b3122, roughness: 0.95 })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Placeholder ant — a stand-in until the real mesh/rig lands.
const ant = new THREE.Mesh(
  new THREE.CapsuleGeometry(1.1, 2.2, 4, 8),
  new THREE.MeshStandardMaterial({ color: 0xe0a752, roughness: 0.45, metalness: 0.1 })
);
ant.position.y = 1.6;
ant.castShadow = true;
scene.add(ant);

renderer.setResizeCallback((aspect) => {
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
});

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const t = clock.getElapsedTime();
  ant.position.x = Math.sin(t * 0.4) * 6;
  camera.lookAt(ant.position.x, 1.5, 0);
  renderer.render(scene, camera);
});
