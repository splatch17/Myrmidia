import * as THREE from 'three';
import {
  buildUnderground, containUnderground, getUndergroundRadius, getWallHoleAt, getRoomBranches, profileR,
  QUEEN, START, TUNNEL_MOUTH, TUNNEL_BACK, TUNNEL_R,
} from './underground.js';
import {
  buildLawn, buildWater, buildHorizon, groundY, groundNormal, groundSlope,
  soilAt, sampleTerrain, waterDepthAt, distanceToWater, riverEdgeAt, containSurface,
  LAWN_BOUNDS, TERRAIN_BOUNDS, WATER_Y, RIVER,
} from './terrain.js';
import { createGrassField } from './grass.js';
import { buildTree, TREE, treeTrunkRadius, walkBranch as treeWalkBranch } from './tree.js';
import { buildNestDecor, MUSHROOMS, ROCKS, mushroomCollideR } from './nestDecor.js';
import { buildQueen } from './queen.js';
import { addLocalLight, updateLocalLights, applyNestShading, daylightAt, pitFactorAt } from './lighting.js';
import { shadeAt } from './shade.js';
import { RESOURCE_NODES, harvestNode, nodesNear, buildResources } from './resources.js';
import {
  initFounding, canFoundAt, foundNest, nestOrigin, getFoundedNest,
  populateNest, sealNest, updateFounding, MAX_BROOD,
} from './founding.js';
import { RIG_PROLOGUE, RIG_FOUNDED, sunDir, foundedMix, setFoundedMix } from './sun.js';

// Re-exported so Cataglyphis can pull everything needed for collision/climb
// from one module without reaching into world/underground.js, world/tree.js,
// etc. individually — see the per-function docs in those files for details.
// QUEEN/START/TUNNEL_MOUTH/TUNNEL_BACK/TUNNEL_R/LAWN_BOUNDS added for the
// player controller (#20/#21): spawn point, queen avoidance, and the
// underground-vs-outdoor switch the old prototype's frame() used.
// MUSHROOMS/ROCKS/mushroomCollideR are the decor collision footprints the old
// prototype kept (resolveDecorCollision); exported for a later gameplay pass,
// deliberately not wired into the player controller from here.
// applyNestShading/daylightAt are the lighting rig's public surface (main.js).
//
// SURFACE TERRAIN (#31), for the controller/legs/camera and for gameplay that
// has to judge a piece of ground (design/boucle-de-jeu.md §0: where the player
// founds is a terrain decision):
//   groundY(x,z)            the one true ground height, outdoors and in
//   groundNormal(x,z)       unit normal of that surface
//   groundSlope(x,z)        steepness as tan(angle): 0 flat, 1 = 45 degrees
//   soilAt(x,z)             { kind: water|sand|rock|moss|soil, moss, slope,
//                             depth, toWater }
//   sampleTerrain(x,z)      all of the above at once, plus `diggable`
//   waterDepthAt(x,z)       0 on land, >0 in the river
//   distanceToWater(x,z)    signed, positive on the dry side of the waterline
//   riverEdgeAt(z)          x of the shoreline at that depth
//   containSurface(x,z)     outdoor twin of containUnderground() — clamps into
//                           the walkable map, river included. Not wired into
//                           player/movement.js (not my file); LAWN_BOUNDS is
//                           picked so that file's existing box clamp already
//                           lands on the waterline.
//   LAWN_BOUNDS             playable area   TERRAIN_BOUNDS  meshed area
//   WATER_Y, RIVER          water height and the river's shape constants
//
// ROUND 6 — the three halves of the contract this world now holds up
// (design/api-monde-gameplay.md, which is authoritative and which nothing
// here renames):
//   §2 shadeAt(x, z)          0..1, 1 = fully shaded. Analytic; follows the
//                             sun currently in the sky (world/sun.js).
//   §3 RESOURCE_NODES         live array; a spent node stays in it with
//                             amount 0. harvestNode(id, qty) -> amount
//                             actually removed, and updates the visual.
//                             nodesNear() is a convenience on top, not part
//                             of the contract.
//   §4 canFoundAt / foundNest / nestOrigin
//                             dig the first chamber at run time. The world
//                             never calls the player; the player calls this.
//                             populateNest(n) / sealNest() are the #12 half
//                             (empty chamber that fills up) and are an
//                             addition to the contract — see the report.
//                             MAX_BROOD is the couvoir's cap, exported so
//                             player/** can tell "capped" from "not yet laid"
//                             without guessing the world's own ceiling.
// RIG_PROLOGUE/RIG_FOUNDED/sunDir/foundedMix/setFoundedMix are the sky rig
// main.js drives and shadeAt() reads, kept in one place so the light the
// player is told about and the light drawn on screen cannot diverge.
export {
  containUnderground, getUndergroundRadius, getWallHoleAt, getRoomBranches, profileR,
  groundY, groundNormal, groundSlope, soilAt, sampleTerrain, waterDepthAt,
  distanceToWater, riverEdgeAt, containSurface,
  TREE, treeTrunkRadius, treeWalkBranch,
  QUEEN, START, TUNNEL_MOUTH, TUNNEL_BACK, TUNNEL_R,
  LAWN_BOUNDS, TERRAIN_BOUNDS, WATER_Y, RIVER,
  MUSHROOMS, ROCKS, mushroomCollideR, applyNestShading, daylightAt, pitFactorAt,
  shadeAt,
  RESOURCE_NODES, harvestNode, nodesNear,
  canFoundAt, foundNest, nestOrigin, getFoundedNest, populateNest, sealNest, MAX_BROOD,
  RIG_PROLOGUE, RIG_FOUNDED, sunDir, foundedMix, setFoundedMix,
};

