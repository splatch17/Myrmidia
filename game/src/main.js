import * as THREE from 'three';
import { createRenderer, createCamera } from './core/renderer.js';
import { createWorld } from './world/index.js';
import { createPlayerController } from './player/index.js';

// Entry point for the Three.js/Vite migration (see design docs for the full
// vision). Atta's world (underground gallery + side rooms, lawn, grass, tree
// — see world/index.js) plus Cataglyphis's player controller (movement,
// camera, IK legs, underground/lawn collision — see player/index.js) are
// wired in below. Nothing here is final art; NPCs/harvest loop/HUD are a
// later pass (see the agent notes for what's in vs. out of scope this round).

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

const player = createPlayerController({ scene, camera, domElement: renderer.domElement });

// Debug/verification hook (not a gameplay feature): live references so an
// external driver (e.g. scripts/verify-room-access.mjs, #21) can read the
// ant's real position/yaw and the underground room centres without any
// synthetic bypass of the actual input pipeline. Harmless in production —
// just two object references on window.
window.__ant = player.ant;
window.__rooms = world.rooms;
window.__camera = camera;
window.__scene = scene;
window.__world = world;

renderer.setResizeCallback((aspect) => {
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
});

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  // Capped like the old prototype's frame() (`Math.min((now-last)/1000,
  // 0.05)`) — a tab-backgrounding/GC/rAF hitch would otherwise feed one huge
  // dt through the damped movement/camera math (player/movement.js,
  // player/camera.js), which can fling the ant several room-widths in a
  // single step and land it somewhere containUnderground() then has to
  // clamp from cold, looking like a random stall/teleport. Not part of the
  // #21 fix itself (containUnderground was already fine per the session's
  // diagnostic script), but found while live-verifying it — see the agent
  // notes.
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  // World first (grass wind/contact-bend against last frame's antState,
  // tree LOD against last frame's camera — one frame of lag, imperceptible),
  // then the player (writes this frame's antState/camera for next frame).
  world.update(dt, t, camera);
  player.update(dt, t);

  renderer.render(scene, camera);
});
