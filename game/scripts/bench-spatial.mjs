// CPU micro-benchmark for #35: the linear scans the game does today, against
// the same queries answered through core/spatialIndex.js.
//
// WHAT THIS NUMBER IS, AND IS NOT. It is pure JavaScript arithmetic timed
// under plain node — no GPU, no Chromium, no rendering — so it is honest on a
// GPU-less box, unlike every scripts/verify-*.mjs. It is NOT the "temps CPU
// d'une image" the ticket's acceptance criterion asks for: that one includes
// Three.js's own per-frame work and has to be measured on a machine with a
// real GPU, with the callers actually rebranched.
//
// It uses the REAL map data where it can (world/grass.js's footprints and
// world/resources.js's nodes, through the same loader hook test-logic.mjs
// uses), so the object counts and densities are the game's, not invented.
//
// Usage: node scripts/bench-spatial.mjs

import { register } from 'node:module';
register('./logic-test/loader.mjs', import.meta.url);

const { createSpatialIndex } = await import('../src/core/spatialIndex.js');
const grassMod = await import('../src/world/grass.js');
const resMod = await import('../src/world/resources.js');

const GRASS = grassMod.createGrassField({}).footprints;
resMod.buildResources();                      // sows RESOURCE_NODES
const NODES = resMod.RESOURCE_NODES;

// The reaches the real callers use, for a founding queen (avatar.js: collide
// radius 3.3, scale 2.2) — see the cell-size note in core/spatialIndex.js.
const CLIMB_MIN_H = 42;          // player/climb.js
const CLIMB_REACH = 4.5 * 2.2;   // CLIMB_RADIUS * scale
const BODY_R = 3.3;
const SHADE_RADIUS = 26;         // player/siteQuality.js probeShade

const idx = createSpatialIndex();
for (let i = 0; i < GRASS.length; i++) idx.insert('grass', i, GRASS[i].x, GRASS[i].z, GRASS[i].w);
for (let i = 0; i < NODES.length; i++) idx.insert('resource', i, NODES[i].x, NODES[i].z, NODES[i].r);

console.log(`map: ${GRASS.length} grass blades, ${NODES.length} resource nodes`);
console.log(`index: ${JSON.stringify(idx.stats())}\n`);

// Query points spread over the playable lawn, deterministic so two runs are
// comparable.
let s = 987654321;
const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const PROBES = [];
for (let i = 0; i < 4000; i++) PROBES.push([(rnd() - 0.5) * 380, rnd() * 240]);

function time(label, fn) {
  fn(); // warm up (let the JIT settle before the clock starts)
  const t0 = process.hrtime.bigint();
  const acc = fn();
  const t1 = process.hrtime.bigint();
  const us = Number(t1 - t0) / 1000;
  console.log(`  ${label.padEnd(34)} ${(us / PROBES.length).toFixed(3)} us/query   (checksum ${acc})`);
  return us / PROBES.length;
}

function report(name, scan, indexed) {
  const a = time(`scan   ${name}`, scan);
  const b = time(`index  ${name}`, indexed);
  console.log(`  ${'->'.padEnd(34)} x${(a / b).toFixed(1)} faster\n`);
}

/* ---- nearestClimbable(): every blade, every frame ---------------------- */
report('nearestClimbable', () => {
  let acc = 0;
  for (const [x, z] of PROBES) {
    let best = -1, bestD = CLIMB_REACH;
    for (let i = 0; i < GRASS.length; i++) {
      const g = GRASS[i];
      if (g.h < CLIMB_MIN_H) continue;
      const d = Math.hypot(g.x - x, g.z - z);
      if (d < bestD) { bestD = d; best = i; }
    }
    acc += best;
  }
  return acc;
}, () => {
  let acc = 0;
  const tall = (id) => GRASS[id].h >= CLIMB_MIN_H;
  for (const [x, z] of PROBES) {
    const hit = idx.nearest(x, z, CLIMB_REACH, 'grass', tall);
    acc += hit ? hit.id : -1;
  }
  return acc;
});

/* ---- harvest.target() -> nodeInReach(): every node, every frame -------- */
report('nodeInReach', () => {
  let acc = 0;
  for (const [x, z] of PROBES) {
    let best = -1, bestD = Infinity;
    for (let i = 0; i < NODES.length; i++) {
      const n = NODES[i];
      if (n.amount <= 0) continue;
      const d = Math.hypot(n.x - x, n.z - z);
      if (d <= n.r + BODY_R * 0.6 && d < bestD) { bestD = d; best = i; }
    }
    acc += best;
  }
  return acc;
}, () => {
  let acc = 0;
  const alive = (id) => NODES[id].amount > 0;
  for (const [x, z] of PROBES) {
    const hit = idx.nearestWithin(x, z, BODY_R * 0.6, 'resource', alive);
    acc += hit ? hit.id : -1;
  }
  return acc;
});

/* ---- resolveDecorCollision()'s grass pass: every blade, every frame ----
   (mushrooms/rocks are the same loop over shorter arrays; the blades are
   what dominates it outdoors.) */
report('decor collision, grass pass', () => {
  let acc = 0;
  for (const [x, z] of PROBES) {
    for (let i = 0; i < GRASS.length; i++) {
      const g = GRASS[i];
      if (g.h < CLIMB_MIN_H) continue;
      const r = g.w * 0.75 + BODY_R;
      if (Math.hypot(g.x - x, g.z - z) < r) acc++;
    }
  }
  return acc;
}, () => {
  let acc = 0;
  for (const [x, z] of PROBES) {
    idx.forEachWithin(x, z, BODY_R, 'grass', (id, dist, ex, ez, extent) => {
      // same 0.75 the caller applies to the stored half width
      if (GRASS[id].h >= CLIMB_MIN_H && dist < extent * 0.75 + BODY_R) acc++;
    });
  }
  return acc;
});

/* ---- probeShade(): every blade, 4x a second ---------------------------- */
report('probeShade (r=26)', () => {
  let acc = 0;
  for (const [x, z] of PROBES) {
    for (let i = 0; i < GRASS.length; i++) {
      const g = GRASS[i];
      if (g.h < CLIMB_MIN_H) continue;
      if (Math.abs(g.x - x) > SHADE_RADIUS || Math.abs(g.z - z) > SHADE_RADIUS) continue;
      if (Math.hypot(g.x - x, g.z - z) < SHADE_RADIUS) acc++;
    }
  }
  return acc;
}, () => {
  let acc = 0;
  const tall = (id) => GRASS[id].h >= CLIMB_MIN_H;
  for (const [x, z] of PROBES) acc += idx.countInRadius(x, z, SHADE_RADIUS, 'grass', tall);
  return acc;
});

/* ---- the mutation the ticket asks for: a moving entry ------------------ */
{
  const ants = 20;
  for (let i = 0; i < ants; i++) idx.insert('ant', i, 0, 0, 1.5);
  const t0 = process.hrtime.bigint();
  const REPS = 6000;
  for (let f = 0; f < REPS; f++) {
    for (let i = 0; i < ants; i++) idx.move('ant', i, Math.sin(f * 0.01 + i) * 180, Math.cos(f * 0.013 + i) * 120, 1.5);
  }
  const us = Number(process.hrtime.bigint() - t0) / 1000;
  console.log(`  ${`move() ${ants} ants`.padEnd(34)} ${(us / REPS).toFixed(3)} us per frame of updates`);
}
