import * as world from '../world/index.js';
import { antState } from '../core/antState.js';
import { groundY, distanceToWater } from '../world/index.js';
import { PLAYER_AVATAR, WORKER, DIGGER, collideRadius } from './avatar.js';
import { buildOutlineHull } from '../core/outline.js';
import { buildAntMesh } from './antMesh.js';
import { createInput } from './input.js';
import { createCameraRig } from './camera.js';
import { grassBlades } from './climb.js';
import { spawnEntity, updateEntity, driveFromInput, removeEntity, resolveProfile } from './entities.js';
import { deepestPenetration, resolveDecorCollision, mushroomRadii } from './decorCollision.js';
import { evaluateSite, siteHeadline, siteDetail } from './siteQuality.js';
import { createInteraction } from './interaction.js';
import { createProps } from './props.js';
import { resourceNodes } from './resources.js';
import { nestOrigin, canFound, refusalText, isFounded } from './founding.js';
import { createHud } from './hud.js';
import { createTargetMarker } from './marker.js';
import { dampAngle } from './mathUtil.js';
import {
  createBroodState, lay as layEgg, update as updateBrood, nextHatchIn,
  broodCount, layRefusalText, EGG_COST,
} from './brood.js';
import { createWorkerSwarm } from './workers.js';

// #38: the two castes the queen can choose between at the ponte — read off
// avatar.js rather than re-typed as string literals, so a rename of either
// id would fail to compile here instead of silently mismatching brood.js's
// caste-as-string convention (see brood.js's header for why brood.js itself
// still keeps its own literal default — it cannot import this file at all).
const SELECTABLE_CASTES = [WORKER.id, DIGGER.id];

/* design/api-monde-gameplay.md's consumption rule: player/** reads the
   world's exports through a namespace copy, never `world.foo` directly, so a
   not-yet-shipped export is a plain `undefined` to branch on rather than a
   bundler error. Used below only for the founding-chamber/populateNest/
   setFoundedMix reads the #6 ponte needs — the pre-existing groundY/
   distanceToWater imports above predate this file's involvement with that
   rule and are left alone (not this ticket's scope). */
const W = { ...world };

/**
 * Wires up the whole player: ant state, IK mesh, input, camera, movement +
 * underground/lawn collision (#21), decor non-penetration (#4/#16), stem/tree
 * climbing (#5), the site reading the founding queen walks around with (#32),
 * the harvest/founding loop (#29/#33 — interaction.js owns which verb the
 * interact key means, this file only routes input into it and its text out to
 * the HUD), and the ponte (#6 §2 — brood.js owns the pure cost/incubation
 * logic, this file is the only thing that calls it: the P key, the founded
 * ramp it starts, and populateNest(n)). Call update(dt, elapsed) once a
 * frame, after world.update() so the ant walks on this frame's terrain,
 * before renderer.render() so the camera it moved is the one that gets
 * drawn.
 */

/* Where the game opens (design/boucle-de-jeu.md §0, #32): out on the lawn,
   the queen alone, no nest. Not world/underground.js's START (the queen's
   chamber) any more — that nest is now the "already founded" state, reached
   in play, and the prologue happens before it exists.

   Replayed against the finished world (PROGRESS.md defect #5: the old
   (20, 110) predated the relief, and the first pick made against the relief
   alone predated the resource nodes and the real shade). Surveyed through the
   game's own evaluateSite()/canFoundAt()/grass footprints over the whole map,
   this is the open ground on the east flank, and it was chosen for what it
   denies as much as for what it offers:
     - it is *not* good ground. Site ~51/100 on a map that reaches 90, and the
       90s are all 280 units west, past the bowl, near the tree. If the queen
       landed on the best soil there is, looking for a site would be a
       formality — which is exactly what defect #5 objects to.
     - it is open. Eight grass blades within 22 units against a median of 14
       (and 33 at the worst): the first thing on screen is sky, ground and
       the far rim rather than the inside of a thicket, which is what a
       landing has to read as. The first pick failed on precisely this, and
       it took the capture to see it.
     - there is something to do here and somewhere to go: resource nodes
       within ~30 units for the first load, the bowl a short walk west, the
       tree on the horizon beyond it, and the pre-#11 gallery mouth 220 units
       away — out of sight, which it has to be while it is still a leftover.
   Verified clear of every decor collider, and foundable (canFoundAt), before
   it was chosen. */
