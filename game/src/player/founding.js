import * as world from '../world/index.js';
import { evaluateSite } from './siteQuality.js';

/* ==========================================================================
   Founding the colony (#33): the gesture the whole prologue points at.

   Contract consumed (design/api-monde-gameplay.md §4):
     canFoundAt(x, z) -> { ok, reason? }   answers without building anything
     foundNest(x, z)  -> { ok, reason? }   digs the first chamber
     nestOrigin()     -> { x, z } | null

   Division of labour, unchanged from soilAt/siteQuality: the world returns a
   **technical** reason string ('rock', 'water', 'slope', 'already-founded'),
   this file turns it into the sentence the player reads. The verdict itself
   is never re-decided here — asking canFoundAt() and then overruling it is
   exactly how two halves of one feature end up disagreeing.

   Fallback while foundNest()/canFoundAt() are still being written: the
   refusal falls back to siteQuality.js's own diggability blocker (which is
   built out of the terrain the world already publishes, so it is at least
   the same ground truth), and "founding" records the spot without digging
   anything. That state is *marked* — provisional() is true, and the HUD says
   the chamber has not been dug — rather than pretending a nest exists.
   ========================================================================== */

const W = { ...world };

export const FOUND_SECONDS = 4.0;   // held: digging the first chamber

/* The site reading's blocker keys are already 'soil'/'water'/'slope'/
   'underground'; the contract's are 'rock'/'water'/'slope'/'already-founded'.
   Both go through the same table so a phrase never depends on which side
   answered.

   'bounds' and 'occupied' are world/founding.js's two additions to the
   contract's list (the edge of the map, and the ground the pre-#11 gallery
   already runs under). Phrased here like every other reason; flagged to the
   integration so the contract's list catches up — not renamed on this side,
   which is exactly the drift the contract exists to prevent. */
const REASON_TEXT = {
  rock: 'la roche ne se creuse pas',
  soil: 'ce sol ne se creuse pas',
  water: "trop près de l'eau — la galerie serait inondée",
  slope: "la pente s'effondrerait",
  underground: 'on ne fonde pas dans une galerie déjà creusée',
  bounds: 'le bord du monde — il faut revenir vers le pré',
  occupied: 'une galerie passe déjà sous ce sol',
  'already-founded': 'la colonie est déjà fondée',
};

/** The player-facing sentence for a technical reason. An unknown key is
 *  shown as-is rather than swallowed: a silent "impossible" with no cause is
 *  the worst thing this readout could do. */
export function refusalText(reason) {
  if (!reason) return 'impossible de creuser ici';
  return REASON_TEXT[reason] || `impossible de creuser ici (${reason})`;
}

let localOrigin = null;   // fallback bookkeeping only — see the header
let usedFallback = false;

/** True while the world cannot actually dig, so nothing on screen claims a
 *  chamber exists that does not. */
export function provisional() {
  return typeof W.foundNest !== 'function' || usedFallback;
}

/** Where the nest is, or null. The world's answer when it has one. */
export function nestOrigin() {
  if (typeof W.nestOrigin === 'function') {
    const o = W.nestOrigin();
    if (o) return o;
  }
  return localOrigin;
}

export function isFounded() { return !!nestOrigin(); }

/**
 * Can the colony be founded here? Pure — asked every frame by the HUD.
 * `{ ok, reason }`, reason technical (refusalText() phrases it).
 */
export function canFound(x, z) {
  if (isFounded()) return { ok: false, reason: 'already-founded' };
  if (typeof W.canFoundAt === 'function') {
    const r = W.canFoundAt(x, z) || {};
    return { ok: !!r.ok, reason: r.reason, assumed: false };
  }
  // Same ground truth, one step removed: siteQuality.js's hard blockers are
  // built from the terrain the world does publish (soil kind, waterline,
  // slope). Marked assumed so nothing downstream treats it as the world's
  // final word.
  const site = evaluateSite(x, z);
  return site.diggable
    ? { ok: true, assumed: true }
    : { ok: false, reason: site.blocker.key, assumed: true };
}

/**
 * Dig here. Returns `{ ok, reason }` — and on the fallback path, `ok` with
 * `provisional()` true, meaning "the spot is chosen, the chamber is not dug".
 */
export function found(x, z) {
  const pre = canFound(x, z);
  if (!pre.ok) return pre;
  if (typeof W.foundNest === 'function') {
    const r = W.foundNest(x, z) || {};
    // mirrored so nestOrigin() answers even if the world's own getter lags
    if (r.ok) localOrigin = { x, z };
    return { ok: !!r.ok, reason: r.reason, assumed: false };
  }
  usedFallback = true;
  localOrigin = { x, z };
  return { ok: true, assumed: true };
}

/** Rough compass bearing from the ant to a point — "au nord-ouest". +Z is
 *  north in this world (the lawn runs north from the nest mouth at z=0). */
export function bearingWord(fromX, fromZ, toX, toZ) {
  const dx = toX - fromX, dz = toZ - fromZ;
  if (Math.hypot(dx, dz) < 1) return 'ici';
  const ns = dz > 8 ? 'nord' : dz < -8 ? 'sud' : '';
  const ew = dx > 8 ? 'est' : dx < -8 ? 'ouest' : '';
  if (ns && ew) return `au ${ns}-${ew}`;
  if (ew) return `à l'${ew}`;
  return `au ${ns}`;
}
