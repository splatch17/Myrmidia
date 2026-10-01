// Verification for #76 — a minimum crew per dig face.
//
// The contract this proves: below `requiredCrewFor(face)` diggers, a face
// pays ZERO ant-seconds no matter how long the crew stands there (not a slow
// creep), and the HUD/queen menu say why. Once the crew reaches the
// requirement the face opens at the pace the crew size and the world's own
// `needed` predict.
//
// HOW TIME IS MEASURED WITHOUT WAITING IT OUT. colony.update(dt) is an
// integrator, not a wall clock: dt is whatever the caller hands it. So this
// drives the WHOLE player tick (window.__playerUpdate, #76's own hook) with a
// small synthetic dt in a tight synchronous loop and sums the dt's until the
// face reports opened — which is the exact number of in-game seconds a real
// player would have waited, produced by the real code path (colony.js's own
// gauge loop, not a re-implementation of its arithmetic), without the harness
// itself taking that long to run.
//
// Two full page loads: the default (test pace ON) and, after toggling it off
// with the real P-then-5 key sequence (core/quality.js), the real pace — a
// fresh nest each time, because the excavation is a module-level singleton.
//
// Chromium MUST have ANGLE/D3D11. Run it alone (PROGRESS.md trap 5).
//
// Usage: node scripts/verify-crew-76.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_crew76');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4189;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };   // the same flat, dry knoll shoulder verify-dig.mjs uses

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

