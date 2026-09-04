/* ==========================================================================
   Proximity queries, behind one seam (#36, against #35).

   Every "what is near here" question in the game is a linear sweep of the
   whole map, every frame (design/etat-des-lieux.md §2b): 3400 blades scanned
   to find one within 10 units. That was already the reported CPU cost with a
   single ant; with an entity layer it is paid once per ant, which is the
   thing #35 (a shared uniform grid in core/) exists to remove.

   #35 is being written in parallel and does not exist on disk yet, and its
   module name and export names are not fixed anywhere I can compile against.
   So this file does what design/api-monde-gameplay.md's consumption rule
   already asks for elsewhere: it reads the provider **through a copy of a
   namespace** rather than by direct binding, so a provider that is not there
   yet is `undefined` — a case to handle — instead of a build failure.

   The fallback is honest in the sense that document means: it does not invent
   a cheaper answer, it gives the *complete* one. `queryDisc` with no index
   visits every candidate of that kind regardless of radius, so the caller
   gets a superset of what a real index would return and its behaviour cannot
   change when the index lands — only its cost. `status()` says which of the
   two is running, and the harness prints it, so "we think the index is wired"
   is never something anyone has to take on trust.

   When #35 lands, the integration calls attachSpatialIndex(api) once with
   something shaped like:

     api.queryDisc(kind, x, z, r, visit)   // visit(item) for each candidate
                                           // within r of (x, z); a superset
                                           // is allowed, a subset is not

   and nothing else in player/** changes.
   ========================================================================== */

// The kinds this layer asks about. Names are the world's own collections, so
// there is nothing to translate on either side of the seam.
export const KIND = { GRASS: 'grass', ROCKS: 'rocks', MUSHROOMS: 'mushrooms', ANTS: 'ants' };

let index = null;
let source = 'linear';

/** Wire a real index in (see the module comment for the expected shape). */
export function attachSpatialIndex(api, label = 'external') {
  // namespace copy, not a live binding: a provider that later loses a method
  // cannot silently turn our queries into no-ops halfway through a session
  const S = { ...(api || {}) };
  if (typeof S.queryDisc !== 'function') { index = null; source = 'linear'; return false; }
  index = S; source = label;
  return true;
}

/* Probe for a provider that registered itself globally before we were asked
   anything. Deliberately a *probe*, not an import: nothing in player/** may
   fail to build because core/ has not shipped its half yet. Tried once per
   query only while nothing is attached, so it costs nothing once resolved. */
function probe() {
  if (index) return;
  const g = typeof globalThis !== 'undefined' ? globalThis : null;
  if (!g) return;
  const cand = g.__spatialIndex || g.__spatial || null;
  if (cand) attachSpatialIndex(cand, 'global');
}

/**
 * Visit every candidate of `kind` that could lie within `r` of (x, z).
 * `all` is the complete collection, used as the fallback when no index is
 * attached — passed in by the caller rather than imported here, so this file
 * does not acquire a dependency on world/** just to be able to give up.
 *
 * Returns true if a real index answered, false if the whole list was walked.
 */
export function queryDisc(kind, x, z, r, all, visit) {
  probe();
  if (index) { index.queryDisc(kind, x, z, r, visit); return true; }
  for (let i = 0; i < all.length; i++) visit(all[i], i);
  return false;
}

/** What is actually answering proximity queries right now. */
export function status() {
  probe();
  return { indexed: !!index, source };
}
