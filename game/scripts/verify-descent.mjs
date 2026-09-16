// Verification for #41 — the world half of "walk into the nest"
// (design/api-monde-gameplay.md §6).
//
// Written BEFORE the implementation, on purpose. Three rounds in a row an
// agent here was cut off at the moment of writing its harness, and the one
// round whose result arrived with its proof is the one that measured first.
// So this script exists to fail on the baseline geometry, and the ramp is
// then written against the number it prints.
//
// What it proves, and how:
//
//   1. THE DESCENT IS A SLOPE, NOT A DROP. descentPath() is sampled and the
//      rise/run between consecutive points is compared against MAX_SLOPE.
//      A plumb shaft scores ~4.4; a ramp a ground-following controller can
//      walk scores well under 1. This is the single number the ticket is
//      about.
//
//   2. groundY() FOLLOWS IT. The path is walked in 0.25-unit steps in (x, z)
//      — the same step-by-step method used on containUnderground() in
//      earlier rounds — and the change in groundY() per step is measured.
//      A step larger than STEP_MAX is a cliff the controller would teleport
//      down, because player/movement.js assigns ant.y = groundY(x, z)
//      unconditionally and has no notion of falling.
//
//   2b. YOU DO NOT HAVE TO BE DEAD IN FRONT OF IT. The same walk, but taken
//      straight in from a band of lateral offsets, with movement.js's own
//      ledge rule applied at the boundary. It reports the width of frontage
//      that actually accepts a walk-in. Added in round 17, when the porter
//      said entering was awkward: every check above walks the centre line,
//      where an entrance is never the problem.
//
//   3. NOTHING IS IN THE WAY. A THREE.Raycaster is run along the path at eye
//      height, segment by segment, against the dug nest and the lawn only
//      (not the grass, whose real shape lives in a vertex shader and whose
//      rest geometry would answer for a blade that is not there). A hit
//      means the descent passes through soil.
//
//   4. IT LOOKS LIKE AN ENTRANCE. Free-camera stills from the lawn, from
//      above, and one per step down the path — read with eyes, because every
//      defect this project has caught since round 3 was caught in an image.
//
// The nest is dug by calling the world directly (window.__world6.foundNest),
// with no controller and no ant. That is the contract's dependency direction
// (§5) being useful rather than decorative: if this needed the player half to
// exist, the world half could not be verified while the player half is being
// written in parallel.
//
// Chromium MUST be launched with --use-gl=angle --use-angle=d3d11. Without
// it we measure the software rasteriser.
//
// Usage: node scripts/verify-descent.mjs [outDir]     (run `npx vite build` first)

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_descent-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4179;
const URL = `http://localhost:${PORT}/`;

/* Where the harness founds. Same knoll shoulder verify-harvest.mjs walks to,
   so the two harnesses exercise the same ground and a regression in one shows
   up in the other. */
const SITE = [70, 95];

/* A slope the ground-following controller can walk. The queen is 3.3 in
   radius and ~24 long (player/avatar.js); 0.45 is tan(24 deg), which over her
   own body length is a rise of about one and a half body radii — steep to
   look at, unremarkable to walk. The plumb shaft this replaces is 4.4. */
/* Raised with RAMP_SLOPE for #48 (0.38 -> 0.50). This threshold is a DESIGN
   line — "does this read and walk as a ramp" — and the porter moved it by
   asking for a shorter descent. The threshold that is not a design line is
   STEP_MAX below: that one is about the controller having no notion of
   falling, it is unchanged, and it is the one that would actually break. */
const MAX_SLOPE = 0.58;

/* The largest jump in groundY() allowed over a 0.25-unit walk step. Half a
   body radius: bigger than that and she visibly snaps rather than steps. */
const STEP_MAX = 1.6;

/* Clear height a queen needs: body ~6.6 across, plus room to not have the
   camera in the ceiling. */
