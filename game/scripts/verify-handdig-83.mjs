// Verification for #83 - dig by hand.
//   - A controlled digger holding E (a REAL key) facing a wall opens cells; the
//     aim ring is up on the wall (screenshot); she walks into the pocket after.
//   - Free digging: no plan, pace ~ x3 an AI digger (in ant-seconds per second).
//   - Inside a chantier: the same bites advance the plan (plans.creditCells).
//   - A worker holding E does not dig; the pathing cache sees the new volume.
// The loop is stopped and stepped through __playerUpdate (deterministic), keys
// are real. Chromium needs ANGLE/D3D11; run alone. Usage: node scripts/verify-handdig-83.mjs [outDir]
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_handdig83');
fs.mkdirSync(outDir, { recursive: true });
const PORT = 4283;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };

function waitForServer(url, ms) {
  const t0 = Date.now();
  return new Promise((res, rej) => {
    const tick = async () => {
      try { const r = await fetch(url); if (r.ok) return res(); } catch { /* */ }
      if (Date.now() - t0 > ms) return rej(new Error('preview server did not come up'));
      setTimeout(tick, 300);
    };
    tick();
  });
}
const failures = [];
const check = (c, m) => { if (!c) { failures.push(m); console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: gameDir, shell: true, stdio: 'pipe' });
  let log = '';
  server.stdout.on('data', (d) => { log += d; }); server.stderr.on('data', (d) => { log += d; });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(log); throw e; }
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  try {
    await page.goto(URL);
    await page.waitForFunction(() => window.__control && window.__colony && window.__world6 && window.__plans && window.__handDig && window.__playerUpdate, null, { timeout: 20000 });
    await page.waitForTimeout(800);
    const shot = async (n) => { await page.evaluate(() => window.__frame()); await page.screenshot({ path: path.join(outDir, n + '.png') }); console.log('  shot:', n + '.png'); };
    const step = (sec, dt = 0.05) => page.evaluate(([s, d]) => { let t = 0; while (t < s - 1e-9) { window.__playerUpdate(d, t); t += d; } }, [sec, dt]);

    console.log('\n=== setup: nest, hall dug, a digger taken ===');
    await page.evaluate((s) => {
      const W = window.__world6; W.foundNest(s.x, s.z);
      const f = window.__faces()[0]; window.__payDig(f.id, f.needed + 1);
      W.populateNest(3); W.flushNestMesh();
    }, SITE);
    await page.waitForTimeout(500);
    await page.evaluate(() => { for (const n of window.__nodes) n.amount = 0; });
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
    await page.evaluate(() => { const c = window.__colony(); c.state.workers = []; });
    const room = await page.evaluate(() => window.__rooms2().find((q) => q.id === 'chamber'));
    // a digger, taken, standing in the chamber; then find a wall a bite is allowed into
    // (not under the open trench: #91's clearance rule), by asking the brush itself
    const dId = await page.evaluate((ch) => window.__colony().spawnAt(ch.x, ch.z, 'digger').id, room);
    await page.evaluate((id) => window.__control.take(id), dId);
    await step(0.3);
    const findWall = (skipAngles) => page.evaluate(([ch, skip]) => {
      const W = window.__world6, a0 = window.__ant;
      const fy = W.floorAt(ch.x, ch.z);
      const wall = (aa) => { const ex = Math.sin(aa), ez = Math.cos(aa); let u = 0; while (u < 40 && W.isOpen(ch.x + ex * u, fy + 1.25, ch.z + ez * u)) u += 0.25; return u; };
      let best = null;
      for (let k = 0; k < 48; k++) {
        const a = k / 48 * Math.PI * 2;
        if (skip.some((s) => Math.abs(Math.atan2(Math.sin(a - s), Math.cos(a - s))) < 0.9)) continue;
        const t = wall(a);
        if (t < 8 || t > 30 || Math.abs(wall(a + 0.25) - t) > 2 || Math.abs(wall(a - 0.25) - t) > 2) continue;
        const px = ch.x + Math.sin(a) * (t - 5), pz = ch.z + Math.cos(a) * (t - 5), py = W.floorAt(px, pz, fy);
        a0.x = px; a0.z = pz; a0.y = py; a0.yaw = a;
        const pr = window.__handDigProbe();
        if (pr && pr.ok && (!best || t > best.t)) best = { a, t, px, pz, fy: py, wx: ch.x + Math.sin(a) * t, wz: ch.z + Math.cos(a) * t, dx: Math.sin(a), dz: Math.cos(a) };
      }
      return best;
    }, [room, skipAngles]);
    const spot = await findWall([]);
    check(!!spot, 'a wall where a bite is allowed exists in the chamber');
    console.log('  wall at', spot.t.toFixed(1), 'from the chamber middle, angle', spot.a.toFixed(2));
    const place = (p = spot) => page.evaluate((s) => { const a = window.__ant; a.x = s.px; a.z = s.pz; a.y = s.fy; a.yaw = s.a; a.speed = 0; window.__setCamYaw(s.a); }, p);
    await place();
    await step(1.2);
    check((await page.evaluate(() => window.__control.current())).profileId === 'digger', 'a digger is controlled');
    // hold E and walk on into what she opens: one bite reaches ~3 u, then she steps up to the new wall
    const digFor = async (sec) => {
      await page.keyboard.down('KeyE');
      for (let t = 0; t < sec - 1e-9; t += 0.7) {
        await step(0.4);
        await page.keyboard.down('KeyW'); await step(0.3); await page.keyboard.up('KeyW');
      }
      await page.keyboard.up('KeyE');
    };
    const prompt = () => page.evaluate(() => (document.getElementById('prompt') || document.querySelector('[id*=prompt]') || {}).textContent || '');
    const hd = () => page.evaluate(() => ({ ...window.__handDig }));

    console.log('\n=== aim ring and hint, E not yet held ===');
    const s0 = await hd();
    check(s0.aim === true && !s0.active, 'facing earth within reach: the aim ring is up (no digging yet)');
    console.log('  prompt:', JSON.stringify(await prompt()));
    check(/creuser/.test(await prompt()), 'HUD hint: "E maintenu — creuser"');
    await shot('01-aim-ring');

    console.log('\n=== free dig: hold E for 6 s, outside any plan ===');
    check(await page.evaluate((s) => !window.__world6.isOpen(s.wx + s.dx * 3, s.fy + 1.25, s.wz + s.dz * 3), spot), 'before: the earth 3 u past the wall is solid');
    const v0 = await page.evaluate(() => window.__world6.volumeVersion());
    await page.keyboard.down('KeyE');
    await step(1.5); await shot('02-digging');
    await page.keyboard.up('KeyE');
    await digFor(6);
    const s1 = await hd();
    const rate = s1.cells / s1.seconds;
    const aiRate = 1 / 0.06;
    console.log(`  active ${s1.seconds.toFixed(1)} s, bites ${s1.bites}, cells ${s1.cells}, free ${s1.freeCells}, plan ${s1.planCells}; ${rate.toFixed(1)} cells/s vs AI ${aiRate.toFixed(1)}`);
    check(s1.cells > 40, `cells opened grew (${s1.cells})`);
    check(s1.planCells === 0 && s1.freeCells === s1.cells, 'free digging: nothing credited to any plan');
    check(await page.evaluate(() => window.__world6.volumeVersion()) > v0, 'the volume version moved (AI pathing caches key on it and rebuild)');
    check(rate / aiRate > 2.2 && rate / aiRate < 3.6, `hand rate ~x3 an AI digger (x${(rate / aiRate).toFixed(2)})`);
    check(await page.evaluate((s) => window.__world6.isOpen(s.wx + s.dx * 2, s.fy + 1.25, s.wz + s.dz * 2), spot), 'after: the earth past the wall is open');
    await page.evaluate(() => window.__world6.flushNestMesh());

    console.log('  floors along the heading (ai floor / open at head):', await page.evaluate((s) => {
      const out = [];
      for (let u = 0; u <= 22; u += 1) { const x = s.px + s.dx * u, z = s.pz + s.dz * u; const f = window.__aiFloorAt(x, z, s.fy); out.push(u + ':' + (f === null ? 'x' : f.toFixed(1)) + (window.__world6.isOpen(x, s.fy + 1.25, z) ? 'o' : '#')); }
      return out.join(' ');
    }, spot));
    console.log('\n=== she walks into the pocket at once ===');
    await place(); await step(0.3);
    await page.keyboard.down('KeyW');
    await step(2.4);
    await page.keyboard.up('KeyW');
    const p1 = await page.evaluate(() => ({ x: window.__ant.x, z: window.__ant.z }));
    const along = (p1.x - spot.px) * spot.dx + (p1.z - spot.pz) * spot.dz;
    console.log(`  advanced ${along.toFixed(1)} u along her heading (the wall was 5 u away)`);
    check(along > 6.5, 'she walked past where the wall was, into the pocket');
    await shot('03-in-pocket');

    console.log('\n=== a worker holding E does not dig ===');
    const wId = await page.evaluate(([x, z]) => window.__colony().spawnAt(x, z, 'worker').id, [spot.px, spot.pz]);
    await page.evaluate((id) => window.__control.take(id), wId);
    const cells0 = (await hd()).cells;
    await place();
    await step(0.5);
    await page.keyboard.down('KeyE'); await step(2); await page.keyboard.up('KeyE');
    check((await hd()).cells === cells0 && !(await hd()).active, 'worker: E held, no cells opened, no digging state');
    check(!(await hd()).aim, 'worker: no aim ring');

    console.log('\n=== inside a chantier: the bites advance the plan ===');
    const w2 = await findWall([spot.a]);
    const plan = w2 && await page.evaluate(([w, id]) => {
      const sa = w.dx, ca = w.dz, t = w.t, fy = w.fy, c0 = [w.wx - sa * t, w.wz - ca * t];
      let r = null;
      for (const [dy, rad, len] of [[1.0, 2.3, 16], [0.6, 2.1, 16], [0.6, 2.1, 10], [0.2, 1.9, 10], [0.2, 1.9, 7]]) {
        const brush = { center: [c0[0] + sa * (t - 1), fy + dy, c0[1] + ca * (t - 1)], end: [c0[0] + sa * (t + len), fy + dy, c0[1] + ca * (t + len)], radius: rad, floor: fy - 0.05 };
        r = window.__plans.commit(brush, 'tunnel');
        if (r.ok) break;
      }
      return r.ok ? { a: w.a, t, fy, id: r.plan.id, n: r.plan.n0, px: w.px, pz: w.pz } : { reason: r.reason };
    }, [w2, 0]);
    if (plan && plan.reason) console.log('  plan refused:', plan.reason);
    check(!!plan && !plan.reason, 'a chantier tunnel was planned into a fresh wall' + (plan ? ` (${plan.n} cells)` : ''));
    if (plan && !plan.reason) {
      await page.evaluate((id) => window.__control.take(id), dId);
      await place(plan);
      await step(1);
      const prog = () => page.evaluate((id) => { const p = window.__plans.get(id); return p ? { worked: p.worked, needed: p.needed } : { done: true }; }, plan.id);
      const w0 = await prog(); const h0 = await hd();
      await digFor(5);
      const w1 = await prog(); const h1 = await hd();
      const secs = h1.seconds - h0.seconds;
      const gained = (w1.done ? w0.needed : w1.worked) - w0.worked;
      console.log(`  plan worked +${gained.toFixed(2)} ant-s in ${secs.toFixed(1)} s of digging (${h1.planCells - h0.planCells} cells credited)`);
      check(h1.planCells - h0.planCells > 10, `bites inside the chantier were credited (${h1.planCells - h0.planCells} cells)`);
      check(gained > 1.5, `the plan advanced (+${gained.toFixed(2)} ant-seconds)`);
      const credited = h1.planCells - h0.planCells;
      check(Math.abs(gained - credited * 0.06) < 0.25, `the credit is the AI's own accounting: ${credited} cells x 0.06 s = ${(credited * 0.06).toFixed(2)} ant-s (got ${gained.toFixed(2)}) - at ${(1 / 0.06).toFixed(1)} cells/s per ant-second, x3 is the free-dig rate above`);
      check(w1.done === true || w1.worked > w0.worked, 'the chantier is ' + (w1.done ? 'finished by hand' : 'part-way'));
      await page.evaluate(() => window.__world6.flushNestMesh());
      await shot('04-plan-dig');
    }
    check(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  } finally {
    await browser.close();
    server.kill();
  }
  console.log(failures.length ? `\n${failures.length} FAILURE(S)` : '\nall checks passed');
  process.exit(failures.length ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(2); });
