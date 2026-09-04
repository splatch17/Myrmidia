import * as THREE from 'three';
import { createRenderer, createCamera } from './core/renderer.js';
import {
  createWorld, containUnderground, profileR, groundY, applyNestShading, TREE,
  RIG_PROLOGUE, RIG_FOUNDED, sunDir, setFoundedMix, foundedMix,
  nestOrigin, canFoundAt, foundNest, populateNest, sealNest, getFoundedNest,
  pitFactorAt, shadeAt, RESOURCE_NODES, harvestNode, waterDepthAt, distanceToWater,
  MUSHROOMS, ROCKS, TERRAIN_BOUNDS,
} from './world/index.js';
import { clamp, lerp } from './core/noise.js';
import { createPlayerController } from './player/index.js';
import { setOutlineZone } from './core/outline.js';
import { createQualityPanel } from './core/quality.js';
import { indexWorld, worldQuery } from './core/worldIndexBridge.js';
import { attachSpatialIndex, status as spatialStatus } from './player/spatial.js';

// Entry point for the Three.js/Vite migration (see design docs for the full
// vision). Atta's world (underground gallery + side rooms, lawn, grass, tree
// , see world/index.js) plus Cataglyphis's player controller (movement,
// camera, IK legs, underground/lawn collision — see player/index.js) are
// wired in below. Nothing here is final art; NPCs/harvest loop/HUD are a
// later pass (see the agent notes for what's in vs. out of scope this round).

const container = document.getElementById('app');
const renderer = createRenderer(container);
const camera = createCamera();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1610);
scene.fog = new THREE.Fog(0x1a1610, 40, 220);

/* Hemisphere fill is commuted by zone (see HEMI_IN/HEMI_OUT below and the
   frame loop): outdoors a *cold* sky fill against the warm sun, so shadows
   have a colour instead of being a hole; underground a cavern blue-violet at
   the same low intensity. Values from design/charte-stylisation.md §1a/§1b.
   The sun is deliberately NOT commuted (§1b): its colour would then change
   the lawn too whenever the camera sits in the tunnel mouth with both zones
   in frame. */
const hemi = new THREE.HemisphereLight(0xbfd8f5, 0x6e6a38, 0.85);
scene.add(hemi);

const HEMI_IN = { sky: new THREE.Color(0x4a5c86), ground: new THREE.Color(0x241f33), intensity: 0.55 };

/* The outdoor end of every commutation below is itself commuted, by a second
   scalar: `founded`, 0 during the prologue (queen alone, end of dusk) and 1
   once the colony is dug — design/ambiance-prologue.md §2a, which asks for
   exactly this and no more ("toute la bascule vit dans huit nombres du
   rig"). The *nest* endpoints (HEMI_IN / FOG_IN / SKY_IN) do not move: the
   nest changes by lighting up, not by changing rig.

   The two rigs themselves live in world/sun.js, not here, because
   world/shade.js has to answer shadeAt() against the same sun the renderer
   is drawing — a HUD reasoning about a sky the player cannot see is the
   failure design/api-monde-gameplay.md exists to prevent. */
const P = RIG_PROLOGUE, F = RIG_FOUNDED;
const outSky = new THREE.Color(), outGround = new THREE.Color();
const outFog = new THREE.Color(), outBg = new THREE.Color();
const cP = {
  sky: new THREE.Color(P.hemiSky), ground: new THREE.Color(P.hemiGround),
  fog: new THREE.Color(P.fog), bg: new THREE.Color(P.sky), sun: new THREE.Color(P.sunColor),
};
const cF = {
  sky: new THREE.Color(F.hemiSky), ground: new THREE.Color(F.hemiGround),
  fog: new THREE.Color(F.fog), bg: new THREE.Color(F.sky), sun: new THREE.Color(F.sunColor),
};

const sun = new THREE.DirectionalLight(P.sunColor, P.sunIntensity);
sun.castShadow = true;
/* The shadow box FOLLOWS THE CAMERA rather than sitting on the world origin.
   The map grew to ~550 x 320 units for #31; a box big enough to cover it from
   a fixed centre would have to be +-330, which at 2048 is 0.32 world units per
   texel — coarser than a leg segment, so the ant's own shadow would come
   apart. Anchored to the camera it can instead be *smaller* than the old
   +-150 and still never run out: 0.107 units/texel, three times the old
   density, over a map nearly two and a half times the area.

   The anchor is snapped to a texel step, which is what stops the shadow edges
   from crawling as the camera moves (an unsnapped box re-rasterises the same
   silhouette against a slightly different grid every frame). */
