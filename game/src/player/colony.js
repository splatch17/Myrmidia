import { makeNavState, navTarget, tickNav, containAiStep, aiFloorAt, atClosestApproach } from './nestPath.js';
import { groundY, RESOURCE_NODES, harvestNode, nestOrigin, digFaces, payDigFace } from '../world/index.js';
import { WORKER, DIGGER, profileById, strideOf, collideRadius } from './avatar.js';
import { makeAnt, makeLegState, updateLegs } from './legs.js';
import { dampAngle } from './mathUtil.js';
import { paceTime } from '../core/pace.js';

/* ==========================================================================
   The colony: eggs that hatch, and workers that forage.

   This is the first thing in the game that lives without the player. Until
   now every ant on screen was the one being driven; the prologue ends with a
   clutch of eggs in a dark chamber and a HUD line promising a next brood, and
   behind that line there was nothing at all.

   DELIBERATELY SMALL. No task assignment, no pheromone trails, no queue —
   a worker walks to the nearest node with something left in it, takes one
   unit, walks it back to the nest, drops it, and goes again. That is the
   whole behaviour. It is enough to make the colony read as alive and to give
   the harvest loop a reason to continue after founding, and it is the shape
   the real system will refine rather than replace.

   WHY IT IS NOT AN "ENTITY SYSTEM". #36 asks for one and this is not it: it
   is a list of workers with the same ant-record legs.js already produces, and
   the player is still a separate path. Building the general layer before
   anything needed it would have been guessing at the requirements. This file
   is what the requirements look like — a thing that walks, carries, and has
   a goal — and the layer should be extracted from two or three of these, not
   invented ahead of the first.

   SERIALISABLE ON PURPOSE. A worker's state is numbers and a profile id, no
   THREE.js reference and no closure. design/etat-des-lieux.md 2d flags that
   founding/harvest/laying all failed this test and will cost to convert; this
   one does not add to that bill.
   ========================================================================== */

export const HATCH_SECONDS = 22;     // an egg becomes a worker
export const WORKER_CARRY = 1;       // units per trip

/* The first gallery, in digger-seconds (#39). One digger takes DIG_SECONDS;
   two take half as long, and that has to be visible — the whole point of
   letting the queen choose what she lays is that the choice shows. Sized so a
   single digger is a long wait and three feel like a crew, which is what makes
   laying a second one a real decision rather than an obvious one. */
/* Kept as the pace reference for the HUD; the authority on how long a given
   face takes is now the world, which carries `needed` on the face itself
   (contract §7). */
export const DIG_SECONDS = 75;
/* #36: a digger the player is driving, standing at her face, counts for this
   many AI diggers on the gauge (design/fourmiliere-a-batir.md 4.3: micro beats
   macro). Only her rate is multiplied: for the minimum crew (#76) she is still
   ONE digger, and only while she is really at the face. */
export const CONTROL_DIG_MULT = 3;
/* How close to a face counts as working it. A body length: close enough that
   the crew reads as being AT the wall, loose enough that three of them fit
   without shoving each other off the gauge. */
const DIG_SITE_R = 7;
/* Where a fouisseuse stands: off the wall along the face's own outward
   normal, so they line up facing it instead of piling onto its centre. */
const FACE_STANDOFF = 5.0;

const ARRIVE = 6;                    // how close counts as "there"
const REPATH_EVERY = 0.6;            // seconds between target re-picks

/* ---- minimum crew per face (#76) ---------------------------------------

   Digging further has to demand MORE fouisseuses, not just more time —
   below the threshold a face does not creep, it waits, and the game says
   why ("il faut N fouisseuses, il y en a M"). The requirement is keyed off
   `opensGen`, the generation of the room the face OPENS (world/founding.js,
   contract §8), which is exactly the number the ticket's own examples count
   by: 1 for the hall, 3 for a face on the hall's walls, 6 one generation
   further.

   That sequence is the triangular numbers (n(n+1)/2), so it is written as a
   formula rather than a table to extend: "and so on, growing" is then
   automatic instead of needing a new array entry every time the nest grows
   one generation deeper, and an arbitration of #63 is still a one-line
   change — the formula (or swap it for a literal table then, if #63 wants
   per-generation tuning a formula can't express).

   The hall face is the one exception, checked by its own opensGen (1) rather
   than assumed by id: it always asks for exactly 1, whatever size the hall
   turns out to be. It is the face the queen finds alone at the foot of the
   ramp (#48) — gating it by a room size nobody chose yet would make the very
   first clutch a guess instead of a certainty. */
