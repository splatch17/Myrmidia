// Verification for #81 — the nest as a volume of diggable cells.
//
// What it proves, in order:
//   1. founding digs the chamber into the volume and the volume is meshed
//      (chunk meshes exist, the footprint the controller walks is read from it);
//   2. FREE digging with arbitrary brushes: an L-shaped tunnel out of the
//      chamber and an irregular room at its end (overlapping spheres), each
//      reporting the cells it opened, all walkable, roofed and continuous;
//   3. the queen WALKS into the new cavity through the real input pipeline
//      (keys, camera-relative movement) and stays on its floor the whole way;
//   4. the dig face still opens the hall — progressively now — with the loop
//      running, and the frame rate is measured while cells are being opened
//      every frame (hand-dig brushes + the face);
//   5. screenshots: the free tunnel and room in play, the doorway where the
//      tunnel leaves the chamber (close-up, organic rim), the entrance trench
//      edges, and the whole thing in the macro view.
//
// Chromium MUST have ANGLE/D3D11. Run it alone (PROGRESS.md trap 5).
// Usage: node scripts/verify-volume-81.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_volume81');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4183;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };   // the knoll shoulder every nest harness founds on

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

let server = null;
async function main() {
  server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let log = '';
  server.stdout.on('data', (d) => { log += d.toString(); });
  server.stderr.on('data', (d) => { log += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(log); throw e; }
  console.log('preview up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization',
      '--disable-gpu-vsync', '--disable-frame-rate-limit'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__world6 && window.__renderView && window.__ant && window.__faces,
    null, { timeout: 20000 });
  await page.waitForTimeout(800);

  const failures = [];
  const check = (c, m) => { if (!c) { failures.push(m); console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };
  const shot = async (n) => { await page.screenshot({ path: path.join(outDir, `${n}.png`) }); console.log('  shot:', n + '.png'); };
  const view = (eye, aim) => page.evaluate(([e, a]) => window.__renderView(e, a), [eye, aim]);
  const loopOn = () => page.evaluate(() => window.__renderer.setAnimationLoop(window.__frame));
  const loopOff = () => page.evaluate(() => window.__renderer.setAnimationLoop(null));

  /* ---- 1. founding: the chamber is a volume ------------------------------ */
  console.log('\n=== founding ===');
  const founded = await page.evaluate((s) => {
    const W = window.__world6;
    const t0 = performance.now();
    const r = W.foundNest(s.x, s.z);
    const ms = performance.now() - t0;
    const n = W.getFoundedNest();
    const p = W.descentPath();
    const last = p[p.length - 1], prev = p[p.length - 2];
    return {
      r, ms, stats: W.nestMeshStats(),
      nest: { x: n.x, z: n.z, floorY: n.floorY, chamber: n.chamber, mouth: n.mouth },
      arrive: [last.x - prev.x, last.z - prev.z],
      face: window.__faces()[0],
      volumeMeshes: n.group.children.filter((o) => /^nest-volume-/.test(o.name)).length,
      oldRoomMeshes: n.group.children.filter((o) => /^nest-(room|link)-/.test(o.name)).length,
    };
  }, SITE);
  console.log('  foundNest ->', JSON.stringify(founded.r), `${founded.ms.toFixed(0)} ms`, JSON.stringify(founded.stats));
  check(founded.r && founded.r.ok, 'the nest was founded');
  check(founded.volumeMeshes > 0, `the chamber is drawn from the volume (${founded.volumeMeshes} chunk meshes)`);
  check(founded.oldRoomMeshes === 0, 'no hand-built room/tunnel mesh is left');
  const N = founded.nest, C = N.chamber, fy = N.floorY;

  /* Where the free dig goes: an L out of the chamber and a room at its end,
     laid where the ground is deep enough over it (a free dig keeps MIN_COVER
     under the meadow, so on low ground it would just be a crawl space), and
     clear of the ramp and of the hall the face will open. Chosen by sampling
     the meadow, not hard-coded, so the harness survives a terrain edit. */
  const f = founded.face;
  const al = Math.hypot(...founded.arrive) || 1;
  const hx = founded.arrive[0] / al, hz = founded.arrive[1] / al;
  const plan = await page.evaluate(([c, fy0, face, arrive]) => {
    const W = window.__world6;
    const lawn = (x, z) => W.groundCoverAt(x, z);   // meadow, or spoil over it
    // the open part of the ramp: the stretch inside the chamber is the chamber
    const path = W.descentPath().filter((q) => Math.hypot(q.x - c.x, q.z - c.z) > c.r * 1.4);
    const hallDir = [face.x - c.x, face.z - c.z];
    const hl = Math.hypot(...hallDir);
    let best = null;
    for (let i = 0; i < 36; i++) {
      const th = (i / 36) * Math.PI * 2;
      const d1 = [Math.cos(th), Math.sin(th)];
      if (d1[0] * -arrive[0] + d1[1] * -arrive[1] > 0.3) continue;       // not back up the ramp
      if ((d1[0] * hallDir[0] + d1[1] * hallDir[1]) / hl > 0.5) continue; // not into the hall's way
      for (const turn of [-1, 1]) {
        const d2 = [-d1[1] * turn, d1[0] * turn];
        const a1 = [c.x + d1[0] * 10, c.z + d1[1] * 10], b1 = [c.x + d1[0] * 40, c.z + d1[1] * 40];
        const b2 = [b1[0] + d2[0] * 26, b1[1] + d2[1] * 26], rc = [b2[0] + d2[0] * 12, b2[1] + d2[1] * 12];
        let minCover = Infinity, minRamp = Infinity;
        const pts = [];
        for (let k = 0; k <= 10; k++) pts.push([a1[0] + (b1[0] - a1[0]) * k / 10, a1[1] + (b1[1] - a1[1]) * k / 10]);
        for (let k = 0; k <= 10; k++) pts.push([b1[0] + (b2[0] - b1[0]) * k / 10, b1[1] + (b2[1] - b1[1]) * k / 10]);
        for (let k = 0; k < 12; k++) pts.push([rc[0] + Math.cos(k / 2) * 12, rc[1] + Math.sin(k / 2) * 12]);
        for (const p of pts) {
          minCover = Math.min(minCover, lawn(p[0], p[1]) - fy0);
          for (const q of path) minRamp = Math.min(minRamp, Math.hypot(p[0] - q.x, p[1] - q.z));
        }
        const score = Math.min(minCover, 26) + Math.min(minRamp, 40) * 0.2;
        if (minRamp > 24 && (!best || score > best.score)) best = { score, minCover, minRamp, d1, d2 };
      }
    }
    return best;
  }, [C, fy, f, [hx, hz]]);
  console.log('  free dig heading:', JSON.stringify(plan));
  check(!!plan, 'found somewhere to dig freely');
  const [px, pz] = plan.d1, [qx, qz] = plan.d2;

  /* ---- 2. free brushes ---------------------------------------------------- */
  console.log('\n=== free digging ===');
  /* Leg 1 ramps down from the chamber floor to wherever the far end needs to
     be to keep its cover (at most 0.4 of slope — the descent's own budget is
     0.46), and the rest of it is level. */
  const fB = Math.max(fy - 12, Math.min(fy, fy + plan.minCover - 16));
  const Y = fB + 5.2;
  const leg1a = [C.x + px * 10, fy + 5.2, C.z + pz * 10];
  const leg1b = [C.x + px * 40, Y, C.z + pz * 40];
  const leg2b = [leg1b[0] + qx * 26, Y, leg1b[2] + qz * 26];
  const roomC = [leg2b[0] + qx * 12, Y, leg2b[2] + qz * 12];
  console.log(`  leg 1 drops ${(fy - fB).toFixed(1)} over 30 (slope ${((fy - fB) / 30).toFixed(2)})`);
  const brushes = [
    { name: 'L leg 1', center: leg1a, end: leg1b, radius: 7.2, floor: [fy, fB] },
    { name: 'L leg 2', center: leg1b, end: leg2b, radius: 6.6, endRadius: 7.4, floor: fB },
    { name: 'room a', center: roomC, radius: 10.5, floor: fB },
    { name: 'room b', center: [roomC[0] + px * 8, Y + 1, roomC[2] + pz * 8], radius: 8.2, floor: fB },
    { name: 'room c', center: [roomC[0] - qx * 7 + px * 5, Y, roomC[2] - qz * 7 + pz * 5], radius: 7.6, floor: fB },
    { name: 'niche', center: [roomC[0] - px * 11, Y + 0.5, roomC[2] - pz * 11], radius: 5.2, floor: fB },
  ];
  const dig = await page.evaluate(([bs]) => {
    const W = window.__world6;
    const out = [];
    for (const b of bs) {
      const t0 = performance.now();
      const n = W.openCells(b);
      out.push({ name: b.name, opened: n, ms: +(performance.now() - t0).toFixed(1) });
    }
    const again = W.openCells(bs[0]);
    const t1 = performance.now();
    W.flushNestMesh();
    return { out, again, flushMs: +(performance.now() - t1).toFixed(1), stats: W.nestMeshStats() };
  }, [brushes]);
  for (const d of dig.out) console.log(`  ${d.name}: ${d.opened} cells in ${d.ms} ms`);
  console.log('  remesh flush', dig.flushMs, 'ms', JSON.stringify(dig.stats));
  check(dig.out.every((d) => d.opened > 50), 'every brush opened cells');
  check(dig.again === 0, `the same brush twice opens nothing the second time (${dig.again})`);

  /* Walkable, roofed and continuous along the L and into the room, off the
     centre line too (a body's width either side, PROGRESS.md trap 7). */
  const walkLine = await page.evaluate(([pts]) => {
    const W = window.__world6;
    const fp = W.nestFootprint();
    const res = { outside: 0, worst: 0, open: 0, low: 0, samples: 0, trace: [] };
    for (let leg = 0; leg < pts.length - 1; leg++) {
      const a = pts[leg], b = pts[leg + 1];
      const dx = b[0] - a[0], dz = b[2] - a[2], L = Math.hypot(dx, dz);
      const ox = -dz / L, oz = dx / L;
      for (const off of [-2.2, 0, 2.2]) {
        let prev = null;
        for (let i = 0; i <= Math.ceil(L / 0.5); i++) {
          const t = i / Math.ceil(L / 0.5);
          const x = a[0] + dx * t + ox * off, z = a[2] + dz * t + oz * off;
          res.samples++;
          if (!fp.contains(x, z)) res.outside++;
          const y = W.groundY(x, z);
          if (prev !== null) res.worst = Math.max(res.worst, Math.abs(y - prev));
          prev = y;
          const hr = fp.headroom(x, z);
          if (!Number.isFinite(hr)) res.open++;
          else if (hr < 5) res.low++;
          if (off === 0 && i % 10 === 0) res.trace.push([+x.toFixed(1), +z.toFixed(1), +y.toFixed(2), Number.isFinite(hr) ? +hr.toFixed(1) : 'sky']);
        }
      }
    }
    return res;
  }, [[[C.x, 0, C.z], leg1a, leg1b, leg2b, roomC]]);
  console.log('  L walk trace:', JSON.stringify(walkLine.trace));
  console.log(`  ${walkLine.samples} samples: ${walkLine.outside} outside, worst step ${walkLine.worst.toFixed(3)}, ${walkLine.open} open to sky, ${walkLine.low} under 5 headroom`);
  check(walkLine.outside === 0, `chamber -> L tunnel -> room is walkable ground, off-centre too (${walkLine.outside} gaps)`);
  check(walkLine.worst < 1.0, `no step to fall down on it (worst ${walkLine.worst.toFixed(3)})`);
  check(walkLine.open === 0, 'all of it is roofed (a free dig never breaks the meadow)');

  /* The 3D queries: isOpen above the floor, earth below it; floorAt with a
     height hint agrees with the 2D ground. */
  const q = await page.evaluate(([p]) => {
    const W = window.__world6;
    const g = W.groundY(p[0], p[2]);
    return {
      ground: g, floorNear: W.floorAt(p[0], p[2], g + 3),
      openAbove: W.isOpen(p[0], g + 2, p[2]), earthBelow: W.isOpen(p[0], g - 1.5, p[2]),
      lawn: window.__coverAt ? window.__coverAt(p[0], p[2]).lawn : null,
      ceil: (W.volumeSpan(p[0], p[2]) || {}).ceil,
    };
  }, [roomC]);
  console.log('  queries at the room centre:', JSON.stringify(q));
  check(q.openAbove && !q.earthBelow, 'isOpen(): air above the floor, earth under it');
  check(Math.abs(q.floorNear - q.ground) < 0.05, 'floorAt(x, z, nearY) agrees with groundY()');
  if (q.lawn !== null) check(q.lawn - q.ceil > 2.4, `the free room keeps its cover of earth under the meadow (${(q.lawn - q.ceil).toFixed(1)} over its roof)`);

  /* Plans: a ghost brush is stored, counted, not dug. */
  const ghost = await page.evaluate(([c]) => {
    const W = window.__world6;
    const p = W.planCells({ center: c, radius: 6, floor: true });
    return { p, list: W.plannedCells().length, dug: W.isOpen(c[0], c[1], c[2]), planned: W.isPlanned(c[0], c[1], c[2]) };
  }, [[leg1b[0] + qx * 13 - px * 14, Y, leg1b[2] + qz * 13 - pz * 14]]);
  console.log('  plan:', JSON.stringify(ghost));
  check(ghost.p.cells > 0 && ghost.list === 1 && !ghost.dug && ghost.planned, 'planCells() stores a ghost volume without digging it');

  /* ---- 3. screenshots of the free dig (loop stopped, free camera) --------- */
  console.log('\n=== looking at it ===');
  await loopOff();
  await page.evaluate(() => window.__world6.populateNest(3));
  const eyeIn = (p, dx, dz, h = 6) => [p[0] + dx, p[1] - 5.2 + h, p[2] + dz];
  // the doorway where the L leaves the chamber, from inside the chamber, close
  await view([C.x - px * 4, fy + 5.5, C.z - pz * 4], [leg1a[0] + px * 6, fy + 5, leg1a[2] + pz * 6]);
  await page.waitForTimeout(300);
  await shot('01-doorway-chamber-to-L-closeup');
  await view(eyeIn(leg1a, px * 6, pz * 6), [leg1b[0], Y - 1.2, leg1b[2]]);
  await page.waitForTimeout(300);
  await shot('02-down-the-L-tunnel');
  await view(eyeIn(leg1b, -px * 3 - qx * 3, -pz * 3 - qz * 3), [roomC[0], Y - 1.2, roomC[2]]);
  await page.waitForTimeout(300);
  await shot('03-round-the-corner-into-the-room');
  await view(eyeIn(roomC, -qx * 6 + px * 3, -qz * 6 + pz * 3, 7), [roomC[0] + qx * 8 - px * 6, Y - 2.2, roomC[2] + qz * 8 - pz * 6]);
  await page.waitForTimeout(300);
  await shot('04-the-irregular-room');
  // the entrance trench from above and from its lip: the ragged edges
  const dp = await page.evaluate(() => window.__world6.descentPath());
  const mid = dp[Math.floor(dp.length * 0.45)];
  const sx = -hz, sz = hx;   // across the cut
  await view([mid.x + sx * 34 - hx * 18, N.mouth.y + 34, mid.z + sz * 34 - hz * 18], [mid.x, mid.y, mid.z]);
  await page.waitForTimeout(300);
  await shot('05-entrance-trench-edges');
  await view([N.mouth.x - hx * 16, N.mouth.y + 7, N.mouth.z - hz * 16], [C.x, fy + 6, C.z]);
  await page.waitForTimeout(300);
  await shot('06-down-the-trench-to-the-chamber-doorway');

  /* ---- 4. the queen walks in, through the real pipeline ------------------ */
  console.log('\n=== the queen walks into the new cavity ===');
  await page.evaluate(([x, z]) => {
    const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z); a.yaw = 0;
  }, [C.x, C.z]);
  await loopOn();
  await page.waitForTimeout(600);
  const held = new Set();
  const setKeys = async (next) => {
    for (const k of held) if (!next.has(k)) { await page.keyboard.up(k); held.delete(k); }
    for (const k of next) if (!held.has(k)) { await page.keyboard.down(k); held.add(k); }
  };
  const angDiff = (a, b) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };
  const floorLog = [];
  const readAnt = () => page.evaluate(() => {
    const a = window.__ant;
    const W = window.__world6;
    const fp = W.nestFootprint();
    return { x: a.x, y: a.y, z: a.z, yaw: a.yaw, ground: window.__groundY(a.x, a.z), inside: fp.contains(a.x, a.z), span: W.volumeSpan(a.x, a.z) };
  });
  async function walkTo(t, label, timeoutMs = 40000) {
    const start = Date.now();
    let last = await readAnt(), lastT = Date.now(), unstick = 0;
    while (Date.now() - start < timeoutMs) {
      const a = await readAnt();
      floorLog.push(a);
      const dx = t[0] - a.x, dz = t[2] - a.z, d = Math.hypot(dx, dz);
      if (d < 4) { await setKeys(new Set()); console.log(`  [${label}] arrived at (${a.x.toFixed(1)}, ${a.y.toFixed(2)}, ${a.z.toFixed(1)})`); return true; }
      const diff = angDiff(a.yaw, Math.atan2(dx, dz) + (unstick % 2 ? 0.7 : unstick ? -0.7 : 0));
      const keys = new Set();
      if (diff > 0.08) keys.add('KeyA'); else if (diff < -0.08) keys.add('KeyD');
      if (Math.abs(diff) < 0.9) keys.add('KeyW');
      await setKeys(keys);
      await page.waitForTimeout(80);
      if (Math.hypot(a.x - last.x, a.z - last.z) > 0.3) { last = a; lastT = Date.now(); }
      else if (Date.now() - lastT > 2500) { unstick++; lastT = Date.now(); if (unstick > 8) break; }
    }
    await setKeys(new Set());
    const a = await readAnt();
    console.log(`  [${label}] STOPPED at (${a.x.toFixed(1)}, ${a.z.toFixed(1)})`);
    return false;
  }
  const w1 = await walkTo(leg1a, 'chamber -> tunnel mouth');
  const w2 = await walkTo(leg1b, 'down leg 1');
  const w3 = await walkTo(leg2b, 'round the corner, down leg 2');
  const w4 = await walkTo(roomC, 'into the room');
  check(w1 && w2 && w3 && w4, 'the queen walked from the chamber into the free-dug room on the keyboard');
  const offFloor = floorLog.filter((a) => a.span && Math.abs(a.y - a.ground) > 0.35);
  const fell = floorLog.filter((a) => a.span && a.y < a.span.floor - 0.35);
  const outside = floorLog.filter((a) => !a.inside);
  console.log(`  ${floorLog.length} samples of her walk: ${offFloor.length} off the ground, ${fell.length} under the volume's floor, ${outside.length} outside the footprint`);
  check(fell.length === 0, 'she never sinks under the volume floor');
  check(offFloor.length === 0, 'she stays on the floor the whole way');
  check(outside.length === 0, 'she never leaves the footprint (walls hold)');
  await page.waitForTimeout(700);
  await shot('07-queen-in-the-free-room');

  /* ---- 5. digging while the game runs: frame rate ------------------------- */
  console.log('\n=== frame rate while digging ===');
  const fpsIdle = await page.evaluate(() => new Promise((res) => {
    const ts = []; let n = 0;
    const tick = (t) => { ts.push(t); if (++n < 120) requestAnimationFrame(tick); else res(ts); };
    requestAnimationFrame(tick);
  }).then((ts) => ({ fps: 1000 * (ts.length - 1) / (ts[ts.length - 1] - ts[0]) })));
  /* One hand-dig brush every other frame for 240 frames (30 a second, several
     times what a fouisseuse will dig), walking a crooked gallery
     off the room (the #83 case: a fouisseuse digging by hand), and the hall
     face being paid at the same time (the progressive dig). */
  const digRun = await page.evaluate(([rc, dirx, dirz, ffy, faceId, needed]) => new Promise((res) => {
    const W = window.__world6;
    const ts = [], digMs = [];
    let i = 0, opened = 0;
    const tick = (t) => {
      ts.push(t);
      const a = performance.now();
      const s = i * 0.3;
      const x = rc[0] + dirx * (12 + s) + Math.sin(s * 0.3) * 3 * -dirz;
      const z = rc[2] + dirz * (12 + s) + Math.sin(s * 0.3) * 3 * dirx;
      if (i % 2 === 0) opened += W.openCells({ center: [x, ffy + 4.6, z], radius: 4.4, floor: ffy });
      window.__payDig(faceId, needed / 240 * 1.001);
      digMs.push(performance.now() - a);
      if (++i < 240) requestAnimationFrame(tick);
      else {
        const dts = ts.slice(1).map((v, k) => v - ts[k]).sort((p, q) => p - q);
        res({
          fps: 1000 * (ts.length - 1) / (ts[ts.length - 1] - ts[0]),
          p95: dts[Math.floor(dts.length * 0.95)], worst: dts[dts.length - 1],
          digAvg: digMs.reduce((p, q) => p + q, 0) / digMs.length, digWorst: Math.max(...digMs),
          opened, stats: W.nestMeshStats(), rooms: W.dugRooms().map((r) => r.id),
        });
      }
    };
    requestAnimationFrame(tick);
  }), [roomC, -px, -pz, fB, f.id, f.needed]);
  console.log(`  idle ${fpsIdle.fps.toFixed(1)} fps; digging ${digRun.fps.toFixed(1)} fps, p95 frame ${digRun.p95.toFixed(1)} ms, worst ${digRun.worst.toFixed(1)} ms`);
  console.log(`  dig calls avg ${digRun.digAvg.toFixed(2)} ms, worst ${digRun.digWorst.toFixed(1)} ms; ${digRun.opened} cells opened; rooms ${JSON.stringify(digRun.rooms)}`);
  console.log('  mesher', JSON.stringify(digRun.stats));
  check(digRun.fps >= 50, `>= 50 fps while cells are opened every frame (${digRun.fps.toFixed(1)})`);
  check(digRun.rooms.includes('hall'), 'the hall face, paid over 240 frames, opened the hall');
  await page.waitForTimeout(1500);

  // the hall, dug progressively, from its doorway
  await loopOff();
  const hall = await page.evaluate(() => window.__world6.dugRooms().find((r) => r.id === 'hall'));
  if (hall) {
    const ux = (hall.x - C.x) / Math.hypot(hall.x - C.x, hall.z - C.z), uz = (hall.z - C.z) / Math.hypot(hall.x - C.x, hall.z - C.z);
    await view([C.x + ux * 4, fy + 6, C.z + uz * 4], [hall.x, hall.floorY + 4, hall.z]);
    await page.waitForTimeout(300);
    await shot('08-chamber-to-hall-doorway');
    await view([hall.x - ux * hall.r * 0.6, hall.floorY + 7, hall.z - uz * hall.r * 0.6], [hall.x + ux * hall.r, hall.floorY + 3, hall.z + uz * hall.r]);
    await page.waitForTimeout(300);
    await shot('09-the-hall');
  }
  await view([roomC[0] - px * 18, fB + 7, roomC[2] - pz * 18], [roomC[0] - px * 40, fB + 3, roomC[2] - pz * 40]);
  await page.waitForTimeout(300);
  await shot('10-hand-dug-gallery');

  /* ---- 6. the macro view renders the volume as a scale model -------------- */
  console.log('\n=== macro view ===');
  await loopOn();
  await page.waitForTimeout(300);
  await page.keyboard.press('KeyM');
  await page.waitForTimeout(1500);
  const macro = await page.evaluate(() => {
    const n = window.__world6.getFoundedNest();
    let cav = 0, model = 0;
    n.group.traverse((o) => {
      if (!o.isMesh || o.userData.macroGhost || !/^nest-volume-/.test(o.name)) return;
      cav++; if (o.material.type === 'ShaderMaterial') model++;
    });
    return { mode: window.__macro.mode, cav, model };
  });
  console.log('  macro:', JSON.stringify(macro));
  check(macro.mode === 'macro' && macro.cav > 0 && macro.model === macro.cav, `every volume chunk is on the model material (${macro.model}/${macro.cav})`);
  await shot('11-macro-model');
  await page.mouse.move(640, 400);
  await page.mouse.down(); await page.mouse.move(820, 330, { steps: 12 }); await page.mouse.up();
  await page.waitForTimeout(500);
  await shot('12-macro-model-turned');
  await page.keyboard.press('KeyM');
  await page.waitForTimeout(1200);

  console.log('\n=== console ===');
  console.log(' ', errors.length ? errors.slice(0, 6) : 'none');
  check(errors.length === 0, `no console errors (${errors.length})`);

  const report = { founding: founded.stats, dig: dig.out, fps: { idle: fpsIdle.fps, digging: digRun.fps, p95: digRun.p95, worst: digRun.worst } };
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
  console.log(failures.length ? `\n${failures.length} FAILURE(S):` : '\nALL CHECKS PASSED');
  for (const m of failures) console.log('  - ' + m);
  console.log('shots in', outDir);
  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); if (server) server.kill(); process.exit(1); });