const SHADOW_HALF = 110, SHADOW_MAP = 2048, SUN_DIST = 220;
const SHADOW_TEXEL = (2 * SHADOW_HALF) / SHADOW_MAP;
sun.shadow.mapSize.set(SHADOW_MAP, SHADOW_MAP);
sun.shadow.camera.left = -SHADOW_HALF;
sun.shadow.camera.right = SHADOW_HALF;
sun.shadow.camera.top = SHADOW_HALF;
sun.shadow.camera.bottom = -SHADOW_HALF;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = SUN_DIST * 2.4;
sun.shadow.bias = -0.0015;
scene.add(sun);
scene.add(sun.target);

function trackSun(camera) {
  const sx = Math.round(camera.position.x / SHADOW_TEXEL) * SHADOW_TEXEL;
  const sz = Math.round(camera.position.z / SHADOW_TEXEL) * SHADOW_TEXEL;
  const d = sunDir();
  sun.target.position.set(sx, 0, sz);
  sun.position.set(sx + d[0] * SUN_DIST, d[1] * SUN_DIST, sz + d[2] * SUN_DIST);
}

/* Fog/exposure are commuted between "inside the nest" and "out on the lawn"
   rather than shared, exactly as the old prototype did (FOG_IN/FOG_OUT +
   exposure in its frame loop): outdoors a warm haze that recedes for 400
   units, indoors a near-black one that closes in at 120 so the far end of the
   gallery falls away into darkness instead of staying a uniform brown wash. */
const FOG_IN = new THREE.Color(0x191a2e);
const SKY_IN = new THREE.Color(0x0c0b16);

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
window.__nodes = RESOURCE_NODES;
window.__world = world;
window.__contain = containUnderground;
window.__profileR = profileR;
window.__groundY = groundY;
window.__tree = TREE;

/* Round 6 seam for scripts/verify-round6.mjs. The harness founds a nest by
   calling the world directly, with no controller and no ant involved, which
   is the point of the dependency direction in the contract (§5): if this
   needed the player to work, the world could not be tested without one. */
window.__world6 = {
  shadeAt, canFoundAt, foundNest, nestOrigin, getFoundedNest, populateNest, sealNest,
  harvestNode, get nodes() { return RESOURCE_NODES; }, foundedMix, sunDir,
  waterDepthAt, distanceToWater,
};

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

  applyEnvironment();
  renderer.render(scene, camera);
  quality.update(dt);
}

/* How much of the view is "inside the nest": 1 deep in the gallery, 0 out on
   the lawn. Keyed to the camera rather than the ant so the transition happens
   as the view leaves the mouth.

   Gated on x and y, not on z alone as it used to be. The nest is a tube
   around x=0 lying roughly between y=-4 and y=12, but z by itself called
   *every* point south of the mouth "in the nest" — so a camera pulled back
   over the southern edge of the map dropped the whole sunlit lawn into nest
   fog. That was a corner case when the boom was 36 units long and the ant
   started underground; with the queen's 58-unit boom and a spawn out on the
   meadow (#32) it is a shot the player takes by walking north near the
   mouth. The lateral and vertical gates are the same device world/terrain.js
   uses to keep its own mouth seam from dragging the whole map. */
const NEST_HALF_W = 52;   // widest side branch reaches about x = 45
const NEST_TOP = 26;      // tube centre y = 4, radius 7.2 — well clear above it
function nestnessAt(x, y, z) {
  const zIn = 1 - clamp((z + 24) / 40, 0, 1);
  const xIn = clamp(1 - (Math.abs(x) - NEST_HALF_W) / 30, 0, 1);
  const yIn = clamp(1 - (y - NEST_TOP) / 30, 0, 1);
  return zIn * xIn * yIn;
}

/* The whichever-is-more-outdoors of the eye and the ant. The eye alone was
   the old rule, and it is still what makes the fog change *as the view leaves
   the mouth* rather than a step behind the ant — but on its own it now says
   "in the nest" for a queen standing 30 units out on the lawn, because her
   58-unit boom trails back over the mouth behind her. Taking the smaller of
   the two nestness values keeps the eye's early transition on the way in and
   refuses to put the lawn under nest fog on the way out. */
function nestness(cam, ant) {
  const tube = Math.min(nestnessAt(cam.x, cam.y, cam.z), nestnessAt(ant.x, ant.y, ant.z));
  /* A nest dug at run time (world/founding.js) is somewhere on the lawn, so
     the gates above know nothing about it: without this the freshly dug
     chamber is a hole in the ground with the meadow's own haze in it. Same
     "whichever is more outdoors" rule as the tube. */
  const pit = Math.min(pitFactorAt(cam.x, cam.y, cam.z), pitFactorAt(ant.x, ant.y, ant.z));
  return Math.max(tube, pit);
}

