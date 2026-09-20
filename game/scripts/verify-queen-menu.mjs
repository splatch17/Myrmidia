// Verification for #53 — the queen's management panel.
//
// The end criterion in the ticket is not "a panel appears". It is that the
// panel belongs to a PROFILE: it must be refused to a caste that does not
// manage a colony. That is design/castes-et-micro-macro.md §3 point 3 — the
// HUD has to be able to depend on who is controlled — and it is the one thing
// that has to be true now, before #36 makes taking control of a forager
// possible. Proving it after the fact would mean proving it against a system
// already built on the assumption it is false.
//
// Everything else here is: the panel opens on a real key press, and every
// number in it is the colony's own rather than a placeholder.
//
// Usage: node scripts/verify-queen-menu.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import nodePath from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = nodePath.dirname(fileURLToPath(import.meta.url));
const gameDir = nodePath.resolve(__dirname, '..');
const outDir = process.argv[2] || nodePath.join(gameDir, '_menu-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4183;
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
  await page.waitForFunction(() => window.__queenMenu && window.__world6, null, { timeout: 20000 });
  await page.waitForTimeout(600);

  const failures = [];
  const check = (c, m) => { if (!c) { failures.push(m); console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };
  const shot = async (n) => { await page.screenshot({ path: nodePath.join(outDir, `${n}.png`) }); console.log('  shot:', n + '.png'); };
  const panel = () => page.evaluate(() => {
    const el = document.getElementById('queenmenu');
    return {
      shown: !!el && el.style.display === 'block',
      text: el ? el.textContent.replace(/\s+/g, ' ').trim() : null,
    };
  });

  /* ---- 1. it belongs to the profile, not to the player ------------------ */
  console.log('\n=== whose panel is it ===');
  const who = await page.evaluate(() => ({
    queen: window.__queenMenu('queen').availableFor,
    worker: window.__queenMenu('worker').availableFor,
    digger: window.__queenMenu('digger').availableFor,
  }));
  console.log('  availableFor:', JSON.stringify(who));
  check(who.queen === true, 'the queen gets the management panel');
  check(who.worker === false, 'a forager does not — the panel is refused by caste, not by a player check');
  check(who.digger === false, 'nor does a fouisseuse');

  /* ---- 2. it opens and closes on a real key ----------------------------- */
  console.log('\n=== the key ===');
  const closed0 = await panel();
  check(!closed0.shown, 'it starts closed');
  await page.keyboard.press('KeyC');
  await page.waitForTimeout(250);
  const opened = await panel();
  console.log('  after C:', opened.shown);
  check(opened.shown, 'C opens it');
  await page.keyboard.press('KeyC');
  await page.waitForTimeout(250);
  check(!(await panel()).shown, 'C closes it again');

  /* ---- 3. the numbers are the colony's own ------------------------------ */
  console.log('\n=== the numbers ===');
  /* Put the world in a state with something to report, through the same hooks
     the other harnesses use: a nest, a face, and a clutch of each caste. */
  await page.evaluate(() => {
    const a = window.__ant;
    window.__foundNest(a.x + 40, a.z + 40);
  });
  await page.waitForTimeout(400);
  await page.keyboard.press('KeyC');
  await page.waitForTimeout(300);
  const withNest = await panel();
  console.log('  panel:', withNest.text);
  check(withNest.shown, 'it is open again');
  check(/LA REINE/.test(withNest.text), 'it names who it belongs to');
  check(/fouisseuse/.test(withNest.text), 'the caste is called a fouisseuse, not a creuseuse (#50)');
  check(/PONTE/.test(withNest.text) && /COLONIE/.test(withNest.text) && /CHANTIERS/.test(withNest.text),
    'it carries the three sections the ticket asks for');
  check(/le hall/.test(withNest.text), 'the dig face opened by founding is listed as work in progress');
  check(/personne/.test(withNest.text), 'and it says plainly that nobody is on it yet');

  const counts = await page.evaluate(() => {
    const el = document.getElementById('queenmenu');
    return { text: el.textContent.replace(/\s+/g, ' ').trim(), reserve: window.__harvest().cache ? window.__harvest().cache.total : 0 };
  });
  check(new RegExp(`${counts.reserve} /`).test(counts.text),
    `the reserve shown (${counts.reserve}) is the harvest cache's own number, not a placeholder`);
  await shot('01-queen-menu');

  /* The locked caste has to read as locked: the digger unlocks on the second
     clutch, and this run has laid none. */
  check(/verrouill/.test(withNest.text), 'the caste that is not unlocked yet reads as locked');

  /* ---- 4. keys 5 and 6 really switch the next clutch's caste (#61) ------
     PROGRESS.md defect #2: this was committed without a capture, because a
     throwaway harness never sent a keystroke — window.__caste()/the panel
     text agreed with each other and with nothing that had actually happened.
     This sends the same real page.keyboard events verify-harvest.mjs proved
     itself with, and reads back BOTH the HUD text and window.__caste(), so a
     capture that merely shows the panel frozen on its default cannot pass. */
  console.log('\n=== 5/6 switch the next clutch\'s caste (#61) ===');

  /* The digger is locked until a first clutch is laid (CASTE_UNLOCK.digger in
     player/index.js): pressing 6 while it is locked is a no-op by design, and
     would prove nothing about the key. window.__beginLaying() plays the real
     scripted sequence (same shortcut this file already used above to get a
     nest without walking to one), and — as verify-gallery-walk.mjs already
     established — a short E tap cuts it early and still lays the clutch, so
     this does not have to sit through the full ~14s cutscene for a fact that
     is not what #61 is about. */
  const beganLaying = await page.evaluate(() => window.__beginLaying());
  check(beganLaying === true, 'the laying sequence started (there is a founded chamber to run it in)');
  await page.waitForTimeout(1200);
  const running = await page.evaluate(() => window.__laying());
  check(!!running.phase, `the scripted descent is running (phase "${running.phase}")`);
  await page.keyboard.press('KeyE');
  await page.waitForTimeout(600);
  const laid = await page.evaluate(() => window.__laying());
  check(laid.phase === null, 'E cut the cutscene short');
  check(laid.brood >= 1, `cutting it still laid the clutch, unlocking the digger (brood ${laid.brood})`);

  const unlocked = await page.evaluate(() => window.__caste().unlocked);
  check(unlocked === true, 'window.__caste() now reports the digger as unlocked');

  if (!(await panel()).shown) { await page.keyboard.press('KeyC'); await page.waitForTimeout(250); }

  /* Moved off the default on purpose before either capture: a screenshot of
     "worker" taken without ever having pressed a key would be exactly the
     old, unproven capture again. Digit6 first, so the "worker" shot below is
     proof that 5 switches AWAY from digger, not a picture of a value nobody
     touched. */
  await page.keyboard.press('Digit6');
  await page.waitForTimeout(250);
  const midSwitch = await page.evaluate(() => window.__caste());
  check(midSwitch.caste === 'digger', `Digit6 switched the caste (state says "${midSwitch.caste}")`);

  await page.keyboard.press('Digit5');
  await page.waitForTimeout(250);
  const asWorker = { state: await page.evaluate(() => window.__caste()), panel: await panel() };
  console.log('  after Digit5:', JSON.stringify(asWorker.state), '|', asWorker.panel.text);
  check(asWorker.state.caste === 'worker', `Digit5 switched the caste back (state says "${asWorker.state.caste}")`);
  /* ● is the filled bullet (&#9679;) the panel marks the PICKED caste
     with — textContent gives the real glyph, not the source's HTML entity. */
  check(new RegExp('●\\s*5\\s*ouvrière').test(asWorker.panel.text),
    'the panel itself marks ouvrières as the next clutch, not just the internal state');
  await shot('02-caste-worker');

  await page.keyboard.press('Digit6');
  await page.waitForTimeout(250);
  const asDigger = { state: await page.evaluate(() => window.__caste()), panel: await panel() };
  console.log('  after Digit6:', JSON.stringify(asDigger.state), '|', asDigger.panel.text);
  check(asDigger.state.caste === 'digger', `Digit6 switched the caste (state says "${asDigger.state.caste}")`);
  check(new RegExp('●\\s*6\\s*fouisseuse').test(asDigger.panel.text),
    'the panel itself marks fouisseuses as the next clutch, not just the internal state');
  await shot('03-caste-digger');

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
