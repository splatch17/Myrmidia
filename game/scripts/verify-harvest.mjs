// Live verification for #29 (the harvest loop) and #33 (founding the
// colony), plus PROGRESS.md defects #4 (the west clamp is the river, not a
// box) and #5 (the spawn is a landing site, not the best soil on the map).
//
// It plays the prologue the way a player plays it, on the built game:
//
//   spawn on the knoll's shoulder -> walk to a resource node -> hold E until
//   she is carrying something -> haul it uphill to the site she picked ->
//   drop it (that first drop opens the pile) -> repeat until the pile has
//   enough -> hold E on the pile to dig the first chamber -> then walk west
//   until the map stops her, and check where it stopped her.
//
// Everything is driven through real key events (page.keyboard.down/up) and
// the real camera-relative movement path. window.__ant / __nodes / __harvest
// are read *only* to know where things are and to assert what happened —
// nothing is ever written into the game's state, because a bypass verifies a
// path the player never takes.
//
// Chromium MUST be launched with ANGLE/D3D11: headless Chromium's software
// rasterizer runs this scene at a handful of fps, and with main.js's dt cap
// that makes in-game time crawl against wall-clock. Same requirement as the
// other harnesses here.
//
// Run after `npm run build` (this serves dist/, so what is tested is what
// would ship).
//
// Usage: node scripts/verify-harvest.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_harvest-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4177;
const URL = `http://localhost:${PORT}/${process.env.MYR_URLQ ? "?" + process.env.MYR_URLQ : ""}`;

