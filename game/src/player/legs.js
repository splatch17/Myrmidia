import { clamp, lerp, damp } from '../core/noise.js';
import { nrm3, cross3, add3, sub3, scl3 } from '../core/vecmath.js';
import { groundY, groundNormal, TREE, treeWalkBranch } from '../world/index.js';
import { bladeClimbBasis } from '../world/blade.js';
import { GRASS } from './climb.js';

/* ==========================================================================
   Hexapod locomotion: two-bone IK per leg driving a tripod gait, ported from
   design/prototypes/sortie-fourmiliere.html section 5 (antBasis/antMatrix/
   updateLegs/solveKnee). Ground case ported for #20/#21; the a.climb branch
   (grass/tree climbing, #5) was intentionally deferred that round and is
   added here — see climb.js for how ant.climb gets set. The legs then just
   read whatever basis antBasis() below hands them, ground or blade/trunk
   alike, so climb.js and this file don't need to know about each other's
   internals beyond the {kind, i/seg, t/u} shape of ant.climb.

   Everything here works on plain arrays (not THREE.Vector3), same reasoning
   as core/vecmath.js: this is a straight port of generator code that already
   reads that way, and the mesh layer (antMesh.js) is the only place that
   needs to touch THREE objects.
   ========================================================================== */

export const LEG_L1 = 2.7, LEG_L2 = 2.9;

// local-space hips and rest feet: +Z is forward, +X is the left side
export const LEGS = [
  { hip: [ 0.85, 1.5,  1.5], rest: [ 3.6, 0,  3.4], phase: 0.0 },
  { hip: [-0.85, 1.5,  1.5], rest: [-3.6, 0,  3.4], phase: 0.5 },
  { hip: [ 0.95, 1.4,  0.3], rest: [ 4.3, 0,  0.2], phase: 0.5 },
  { hip: [-0.95, 1.4,  0.3], rest: [-4.3, 0,  0.2], phase: 0.0 },
  { hip: [ 0.85, 1.4, -1.0], rest: [ 4.0, 0, -3.2], phase: 0.0 },
  { hip: [-0.85, 1.4, -1.0], rest: [-4.0, 0, -3.2], phase: 0.5 },
];

export const STRIDE = 7.0; // world distance per full gait cycle

export function makeAnt(x, y, z) {
  return {
    x, y, z,
    yaw: 0,       // 0 = facing +Z
    speed: 0,
    travel: 0,    // distance walked, drives the gait
    bob: 0,
    climb: null,  // null on the ground; {kind:'grass',i,t} or {kind:'tree',seg,t|u} while climbing — see climb.js
    legsInit: false,
  };
}

export function makeLegState() {
  return LEGS.map(() => ({ planted: [0, 0, 0], from: [0, 0, 0], to: [0, 0, 0], swinging: false, prevP: 0 }));
}

/* side/up/fwd in world space for the ant's current pose. */
export function antBasis(a) {
  if (a.climb) {
    if (a.climb.kind === 'tree') {
      if (a.climb.seg === 'trunk') {
        const tcb = bladeClimbBasis(TREE, a.climb.t);
        return { side: tcb.width, up: tcb.normal, fwd: tcb.tangent };
      }
      // the branch is a round tube walked over the top of, not a face clung
      // to — treeWalkBranch.basis() already returns exactly this shape
      const wb = treeWalkBranch.basis(a.climb.u);
      return { side: wb.side, up: wb.up, fwd: wb.fwd };
    }
    const cb = bladeClimbBasis(GRASS[a.climb.i], a.climb.t);
    // local Y (up) -> away from the blade face, local Z (fwd) -> up the
    // blade, local X (side) -> across the blade's width — legs land on the
    // flat face.
    return { side: cb.width, up: cb.normal, fwd: cb.tangent };
  }
  const gn = groundNormal(a.x, a.z);
  const up = nrm3([gn[0] * 0.7, 1, gn[2] * 0.7]);
  const fRaw = [Math.sin(a.yaw), 0, Math.cos(a.yaw)];
  const side = nrm3(cross3(up, fRaw));
  const fwd = cross3(side, up);
  return { side, up, fwd };
}

