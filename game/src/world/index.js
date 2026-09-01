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
import { addLocalLight, updateLocalLights, applyNestShading, daylightAt } from './lighting.js';

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
export {
  containUnderground, getUndergroundRadius, getWallHoleAt, getRoomBranches, profileR,
  groundY, groundNormal, groundSlope, soilAt, sampleTerrain, waterDepthAt,
  distanceToWater, riverEdgeAt, containSurface,
  TREE, treeTrunkRadius, treeWalkBranch,
  QUEEN, START, TUNNEL_MOUTH, TUNNEL_BACK, TUNNEL_R,
  LAWN_BOUNDS, TERRAIN_BOUNDS, WATER_Y, RIVER,
  MUSHROOMS, ROCKS, mushroomCollideR, applyNestShading, daylightAt,
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

  const underground = buildUnderground();
  group.add(underground.group);

  // Door/mouth lamps join the same local-light pool as every prop lamp below
  // (see world/lighting.js: only the nearest LIGHT_SLOTS reach the shader).
  for (const d of underground.doorLights) addLocalLight(d.p, d.c);

  const decor = buildNestDecor(underground.rooms);
  group.add(decor.group);

  const queen = buildQueen();
  group.add(queen.group);

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

  function update(dt, elapsed, camera) {
    grass.update(dt, elapsed);
    queen.update(elapsed);
    water.update(elapsed);
    if (camera) {
      tree.update(camera);
      horizon.update(camera);
      updateLocalLights(camera.position);
    }
  }

  return {
    group,
    update,
    grassFootprints: grass.footprints,
    rooms: underground.rooms,
    doorLights: underground.doorLights,
    mushrooms: decor.mushrooms,
    rocks: decor.rocks,
  };
}
