import * as THREE from 'three';
import { nrm3, scl3, segBasis } from '../core/vecmath.js';
import { antMatrix, localToWorld, solveKnee } from './legs.js';
import { PLAYER_AVATAR, legLengths } from './avatar.js';

/* ==========================================================================
   Procedural ant body: the same low-poly hexapod as
   design/prototypes/sortie-fourmiliere.html's drawAnt() (section 5).

   Which body gets drawn is the avatar profile's (avatar.js): the part table
   is data, so the founding queen (#32) is the same six ellipsoids + bones
   with world/queen.js's own proportions and a two-segment breathing gaster,
   not a second mesh builder. Sizes are all in the profile's local frame;
   antMatrix() carries the scale, so nothing here multiplies by it.

   #36 SPLIT THIS FILE IN TWO. The anatomy — where every ellipsoid and bone
   sits this frame, in world space — is now poseParts(), which emits parts to
   a callback and knows nothing about Three.js beyond the arrays it hands
   over. How those parts are *drawn* is somebody else's decision, and there
   are now two answers: one THREE.Mesh per part (buildAntMesh() below, what
   the game did with a single ant, kept because a measured before/after needs
   a "before" that still runs) and one InstancedMesh per geometry for every
   ant at once (antRenderer.js). Both walk the same emitter in the same
   order, so a second render path cannot quietly draw a different animal —
   which is the failure mode that would otherwise make this split a bad idea.
   ========================================================================== */

export const SPHERE = 0, CYL = 1;

/** How many parts poseParts() will emit for this body, and of which kind.
 *  Deterministic from the profile alone (gaster segments + leg count), which
 *  is what lets a renderer reserve its slots before the first pose. */
export function partCounts(profile) {
  const legs = profile.legs.length;
  return {
    // gaster segments + petiole + thorax + head + 2 eyes + 2 per leg (knee, foot)
    sphere: profile.body.gaster.length + 4 + legs * 2,
    // 2 mandibles + 4 antenna bones + 2 per leg (thigh, shin)
    cyl: 6 + legs * 2,
  };
}

// mirror a local-space point to the other side of the body
function mirror(v) { return [-v[0], v[1], v[2]]; }

/**
 * Walks one ant's anatomy for this frame and hands each part to `emit`:
 *
 *   emit(kind, p, ax, ay, az, color)
 *
 * `kind` is SPHERE or CYL; p/ax/ay/az are world-space origin and the three
 * (already scaled) axes, i.e. exactly a THREE.Matrix4.makeBasis()+
 * setPosition(); `color` is the part's colour from the profile.
 *
 * `a` is the plain ant-record from legs.js (makeAnt()), `legState` from
 * makeLegState(). Emission order is fixed — gaster, petiole, thorax, head,
 * eyes, mandibles, antennae, then per leg thigh/shin/knee/foot — because a
 * renderer that keeps persistent objects indexes into it.
 */
