import { groundY, RESOURCE_NODES, harvestNode, nestOrigin } from '../world/index.js';
import { WORKER, strideOf, collideRadius } from './avatar.js';
import { makeAnt, makeLegState, updateLegs } from './legs.js';
import { dampAngle } from './mathUtil.js';

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
    eggs: [],          // [{ id, age }]
    workers: [],       // see spawnWorker()
    delivered: 0,      // units the colony has brought home on its own
  };

  function spawnWorker(x, z) {
    const ant = makeAnt(x, 0, z, WORKER);
    ant.y = groundY(x, z);
    ant.yaw = Math.random() * Math.PI * 2;
    return {
      id: _nextId++,
      profileId: 'worker',
      profile: WORKER,
      ant,
      legState: makeLegState(WORKER),
      carrying: null,      // node kind being carried, or null
      targetId: null,      // resource node id, when foraging
      repath: 0,
    };
  }

  /** An egg is laid. Called by laying.js when a clutch lands. */
  function addEggs(count) {
    for (let i = 0; i < count; i++) state.eggs.push({ id: _nextId++, age: 0 });
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
      if (e.age >= HATCH_SECONDS) {
        state.eggs.splice(i, 1);
        // she comes out of the nest mouth, not out of the ground beside it
        const a = Math.random() * Math.PI * 2;
        state.workers.push(spawnWorker(home.x + Math.cos(a) * 9, home.z + Math.sin(a) * 9));
      }
    }

    for (const w of state.workers) stepWorker(w, dt);
  }

  /** One line for the HUD, or null while there is nothing to say. */
  function statusText() {
    if (!state.workers.length && !state.eggs.length) return null;
    const parts = [];
    if (state.workers.length) parts.push(`${state.workers.length} ouvrière${state.workers.length > 1 ? 's' : ''}`);
    if (state.eggs.length) parts.push(`${state.eggs.length} œuf${state.eggs.length > 1 ? 's' : ''}`);
    if (state.delivered) parts.push(`${state.delivered} rapporté${state.delivered > 1 ? 's' : ''}`);
    return `Colonie : ${parts.join(' · ')}`;
  }

  /** Everything a saved game would need. No THREE.js, no closures. */
  function serialise() {
    return {
      delivered: state.delivered,
      eggs: state.eggs.map((e) => ({ id: e.id, age: e.age })),
      workers: state.workers.map((w) => ({
        id: w.id, profileId: w.profileId, carrying: w.carrying,
        x: w.ant.x, z: w.ant.z, yaw: w.ant.yaw,
      })),
    };
  }

  return { state, addEggs, update, statusText, serialise, collideRadius: () => collideRadius(WORKER) };
}
