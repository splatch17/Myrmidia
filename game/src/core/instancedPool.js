import * as THREE from 'three';

/* ==========================================================================
   core/instancedPool.js — a fixed-capacity THREE.InstancedMesh, wrapped so a
   caller reserves instance slots instead of creating a THREE.Mesh (#36).

   THE PROBLEM THIS REPLACES. player/antMesh.js used to call `new THREE.Mesh`
   once per body part per ant (~36-37 of them — measured, see
   scripts/bench-antmesh.mjs; the ticket's own "~30" undercounts a little).
   Two ants means two draw calls per part; twenty ants (the ticket's own
   number) means twenty. Three.js's own InstancedMesh already exists to make
   this ONE draw call regardless of how many ants there are — this file is
   the thin, generic bookkeeping (which instance index is "mine") that a
   caller with many little differently-posed things (an ant's parts, and
   later maybe anything else this project ends up wanting many of) needs on
   top of it, factored out of antMesh.js so it is testable on its own under
   plain node (THREE's core objects — geometry, material, InstancedMesh,
   Matrix4, Color — are pure CPU data structures; nothing here touches a
   canvas or a GPU, so `node scripts/bench-antmesh.mjs` exercises the real
   class, not a stand-in).

   FIXED CAPACITY, ON PURPOSE — NOT A GROWABLE POOL. A pool that silently
   reallocated (a new InstancedMesh, a new instanceMatrix buffer) the moment
   it filled up would leave every existing reference to the old buffer
   dangling — in particular core/outline.js's outline shell, which shares the
   body pool's `instanceMatrix` attribute BY REFERENCE rather than copying it
   every frame (see its own header for why). Reallocating out from under that
   reference would either desync the outline from the body or require this
   file to know about outline.js, which is exactly the coupling neither file
   should have. A fixed capacity, sized generously by the caller and
   documented against a stated ant count (this project's own piège #6:
   "a constant sized against one scale, forgotten when the scale changes" —
   here the scale is a COUNT of ants, not a body size, but the discipline is
   the same), fails loudly (allocate() throws) instead of silently.
   player/antMesh.js's MAX_ANTS is that documented number.
   ========================================================================== */

export function createInstancedPool(geometry, material, capacity) {
  const mesh = new THREE.InstancedMesh(geometry, material, capacity);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.count = 0;         // nothing posed yet — see allocate()
  mesh.frustumCulled = false; // instances are placed all over the map by the
                              // caller's own matrices, not by this mesh's own
                              // (identity) transform; a bounds check against
                              // the unit geometry would cull it whenever the
                              // camera isn't looking at the world origin.
  let used = 0;

  return {
    mesh,
    get used() { return used; },
    get capacity() { return capacity; },

    /** Reserve `n` contiguous instance slots. Returns the index of the
     *  first one; the caller addresses slot `k` of its own reservation as
     *  `start + k`. Throws rather than silently dropping an ant on the
     *  floor or overwriting someone else's slot — see the file header on
     *  why this does not just grow instead. */
    allocate(n) {
      if (used + n > capacity) {
        throw new Error(
          `instanced pool exhausted: asked for ${n} more slot(s), ${capacity - used} left `
          + `of ${capacity} — bump the capacity this pool was created with (see MAX_ANTS `
          + `in player/antMesh.js) and re-run scripts/bench-antmesh.mjs`);
      }
      const start = used;
      used += n;
      mesh.count = used; // only the reserved prefix is ever drawn
      return start;
    },

    setMatrix(index, matrix4) {
      mesh.setMatrixAt(index, matrix4);
      mesh.instanceMatrix.needsUpdate = true;
    },

    /** Per-instance tint, written once at spawn time (never per frame — an
     *  ant's part colour does not change over its lifetime, unlike its
     *  pose), which is what lets every ant of every colour share the same
     *  two geometries AND the same one material instead of one material per
     *  colour (the old per-Mesh code's materialCache, keyed by hex). */
    setColor(index, color) {
      mesh.setColorAt(index, color);
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    },
  };
}
