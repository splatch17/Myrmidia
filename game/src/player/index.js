import { antState } from '../core/antState.js';
import * as THREE from 'three';
import { clamp, damp } from '../core/noise.js';
import { groundY, distanceToWater, foundedMix, digFaces, payDigFace, dugRooms, descentPath, createPlanGhost, lawnY, inOpenCutPastDoor } from '../world/index.js';
import { PLAYER_AVATAR, PROFILES, collideRadius, profileById, legLengths, PRODUCED_CASTES } from './avatar.js';
import { buildOutlineHull } from '../core/outline.js';
import { makeAnt, makeLegState, updateLegs, antMatrix, localToWorld, solveKnee } from './legs.js';
import { buildAntMesh } from './antMesh.js';
import { createInput } from './input.js';
import { createQueenMenu } from './queenMenu.js';
import { createCameraRig, desiredCamera } from './camera.js';
import { computeWishDir, stepAnt } from './movement.js';
import { stepClimb, exitClimb, GRASS } from './climb.js';
import { pickDigGauge } from './digGauge.js';
import { findNestPath, aiFloorAt } from './nestPath.js';
import { deepestPenetration, resolveDecorCollision, mushroomRadii } from './decorCollision.js';
import { evaluateSite, siteHeadline, siteDetail } from './siteQuality.js';
import { createInteraction } from './interaction.js';
import { createProps } from './props.js';
import { resourceNodes } from './resources.js';
import { nestOrigin, canFound, found, refusalText } from './founding.js';
import { createHud } from './hud.js';
import { createTargetMarker } from './marker.js';
import { createColony, requiredCrewFor, CONTROL_DIG_MULT } from './colony.js';
import { createPlans } from './plans.js';
import { createHandDig } from './handDig.js';
import { createPlanTool } from './planTool.js';
import { createEntities } from './entities.js';
import { createCrowd } from './crowd.js';
import { nestInfo, nestFootprint } from './nest.js';
import { WORKER } from './avatar.js';
import { dampAngle } from './mathUtil.js';

