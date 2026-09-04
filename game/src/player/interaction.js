import { collideRadius, PLAYER_AVATAR } from './avatar.js';
import { nearestClimbable, tryInteract, climbPromptText, GRASS } from './climb.js';
import { TREE } from '../world/index.js';
import { createHarvest, FOUND_STOCK, CACHE_RADIUS } from './harvest.js';
import { KIND_LABEL, nodesAreProvisional } from './resources.js';
import { canFound, found, refusalText, isFounded, provisional as foundingProvisional, FOUND_SECONDS, nestOrigin, bearingWord } from './founding.js';
import { createLaying } from './laying.js';

/* ==========================================================================
   One key, several verbs (#29/#33).

   E stays the interaction key it already is in climb.js — the old prototype's
   contextual E (grimper / redescendre / ramasser) is the schema this project
   settled on, and adding a second key for every new verb would undo that. So
   this module is the priority ladder that decides which verb E means right
   now, and the sentence that tells the player which one it picked before they
   press it.

   Two press shapes, deliberately different:
     - a *tap* for the instant gestures (grab a stem, put down what you carry)
     - a *hold* for the ones that cost time and have to be seen costing it
       (harvesting a seed, digging the first chamber). input.js already gives
       both: an edge-triggered consumeInteract() and a raw isInteractHeld().

   Ladder, top first. Only one rung can ever be true at a time except where
   noted, and the note is the reason for the order:
     1. climbing            -> E dismounts (climb.js owns the rules)
     2. carrying something  -> E drops it (starts/adds to the pile)
     3. enough on the pile, standing on it -> hold E to found. Above
        harvesting on purpose: once the stock is there, the pile *is* the
        next gesture, and the player who wants more can simply walk to a node
        (the pile is where she chose to put it, not where the food is).
     4. a node in reach     -> hold E to harvest
     5. a stem/trunk in reach -> E climbs
   Once the colony exists, rung 3 becomes "hold E at the mouth to lay the next
   clutch" (#6): same gesture, same pile, same cost — the loop does not change
   shape once the nest is dug, it changes what the five units buy.
   ========================================================================== */

const HOLD_KINDS = { harvest: true, found: true, lay: true };

const LAY_SECONDS = 2.2;    // held: going down to lay
const MOUTH_RADIUS = 15;    // how close to her own entrance counts as "at it"