export function poseParts(profile, a, legState, elapsed, emit) {
  const B = profile.body, C = profile.colors;
  const [L1, L2] = legLengths(profile);
  const mat = antMatrix(a);
  const b = mat.basis;
  const s = mat.scale;

  const ell = (at, r, color, k = 1) => emit(
    SPHERE, localToWorld(mat, at),
    scl3(b.side, r[0] * s * k), scl3(b.up, r[1] * s * k), scl3(b.fwd, r[2] * s * k), color);
  const bone = (p0, p1, radius, color) => {
    const bs = segBasis(p0, p1, radius); // {x,y,z,p} — see core/vecmath.js
    emit(CYL, bs.p, bs.x, bs.y, bs.z, color);
  };

  // the queen's gaster breathes, as it does on the seated queen
  // (world/queen.js): a slow 4% swell that keeps her alive-looking while
  // the player stands still, which matters a lot in a prologue spent alone
  const breathe = profile.breathes ? 1 + Math.sin(elapsed * 0.55) * 0.04 : 1;
  for (let i = 0; i < B.gaster.length; i++) ell(B.gaster[i].at, B.gaster[i].r, C.chitinB, breathe);
  ell(B.petiole.at, B.petiole.r, C.chitinB);
  ell(B.thorax.at, B.thorax.r, C.chitinA);
  ell(B.head.at, B.head.r, C.chitinA);
  ell(B.eye.at, B.eye.r, C.eye);
  ell(mirror(B.eye.at), B.eye.r, C.eye);

  const M = B.mandible;
  const gape = M.gape + Math.sin(elapsed * 3.1) * 0.06 + Math.max(0, Math.min(a.speed, 14)) * 0.012;
  const mTip = [M.tip[0] + gape, M.tip[1], M.tip[2]];
  bone(localToWorld(mat, M.root), localToWorld(mat, mTip), M.r * s, C.mandible);
  bone(localToWorld(mat, mirror(M.root)), localToWorld(mat, mirror(mTip)), M.r * s, C.mandible);

  const A = B.antenna;
  for (const side of [1, -1]) {
    const sw = Math.sin(elapsed * 2.4 + (side > 0 ? 0 : 1.1)) * 0.42;
    const sw2 = Math.cos(elapsed * 1.7 + (side > 0 ? 0.4 : 1.9)) * 0.3;
    const flip = (v) => (side > 0 ? v : mirror(v));
    const root = localToWorld(mat, flip(A.root));
    const elbow = localToWorld(mat, flip([A.elbow[0] + sw * 0.25, A.elbow[1] + sw2 * 0.3, A.elbow[2]]));
    const tip = localToWorld(mat, flip([A.tip[0] + sw, A.tip[1] + sw2, A.tip[2]]));
    bone(root, elbow, A.r1 * s, C.limb);
    bone(elbow, tip, A.r2 * s, C.limb);
  }

  const LR = B.legR;
  for (let i = 0; i < profile.legs.length; i++) {
    const L = profile.legs[i], S = legState[i];
    const hipW = localToWorld(mat, L.hip);
    const footW = S.planted;
    const outward = L.hip[0] > 0 ? b.side : scl3(b.side, -1);
    const pole = nrm3([b.up[0] + outward[0] * 0.75, b.up[1] + outward[1] * 0.75, b.up[2] + outward[2] * 0.75]);
    const knee = solveKnee(hipW, footW, L1, L2, pole);
    bone(hipW, knee, LR.thigh * s, C.limb);
    bone(knee, footW, LR.shin * s, C.limb);
    const kr = LR.knee * s, fr = LR.foot * s;
    emit(SPHERE, knee, [kr, 0, 0], [0, kr, 0], [0, 0, kr], C.limb);
    emit(SPHERE, footW, [fr, 0, 0], [0, fr, 0], [0, 0, fr], C.limb);
  }
}

/* ---- shared geometry ----------------------------------------------------
   A unit sphere and a unit cylinder (y in [0,1] to match core/vecmath.js's
   segBasis()), used by both render paths — so switching paths cannot change
   the silhouette, only the number of draw calls. */
let sphereGeo = null, cylGeo = null;
export function sharedGeometries() {
  if (!sphereGeo) {
    sphereGeo = new THREE.SphereGeometry(1, 12, 8);
    cylGeo = new THREE.CylinderGeometry(1, 1, 1, 7).translate(0, 0.5, 0);
  }
  return { sphere: sphereGeo, cyl: cylGeo };
}

const materialCache = new Map();
function material(color) {
  let m = materialCache.get(color);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.05 });
    materialCache.set(color, m);
  }
  return m;
}

const _m4 = new THREE.Matrix4();
const _vx = new THREE.Vector3(), _vy = new THREE.Vector3(), _vz = new THREE.Vector3(), _vp = new THREE.Vector3();
export function composeMatrix(p, ax, ay, az) {
  _vx.set(ax[0], ax[1], ax[2]);
  _vy.set(ay[0], ay[1], ay[2]);
  _vz.set(az[0], az[1], az[2]);
  _m4.makeBasis(_vx, _vy, _vz);
  _vp.set(p[0], p[1], p[2]);
  _m4.setPosition(_vp);
  return _m4;
}

/**
 * The pre-#36 render path: one persistent THREE.Mesh per body part, matrices
 * rewritten every frame. Kept because it is the "before" the entity layer's
 * numbers are measured against, and because it is the fallback if instancing
 * ever misbehaves on a driver — it is NOT a second definition of the ant, it
 * is the same poseParts() walk with a different sink.
 */
export function buildAntMesh(profile = PLAYER_AVATAR) {
  const geo = sharedGeometries();
  const group = new THREE.Group();
  group.name = 'ant';
  const meshes = [];

  function updatePose(a, legState, elapsed) {
    let i = 0;
    poseParts(profile, a, legState, elapsed, (kind, p, ax, ay, az, color) => {
      let mesh = meshes[i];
      if (!mesh) {
        mesh = new THREE.Mesh(kind === SPHERE ? geo.sphere : geo.cyl, material(color));
        mesh.matrixAutoUpdate = false;
        mesh.castShadow = true;
        meshes[i] = mesh;
        group.add(mesh);
      }
      mesh.matrix.copy(composeMatrix(p, ax, ay, az));
      i++;
    });
  }

  return { group, updatePose };
}
