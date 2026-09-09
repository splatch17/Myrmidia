import { worldIndex } from './spatialIndex.js';

/* ==========================================================================
   Fills the shared spatial index from the world's collections, and exposes the
   one method player/spatial.js asks for.

   WHY THIS FILE EXISTS. #35 and #36 were written in parallel by two agents in
   disjoint directories, and they met the way the interface contract was meant
   to stop: core/ exports a SpatialIndex with forEachNear(x, z, r, fn, opts),
   player/spatial.js expects queryDisc(kind, x, z, r, visit), and neither
   knows about the other. Rather than change either half — both are good, and
   both are tested on their own side — the seam gets its own file, in core/,
   where the index already lives.

   It also replaces the global handshake. player/spatial.js probes
   globalThis.__spatialIndex, which is a deliberately defensive design on its
   part (nothing in player/** may fail to build because core/ has not shipped),
   but a global is not how two modules in the same bundle should find each
   other once both exist. main.js calls attach() explicitly instead, and the
   probe stays as the fallback it was written to be.

   TYPE NAMES ARE THE WORLD'S OWN — 'grass', 'rocks', 'mushrooms', 'ants' —
   so nothing is translated at the seam. That is the same rule as
   design/api-monde-gameplay.md: the side that owns the data names it.
   ========================================================================== */

/** The facade player/spatial.js attaches to. */
export const worldQuery = {
  queryDisc(kind, x, z, r, visit) {
    /* reach: true — an entry counts when its own radius reaches the disc, not
       only when its centre falls inside it. That is what the linear scans it
       replaces did (a mushroom overlaps the ant from further than its centre),
       and getting it wrong would silently shrink every collision. */
    worldIndex.forEachNear(x, z, r, visit, { type: kind, reach: true });
  },
};

/**
 * Rebuild the index from the world. Called once after createWorld(); call
 * again if a collection is regenerated wholesale (founding digs a nest, a
 * resource field is re-seeded).
 *
 * Ants are NOT added here — they move every frame and belong to whoever owns
 * them, through worldIndex.move(). This function only places what the world
 * itself put on the map.
 */
export function indexWorld({ grassFootprints, mushrooms, rocks, bounds }) {
  worldIndex.reset(bounds);

  if (grassFootprints) {
    for (let i = 0; i < grassFootprints.length; i++) {
      const g = grassFootprints[i];
      // radius is the blade's half width: what climb.js and decorCollision.js
      // both measure against, so the index answers in their units
      worldIndex.add('grass', g.x, g.z, g.w, g);
    }
  }
  if (mushrooms) for (const m of mushrooms) worldIndex.add('mushrooms', m.x, m.z, m.r || 0, m);
  if (rocks) for (const r of rocks) worldIndex.add('rocks', r.x, r.z, r.r || 0, r);

  return worldIndex.stats();
}
