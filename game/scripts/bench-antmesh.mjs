// CPU-only object-count check for #36: the render cost of N ants, in scene
// objects rather than milliseconds — the honest thing to measure on a
// GPU-less box (see this project's own scripts/verify-*.mjs headers on why a
// frame-time number from here would be a lie: this VPS has no GPU, Chromium
// falls back to SwiftShader). THREE.Mesh/InstancedMesh/BufferGeometry are
// plain CPU data structures — nothing below needs a canvas or a WebGL
// context, so this runs under plain `node`.
//
// WHAT THIS IS NOT: a judgement of whether twenty ants actually hold 60fps
// on a real GPU. That needs a browser (this ticket's own "captures
// obligatoires", left to whoever has one). What it IS: proof that the mesh
// count no longer scales with the ant count, which is the actual technical
// ask ("le rendu doit tenir plusieurs fourmis sans un draw call par patte").
//
// Usage: node scripts/bench-antmesh.mjs

import { register } from 'node:module';
register('./logic-test/loader.mjs', import.meta.url);

const THREE = await import('three');
const antMeshMod = await import('../src/player/antMesh.js');
const { buildAntMesh, MAX_ANTS, _resetPoolsForTest } = antMeshMod;
const { buildOutlineHull } = await import('../src/core/outline.js');
const { WORKER, FOUNDING_QUEEN } = await import('../src/player/avatar.js');

let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? ' — ' + detail : ''}`); }
}

/** Every THREE.Mesh/InstancedMesh under `scene`, and the distinct geometries/
 *  materials they reference (by object identity — the whole point of #36 is
 *  that many ants end up pointing at the SAME few geometries/materials). */
function countScene(scene) {
  const geos = new Set(), mats = new Set();
  // Body and outline instances are counted separately: the shell mirrors the
  // body pool's `count` exactly (core/outline.js's live getter), so a single
  // combined sum would silently double-count "how many parts are posed" —
  // which material a mesh carries (MeshStandardMaterial = a lit body part,
  // this project's own main.js uses the same `isMeshStandardMaterial` test
  // to decide what gets nest-shaded) is what tells the two apart here.
  let drawables = 0, bodyInstances = 0, outlineInstances = 0;
  scene.traverse((o) => {
    if (!o.isMesh) return;
    drawables++;
    geos.add(o.geometry);
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) mats.add(m);
    const n = o.isInstancedMesh ? o.count : 1;
    if (o.material.isMeshStandardMaterial) bodyInstances += n; else outlineInstances += n;
  });
  return { drawables, geoCount: geos.size, matCount: mats.size, bodyInstances, outlineInstances };
}

function spawnScene(profileMix) {
  _resetPoolsForTest();
  const scene = new THREE.Scene();
  const hullsAdded = new Set();
  for (const profile of profileMix) {
    const { group, updatePose } = buildAntMesh(profile);
    scene.add(group);
    // player/index.js's own pattern: scene.add(buildOutlineHull(group)) once
    // per ant it creates. `group` is the same persistent pools group every
    // time (see antMesh.js) — this loop deliberately calls it once per ant,
    // same as production, to prove that is harmless rather than assuming it.
    scene.add(buildOutlineHull(group));
    updatePose({ x: 0, y: 0, z: 0, yaw: 0, speed: 0, travel: 0, bob: 0, climb: null, legsInit: false, scale: profile.scale }, mockLegState(profile), 0);
  }
  return countScene(scene);
}

function mockLegState(profile) {
  return profile.legs.map(() => ({ planted: [0, 0, 0], from: [0, 0, 0], to: [0, 0, 0], swinging: false, prevP: 0 }));
}

console.log('#36 — mesh/geometry/material count vs ant count (player/antMesh.js):\n');

/* -------------------------------------------------------------------------
   BEFORE (recorded, not re-derived here): measured against the pre-#36
   antMesh.js by running the same countScene() shape on the code as it stood
   before this round's pooling — one THREE.Mesh per body part per ant, a
   materialCache keyed by hex colour. Kept as plain numbers (not re-run
   against old code, which this round replaces) so the table below has
   something to compare against; scripts/test-logic.mjs's own #36 checks are
   what actually guards against a regression back to per-ant meshes. */
const BEFORE = {
  worker: { perAnt: 72, geoAt5: 2, matAt5: 6 },  // 36 body + 36 outline shells
  queen: { perAnt: 74, geoAt5: 2, matAt5: 4 },   // 37 body + 37 outline shells
};
console.log('before (measured against the pre-#36 code, see PROGRESS.md/session notes):');
console.log(`  worker: ${BEFORE.worker.perAnt} meshes/ant (body+outline), scales linearly with ant count`);
console.log(`  queen:  ${BEFORE.queen.perAnt} meshes/ant (body+outline), scales linearly with ant count`);

console.log('\nafter (this round — measured, not estimated):');
for (const n of [1, 5, 20]) {
  const mix = Array.from({ length: n }, (_, i) => (i === 0 ? WORKER : WORKER));
  const r = spawnScene(mix);
  console.log(`  ${n} worker(s): drawables=${r.drawables} geometries=${r.geoCount} materials=${r.matCount} `
    + `body-instances=${r.bodyInstances} outline-instances=${r.outlineInstances}`);
  check(`${n} worker(s): drawables stay at 4 (2 body pools + 2 outline shells), not ${n}x`,
    r.drawables === 4, r.drawables);
  check(`${n} worker(s): exactly 2 geometries total`, r.geoCount === 2, r.geoCount);
  check(`${n} worker(s): exactly 2 materials total (1 shared body material + 1 shared outline material)`,
    r.matCount === 2, r.matCount);
  check(`${n} worker(s): body-instances scale WITH ant count (36 parts/worker) while drawables do not`,
    r.bodyInstances === 36 * n, r.bodyInstances);
  check(`${n} worker(s): the outline shell posed-count tracks the body's exactly`,
    r.outlineInstances === r.bodyInstances, `${r.outlineInstances} vs ${r.bodyInstances}`);
}

