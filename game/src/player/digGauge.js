import * as THREE from 'three';

/* ==========================================================================
   Which dig-face gauge the HUD draws, and where (#62 requirement 2).

   PULLED OUT OF player/index.js so it can be proven on its own. The hall's
   own walls can open several dig faces at once (#62); colony.js hands up one
   candidate per open face (digCandidates()) and this file is what narrows
   that down to AT MOST ONE screen gauge — three overlapping rings was
   exactly the defect the ticket calls out, and "narrows to one" is a claim
   worth a unit test that does not need a browser, a build, or a second real
   dig face (which the live world does not have yet — see
   scripts/verify-dig-gauge-pick.mjs).

   THE RULE: nearest to the centre of the screen, and only if it is close
   enough to the centre that "she is looking at it" is a fair description. A
   face sitting at the very edge of the frustum is technically inside it but
   is not what the player is looking at; that case draws nothing rather than
   the least-bad candidate.
   ========================================================================== */

/** Half-angle (in NDC) that counts as "looking at it". Loose enough that a
 *  face a little off dead-centre still shows (the camera drifts as she
 *  walks), tight enough that two faces on opposite walls of the same room
 *  are never both inside it at once. */
export const LOOK_NDC_MAX = 0.6;

const _dp = new THREE.Vector3();

/** Project one candidate against `camera`. Exported mainly so a caller (the
 *  HUD) can still get sx/sy/scale for the one pickDigGauge() chooses. */
export function projectDigCandidate(g, camera) {
  _dp.set(g.x, g.y + 6.5, g.z);
  const d = _dp.distanceTo(camera.position);
  _dp.project(camera);
  /* z outside [-1,1] is behind the near plane or past the far one; a point
     behind the camera projects to a mirrored position on screen, which is a
     gauge floating over open meadow while the face is at her back. */
  const visible = _dp.z > -1 && _dp.z < 1
    && _dp.x > -1.35 && _dp.x < 1.35 && _dp.y > -1.35 && _dp.y < 1.35;
  const w = (typeof window !== 'undefined' ? window.innerWidth : 1) || 1;
  const h = (typeof window !== 'undefined' ? window.innerHeight : 1) || 1;
  return {
    ...g,
    sx: (_dp.x * 0.5 + 0.5) * w,
    sy: (-_dp.y * 0.5 + 0.5) * h,
    scale: 46 / Math.max(12, d),
    visible,
    ndc: Math.hypot(_dp.x, _dp.y),   // distance from screen centre, in NDC
  };
}

/**
 * From every open, unfinished dig face (colony.js's digCandidates()), the
 * one gauge the HUD should draw this frame, or null.
 */
export function pickDigGauge(candidates, camera) {
  if (!candidates || !candidates.length) return null;
  let best = null;
  for (const g of candidates) {
    const p = projectDigCandidate(g, camera);
    if (!p.visible || p.ndc > LOOK_NDC_MAX) continue;
    if (!best || p.ndc < best.ndc) best = p;
  }
  return best;
}