// Where the harness decides to found: uphill on the knoll, ~18 units from the
// nearest node, clear of every decor collider and on ground the site readout
// calls diggable. Far enough from the nodes that every trip home is a real
// trip — which is the thing #29 is actually about.
const CACHE_SPOT = [70, 95];

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
  await page.waitForFunction(() => window.__ant && window.__harvest && window.__nodes, null, { timeout: 20000 });
  /* main.js assigns window.__nodes = RESOURCE_NODES (the raw array) *after*
     createPlayerController() has assigned the accessor function of the same
     name, so which one is live depends on load order and has already flipped
     once. Read through this and the harness stops caring. */

  await page.waitForTimeout(600);

  const failures = [];
  function check(cond, msg) { if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); } }

  const held = new Set();
  async function setKeys(next) {
    for (const k of held) if (!next.has(k)) { await page.keyboard.up(k); held.delete(k); }
    for (const k of next) if (!held.has(k)) { await page.keyboard.down(k); held.add(k); }
  }
  const releaseAll = () => setKeys(new Set());

  const readAnt = () => page.evaluate(() => {
    const a = window.__ant, h = window.__harvest();
    return {
      x: a.x, y: a.y, z: a.z, yaw: a.yaw,
      carrying: h.carrying ? h.carrying.kind : null,
      progress: +h.progress.toFixed(2),
      stock: h.cache ? h.cache.total : 0,
      cache: h.cache ? { x: h.cache.x, z: h.cache.z, items: h.cache.items } : null,
      nest: window.__nestOrigin(),
      pen: window.__decorPenetration(a.x, a.z, window.__antRadius),
    };
  });
  const hudText = () => page.evaluate(() => {
    const t = (id) => (document.getElementById(id) || {}).textContent || '';
    return { objective: t('objective'), stock: t('stock'), site: t('siteinfo'), detail: t('sitedetail'), prompt: t('prompt'), event: t('event') };
  });
  async function shot(name) {
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log('  screenshot:', name + '.png');
  }
  async function hold(key, ms) {
    await page.keyboard.down(key);
    await page.waitForTimeout(ms);
    await page.keyboard.up(key);
  }

  function angDiff(a, b) {
    let d = (b - a) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return d;
  }

  /* Same P-steering as verify-room-access.mjs: hold W, add a strafe key when
     the bearing and the current yaw disagree, pivot in place for big turns.
     Real keys, real camera-relative movement. */
  async function walkTo(target, { arriveDist = 4, timeoutMs = 45000, label = '' } = {}) {
    const start = Date.now();
    let lastPos = await readAnt(), lastMoveT = Date.now(), unsticks = 0;
    while (Date.now() - start < timeoutMs) {
      const a = await readAnt();
      const dx = target[0] - a.x, dz = target[1] - a.z;
      const dist = Math.hypot(dx, dz);
      if (dist < arriveDist) {
        await releaseAll();
        console.log(`  [${label}] arrived (${a.x.toFixed(1)},${a.z.toFixed(1)}) d=${dist.toFixed(1)} in ${((Date.now() - start) / 1000).toFixed(1)}s`);
        return { ok: true, a, dist };
      }
      const diff = angDiff(a.yaw, Math.atan2(dx, dz));
      const keys = new Set();
      if (diff > 0.08) keys.add('KeyA');
      else if (diff < -0.08) keys.add('KeyD');
      if (Math.abs(diff) < 0.9) keys.add('KeyW');
      await setKeys(keys);
      await page.waitForTimeout(80);

      if (Math.hypot(a.x - lastPos.x, a.z - lastPos.z) > 0.3) { lastMoveT = Date.now(); lastPos = a; }
      else if (Date.now() - lastMoveT > 3000) {
        if (unsticks < 3) {
          unsticks++;
          await setKeys(new Set(['KeyS'])); await page.waitForTimeout(700);
          await setKeys(new Set([unsticks % 2 ? 'KeyA' : 'KeyD', 'KeyS'])); await page.waitForTimeout(500);
          await releaseAll();
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

  /* ---- 1. the spawn is a landing site, not the best soil (defect #5) ----- */
  console.log('\n=== spawn ===');
  const spawn0 = await readAnt();
  const spawnSite = await page.evaluate(([x, z]) => {
    const s = window.__site(x, z);
    return { score: s.score, grade: s.grade.key, diggable: s.diggable, factors: s.factors.map((f) => f.label) };
  }, [spawn0.x, spawn0.z]);
  console.log('  at', { x: +spawn0.x.toFixed(1), z: +spawn0.z.toFixed(1) }, spawnSite);
  /* A tolerance rather than === 0: resolveDecorCollision pushes her to exactly
     touching, and "touching" comes back as a few times 1e-3 of residual
     depending on which prop she settled against. Anything under a tenth of a
     unit is contact, not penetration — she is 3.3 wide. */
  check(spawn0.pen < 0.1, `spawned inside a collider (penetration ${spawn0.pen.toFixed(3)})`);
  check(spawnSite.score <= 62, `spawn site scores ${spawnSite.score} — too good; looking for a site has to be worth doing (defect #5)`);
  check(spawnSite.diggable, 'spawn is on ground the queen cannot even dig — she should be able to walk off it, not be stuck on it');
  await shot('01-spawn');
  const hud0 = await hudText();
  console.log('  HUD objective:', hud0.objective);
  console.log('  HUD stock    :', hud0.stock);
  console.log('  HUD site     :', hud0.site);
  check(/Objectif/.test(hud0.objective), 'no objective line on screen (#29)');
  check(/Réserve : 0\//.test(hud0.stock), `stock line does not read as empty: "${hud0.stock}"`);

  /* ---- 2. harvest, carry, drop — as many times as it takes -------------- */
  const nodes = await page.evaluate(() => (typeof window.__nodes === 'function' ? window.__nodes() : window.__nodes).map((n) => ({ id: n.id, x: n.x, z: n.z, kind: n.kind, amount: n.amount, r: n.r })));
  console.log(`  ${nodes.length} resource nodes on the map`);

  const need = await page.evaluate(() => {
    const m = (document.getElementById('stock') || {}).textContent.match(/Réserve : \d+\/(\d+)/);
    return m ? +m[1] : 5;
  });
  console.log(`  founding needs ${need} units on the pile`);

  let trips = 0;
  for (let trip = 0; trip < need; trip++) {
    const state = await readAnt();
    // nearest node with anything left, from where she stands
    const live = await page.evaluate(() => (typeof window.__nodes === 'function' ? window.__nodes() : window.__nodes).filter((n) => n.amount > 0).map((n) => ({ id: n.id, x: n.x, z: n.z, kind: n.kind })));
    if (!live.length) { check(false, 'ran out of resource nodes before the pile was full'); break; }
    live.sort((p, q) => Math.hypot(p.x - state.x, p.z - state.z) - Math.hypot(q.x - state.x, q.z - state.z));
    const node = live[0];

    console.log(`\n=== trip ${trip + 1}/${need}: ${node.kind} at (${node.x}, ${node.z}) ===`);
    const walk = await walkTo([node.x, node.z], { arriveDist: 7, label: 'to node' });
    check(walk.ok, `could not reach the ${node.kind} node at (${node.x}, ${node.z})`);
    if (!walk.ok) break;

    /* walkTo() stops at arriveDist 7 and a node's reach is 6, so she can end a
       leg just outside it — and after taking a unit she has drifted again.
       Close the last unit before asserting instead of asserting on the frame
       the walk happened to end on: the thing under test is "a node in reach
       offers the harvest", not "the pathing overshoots by one unit". */
    let atNode = await hudText();
    for (let nudge = 0; nudge < 3 && !/maintenir/.test(atNode.prompt); nudge++) {
      await walkTo([node.x, node.z], { arriveDist: 4, label: 'close in' });
      atNode = await hudText();
    }
    console.log('  prompt:', atNode.prompt);
    check(/maintenir/.test(atNode.prompt), `standing on a node but the prompt does not offer the harvest: "${atNode.prompt}"`);
    if (trip === 0) await shot('02-at-node');

    // hold E: the harvest takes time, so this is a hold, and half-way
    // through it the progress must actually be on screen
    await page.keyboard.down('KeyE');
    await page.waitForTimeout(900);
    const mid = await hudText();
    const midState = await readAnt();
    if (trip === 0) {
      console.log('  mid-harvest prompt:', mid.prompt, '| progress', midState.progress);
      check(/Récolte…/.test(mid.prompt), `no visible harvest progress while holding E: "${mid.prompt}"`);
      check(midState.progress > 0.2 && midState.progress < 1, `harvest progress reads ${midState.progress} half-way through`);
      await shot('03-harvesting');
    }
    await page.waitForTimeout(1400);
    await page.keyboard.up('KeyE');
    await page.waitForTimeout(200);

    const carried = await readAnt();
    check(!!carried.carrying, `held E on a ${node.kind} node and came away with nothing`);
    if (trip === 0) {
      console.log('  carrying:', carried.carrying, '|', (await hudText()).stock);
      await shot('04-carrying');
    }
    if (!carried.carrying) break;

    // haul it to the site she is committing to
    const home = await walkTo(CACHE_SPOT, { arriveDist: 8, label: 'to pile' });
    check(home.ok, 'could not carry the load back to the chosen site');
    if (!home.ok) break;

    const beforeDrop = await hudText();
    if (trip === 0) console.log('  prompt at the site:', beforeDrop.prompt);
    check(/E —/.test(beforeDrop.prompt), `no drop offered at the pile: "${beforeDrop.prompt}"`);
    await hold('KeyE', 90);
    await page.waitForTimeout(250);

    const dropped = await readAnt();
    check(dropped.carrying === null, 'pressed E at the pile and she is still carrying it');
    check(dropped.stock === trip + 1, `pile holds ${dropped.stock} after ${trip + 1} drops`);
    trips++;
    console.log('  pile:', dropped.stock, JSON.stringify(dropped.cache && dropped.cache.items));
    if (trip === 0) await shot('05-first-drop');
  }

  const full = await readAnt();
  const hudFull = await hudText();
  console.log('\n=== pile full ===');
  console.log('  objective:', hudFull.objective);
  console.log('  stock    :', hudFull.stock);
  console.log('  prompt   :', hudFull.prompt);
  await shot('06-pile-full');
  check(full.stock >= need, `pile has ${full.stock}/${need} after ${trips} trips`);

  /* ---- 3. the refusals, asked BEFORE anything is dug -------------------- */
  // canFoundAt() answers 'already-founded' to every question once a nest
  // exists, so asking these after the dig (which is what this harness used to
  // do) tests nothing: all three came back 'already-founded' and the water
  // refusal read as a failure that was really an ordering bug here.
  console.log('\n=== refusals (nothing founded yet) ===');
  /* The two probe points this used to hard-code were written against the map
     as it was before it was scaled up: both now land outside the playable
     rectangle and come back 'bounds', which says nothing about the river.
     Sampled off the live map instead — a refusal reason found by walking a
     grid cannot go stale when the map moves again. */
  const refusals = await page.evaluate(() => {
    const found = {};
    for (let x = -300; x <= 320; x += 12) {
      for (let z = -20; z <= 470; z += 12) {
        const v = window.__canFound(x, z);
        if (v.ok || !v.reason) continue;
        if (!found[v.reason]) found[v.reason] = { x, z, text: v.text };
      }
    }
    return found;
  });
  for (const k of Object.keys(refusals)) {
    console.log(`  ${k.padEnd(16)} e.g. (${refusals[k].x}, ${refusals[k].z}) -> "${refusals[k].text}"`);
  }
  check(!!refusals.water && /eau/.test(refusals.water.text),
    'nowhere on the map is founding refused for being too near the water, with a sentence a player can read');
  check(!!refusals.slope || !!refusals.rock,
    'no ground anywhere is refused for its slope or its rock — every site on the map is diggable');

  /* ---- 4. found the colony (#33) ---------------------------------------- */
  console.log('\n=== founding ===');
  const verdict = await page.evaluate(([x, z]) => window.__canFound(x, z), [full.x, full.z]);
  console.log('  canFound here:', JSON.stringify(verdict));
  check(/maintenir/.test(hudFull.prompt) && /fonder/i.test(hudFull.prompt),
    `standing on a full pile but the prompt does not offer the founding: "${hudFull.prompt}"`);

  const mixBefore = await page.evaluate(() => window.__world6.foundedMix());
  console.log('  founded mix before the dig:', mixBefore.toFixed(2));
  check(mixBefore === 0, `the world is already switched to "colony founded" before anything is dug (${mixBefore})`);

  await page.keyboard.down('KeyE');
  await page.waitForTimeout(1800);
  const digging = await hudText();
  console.log('  mid-dig prompt:', digging.prompt);
  check(/Creusement…/.test(digging.prompt), `no visible digging progress: "${digging.prompt}"`);
  await shot('07-digging');
  await page.waitForTimeout(3000);
  await page.keyboard.up('KeyE');
  await page.waitForTimeout(400);

  const founded = await readAnt();
  const hudAfter = await hudText();
  console.log('  nest origin:', JSON.stringify(founded.nest));
  console.log('  objective  :', hudAfter.objective);
  console.log('  site line  :', hudAfter.site);
  console.log('  event      :', hudAfter.event);
  check(!!founded.nest, 'held E on a full pile on diggable ground and nothing was founded (#33)');
  check(/fond/i.test(hudAfter.site), `after founding, the site readout still reads as a site search: "${hudAfter.site}"`);
  await shot('08-founded');

  /* ---- 5. the first laying (#6) ----------------------------------------- */
  // The dig runs straight into the founding sequence: she goes down her own
  // shaft, closes it behind her, and lays in the dark. She is not under the
  // player's control for those few seconds, so from here the harness watches
  // phases instead of pressing keys — and screenshots every one of them,
  // because "the founding has never been seen" (PROGRESS.md defect 1) is what
  // this whole run exists to answer.
  console.log('\n=== the first laying ===');
  const readLaying = () => page.evaluate(() => (typeof window.__laying === 'function' ? window.__laying() : null));
  const first = await readLaying();
  if (!first) {
    check(false, 'window.__laying() is not there — the laying (#6) is not implemented');
  } else {
    check(!!first.phase, `the dig did not run into the founding sequence (phase ${JSON.stringify(first.phase)})`);
    const seen = new Set();
    let mixAtLay = null, broodAtLay = null, n = 0;
    const deadline = Date.now() + 45000;
    while (Date.now() < deadline) {
      const s = await readLaying();
      if (!s || !s.phase) break;
      /* Captured part-way through each phase, not on its first frame: the
         camera is damped, so the first frame of a phase is still showing the
         previous one's vantage point. The exception is `lay`, which is
         screenshotted the moment it starts *and* again later — the frame the
         clutch appears in is the one this whole harness exists to produce. */
      const ripe = s.phase === 'descend' ? s.t > 0.22 : s.t > 0.45;
      if (!seen.has(s.phase) && (ripe || s.phase === 'lay')) {
        seen.add(s.phase);
        console.log(`  phase ${s.phase.padEnd(8)} brood ${s.brood}  mix ${s.mix.toFixed(2)}  ${(await hudText()).event}`);
        await shot(`09-${++n}-${s.phase}`);
      }
      if (s.phase === 'lay' && mixAtLay === null) { mixAtLay = s.mix; broodAtLay = s.brood; }
      if (s.phase === 'lay' && s.t > 0.5 && !seen.has('lay-late')) { seen.add('lay-late'); await shot(`09-${++n}-clutch`); }
      await page.waitForTimeout(200);
    }
    const done = await readLaying();
    console.log('  after the sequence:', JSON.stringify(done));
    check(done && done.phase === null, 'the founding sequence never finished');
    check(done && done.brood >= 1, `no clutch was laid (brood ${done && done.brood})`);
    // §7a of design/ressources-et-fondation.md: the world switches at the
    // laying, and she is underground while it does — so what she is meant to
    // walk out into is a changed world.
    console.log('  mix when she started laying:', mixAtLay === null ? 'n/a' : mixAtLay.toFixed(2));
    check(mixAtLay !== null, 'never saw the laying phase');
    const mixAfter = await page.evaluate(() => window.__world6.foundedMix());
    console.log('  mix after the sequence   :', mixAfter.toFixed(2));
    check(mixAfter > 0.9, `the world never switched to "colony founded" (mix ${mixAfter})`);
  }

  // she is back on the surface and back under the player's control
  const back = await readAnt();
  const surfaceY = await page.evaluate(([x, z]) => window.__groundY(x, z), [back.x, back.z]);
  console.log('  back at', { x: +back.x.toFixed(1), z: +back.z.toFixed(1) }, 'y', back.y.toFixed(1), 'ground', surfaceY.toFixed(1));
  check(Math.abs(back.y - surfaceY) < 2.5, `she did not come back up: y ${back.y.toFixed(1)} against a ground at ${surfaceY.toFixed(1)}`);
  const hudLaid = await hudText();
  console.log('  objective:', hudLaid.objective);
  await shot('10-out-of-the-nest');
  const before = { x: back.x, z: back.z };
  await setKeys(new Set(['KeyW']));
  await page.waitForTimeout(1200);
  await releaseAll();
  const moved = await readAnt();
  check(Math.hypot(moved.x - before.x, moved.z - before.z) > 3,
    'the keys do nothing after the founding sequence — she is still locked in the cutscene');
  await shot('11-walking-again');

  /* ---- 4. the west clamp is the waterline, not a box (defect #4) --------- */
  console.log('\n=== walking into the river ===');
  const west = await walkTo([-260, 120], { arriveDist: 6, timeoutMs: 70000, label: 'west' });
  await releaseAll();
  const bank = await page.evaluate(() => {
    const a = window.__ant;
    return { x: a.x, z: a.z, toWater: window.__toWater(a.x, a.z), r: window.__antRadius };
  });
  console.log('  stopped at', { x: +bank.x.toFixed(1), z: +bank.z.toFixed(1) }, 'distance to the waterline', bank.toWater.toFixed(2), '(body radius', bank.r.toFixed(2) + ')');
  check(bank.toWater >= bank.r * 0.9,
    `stopped ${bank.toWater.toFixed(2)} from the waterline with a body radius of ${bank.r.toFixed(2)} — she is standing in the water (defect #4)`);
  await shot('09-riverbank');

  /* ---- report ----------------------------------------------------------- */
  console.log('\n=== console errors ===');
  console.log(consoleErrors.length ? consoleErrors.join('\n') : '  none');
  check(consoleErrors.length === 0, `${consoleErrors.length} console error(s)`);

  console.log('\n=== result ===');
  if (failures.length) { console.log(`${failures.length} failure(s):`); for (const f of failures) console.log('  - ' + f); }
  else console.log('all checks passed');
  console.log('screenshots in', outDir);

  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