const SURFACE_START = [140, 170];
const SPAWN_YAW = -Math.PI / 2; // facing -X: the meadow, the bowl and the far tree

// site readout cadence: often enough that walking a few body-lengths updates
// it, rare enough that the grass scans in siteQuality.js never show up in a
// frame budget
const SITE_INTERVAL = 0.25, SITE_MOVE = 3;

/* #6 §2 — the ponte. Capacity IS world/founding.js's own MAX_BROOD, imported
   rather than copied (#35): that file pre-builds exactly that many hidden
   brood piles per chamber and populateNest(n) can only ever reveal up to that
   many, so a brood state allowed to grow past it would incubate eggs the
   couvoir has no pile left to show — a lay that "succeeds" but is invisible
   underground. It used to be a hand-synced literal here; the world barrel
   exports it now, so the two cannot drift. */
const BROOD_ROOM_CAPACITY = world.MAX_BROOD;

// design/ressources-et-fondation.md §7a: "anime founded sur 6 s" — the same
// literal main.js's own FOUND_FADE already carries. Duplicated here (not
// imported) because main.js currently starts *its* ramp from foundNest()
// (the dig) rather than from the first ponte, which this file's ramp is
// supposed to fix — see the session report on why that conflict is not
// resolved by this ticket alone.
const FOUND_FADE_SECONDS = 6.0;

