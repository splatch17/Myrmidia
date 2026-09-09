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
/* How close to a face counts as working it. A body length: close enough that
   the crew reads as being AT the wall, loose enough that three of them fit
   without shoving each other off the gauge. */
const DIG_SITE_R = 7;
/* Where a fouisseuse stands: off the wall along the face's own outward
   normal, so they line up facing it instead of piling onto its centre. */
const FACE_STANDOFF = 5.0;

const ARRIVE = 6;                    // how close counts as "there"
const REPATH_EVERY = 0.6;            // seconds between target re-picks

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

export function createColony() {
  const state = {
    eggs: [],          // [{ id, age, profileId }]
    workers: [],       // see spawnWorker()
    delivered: 0,      // units the colony has brought home on its own
    digging: 0,        // how many fouisseuses were at a face this frame
    faceWork: new Map(),  // face id -> how many are working it this frame
    opened: [],        // ids of the rooms the colony has dug open
    lastOpened: null,  // the most recent one, for the HUD to announce
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
  function stepDigger(w, dt) {
    const a = w.ant;
    const faces = digFaces();
    let face = null, bestD = Infinity;
    for (const f of faces) {
      const d = Math.hypot(f.x - a.x, f.z - a.z);
      if (d < bestD) { bestD = d; face = f; }
    }
    w.faceId = face ? face.id : null;
    if (!face) { w.atFace = false; a.speed = 0; return; }

    const stand = { x: face.x + face.nx * FACE_STANDOFF, z: face.z + face.nz * FACE_STANDOFF };
    const dx = stand.x - a.x, dz = stand.z - a.z;
    const d = Math.hypot(dx, dz);

    if (d <= DIG_SITE_R) {
      a.speed = 0;
      // face the wall and work: yaw at the face, so the crew reads as a crew
      a.yaw = dampAngle(a.yaw, Math.atan2(face.x - a.x, face.z - a.z), 4, dt);
      w.atFace = true;
    } else {
      w.atFace = false;
      a.yaw = dampAngle(a.yaw, Math.atan2(dx, dz), 6, dt);
      a.speed = WORKER_SPEED * 0.9;
      const step = a.speed * dt;
      a.x += Math.sin(a.yaw) * step;
      a.z += Math.cos(a.yaw) * step;
      a.travel += step;
    }
    a.y = groundY(a.x, a.z);
    a.bob = Math.sin(a.travel * (Math.PI * 2 / strideOf(DIGGER)) * 2) * 0.13
          * Math.min(1, a.speed / 8);
    updateLegs(a, w.legState, dt, DIGGER);
  }

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

    a.y = groundY(a.x, a.z);
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

    state.digging = 0;
    for (const w of state.workers) {
      if (w.profileId === 'digger') {
        stepDigger(w, dt);
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
    for (const w of state.workers) {
      if (w.profileId !== 'digger' || !w.atFace || !w.faceId) continue;
      state.faceWork.set(w.faceId, (state.faceWork.get(w.faceId) || 0) + 1);
    }
    for (const [id, crew] of state.faceWork) {
      const r = payDigFace(id, crew * dt * paceDigMultiplier());
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
   * What the circular gauge should draw, or null when there is nothing to
   * show. Carries the face's world position, because the gauge is drawn AT the
   * face (#51) rather than in a corner of the screen — that is the whole point
   * of the change: the player has to know where to look.
   */
  function digProgress() {
    const faces = digFaces();
    if (!faces.length) return null;
    /* The one being worked, else the nearest unfinished one — so the gauge
       appears as soon as there is earth to dig, greyed at zero, and the player
       learns where the work happens before laying anything. */
    let best = null;
    for (const f of faces) {
      const crew = state.faceWork.get(f.id) || 0;
      const score = crew * 1000 + f.worked;
      if (!best || score > best.score) best = { f, crew, score };
    }
    if (!best) return null;
    const { f, crew } = best;
    return {
      id: f.id, x: f.x, y: f.y, z: f.z,
      progress: f.needed > 0 ? f.worked / f.needed : 0,
      diggers: crew,
    };
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
      eggs: state.eggs.map((e) => ({ id: e.id, age: e.age })),
      opened: state.opened.slice(),
      workers: state.workers.map((w) => ({
        id: w.id, profileId: w.profileId, carrying: w.carrying,
        x: w.ant.x, z: w.ant.z, yaw: w.ant.yaw,
      })),
    };
  }

  return {
    state, addEggs, update, statusText, digProgress, serialise,
    collideRadius: () => collideRadius(WORKER),
  };
}
