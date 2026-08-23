import * as THREE from 'three';
import { createRenderer, createCamera } from './core/renderer.js';
import { antState } from './core/antState.js';
import { createWorld, groundY } from './world/index.js';

// Scaffold entry point for the Three.js/Vite migration (see design docs for
// the full vision). Atta's world (underground gallery + side rooms, lawn,
// grass, tree — see world/index.js) is wired in below; the ant here is
// still a placeholder capsule until Cataglyphis's real controller lands and
// takes over writing antState (see core/antState.js for the contract) and
// driving the camera. Nothing here is final art or final gameplay.

const container = document.getElementById('app');
const renderer = createRenderer(container);
const camera = createCamera();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1610);
scene.fog = new THREE.Fog(0x1a1610, 40, 220);

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

const world = createWorld();
scene.add(world.group);

// Placeholder ant — a stand-in until the real mesh/rig lands. Walks a slow
// loop over the lawn near the gallery mouth so the grass contact bend
// (world/grass.js) has something to react to before Cataglyphis's
// controller exists.
const ant = new THREE.Mesh(
  new THREE.CapsuleGeometry(1.1, 2.2, 4, 8),
  new THREE.MeshStandardMaterial({ color: 0xe0a752, roughness: 0.45, metalness: 0.1 })
);
ant.castShadow = true;
scene.add(ant);

renderer.setResizeCallback((aspect) => {
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
});

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = clock.getDelta();
  const t = clock.elapsedTime;

  const ax = Math.sin(t * 0.4) * 10;
  const az = 40 + Math.cos(t * 0.25) * 8;
  const ay = groundY(ax, az);
  ant.position.set(ax, ay + 1.6, az);

  // Stand-in for Cataglyphis's controller writing into antState every
  // frame — see core/antState.js for the contract this satisfies.
  antState.position.set(ax, ay, az);

  camera.position.set(ax + 10, ay + 20, az + 36);
  camera.lookAt(ax, ay + 1.5, az);

  world.update(dt, t, camera);
  renderer.render(scene, camera);
});