/* A basis = three (already-scaled) axis vectors + an origin, matching
   core/vecmath.js's makeBasis/applyBasis shape, so antMesh.js can feed it
   straight into a THREE.Matrix4.makeBasis()+setPosition() without another
   conversion step. */
export function antMatrix(a) {
  const b = antBasis(a);
  if (a.climb) {
    const p = add3([a.x, a.y, a.z], scl3(b.up, 1.05 + a.bob));
    return { side: b.side, up: b.up, fwd: b.fwd, p, basis: b };
  }
  const p = [a.x, groundY(a.x, a.z) + 1.05 + a.bob, a.z];
  return { side: b.side, up: b.up, fwd: b.fwd, p, basis: b };
}

export function localToWorld(mat, v) {
  const [lx, ly, lz] = v;
  return [
    mat.side[0] * lx + mat.up[0] * ly + mat.fwd[0] * lz + mat.p[0],
    mat.side[1] * lx + mat.up[1] * ly + mat.fwd[1] * lz + mat.p[1],
    mat.side[2] * lx + mat.up[2] * ly + mat.fwd[2] * lz + mat.p[2],
  ];
}

/* Two-bone IK: place the knee so hip->knee->foot has the given bone lengths,
   with the joint pushed toward poleDir (up and outward for an ant). */
export function solveKnee(hip, foot, l1, l2, poleDir) {
  const d = sub3(foot, hip);
  const rawDist = Math.hypot(d[0], d[1], d[2]) || 1;
  const dist = clamp(rawDist, 0.05, l1 + l2 - 0.02);
  const dn = scl3(d, 1 / rawDist);
  const aLen = (l1 * l1 - l2 * l2 + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(l1 * l1 - aLen * aLen, 0));
  const dot = poleDir[0] * dn[0] + poleDir[1] * dn[1] + poleDir[2] * dn[2];
  const perp = nrm3(sub3(poleDir, scl3(dn, dot)));
  return add3(add3(hip, scl3(dn, aLen)), scl3(perp, h));
}

export function updateLegs(a, legState, dt) {
  const mat = antMatrix(a);
  const b = mat.basis;
  const gaitPhase = a.travel / STRIDE;
  const climbing = !!a.climb; // on a blade/trunk, feet stay on the flat face instead of a height field

  for (let i = 0; i < LEGS.length; i++) {
    const L = LEGS[i], S = legState[i];
    const restW = localToWorld(mat, L.rest);
    if (!climbing) restW[1] = groundY(restW[0], restW[2]);

    if (!a.legsInit) { S.planted = restW.slice(); S.from = restW.slice(); S.to = restW.slice(); }

    let p = (gaitPhase + L.phase) % 1;
    if (p < 0) p += 1;

    if (p >= 0.5 && S.prevP < 0.5) {
      S.swinging = true;
      S.from = S.planted.slice();
      const ahead = add3(restW, scl3(b.fwd, STRIDE * 0.38 * clamp(a.speed / 16, 0, 1.4)));
      if (!climbing) ahead[1] = groundY(ahead[0], ahead[2]);
      S.to = ahead;
    }
    if (p < 0.5 && S.prevP >= 0.5) {
      S.swinging = false;
      S.planted = S.to.slice();
    }
    S.prevP = p;

    if (S.swinging) {
      const t = (p - 0.5) * 2;
      const lift = Math.sin(t * Math.PI) * 1.5;
      S.planted = [
        lerp(S.from[0], S.to[0], t),
        lerp(S.from[1], S.to[1], t) + lift,
        lerp(S.from[2], S.to[2], t),
      ];
    }

    if (a.speed < 0.4 && !S.swinging) {
      S.planted[0] = damp(S.planted[0], restW[0], 4, dt);
      S.planted[1] = damp(S.planted[1], restW[1], 4, dt);
      S.planted[2] = damp(S.planted[2], restW[2], 4, dt);
    }
  }
  a.legsInit = true;
}
