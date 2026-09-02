import { nrm3, cross3, sub3 } from '../core/vecmath.js';

/* ==========================================================================
   Shared "blade curve" utilities — a grass blade and the tree trunk (see
   tree.js) are both shaped as a `{x, z, h, ang, baseY}` record bent along the
   same formula, ported from design/prototypes/sortie-fourmiliere.html
   (bladeBaseWidth/bladeCurvePoint/bladeClimbBasis, in its climbing section).
   Kept here rather than duplicated in grass.js and tree.js, and rather than
   owned by the player module, because it's pure geometry both world builders
   need; Cataglyphis's climb code is the other consumer (bladeClimbBasis
   returns exactly the {pos, tangent, width, normal} shape antBasis() wants).
   ========================================================================== */

// #19: grass used to read as a thread an ant balances on rather than a stalk
// it climbs -- this base radius grew from a near-flat 0.55+h*0.011 so even
// the shortest climbable blades are close to the ant's own body length
// across. Shared between the grass mesh/footprints and the tree trunk taper
// so the two can never drift apart.
/* Full width of a blade at its base, in world units — design/herbe-brins.md
   §2, and the single authority for it. The previous `1.7 + h*0.028` was
   calibrated in #19 against the 11-unit WORKER; the avatar became a 2.2x
   queen afterwards and the width never followed, so a tall blade stood 9.1
   units across against a queen 7.0 wide at her widest. A blade wider than the
   animal is why the field read as slats rather than as grass. The split is on
   CLIMB_MIN_H = 42, the threshold that already exists: below it grass, above
   it a stem that can be climbed. */
export function bladeWidthFor(h) {
  return h < 42
    ? Math.min(Math.max(h / 40, 0.55), 1.45)
    : Math.min(Math.max(2.10 + (h - 42) * 0.038, 2.10), 4.40);
}

/** Half width — what footprints[].w has always meant, and what climb.js and
 *  decorCollision.js read. */
export function bladeBaseWidth(h) { return bladeWidthFor(h) * 0.5; }

export function bladeCurvePoint(g, t) {
  const dx = Math.cos(g.ang), dz = Math.sin(g.ang);
  const bend = t * t * g.h * 0.26;
  return [g.x + dx * bend, g.baseY + g.h * t * (1 - t * 0.13), g.z + dz * bend];
}

/* The blade is a flat ribbon: tangent runs along its length, width runs
   across its face, and normal is the face an ant would cling to. */
export function bladeClimbBasis(g, t) {
  const p0 = bladeCurvePoint(g, t);
  const p1 = bladeCurvePoint(g, Math.min(t + 0.01, 1));
  const tangent = nrm3(sub3(p1, p0));
  const width = [-Math.sin(g.ang), 0, Math.cos(g.ang)];
  const normal = nrm3(cross3(tangent, width));
  return { pos: p0, tangent, width, normal };
}
