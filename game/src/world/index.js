import * as THREE from 'three';
import {
  buildUnderground, containUnderground, getUndergroundRadius, getWallHoleAt, getRoomBranches, profileR,
  QUEEN, START, TUNNEL_MOUTH, TUNNEL_BACK, TUNNEL_R,
} from './underground.js';
import { buildLawn, groundY, groundNormal, LAWN_BOUNDS } from './terrain.js';
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
export {
  containUnderground, getUndergroundRadius, getWallHoleAt, getRoomBranches, profileR,
  groundY, groundNormal, TREE, treeTrunkRadius, treeWalkBranch,
  QUEEN, START, TUNNEL_MOUTH, TUNNEL_BACK, TUNNEL_R, LAWN_BOUNDS,
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

  const grass = createGrassField({});
  group.add(grass.mesh);

  const tree = buildTree();
  group.add(tree.group);

  function update(dt, elapsed, camera) {
    grass.update(dt, elapsed);
    queen.update(elapsed);
    if (camera) {
      tree.update(camera);
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
