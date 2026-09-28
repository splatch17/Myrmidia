// Verification for #75 round 2 — the caste squares (#queenhud .mm-casterow)
// are now BUTTONS: clicking one picks the next clutch's caste the same way
// keys 5/6 do (player/index.js's selectCaste(), shared with input.js).
//
// What has to be true, beyond "a click does something":
//   - a LOCKED square (the digger, before any clutch is laid) is not
//     clickable at all — clicking it must not change window.__caste().
//   - once unlocked, clicking a square moves the pick, the SAME WAY 5/6
//     move it: the square gains a clear highlight, and the queen menu's own
//     PROCHAINE tag follows to the clicked caste (queenMenu.js reads the
//     same `caste` variable, so this also proves the click did not create a
//     second, disagreeing source of truth).
//   - the count badge on each square matches the colony's own headcount
//     (window.__colony().state.workers), not a placeholder.
//   - a click never reaches the game underneath: the camera must not have
//     rotated, and no pointer-lock/drag state should be left behind.
//
// Usage: node scripts/verify-caste-buttons.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import nodePath from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = nodePath.dirname(fileURLToPath(import.meta.url));
const gameDir = nodePath.resolve(__dirname, '..');
const outDir = process.argv[2] || nodePath.join(gameDir, '_caste-btn-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4184;
const URL = `http://localhost:${PORT}/`;

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
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__queenMenu && window.__caste && window.__colony && window.__inputState, null, { timeout: 20000 });
  await page.waitForTimeout(600);

  const failures = [];
  const check = (c, m) => { if (!c) { failures.push(m); console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };
  const shot = async (n) => { await page.screenshot({ path: nodePath.join(outDir, `${n}.png`) }); console.log('  shot:', n + '.png'); };

  const squares = () => page.evaluate(() => {
    const out = {};
    document.querySelectorAll('#queenhud .mm-caste-sq').forEach((el) => {
      out[el.dataset.caste] = {
        locked: el.classList.contains('mm-caste-locked'),
        selected: el.classList.contains('mm-caste-selected'),
        disabled: el.disabled,
        count: el.querySelector('.mm-caste-count').textContent,
        cursor: getComputedStyle(el).cursor,
      };
    });
    return out;
  });
  const panelText = () => page.evaluate(() => {
    const el = document.getElementById('queenmenu');
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : null;
  });
  const colonyCounts = () => page.evaluate(() => {
    const c = window.__colony().state;
    return {
      worker: c.workers.filter((w) => w.profileId !== 'digger').length,
      digger: c.workers.filter((w) => w.profileId === 'digger').length,
    };
  });

  /* ---- 1. locked: not clickable, no change ------------------------------- */
  console.log('\n=== locked square refuses the click ===');
  const sq0 = await squares();
  console.log('  squares:', JSON.stringify(sq0));
  check(!!sq0.worker && !!sq0.digger, 'both caste squares exist');
  check(sq0.digger.locked === true, 'the digger reads as locked before any clutch is laid');
  check(sq0.digger.disabled === true, 'the locked square is a real disabled button, not just styled grey');
  check(sq0.digger.cursor === 'default', 'a locked square shows the default cursor, not a pointer');
  const casteBefore = await page.evaluate(() => window.__caste().caste);
  check(casteBefore === 'worker', 'the next clutch starts as worker');
  await page.click('#queenhud .mm-caste-sq[data-caste="digger"]', { force: true });
  await page.waitForTimeout(200);
  const casteAfterLockedClick = await page.evaluate(() => window.__caste().caste);
  check(casteAfterLockedClick === 'worker', 'clicking the locked digger square changed nothing');
  await shot('00-locked-click-noop');

  /* ---- 2. unlock (same shortcut verify-queen-menu.mjs uses) -------------- */
  console.log('\n=== unlock the digger ===');
  await page.evaluate(() => { const a = window.__ant; window.__foundNest(a.x + 40, a.z + 40); });
  await page.waitForTimeout(400);
  const beganLaying = await page.evaluate(() => window.__beginLaying());
  check(beganLaying === true, 'the laying sequence started');
  await page.waitForTimeout(1200);
  await page.keyboard.press('KeyE');
  await page.waitForTimeout(600);
  const laid = await page.evaluate(() => window.__laying());
  check(laid.brood >= 1, `the first clutch is laid (brood ${laid.brood})`);
  const unlocked = await page.evaluate(() => window.__caste().unlocked);
  check(unlocked === true, 'window.__caste() reports the digger unlocked');

  /* ---- 3. click moves the pick, same as 5/6 ------------------------------ */
  console.log('\n=== clicking a square picks the next clutch ===');
  const sq1 = await squares();
  check(sq1.digger.locked === false && sq1.digger.disabled === false, 'the digger square is now enabled');
  check(sq1.worker.selected === true, 'worker still reads as the current pick before any click');

  const camBefore = await page.evaluate(() => window.__inputState());
  await page.click('#queenhud .mm-caste-sq[data-caste="digger"]');
  await page.waitForTimeout(250);
  const casteAfterClick = await page.evaluate(() => window.__caste().caste);
  check(casteAfterClick === 'digger', `clicking the digger square picked it (state says "${casteAfterClick}")`);
  const sq2 = await squares();
  check(sq2.digger.selected === true, 'the digger square is now highlighted');
  check(sq2.worker.selected === false, 'the worker square lost the highlight');
  const menuAfterClick = await panelText();
  check(/fouisseuse\s*PROCHAINE/i.test(menuAfterClick), 'the queen menu\'s own PROCHAINE tag followed the click, not just internal state');
  await shot('01-clicked-digger');

  /* click back to worker, prove the highlight moves both ways */
  await page.click('#queenhud .mm-caste-sq[data-caste="worker"]');
  await page.waitForTimeout(250);
  const casteBack = await page.evaluate(() => window.__caste().caste);
  check(casteBack === 'worker', 'clicking the worker square picked it back');
  const sq3 = await squares();
  check(sq3.worker.selected === true && sq3.digger.selected === false, 'the highlight moved back to worker');
  const menuBack = await panelText();
  check(/ouvrière\s*PROCHAINE/i.test(menuBack), 'the queen menu follows back to ouvrières');
  await shot('02-clicked-worker');

  /* ---- 4. the click did not leak to the game ----------------------------- */
  console.log('\n=== the click stayed on the button ===');
  const camAfter = await page.evaluate(() => window.__inputState());
  console.log('  input state before/after:', JSON.stringify(camBefore), JSON.stringify(camAfter));
  check(camAfter.dragging === false, 'the click did not start a camera-orbit drag');
  check(camAfter.camYaw === camBefore.camYaw, 'the camera yaw is untouched by the two clicks above');
  const noPointerLock = await page.evaluate(() => document.pointerLockElement === null);
  check(noPointerLock, 'no pointer lock was left behind by the click');

  /* ---- 5. the count badge is the colony's own number --------------------- */
  console.log('\n=== count badge matches the colony ===');
  // let the incubating clutch hatch with a synthetic dt, same trick
  // verify-crew-76.mjs uses, so this does not sit through real wall-clock time
  for (let i = 0; i < 200; i++) await page.evaluate(() => window.__playerUpdate(1, 0));
  await page.waitForTimeout(200);
  const counts = await colonyCounts();
  const sq4 = await squares();
  console.log('  colony counts:', JSON.stringify(counts), ' badges:', sq4.worker.count, sq4.digger.count);
  check(Number(sq4.worker.count || 0) === counts.worker, `worker badge (${sq4.worker.count}) matches the colony (${counts.worker})`);
  check(Number(sq4.digger.count || 0) === counts.digger, `digger badge (${sq4.digger.count}) matches the colony (${counts.digger})`);
  await shot('03-count-badges');

  console.log('\n=== console ===');
  console.log(' ', errors.length ? errors.slice(0, 6) : 'none');
  check(errors.length === 0, `no console errors (${errors.length})`);

  console.log(failures.length ? `\n${failures.length} FAILURE(S):` : '\nALL CHECKS PASSED');
  for (const f of failures) console.log('  - ' + f);
  console.log('shots in', outDir);

  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
