// Live verification for #68 (the burrow beat) and #64 (no climb prompt
// underground), on the real build, through real key events.
//
// #68's own acceptance criterion is three pictures of the beat itself
// (start/mid/end) plus one of the laying cutscene it hands off to — a beat
// screenshotted only at rest proves a state flag, not an animation. #64 is
// checked the way its own reproduction steps say to: found, walk down the
// ramp for real, and read the prompt the whole way, because a prior round's
// captures (verify-dig.mjs's 02/03, referenced by #64) turned out to be a
// frozen HUD from before the ant ever moved off her spawn point rather than
// a real underground defect — see the report for how that was told apart.
// This harness drives the ant the whole time real defects would show up:
// through real keys, never by writing her position.
//
// Modelled on verify-dig.mjs and verify-gallery-walk.mjs (same server/
// browser/steering scaffolding, same rule that movement and holds are always
// real keys — only the world state that #68/#64 are not about gets set up
// with a hook, per verify-gallery-walk.mjs's own comment on where that line
// is). PORT 4191 is this harness's own — verify-dig.mjs/verify-gallery-walk
// .mjs run on 4181/4179 and other sessions may have those up concurrently.
//
// Chromium MUST have ANGLE/D3D11 (PROGRESS.md trap: headless software
// rasterising runs this scene at a few fps, and main.js's dt cap then makes
// in-game time crawl against wall-clock, so a 3.8 s beat times out at 25).
//
// Usage: node scripts/verify-burrow.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_burrow-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4191;
const URL = `http://localhost:${PORT}/`;

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try { const res = await fetch(url); if (res.ok) return resolve(); } catch { /* not up */ }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not come up in time'));
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
  console.log('Preview server up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => { consoleErrors.push('pageerror: ' + err.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__foundNest && window.__burrow && window.__laying, null, { timeout: 20000 });
  await page.waitForTimeout(600);

  const failures = [];
  function check(cond, msg) { if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); } else console.log('  ok: ' + msg); }

  const held = new Set();
  async function setKeys(next) {
    for (const k of held) if (!next.has(k)) { await page.keyboard.up(k); held.delete(k); }
    for (const k of next) if (!held.has(k)) { await page.keyboard.down(k); held.add(k); }
  }
  const releaseAll = () => setKeys(new Set());

  const readAnt = () => page.evaluate(() => {
    const a = window.__ant;
    const n = typeof window.__nest === 'function' ? window.__nest() : null;
    const h = window.__harvest ? window.__harvest() : null;
    return {
      x: a.x, y: a.y, z: a.z, yaw: a.yaw,
      ground: window.__groundY ? window.__groundY(a.x, a.z) : null,
      inside: n ? n.inside : null,
      carrying: h && h.carrying ? h.carrying.kind : null,
      stock: h && h.cache ? h.cache.total : 0,
      burrow: window.__burrow(),
      laying: window.__laying(),
    };
  });
  const hudText = () => page.evaluate(() => {
    const t = (id) => (document.getElementById(id) || {}).textContent || '';
    return { objective: t('objective'), stock: t('stock'), prompt: t('prompt'), event: t('event') };
  });
  async function shot(name) {
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log('  screenshot:', name + '.png');
  }

  function angDiff(a, b) {
    let d = (b - a) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return d;
  }

  /* Same P-steering as verify-gallery-walk.mjs: hold W, add a strafe key when
     the bearing and the current yaw disagree, with a widening detour when
     stuck against something. Real keys throughout. */
  async function walkTo(target, { arriveDist = 4, timeoutMs = 45000, label = '' } = {}) {
    const start = Date.now();
    let lastPos = await readAnt(), lastMoveT = Date.now(), unsticks = 0;
    let detourUntil = 0, detourSign = 1, detourAngle = 0.8;
    while (Date.now() - start < timeoutMs) {
      const a = await readAnt();
      const dx = target[0] - a.x, dz = target[1] - a.z;
      const dist = Math.hypot(dx, dz);
      if (dist < arriveDist) {
        await releaseAll();
        console.log(`  [${label}] arrived (${a.x.toFixed(1)},${a.z.toFixed(1)}) d=${dist.toFixed(1)} in ${((Date.now() - start) / 1000).toFixed(1)}s`);
        return { ok: true, a, dist };
      }
      const detour = Date.now() < detourUntil ? detourSign * detourAngle : 0;
      const diff = angDiff(a.yaw, Math.atan2(dx, dz) + detour);
      const keys = new Set();
      if (diff > 0.08) keys.add('KeyA');
      else if (diff < -0.08) keys.add('KeyD');
      if (Math.abs(diff) < 0.9) keys.add('KeyW');
      await setKeys(keys);
      await page.waitForTimeout(80);

      if (Math.hypot(a.x - lastPos.x, a.z - lastPos.z) > 0.3) { lastMoveT = Date.now(); lastPos = a; }
      else if (Date.now() - lastMoveT > 2500) {
        if (unsticks < 12) {
          unsticks++;
          await setKeys(new Set(['KeyS'])); await page.waitForTimeout(500);
          await releaseAll();
          detourSign = unsticks % 2 ? 1 : -1;
          detourAngle = 0.9 + 0.35 * Math.floor((unsticks - 1) / 2);
          detourUntil = Date.now() + 3000;
          lastMoveT = Date.now(); lastPos = await readAnt();
          continue;
        }
        await releaseAll();
        console.log(`  [${label}] STALLED at (${a.x.toFixed(1)},${a.z.toFixed(1)}), ${dist.toFixed(1)} short`);
        return { ok: false, a, dist };
      }
    }
    await releaseAll();
    const a = await readAnt();
    console.log(`  [${label}] TIMEOUT at (${a.x.toFixed(1)},${a.z.toFixed(1)})`);
    return { ok: false, a, dist: Math.hypot(target[0] - a.x, target[1] - a.z) };
  }

  /* ---- 0. hooks ----------------------------------------------------------- */
  const hooks = await page.evaluate(() => ({
    burrow: typeof window.__burrow === 'function',
    laying: typeof window.__laying === 'function',
    canFound: typeof window.__canFound === 'function',
    decorPenetration: typeof window.__decorPenetration === 'function',
  }));
  console.log('\n=== hooks ===', JSON.stringify(hooks));
  check(hooks.burrow, 'window.__burrow() exists');
  check(hooks.laying, 'window.__laying() exists');
  if (!hooks.burrow || !hooks.laying) {
    await shot('00-no-hooks');
    await browser.close(); server.kill(); process.exit(1);
  }

  /* ---- 1. find a foundable site, and harvest toward it -------------------- */
  // The pile has to be exactly where she founds (interaction.js's ladder only
  // offers 'found' standing on her own cache, harvest.js's cacheDistance()
  // check) — so, unlike verify-gallery-walk.mjs (which founds through a hook
  // and never needs this), the drop has to land ON the site: harvest first,
  // THEN walk to the site still carrying, THEN drop, THEN hold E. Dropping at
  // the node and walking the pile's distance away afterward is what a first
  // version of this harness did, and it starved 'found' of a cache in reach
  // every single run — the ladder fell through to 'none' with an empty
  // prompt, silently, which is exactly the kind of failure this project's
  // pitfalls file warns never raises an error on its own.
  console.log('\n=== a foundable site, and a load carried to it ===');
  const spawn0 = await readAnt();
  const node = await page.evaluate(([x, z]) => {
    const list = (typeof window.__nodes === 'function' ? window.__nodes() : window.__nodes).filter((n) => n.amount > 0);
    list.sort((p, q) => Math.hypot(p.x - x, p.z - z) - Math.hypot(q.x - x, q.z - z));
    return list[0] ? { x: list[0].x, z: list[0].z, kind: list[0].kind } : null;
  }, [spawn0.x, spawn0.z]);
  check(!!node, 'there is a resource node to harvest');
  if (!node) { await browser.close(); server.kill(); process.exit(1); }

  const site = await page.evaluate(([sx, sz]) => {
    let best = null;
    for (let a = 0; a < 64; a++) {
      const th = (a / 64) * Math.PI * 2;
      for (let r = 6; r <= 60; r += 2) {
        const x = sx + Math.cos(th) * r, z = sz + Math.sin(th) * r;
        if (!window.__canFound(x, z).ok) continue;
        if (window.__decorPenetration(x, z, window.__antRadius + 6) > 0) continue;
        if (!best || r < best.r) best = { x, z, r };
      }
    }
    return best;
  }, [node.x, node.z]);
  console.log('  site', JSON.stringify(site));
  check(!!site, 'there is foundable ground near the node');
  if (!site) { await browser.close(); server.kill(); process.exit(1); }

  await walkTo([node.x, node.z], { arriveDist: 5, label: 'to node' });
  await page.keyboard.down('KeyE');
  const holdUntil = Date.now() + 12000;
  let got = await readAnt();
  while (!got.carrying && Date.now() < holdUntil) { await page.waitForTimeout(200); got = await readAnt(); }
  await page.keyboard.up('KeyE');
  await page.waitForTimeout(250);
  got = await readAnt();
  check(!!got.carrying, 'she picked up a unit');

  // Tight arrival: canFound() was verified at the exact site coordinates
  // above, and a diggable patch is not guaranteed to be wide — a few units
  // off it can land back on ground that refuses.
  await walkTo([site.x, site.z], { arriveDist: 1.2, timeoutMs: 40000, label: 'carrying it to the site' });
  const onSite = await readAnt();
  const verdict = await page.evaluate(([x, z]) => window.__canFound(x, z), [onSite.x, onSite.z]);
  console.log('  on site, canFound ->', JSON.stringify(verdict));
  check(verdict.ok, `standing where she arrived is still diggable (${verdict.text || verdict.reason || 'ok'})`);

  // Drop it here: this is what makes the cache (harvest.js), on this exact
  // spot, so the founding hold right after has it in reach by construction.
  await page.keyboard.down('KeyE'); await page.waitForTimeout(120); await page.keyboard.up('KeyE');
  await page.waitForTimeout(300);
  const dropped = await readAnt();
  console.log('  pile', dropped.stock);
  check(dropped.stock >= 1, 'the pile exists on the founding site');

  /* ---- 3. hold E on the full pile: the burrow beat should start ----------- */
  console.log('\n=== holding E to found: the burrow beat ===');
  const beforeHold = await readAnt();
  console.log('  before:', JSON.stringify({ x: +beforeHold.x.toFixed(1), z: +beforeHold.z.toFixed(1), y: +beforeHold.y.toFixed(1), stock: beforeHold.stock }));
  console.log('  E resolves to:', JSON.stringify(await hudText()));

  // BURROW_DURATION (burrow.js) — 3.8 s, not scaled by the test pace, same
  // as FOUND_SECONDS/LAY_SECONDS. Only used here to time captures; every
  // pass/fail check below reads window.__burrow()/__laying() directly
  // instead of trusting wall-clock against it, since headless frame time can
  // still drift from game time even with the GPU flags on.
  const BURROW_DURATION_HINT = 3.8;
  const startY = beforeHold.y;

  await page.keyboard.down('KeyE');
  const burrowStartBy = Date.now() + 9000;
  let b = await readAnt();
  while (!b.burrow.active && Date.now() < burrowStartBy) { await page.waitForTimeout(120); b = await readAnt(); }
  check(b.burrow.active, 'holding E through the founding threshold starts the burrow beat');
  console.log('  burrow active, t =', b.burrow.t);
  await page.waitForTimeout(150);
  await shot('01-burrow-start');

  // poll on the beat's own clock (t / BURROW_DURATION_HINT) rather than on a
  // blind wall-clock wait, so a slow headless frame rate cannot mistime which
  // moment of the beat gets screenshotted
  const midDeadline = Date.now() + 9000;
  let atMid = b;
  while (atMid.burrow.active && atMid.burrow.t < BURROW_DURATION_HINT * 0.5 && Date.now() < midDeadline) {
    await page.waitForTimeout(100);
    atMid = await readAnt();
  }
  console.log('  at mid:', JSON.stringify({ t: atMid.burrow.t, active: atMid.burrow.active, y: +atMid.y.toFixed(2) }));
  check(atMid.burrow.active, 'the beat is still running partway through');
  check(atMid.y < startY - 0.5, `she has visibly sunk by mid-beat (${(startY - atMid.y).toFixed(2)} units down)`);
  await shot('02-burrow-mid');

  // deep into the beat, still running (the last frame before it ends on its
  // own — E is never released, proving the beat is timed, not held)
  const deepDeadline = Date.now() + 9000;
  let deep = atMid;
  while (deep.burrow.active && deep.burrow.t < BURROW_DURATION_HINT * 0.92 && Date.now() < deepDeadline) {
    await page.waitForTimeout(80);
    deep = await readAnt();
  }
  console.log('  deep:', JSON.stringify({ t: deep.burrow.t, active: deep.burrow.active, y: +deep.y.toFixed(2) }));
  // A slow headless frame can jump t straight past both poll thresholds in
  // one tick, landing "mid" and "deep" on the same rendered frame — a timing
  // artifact of this harness, not a defect, so the sink-progressed check only
  // applies when there was meaningfully more beat-time to sink through.
  if (deep.burrow.t > atMid.burrow.t + 0.4) {
    check(deep.y < atMid.y - 0.2, 'she keeps sinking between mid-beat and near the end');
  } else {
    console.log('  (mid and deep landed on the same frame under this run\'s frame pacing — skipping the delta check)');
  }
  await shot('03-burrow-end');

  // and now actually wait for the natural end — the beat calls found() and
  // hands off to laying.js itself, exactly once
  const endDeadline = Date.now() + 4000;
  let ended = deep;
  while (Date.now() < endDeadline) {
    await page.waitForTimeout(80);
    ended = await readAnt();
    if (!ended.burrow.active) break;
  }
  check(!ended.burrow.active, 'the burrow beat ends on its own');
  console.log('  ended:', JSON.stringify({ y: +ended.y.toFixed(2), inside: ended.inside, layingPhase: ended.laying.phase }));
  check(ended.laying.phase !== null, 'it hands straight on to the laying cutscene (#68: "inchangée dans son principe")');
  await page.keyboard.up('KeyE');

  /* ---- 4. the founding pile was spent exactly once ------------------------ */
  console.log('\n=== the pile was spent once ===');
  const cost = await page.evaluate(() => (typeof window.__clutchCost === 'function' ? window.__clutchCost() : null));
  console.log(`  clutch cost ${cost}, stock before ${beforeHold.stock} -> during laying ${ended.stock}`);
  check(cost !== null, 'window.__clutchCost() exists');
  check(ended.stock === Math.max(0, beforeHold.stock - cost),
    `the pile was drawn down by exactly the founding cost (${beforeHold.stock} -> ${ended.stock}, cost ${cost}) — not left untouched, not double-charged`);

  /* ---- 5. the laying cutscene runs to completion (E not held any more) ---- */
  console.log('\n=== the laying cutscene, unchanged in principle ===');
  const layDeadline = Date.now() + 20000;
  let afterLay = ended;
  while (Date.now() < layDeadline) {
    await page.waitForTimeout(300);
    afterLay = await readAnt();
    if (afterLay.laying.phase === null) break;
  }
  check(afterLay.laying.phase === null, 'the laying cutscene finishes and hands her back');
  check(afterLay.laying.brood >= 1, 'a clutch was laid — the beat led all the way to the first ponte');
  await shot('04-laying-after');

  /* ---- 6. #64: no climbing prompt underground, on a real walk down ------- */
  console.log('\n=== #64: walking down for real, watching the prompt ===');
  const nest = await page.evaluate(() => window.__nest());
  const descent = await page.evaluate(() => (typeof window.__descentPath === 'function' ? window.__descentPath() : null));
  check(!!nest && nest.rooms && nest.rooms.length >= 1, 'the chamber exists to walk back into');
  // Also watches for the twin defect the same walk turned up this round:
  // a surface resource node's prompt ("récolter ...") offered a nest depth
  // under it, for the same 2D-distance reason as the climb prompt — fixed in
  // harvest.js the same way #64 fixed climb.js.
  let sawClimbPromptUnderground = false, sawHarvestPromptUnderground = false;
  async function pollPrompt(tag) {
    const [a, t] = await Promise.all([readAnt(), hudText()]);
    console.log(`  [${tag}] inside=${a.inside} prompt="${t.prompt}"`);
    if (a.inside && /grimper au brin d.?herbe/i.test(t.prompt || '')) sawClimbPromptUnderground = true;
    if (a.inside && /r[ée]colter/i.test(t.prompt || '')) sawHarvestPromptUnderground = true;
  }
  if (nest && descent && descent.length) {
    await walkTo([descent[0].x, descent[0].z], { arriveDist: 4, timeoutMs: 40000, label: 'to the entrance' });
    await pollPrompt('at the entrance');
    for (let i = 2; i < descent.length; i += 2) {
      await walkTo([descent[i].x, descent[i].z], { arriveDist: 6, timeoutMs: 30000, label: `down u${i}` });
      await pollPrompt(`u${i}`);
    }
    await walkTo([nest.chamber.x, nest.chamber.z], { arriveDist: 6, timeoutMs: 30000, label: 'into the chamber' });
    await pollPrompt('in the chamber');
    // stand still a moment where the round-17 captures were taken (in front
    // of a dig face, if one is still open) and poll a few more times
    const faces = await page.evaluate(() => (typeof window.__faces === 'function' ? window.__faces() : []));
    if (faces && faces.length) {
      await walkTo([faces[0].x, faces[0].z], { arriveDist: 5, timeoutMs: 20000, label: 'at the dig face' });
      for (let i = 0; i < 4; i++) { await pollPrompt('at the dig face'); await page.waitForTimeout(200); }
    } else {
      for (let i = 0; i < 4; i++) { await pollPrompt('in the chamber, waiting'); await page.waitForTimeout(200); }
    }
  } else {
    check(false, 'window.__descentPath() published a route to walk down on real keys');
  }
  check(!sawClimbPromptUnderground, '"grimper au brin d\'herbe" never shows while she is inside the nest (#64)');
  check(!sawHarvestPromptUnderground, '"récolter ..." never shows while she is inside the nest either (same fix, harvest.js)');

  /* ---- report --------------------------------------------------------------*/
  console.log('\n=== console errors ===');
  console.log(consoleErrors.length ? consoleErrors.join('\n') : '  none');
  check(consoleErrors.length === 0, `no console errors (${consoleErrors.length})`);

  console.log('\n=== result ===');
  if (failures.length) { console.log(`${failures.length} failure(s):`); for (const f of failures) console.log('  - ' + f); }
  else console.log('all checks passed');
  console.log('screenshots in', outDir);

  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