const MIN_HEADROOM = 9;

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try { const res = await fetch(url); if (res.ok) return resolve(); } catch { /* not up */ }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not come up'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let serverLog = '';
  server.stdout.on('data', (d) => { serverLog += d.toString(); });
  server.stderr.on('data', (d) => { serverLog += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(serverLog); throw e; }
  console.log('preview up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist',
           '--enable-gpu-rasterization', '--disable-gpu-vsync'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => { consoleErrors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__world6 && window.__renderView, null, { timeout: 20000 });
  await page.waitForTimeout(1500);

  const failures = [];
  const check = (cond, msg) => { if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); } else console.log('  ok:   ' + msg); };
  const shot = async (name) => {
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log('  shot:', name + '.png');
  };

  // ---- 0. dig ------------------------------------------------------------
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  const dug = await page.evaluate((site) => {
    const W = window.__world6;
    const verdict = W.canFoundAt(site[0], site[1]);
    if (!verdict.ok) return { verdict };
    const r = W.foundNest(site[0], site[1]);
    /* Dig the hall out too, in one payment: the harness is proving the
       DESCENT, and a nest with its first room still shut is only half the
       shape the walk has to cross. payDigFace is idempotent and the world
       does the opening, so no ant has to exist for this (contract §7). */
    for (const f of W.digFaces()) W.payDigFace(f.id, f.needed);
    W.populateNest(2);
    const n = W.getFoundedNest();
    return {
      verdict: r,
      nest: { x: n.x, z: n.z, floorY: n.floorY, mouth: n.mouth, chamber: n.chamber },
      rooms: W.dugRooms(),
    };
  }, SITE);
  console.log('dig:', JSON.stringify(dug.verdict), dug.nest ? `floorY=${dug.nest.floorY.toFixed(2)}` : '');
  check(dug.verdict.ok, `foundNest(${SITE}) succeeds`);
  if (!dug.verdict.ok) { await finish(); return; }

  // ---- 1. the path is a slope -------------------------------------------
  const pathInfo = await page.evaluate(() => {
    const W = window.__world6;
    const p = W.descentPath();
    if (!p) return null;
    const segs = [];
    for (let i = 1; i < p.length; i++) {
      const run = Math.hypot(p[i].x - p[i - 1].x, p[i].z - p[i - 1].z);
      const rise = p[i - 1].y - p[i].y;
      segs.push({ run: +run.toFixed(3), rise: +rise.toFixed(3), slope: +(rise / Math.max(run, 1e-4)).toFixed(3) });
    }
    return { p, segs, total: p.length };
  });
  check(pathInfo !== null, 'descentPath() returns a path');
  if (pathInfo) {
    const worst = pathInfo.segs.reduce((a, b) => (Math.abs(b.slope) > Math.abs(a.slope) ? b : a));
    const drop = pathInfo.p[0].y - pathInfo.p[pathInfo.p.length - 1].y;
    const run = pathInfo.segs.reduce((a, b) => a + b.run, 0);
    console.log(`  path: ${pathInfo.total} points, drop ${drop.toFixed(1)}, run ${run.toFixed(1)}, worst slope ${worst.slope}`);
    check(Math.abs(worst.slope) <= MAX_SLOPE,
      `steepest descentPath() segment ${worst.slope} <= ${MAX_SLOPE}`);
    check(drop > 8, `descentPath() actually descends (${drop.toFixed(1)} units)`);
  }

  // ---- 2. groundY() follows it, with no cliff ---------------------------
  const walk = await page.evaluate(([, ]) => {
    const W = window.__world6;
    const p = W.descentPath();
    const fp = W.nestFootprint();
    if (!p || !fp) return null;
    const STEP = 0.25;
    let prevY = null, worst = 0, worstAt = null, samples = 0, outside = 0;
    const trace = [];
    for (let i = 1; i < p.length; i++) {
      const dx = p[i].x - p[i - 1].x, dz = p[i].z - p[i - 1].z;
      const d = Math.hypot(dx, dz);
      const n = Math.max(1, Math.ceil(d / STEP));
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        const x = p[i - 1].x + dx * t, z = p[i - 1].z + dz * t;
        const y = W.groundY(x, z);
        samples++;
        if (!fp.contains(x, z) && i > 1) outside++;
        if (prevY !== null) {
          const dy = Math.abs(y - prevY);
          if (dy > worst) { worst = dy; worstAt = { x: +x.toFixed(2), z: +z.toFixed(2), dy: +dy.toFixed(2) }; }
        }
        prevY = y;
        if (k === n) trace.push({ x: +x.toFixed(1), z: +z.toFixed(1), y: +y.toFixed(2), py: +p[i].y.toFixed(2), head: +fp.headroom(x, z).toFixed(1) });
      }
    }
    /* Walking IN from outside, along the path's own heading, to catch a step
       at the lip itself — the place a trench most easily grows an invisible
       wall. */
    const h = Math.hypot(p[1].x - p[0].x, p[1].z - p[0].z) || 1;
    const hx = (p[1].x - p[0].x) / h, hz = (p[1].z - p[0].z) / h;
    let approachWorst = 0, approachAt = null, py = null;
    for (let s = -20; s <= 6; s += 0.25) {
      const x = p[0].x + hx * s, z = p[0].z + hz * s;
      const y = W.groundY(x, z);
      if (py !== null && Math.abs(y - py) > approachWorst) {
        approachWorst = Math.abs(y - py); approachAt = { x: +x.toFixed(2), z: +z.toFixed(2), dy: +(y - py).toFixed(2) };
      }
      py = y;
    }
    const heads = trace.map((t) => t.head);
    return { worst: +worst.toFixed(3), worstAt, samples, outside, trace,
             approachWorst: +approachWorst.toFixed(3), approachAt,
             minHead: Math.min(...heads), maxDrift: Math.max(...trace.map((t) => Math.abs(t.y - t.py))) };
  }, []);
  if (walk) {
    console.log(`  walk: ${walk.samples} steps, worst dY ${walk.worst} at ${JSON.stringify(walk.worstAt)}`);
    console.log(`  approach (lawn -> lip): worst dY ${walk.approachWorst} at ${JSON.stringify(walk.approachAt)}`);
    console.log(`  headroom min ${walk.minHead}; |groundY - pathY| max ${walk.maxDrift.toFixed(2)}`);
    check(walk.worst <= STEP_MAX, `no cliff along the path: worst groundY step ${walk.worst} <= ${STEP_MAX}`);
    check(walk.approachWorst <= STEP_MAX, `no cliff walking in from the lawn: ${walk.approachWorst} <= ${STEP_MAX}`);
    check(walk.outside === 0, `nestFootprint().contains() covers its own path (${walk.outside} points outside)`);
    check(walk.minHead >= MIN_HEADROOM, `headroom along the path >= ${MIN_HEADROOM} (min ${walk.minHead})`);
    check(walk.maxDrift <= 1.0, `descentPath() y agrees with groundY() (max drift ${walk.maxDrift.toFixed(2)})`);
  } else check(false, 'nestFootprint()/descentPath() both available');

  /* ---- 2b. HOW MANY WAYS IN --------------------------------------------
     The porter's round-17 note: "il faut pouvoir rentrer dans la fourmilliere
     de maniere un peu plus pratique (pas forcement etre pile en face de la
     'porte')". Everything above walks the centre line, which is precisely
     where an entrance is never a problem — so none of it can see the defect.

     This walks IN, straight, from a band of lateral offsets, and applies the
     rule player/movement.js actually applies at the boundary: a step into the
     nest is refused when the floor she would land on is more than NEST_LEDGE
     below the ground she is standing on. A lane counts only if it gets her
     properly down into the ravine, not merely over the footprint's edge.

     Refused means the lane stops. The controller would slide along the wall
     and might find the mouth eventually; that is exactly the "je glisse le
     long d'un mur invisible en cherchant la porte" the note is about, so the
     conservative reading is the one being measured.

     TWO READINGS, because they answer different questions. (a) is what a
     player does — head for the entrance and walk at it — and it is measured
     as the arc of approach bearings that get in. (b) never steers at all, and
     so measures the frontage itself. A funnel that narrows quickly can pass
     (a) and fail (b); a slot in a cliff fails both. */
  const GATE_ARC_MIN = 90;     // degrees of approach that must work
  const GATE_BAND_MIN = 26;    // units of frontage accepted without steering
  const gate = await page.evaluate(() => {
    const W = window.__world6;
    const fp = W.nestFootprint();
    const p = W.descentPath();
    if (!fp || !p || p.length < 2) return null;
    const m = p[0];
    const dx = p[1].x - m.x, dz = p[1].z - m.z;
    const l = Math.hypot(dx, dz) || 1;
    const hx = dx / l, hz = dz / l;          // the way the cut sets off
    const px = -hz, pz = hx;                 // across it
    const LEDGE = 2.0;                       // player/movement.js NEST_LEDGE
    const STEP = 0.5, DEEP = 2.0;

    /** One walk in a straight line. How deep she got, and what stopped her. */
    const walkIn = (sx, sz, ux, uz, run) => {
      let x = sx, z = sz;
      let inside = fp.contains(x, z);
      let prevY = W.groundY(x, z);
      let deepest = 0;
      for (let s = 0; s <= run; s += STEP) {
        const nx = x + ux * STEP, nz = z + uz * STEP;
        const nowIn = fp.contains(nx, nz);
        if (!inside && nowIn && prevY - fp.floorY(nx, nz) > LEDGE) {
          return { ok: false, why: 'walled', deepest: +deepest.toFixed(1) };
        }
        x = nx; z = nz; inside = nowIn; prevY = W.groundY(x, z);
        if (inside) deepest = Math.max(deepest, m.y - prevY);
        if (deepest >= DEEP) return { ok: true, why: 'in', deepest: +deepest.toFixed(1) };
      }
      return { ok: false, why: 'shallow', deepest: +deepest.toFixed(1) };
    };

    // (a) heading for the entrance, from all around it
    const R = 35, N = 72;
    const dirs = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const r = walkIn(m.x + Math.cos(a) * R, m.z + Math.sin(a) * R, -Math.cos(a), -Math.sin(a), R + 22);
      dirs.push({ deg: Math.round((a * 180) / Math.PI), ...r });
    }
    let arc = 0, run = 0;
    for (let i = 0; i < N * 2; i++) {      // wrapped once, so a sector across 0 counts
      run = dirs[i % N].ok ? run + 1 : 0;
      if (run > arc) arc = run;
    }
    arc = Math.min(arc, N);

    // (b) straight in, parallel to the cut, from a band of lateral offsets
    const lanes = [];
    for (let off = -45; off <= 45; off += 1) {
      const r = walkIn(m.x + px * off - hx * 26, m.z + pz * off - hz * 26, hx, hz, 70);
      lanes.push({ off, ...r });
    }
    let band = 0, brun = 0;
    for (const L of lanes) { brun = L.ok ? brun + 1 : 0; if (brun > band) band = brun; }
    const tally = (rows) => rows.reduce((acc, r) => { acc[r.why] = (acc[r.why] || 0) + 1; return acc; }, {});
    return {
      arcDeg: Math.round((arc / N) * 360), okDirs: dirs.filter((d) => d.ok).length, dirWhy: tally(dirs),
      band, okLanes: lanes.filter((L) => L.ok).length, laneWhy: tally(lanes),
      laneDeep: lanes.filter((L) => !L.ok).slice(0, 6).map((L) => `${L.off}:${L.why}@${L.deepest}`),
    };
  });
  console.log('\n=== ways in ===');
  if (gate) {
    console.log(`  approaching it: ${gate.okDirs}/72 bearings get in, widest sector ${gate.arcDeg} deg  ${JSON.stringify(gate.dirWhy)}`);
    console.log(`  straight in:    ${gate.okLanes}/91 lanes, widest band ${gate.band} units  ${JSON.stringify(gate.laneWhy)}`);
    console.log(`  sample of blocked lanes: ${gate.laneDeep.join('  ')}`);
    check(gate.arcDeg >= GATE_ARC_MIN,
      `she can walk at the entrance from a ${gate.arcDeg} degree sector (needs ${GATE_ARC_MIN})`);
    check(gate.band >= GATE_BAND_MIN,
      `and straight in across ${gate.band} units of frontage without steering (needs ${GATE_BAND_MIN})`);
  } else check(false, 'the gate sweep could run');

  // ---- 3. nothing solid in the way --------------------------------------
  const rays = await page.evaluate(() => {
    const THREE = window.__world6.THREE;
    const W = window.__world6;
    const scene = window.__scene;
    const p = W.descentPath();
    /* Only the dug nest and the lawn. The grass field's rest geometry does
       not describe where its blades actually are (the bend is in the vertex
       shader), so ray-casting it would report blades that are not there. */
    const targets = [];
    scene.traverse((o) => {
      if (!o.isMesh) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      if (isNest || o.name === 'lawn' || o.geometry?.name === 'lawn') targets.push(o);
    });
    if (!targets.length) scene.traverse((o) => { if (o.isMesh && !o.name.includes('grass')) targets.push(o); });
    const EYE = 3.0;   // the queen's eye above her own floor
    const rc = new THREE.Raycaster();
    const hits = [];
    for (let i = 1; i < p.length; i++) {
      const a = new THREE.Vector3(p[i - 1].x, p[i - 1].y + EYE, p[i - 1].z);
      const b = new THREE.Vector3(p[i].x, p[i].y + EYE, p[i].z);
      const d = b.clone().sub(a);
      const len = d.length();
      if (len < 1e-3) continue;
      rc.set(a, d.normalize());
      rc.near = 0.01; rc.far = len;
      const hit = rc.intersectObjects(targets, true);
      if (hit.length) hits.push({ seg: i, at: +hit[0].distance.toFixed(2), of: +len.toFixed(2), obj: hit[0].object.name || '?' });
    }
    return { targets: targets.map((t) => t.name || t.type), hits };
  });
  console.log('  raycast targets:', JSON.stringify(rays.targets));
  console.log('  raycast hits:', JSON.stringify(rays.hits));
  check(rays.hits.length === 0, `the descent line crosses no solid surface (${rays.hits.length} hits)`);

  /* ---- 3b. NO HOLE IN THE GROUND ----------------------------------------
     A grid of straight-down rays over the whole excavation. Every cell that
     hits nothing at all is a hole in the world: underground, a hole shows the
     sky THROUGH the ground, which is what the overhead shot of round 17 was
     full of after the meadow stopped being pushed down out of the way.

     Looking for it by eye found three of these one at a time, each costing a
     build and a screenshot. The grid finds all of them at once and says where
     they are, which is the difference between a defect and a coordinate. */
  const holes = await page.evaluate(() => {
    const THREE = window.__world6.THREE;
    const W = window.__world6;
    const targets = [];
    window.__scene.traverse((o) => {
      if (!o.isMesh) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      if (isNest || o.name === 'lawn') targets.push(o);
    });
    const p = W.descentPath();
    const rooms = W.dugRooms();
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const q of [...p, ...rooms.map((r) => ({ x: r.x, z: r.z }))]) {
      x0 = Math.min(x0, q.x - 24); x1 = Math.max(x1, q.x + 24);
      z0 = Math.min(z0, q.z - 24); z1 = Math.max(z1, q.z + 24);
    }
    const rc = new THREE.Raycaster();
    const down = new THREE.Vector3(0, -1, 0);
    const found = [];
    let cells = 0;
    for (let x = x0; x <= x1; x += 1.5) {
      for (let z = z0; z <= z1; z += 1.5) {
        cells++;
        rc.set(new THREE.Vector3(x, 400, z), down);
        rc.near = 0.01; rc.far = 900;
        if (rc.intersectObjects(targets, true).length) continue;
        const fp = W.nestFootprint();
        found.push({
          x: +x.toFixed(1), z: +z.toFixed(1),
          inNest: fp ? fp.contains(x, z) : false,
          head: fp ? (Number.isFinite(fp.headroom(x, z)) ? +fp.headroom(x, z).toFixed(1) : 'open') : '?',
          gy: +W.groundY(x, z).toFixed(1),
        });
      }
    }
    return { cells, count: found.length, sample: found.slice(0, 12) };
  });
  console.log('\n=== the ground is closed ===');
  console.log(`  ${holes.count} of ${holes.cells} cells over the excavation see straight through to the sky`);
  if (holes.count) console.log('  ', JSON.stringify(holes.sample));
  check(holes.count === 0, `no hole in the ground over the nest (${holes.count} cells)`);

  // ---- 4. what it looks like --------------------------------------------
  const p0 = pathInfo ? pathInfo.p : null;
  const N = dug.nest;
  /* Framed off the descent path itself rather than off compass directions:
     the cut turns as it goes down, so a fixed bearing photographs a different
     part of the nest every time the shape is tuned. */
  const hx = p0 ? (p0[2].x - p0[0].x) : 1, hz = p0 ? (p0[2].z - p0[0].z) : 0;
  const hl = Math.hypot(hx, hz) || 1;
  const back = [N.x - (hx / hl) * 34, N.z - (hz / hl) * 34];
  const side = [-hz / hl, hx / hl];
  const mid = p0 ? p0[Math.floor(p0.length / 2)] : { x: N.x, y: N.mouth.y, z: N.z };
  const cx = (N.x + N.chamber.x) * 0.5, cz = (N.z + N.chamber.z) * 0.5;
  const span = Math.hypot(N.chamber.x - N.x, N.chamber.z - N.z) + 40;
  const shots = [
    // does it read as an entrance, from a queen's own eye height on the lawn?
    ['entrance-eye', [back[0], N.mouth.y + 5, back[1]], [N.x, N.mouth.y - 2, N.z]],
    // the whole excavation: threshold, cut, mound over the chamber
    ['excavation-wide', [cx + side[0] * span, N.mouth.y + span * 0.55, cz + side[1] * span], [cx, N.mouth.y - 6, cz]],
    ['excavation-far', [cx - side[0] * span, N.mouth.y + span * 0.4, cz - side[1] * span], [cx, N.mouth.y - 4, cz]],
    ['overhead', [cx, N.mouth.y + span * 1.5, cz + 1], [cx, N.mouth.y - 10, cz]],
    // standing in the cut, looking back up at daylight — the way out
    ['looking-out', [mid.x, mid.y + 3.2, mid.z], [N.x, N.mouth.y + 3, N.z]],
    ['mound-oblique', [N.chamber.x + side[0] * 46 - hx / hl * 14, N.mouth.y + 26, N.chamber.z + side[1] * 46 - hz / hl * 14],
      [N.chamber.x, N.mouth.y - 2, N.chamber.z]],
  ];
  for (const [name, eye, target] of shots) {
    await page.evaluate(([e, t]) => window.__renderView(e, t, 2.0), [eye, target]);
    await shot(name);
  }

  if (p0) {
    /* One still per station down the path, eye at the queen's height, looking
       at the next station. This is the capture the ticket asks for: a free
       camera descending the ramp. */
    const stations = 8;
    for (let s = 0; s < stations; s++) {
      const f = (s / (stations - 1)) * (p0.length - 2);
      const i = Math.min(p0.length - 2, Math.floor(f));
      const t = f - i;
      const a = p0[i], b = p0[i + 1], c = p0[Math.min(p0.length - 1, i + 3)];
      const eye = [a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t + 3.0, a.z + (b.z - a.z) * t];
      await page.evaluate(([e, tg]) => window.__renderView(e, tg, 2.0), [eye, [c.x, c.y + 2.0, c.z]]);
      await shot(`descend-${String(s).padStart(2, '0')}`);
    }
  }

  await finish();

  async function finish() {
    check(consoleErrors.length === 0, `no console errors (${consoleErrors.length})`);
    if (consoleErrors.length) console.log(consoleErrors.slice(0, 6).join('\n'));
    console.log('\n' + (failures.length ? `${failures.length} FAILURE(S):\n - ` + failures.join('\n - ') : 'ALL CHECKS PASSED'));
    console.log('shots in', outDir);
    await browser.close();
    server.kill();
    process.exitCode = failures.length ? 1 : 0;
  }
}

main().catch(async (e) => { console.error(e); process.exit(1); });