export function createInteraction({ profile = PLAYER_AVATAR } = {}) {
  const harvest = createHarvest();
  const bodyR = collideRadius(profile);

  const laying = createLaying();
  let foundProgress = 0, layProgress = 0;
  let lastMessage = null, messageTimer = 0;

  /** Distance from the ant to the mouth of her own nest, or Infinity. */
  function mouthDistance(ant) {
    const o = nestOrigin();
    return o ? Math.hypot(o.x - ant.x, o.z - ant.z) : Infinity;
  }

  /** Can she go down and lay right now? The clutch costs what the founding
   *  cost: five units on the pile, hauled the same way. */
  function canLay(ant) {
    return isFounded() && !foundingProvisional() && laying.canLayMore()
      && harvest.stock() >= FOUND_STOCK && mouthDistance(ant) <= MOUTH_RADIUS;
  }

  function say(text, seconds = 3.2) { lastMessage = text; messageTimer = seconds; }

  /** What E means right now. Pure — the HUD reads it every frame. */
  function resolve(ant) {
    // the founding sequence owns her (laying.js): E means nothing until it
    // hands her back
    if (laying.active()) return { kind: 'sequence' };
    if (ant.climb) return { kind: 'climb', climbTarget: null };

    if (harvest.state.carrying) {
      const kind = harvest.state.carrying.kind;
      if (harvest.canDrop(ant)) {
        return { kind: 'drop', label: harvest.state.cache ? 'ajouter au dépôt' : 'poser ici — ce sera le dépôt' };
      }
      // too far from her own pile: the return trip is the point, so say where
      const d = harvest.cacheDistance(ant);
      const c = harvest.state.cache;
      return {
        kind: 'return',
        label: `rapporter ${KIND_LABEL[kind]} au dépôt (${d.toFixed(0)} u ${bearingWord(ant.x, ant.z, c.x, c.z)})`,
      };
    }

    const cache = harvest.state.cache;
    if (cache && !isFounded() && harvest.enough() && harvest.cacheDistance(ant) <= CACHE_RADIUS) {
      const verdict = canFound(ant.x, ant.z);
      return { kind: 'found', ok: verdict.ok, reason: verdict.reason, assumed: verdict.assumed };
    }

    if (canLay(ant)) return { kind: 'lay' };

    const node = harvest.target(ant, bodyR);
    if (node) return { kind: 'harvest', node };

    const climbTarget = nearestClimbable(ant);
    if (climbTarget) return { kind: 'climb', climbTarget };

    return { kind: 'none' };
  }

  /**
   * One frame. `pressed` is the consumed edge, `held` the raw key state.
   * Returns the resolved action so the HUD can describe it without resolving
   * a second time (and possibly differently).
   */
  function update(ant, pressed, held, dt) {
    /* The sequence moves the ant itself, so it runs before anything that
       might also move her, and it is stepped even when it is idle: it owns
       the prologue -> colony crossfade, which outlives the last phase. */
    laying.update(ant, dt);
    const ev = laying.eventText();
    if (ev) say(ev, 6);

    const act = resolve(ant);

    if (messageTimer > 0) { messageTimer -= dt; if (messageTimer <= 0) lastMessage = null; }

    // any rung that is not the hold it was on lets that hold decay
    if (act.kind !== 'harvest' || !held) harvest.release(dt);
    if (act.kind !== 'found' || !held || !act.ok) foundProgress = Math.max(0, foundProgress - dt / FOUND_SECONDS);
    if (act.kind !== 'lay' || !held) layProgress = Math.max(0, layProgress - dt / LAY_SECONDS);

    switch (act.kind) {
      case 'harvest': {
        if (held) {
          const r = harvest.hold(act.node, dt);
          if (r === 'taken') say(`elle emporte ${KIND_LABEL[harvest.state.carrying.kind]}`);
          else if (r === 'empty') say('plus rien à prendre ici');
        }
        break;
      }
      case 'found': {
        if (held && act.ok) {
          foundProgress += dt / FOUND_SECONDS;
          if (foundProgress >= 1) {
            foundProgress = 0;
            const res = found(ant.x, ant.z);
            say(res.ok
              ? (foundingProvisional()
                ? 'Colonie fondée ici. (le monde ne creuse pas encore la chambre)'
                : 'Colonie fondée ici.')
              : `impossible : ${refusalText(res.reason)}`, 6);
            /* Straight into the descent, with no free walk in between: the
               sky's crossfade has to happen while she is underground
               (design/ressources-et-fondation.md §7a). laying.js refuses on
               its own if the world could not actually dig a chamber. */
            if (res.ok) {
              /* The pile is what she dug with: it goes into the founding, the
                 same five units a later clutch costs. Leaving it standing let
                 the queen lay a second clutch the moment she climbed back out
                 of the first, on food she had never gone back for. */
              harvest.spend(FOUND_STOCK);
              laying.begin(ant);
            }
          }
        }
        break;
      }
      case 'lay': {
        if (held) {
          layProgress += dt / LAY_SECONDS;
          if (layProgress >= 1) {
            layProgress = 0;
            if (laying.begin(ant)) harvest.spend(FOUND_STOCK);
          }
        }
        break;
      }
      case 'drop':
        if (pressed) {
          const kind = harvest.state.carrying.kind;
          if (harvest.drop(ant)) {
            say(harvest.stock() === 1
              ? `dépôt ouvert ici — ${KIND_LABEL[kind]} posée`
              : `${KIND_LABEL[kind]} ajoutée au dépôt (${harvest.stock()}/${FOUND_STOCK})`);
          }
        }
        break;
      case 'climb':
        if (pressed) tryInteract(ant, act.climbTarget);
        break;
      default:
        break;
    }

    return act;
  }

  /* ---- what the HUD says -------------------------------------------------- */

  function pct(v) { return `${Math.round(v * 100)}%`; }

  /** The contextual line: what E would do, or how far along the current hold
   *  is. Null when there is nothing to say. */
  function promptText(ant, act) {
    if (act.kind === 'sequence') return laying.promptText();
    if (act.kind === 'lay') {
      if (layProgress > 0) return `Ponte… ${pct(layProgress)}`;
      return `E (maintenir) — descendre pondre (${FOUND_STOCK} unités du dépôt)`;
    }
    if (act.kind === 'climb') return climbPromptText(ant, act.climbTarget);
    if (act.kind === 'return') return act.label;
    if (act.kind === 'drop') return `E — ${act.label}`;
    if (act.kind === 'harvest') {
      const n = act.node;
      if (harvest.state.progress > 0) return `Récolte… ${pct(harvest.state.progress)}`;
      return `E (maintenir) — récolter ${KIND_LABEL[n.kind]}`;
    }
    if (act.kind === 'found') {
      if (!act.ok) return `Fonder ici : ${refusalText(act.reason)}`;
      if (foundProgress > 0) return `Creusement… ${pct(foundProgress)}`;
      return 'E (maintenir) — fonder la colonie ici';
    }
    return null;
  }

  /** The standing objective: what this whole prologue is for, in one line. */
  function objectiveText(ant) {
    if (laying.active()) return 'La fondation : elle descend pondre.';
    if (isFounded()) {
      const o = nestOrigin();
      const d = Math.hypot(o.x - ant.x, o.z - ant.z);
      const where = d < 12 ? 'ici' : `à ${d.toFixed(0)} u ${bearingWord(ant.x, ant.z, o.x, o.z)}`;
      const tail = foundingProvisional() ? ' [chambre non creusée]' : '';
      const brood = laying.brood();
      if (brood === 0) return `Colonie fondée ${where}. Objectif : descendre pondre.${tail}`;
      if (!laying.canLayMore()) return `${brood} couvées — la chambre est pleine. Suite : les ouvrières.${tail}`;
      const missing = FOUND_STOCK - harvest.stock();
      if (missing > 0) {
        return `${brood} couvée${brood > 1 ? 's' : ''}. Objectif : ${missing} unité${missing > 1 ? 's' : ''} de plus pour la suivante.${tail}`;
      }
      return `${brood} couvée${brood > 1 ? 's' : ''}. Objectif : rentrer pondre — le nid est ${where}.${tail}`;
    }
    const missing = FOUND_STOCK - harvest.stock();
    if (harvest.state.carrying) {
      return harvest.state.cache
        ? `Objectif : rapporter au dépôt — encore ${missing} pour fonder`
        : 'Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie';
    }
    if (harvest.enough()) return 'Objectif : fonder la colonie sur le dépôt';
    const tail = nodesAreProvisional() ? ' [nœuds provisoires]' : '';
    return `Objectif : récolter ${missing} unité${missing > 1 ? 's' : ''} de plus${tail}`;
  }

  function inventoryText() { return harvest.inventoryLine(); }
  function message() { return lastMessage; }

  /** 0..1 while a held action is running, null when none is. The HUD draws a
   *  bar from it — the percentage was already in the prompt text, and a
   *  number that has to be read is not the same as a bar that is seen. */
  function holdProgress(act) {
    if (act.kind === 'harvest' && harvest.state.progress > 0) return harvest.state.progress;
    if (act.kind === 'found' && foundProgress > 0) return foundProgress;
    if (act.kind === 'lay' && layProgress > 0) return layProgress;
    return null;
  }

  /**
   * Where E is pointing, for the ground ring — {x, z, radius, blocked}, or
   * null. Resolved from the same `act` the prompt describes, so the ring and
   * the sentence can never disagree about what is being talked about.
   */
  function targetMark(ant, act) {
    switch (act.kind) {
      case 'harvest':
        return { x: act.node.x, z: act.node.z, radius: Math.max(act.node.r, 6), blocked: false };
      case 'found': {
        const c = harvest.state.cache;
        return c ? { x: c.x, z: c.z, radius: 11, blocked: !act.ok } : null;
      }
      case 'drop': {
        const c = harvest.state.cache;
        // before the first drop there is no pile: the ring goes under the
        // queen, because *here* is exactly what the action means
        return { x: c ? c.x : ant.x, z: c ? c.z : ant.z, radius: c ? 11 : 7, blocked: false };
      }
      case 'return': {
        const c = harvest.state.cache;
        return c ? { x: c.x, z: c.z, radius: 11, blocked: false } : null;
      }
      case 'lay': {
        const o = nestOrigin();
        return o ? { x: o.x, z: o.z, radius: 9, blocked: false } : null;
      }
      case 'climb': {
        const t = act.climbTarget;
        if (!t) return null;
        if (t.kind === 'tree') return { x: TREE.x, z: TREE.z, radius: TREE.w + 5, blocked: false };
        const g = GRASS[t.i];
        return g ? { x: g.x, z: g.z, radius: 5, blocked: false } : null;
      }
      default:
        return null;
    }
  }

  return {
    harvest, laying, update, resolve, promptText, objectiveText, inventoryText, message,
    holdProgress, targetMark,
    /** True while the founding sequence, not the player, is driving the ant. */
    busy: () => laying.active(),
    /** The scripted camera shot for this frame, or null (camera.js). */
    shot: (ant) => laying.shot(ant),
    isHold: (act) => !!HOLD_KINDS[act.kind],
    endFrame: () => harvest.endFrame(),
  };
}