const SIZE_K = { small: 0.75, medium: 1.0, large: 1.4 };  // mirrors world/founding.js's ROOM_SIZES factors; the world only publishes the label (contract §7)
const triangular = (n) => (n * (n + 1)) / 2;

/** The minimum crew a face needs before it advances at all. */
export function requiredCrewFor(face) {
  if (face.crew) return face.crew;   // #82: a painted chantier carries its own, computed on its volume
  const gen = face.opensGen || 1;
  if (gen <= 1) return 1;
  const k = SIZE_K[face.size] || 1;
  return Math.max(1, Math.ceil(triangular(gen) * k));
}

const faceSeq = (f) => Number(String(f.id).replace(/\D/g, '')) || 0;
const standoffOf = (f) => f.standoff ?? FACE_STANDOFF;
const siteROf = (f) => f.siteR ?? DIG_SITE_R;

/**
 * Which face each fouisseuse works, this frame. Diggers CONCENTRATE on one
 * face at a time rather than spreading — with a threshold, spreading can
 * deadlock the colony forever (4 diggers split 2/2 across two faces that
 * each need 3 never opens either). Faces are filled in order of the
 * CHEAPEST requirement first: the nearest diggers to that face are sent to
 * it until it is crewed, then the next-cheapest face gets what is left. A
 * digger left over once every open face is fully crewed goes to whichever
 * is nearest — extra hands on an already-crewed face only make it faster,
 * never wrong.
 */
function assignDiggers(diggers, faces) {
  /* #82: a prioritised chantier is crewed first, then the painted ones (the
     player's own orders) before the hall's automatic walls, first planned
     first; the world's faces keep the cheapest-first order above. */
  const ordered = faces.slice().sort((a, b) => (
    (b.priority ? 1 : 0) - (a.priority ? 1 : 0)
    || (b.plan ? 1 : 0) - (a.plan ? 1 : 0)
    || (a.plan && b.plan ? faceSeq(a) - faceSeq(b) : 0)
    || requiredCrewFor(a) - requiredCrewFor(b) || a.id.localeCompare(b.id)
  ));
  const pool = diggers.slice();
  const assignment = new Map();
  for (const f of ordered) {
    const need = requiredCrewFor(f);
    pool.sort((wa, wb) => (
      Math.hypot(wa.ant.x - f.x, wa.ant.z - f.z) - Math.hypot(wb.ant.x - f.x, wb.ant.z - f.z)
    ));
    for (const w of pool.splice(0, need)) assignment.set(w.id, f.id);
  }
  for (const w of pool) {
    let best = null, bestD = Infinity;
    for (const f of faces) {
      const d = Math.hypot(w.ant.x - f.x, w.ant.z - f.z);
      if (d < bestD) { bestD = d; best = f; }
    }
    if (best) assignment.set(w.id, best.id);
  }
  return assignment;
}

/* Workers are slower than the queen in absolute terms even though they are
   smaller — she has a 2.2x stride. Read as body-lengths a second this makes a
   worker noticeably brisker than her, which is the right reading: she is the
   heavy one. */
const WORKER_SPEED = 11;

let _nextId = 1;

function nearestLiveNode(x, z) {
  let best = null, bestD = Infinity;
  for (let i = 0; i < RESOURCE_NODES.length; i++) {
    const n = RESOURCE_NODES[i];
    if (n.amount <= 0) continue;
    const d = Math.hypot(n.x - x, n.z - z);
    if (d < bestD) { bestD = d; best = n; }
  }
  return best;
}