const failures = [];
const check = (c, m) => { if (!c) { failures.push(m); console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };

/**
 * Drive colony.update()+HUD via the real player tick, dt seconds at a time,
 * until `face.id` reports opened (or a safety cap trips). Returns the total
 * simulated seconds and the final face reading.
 */
async function digUntilOpen(page, faceId, { dt = 0.05, capSeconds = 2000 } = {}) {
  return page.evaluate(([id, dtv, cap]) => {
    let t = 0;
    let opened = null;
    while (t < cap) {
      window.__playerUpdate(dtv, t);
      t += dtv;
      const f = window.__faces().find((x) => x.id === id);
      if (!f) { opened = true; break; }   // gone from the list = done, per contract §7
    }
    return { simSeconds: +t.toFixed(2), opened: !!opened };
  }, [faceId, dt, capSeconds]);
}

/** Advance `seconds` of simulated time without caring whether anything opens
 *  — used to prove a face does NOT creep below its crew threshold. */
async function stepFor(page, seconds, dt = 0.25) {
  return page.evaluate(([sec, dtv]) => {
    let t = 0;
    while (t < sec) { window.__playerUpdate(dtv, t); t += dtv; }
  }, [seconds, dt]);
}

async function spawnDiggers(page, x, z, n) {
  return page.evaluate(([xx, zz, nn]) => {
    const c = window.__colony();
    for (let i = 0; i < nn; i++) c.spawnAt(xx, zz, 'digger');
  }, [x, z, n]);
}

/* Between two measured generations, the fouisseuse who just finished the
   PREVIOUS face does not vanish — she is a live colony worker, and the very
   next player tick sends her at the nearest open face (contract §7/§8,
   unchanged by #76). Left alone she silently tops up the next generation's
   crew and makes its measurement read fewer seconds than its own requirement
   predicts — a harness artefact, not a gameplay bug (a real game continuing
   to play is exactly what should happen). Cleared between phases so each
   generation is measured with the exact crew this script spawned for it. */
async function clearDiggers(page) {
  return page.evaluate(() => {
    const c = window.__colony();
    c.state.workers = c.state.workers.filter((w) => w.profileId !== 'digger');
  });
}

const standoff = (f, off = 5.0) => ({ x: f.x + f.nx * off, z: f.z + f.nz * off });

/**
 * One full run: found a nest, open generation 1 (the hall), then one
 * generation-2 face, then one generation-3 face, timing each with a crew
 * exactly at its requirement. `demoRefusal` additionally proves, once, that
 * one digger short of a generation-2 face's requirement makes zero progress
 * over a long wait, and captures it.
 */
async function runGenerations(page, { demoRefusal, tag }) {
  const rows = [];

  await page.evaluate((s) => window.__foundNest(s.x, s.z), SITE);
  await page.waitForTimeout(150);

  // ---- generation 1: the hall face --------------------------------------
  let face = (await page.evaluate(() => window.__faces()))[0];
  let required = await page.evaluate((f) => window.__requiredCrew(f), face);
  check(required === 1, `${tag}: the hall face requires exactly 1 fouisseuse (reads ${required})`);
  let st = standoff(face);
  await spawnDiggers(page, st.x, st.z, required);
  let res = await digUntilOpen(page, face.id);
  check(res.opened, `${tag}: gen 1 opened with the required crew (${res.simSeconds}s simulated)`);
  rows.push({ tag, gen: 1, size: face.size || 'medium', needed: face.needed, required, seconds: res.simSeconds });

  await clearDiggers(page);

  // ---- generation 2: a face on the hall's own walls ---------------------
  const gen2faces = await page.evaluate(() => window.__faces());
  check(gen2faces.length >= 1, `${tag}: the hall published faces of its own (${gen2faces.length})`);
  face = gen2faces[0];
  required = await page.evaluate((f) => window.__requiredCrew(f), face);
  st = standoff(face);

  if (demoRefusal && required > 1) {
    console.log(`\n  === ${tag}: the refusal, gen 2 face "${face.id}" (needs ${required}) ===`);
    await spawnDiggers(page, st.x, st.z, required - 1);
    await stepFor(page, 25);   // long enough to have finished at a slightly lower crew, if it were allowed to creep
    const short = await page.evaluate((id) => {
      const f = window.__faces().find((x) => x.id === id);
      return { worked: f ? f.worked : null, present: (window.__colony().digCandidates().find((c) => c.id === id) || {}).diggers };
    }, face.id);
    check(short.worked === 0, `${tag}: ${required - 1}/${required} fouisseuses for 25s of work made ZERO progress (worked=${short.worked})`);
    check(short.present === required - 1, `${tag}: the crew present reads ${short.present} (expected ${required - 1})`);

    // camera on the face for the dig-ring capture, then the queen menu
    const chamber = (await page.evaluate(() => window.__world6.getFoundedNest().chamber));
    const eye = [face.x - face.nx * 9, face.y + 6.5, face.z - face.nz * 9];
    await page.evaluate(([e, a]) => window.__renderView(e, a), [eye, [face.x, face.y + 4, face.z]]);
    await page.waitForTimeout(150);
    const dial = await page.evaluate(() => {
      const d = document.getElementById('digdial');
      return { shown: d && d.style.display === 'block', text: d ? d.textContent.replace(/\s+/g, ' ').trim() : null };
    });
    console.log('  digdial:', JSON.stringify(dial));
    check(!!dial.text && new RegExp(`il faut ${required} fouisseuses,\\s*il y en a ${required - 1}`).test(dial.text),
      `the ring names the shortfall in the ticket's own words ("${dial.text}")`);
    await page.screenshot({ path: path.join(outDir, '01-refusal-ring.png') });

    const menuText = await page.evaluate(() => document.getElementById('queenmenu').textContent.replace(/\s+/g, ' ').trim());
    console.log('  queen menu:', menuText);
    check(new RegExp(`${required - 1}\\s*/\\s*${required}\\s*fouisseuse`).test(menuText),
      `the queen menu shows present/required for the chantier ("${menuText.match(/CHANTIERS.*/)?.[0] || menuText}")`);
    await page.screenshot({ path: path.join(outDir, '02-refusal-queen-menu.png') });

    // bring the crew up to the requirement and continue — same face, worked
    // is still exactly 0, so this measures the clean generation-2 time too
    await spawnDiggers(page, st.x, st.z, 1);
    res = await digUntilOpen(page, face.id);
    check(res.opened, `${tag}: adding the last fouisseuse opened it (${res.simSeconds}s simulated from a standing start of 0)`);

    await page.evaluate(([e, a]) => window.__renderView(e, a), [eye, [face.x, face.y + 4, face.z]]);
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(outDir, '03-opened-ring.png') });
    const menuAfter = await page.evaluate(() => document.getElementById('queenmenu').textContent.replace(/\s+/g, ' ').trim());
    console.log('  queen menu after opening:', menuAfter);
    await page.screenshot({ path: path.join(outDir, '04-opened-queen-menu.png') });
  } else {
    await spawnDiggers(page, st.x, st.z, required);
    res = await digUntilOpen(page, face.id);
    check(res.opened, `${tag}: gen 2 face "${face.id}" opened with the required crew (${res.simSeconds}s simulated)`);
  }
  rows.push({ tag, gen: 2, size: face.size, needed: face.needed, required, seconds: res.simSeconds });

  await clearDiggers(page);

  // ---- generation 3: one face on the new room's walls --------------------
  const gen3faces = await page.evaluate(() => window.__faces());
  check(gen3faces.length >= 1, `${tag}: the generation-2 room published faces of its own (${gen3faces.length})`);
  face = gen3faces[0];
  required = await page.evaluate((f) => window.__requiredCrew(f), face);
  st = standoff(face);
  await spawnDiggers(page, st.x, st.z, required);
  res = await digUntilOpen(page, face.id);
  check(res.opened, `${tag}: gen 3 face "${face.id}" opened with the required crew (${res.simSeconds}s simulated)`);
  rows.push({ tag, gen: 3, size: face.size, needed: face.needed, required, seconds: res.simSeconds });

  return rows;
}

