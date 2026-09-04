import * as THREE from 'three';
import { SPHERE, CYL, partCounts, poseParts, sharedGeometries, composeMatrix } from './antMesh.js';

/* ==========================================================================
   Every ant that is not the player, drawn in two draw calls.

   THE PROBLEM THIS SOLVES. buildAntMesh() gives each ant ~30 persistent
   THREE.Mesh objects — one per body part — and rewrites their matrices every
   frame. That is fine for the one ant the player drives and impossible for a
   colony: twenty workers would be six hundred draw calls, and the whole point
   of the round that measured the spatial index was that twenty workers must
   cost almost nothing.

   Two InstancedMesh objects, one per geometry (sphere, cylinder), hold every
   part of every ant. Adding a worker costs slots, not draw calls.

   IT IS NOT A SECOND DEFINITION OF THE ANT. antMesh.js's poseParts() walks
   one ant's anatomy and hands each part to a callback; the player's renderer
   and this one are two sinks for the same walk. That is deliberate and it is
   the thing to protect: the moment a crowd ant is posed by different code
   from the player's ant, the two drift, and the drift shows up as workers
   whose legs move differently from the queen's.

   COLOUR IS PER-INSTANCE, NOT PER-MATERIAL. A worker's chitin and a queen's
   are different colours out of avatar.js, and instancing cannot switch
   material per instance — so the colour rides in the instanceColor buffer and
   the material is a single white one that multiplies by it.
   ========================================================================== */

/* Slots are reserved per ant, not packed: an ant's parts always live at the
   same offset, so a pose writes into a fixed range and removing an ant means
   hiding its range rather than rebuilding the buffer. Costs a little memory
   for the empty tail and buys never having to renumber. */
const MAX_ANTS = 64;

const _c = new THREE.Color();
const _hidden = new THREE.Matrix4().makeScale(0, 0, 0);

export function createCrowd(scene, profile) {
  const geo = sharedGeometries();
  const per = partCounts(profile);

  /* One white material for both meshes. vertexColors is what makes
     instanceColor apply; without it the buffer is uploaded and ignored, which
     renders every ant bone-white and looks like a lighting bug. */
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.55, metalness: 0.05, vertexColors: false,
  });

  function makeMesh(geometry, count) {
    const m = new THREE.InstancedMesh(geometry, mat, count);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.setColorAt(0, _c.set(0xffffff));    // allocates instanceColor
    m.castShadow = true;
    m.receiveShadow = true;
    // parts are placed in world space by the pose, so the mesh's own bounds
    // say nothing useful about where its instances are
    m.frustumCulled = false;
    m.count = 0;
    return m;
  }

  const spheres = makeMesh(geo.sphere, MAX_ANTS * per.sphere);
  const cyls = makeMesh(geo.cyl, MAX_ANTS * per.cyl);
  spheres.name = 'crowd-spheres';
  cyls.name = 'crowd-cyls';
  scene.add(spheres, cyls);

  // hide every slot up front, so a slot that has never been posed draws
  // nothing instead of drawing a unit sphere at the origin
  for (let i = 0; i < spheres.instanceMatrix.count; i++) spheres.setMatrixAt(i, _hidden);
  for (let i = 0; i < cyls.instanceMatrix.count; i++) cyls.setMatrixAt(i, _hidden);

  let used = 0;   // highest slot index in use + 1

  return {
    /** Draw `ants` (each {profile, ant, legState}) for this frame. */
    render(ants, elapsed) {
      const n = Math.min(ants.length, MAX_ANTS);
      for (let k = 0; k < n; k++) {
        const e = ants[k];
        const pc = partCounts(e.profile);
        let si = k * per.sphere, ci = k * per.cyl;
        poseParts(e.profile, e.ant, e.legState, elapsed, (kind, p, ax, ay, az, color) => {
          const m = composeMatrix(p, ax, ay, az);
          if (kind === SPHERE) {
            spheres.setMatrixAt(si, m);
            spheres.setColorAt(si, _c.set(color));
            si++;
          } else {
            cyls.setMatrixAt(ci, m);
            cyls.setColorAt(ci, _c.set(color));
            ci++;
          }
        });
        /* A body with fewer parts than the slot reservation (a profile with
           one gaster segment where the reservation was made for two) leaves a
           tail; hide it rather than leaving last frame's matrix, which would
           smear a stray limb across the map. */
        for (let s = si; s < (k + 1) * per.sphere; s++) spheres.setMatrixAt(s, _hidden);
        for (let c = ci; c < (k + 1) * per.cyl; c++) cyls.setMatrixAt(c, _hidden);
        void pc;
      }

      // ants that went away since last frame
      for (let k = n; k < used; k++) {
        for (let s = k * per.sphere; s < (k + 1) * per.sphere; s++) spheres.setMatrixAt(s, _hidden);
        for (let c = k * per.cyl; c < (k + 1) * per.cyl; c++) cyls.setMatrixAt(c, _hidden);
      }
      used = n;

      spheres.count = Math.max(n, 0) * per.sphere;
      cyls.count = Math.max(n, 0) * per.cyl;
      spheres.instanceMatrix.needsUpdate = true;
      cyls.instanceMatrix.needsUpdate = true;
      if (spheres.instanceColor) spheres.instanceColor.needsUpdate = true;
      if (cyls.instanceColor) cyls.instanceColor.needsUpdate = true;
    },

    dispose() {
      scene.remove(spheres, cyls);
      spheres.dispose();
      cyls.dispose();
      mat.dispose();
    },
  };
}