/**
 * Wires up the whole player: ant state, IK mesh, input, camera, movement +
 * underground/lawn collision (#21), decor non-penetration (#4/#16), stem/tree
 * climbing (#5), the site reading the founding queen walks around with (#32),
 * and the harvest/founding loop (#29/#33 — interaction.js owns which verb the
 * interact key means, this file only routes input into it and its text out to
 * the HUD). Call update(dt, elapsed) once a frame, after world.update() so the
 * ant walks on this frame's terrain, before renderer.render() so the camera
 * it moved is the one that gets drawn.
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

export function createPlayerController({ scene, camera, domElement, profile: startProfile = PLAYER_AVATAR }) {
  const ant0 = makeAnt(SURFACE_START[0], 0, SURFACE_START[1], startProfile);
  ant0.yaw = SPAWN_YAW;
  ant0.y = groundY(ant0.x, ant0.z);
  // she is 2.2x a worker: a spawn point that was clear for a worker can still
  // overlap a pebble or a stem for her. Two resolves settle it (see
  // decorCollision.js on why the second pass exists) before the first frame,
  // rather than having her visibly shoved aside on frame one.
  resolveDecorCollision(ant0, 0);
  resolveDecorCollision(ant0, 0);
  ant0.y = groundY(ant0.x, ant0.z);

  /* #36: the queen is one entity among the colony's, and "the ant the player
     drives" is whichever entity is flagged `controlled` (entities.js). The
     four names below — cur / ant / legState / profile — always describe that
     one, and are rebound in bindBody() when control moves. */
  const queen = {
    id: 'queen', profileId: startProfile.id, profile: startProfile, ai: 'idle', controlled: true,
    ant: ant0, legState: makeLegState(startProfile), carrying: null,
  };
  let cur = queen;
  let ant = queen.ant, legState = queen.legState, profile = queen.profile;

  /* One mesh rig per caste, ALL built here at construction: main.js runs its
     one-shot scene.traverse() (nest shading) right after this returns, so a
     rig created later would be lit as if it stood in an open field. Only the
     queen's and the controlled ant's are shown. The outline is built from the
     finished mesh rather than inside antMesh.js, so the rendering trick and
     the anatomy stay separable. Ants nobody controls are drawn by the crowd. */
  const rigs = new Map();
  for (const p of Object.values(PROFILES)) {
    const built = buildAntMesh(p);
    const hull = buildOutlineHull(built.group);
    built.group.visible = false;
    hull.visible = false;
    scene.add(built.group);
    scene.add(hull);
    rigs.set(p.id, { group: built.group, hull, updatePose: built.updatePose });
  }
  const group = rigs.get(queen.profileId).group;

  const input = createInput(domElement, profile);
  // the boom starts behind her, not behind +Z: camYaw defaults to 0 in
  // input.js, which with a spawn facing west would open the game on a side
  // view of the queen instead of on the meadow she is looking at
  input.state.camYaw = SPAWN_YAW;
  const queenMenu = createQueenMenu();
  const cameraRig = createCameraRig(camera);

  /* Screen position of the dig gauge (#51), and which face gets it when
     several are open at once (#62 requirement 2 — see digGauge.js, pulled
     out so the "at most one, nearest the centre" rule has its own unit
     test, see scripts/verify-dig-gauge-pick.mjs). Kept as a call here
     rather than in hud.js because this is the file that already holds a
     camera, and a HUD that learns what a projection matrix is stops being
     a HUD.

     One frame behind: main.js writes camera.position after this runs. On a
     ring that fills over seventy-five seconds that is invisible, and
     paying for it with a second update order would not be. */
  const projectDig = (candidates) => pickDigGauge(candidates, camera);
  const hud = createHud();
  const marker = createTargetMarker(scene);
  /* The colony, and the two draw calls that show it. Workers are drawn
     instanced rather than as ~30 meshes each like the player: twenty of them
     the player's way would be six hundred draw calls, which is precisely the
     cost the spatial index round went to the trouble of removing from the CPU
     side. See crowd.js. */
  /* #82: the colony's food store, as far as one exists. The pile the queen
     lays from is the only one there is until #85 (full food + spoil economy):
     no pile yet = chantiers are free ("gratuit (test)"). */
  const plans = createPlans({
    food: {
      available: () => (interaction.harvest.state.cache ? interaction.harvest.stock() : null),
      spend: (n) => interaction.harvest.spend(n),
      give: (n) => {
        const c = interaction.harvest.state.cache;
        if (!c) return;
        const k = Object.keys(c.items)[0] || 'seed';
        c.items[k] = (c.items[k] || 0) + n; c.total += n;
      },
    },
  });
  const colony = createColony({ plans });
  // #83: the controlled digger's hands (built now so nest shading sees its meshes)
  const handDig = createHandDig({ scene, plans });
  const ghost = createPlanGhost();
  scene.add(ghost.group);
  const allFaces = () => digFaces().concat(plans.faces());
  const entities = createEntities({ queen, colony });
  /* What the next clutch will be (#38). Held here rather than in colony.js
     because it is a decision the *player* makes and colony.js is the thing
     that lives without them — the moment the queen has a management panel
     (design/castes-et-micro-macro.md 2) this is the first row in it. */
  let caste = 'worker';

  /* Castes are UNLOCKED, not offered from the start. The first clutch is
     always foragers — she has nothing to dig with and nothing dug — and the
     digger arrives with the second, which is the first moment the player has
     a reason to want one and a colony that can afford it.

     That is what makes the second laying worth walking back for: it is not
     "the same thing again", it is the moment the roster grows. Before this,
     both castes existed from the first frame and the choice was free, which
     is the same as no choice. */
  const CASTE_UNLOCK = { worker: 0, digger: 1 };   // clutches required
  /* What the bottom-of-screen caste square says while it is still grey
     (#75) — read off the same CASTE_UNLOCK the picker itself enforces, so
     the legend can never promise a caste sooner than E actually allows one.
     "ᵉ" matches laying.js's own ordinal spelling ("2ᵉ couvée"). */
  function casteHint(id) {
    const need = CASTE_UNLOCK[id] ?? 0;
    return need > 0 ? `dès la ${need + 1}ᵉ ponte` : null;
  }
  /* Kept here rather than pushed through interaction.say(): this is feedback
     on a *player* keypress, and interaction.js's message queue belongs to
     world events. Merged into the same HUD line below, with the player's own
     action winning — the answer to a key you just pressed must not be
     overwritten by something the colony did. */
  let casteMsg = null, casteMsgTimer = 0;
  function casteUnlocked(id) { return interaction.laying.brood() >= CASTE_UNLOCK[id]; }
  /* The one path that picks the next clutch's caste — keys 5/6 (input.js)
     and the #75 caste-square buttons (hud.js) both end up here, rather than
     each keeping its own copy of "is it unlocked" and "what does the zone
     text say". A click passes the same id a keypress would, so the button
     never needs to duplicate the unlock rule CASTE_UNLOCK already enforces
     above (casteUnlocked). */
  function selectCaste(pick) {
    if (!pick) return;
    if (casteUnlocked(pick)) {
      caste = pick;
      casteMsg = `Prochaine ponte : ${pick === 'digger' ? 'fouisseuses' : 'ouvrières'}`;
    } else {
      casteMsg = 'Fouisseuses : à débloquer à la deuxième ponte';
    }
    casteMsgTimer = 3.5;
  }
  const crowd = createCrowd(scene, WORKER);
  const interaction = createInteraction({ profile });
  // Props (carried item, the pile, stand-in resource markers) are built here,
  // before main.js's one-shot scene.traverse() applies the nest shading — see
  // props.js.
  const props = createProps({ scene, profile });
  // prime the rig so frame 1 has a valid eye/aim to build camera-relative
  // input from (mirrors the old prototype's camReady snap-in) — see
  // movement.js's computeWishDir() for why this ordering matters.
  cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, 0);

  let siteTimer = 0, siteAt = null, site = null, nestCard = null;
  const crowdList = [];

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

  /* #34: while the macro view is up (core/macroMode.js) the queen is not
     steered and the follow camera is not written, so leaving the model
     lands on exactly the shot the player left. The orbit drag/wheel still
     reach input.js underneath; its camera state is put back on the way out
     rather than teaching input.js about modes. The colony keeps living. */
  const IDLE_INTENT = { ix: 0, iy: 0, mag: 0, sprint: false };
  let macroSnap = null;
  let macroTool = null;
  let macroMixNow = () => 0;   // macro mode's 0..1 blend, set by attachMacro()

  /* ---- control moves between ants (#36) ---------------------------------- */

  // never while the burrow beat / the laying sequence is placing the queen:
  // she is a cutscene then, and whoever took over would inherit it
  entities.setGuard(() => !interaction.busy());

  function publishRadius() { if (typeof window !== 'undefined') window.__antRadius = collideRadius(profile); }
  function bindBody(e) {
    cur = e; ant = e.ant; legState = e.legState; profile = e.profile;
    publishRadius();
  }

  /* What the outgoing ant was holding stays with HER (entity.carrying, a kind
     string like colony.js's own workers use), and the incoming one's load
     goes back into the one shared harvest state the HUD/props/E-ladder read. */
  entities.onChange(({ from, to }) => {
    const h = interaction.harvest.state;
    from.carrying = h.carrying ? h.carrying.kind : null;
    h.carrying = to.carrying ? { kind: to.carrying } : null;
    h.progress = 0; h.activeId = null;
    // a released ant must not stay hanging off a stem its brain does not know about
    if (from.ant.climb) exitClimb(from.ant);
    to.carrying = null;
    bindBody(to);
    input.setProfile(profile);
    // the boom opens behind the new ant, and glides there instead of cutting
    input.state.camYaw = ant.yaw;
    cameraRig.glide = 1.6;
    siteAt = null;
    if (macroSnap) {
      // in the model: leaving it must land on THIS ant, not on where the
      // previous one was - the follow shot is rebuilt and the saved boom reset
      macroSnap.camYaw = input.state.camYaw;
      macroSnap.wantPitch = input.state.wantPitch;
      macroSnap.camDist = input.state.camDist;
      const want = desiredCamera(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist);
      cameraRig.eye = want.eye.slice(); cameraRig.aim = want.aim.slice();
    }
  });

  /* A click on an ant, in pixels: the nearest projected body within a thumb of
     the cursor. `lift` puts the sample point where the pin/body reads. */
  const _pv = new THREE.Vector3();
  function pickAntAt(px, py, { lift = 1.5, radius = 30, includeCurrent = false } = {}) {
    const w = domElement.clientWidth || window.innerWidth, h = domElement.clientHeight || window.innerHeight;
    camera.updateMatrixWorld();
    let best = null, bestD = radius;
    const list = entities.all();
    for (let i = 0; i < list.length; i++) {
      const e = list[i];
      if (!includeCurrent && e === cur) continue;
      _pv.set(e.ant.x, e.ant.y + lift * (e.ant.scale || 1), e.ant.z).project(camera);
      if (_pv.z > 1 || _pv.z < -1) continue;
      const d = Math.hypot((_pv.x + 1) * 0.5 * w - px, (1 - _pv.y) * 0.5 * h - py);
      if (d < bestD) { bestD = d; best = e; }
    }
    return best ? best.id : null;
  }

  /* The brain of the queen when nobody plays her: stand where she is and let
     the legs settle. Kept here (not in colony.js) because she is not one of
     its workers and the pose needs nothing but her record. */
  function idleQueen(dt) {
    queen.ant.speed = damp(queen.ant.speed, 0, 9, dt);
    updateLegs(queen.ant, queen.legState, dt);
  }

  // who the HUD says you are: "n° 2" for the second digger, nothing for the queen
  function unitTag() {
    if (cur === queen) return '';
    let n = 0;
    for (const w of colony.state.workers) { if (w.profileId === cur.profileId) n++; if (w === cur) break; }
    return `n° ${n}`;
  }

  // the objective line of a controlled ant that is not the queen
  function fieldObjective() {
    const carrying = interaction.harvest.state.carrying;
    if (profile.id === 'digger') {
      if (cur.atFace) return `Vous creusez au front — ×${CONTROL_DIG_MULT} une fouisseuse de la colonie`;
      let best = null, bestD = Infinity;
      for (const f of allFaces()) {
        const d = Math.hypot(f.x + f.nx * (f.standoff ?? 5) - ant.x, f.z + f.nz * (f.standoff ?? 5) - ant.z);
        if (d < bestD) { bestD = d; best = f; }
      }
      return best ? `Objectif : rejoindre le front de creusement (à ${bestD.toFixed(0)} u)` : 'Aucun front ouvert : rien à creuser pour l\u2019instant';
    }
    return carrying
      ? 'Objectif : rapporter au dépôt de la reine'
      : 'Objectif : récolter (E maintenu) et rapporter au dépôt';
  }

  function update(dt, elapsed, opts) {
    const macro = !!(opts && opts.macro);
    if (macro && !macroSnap) {
      macroSnap = { camYaw: input.state.camYaw, wantPitch: input.state.wantPitch, camDist: input.state.camDist };
    } else if (!macro && macroSnap) {
      input.state.camYaw = macroSnap.camYaw;
      input.state.wantPitch = macroSnap.wantPitch;
      input.state.camDist = macroSnap.camDist;
      macroSnap = null;
    }
    const intent = macro ? IDLE_INTENT : input.readMoveIntent();

    /* #36: switching. Tab / Shift+Tab walk the roster; a click on an ant in
       the world takes it. Not in the macro model (its own pins do that, and a
       click there is the model's), and both are consumed either way so a
       press made in the model cannot fire on the way out. */
    const sw = input.consumeSwitch(), click = input.consumeClick();
    if (!macro) {
      if (sw) entities.cycle(sw, 'tab');
      else if (click) {
        const id = pickAntAt(click.x, click.y);
        if (id !== null) entities.takeControl(id, 'click');
      }
    }

    /* E, resolved in context (interaction.js): climb on/off, harvest a node,
       drop what she carries, or dig the first chamber. Both readings of the
       key go down — the consumed edge for the instant verbs, the raw held
       state for the ones that take time — because which of the two matters is
       the ladder's decision, not this file's. Run before movement, so a climb
       entered this frame is walked this frame (the order the old prototype's
       frame() used). */
    if (input.consumeHelp()) hud.toggleControls();
    /* The panel is offered to the PROFILE, not to the player (#53). A caste
       without `manages` gets nothing from this key, which is what makes the
       flag load-bearing rather than decorative. */
    if (input.consumeMenu()) queenMenu.toggle(entities.manager().profile);
    selectCaste(input.consumeCaste());
    // a caste can be locked again by nothing, but the guard costs one line and
    // stops a saved pick from outliving the rule that allowed it
    if (!casteUnlocked(caste)) caste = 'worker';
    const pressedE = input.consumeInteract();
    const act = interaction.update(ant, macro ? false : pressedE, macro ? false : input.isInteractHeld(), dt, queen.ant);

    if (interaction.busy()) {
      /* The founding sequence (laying.js, #6) is placing her along a path
         through her own shaft: no steering, no containment, and no ground to
         follow — it wrote ant.x/y/z and ant.floorY itself, inside
         interaction.update() above. */
    } else if (ant.climb) {
      // climbing: forward/back walks the ant along the blade/trunk's own
      // curve; left/right is unused (see climb.js/the old prototype)
      stepClimb(ant, clamp(intent.iy, -1, 1), dt);
    } else {
      const wish = computeWishDir(intent, cameraRig.eye, cameraRig.aim);
      stepAnt(ant, wish, intent, dt);
    }

    /* #83: E held, in a digger, with nothing else claiming it: she digs where
       she looks. The ladder's 'none' is what leaves the key free. */
    {
      const diggerHere = !macro && profile.id === 'digger' && !interaction.busy() && !ant.climb;
      const digging = handDig.update(diggerHere ? ant : null, diggerHere && act.kind === 'none' && input.isInteractHeld(),
        input.state.wantPitch, dt);
      cur.handDigging = digging.active;
    }
    updateLegs(ant, legState, dt);
    if (!queen.controlled) idleQueen(dt);   // her brain: stand and settle
    // the queen's rig always; the controlled ant's own caste rig when it is not her
    for (const r of rigs.values()) { r.group.visible = false; r.hull.visible = false; }
    const qr = rigs.get(queen.profileId);
    qr.updatePose(queen.ant, queen.legState, elapsed);
    qr.group.visible = qr.hull.visible = true;
    if (cur !== queen) {
      const r = rigs.get(cur.profileId);
      r.updatePose(ant, legState, elapsed);
      r.group.visible = r.hull.visible = true;
    }

    /* #91: a camera squeezed into a small room can end up inside her. She is
       shrunk toward her own centre (the rig's matrices are world-space, so the
       group is scaled about her position) until the boom clears again. */
    {
      const k = cameraRig.fade === undefined ? 1 : cameraRig.fade;
      const g = rigs.get(cur.profileId);
      const qg = rigs.get(queen.profileId);
      for (const r of (cur === queen ? [qg] : [qg, g])) {
        const mine = r === g;
        const kk = mine ? k : 1;
        r.group.scale.setScalar(kk); r.hull.scale.setScalar(kk);
        r.group.position.set(ant.x * (1 - kk), (ant.y + 3 * (ant.scale || 1)) * (1 - kk), ant.z * (1 - kk));
        r.hull.position.copy(r.group.position);
      }
    }

    antState.position.set(ant.x, ant.y, ant.z);
    antState.radius = collideRadius(profile); // footprint half-width, for grass contact bend

    props.update(ant, interaction.harvest.state, interaction.burrow.state);

    /* A clutch becomes eggs the colony owns. laying.js counts clutches; this
       is the first thing that turns one into something that hatches. */
    if (interaction.laying.state.justLaid) colony.addEggs(3, caste);
    colony.update(dt);
    if (macroTool) macroTool.update(dt);
    if (plans.consumeDirty()) ghost.setPlans(plans.ghostList());
    ghost.update(dt, elapsed, camera, macroMixNow(), (domElement && domElement.clientHeight) || window.innerHeight);
    const planDone = plans.state.doneEvent;
    if (planDone) { plans.state.doneEvent = null; casteMsg = `Chantier terminé : ${planDone.label}`; casteMsgTimer = 5; }
    // the controlled one is drawn by her own rig above, not twice
    crowdList.length = 0;
    for (const w of colony.state.workers) if (!w.controlled) crowdList.push(w);
    crowd.render(crowdList, elapsed);

    refreshSite(dt);
    hud.setPrompt(handDig.promptText() || interaction.promptText(ant, act));
    hud.setObjective(profile.manages ? interaction.objectiveText(ant) : fieldObjective());
    const colonyLine = colony.statusText();
    hud.setStock(colonyLine ? `${interaction.inventoryText()}  |  ${colonyLine}` : interaction.inventoryText());
    if (casteMsgTimer > 0) { casteMsgTimer -= dt; if (casteMsgTimer <= 0) casteMsg = null; }
    hud.setEvent(casteMsg || interaction.message());
    hud.setHold(interaction.holdProgress(act));
    /* One reading of the colony per frame, handed to both the panel and the
       unit frame: two calls that each built their own would be two answers
       to "how many workers" a frame apart, on screen at the same time. */
    const colonyView = {
      caste,
      casteUnlocked,
      casteOrder: PRODUCED_CASTES,
      casteLabel: (id) => profileById(id).label,
      reserve: interaction.harvest.stock(),
      cost: interaction.clutchCost(),
      brood: interaction.laying.brood(),
      counts: {
        worker: colony.state.workers.filter((w) => w.profileId !== 'digger').length,
        digger: colony.state.workers.filter((w) => w.profileId === 'digger').length,
        eggs: colony.state.eggs.length,
      },
      rooms: dugRooms(),
      plans: plans.rows((id) => colony.state.faceWork.get(id) || 0),
      faces: digFaces().map((f) => ({
        ...f, diggers: colony.state.faceWork.get(f.id) || 0, required: requiredCrewFor(f),
      })),
    };
    /* The menu and the caste squares belong to whoever `manages` the colony,
       wherever the player is standing: reachable at a distance (C), which is
       what makes a worker a legitimate body to be in (#36). */
    const manager = entities.manager().profile;
    queenMenu.render(manager, colonyView);
    hud.setUnit(profile, colonyView, unitTag());
    hud.setControlHint('Tab — changer de fourmi');
    /* Bottom-left, always: the queen's own vitals, not the controlled unit's
       (#75). She stays the same ant whether or not she is the one under the
       player's hand right now (design/castes-et-micro-macro.md 3), so this
       does not gate on `profile.manages` the way the panel above does. */
    hud.setQueenHp(colony.state.queenHp);
    /* The squares are buttons since #75 round 2: clicking one calls
       selectCaste() exactly like pressing 5/6 does (same function, same
       unlock rule). `manages` gates clickability the way queenMenu.js gates
       the whole panel — never "is this the player" (design/castes-et-micro-
       macro.md 3) — while the roster itself keeps showing regardless, same
       as the health bar beside it. */
    hud.setCastes(PRODUCED_CASTES.map((id) => ({
      id,
      label: profileById(id).label,
      unlocked: casteUnlocked(id),
      progress: colony.casteProgress(id),
      hint: casteHint(id),
      selected: caste === id,
      count: colonyView.counts[id] || 0,
    })), { manages: manager.manages, onSelect: selectCaste });
    /* The dig gauge is NOT drawn here. It is projected against the camera, and
       the camera is not final until cameraRig.update() further down — so main
       .js calls syncDigDial() once the camera is where the frame will be
       rendered from. That also makes the ring correct for __renderView(),
       which moves the camera without running this function at all. */
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
    if (!input.state.dragging && !ant.climb && !interaction.busy() && intent.mag > 0.02) {
      input.state.camYaw = dampAngle(input.state.camYaw, ant.yaw, 2.2, dt);
    }
    /* The boom is handed back pointing the way she is facing as she steps out
       of the hole: without this it still sits where it was when she walked
       *in*, which after a sequence that turned her round is a shot of her
       face from the far side of the spoil heap. */
    if (interaction.laying.state.justEnded) input.state.camYaw = ant.yaw;
    if (macro) return;
    cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, dt,
      interaction.shot(ant));
  }

  // Debug/verification hooks (not gameplay, mirrors main.js's window.__ant):
  // __decorPenetration lets scripts/verify-room-access.mjs assert the ant is
  // never inside a rock/mushroom/stem/trunk, measured against the very radii
  // the collision resolver uses (#4/#16); __site lets it assert the site
  // reading agrees with where the ant is standing (#32).
  if (typeof window !== 'undefined') {
    window.__decorPenetration = deepestPenetration;
    publishRadius();
    window.__site = (x, z) => evaluateSite(x, z);
    Object.defineProperty(window, '__avatar', { get: () => profile, configurable: true });
    window.__mushroomRadii = mushroomRadii;
    window.__grass = GRASS;  // so the harness can walk to a real climbable stem
    // #70: bone-length measurement, so a harness can assert invariance
    // instead of eyeballing it. Mirrors exactly what antMesh.js draws (same
    // solveKnee() call against the same hip/foot), and also reports what the
    // pre-fix code would have drawn (a bone from knee to the *raw*,
    // unsaturated gait target, legState[i].planted) — so one run reports both
    // the old bug's actual deviation and the fix's, instead of needing two.
    window.__legBones = () => {
      const mat = antMatrix(ant);
      const [L1, L2] = legLengths(profile);
      const d3 = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
      return profile.legs.map((L, i) => {
        const hipW = localToWorld(mat, L.hip);
        const rawFoot = legState[i].planted;
        const { knee, foot } = solveKnee(hipW, rawFoot, L1, L2, mat.basis.up);
        return { l1: L1, l2: L2, thigh: d3(hipW, knee), shinOld: d3(knee, rawFoot), shinNew: d3(knee, foot) };
      });
    };
    // #29/#33: the harness has to know where a node is in order to walk to
    // it, and what the loop thinks she is holding — it still *drives* with
    // real key events.
    window.__nodes = resourceNodes;
    window.__harvest = () => interaction.harvest.state;
    window.__nestOrigin = nestOrigin;
    // the colony, so a harness can seed a clutch and watch it hatch without
    // replaying the whole prologue first
    window.__colony = () => colony;
    window.__foundNest = (x, z) => found(x, z);
    window.__rooms2 = () => dugRooms();
    window.__faces = () => digFaces();
    window.__plans = plans;
    window.__handDig = handDig.state; window.__handDigProbe = (p) => { const r = handDig.probe(ant, p ?? input.state.wantPitch); return r && { why: r.why, ok: r.ok, surf: r.surf, n: r.cells && r.cells.length / 3 }; };
    window.__hud = hud;
    window.__findNestPath = findNestPath;
    window.__aiFloorAt = aiFloorAt;
    window.__lawnY = lawnY;
    window.__inCut = inOpenCutPastDoor;
    window.__planGhost = ghost;
    // #76: the crew threshold as a pure function of a face, so a harness can
    // check its own numbers against the same formula colony.js pays against
    window.__requiredCrew = requiredCrewFor;
    /* #40: where the nest is walkable, whether she is in it, and which floor
       the controller is following. `approx` says whether that came from the
       world's own nestFootprint() or from the stand-in nest.js keeps until
       #41 lands — a harness that cannot tell those apart would happily
       report the feature working on a guess. */
    window.__nest = () => nestInfo(ant);
    // point probe, so a harness can ask about ground it has not walked to yet
    window.__nestAt = (x, z, y) => {
      const fp = nestFootprint();
      return fp ? { inside: fp.contains(x, z, y), floorY: fp.floorY(x, z, y), ground: groundY(x, z, y), headroom: fp.headroom(x, z, y), approx: fp.approx } : null;
    };
    // the gallery normally opens when the diggers finish (colony.js); the
    // harness needs it open without replaying twenty minutes of colony
    window.__payDig = (id, s) => payDigFace(id, s);
    // the world's own centre line down the cut, when it publishes one (#41)
    // which verb E resolves to right now, and how far the current hold has
    // got: a prompt on screen is not proof that the ladder agrees with it
    window.__act = () => {
      const a = interaction.resolve(ant);
      return { kind: a.kind, inPlace: !!a.inPlace, hold: interaction.holdProgress(a) };
    };
    window.__descentPath = () => (typeof descentPath === 'function' ? descentPath() : null);
    // ...and needs to be able to start the cutscene in order to prove it can
    // be cut. The cut itself is a real keypress.
    window.__beginLaying = () => interaction.laying.begin(queen.ant);
    window.__caste = () => ({ caste, msg: casteMsg, unlocked: casteUnlocked('digger') });
    // what a clutch costs right now, pace included (verify-burrow.mjs checks
    // the pile is spent by exactly this much, exactly once, across #68's beat)
    window.__clutchCost = () => interaction.clutchCost();
    window.__queenMenu = (profileId) => ({
      open: queenMenu.isOpen(),
      // asked of a profile by id, so a harness can prove the panel is refused
      // to a forager without #36 existing yet
      availableFor: queenMenu.availableFor(profileId ? profileById(profileId) : profile),
    });
    // the founding verdict + the sentence it produces, so the harness can
    // check the refusals for ground the queen would have to walk minutes to
    // reach (#33), and the waterline the movement clamp now follows (#4)
    window.__canFound = (x, z) => { const v = canFound(x, z); return { ...v, text: refusalText(v.reason) }; };
    window.__toWater = distanceToWater;
    // #6: the founding sequence is not driven by keys, so the harness watches
    // its phases instead of pressing anything (scripts/verify-harvest.mjs)
    window.__laying = () => {
      const st = interaction.laying.state;
      return { phase: st.phase, t: +st.t.toFixed(3), brood: st.brood, mix: foundedMix() };
    };
    // #68: the burrow beat between the founding hold and the laying
    // cutscene — likewise not driven by keys (scripts/verify-burrow.mjs
    // watches it run rather than pressing anything for its 3-5 s).
    window.__burrow = () => {
      const st = interaction.burrow.state;
      return { active: st.active, t: +st.t.toFixed(3) };
    };
    /* #76: lets a harness drive the whole player tick (colony + HUD + queen
       menu) with a SYNTHETIC dt instead of real wall-clock seconds — the
       crew-threshold measurement needs to simulate tens or hundreds of
       ant-seconds of digging, and doing that by actually waiting that long
       in a headless browser would make the harness itself the slow part.
       Safe to call with no input pending: an idle real frame already calls
       this with an empty input state whenever the player stands still. */
    window.__playerUpdate = (dt, elapsed = 0) => update(dt, elapsed);
    /* #75 round 2: lets a harness prove a click on a caste-square button
       never reaches the orbit-drag/pointer-lock input the canvas listens
       for — camYaw only moves inside input.js's own onPointerMove, and only
       while dragging is true, so an unchanged reading before/after a click
       is a direct proof, not an inference from camera drift. */
    window.__control = {
      list: () => entities.all().map((e) => ({ id: e.id, profileId: e.profileId, ai: e.ai, controlled: !!e.controlled, x: e.ant.x, z: e.ant.z, atFace: !!e.atFace })),
      current: () => ({ id: cur.id, profileId: cur.profileId }),
      take: (id) => entities.takeControl(id, 'harness'),
      pickScreen: (x, y) => pickAntAt(x, y),
      screenOf: (id) => {
        const e = entities.get(id);
        const w = domElement.clientWidth || window.innerWidth, h = domElement.clientHeight || window.innerHeight;
        camera.updateMatrixWorld();
        _pv.set(e.ant.x, e.ant.y + 1.5 * (e.ant.scale || 1), e.ant.z).project(camera);
        return { x: (_pv.x + 1) * 0.5 * w, y: (1 - _pv.y) * 0.5 * h, front: _pv.z > -1 && _pv.z < 1 };
      },
      antOf: (id) => { const e = entities.get(id); return e ? { x: e.ant.x, y: e.ant.y, z: e.ant.z, yaw: e.ant.yaw, speed: e.ant.speed } : null; },
      queenMenuOpen: () => queenMenu.isOpen(),
    };
    window.__setCamYaw = (y) => { input.state.camYaw = y; };
    window.__inputState = () => ({ dragging: input.state.dragging, camYaw: input.state.camYaw });
  }

  function dispose() {
    input.dispose();
    hud.dispose();
    queenMenu.dispose();
    marker.dispose();
    crowd.dispose();
    props.dispose();
  }

  /**
   * Place the dig gauge for the camera as it now stands. Called by main.js
   * after the camera is final — both in the frame loop and in __renderView(),
   * so a harness screenshot of a free view carries the same ring the player
   * would see from there.
   */
  function syncDigDial(dt = 0) {
    hud.setDig(projectDig(colony.digCandidates()), dt);
  }

  /* #34: what the macro view needs from the colony, and nothing more —
     every ant's position for the dots, and a face's crew for the tooltip.
     A callback rather than an array so the per-frame dot pass allocates
     nothing. */
  const macroInfo = {
    // fn(x, y, z, kind, id): the id is what a click on the pin hands back to takeControl()
    forEachAnt(fn) {
      fn(queen.ant.x, queen.ant.y, queen.ant.z, 'queen', queen.id);
      const ws = colony.state.workers;
      for (let i = 0; i < ws.length; i++) {
        const w = ws[i];
        fn(w.ant.x, w.ant.y, w.ant.z, w.profileId === 'digger' ? 'digger' : 'worker', w.id);
      }
    },
    faceCrew(face) {
      if (face.plan) return { diggers: colony.state.faceWork.get(face.id) || 0, required: requiredCrewFor(face) };
      return { diggers: colony.state.faceWork.get(face.id) || 0, required: requiredCrewFor(face) };
    },
  };

  return {
    /** the ant being played right now (the queen until control moves) */
    get ant() { return ant; },
    group, update, syncDigDial, dispose, hud, macroInfo, plans,
    /* #82: the macro model's chantier tools (main.js calls this once, with the
       macro mode it created). Returns the tool bar handle. */
    attachMacro(macro) {
      macroMixNow = () => macro.mix();
      macroTool = createPlanTool({
        macro, plans, ghost, camera, domElement,
        diggerCount: () => colony.state.workers.filter((w) => w.profileId === 'digger').length,
        crewAt: (id) => colony.state.faceWork.get(id) || 0,
      });
      if (typeof window !== 'undefined') window.__planTool = macroTool;   // harness handle, not gameplay
      return macroTool;
    },
    /* #36 / #84: the door for "the queen has settled, play the first worker".
       takeControl(id) -> false when refused (unknown id, already that ant, or
       the queen is mid burrow/laying sequence); onControlChange(fn) gets
       { from, to, reason } on every change, and the same is dispatched on
       window as a `control-change` CustomEvent. */
    takeControl: (id, reason = 'api') => entities.takeControl(id, reason),
    onControlChange: (fn) => entities.onChange(fn),
    entities,
    pickAntAt,
    /** the follow-camera pose play resumes from (macro exit after a pin click) */
    playCameraPose: () => ({ eye: cameraRig.eye.slice(), aim: cameraRig.aim.slice() }),
  };
}