async function withPage(browser, fn) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });
  await page.goto(URL);
  await page.waitForFunction(
    () => window.__world6 && window.__faces && window.__requiredCrew && window.__colony && window.__playerUpdate,
    null, { timeout: 20000 },
  );
  await page.waitForTimeout(400);
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  const result = await fn(page);
  console.log('  console errors:', errors.length ? errors.slice(0, 6) : 'none');
  check(errors.length === 0, `no console errors on this page (${errors.length})`);
  await page.close();
  return result;
}

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let log = '';
  server.stdout.on('data', (d) => { log += d.toString(); });
  server.stderr.on('data', (d) => { log += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(log); throw e; }
  console.log('preview up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });

  console.log('\n=== run 1: test pace (default ON) ===');
  const testRows = await withPage(browser, (page) => runGenerations(page, { demoRefusal: true, tag: 'test-pace' }));

  console.log('\n=== run 2: real pace ===');
  const realRows = await withPage(browser, async (page) => {
    // the real P-then-5-then-P sequence (core/quality.js), not a hook —
    // proving the SAME switch a player would use
    await page.keyboard.press('KeyP');
    await page.waitForTimeout(150);
    await page.keyboard.press('Digit5');
    await page.waitForTimeout(150);
    const label = await page.evaluate(() => document.querySelector('#quality') ? document.querySelector('#quality').textContent : null);
    console.log('  quality panel after toggle:', label);
    await page.keyboard.press('KeyP');
    await page.waitForTimeout(150);
    return runGenerations(page, { demoRefusal: false, tag: 'real-pace' });
  });

  console.log('\n=== THE MEASURED TABLE (#76) ===');
  const header = 'tag       | gen | size    | needed(ant-s) | required crew | wall-clock seconds';
  console.log(header);
  console.log('-'.repeat(header.length));
  for (const r of [...testRows, ...realRows]) {
    console.log(
      `${r.tag.padEnd(9)} | ${String(r.gen).padEnd(3)} | ${String(r.size).padEnd(7)} | `
      + `${String(r.needed).padEnd(14)} | ${String(r.required).padEnd(13)} | ${r.seconds}`,
    );
  }

  // sanity cross-check: real-pace seconds should be ~needed/required (rate=crew),
  // test-pace seconds ~needed/(required * (1/TEST_TIME)) — i.e. about 8.33x faster
  for (const r of realRows) {
    const expect = r.needed / r.required;
    check(Math.abs(r.seconds - expect) < Math.max(0.5, expect * 0.05),
      `real-pace gen ${r.gen}: ${r.seconds}s is close to needed/required = ${expect.toFixed(2)}s`);
  }
  for (const r of testRows) {
    const expect = r.needed / (r.required * (1 / 0.12));
    check(Math.abs(r.seconds - expect) < Math.max(0.5, expect * 0.1),
      `test-pace gen ${r.gen}: ${r.seconds}s is close to needed/(required x 1/TEST_TIME) = ${expect.toFixed(2)}s`);
  }

  console.log(failures.length ? `\n${failures.length} FAILURE(S):` : '\nALL CHECKS PASSED');
  for (const f of failures) console.log('  - ' + f);
  console.log('shots in', outDir);

  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
