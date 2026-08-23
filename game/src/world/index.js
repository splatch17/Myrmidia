import * as THREE from 'three';
import { buildUnderground, containUnderground, getUndergroundRadius, getWallHoleAt, getRoomBranches, profileR } from './underground.js';
import { buildLawn, groundY, groundNormal } from './terrain.js';
import { createGrassField } from './grass.js';
import { buildTree, TREE, treeTrunkRadius, walkBranch as treeWalkBranch } from './tree.js';

// Re-exported so Cataglyphis can pull everything needed for collision/climb
// from one module without reaching into world/underground.js, world/tree.js,
// etc. individually — see the per-function docs in those files for details.
export {
  containUnderground, getUndergroundRadius, getWallHoleAt, getRoomBranches, profileR,
  groundY, groundNormal, TREE, treeTrunkRadius, treeWalkBranch,
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

  const lawn = buildLawn();
  group.add(lawn);

  const grass = createGrassField({});
  group.add(grass.mesh);

  const tree = buildTree();
  group.add(tree.group);

  function update(dt, elapsed, camera) {
    grass.update(dt, elapsed);
    if (camera) tree.update(camera);
  }

  return {
    group,
    update,
    grassFootprints: grass.footprints,
    rooms: underground.rooms,
    doorLights: underground.doorLights,
  };
}
