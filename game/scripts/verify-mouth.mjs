// Verification for #69 — the nest's walls, and the entrance above all.
//
// Round 18 separated the PUBLISHED volume from the BUILT shell and drove the
// escaped-ray counts to zero, so what #69 reports is NOT "the camera is in the
// rock" and NOT "the sky leaks through the floor". It is the SURFACE: two
// meshes occupying the same sheet of space and taking turns to win the depth
// test, slabs of spoil that stop short of each other, triangles folded back on
// themselves where the trench, the spoil bank and the mound meet.
//
// None of the existing harnesses can see that. verify-descent rays the ground
// from above and asks "did I hit ANYTHING" — two surfaces fighting each other
// answer yes, twice. So this one asks a different question:
//
//   1. IS ANYTHING DOUBLE? A vertical ray every unit over the whole mouth,
//      keeping EVERY hit, not the first. Two hits closer together than
//      SEP_MIN are two surfaces at the same place: whichever wins is decided
//      by float noise, and it changes with the camera. That is z-fighting,
//      measured rather than looked for.
//
//   2. IS ANY SHADING NORMAL BROKEN? Straight off the buffers. This renderer
//      draws every ground surface DoubleSide and flips the normal per fragment
//      (THREE's faceDirection), so a triangle wound "backwards" is not a
//      defect here — the lawn's whole grid is, and always has been. What IS a
//      defect is a vertex whose accumulated normal is zero or NaN: that is
//      what two patches of OPPOSITE winding meeting on shared vertices leaves
//      behind, and it shades as a black wedge that moves with the camera.
//
//   3. IS ANYTHING DEGENERATE? Triangles of zero area contribute nothing to
//      the picture and nothing to a normal, and a ring of them is the usual
//      sign of a fan built as a ring of radius zero. Asserted on the surfaces
//      this ticket is about — the ground you can see from outside — and merely
//      reported for the rest. (openTheMeadow() and punchWall() collapse
//      triangles on purpose; those are all three indices equal, and counted
//      apart.)
//
//   4. WHAT IT LOOKS LIKE. A full orbit of the mouth, 12 bearings x 2 heights
//      x 2 distances, and that is the real proof: every number above can pass
//      on a nest that reads as a pile of slabs. The numbers exist so that the
//      next regression is caught by a script instead of by the porter.
//
// Chromium MUST be launched with --use-gl=angle --use-angle=d3d11, or we are
// photographing the software rasteriser.
//
// Usage: node scripts/verify-mouth.mjs [outDir]     (run `npx vite build` first)

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_mouth-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4197;
const URL = `http://localhost:${PORT}/`;

/* The same knoll shoulder verify-descent.mjs founds on, so a regression shows
   up in both rather than in one site's luck. */
const SITE = [70, 95];

/* How far apart two surfaces have to be before they stop fighting. The depth
   buffer here is 24-bit over a 0.1..1200 frustum, so at 60 units out the
   quantum is already of the order of a centimetre and what decides the fight
   is not the buffer, it is the vertex maths: a trench bank sampled every 8
   units and a lawn grid sampled every 6 cross each other wherever the ground
   rolls by more than the offset between them. A quarter of a unit is a
   fortieth of the queen; anything nested less than that is nested by luck. */
const SEP_MIN = 0.25;

/* Rays that see nothing at all. verify-descent already enforces zero of these
   over the whole excavation; repeated here because this sweep covers the rim,
   where its coarser grid can step over a slot. */
const HOLES_MAX = 0;

/* And how many rays may find a pair that close. NOT zero, and the reason is
   worth writing down: a spoil bank has to die into the meadow somewhere, and
   along that line the two surfaces necessarily pass through each other. What
   must not happen is AREAS of it — the baseline, measured on the same sweep
   before any of this round's changes, is 4677 of 12061 rays, i.e. a third of
   the ground around the entrance. A line, sampled every unit and a half around
   a cut some two hundred units of perimeter, is of the order of a hundred. */
