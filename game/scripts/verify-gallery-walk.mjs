// Live verification for #40 (the player half): walk into the nest, into the
// first gallery, and back out — on the real build, through real key events.
//
// PROGRESS.md defect #1 is "nobody has ever walked into the gallery", and the
// only thing that closes it is a screenshot of the queen standing in it,
// having arrived on her own legs. So the two shots this script exists to
// produce are `04-in-the-gallery.png` and `06-back-outside.png`, and every
// assertion around them is there to make sure they mean what they look like:
// a position written into the game's state would produce the same picture and
// prove nothing.
//
// Derived from verify-harvest.mjs (same server/browser/steering scaffolding,
// same rule that movement is always real keys). PROGRESS.md defect #2 is a
// throwaway harness that delivered no keystrokes at all; starting from the one
// that demonstrably does is cheaper than finding that out again.
//
// WHAT IS SET UP WITH A DEBUG HOOK, AND WHY THAT IS ALLOWED. Founding the
// colony and opening the first gallery are already proven end to end by
// verify-harvest.mjs (hold E on a full pile) and by the digger loop. Replaying
// them here would add two minutes to a run that is about something else. So
// the *world* is put into the state under test with __foundNest/__digGallery,
// and everything the queen's body does from there is keyboard. The line is:
// never write her position, never write the thing being asserted.
//
// Chromium MUST have ANGLE/D3D11 — headless Chromium's software rasteriser
// runs this scene at a few fps, and main.js's dt cap then makes in-game time
// crawl against wall-clock so every hold and every walk times out. Run it on
// an otherwise idle machine for the same reason.
//
// Usage: node scripts/verify-gallery-walk.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_gallery-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4179;
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
  await page.waitForFunction(() => window.__ant && window.__foundNest && window.__groundY, null, { timeout: 20000 });
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
      x: a.x, y: a.y, z: a.z, yaw: a.yaw, floorY: a.floorY,
      ground: window.__groundY(a.x, a.z),
      inside: n ? n.inside : null,
      roofed: n ? n.roofed : null,
      nestFloor: n ? n.floorY : null,
      headroom: n ? n.headroom : null,
      approx: n ? n.approx : null,
      carrying: h && h.carrying ? h.carrying.kind : null,
      stock: h && h.cache ? h.cache.total : 0,
      brood: window.__laying ? window.__laying().brood : null,
      phase: window.__laying ? window.__laying().phase : null,
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

  /* Same P-steering as verify-harvest.mjs: hold W, add a strafe key when the
     bearing and the current yaw disagree. Real keys, real camera-relative
     movement, no pathfinding — which is also why every target below is a
     point the queen can see a straight line to. */
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
        console.log(`  [${label}] arrived (${a.x.toFixed(1)},${a.z.toFixed(1)},y ${a.y.toFixed(1)}) d=${dist.toFixed(1)} in ${((Date.now() - start) / 1000).toFixed(1)}s`);
        return { ok: true, a, dist };
      }
      /* While a detour is running, steer off the straight line instead of at
         it. Backing up and re-aiming at the same target — what this did
         before — walks straight back into the rock it just left, which is
         how a walk over open meadow reported STALLED three times in a row.
         The offset alternates side and widens, so a stem that blocks one
         way round is not also blocking the other. */
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
          /* Widening past a right angle on purpose. A stem thicket is not one
             obstacle to step round, it is a wall to walk ALONG until it ends,
             and every detour capped under 90 degrees still drives into it at a
             shallower angle. Cycles 0.9 / 1.25 / 1.6 / 1.95 rad. */
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

  /* ---- 0. the hooks this run needs -------------------------------------- */
  const hooks = await page.evaluate(() => ({
    nest: typeof window.__nest === 'function',
    dig: typeof window.__payDig === 'function',
    lay: typeof window.__beginLaying === 'function',
  }));
  console.log('\n=== hooks ===', JSON.stringify(hooks));
  check(hooks.nest, 'window.__nest() exists (the controller knows whether she is underground)');
  check(hooks.dig, 'window.__payDig() exists');
  if (!hooks.nest || !hooks.dig) {
    console.log('\nmissing hooks — nothing further can be driven; stopping here.');
    await shot('00-no-hooks');
    await browser.close(); server.kill();
    process.exit(1);
  }

  /* ---- 1. one load onto the pile, before anything is dug --------------- */
  // The point of it is not the harvest (verify-harvest.mjs owns that) but what
  // it buys: a clutch laid *without* the scripted descent, from inside the
  // chamber she walked into herself. Done first, because the excavation is a
  // ninety-unit open cut and can easily end up lying between her and the node.
  console.log('\n=== one load onto the pile ===');
  const spawn0 = await readAnt();
  console.log('  spawn', { x: +spawn0.x.toFixed(1), z: +spawn0.z.toFixed(1) });
  const node = await page.evaluate(([x, z]) => {
    const list = (typeof window.__nodes === 'function' ? window.__nodes() : window.__nodes).filter((n) => n.amount > 0);
    list.sort((p, q) => Math.hypot(p.x - x, p.z - z) - Math.hypot(q.x - x, q.z - z));
    return list[0] ? { x: list[0].x, z: list[0].z, kind: list[0].kind } : null;
  }, [spawn0.x, spawn0.z]);
  if (node) {
    await walkTo([node.x, node.z], { arriveDist: 5, label: 'to node' });
    /* Held until she is actually carrying, not for a fixed 2800 ms. The hold
       is a paced in-game timer and the loop caps dt at 50 ms, so a wall-clock
       duration under-delivers exactly when the machine is busy — PROGRESS.md
       trap 5, and it is what made this step fail on some runs and pass on
       others with nothing changed. */
    await page.keyboard.down('KeyE');
    const holdUntil = Date.now() + 12000;
    let got = await readAnt();
    while (!got.carrying && Date.now() < holdUntil) {
      await page.waitForTimeout(200);
      got = await readAnt();
    }
    await page.keyboard.up('KeyE');
    await page.waitForTimeout(250);
    got = await readAnt();
    console.log('  carrying', got.carrying);
    if (got.carrying) {
      await page.keyboard.down('KeyE'); await page.waitForTimeout(120); await page.keyboard.up('KeyE');
      await page.waitForTimeout(300);
      got = await readAnt();
    }
    console.log('  pile', got.stock);
    check(got.stock >= 1, 'a unit is on the pile, so a clutch can be paid for');
  } else {
    check(false, 'there is a resource node left to harvest');
  }

  /* ---- 2. found a colony within walking distance ------------------------ */
  console.log('\n=== founding (set up with a hook: proven by verify-harvest.mjs) ===');
  const here = await readAnt();
  const site = await page.evaluate(([sx, sz]) => {
    let best = null;
    for (let a = 0; a < 64; a++) {
      const th = a / 64 * Math.PI * 2;
      for (let r = 26; r <= 70; r += 2) {
        const x = sx + Math.cos(th) * r, z = sz + Math.sin(th) * r;
        if (!window.__canFound(x, z).ok) continue;
        if (window.__decorPenetration(x, z, window.__antRadius + 6) > 0) continue;
        if (!best || r < best.r) best = { x, z, r };
      }
    }
    return best;
  }, [here.x, here.z]);
  console.log('  founding at', JSON.stringify(site));
  check(!!site, 'there is foundable ground within a short walk');
  if (!site) { await browser.close(); server.kill(); process.exit(1); }

  const founded = await page.evaluate(([x, z]) => {
    const r = window.__foundNest(x, z);
    const before = window.__faces();
    /* Pay the first face out in one go. The colony doing it with real
       fouisseuses is a different proof (the gauge, #51); what this run is
       about is walking through the result, and hatching a crew here would add
       two minutes to a test that is not about them. payDigFace is idempotent
       and the WORLD opens the room (contract §7), so this needs no ant. */
    const paid = before.map((f) => window.__payDig(f.id, f.needed));
    return { found: r, faces: before, paid, nest: window.__nest(), path: window.__descentPath() };
  }, [site.x, site.z]);
  console.log('  foundNest ->', JSON.stringify(founded.found));
  console.log('  faces at founding ->', JSON.stringify(founded.faces));
  console.log('  paid ->', JSON.stringify(founded.paid));
  check(founded.found && founded.found.ok, 'the chamber was dug');
  check(founded.faces.length > 0, 'founding leaves a dig face to work, in front of her');
  check(!!founded.nest && founded.nest.rooms.length > 1, 'the hall is open');
  if (!founded.nest || founded.nest.rooms.length < 2) { await browser.close(); server.kill(); process.exit(1); }

  const nest = founded.nest;
  console.log('  footprint:', nest.approx
    ? "STAND-IN — world/**'s nestFootprint() is not there yet, so this run proves the controller against a guess"
    : "the world's own nestFootprint() (#41)");
  console.log('  mouth  ', JSON.stringify(nest.mouth));
  console.log('  chamber', JSON.stringify(nest.chamber));
  console.log('  entry  ', JSON.stringify(nest.entry));
  console.log('  rooms  ', JSON.stringify(nest.rooms));
  /* The cut curves (world/excavation.js RAMP_TURN), so "walk at the chamber"
     walks at a wall. A player follows the trench they can see; the harness has
     no eyes, so it follows the centre line the world publishes for exactly
     this purpose (contract §6 descentPath). It is still every step of the way
     on real keys — a route is not a teleport. */
  const descent = founded.path || [];
  console.log(`  descent path: ${descent.length} points, ${descent.length ? descent[0].y.toFixed(1) : '?'} -> ${descent.length ? descent[descent.length - 1].y.toFixed(1) : '?'}`);
  check(descent.length > 2, 'the world publishes a descent path to follow');

  /* ---- 3. walk in ------------------------------------------------------- */
  console.log('\n=== walking into the nest ===');
  /* The threshold is descentPath()[0], the first sample of the ramp's own
     centre line, and the footprint's edge runs through it: a step short of it
     is honestly outside, so an arrival radius is not a place to be generous.
     She walks to it and then crosses it — a couple of units along the same
     centre line, still on the sill and nowhere near descending — because the
     claim under test is that the doorway you can see is already the nest, with
     no dead strip between the two. */
  await walkTo([nest.entry.x, nest.entry.z], { arriveDist: 2.5, timeoutMs: 70000, label: 'to the entrance' });
  const sill = descent[1] || nest.entry;
  await walkTo([sill.x, sill.z], { arriveDist: 2.0, timeoutMs: 20000, label: 'over the sill' });
  await shot('01-at-the-entrance');
  const atDoor = await hudText();
  console.log('  objective:', atDoor.objective);
  const onSill = await readAnt();
  check(onSill.inside === true, 'standing on the threshold already counts as being in the excavation');

  let down = { ok: false };
  for (let i = 3; i < descent.length; i += 3) {
    down = await walkTo([descent[i].x, descent[i].z], { arriveDist: 6, timeoutMs: 40000, label: `down u${i}` });
    if (!down.ok) break;
  }
  if (down.ok) down = await walkTo([nest.chamber.x, nest.chamber.z], { arriveDist: 8, timeoutMs: 40000, label: 'into the chamber' });
  const inChamber = await readAnt();
  console.log('  in the chamber:', JSON.stringify({
    x: +inChamber.x.toFixed(1), z: +inChamber.z.toFixed(1),
    y: +inChamber.y.toFixed(1), lawn: +inChamber.ground.toFixed(1), inside: inChamber.inside,
  }));
  check(down.ok, 'she walked all the way down to the chamber');
  check(inChamber.inside === true, 'the controller knows she is underground');
  check(inChamber.y < nest.mouth.y - 8,
    `she is ${(nest.mouth.y - inChamber.y).toFixed(1)} below the meadow at her own doorstep — that has to be most of the nest's depth`);
  console.log('  headroom over her:', inChamber.headroom, ' roofed:', inChamber.roofed);
  await shot('02-in-the-chamber');

  /* ---- 4. lay without the cutscene (PROGRESS.md defect #3) -------------- */
  console.log('\n=== laying from where she stands ===');
  const beforeLay = await readAnt();
  const layPrompt = await hudText();
  console.log('  prompt:', layPrompt.prompt);
  console.log('  E resolves to:', JSON.stringify(await page.evaluate(() => window.__act())));
  // LAY_SECONDS is 2.2 and is not scaled by the test pace: hold past it
  await page.keyboard.down('KeyE');
  await page.waitForTimeout(1500);
  const midLay = await readAnt();
  console.log('  mid-hold:', (await hudText()).prompt, JSON.stringify(await page.evaluate(() => window.__act())));
  await page.waitForTimeout(1800);
  await page.keyboard.up('KeyE');
  await page.waitForTimeout(400);
  const afterLay = await readAnt();
  console.log('  brood', beforeLay.brood, '->', afterLay.brood, ' phase during:', midLay.phase, '/', afterLay.phase);
  check(afterLay.brood > beforeLay.brood, 'holding E in her own chamber lays a clutch');
  check(midLay.phase === null && afterLay.phase === null,
    `she laid without being taken away by the scripted descent (phase was ${midLay.phase}/${afterLay.phase})`);
  check(afterLay.inside === true, 'she is still standing in her chamber after laying, under the player\'s hand');
  await shot('03-clutch-laid-in-place');

  /* ---- 5. THE SHOT: the queen in the hall ------------------------------- */
  console.log('\n=== into the hall ===');
  const hall = nest.latestRoom;
  console.log('  hall', JSON.stringify(hall));
  const deep = await walkTo([hall.x, hall.z], { arriveDist: 5, timeoutMs: 60000, label: 'into the hall' });
  const inHall = await readAnt();
  console.log('  in the hall:', JSON.stringify({
    x: +inHall.x.toFixed(1), z: +inHall.z.toFixed(1),
    y: +inHall.y.toFixed(1), lawn: +inHall.ground.toFixed(1), inside: inHall.inside,
  }));
  check(deep.ok, 'she walked from the chamber through the tunnel into the hall');
  check(inHall.inside === true, 'she is inside the nest footprint in the hall');
  check(inHall.y < nest.mouth.y - 8, 'she is a nest depth under the meadow in the hall');
  check(inHall.roofed === true, 'there is soil over her head in the hall');
  const dFromChamber = Math.hypot(inHall.x - nest.chamber.x, inHall.z - nest.chamber.z);
  check(dFromChamber > nest.chamber.r, 'she is ' + dFromChamber.toFixed(1) + ' from the chamber centre, i.e. properly out of the founding room');
  await shot('04-in-the-gallery');

  /* ---- 5b. the walls let her past (#49) ---------------------------------
     The thing this harness missed for two rounds: it followed the centre line,
     where there is nothing to touch. The round-13 gallery published 3.1 of
     walkable half-width for a body of radius 3.3 and no run ever noticed.

     So: aim at a point well OUTSIDE the hall, on the far side, and hold the
     keys. A wall that slides puts her against it and lets the walk continue
     along it; a wall that stops dead leaves her where she first touched it.
     Either way she must still be in the nest at the end — sliding is not a
     way out. */
  console.log('\n=== leaning on the walls ===');
  const beforeLean = await readAnt();
  const outward = [
    hall.x + (hall.x - nest.chamber.x) * 3,
    hall.z + (hall.z - nest.chamber.z) * 3,
  ];
  await walkTo(outward, { arriveDist: 4, timeoutMs: 18000, label: 'into the far wall' });
  const leaned = await readAnt();
  const slid = Math.hypot(leaned.x - beforeLean.x, leaned.z - beforeLean.z);
  console.log('  she moved ' + slid.toFixed(1) + ' while pressed into the wall, inside=' + leaned.inside);
  check(leaned.inside === true, 'leaning on a wall never pushes her out of the nest');
  check(slid > 3, 'pressing into a wall still moves her along it (' + slid.toFixed(1) + ' units), it does not pin her');
  await shot('04b-against-the-wall');

  /* ---- 6. and back out -------------------------------------------------- */
  console.log('\n=== back out ===');
  await walkTo([nest.chamber.x, nest.chamber.z], { arriveDist: 9, timeoutMs: 40000, label: 'back to the chamber' });
  for (let i = descent.length - 3; i >= 0; i -= 3) {
    const up = await walkTo([descent[i].x, descent[i].z], { arriveDist: 6, timeoutMs: 40000, label: `up u${i}` });
    if (!up.ok) break;
  }
  await shot('05-at-the-entrance-from-inside');
  // clear of the cut, out the way she came in
  const back0 = descent[0], back1 = descent[Math.min(3, descent.length - 1)];
  const away = [
    back0.x + (back0.x - back1.x) * 2.5,
    back0.z + (back0.z - back1.z) * 2.5,
  ];
  const out = await walkTo(away, { arriveDist: 7, timeoutMs: 60000, label: 'out onto the lawn' });
  const outside = await readAnt();
  console.log('  outside:', JSON.stringify({
    x: +outside.x.toFixed(1), z: +outside.z.toFixed(1),
    y: +outside.y.toFixed(1), lawn: +outside.ground.toFixed(1), inside: outside.inside,
  }));
  check(out.ok, 'she walked back out of her own nest');
  check(outside.inside === false, 'the controller has handed her back to the surface');
  check(Math.abs(outside.y - outside.ground) < 2.0,
    `back outside but standing ${(outside.y - outside.ground).toFixed(1)} off the lawn`);
  await shot('06-back-outside');

  /* ---- 7. the scripted descent is a cutscene you can cut --------------- */
  if (hooks.lay) {
    console.log('\n=== the scripted descent can be skipped ===');
    const b0 = await readAnt();
    const began = await page.evaluate(() => window.__beginLaying());
    console.log('  begin ->', began);
    await page.waitForTimeout(1200);
    const during = await readAnt();
    console.log('  phase during:', during.phase);
    check(!!during.phase, 'the scripted descent is running');
    await shot('07-cutscene-running');
    await page.keyboard.down('KeyE'); await page.waitForTimeout(120); await page.keyboard.up('KeyE');
    await page.waitForTimeout(600);
    const skipped = await readAnt();
    console.log('  phase after E:', skipped.phase, ' brood', b0.brood, '->', skipped.brood);
    check(skipped.phase === null, 'E cuts the scripted descent');
    check(skipped.brood > b0.brood, 'cutting it still lays the clutch it was there to show');
    /* What is under test is that input is LIVE again, not the direction she
       happens to be facing when the cut lands. So W is tried, and if she has
       been left nose-first into a chamber wall it is tried again a quarter
       turn round — a wall stopping her is the containment working, and
       reporting that as "the cutscene never gave the keys back" is how this
       check failed on some runs and passed on others with nothing changed. */
    const p0 = { x: skipped.x, z: skipped.z };
    console.log(`  after the cut: (${p0.x.toFixed(1)},${p0.z.toFixed(1)}) inside=${skipped.inside} roofed=${skipped.roofed}`);
    let moved = null, travelled = 0;
    for (const turn of [[], ['KeyA'], ['KeyD']]) {
      if (turn.length) { await setKeys(new Set(turn)); await page.waitForTimeout(700); await releaseAll(); }
      await setKeys(new Set(['KeyW'])); await page.waitForTimeout(1200); await releaseAll();
      moved = await readAnt();
      travelled = Math.hypot(moved.x - p0.x, moved.z - p0.z);
      if (travelled > 2.5) break;
    }
    console.log(`  walked ${travelled.toFixed(1)} to (${moved.x.toFixed(1)},${moved.z.toFixed(1)})`);
    check(travelled > 2.5, 'the keys move her again the moment the cutscene is cut');
    await shot('08-after-the-cut');
  } else {
    check(false, 'window.__beginLaying() is not there — the cutscene skip cannot be driven');
  }

  /* ---- report ----------------------------------------------------------- */
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