{
  const mixed = [WORKER, FOUNDING_QUEEN, WORKER, WORKER, FOUNDING_QUEEN];
  const r = spawnScene(mixed);
  console.log(`  mixed 3 workers + 2 queens: drawables=${r.drawables} materials=${r.matCount} body-instances=${r.bodyInstances}`);
  check('a mixed player+worker scene still draws through 4 objects, not one per profile',
    r.drawables === 4, r.drawables);
  check('body-instances match the exact per-profile part counts (36*3 + 37*2)',
    r.bodyInstances === 36 * 3 + 37 * 2, r.bodyInstances);
}

console.log('\npool exhaustion fails loudly instead of silently dropping/corrupting an ant:');
{
  _resetPoolsForTest();
  const scene = new THREE.Scene();
  let thrown = null;
  try {
    // MAX_ANTS + 1 workers must not fit — this is the constant's whole point
    // (see instancedPool.js's header on why it does not just grow instead).
    for (let i = 0; i < MAX_ANTS + 1; i++) {
      const { group } = buildAntMesh(WORKER);
      scene.add(group);
    }
  } catch (e) { thrown = e; }
  check(`allocating past MAX_ANTS (${MAX_ANTS}) workers throws rather than corrupting the pool`,
    thrown instanceof Error && /instanced pool exhausted/.test(thrown.message), thrown && thrown.message);
  _resetPoolsForTest();
}

console.log('\noutline shells track the body pool without a rebuild (core/outline.js, #36):');
{
  _resetPoolsForTest();
  const scene = new THREE.Scene();
  const { group: g1 } = buildAntMesh(WORKER);
  scene.add(g1);
  const hull = buildOutlineHull(g1); // built while only 1 ant is posed
  scene.add(hull);
  const shellSphere = hull.children.find((c) => c.geometry.type === 'SphereGeometry');
  const bodySphere = g1.children.find((c) => c.geometry.type === 'SphereGeometry');
  check('the outline shell shares the body pool\'s instanceMatrix by reference, not a copy',
    shellSphere.instanceMatrix === bodySphere.instanceMatrix);
  check('a fresh hull\'s shell count matches the body pool\'s count so far',
    shellSphere.count === bodySphere.count, `${shellSphere.count} vs ${bodySphere.count}`);

  // A second ant, spawned AFTER the hull already exists (no second
  // buildOutlineHull() call for it) — the point of the live `count` getter.
  buildAntMesh(WORKER);
  check('...and keeps tracking it after a second ant is spawned with no second buildOutlineHull() call',
    shellSphere.count === bodySphere.count, `${shellSphere.count} vs ${bodySphere.count}`);

  const hullAgain = buildOutlineHull(g1); // same pools group, called again
  check('calling buildOutlineHull() again on the same pools group adds no new shells',
    hullAgain.children.length === 0, hullAgain.children.length);
  _resetPoolsForTest();
}

console.log(`\n${pass} passed, ${fail} failed.`);
if (fail > 0) process.exit(1);