export function createColony({ plans = null } = {}) {
  /* the hall's walls (the world's own faces) plus the chantiers painted in the macro model (#82) */
  const allFaces = () => (plans && plans.count() ? digFaces().concat(plans.faces()) : digFaces());
  const state = {
    eggs: [],          // [{ id, age, profileId }]
    workers: [],       // see spawnWorker()
    delivered: 0,      // units the colony has brought home on its own
    digging: 0,        // how many fouisseuses were at a face this frame
    faceWork: new Map(),  // face id -> how many are working it this frame
    faceRate: new Map(),  // face id -> ant-seconds per second it is paid (#36: a controlled digger weighs CONTROL_DIG_MULT)
    opened: [],        // ids of the rooms the colony has dug open
    lastOpened: null,  // the most recent one, for the HUD to announce
    /* #75: the bottom-of-screen health bar needs somewhere to read from that
       is not a THREE.js object and not the static profile row (avatar.js's
       own header rules that out — a profile is a shared definition, not
       state). No damage exists yet (#78): the bar is built now, full, so the
       screen reads as an MMO from frame one, and a real hit just has to
       lower `cur`. */
    queenHp: { max: 100, cur: 100 },
  };

  function spawnWorker(x, z, profileId = 'worker') {
    const profile = profileById(profileId);
    const ant = makeAnt(x, 0, z, profile);
    ant.y = groundY(x, z);
    ant.yaw = Math.random() * Math.PI * 2;
    return {
      id: _nextId++,
      profileId,
      profile,
      /* #36: control is an attribute. `controlled` is set by player/entities.js
         when the player takes this ant; while it is true update() does not run
         the brain below. `ai` names the brain, kept as a string so the record
         stays serialisable. */
      controlled: false,
      ai: profileId === 'digger' ? 'dig' : 'forage',
      atFace: false,
      ant,
      legState: makeLegState(profile),
      carrying: null,      // node kind being carried, or null
      targetId: null,      // resource node id, when foraging
      repath: 0,
    };
  }

  /** A clutch is laid, of one caste. The caste is chosen at laying time
   *  (#38) and carried on the egg, so an egg already knows what it will
   *  become — which is what lets the HUD say "2 œufs de fouisseuse" rather
   *  than "2 œufs" and a surprise. */
  function addEggs(count, profileId = 'worker') {
    for (let i = 0; i < count; i++) state.eggs.push({ id: _nextId++, age: 0, profileId });
  }

  /* A fouisseuse walks to the nearest open dig face and works it. Progress is
     counted in ant-seconds by update(), not here, so two of them at the same
     face really do advance the gauge twice as fast — the arithmetic is where
     the design promise lives, and it belongs in one line rather than spread
     over the crew.

     She aims at a point a body off the wall along the face's own normal, not
     at the face itself: aiming at the face packs the crew into one spot and
     the second fouisseuse is invisible behind the first, which is exactly the
     thing the gauge is supposed to make visible. */
  function stepDigger(w, dt, faces, assignedId) {
    const a = w.ant;
    /* Go to the face assigned this frame (assignDiggers, #76) so the crew
       concentrates instead of splitting itself between the two nearest
       walls; fall back to nearest if nothing was assigned (e.g. no faces are
       open at all). */
    let face = assignedId ? faces.find((f) => f.id === assignedId) : null;
    if (!face) {
      let bestD = Infinity;
      for (const f of faces) {
        const d = Math.hypot(f.x - a.x, f.z - a.z);
        if (d < bestD) { bestD = d; face = f; }
      }
    }
    w.faceId = face ? face.id : null;
    if (!face) { w.atFace = false; a.speed = 0; return; }

    const stand = { x: face.x + face.nx * standoffOf(face), z: face.z + face.nz * standoffOf(face) };
    const d = Math.hypot(stand.x - a.x, stand.z - a.z);
    /* #91: steer at the next waypoint of a path through the open cells, not at
       the front itself - with a bend in the tunnel the straight line is earth. */
    if (!w.nav) w.nav = makeNavState();
    const atEnd = atClosestApproach(w.nav, a, d, siteROf(face));
    tickNav(w.nav, dt, d > siteROf(face) && !atEnd ? a : null);
    const wp = d > siteROf(face) ? navTarget(w.nav, a, stand.x, stand.z) : stand;
    const dx = wp.x - a.x, dz = wp.z - a.z;

    if (d <= siteROf(face) || atEnd) {
      a.speed = 0;
      // face the wall and work: yaw at the face, so the crew reads as a crew
      a.yaw = dampAngle(a.yaw, Math.atan2(face.x - a.x, face.z - a.z), 4, dt);
      w.atFace = true;
    } else {
      w.atFace = false;
      a.yaw = dampAngle(a.yaw, Math.atan2(dx, dz), 6, dt);
      a.speed = WORKER_SPEED * 0.9;
      const step = a.speed * dt;
      const fx = a.x, fz = a.z;
      a.x += Math.sin(a.yaw) * step;
      a.z += Math.cos(a.yaw) * step;
      a.travel += step;
      // in the nest she does not walk through earth: slide along the wall or stay (#91)
      containAiStep(a, fx, fz);
    }
    /* a worker's floor, not the queen's: groundY() answers for a queen-sized
       body and in a tunnel dug at the plan tool's default radius that is a
       strip two units wide, off which it says 'meadow' and she would pop up
       through the roof. floorY also carries her feet (legs.js floorUnder). */
    const aiFloor = aiFloorAt(a.x, a.z, a.y);
    a.floorY = aiFloor;
    a.y = aiFloor !== null ? aiFloor : groundY(a.x, a.z, a.y);
    a.bob = Math.sin(a.travel * (Math.PI * 2 / strideOf(DIGGER)) * 2) * 0.13
          * Math.min(1, a.speed / 8);
    updateLegs(a, w.legState, dt, DIGGER);
  }

  /* A controlled digger walks herself (movement.js); all this decides is
     whether she is at a face — the same test the AI's arrival uses, against
     the nearest open face's stand-off point — so the crew rule (#76) reads the
     same way for her as for the others. */
  function stepControlledDigger(w, faces) {
    let face = null, bestD = Infinity;
    for (const f of faces) {
      const d = Math.hypot(f.x + f.nx * standoffOf(f) - w.ant.x, f.z + f.nz * standoffOf(f) - w.ant.z);
      if (d < bestD) { bestD = d; face = f; }
    }
    w.faceId = face ? face.id : null;
    w.atFace = !!face && bestD <= siteROf(face);
  }

  /** Release: the brain restarts from a clean slate (no stale target/path). */
  function resetBrain(w) { w.targetId = null; w.repath = 0; w.atFace = false; }

  function stepWorker(w, dt) {
    const a = w.ant;
    const home = nestOrigin();

    /* Pick a goal. Re-picked on a timer rather than every frame: the nearest
       live node changes as other workers drain them, and a worker that
       re-decides sixty times a second oscillates between two equidistant
       seeds instead of walking to either. */
    w.repath -= dt;
    let goal = null;
    if (w.carrying) {
      goal = home;
    } else {
      if (w.repath <= 0 || w.targetId === null) {
        const n = nearestLiveNode(a.x, a.z);
        w.targetId = n ? n.id : null;
        w.repath = REPATH_EVERY;
      }
      const n = w.targetId !== null ? RESOURCE_NODES.find((r) => r.id === w.targetId) : null;
      goal = n && n.amount > 0 ? n : null;
      if (!goal) w.targetId = null;
    }

    if (!goal) { a.speed = 0; updateLegs(a, w.legState, dt, WORKER); return; }

    const dx = goal.x - a.x, dz = goal.z - a.z;
    const d = Math.hypot(dx, dz);

    if (d <= ARRIVE) {
      a.speed = 0;
      if (w.carrying) {
        // home: drop what she carries
        state.delivered += WORKER_CARRY;
        w.carrying = null;
      } else {
        const took = harvestNode(w.targetId, WORKER_CARRY);
        if (took > 0) w.carrying = goal.kind;
        w.targetId = null;
      }
    } else {
      a.yaw = dampAngle(a.yaw, Math.atan2(dx, dz), 6, dt);
      // slow down while turning hard, so she arcs into a target instead of
      // pivoting on the spot and sliding sideways
      const face = Math.cos(a.yaw - Math.atan2(dx, dz));
      a.speed = WORKER_SPEED * Math.max(0.25, face);
      const step = a.speed * dt;
      a.x += Math.sin(a.yaw) * step;
      a.z += Math.cos(a.yaw) * step;
      a.travel += step;
    }

    a.y = groundY(a.x, a.z, a.y);
    a.bob = Math.sin(a.travel * (Math.PI * 2 / strideOf(WORKER)) * 2) * 0.13
          * Math.min(1, a.speed / 8);
    updateLegs(a, w.legState, dt, WORKER);
  }

  function update(dt) {
    const home = nestOrigin();
    if (!home) return;   // nothing hatches before there is a nest

    for (let i = state.eggs.length - 1; i >= 0; i--) {
      const e = state.eggs[i];
      e.age += dt;
      if (e.age >= paceTime(HATCH_SECONDS)) {
        state.eggs.splice(i, 1);
        // she comes out of the nest mouth, not out of the ground beside it
        const a = Math.random() * Math.PI * 2;
        state.workers.push(spawnWorker(home.x + Math.cos(a) * 9, home.z + Math.sin(a) * 9, e.profileId));
      }
    }

    if (plans) plans.update(dt);
    const faces = allFaces();
    const diggerWorkers = state.workers.filter((w) => w.profileId === 'digger' && !w.controlled);
    const assignment = faces.length ? assignDiggers(diggerWorkers, faces) : null;

    state.digging = 0;
    for (const w of state.workers) {
      if (w.controlled) {
        if (w.profileId === 'digger') { stepControlledDigger(w, faces); if (w.atFace) state.digging++; }
        continue;   // the player steers her; nothing else about her is the AI's
      }
      if (w.profileId === 'digger') {
        stepDigger(w, dt, faces, assignment && assignment.get(w.id));
        if (w.atFace) state.digging++;
      } else {
        stepWorker(w, dt);
      }
    }

    /* The gauge, per face. Ant-seconds, so the crew size is the rate. What
       the face opens is the world's decision and payDigFace() is idempotent,
       because the caller here is a progress bar and progress bars overshoot.

       Grouped by face rather than summed, so that when there are several
       faces (the hall's own walls, #52) two fouisseuses on different walls do
       not add up into one gauge that finishes both. */
    state.faceWork.clear();
    state.faceRate.clear();
    for (const w of state.workers) {
      if (w.profileId !== 'digger' || !w.atFace || !w.faceId) continue;
      state.faceWork.set(w.faceId, (state.faceWork.get(w.faceId) || 0) + 1);
      state.faceRate.set(w.faceId, (state.faceRate.get(w.faceId) || 0) + (w.controlled ? CONTROL_DIG_MULT : 1));
    }
    const facesById = new Map(faces.map((f) => [f.id, f]));
    for (const [id, crew] of state.faceWork) {
      /* #76: below the minimum crew, a face does not creep — it pays
         nothing at all, rather than a trickle no one would notice. */
      const f = facesById.get(id);
      if (f && crew < requiredCrewFor(f)) continue;
      const r = f && f.plan
        ? plans.pay(id, state.faceRate.get(id) * dt * paceDigMultiplier())
        : payDigFace(id, state.faceRate.get(id) * dt * paceDigMultiplier());
      if (r && r.opened) {
        state.opened.push(r.opened.id);
        state.lastOpened = r.opened;
      }
    }
  }

  /* The test pace divides waits by 8 (core/pace.js). A face carries its cost
     in ant-seconds, so the pace has to be applied to the RATE rather than to
     the requirement — paceTime() shrinks a duration, and there is no duration
     here to shrink. */
  const paceDigMultiplier = () => DIG_SECONDS / Math.max(1e-6, paceTime(DIG_SECONDS));

  /**
   * Every open, unfinished face the gauge COULD draw — one entry per face,
   * carrying its own world position, progress and crew. Not "the" face to
   * show: with the hall's walls opening several at once (#62), narrowing
   * this down to the one the player is actually looking at needs a camera,
   * and colony.js has never had one (the world/gameplay split in the
   * contract keeps it that way on purpose). player/index.js's projectDig()
   * is the one that picks at most one of these to hand to the HUD.
   */
  function digCandidates() {
    return allFaces().map((f) => ({
      id: f.id, x: f.x, y: f.y, z: f.z,
      progress: f.needed > 0 ? f.worked / f.needed : 0,
      diggers: state.faceWork.get(f.id) || 0,
      required: requiredCrewFor(f),   // #76: so the HUD can say why it waits
    }));
  }

  /**
   * How far along the most-advanced egg of this caste is (0..1), or null
   * when none is incubating. #75's caste squares read this for the
   * "in production" state — the clutch/laying state living in colony.js's
   * own eggs, not a second tally kept beside it. The MOST advanced egg
   * (not the average) is shown: a clutch is laid all at once so its eggs
   * share an age, and this only diverges once an older clutch of the same
   * caste is still incubating behind a newer one — the number the square
   * should show is "how soon until one more hatches", not a blend.
   */
  function casteProgress(id) {
    let best = -1;
    for (const e of state.eggs) {
      if (e.profileId !== id) continue;
      const p = e.age / paceTime(HATCH_SECONDS);
      if (p > best) best = p;
    }
    return best < 0 ? null : Math.min(1, best);
  }

  /** One line for the HUD, or null while there is nothing to say. */
  function statusText() {
    if (!state.workers.length && !state.eggs.length) return null;
    const parts = [];
    const foragers = state.workers.filter((w) => w.profileId !== 'digger').length;
    const diggers = state.workers.length - foragers;
    if (foragers) parts.push(`${foragers} ouvrière${foragers > 1 ? 's' : ''}`);
    if (diggers) parts.push(`${diggers} fouisseuse${diggers > 1 ? 's' : ''}`);
    if (state.eggs.length) parts.push(`${state.eggs.length} œuf${state.eggs.length > 1 ? 's' : ''}`);
    if (state.delivered) parts.push(`${state.delivered} rapporté${state.delivered > 1 ? 's' : ''}`);
    return `Colonie : ${parts.join(' · ')}`;
  }

  /** Everything a saved game would need. No THREE.js, no closures. */
  function serialise() {
    return {
      delivered: state.delivered,
      queenHp: { ...state.queenHp },
      eggs: state.eggs.map((e) => ({ id: e.id, age: e.age })),
      opened: state.opened.slice(),
      workers: state.workers.map((w) => ({
        id: w.id, profileId: w.profileId, carrying: w.carrying,
        x: w.ant.x, z: w.ant.z, yaw: w.ant.yaw,
      })),
    };
  }

  /* Test-only: places a worker directly rather than through an egg (#76's
     verify-crew-76.mjs measures the crew threshold without waiting out
     HATCH_SECONDS or a walk from the nest mouth first). Not reached by any
     in-game code path — spawnWorker() above is what the real hatch loop
     calls — but it is the same function, so a harness-spawned digger is
     exactly what a hatched one would be, not a stand-in shaped like one. */
  function spawnAt(x, z, profileId = 'digger') {
    const w = spawnWorker(x, z, profileId);
    state.workers.push(w);
    return w;
  }

  return {
    state, addEggs, update, statusText, digCandidates, serialise, casteProgress,
    spawnAt, resetBrain,
    collideRadius: () => collideRadius(WORKER),
  };
}