/**
 * Builds the whole world (underground + lawn + grass + tree) as one
 * THREE.Group, plus an update(dt, elapsed, camera) to call once a frame.
 * Grass footprints (GRASS-equivalent: x, z, h, baseY, w, ang per blade) are
 * returned for climb/collision.
 */
export function createWorld() {
  const group = new THREE.Group();
  group.name = 'world';

  /* THE PRE-BUILT NEST IS OFF.

     It was the whole game once: the player started in the queen's chamber and
     walked out. Since design/boucle-de-jeu.md 0 it is not — the colony is dug
     at run time where the player chooses (world/founding.js), and this gallery
     has had no role in play for two rounds. What it had instead was a scale
     problem: every bore in underground.js was cut for the 1.5-radius worker,
     and the player is now a 3.3-radius queen. NEST_BORE fixes the bores (the
     run-time nest needs it too, it shares the same builder), but widening the
     tube also lifts its ceiling to y=24 at the mouth, where the terrain seam
     was cut to hide a ceiling at y=11 — so the mouth now shows sky through
     itself.

     Rather than chase that seam for a space nobody enters, the geometry is
     simply not added. Nothing is deleted: buildUnderground and every room,
     light and prop it builds are exactly what foundNest() calls, so this code
     is more used than it has ever been, just not here.

     The plan for it, which the player asked for: bring it back as an ABANDONED
     colony — a small dead nest to find on the map, entrance collapsed and
     given relief, fungus still glowing because fungus outlives colonies. That
     is world-building, and it wants its own pass rather than being smuggled
     into this one. Flip the flag to see the old state. */
  const SHOW_PREBUILT_NEST = false;

  const underground = buildUnderground();
  if (SHOW_PREBUILT_NEST) group.add(underground.group);

  // Door/mouth lamps join the same local-light pool as every prop lamp below
  // (see world/lighting.js: only the nearest LIGHT_SLOTS reach the shader).
  for (const d of underground.doorLights) addLocalLight(d.p, d.c);

  const decor = buildNestDecor(underground.rooms);
  if (SHOW_PREBUILT_NEST) group.add(decor.group);

  // the seated queen belonged to that nest: the player IS the queen now, and
  // two of her on the map is the kind of thing a prologue cannot survive
  const queen = buildQueen();
  if (SHOW_PREBUILT_NEST) group.add(queen.group);

  const lawn = buildLawn();
  group.add(lawn);

  const water = buildWater();
  group.add(water.mesh);

  const horizon = buildHorizon();
  group.add(horizon.group);

  const grass = createGrassField({});
  group.add(grass.mesh);

  const tree = buildTree();
  group.add(tree.group);

  const resources = buildResources();
  group.add(resources.group);

  /* Anything dug later (foundNest) hangs here, so a run-time nest is a child
     of the world like everything else and nothing has to be rebuilt for it
     to exist. */
  const dug = new THREE.Group();
  dug.name = 'dug';
  group.add(dug);
  initFounding(dug);

  function update(dt, elapsed, camera) {
    grass.update(dt, elapsed);
    updateFounding(dt);
    queen.update(elapsed);
    water.update(elapsed);
    if (camera) {
      tree.update(camera);
      horizon.update(camera, foundedMix());
      updateLocalLights(camera.position);
    }
  }

  return {
    group,
    update,
    grassFootprints: grass.footprints,
    resources: resources.nodes,
    rooms: underground.rooms,
    doorLights: underground.doorLights,
    mushrooms: decor.mushrooms,
    rocks: decor.rocks,
  };
}
