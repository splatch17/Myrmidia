import { groundY } from '../world/index.js';
import { nodeInReach, takeFromNode, countLabel, KIND_LABEL, resourceNodes } from './resources.js';

/* ==========================================================================
   The harvest loop (#29): find something, spend time taking it, carry it
   home, drop it on the pile.

   Two rules shape everything below.

   1. Harvesting takes *time* and it is time spent standing there, not a
      counter ticking up on contact. The key is held (interaction.js), the
      progress is on screen, and walking out of reach cancels it. A queen who
      teleports a seed into an inventory has no reason to have legs.

   2. The carry has a destination. She holds one thing at a time, in her
      mandibles (props.js draws it), and the first time she puts something
      down that spot *becomes* the pile — the cache. Everything after that is
      hauled back to it. That is what makes the return trip mean something,
      and it is also the site commitment the founding needs: the colony is
      founded on the pile, so choosing where to drop the first seed is
      choosing where to live. (design/boucle-de-jeu.md §1: explore, gather,
      then dig where you decided.)

   Pure logic — no THREE, no DOM. props.js draws what this records.
   ========================================================================== */

export const HARVEST_SECONDS = 1.8;  // held, per unit taken
export const CACHE_RADIUS = 16;      // how close to the pile a drop counts
export const FOUND_STOCK = 5;        // units on the pile before founding opens

// Progress is not thrown away the instant the key is released — a hand that
// slips off E should not cost the whole dig. It drains at half the rate it
// filled, so an interrupted harvest is a setback and not a reset.
const PROGRESS_DRAIN = 0.5;

export function createHarvest() {
  const state = {
    /** {kind} she is holding, or null. One item, in the mandibles. */
    carrying: null,
    /** {x, y, z, items: {kind: n}, total} — created by the first drop. */
    cache: null,
    /** 0..1 of the harvest currently under way, and which node it is on. */
    progress: 0,
    activeId: null,
    /** set for one frame when a unit is actually taken / dropped, so the HUD
     *  and props.js can react without polling for a change. */
    justTook: null,
    justDropped: null,
  };

  function reset() { state.progress = 0; state.activeId = null; }

  /**
   * The node she is close enough to work, or null.
   *
   * Latched: once a dig has started, it stays on *that* node as long as it is
   * still in reach, instead of re-answering "nearest" every frame. Found by
   * watching the harness fail — the world seeds nodes densely enough that two
   * clutches often overlap, "nearest" flips as she shifts her weight, and
   * every flip reset the progress, so holding E over a thicket of seeds
   * harvested nothing at all.
   */
  function target(ant, bodyR) {
    if (state.activeId !== null) {
      const nodes = resourceNodes();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (n.id !== state.activeId) continue;
        if (n.amount > 0 && Math.hypot(n.x - ant.x, n.z - ant.z) <= n.r + bodyR * 0.6) return n;
        break;
      }
    }
    return nodeInReach(ant.x, ant.z, bodyR);
  }

  /**
   * One frame of holding the harvest key over `node`. Returns 'taken' on the
   * frame a unit lands in her mandibles, 'full' if she is already carrying,
   * 'progress' otherwise.
   */
  function hold(node, dt) {
    if (state.carrying) return 'full';
    if (!node) { release(dt); return 'idle'; }
    if (state.activeId !== node.id) { state.activeId = node.id; state.progress = 0; }
    state.progress += dt / HARVEST_SECONDS;
    if (state.progress < 1) return 'progress';

    // Believe the world, not the request: harvestNode() may hand back less
    // than asked for, or nothing at all if someone else emptied the node.
    const got = takeFromNode(node, 1);
    reset();
    if (got <= 0) return 'empty';
    state.carrying = { kind: node.kind };
    state.justTook = { kind: node.kind, qty: got, node };
    return 'taken';
  }

  /** Key not held (or nothing in reach): let the progress drain back. */
  function release(dt) {
    if (state.progress <= 0) { state.activeId = null; return; }
    state.progress = Math.max(0, state.progress - (dt * PROGRESS_DRAIN) / HARVEST_SECONDS);
    if (state.progress === 0) state.activeId = null;
  }

  /** Distance to the pile, or Infinity while there is no pile yet. */
  function cacheDistance(ant) {
    return state.cache ? Math.hypot(state.cache.x - ant.x, state.cache.z - ant.z) : Infinity;
  }

  /** Can she put down what she is holding, here and now? */
  function canDrop(ant) {
    if (!state.carrying) return false;
    return !state.cache || cacheDistance(ant) <= CACHE_RADIUS;
  }

  /** Put it down: starts the pile if there is none, adds to it otherwise. */
  function drop(ant) {
    if (!canDrop(ant)) return false;
    if (!state.cache) {
      state.cache = { x: ant.x, y: groundY(ant.x, ant.z), z: ant.z, items: {}, total: 0 };
    }
    const kind = state.carrying.kind;
    state.cache.items[kind] = (state.cache.items[kind] || 0) + 1;
    state.cache.total += 1;
    state.carrying = null;
    state.justDropped = { kind, cache: state.cache };
    return true;
  }

  /** Called once at the end of a frame: the one-frame event flags expire. */
  function endFrame() { state.justTook = null; state.justDropped = null; }

  function stock() { return state.cache ? state.cache.total : 0; }
  function enough() { return stock() >= FOUND_STOCK; }

  /** Remove `qty` units from the pile, any kind — the granary is one pool of
   *  "stored resources" once something is spent from it rather than carried
   *  and dropped (player/ponte.js: laying an egg costs the pile, not a
   *  specific kind). False and untouched if the pile does not have enough. */
  function spend(qty) {
    if (stock() < qty) return false;
    let remaining = qty;
    for (const kind of Object.keys(state.cache.items)) {
      if (remaining <= 0) break;
      const take = Math.min(state.cache.items[kind], remaining);
      state.cache.items[kind] -= take;
      remaining -= take;
    }
    state.cache.total -= qty;
    return true;
  }

  /** "2 graines · 1 brindille", or null while the pile is empty. */
  function stockDetail() {
    if (!state.cache || state.cache.total === 0) return null;
    return Object.entries(state.cache.items)
      .filter(([, n]) => n > 0)
      .map(([k, n]) => countLabel(k, n))
      .join(' · ');
  }

  /** "Porte : une graine · Réserve : 3/5 (2 graines · 1 brindille)" */
  function inventoryLine() {
    const carried = state.carrying ? `Porte : ${KIND_LABEL[state.carrying.kind]}` : 'Porte : rien';
    const detail = stockDetail();
    return `${carried} · Réserve : ${stock()}/${FOUND_STOCK}${detail ? ` (${detail})` : ''}`;
  }

  return {
    state, target, hold, release, canDrop, drop, cacheDistance,
    stock, enough, spend, stockDetail, inventoryLine, endFrame,
  };
}