export function createPlayerController({ scene, camera, domElement, profile = PLAYER_AVATAR }) {
  /* #36: the player is `entities[0]` — the one entity in the (currently
     one-long) list that is `controlled: true` — not a hand-built record next
     to the entity machinery. A fixed string id ('player') rather than an
     auto-incremented one keeps it stable/greppable in the spatial index
     regardless of how many unpiloted entities spawn or despawn around it. */
  const ant = spawnEntity(profile, SURFACE_START[0], 0, SURFACE_START[1], { id: 'player', controlled: true, yaw: SPAWN_YAW });
  ant.y = groundY(ant.x, ant.z);
  // she is 2.2x a worker: a spawn point that was clear for a worker can still
  // overlap a pebble or a stem for her. Two resolves settle it (see
  // decorCollision.js on why the second pass exists) before the first frame,
  // rather than having her visibly shoved aside on frame one.
  resolveDecorCollision(ant, 0);
  resolveDecorCollision(ant, 0);
  ant.y = groundY(ant.x, ant.z);

  const { group, updatePose } = buildAntMesh(profile);
  scene.add(group);
  /* The outline is built from the finished mesh rather than inside
     antMesh.js, so the rendering trick and the anatomy stay separable: a
     second creature gets an outline by being passed through here, not by
     having one baked into how it is modelled. */
  scene.add(buildOutlineHull(group));

  const input = createInput(domElement, profile);
  // the boom starts behind her, not behind +Z: camYaw defaults to 0 in
  // input.js, which with a spawn facing west would open the game on a side
  // view of the queen instead of on the meadow she is looking at
  input.state.camYaw = SPAWN_YAW;
  const cameraRig = createCameraRig(camera);
  const hud = createHud();
  const marker = createTargetMarker(scene);
  const interaction = createInteraction({ profile });
  // Props (carried item, the pile, stand-in resource markers) are built here,
  // before main.js's one-shot scene.traverse() applies the nest shading — see
  // props.js.
  const props = createProps({ scene, profile });
  // prime the rig so frame 1 has a valid eye/aim to build camera-relative
  // input from (mirrors the old prototype's camReady snap-in) — see
  // movement.js's computeWishDir() for why this ordering matters.
  cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, 0);

  /* #6 §2 — the ponte. P rather than E: E is already a whole priority ladder
     (interaction.js), and "pondre" is a new verb with no ambiguity to
     resolve (unlike climb/harvest/drop/found, it never competes with
     anything else the queen could mean by pressing a key) — a dedicated key
     is simpler than teaching the ladder a fifth rung. Listened for directly
     here rather than through input.js, which owns only the verbs that
     existed before this ticket; adding a generic "named key" API to it for
     one caller would be speculative. Edge-triggered, same contract as
     input.js's own consumeInteract()/consumeHelp(). */
  const brood = createBroodState(BROOD_ROOM_CAPACITY);
  // #37: every hatch drains brood.workersAvailable into one worker entity,
  // scattered around the nest's own surface origin (nestOrigin(), read again
  // below since founding can happen after this line runs) — see
  // workers.js's header for why `controlled: true` is the right mechanism
  // for an AI here, not a special case of this file's own player drive.
  const workerSwarm = createWorkerSwarm({ scene });
  let pontePressed = false;
  function onPonteKey(e) { if (e.code === 'KeyP') pontePressed = true; }
  window.addEventListener('keydown', onPonteKey);
  function consumePonte() { const v = pontePressed; pontePressed = false; return v; }

  /* #38 — which caste the NEXT lay produces. `C` was picked over the already-
     taken keys (E is the whole interaction ladder, H toggles help, P lays,
     WASD/ZQSD/arrows+Shift move — see input.js/hud.js's CONTROLS) and is free.
     Same edge-triggered pattern as the P listener just above: a dedicated
     key, not routed through input.js (which only owns the verbs that existed
     before this ticket, same reasoning as the ponte key's own comment).
     Visible BEFORE the first lay (broodStatusText() below reads it every
     frame the colony is founded, regardless of whether P has ever been
     pressed) — the ticket's own requirement 3, not just a side effect of
     showing it after. */
  let selectedCaste = WORKER.id;
  let castePressed = false;
  function onCasteKey(e) { if (e.code === 'KeyC') castePressed = true; }
  window.addEventListener('keydown', onCasteKey);
  function consumeCaste() { const v = castePressed; castePressed = false; return v; }

  let layMessage = null, layMessageTimer = 0;
  // Seconds elapsed since the FIRST successful lay, or null before it — the
  // founded-mix ramp's own clock (design/ressources-et-fondation.md §7a: the
  // switch starts at the first ponte, not at foundNest()'s dig). See the
  // session report: main.js currently starts *its* copy of this ramp from
  // the dig instead and will keep overwriting whatever this drives every
  // frame, until that trigger is moved there — this file's ramp is written
  // correctly regardless, so it is one line away from working once that is
  // fixed.
  let foundedRampT = null;

  /** Is the queen standing in the founded chamber right now? Planar distance
   *  to the chamber centre is enough of a gate for a prototype verb (same
   *  generosity as harvest.js's own CACHE_RADIUS check) — the shaft leading
   *  down to it is much narrower (SHAFT_R=4.2 in world/founding.js) than the
   *  chamber itself (ROOM_R=14), so a queen inside that radius is for all
   *  practical purposes inside the room, not still in the shaft above it. */
  function inBroodChamber(ant) {
    const nest = typeof W.getFoundedNest === 'function' ? W.getFoundedNest() : null;
    if (!nest) return false;
    return Math.hypot(ant.x - nest.chamber.x, ant.z - nest.chamber.z) <= nest.chamber.r;
  }

  /** `label` with an 's' if `n` isn't exactly one — the two labels in play
   *  (avatar.js's 'ouvrière'/'creuseuse') both pluralize by a bare 's', so no
   *  lookup table is needed for this round; a caste whose label needs a
   *  different plural would need this to grow, not a caller. */
  function pluralLabel(casteId, n) {
    const label = resolveProfile(casteId).label;
    return n === 1 ? label : `${label}s`;
  }

  /** The brood HUD line: steady-state couvain/incubation/hatch readout,
   *  replaced for a few seconds by whatever the last P press just said (a
   *  success, a refusal, or nothing pressed at all — a hatch landing on its
   *  own gets the same courtesy, see the `hatched` block in update()).
   *  #38: also the ONLY place the selected caste and the population split
   *  are shown — visible as soon as the colony exists, before the player has
   *  ever pressed P (requirement 3 of the ticket), and split by caste
   *  (requirement 4) rather than folded into one number the way
   *  `workersAvailable` used to be. */
  function broodStatusText() {
    const next = nextHatchIn(brood);
    const nextTxt = next === null ? '' : ` · prochaine éclosion : ${Math.ceil(next)} s`;
    const pop = workerSwarm.countByCaste();
    const popTxt = SELECTABLE_CASTES
      .map((id) => `${pop[id] || 0} ${pluralLabel(id, pop[id] || 0)}`)
      .join(', ');
    const line = `Couvain : ${broodCount(brood)}/${brood.capacity}${nextTxt}`
      + ` · population : ${popTxt}`
      + ` · à pondre : ${resolveProfile(selectedCaste).label} (C pour changer)`;
    if (layMessageTimer > 0) return `${line} — ${layMessage}`;
    return `${line} · P (dans le couvoir) — pondre, coûte ${EGG_COST}`;
  }

  let siteTimer = 0, siteAt = null, site = null, nestCard = null;

  function refreshSite(dt) {
    siteTimer -= dt;
    const moved = siteAt ? Math.hypot(ant.x - siteAt[0], ant.z - siteAt[1]) : Infinity;
    if ((site || nestCard) && siteTimer > 0 && moved < SITE_MOVE) return;
    siteTimer = SITE_INTERVAL;
    siteAt = [ant.x, ant.z];

    /* Once the colony is founded, the readout changes what it is *about*
       (#33): "is this a good place to dig" has been answered for good, so the
       line stops following her feet and becomes the card of the place she
       chose. Where the nest is relative to her is the objective line's job
       (interaction.js), not this one's. */
    const origin = nestOrigin();
    if (origin) {
      if (!nestCard) nestCard = evaluateSite(origin.x, origin.z);
      hud.setSite(`Nid fondé — site ${nestCard.grade.label} (${nestCard.score}/100)`,
        siteDetail(nestCard), true);
      return;
    }
    site = evaluateSite(ant.x, ant.z);
    hud.setSite(siteHeadline(site), siteDetail(site), site.diggable);
  }

  function update(dt, elapsed) {
    const intent = input.readMoveIntent();

    /* E, resolved in context (interaction.js): climb on/off, harvest a node,
       drop what she carries, or dig the first chamber. Both readings of the
       key go down — the consumed edge for the instant verbs, the raw held
       state for the ones that take time — because which of the two matters is
       the ladder's decision, not this file's. Run before movement, so a climb
       entered this frame is walked this frame (the order the old prototype's
       frame() used). */
    if (input.consumeHelp()) hud.toggleControls();
    const act = interaction.update(ant, input.consumeInteract(), input.isInteractHeld(), dt);

    // #36: movement/legs go through the SAME updateEntity() an unpiloted
    // worker uses (player/entities.js) — this file's only job is to build
    // the `drive` (real input + this frame's camera) a controlled entity
    // reads instead of a `goal`. Climbing (forward/back along a blade/
    // trunk's own curve; left/right unused, see climb.js) is still routed
    // through the same call: updateEntity() branches on `ant.climb`, not on
    // a second call site here.
    updateEntity(ant, dt, driveFromInput(intent, cameraRig.eye, cameraRig.aim));
    updatePose(ant, ant.legState, elapsed);
    group.position.set(0, 0, 0); // parts are already placed in world space (see antMesh.js)

    antState.position.set(ant.x, ant.y, ant.z);
    antState.radius = collideRadius(profile); // footprint half-width, for grass contact bend

    props.update(ant, interaction.harvest.state);

    // #38: C cycles the caste the NEXT lay will produce — independent of E's
    // ladder and of P itself, same reasoning as the ponte key below.
    if (consumeCaste()) {
      const i = SELECTABLE_CASTES.indexOf(selectedCaste);
      selectedCaste = SELECTABLE_CASTES[(i + 1) % SELECTABLE_CASTES.length];
    }

    /* #6 §2 — the ponte, independent of E's ladder above (see the block that
       declares `brood` for why). Read before movement/props above have any
       bearing on it and before the HUD calls below need its result. #38: the
       clutch this produces is whichever caste is currently selected — see
       brood.js's lay() for why that is passed as the LAST argument (a plain
       caste-id string, not an avatar.js profile object: brood.js imports
       nothing and cannot know that object exists). */
    if (consumePonte()) {
      const res = layEgg(brood, interaction.harvest.state.cache, {
        founded: isFounded(), inChamber: inBroodChamber(ant),
      }, selectedCaste);
      layMessageTimer = 3.2;
      if (res.ok) {
        layMessage = `Un œuf est pondu — caste : ${resolveProfile(selectedCaste).label}`
          + ` (${EGG_COST} unités prélevées sur la réserve).`;
        if (foundedRampT === null) foundedRampT = 0; // starts the ramp — see its declaration
      } else {
        layMessage = `Pondre : ${layRefusalText(res.reason)}`;
      }
    }
    // A hatch this frame gets its own line, but never steps on a fresher
    // lay/refusal line from the block above (same frame, same priority the
    // press just claimed). #38: read brood.workersAvailable BEFORE
    // workerSwarm.spawnFromBrood() drains it (a few lines below) so this can
    // still say WHICH caste hatched, not just how many — updateBrood() only
    // ever returns the total across every caste (see its own doc).
    const hatched = updateBrood(brood, dt);
    if (hatched > 0 && layMessageTimer <= 0) {
      const byCaste = Object.keys(brood.workersAvailable)
        .map((id) => `${brood.workersAvailable[id]} ${pluralLabel(id, brood.workersAvailable[id])}`)
        .join(', ');
      layMessage = hatched === 1
        ? `Un œuf a éclos : ${byCaste} prête.`
        : `${hatched} œufs ont éclos : ${byCaste} prêtes.`;
      layMessageTimer = 3.2;
    }
    if (layMessageTimer > 0) layMessageTimer -= dt;

    // #37: whatever workersAvailable holds right now becomes exactly that
    // many worker entities, born at the nest's own surface mouth — read
    // AFTER updateBrood() above so a hatch this very frame is drained the
    // same frame it happens, never left for the next one. A no-op on every
    // frame nothing hatched (spawnFromBrood drains to zero regardless, so
    // there is simply nothing left to spawn) and on every frame before the
    // colony is founded (brood.workersAvailable can only be nonzero after a
    // lay, which itself requires `founded` — see brood.js's lay()).
    const nestNow = nestOrigin();
    if (nestNow) workerSwarm.spawnFromBrood(brood, nestNow.x, nestNow.z);
    workerSwarm.update(dt, elapsed, interaction.harvest.state.cache);

    // design/ambiance-prologue.md §2c: "chaque ponte ajoute sa lampe" — driven
    // by laidTotal (never decreasing), NOT by broodCount()/clutches.length
    // (currently incubating, which drops on every hatch). The latter was
    // tried first and was exactly backwards: a colony succeeding at hatching
    // would have gone dark one lamp at a time — see brood.js's laidTotal doc.
    // Clamped to what the chamber can actually show (populateNest(n) only
    // ever reveals up to world/founding.js's MAX_BROOD, mirrored here by
    // BROOD_ROOM_CAPACITY==brood.capacity); populateNest() is a no-op before
    // founding regardless.
    if (typeof W.populateNest === 'function') {
      W.populateNest(Math.min(brood.laidTotal, brood.capacity));
    }

    if (foundedRampT !== null) {
      foundedRampT = Math.min(FOUND_FADE_SECONDS, foundedRampT + dt);
      if (typeof W.setFoundedMix === 'function') W.setFoundedMix(foundedRampT / FOUND_FADE_SECONDS);
    }

    refreshSite(dt);
    hud.setPrompt(interaction.promptText(ant, act));
    hud.setObjective(interaction.objectiveText(ant));
    hud.setStock(interaction.inventoryText());
    hud.setEvent(interaction.message());
    hud.setHold(interaction.holdProgress(act));
    hud.setBrood(isFounded() ? broodStatusText() : null);
    /* The ring reads the same `act` the prompt does, so what is circled and
       what is named can never be two different things. */
    const mark = interaction.targetMark(ant, act);
    marker.show(mark, mark ? mark.radius : 0, mark ? mark.blocked : false, elapsed);
    // the help panel closes itself the first time she actually picks something
    // up: by then it has done its job, and a panel still up after that is noise
    if (interaction.harvest.state.carrying) hud.closeControls();
    interaction.endFrame();

    // the camera drifts back behind the ant while it walks, so the pair
    // converges instead of chasing each other — suppressed while climbing,
    // same as the old prototype (ant.yaw never changes there, so chasing it
    // would just freeze camYaw wherever it happened to be on entry)
    if (!input.state.dragging && !ant.climb && intent.mag > 0.02) {
      input.state.camYaw = dampAngle(input.state.camYaw, ant.yaw, 2.2, dt);
    }
    cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, dt);
  }

  // Debug/verification hooks (not gameplay, mirrors main.js's window.__ant):
  // __decorPenetration lets scripts/verify-room-access.mjs assert the ant is
  // never inside a rock/mushroom/stem/trunk, measured against the very radii
  // the collision resolver uses (#4/#16); __site lets it assert the site
  // reading agrees with where the ant is standing (#32).
  if (typeof window !== 'undefined') {
    window.__decorPenetration = deepestPenetration;
    window.__antRadius = collideRadius(profile);
    window.__site = (x, z) => evaluateSite(x, z);
    window.__avatar = profile;
    window.__mushroomRadii = mushroomRadii;
    window.__grass = grassBlades();  // so the harness can walk to a real climbable stem
    // #29/#33: the harness has to know where a node is in order to walk to
    // it, and what the loop thinks she is holding — it still *drives* with
    // real key events.
    window.__nodes = resourceNodes;
    window.__harvest = () => interaction.harvest.state;
    window.__nestOrigin = nestOrigin;
    // the founding verdict + the sentence it produces, so the harness can
    // check the refusals for ground the queen would have to walk minutes to
    // reach (#33), and the waterline the movement clamp now follows (#4)
    window.__canFound = (x, z) => { const v = canFound(x, z); return { ...v, text: refusalText(v.reason) }; };
    window.__toWater = distanceToWater;
    // #6: so a harness can lay/advance without a real keyboard, and read the
    // verdict/state the HUD is built from.
    window.__brood = brood;
    // #38: optional casteId, defaulting to whatever the HUD/keyboard has
    // currently selected — so a harness can lay a named caste without a
    // real 'C' keypress, or omit it to exercise the same path a player does.
    window.__lay = (casteId = selectedCaste) => layEgg(brood, interaction.harvest.state.cache, {
      founded: isFounded(), inChamber: inBroodChamber(ant),
    }, casteId);
    window.__inBroodChamber = () => inBroodChamber(ant);
    // #38: read/set the caste the next lay will produce, and the ids it can
    // be, without a real keypress.
    window.__selectedCaste = () => selectedCaste;
    window.__setSelectedCaste = (id) => { if (SELECTABLE_CASTES.includes(id)) selectedCaste = id; };
    window.__selectableCastes = SELECTABLE_CASTES;
    // #37/#38: so a harness can count/inspect the swarm without a screen —
    // each entry is { entity, caste, forage, updatePose, group }, forage
    // null for a digger, forage.state one of forage.js's FORAGE_STATE names
    // for a worker. countByCaste() answers the ticket's population split.
    window.__workers = workerSwarm;
  }

  function dispose() {
    window.removeEventListener('keydown', onPonteKey);
    window.removeEventListener('keydown', onCasteKey);
    input.dispose();
    hud.dispose();
    marker.dispose();
    props.dispose();
    workerSwarm.dispose(); // #37: every ouvrière is an entry in the shared spatial index too
    removeEntity(ant); // #36: the player is an entry in the shared spatial index too
  }

  return { ant, group, update, dispose };
}
