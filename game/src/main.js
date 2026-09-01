import * as THREE from 'three';
import { createRenderer, createCamera } from './core/renderer.js';
import { createWorld, containUnderground, profileR, groundY, applyNestShading, TREE } from './world/index.js';
import { clamp, lerp } from './core/noise.js';
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
// The shadow volume has to cover the lawn the sun actually lights, not just
// the tunnel mouth: the tree stands at (-85, 95) and cast nothing at all when
// this box was +-60 around the origin. Underground needs no shadow map at all
// — the sun is attenuated there analytically instead (world/lighting.js), so
// the nest is dark because the exterior can't reach it, not because something
// is occluding it.
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -150;
sun.shadow.camera.right = 150;
sun.shadow.camera.top = 150;
sun.shadow.camera.bottom = -150;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 400;
sun.shadow.bias = -0.0015;
scene.add(sun);

/* Fog/exposure are commuted between "inside the nest" and "out on the lawn"
   rather than shared, exactly as the old prototype did (FOG_IN/FOG_OUT +
   exposure in its frame loop): outdoors a warm haze that recedes for 400
   units, indoors a near-black one that closes in at 120 so the far end of the
   gallery falls away into darkness instead of staying a uniform brown wash. */
const FOG_IN = new THREE.Color(0x140e07), FOG_OUT = new THREE.Color(0xd9c39a);
const SKY_IN = new THREE.Color(0x0a0805), SKY_OUT = new THREE.Color(0x8fb6cf);

const world = createWorld();
scene.add(world.group);

const player = createPlayerController({ scene, camera, domElement: renderer.domElement });

// One rig for the whole scene: every standard-lit material (walls, props,
// queen, tree, lawn, grass, and the ant itself) gets the daylight falloff and
// the nest's local-light pool. Applied here rather than per-module so nothing
// can be left out and end up lit as if it were standing in an open field a
// hundred units underground. Unlit materials (the glowing mushroom caps and
// glow-beads) are skipped on purpose — they are light sources, not receivers.
scene.traverse((obj) => {
  const mats = Array.isArray(obj.material) ? obj.material : (obj.material ? [obj.material] : []);
  for (const m of mats) if (m.isMeshStandardMaterial) applyNestShading(m);
});

// Debug/verification hook (not a gameplay feature): live references so an
// external driver (e.g. scripts/verify-room-access.mjs, #21) can read the
// ant's real position/yaw and the underground room centres without any
// synthetic bypass of the actual input pipeline. Harmless in production —
// just two object references on window.
window.__renderer = renderer;
window.__ant = player.ant;
window.__rooms = world.rooms;
window.__camera = camera;
window.__scene = scene;
window.__world = world;
window.__contain = containUnderground;
window.__profileR = profileR;
window.__groundY = groundY;
window.__tree = TREE;

renderer.setResizeCallback((aspect) => {
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
});

const clock = new THREE.Clock();
function frame() {
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

  // 0 = deep in the nest, 1 = out on the lawn. Keyed to the camera rather
  // than the ant so the transition happens as the view leaves the mouth.
  const outside = clamp((camera.position.z + 24) / 40, 0, 1);
  scene.fog.color.copy(FOG_IN).lerp(FOG_OUT, outside);
  scene.fog.near = lerp(4, 60, outside);
  scene.fog.far = lerp(120, 400, outside);
  scene.background.copy(SKY_IN).lerp(SKY_OUT, outside);
  renderer.toneMappingExposure = lerp(1.35, 1.05, outside);

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(frame);
// named and exposed so a verification driver can stop the loop, time a burst
// of renders of one fixed view, and start it again (scripts/verify-textures.mjs)
window.__frame = frame;