/* 0 = prologue, 1 = founded, animated once over FOUND_FADE seconds when the
   nest appears. Read from the world rather than set by a gameplay call, so
   this file keeps not knowing who founded or why. */
const FOUND_FADE = 6.0;
let foundedAt = null;
function advanceFoundedMix() {
  const now = performance.now() / 1000;
  if (foundedAt === null && nestOrigin()) foundedAt = now;
  if (foundedAt !== null) setFoundedMix(clamp((now - foundedAt) / FOUND_FADE, 0, 1));
}

/* Fog / sky / exposure / hemisphere fill, commuted between "in the nest" and
   "out on the lawn" by one scalar. Split out of frame() so a verification
   driver can render a free-flown camera through exactly the same environment
   the game uses, instead of a differently-lit approximation of it. */
function applyEnvironment() {
  advanceFoundedMix();
  const f = foundedMix();
  outSky.copy(cP.sky).lerp(cF.sky, f);
  outGround.copy(cP.ground).lerp(cF.ground, f);
  outFog.copy(cP.fog).lerp(cF.fog, f);
  outBg.copy(cP.bg).lerp(cF.bg, f);
  sun.color.copy(cP.sun).lerp(cF.sun, f);
  sun.intensity = lerp(P.sunIntensity, F.sunIntensity, f);

  const outside = 1 - nestness(camera.position, player.ant);
  scene.fog.color.copy(FOG_IN).lerp(outFog, outside);
  scene.fog.near = lerp(6, lerp(P.fogNear, F.fogNear, f), outside);
  scene.fog.far = lerp(135, lerp(P.fogFar, F.fogFar, f), outside);
  scene.background.copy(SKY_IN).lerp(outBg, outside);
  renderer.toneMappingExposure = lerp(1.28, lerp(P.exposure, F.exposure, f), outside);
  hemi.color.copy(HEMI_IN.sky).lerp(outSky, outside);
  hemi.groundColor.copy(HEMI_IN.ground).lerp(outGround, outside);
  hemi.intensity = lerp(HEMI_IN.intensity, lerp(P.hemiIntensity, F.hemiIntensity, f), outside);
  setOutlineZone(outside);
  trackSun(camera);
}

/* After the world and the player exist: it walks the scene to find the grass
   and the textured materials it toggles. */
/* Fill the shared spatial index and hand it to player/**, before the first
   frame — every proximity query in the game runs through it, and the fallback
   it would otherwise use is the linear scan this whole change exists to
   remove (design/etat-des-lieux.md 2b). */
const indexStats = indexWorld({
  grassFootprints: world.grassFootprints,
  mushrooms: MUSHROOMS,
  rocks: ROCKS,
  bounds: { x0: TERRAIN_BOUNDS.x0, x1: TERRAIN_BOUNDS.x1, z0: TERRAIN_BOUNDS.z0, z1: TERRAIN_BOUNDS.z1 },
});
/* ?nospatial=1 detaches the index and puts every proximity query back on its
   linear scan. This is not a setting — it is the A/B that has to exist for a
   change whose entire acceptance criterion is "identical behaviour, less CPU".
   Without it, a silent difference in what the index answers looks exactly like
   a gameplay bug introduced somewhere else. */
const NO_SPATIAL = typeof location !== 'undefined' && /[?&]nospatial=1/.test(location.search);
if (!NO_SPATIAL) attachSpatialIndex(worldQuery, 'world');
window.__spatial = () => ({ ...spatialStatus(), ...indexStats });

const quality = createQualityPanel({ renderer, sun, scene });

renderer.setAnimationLoop(frame);
// named and exposed so a verification driver can stop the loop, time a burst
// of renders of one fixed view, and start it again (scripts/verify-textures.mjs)
window.__frame = frame;

/* Debug/verification hook: render one frame from an arbitrary eye/target,
   with the world's per-frame update (grass wind, tree LOD, horizon follow,
   local light selection) and the environment run first, so a wide shot of
   the terrain is lit and hazed exactly as the game would light it. The
   animation loop must be stopped by the caller first, or it will immediately
   put the player camera back (scripts/verify-terrain.mjs). */
window.__renderView = (eye, target, elapsed = 0) => {
  camera.position.set(eye[0], eye[1], eye[2]);
  camera.lookAt(target[0], target[1], target[2]);
  camera.updateMatrixWorld();
  world.update(1 / 60, elapsed, camera);
  applyEnvironment();
  renderer.render(scene, camera);
};
