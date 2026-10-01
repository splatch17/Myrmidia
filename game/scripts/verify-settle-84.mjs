// Verification for #84 — the queen settles (#77 playable).
//
// What has to be true:
//   - The reserve gauge is on screen and drains: faster when she runs or when a
//     digger is at a face than when she rests; at 0 the queen's HP falls.
//   - Settling (key I, real press) is REFUSED on the lawn and in the founding
//     chamber (too shallow), ASKS for confirmation in the hall (Escape backs
//     out), and once confirmed: she cannot move (W held), the drain stops,
//     bonuses are stored and shown (toast + queen panel), the objective chain
//     reaches the hall step and then the settle step.
//   - With a worker present, control jumps to the FIRST worker (control-change
//     event, reason 'settle'); without one she stays, with the hint.
//   - The queen's panel lays at a distance (button), at the settled lay rate.
//   - HP 0 -> end screen with the summary, and Recommencer reloads a fresh game.
//
// The nest is founded through harness hooks (as verify-crew-76 does), keys and
// buttons are real. Chromium needs ANGLE/D3D11; run it alone.
//
// Usage: node scripts/verify-settle-84.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_settle84');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4284;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try { const r = await fetch(url); if (r.ok) return resolve(); } catch { /* not up */ }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not come up'));
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

  const shot = async (n) => { await page.evaluate(() => window.__frame()); await page.screenshot({ path: path.join(outDir, n + '.png') }); console.log('  shot:', n + '.png'); };
  const step = (sec, dt = 0.05) => page.evaluate(([s, d]) => { let t = 0; while (t < s - 1e-9) { window.__playerUpdate(d, t); t += d; } }, [sec, dt]);
  const st = () => page.evaluate(() => {
    const s = window.__colony().state;
    return { res: s.queenReserve.cur, hp: s.queenHp.cur, settled: s.settled && { ...s.settled }, dead: s.dead, age: s.age, laid: s.laid };
  });
  const text = (id) => page.evaluate((i) => { const e = document.getElementById(i); return e ? e.textContent.replace(/\s+/g, ' ').trim() : ''; }, id);
  const visible = (id) => page.evaluate((i) => { const e = document.getElementById(i); return !!e && getComputedStyle(e).display !== 'none'; }, id);
  const qpos = () => page.evaluate(() => { const a = window.__settle.queenAnt(); return { x: a.x, z: a.z, y: a.y }; });
  const boot = async () => {
    await page.goto(URL);
    await page.waitForFunction(() => window.__control && window.__colony && window.__world6 && window.__settle && window.__playerUpdate && window.__frame, null, { timeout: 20000 });
    await page.waitForTimeout(600);
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
    await page.evaluate(() => { for (const n of window.__nodes) n.amount = 0; });
  };
  const toRoom = (id) => page.evaluate((rid) => {
    const r = window.__rooms2().find((q) => q.id === rid);
    const a = window.__settle.queenAnt();
    a.x = r.x; a.z = r.z; a.y = window.__world6.floorAt(r.x, r.z); a.speed = 0;
    return { x: r.x, z: r.z };
  }, id);
  const foundAndDigHall = async () => {
    await page.evaluate((s) => {
      const W = window.__world6; W.foundNest(s.x, s.z);
      const f = window.__faces()[0]; window.__payDig(f.id, f.needed + 1);
      W.populateNest(3); W.flushNestMesh();
    }, SITE);
    await page.waitForTimeout(400);
    await page.evaluate(() => { window.__colony().state.workers = []; });
  };

  try {
    // ================= part A: the clock, the refusals, settle with no worker =================
    console.log('\n=== reserve gauge and drain ===');
    await boot();
    let s0 = await st();
    check(s0.res > 95 && s0.hp === 100 && !s0.settled, `a fresh run: reserve ~100 (${s0.res.toFixed(1)}), HP 100, not settled`);
    const hudRes = await text('queenhud');
    console.log('  queen HUD:', hudRes);
    check(/RÉSERVES/.test(hudRes) && /100 \/ 100/.test(hudRes), 'the HUD shows the reserve gauge next to her HP');
    await step(10);
    let s1 = await st();
    const rest = (s0.res - s1.res) / 10;
    console.log(`  resting: ${rest.toFixed(3)} /s`);
    check(rest > 0.05, 'standing still, the reserve drains');
    await page.keyboard.down('KeyW'); await page.keyboard.down('ShiftLeft');
    await step(2);                         // let the sprint speed settle
    s0 = await st();
    await step(5);
    s1 = await st();
    await page.keyboard.up('KeyW'); await page.keyboard.up('ShiftLeft');
    const run = (s0.res - s1.res) / 5;
    console.log(`  running: ${run.toFixed(3)} /s`);
    check(run > rest * 2.5, `running drains faster than resting (x${(run / rest).toFixed(1)})`);
    await step(2);

    console.log('\n=== settle refused on the lawn ===');
    await page.keyboard.press('KeyI');
    await step(0.2);
    check(!(await st()).settled && !(await visible('settleconfirm')), 'I on the lawn: nothing settles, no confirmation');
    const ev = await text('event');
    console.log('  event:', JSON.stringify(ev));
    check(/fonder|nid/i.test(ev), 'the HUD says why (found the colony first / be in the nest)');

    console.log('\n=== digging drains faster; HP falls at zero ===');
    await foundAndDigHall();
    await page.evaluate(() => { const s = window.__colony().state; s.queenReserve.cur = 100; });
    await toRoom('chamber');
    await step(10);
    s0 = await st();
    await step(1);
    s1 = await st();
    const restNest = s0.res - s1.res;
    // a digger at the hall's front: state.digging > 0
    const dug = await page.evaluate(() => {
      const f = window.__faces()[0];
      if (!f) return null;
      const w = window.__colony().spawnAt(f.x + f.nx * 5, f.z + f.nz * 5, 'digger');
      return { id: w.id, face: f.id };
    });
    if (dug) {
      await step(3);
      s0 = await st();
      const digging = await page.evaluate(() => window.__colony().state.digging);
      await step(4);
      s1 = await st();
      const dRate = (s0.res - s1.res) / 4;
      console.log(`  digging crew=${digging}: ${dRate.toFixed(3)} /s vs resting ${restNest.toFixed(3)} /s`);
      check(digging > 0 && dRate > restNest * 2.5, `with a digger at a face the reserve drains faster (x${(dRate / Math.max(1e-6, restNest)).toFixed(1)})`);
    } else {
      console.log('  (no open face after the hall: digging case skipped)');
    }
    await page.evaluate(() => { window.__colony().state.workers = []; });
    await page.evaluate(() => { const s = window.__colony().state; s.queenReserve.cur = 0; s.queenHp.cur = 100; });
    await step(10);
    s1 = await st();
    console.log(`  reserve ${s1.res.toFixed(1)}, HP ${s1.hp.toFixed(1)} after 10 s at zero`);
    check(s1.res === 0 && s1.hp < 99 && s1.hp > 80, 'at zero reserve the queen loses HP over time');
    const obj0 = await text('objective');
    console.log('  objective:', obj0);
    check(/épuisées|RÉSERVES/i.test(obj0), 'the objective line says the reserves are gone');
    await page.evaluate(() => { const s = window.__colony().state; s.queenReserve.cur = 20; s.queenHp.cur = 100; });
    await step(0.2);
    const obj1 = await text('objective');
    check(/Réserves basses/.test(obj1), `low reserve warns in the objective ("${obj1.slice(0, 40)}...")`);
    check(await page.evaluate(() => document.querySelector('.mm-qres-bar').classList.contains('mm-low')), 'the gauge pulses (mm-low) when low');
    await shot('01-low-reserve');
    await page.evaluate(() => { const s = window.__colony().state; s.queenReserve.cur = 100; });

    console.log('\n=== too shallow: the founding chamber ===');
    await toRoom('chamber');
    await step(0.3);
    const depthCh = await page.evaluate(() => window.__settle.depth());
    await page.keyboard.press('KeyI');
    await step(0.2);
    console.log(`  chamber depth ${depthCh.toFixed(1)} u, event: ${JSON.stringify(await text('event'))}`);
    check(!(await st()).settled && !(await visible('settleconfirm')), 'I in the chamber (too shallow): refused, no confirmation');
    check(/Trop près/.test(await text('event')), 'the HUD names the depth that is missing');

    console.log('\n=== objective chain: the hall, then settling ===');
    await step(0.3);
    const obj2 = await text('objective');
    console.log('  objective (hall dug, in the chamber):', obj2);
    check(/descendre/i.test(obj2) && /installer/i.test(obj2), 'once the hall is dug the objective is to go deep enough to settle');

    console.log('\n=== settle in the hall: confirmation, then permanent ===');
    await toRoom('hall');
    await step(0.3);
    const depthHall = await page.evaluate(() => window.__settle.depth());
    console.log(`  hall depth ${depthHall.toFixed(1)} u, objective: ${await text('objective')}`);
    check(/touche I/.test(await text('objective')), 'in the hall the objective says: settle here (I)');
    await page.keyboard.press('KeyI');
    await step(0.2);
    check(await visible('settleconfirm') && !(await st()).settled, 'I in the hall: a confirmation appears, nothing is settled yet');
    console.log('  confirmation:', await text('settleconfirm'));
    await shot('02-confirm');
    await page.keyboard.press('Escape');
    await step(0.2);
    check(!(await visible('settleconfirm')) && !(await st()).settled, 'Escape backs out');
    // the "no" button too
    await page.keyboard.press('KeyI'); await step(0.2);
    await page.click('#settleconfirm [data-act="no"]'); await step(0.2);
    check(!(await visible('settleconfirm')) && !(await st()).settled, '"Pas encore" backs out');

    const before = await st();
    await page.keyboard.press('KeyI'); await step(0.2);
    await page.keyboard.press('KeyI'); await step(0.3);   // the second I confirms
    const after = await st();
    console.log('  settled:', JSON.stringify(after.settled));
    check(!!after.settled && !(await visible('settleconfirm')), 'confirmed: the queen is settled');
    const b = after.settled;
    check(b && Math.abs(b.depth - depthHall) < 1 && b.layBonus > 0.05 && b.defense > 1.1, `bonuses stored (depth ${b && b.depth.toFixed(1)}, ponte +${b && Math.round(b.layBonus * 100)} %, défense x${b && b.defense.toFixed(2)})`);
    const toast = await text('settletoast');
    console.log('  toast:', toast);
    check(/Installée à \d+ u de profondeur : ponte \+\d+ %, défense \+\d+ %/.test(toast), 'the summary toast shows depth, ponte and défense');
    const menu = await text('queenmenu');
    check(/INSTALLATION/.test(menu) && /défense/.test(menu) && /Pondre/.test(menu), 'the queen panel shows the installation, with a Pondre button');
    check(/pondez une ouvrière/.test(await text('controlhint')), 'no worker yet: the hint says "pondez une ouvrière — Tab pour changer de fourmi"');
    check((await page.evaluate(() => window.__control.current())).profileId === 'queen', 'with no worker, control stays on the queen');
    await shot('03-settled-no-worker');

    // immobile, and the clock is stopped
    const p0 = await qpos();
    await page.keyboard.down('KeyW'); await page.keyboard.down('ShiftLeft');
    await step(3);
    await page.keyboard.up('KeyW'); await page.keyboard.up('ShiftLeft');
    const p1 = await qpos();
    check(Math.hypot(p1.x - p0.x, p1.z - p0.z) < 0.05, `W+Shift held for 3 s: the settled queen did not move (${Math.hypot(p1.x - p0.x, p1.z - p0.z).toFixed(3)} u)`);
    const r0 = (await st()).res;
    await step(8);
    const r1 = (await st()).res;
    check(Math.abs(r1 - r0) < 1e-6, 'once settled the reserve no longer drains');
    check(/installée/.test(await text('queenhud')), 'the gauge reads "installée"');

    // lay from the panel at a distance, with a pile
    await page.evaluate(() => {
      const h = window.__harvest(); h.cache = h.cache || { x: 0, y: 0, z: 0, items: {}, total: 0 };
      h.cache.items.graine = (h.cache.items.graine || 0) + 20; h.cache.total = (h.cache.total || 0) + 20;
    });
    await step(0.2);
    const laid0 = (await st()).laid;
    const clutches0 = await page.evaluate(() => window.__laying().brood);
    await page.click('#queenmenu [data-act="lay"]');
    await step(0.2);
    const laid1 = (await st()).laid;
    check(laid1 === laid0 + 3 && (await page.evaluate(() => window.__laying().brood)) === clutches0 + 1, 'the Pondre button lays a clutch of 3 eggs while she stays immobile');
    // eggs hatch faster than at the base rate: layBonus applied
    const ratio = await page.evaluate(async () => {
      const c = window.__colony();
      c.addEggs(1, 'worker');
      const e = c.state.eggs[c.state.eggs.length - 1];
      const a0 = e.age; window.__playerUpdate(1, 0);
      return (e.age - a0) / 1;
    });
    check(Math.abs(ratio - (1 + b.layBonus)) < 0.02, `eggs age ${ratio.toFixed(2)}x (1 + ponte bonus ${b.layBonus.toFixed(2)})`);

    // ================= part B: a worker exists -> control jumps to her =================
    console.log('\n=== settle with workers: control jumps to the first one ===');
    await boot();
    await foundAndDigHall();
    await page.evaluate(() => {
      window.__cc = [];
      window.addEventListener('control-change', (e) => window.__cc.push({ from: e.detail.from.id, to: e.detail.to.id, reason: e.detail.reason }));
    });
    const room = await toRoom('hall');
    const ids = await page.evaluate((r) => {
      const c = window.__colony();
      return [c.spawnAt(r.x + 6, r.z, 'worker').id, c.spawnAt(r.x - 6, r.z, 'worker').id];
    }, room);
    await step(0.3);
    check((await page.evaluate(() => window.__control.current())).profileId === 'queen', 'before: the queen is played');
    await page.click('#queenmenu [data-act="settle"]');           // the panel's own button
    await step(0.2);
    check(await visible('settleconfirm'), 'the panel button asks for confirmation too');
    await page.click('#settleconfirm [data-act="yes"]');
    await step(0.5);
    const cur = await page.evaluate(() => window.__control.current());
    const cc = await page.evaluate(() => window.__cc);
    console.log('  current:', JSON.stringify(cur), 'events:', JSON.stringify(cc));
    check(cur.id === ids[0] && cur.profileId === 'worker', 'control jumped to the FIRST worker');
    check(cc.length === 1 && cc[0].reason === 'settle' && cc[0].from === 'queen', 'a control-change event fired (reason: settle)');
    check(!!(await st()).settled, 'and the queen is settled');
    check(!/pondez/.test(await text('controlhint')), 'the "pondez une ouvrière" hint is not shown when a worker exists');
    const w0 = await page.evaluate((id) => window.__control.antOf(id), ids[0]);
    await page.keyboard.down('KeyW'); await step(1.5); await page.keyboard.up('KeyW');
    const w1 = await page.evaluate((id) => window.__control.antOf(id), ids[0]);
    check(Math.hypot(w1.x - w0.x, w1.z - w0.z) > 2, 'the worker walks (WASD) while the queen stays');
    await page.keyboard.press('KeyC'); await step(0.1); await page.keyboard.press('KeyC'); await step(0.1);
    check(await visible('queenmenu'), 'the queen panel is still reachable from the worker (C)');
    await shot('04-in-worker');

    // ================= part C: death and Recommencer =================
    console.log('\n=== death: end screen and Recommencer ===');
    await boot();
    await foundAndDigHall();
    await page.evaluate(() => { const s = window.__colony().state; s.maxDepth = 18.2; s.queenReserve.cur = 0; s.queenHp.cur = 2; });
    await step(6);
    check((await st()).dead && (await visible('endscreen')), 'HP 0: the end screen is up');
    const endText = await text('endscreen');
    console.log('  end screen:', endText);
    check(/temps survécu/.test(endText) && /profondeur atteinte/.test(endText) && /salles creusées/.test(endText) && /fourmis pondues/.test(endText), 'it carries the summary (time, depth, rooms, ants laid)');
    check(/Recommencer/.test(endText), 'and a Recommencer button');
    await shot('05-end-screen');
    await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('#endscreen [data-act="restart"]')]);
    await page.waitForFunction(() => window.__settle && window.__colony, null, { timeout: 20000 });
    await page.waitForTimeout(600);
    const fresh = await st();
    check(fresh.res > 95 && fresh.hp === 100 && !fresh.dead && !fresh.settled && !(await page.evaluate(() => window.__nestOrigin())), 'Recommencer reloaded a fresh game (reserve 100, HP 100, no nest)');
    check(!(await visible('endscreen')), 'the end screen is gone');
  } finally {
    check(errors.length === 0, `no console/page errors (${errors.slice(0, 3).join(' | ')})`);
    await browser.close();
    server.kill();
  }
  console.log(failures.length ? `\n${failures.length} FAILED` : '\nALL OK');
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
