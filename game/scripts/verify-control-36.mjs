// Verification for #36 — control any ant.
//
// What has to be true:
//   - Tab (a REAL key press) moves control to a worker: the unit frame names
//     her, the hint "Tab — changer de fourmi" is up, window.__ant (a getter on
//     the controlled ant) follows her, WASD moves HER and not the queen.
//   - Exactly one ant is controlled at any time; the queen, released, runs her
//     idle brain (stays put, speed settles to 0) and C still opens the queen's
//     menu from the worker's body (`manages` is the queen's, not the player's).
//   - A controlled digger standing at her face pays the gauge x3 (colony.js
//     CONTROL_DIG_MULT), still counts as ONE for the minimum crew (#76), and
//     pays nothing at all once she is away from the face.
//   - Releasing an ant resumes her AI (she walks off by herself).
//   - Clicking an ant in the world takes it; Tab is refused while the queen is
//     in the laying sequence; the `control-change` event fires on every change.
//   - Macro (M): clicking an ant pin takes control and flies back to that ant.
//
// The nest is founded through the harness hooks (as verify-crew-76 does), the
// keys and clicks are real. Chromium needs ANGLE/D3D11; run it alone.
//
// Usage: node scripts/verify-control-36.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_control36');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4191;
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
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let log = '';
  server.stdout.on('data', (d) => { log += d.toString(); });
  server.stderr.on('data', (d) => { log += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(log); throw e; }

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });
  await page.goto(URL);
  await page.waitForFunction(
    () => window.__control && window.__colony && window.__macro && window.__faces && window.__playerUpdate && window.__world6,
    null, { timeout: 20000 });
  await page.waitForTimeout(500);
  const shot = async (n) => { await page.screenshot({ path: path.join(outDir, `${n}.png`) }); console.log('  shot:', n + '.png'); };

  const cur = () => page.evaluate(() => window.__control.current());
  const list = () => page.evaluate(() => window.__control.list());
  const antOf = (id) => page.evaluate((i) => window.__control.antOf(i), id);
  const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
  const unitText = () => page.evaluate(() => {
    const t = (id) => { const u = document.getElementById(id); return u ? u.textContent.replace(/\s+/g, ' ').trim() : ''; };
    return t('unitframe') + ' | ' + t('controlhint');
  });
  await page.evaluate(() => {
    window.__cc = [];
    window.addEventListener('control-change', (e) => window.__cc.push({ from: e.detail.from.id, to: e.detail.to.id, reason: e.detail.reason }));
  });

  // ---- setup: a founded nest and three workers around the queen ---------------
  console.log('\n=== setup ===');
  const q0 = await antOf('queen');
  await page.evaluate((s) => window.__foundNest(s.x, s.z), SITE);
  const ids = await page.evaluate(([x, z]) => {
    const c = window.__colony();
    return [c.spawnAt(x + 30, z, 'worker').id, c.spawnAt(x, z + 34, 'worker').id, c.spawnAt(x - 30, z - 6, 'worker').id];
  }, [q0.x, q0.z]);
  // pin the workers down for the moment: nothing to forage means no walking
  await page.evaluate(() => { for (const n of window.__nodes) n.amount = 0; });
  await page.waitForTimeout(300);
  let l = await list();
  check(l.length === 4 && l.filter((e) => e.controlled).length === 1 && l[0].controlled, 'four ants, exactly one controlled, and it is the queen');
  check((await cur()).profileId === 'queen', 'the game still opens on the queen');
  await shot('00-queen');

  // ---- Tab to a worker, move her -----------------------------------------------
  console.log('\n=== Tab: play a worker ===');
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  let c = await cur();
  check(c.profileId === 'worker' && c.id === ids[0], `Tab took the first worker (${c.profileId} #${c.id})`);
  l = await list();
  check(l.filter((e) => e.controlled).length === 1, 'still exactly one controlled ant');
  const ut = await unitText();
  console.log('  unit frame:', ut);
  check(/Ouvrière/i.test(ut || '') && /Tab — changer de fourmi/.test(ut || ''), 'the unit frame names her caste and shows "Tab — changer de fourmi"');
  const w0 = await antOf(c.id);
  const qIdle0 = await antOf('queen');
  await page.evaluate(() => { window.__ant.yaw = 0; });
  await page.keyboard.down('KeyW');
  await page.waitForTimeout(1200);
  await page.keyboard.up('KeyW');
  await page.waitForTimeout(300);
  const w1 = await antOf(c.id), qIdle1 = await antOf('queen');
  check(dist(w0, w1) > 6, `WASD moved the worker (${dist(w0, w1).toFixed(1)} u)`);
  check(dist(qIdle0, qIdle1) < 0.05 && qIdle1.speed < 0.5, `the queen stood still and idled (moved ${dist(qIdle0, qIdle1).toFixed(3)} u, speed ${qIdle1.speed.toFixed(2)})`);
  const aliased = await page.evaluate(() => ({ x: window.__ant.x, z: window.__ant.z }));
  check(dist(aliased, w1) < 0.05, 'window.__ant follows the controlled ant');
  await shot('01-worker-controlled');

  // the queen's menu, from the worker's body
  // it is offered to the profile that `manages` (the queen's), so it is up for
  // the worker too, and C toggles it
  const menuState = () => page.evaluate(() => {
    const m = document.getElementById('queenmenu');
    return { flag: window.__control.queenMenuOpen(), shown: !!m && m.style.display !== 'none' && m.textContent.trim().length > 10 };
  });
  const m0 = await menuState();
  await page.keyboard.press('KeyC');
  await page.waitForTimeout(400);
  const m1 = await menuState();
  await page.keyboard.press('KeyC');
  await page.waitForTimeout(400);
  const m2 = await menuState();
  console.log('  menu open before / after C / after C again:', m0.flag, m1.flag, m2.flag);
  check(m0.flag !== m1.flag && m1.flag !== m2.flag, 'C toggles the queen\'s menu while playing a worker');
  check((m0.flag && m0.shown) || (m2.flag && m2.shown), 'the queen\'s menu is really drawn while playing a worker');
  await shot('02-menu-from-worker');

  // ---- the clean AI hand-back ---------------------------------------------------
  console.log('\n=== release: the worker resumes her job ===');
  await page.evaluate(() => { for (const n of window.__nodes) n.amount = 3; });   // something to forage again
  await page.keyboard.press('Tab');    // -> second worker
  await page.waitForTimeout(150);
  const wr0 = await antOf(ids[0]);
  await page.waitForTimeout(1500);
  const wr1 = await antOf(ids[0]);
  check((await cur()).id === ids[1], 'Tab moved on to the next worker');
  check(dist(wr0, wr1) > 5, `the released worker walks by herself again (${dist(wr0, wr1).toFixed(1)} u in 1.5 s)`);

  // ---- Shift+Tab, then click an ant in the world -------------------------------
  console.log('\n=== Shift+Tab, click in the world ===');
  await page.keyboard.press('Shift+Tab');
  await page.waitForTimeout(150);
  check((await cur()).id === ids[0], 'Shift+Tab went back one');
  await page.keyboard.press('Shift+Tab');
  await page.waitForTimeout(150);
  check((await cur()).id === 'queen', 'Shift+Tab reached the queen');
  await page.evaluate(() => { for (const n of window.__nodes) n.amount = 0; });
  await page.waitForTimeout(1200);      // workers settle again, camera glides back
  // put the queen's camera on the meadow, then click the nearest worker
  const target = await page.evaluate(() => {
    const q = window.__control.list()[0];
    const ws = window.__control.list().filter((e) => e.id !== 'queen')
      .map((e) => ({ ...e, s: window.__control.screenOf(e.id) })).filter((e) => e.s.front && e.s.x > 40 && e.s.x < 1240 && e.s.y > 40 && e.s.y < 760);
    return ws[0] || null;
  });
  if (target) {
    await page.mouse.click(target.s.x, target.s.y);
    await page.waitForTimeout(500);
    check((await cur()).id === target.id, `clicking an ant in the world took her (#${target.id})`);
  } else {
    // none in frame: face the camera at one and try again through the hook
    check(false, 'no worker on screen to click');
  }

  // ---- controlled digger: x3 at the face -----------------------------------------
  console.log('\n=== a controlled digger pays the face x3 ===');
  await page.evaluate(() => window.__control.take('queen'));
  await page.waitForTimeout(200);
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  const face = (await page.evaluate(() => window.__faces()))[0];
  const stand = { x: face.x + face.nx * 5, z: face.z + face.nz * 5 };
  const workedOf = (id) => page.evaluate((i) => { const f = window.__faces().find((x) => x.id === i); return f ? f.worked : null; }, id);
  const stepFor = (sec, dt = 0.05) => page.evaluate(([s, d]) => { let t = 0; while (t < s) { window.__playerUpdate(d, t); t += d; } }, [sec, dt]);

  await page.evaluate(() => { const c = window.__colony(); c.state.workers = c.state.workers.filter((w) => w.profileId === 'worker'); });
  const aiId = await page.evaluate(([x, z]) => window.__colony().spawnAt(x, z, 'digger').id, [stand.x, stand.z]);
  const a0 = await workedOf(face.id);
  await stepFor(2);
  const aiGain = (await workedOf(face.id)) - a0;
  console.log('  AI digger, 2 s:', aiGain.toFixed(3));
  check(aiGain > 0, 'an AI digger at the face advances the gauge');

  await page.evaluate(() => { const c = window.__colony(); c.state.workers = c.state.workers.filter((w) => w.profileId === 'worker'); });
  const dId = await page.evaluate(([x, z]) => window.__colony().spawnAt(x, z, 'digger').id, [stand.x, stand.z]);
  await page.evaluate((id) => window.__control.take(id), dId);
  await page.evaluate(([x, z]) => { const a = window.__ant; a.x = x; a.z = z; }, [stand.x, stand.z]);
  const crew0 = await page.evaluate((id) => (window.__colony().digCandidates().find((c) => c.id === id) || {}).diggers, face.id);
  const b0 = await workedOf(face.id);
  await stepFor(2);
  const ctlGain = (await workedOf(face.id)) - b0;
  const crew = await page.evaluate((id) => (window.__colony().digCandidates().find((c) => c.id === id) || {}).diggers, face.id);
  console.log(`  controlled digger, 2 s: ${ctlGain.toFixed(3)} (crew ${crew})`);
  check(Math.abs(ctlGain / aiGain - 3) < 0.05, `the controlled digger pays x${(ctlGain / aiGain).toFixed(2)} an AI digger`);
  check(crew === 1, `she still counts as ONE for the crew rule (crew ${crew})`);
  const objective = await page.evaluate(() => document.getElementById('objective').textContent);
  check(/×3/.test(objective), `the objective says so ("${objective}")`);
  await page.evaluate(() => { window.__renderer.setAnimationLoop(null); });

  // away from the face: nothing at all
  await page.evaluate(() => { const a = window.__ant; a.x += 60; a.z += 60; });
  const c0 = await workedOf(face.id);
  await stepFor(2);
  const away = (await workedOf(face.id)) - c0;
  const crewAway = await page.evaluate((id) => (window.__colony().digCandidates().find((c) => c.id === id) || {}).diggers, face.id);
  check(away === 0 && crewAway === 0, `away from the face she pays nothing and is not in the crew (gain ${away}, crew ${crewAway})`);
  void crew0;

  // ---- back to the queen; Tab refused in the laying sequence ----------------------
  console.log('\n=== queen again, laying cannot be interrupted ===');
  await page.evaluate(() => window.__control.take('queen'));
  check((await cur()).id === 'queen', 'control is back on the queen');
  const dRel = await page.evaluate((id) => window.__colony().state.workers.find((w) => w.id === id).controlled, dId);
  check(dRel === false, 'the digger was released (controlled=false, brain restarts)');
  const began = await page.evaluate(() => window.__beginLaying());
  await page.evaluate(() => window.__playerUpdate(0.05, 0));
  const before = await cur();
  const took = await page.evaluate(() => window.__control.take(window.__control.list()[1].id));
  check(began && took === false && (await cur()).id === before.id, 'takeControl is refused while the queen is in the laying sequence');

  // ---- events ---------------------------------------------------------------------
  const cc = await page.evaluate(() => window.__cc);
  console.log('  control-change events:', cc.length, JSON.stringify(cc.slice(0, 3)));
  check(cc.length >= 6 && cc.every((e) => e.from !== e.to), `a control-change event fired for every change (${cc.length})`);

  // ---- macro pin click ---------------------------------------------------------------
  console.log('\n=== macro: click a pin ===');
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  // skip whatever is left of the laying sequence, then resume real frames
  await page.evaluate(() => { for (let i = 0; i < 400; i++) window.__playerUpdate(0.05, i * 0.05); });
  await page.reload();
  await page.waitForFunction(() => window.__control && window.__macro && window.__world6, null, { timeout: 20000 });
  await page.waitForTimeout(500);
  await page.evaluate((s) => window.__foundNest(s.x, s.z), SITE);
  const q1 = await antOf('queen');
  // spawn them on the hall floor, where the model is framed (round the queen
  // on the lawn they can fall outside the orbit's first view)
  const mIds = await page.evaluate(([x, z]) => {
    const c = window.__colony();
    const rs = window.__rooms2() || []; const hall = rs.find((r) => r.id === 'hall') || rs[0];
    const cx = hall ? hall.x : x, cz = hall ? hall.z : z, d = hall ? hall.r * 0.4 : 20;
    return [c.spawnAt(cx + d, cz, 'worker').id, c.spawnAt(cx, cz + d, 'digger').id, c.spawnAt(cx - d, cz, 'worker').id];
  }, [q1.x, q1.z]);
  await page.evaluate(() => { for (const n of window.__nodes) n.amount = 0; });
  // finish the founding cutscene so M works and the queen is a plain ant again
  await page.waitForTimeout(400);
  await page.keyboard.press('KeyM');
  await page.waitForFunction(() => window.__macro.mode === 'macro', null, { timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(500);
  check(await page.evaluate(() => window.__macro.mode) === 'macro', 'in the macro model');
  await shot('10-macro-pins');
  // a pin that is in frame and not under the queen's menu (a DOM panel eats the click)
  const pin = await page.evaluate((ids2) => {
    for (const id of ids2) {
      const a = window.__control.antOf(id);
      const v = new window.__THREE.Vector3(a.x, a.y + 5, a.z).project(window.__camera);
      const x = (v.x + 1) * 0.5 * innerWidth, y = (1 - v.y) * 0.5 * innerHeight;
      if (x > 370 && x < innerWidth - 40 && y > 60 && y < innerHeight - 80) return { id, x, y };
    }
    return null;
  }, mIds);
  if (!pin) console.log('  debug:', JSON.stringify(await page.evaluate((ids2) => ids2.map((id) => {
    const a = window.__control.antOf(id);
    const v = a && new window.__THREE.Vector3(a.x, a.y + 5, a.z).project(window.__camera);
    return { id, a: a && [a.x, a.y, a.z].map(Math.round), v: v && [v.x, v.y, v.z].map((n) => +n.toFixed(2)),
      hall: (window.__rooms2() || []).map((r) => [r.id, Math.round(r.x), Math.round(r.z)]) };
  }), mIds)));
  check(!!pin, 'a worker pin is in frame in the model');
  if (!pin) { await browser.close(); server.kill(); process.exit(1); }
  await page.mouse.click(pin.x, pin.y);
  await page.waitForFunction(() => window.__macro.mode === 'play', null, { timeout: 4000 }).catch(() => {});
  await page.waitForTimeout(1500);
  const after = await cur();
  check(after.id === pin.id, `clicking the pin took that ant (${after.profileId} #${after.id})`);
  check(await page.evaluate(() => window.__macro.mode) === 'play', 'the model flew back to play');
  const camDist = await page.evaluate((id) => {
    const a = window.__control.antOf(id), p = window.__camera.position;
    return Math.hypot(p.x - a.x, p.y - a.y, p.z - a.z);
  }, pin.id);
  check(camDist < 90, `the camera ended on the new ant (${camDist.toFixed(0)} u away)`);
  await shot('11-macro-took-digger');

  console.log('\nconsole errors:', errors.length ? errors.slice(0, 6) : 'none');
  check(errors.length === 0, `no console errors (${errors.length})`);
  console.log(failures.length ? `\n${failures.length} FAILURE(S):` : '\nALL CHECKS PASSED');
  for (const f of failures) console.log('  - ' + f);
  console.log('shots in', outDir);
  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