const FIGHTS_MAX = 150;

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
  const page = await browser.newPage({ viewport: { width: 960, height: 600 } });
  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => { consoleErrors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__world6 && window.__renderView, null, { timeout: 20000 });
  await page.waitForTimeout(1500);
  /* The HUD is a DOM overlay and it covers a third of the frame. This harness
     is photographing GROUND; hide everything that is not the canvas. */
  await page.evaluate(() => {
    document.querySelectorAll('body > *').forEach((e) => {
      if (e.id !== 'app' && e.tagName !== 'SCRIPT') e.style.display = 'none';
    });
  });

  const failures = [];
  const check = (cond, msg) => { if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); } else console.log('  ok:   ' + msg); };
  const shot = async (name) => {
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
  };

  // ---- 0. dig ------------------------------------------------------------
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  const dug = await page.evaluate((site) => {
    const W = window.__world6;
    const verdict = W.canFoundAt(site[0], site[1]);
    if (!verdict.ok) return { verdict };
    const r = W.foundNest(site[0], site[1]);
    /* The hall as well: the mound over the chamber is rebuilt when it opens,
       and the berm along its corridor is the other surface this ticket is
       about. A nest with its first room still shut is half the shape. */
    for (const f of W.digFaces()) W.payDigFace(f.id, f.needed);
    W.populateNest(2);
    const n = W.getFoundedNest();
    return {
      verdict: r,
      nest: { x: n.x, z: n.z, floorY: n.floorY, mouth: n.mouth, chamber: n.chamber },
      rooms: W.dugRooms(),
      path: W.descentPath(),
    };
  }, SITE);
  console.log('dig:', JSON.stringify(dug.verdict));
  check(dug.verdict.ok, `foundNest(${SITE}) succeeds`);
  if (!dug.verdict.ok) { await finish(); return; }
  const N = dug.nest;

  /* ---- 1. double surfaces -----------------------------------------------
     A ray every unit and a half over the mouth and the first stretch of the
     cut — the ground the porter's capture is of. Every hit is kept; the gaps
     between consecutive hits are what the depth buffer has to arbitrate.

     The grid is offset by an odd fraction on purpose. The lawn's cells are 6
     units and its quads are split on a diagonal, so a sweep on whole
     coordinates lands on shared edges and reports every one of them as two
     hits at the same distance — 3997 phantom pairs, measured, before the
     offset was put in. */
  console.log('\n=== the ground over the mouth is ONE surface ===');
  const sweep = await page.evaluate(([sepMin, site]) => {
    const THREE = window.__world6.THREE;
    const W = window.__world6;
    const targets = [];
    window.__scene.traverse((o) => {
      if (!o.isMesh || !o.visible) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      /* Grass is excluded on purpose and for the reason verify-descent gives:
         its blades are bent in the vertex shader, so its rest geometry answers
         for a blade that is not where the buffer says. */
      if (isNest || o.name === 'lawn') targets.push(o);
    });
    const rc = new THREE.Raycaster();
    rc.firstHitOnly = false;
    const down = new THREE.Vector3(0, -1, 0);
    const R = 60;   // mouth flare + spoil bank + a margin of meadow
    const pairs = [];
    const holes = [];
    let cells = 0, hitsTotal = 0;
    const nameOf = (o) => o.name || o.geometry?.name || o.type;
    for (let x = site[0] - R + 0.37; x <= site[0] + R; x += 1.5) {
      for (let z = site[1] - R + 0.19; z <= site[1] + R; z += 1.5) {
        if (Math.hypot(x - site[0], z - site[1]) > R) continue;
        cells++;
        rc.set(new THREE.Vector3(x, 420, z), down);
        rc.near = 0.01; rc.far = 900;
        const hits = rc.intersectObjects(targets, true);
        hitsTotal += hits.length;
        if (!hits.length) { holes.push({ x: +x.toFixed(1), z: +z.toFixed(1), gy: +W.groundY(x, z).toFixed(1) }); continue; }
        // any two hits closer than sepMin are one surface drawn twice
        for (let i = 1; i < hits.length; i++) {
          const gap = hits[i].distance - hits[i - 1].distance;
          if (gap >= sepMin) continue;
          pairs.push({
            x: +x.toFixed(1), z: +z.toFixed(1), gap: +gap.toFixed(3),
            a: nameOf(hits[i - 1].object), b: nameOf(hits[i].object),
            y: +(420 - hits[i].distance).toFixed(2),
          });
          break;   // one report per ray: a stack of slivers is one defect
        }
      }
    }
    const tally = (rows, key) => rows.reduce((acc, r) => {
      const k = key(r); acc[k] = (acc[k] || 0) + 1; return acc;
    }, {});
    return {
      cells, hitsTotal,
      holes: holes.length, holeSample: holes.slice(0, 8),
      fights: pairs.length,
      fightBy: tally(pairs, (p) => `${p.a} | ${p.b}`),
      fightSample: pairs.slice(0, 8),
    };
  }, [SEP_MIN, SITE]);
  console.log(`  ${sweep.cells} rays, ${sweep.hitsTotal} surface hits (${(sweep.hitsTotal / sweep.cells).toFixed(2)} per ray)`);
  console.log(`  holes:   ${sweep.holes}`, sweep.holes ? JSON.stringify(sweep.holeSample) : '');
  console.log(`  fights:  ${sweep.fights} rays whose two topmost surfaces are < ${SEP_MIN} apart`);
  if (sweep.fights) {
    console.log('           by pair: ' + JSON.stringify(sweep.fightBy));
    console.log('           ' + JSON.stringify(sweep.fightSample));
  }
  check(sweep.holes <= HOLES_MAX, `no hole in the ground over the mouth (${sweep.holes} of ${sweep.cells} rays)`);
  check(sweep.fights <= FIGHTS_MAX,
    `at most ${FIGHTS_MAX} rays find two surfaces within ${SEP_MIN} (${sweep.fights} of ${sweep.cells})`);

  // ---- 2 & 3. broken normals, degenerate triangles -----------------------
  console.log('\n=== the buffers ===');
  const tris = await page.evaluate(() => {
    const out = [];
    window.__scene.traverse((o) => {
      if (!o.isMesh || !o.geometry) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      if (!isNest && o.name !== 'lawn') return;
      const g = o.geometry;
      const pos = g.getAttribute('position');
      const nor = g.getAttribute('normal');
      const idx = g.getIndex();
      if (!pos || !idx) return;
      const a = idx.array;
      let total = 0, zero = 0, collapsed = 0, thin = 0;
      /* Only vertices a DRAWN triangle actually uses. A buffer here routinely
         carries vertices nothing references — the pan lays quads only over dug
         ground, openTheMeadow collapses lawn triangles onto one corner — and
         their normals are zero because nothing ever added to them. That is not
         a defect, it is an unused row. */
      const used = new Uint8Array(pos.count);
      for (let t = 0; t < a.length; t += 3) {
        total++;
        const i0 = a[t], i1 = a[t + 1], i2 = a[t + 2];
        /* A quad that was deliberately dropped is all three indices the same
           (openTheMeadow, punchWall). That is how this codebase deletes a
           triangle without rebuilding a buffer, so it is counted apart. */
        if (i0 === i1 && i1 === i2) { collapsed++; continue; }
        used[i0] = 1; used[i1] = 1; used[i2] = 1;
        const ax = pos.getX(i0), ay = pos.getY(i0), az = pos.getZ(i0);
        const bx = pos.getX(i1), by = pos.getY(i1), bz = pos.getZ(i1);
        const cx = pos.getX(i2), cy = pos.getY(i2), cz = pos.getZ(i2);
        const ux = bx - ax, uy = by - ay, uz = bz - az;
        const vx = cx - ax, vy = cy - ay, vz = cz - az;
        const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
        const area = Math.hypot(nx, ny, nz) * 0.5;
        if (area < 1e-6) zero++;
        else if (area < 1e-3) thin++;
      }
      let badNormals = 0, nan = 0;
      for (let i = 0; i < pos.count; i++) {
        if (!Number.isFinite(pos.getX(i)) || !Number.isFinite(pos.getY(i)) || !Number.isFinite(pos.getZ(i))) nan++;
        if (!used[i] || !nor) continue;
        const l = Math.hypot(nor.getX(i), nor.getY(i), nor.getZ(i));
        if (!Number.isFinite(l) || l < 0.5) badNormals++;
      }
      out.push({ mesh: o.name || o.type, total, zero, thin, collapsed, badNormals, nan });
    });
    return out;
  });
  /* The surfaces #69 is about: the ground you can see without going in. The
     corridor and the room meshes are listed but not asserted on — their own
     degenerate rows come from linkTrimS() sliding a whole row onto one circle,
     which is a separate shape to fix and not what the porter photographed. */
  const OUTDOOR = /^(lawn|founded-nest-shell|nest-mound|nest-heap-|nest-berm-|nest-pan)/;
  for (const m of tris) {
    const mark = OUTDOOR.test(m.mesh) ? '*' : ' ';
    console.log(`${mark} ${m.mesh}: ${m.total} tris, ${m.zero} zero-area, ${m.thin} slivers, `
      + `${m.collapsed} deliberately dropped, ${m.badNormals} unusable normals, ${m.nan} NaN positions`);
  }
  const out = tris.filter((m) => OUTDOOR.test(m.mesh));
  const zeroOut = out.reduce((a, m) => a + m.zero, 0);
  const thinOut = out.reduce((a, m) => a + m.thin, 0);
  const badAll = tris.reduce((a, m) => a + m.badNormals, 0);
  const nanAll = tris.reduce((a, m) => a + m.nan, 0);
  console.log(`  (* = asserted on: the ground seen from outside)`);
  check(nanAll === 0, `no vertex has a NaN position (${nanAll})`);
  check(badAll === 0, `every drawn vertex has a usable shading normal (${badAll} bad)`);
  check(zeroOut === 0, `no zero-area triangle in the ground outside (${zeroOut})`);
  check(thinOut === 0, `no sliver under 1e-3 of area either (${thinOut})`);

  // ---- 4. the orbit ------------------------------------------------------
  console.log('\n=== the orbit ===');
  const BEARINGS = 12;
  /* Two distances and two heights, and the close-low pair is the porter's own
     capture: an ant standing on the spoil bank at the rim. The far-high pair
     is the one that shows whether the bank, the apron and the meadow read as
     one piece of ground. */
  const RINGS = [
    { tag: 'near-low', d: 30, h: 4, look: -3 },
    { tag: 'near-high', d: 34, h: 26, look: -4 },
    { tag: 'far-low', d: 78, h: 8, look: -4 },
    { tag: 'far-high', d: 82, h: 46, look: -6 },
  ];
  let shots = 0;
  for (const ring of RINGS) {
    for (let b = 0; b < BEARINGS; b++) {
      const a = (b / BEARINGS) * Math.PI * 2;
      const eye = [N.x + Math.cos(a) * ring.d, N.mouth.y + ring.h, N.z + Math.sin(a) * ring.d];
      const target = [N.x, N.mouth.y + ring.look, N.z];
      await page.evaluate(([e, t]) => window.__renderView(e, t, 2.0), [eye, target]);
      await shot(`${ring.tag}-${String(Math.round((a * 180) / Math.PI)).padStart(3, '0')}`);
      shots++;
    }
  }
  console.log(`  ${shots} stills: ${RINGS.length} rings x ${BEARINGS} bearings`);

  /* And one along the cut, from the bottom looking back out: the seam between
     the trench, the mound's carved slot and the chamber's doorway is only
     visible from inside it. */
  const p = dug.path;
  if (p && p.length > 3) {
    for (const k of [0.25, 0.5, 0.75]) {
      const i = Math.min(p.length - 2, Math.round(k * (p.length - 1)));
      const eye = [p[i].x, p[i].y + 3.0, p[i].z];
      await page.evaluate(([e, t]) => window.__renderView(e, t, 2.0), [eye, [N.x, N.mouth.y + 2, N.z]]);
      await shot(`out-${String(Math.round(k * 100)).padStart(3, '0')}`);
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
