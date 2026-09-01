import * as THREE from 'three';
import { nrm3, scl3, segBasis } from '../core/vecmath.js';
import { antMatrix, localToWorld, solveKnee } from './legs.js';
import { PLAYER_AVATAR, legLengths } from './avatar.js';

/* ==========================================================================
   Procedural ant mesh: the same low-poly hexapod as
   design/prototypes/sortie-fourmiliere.html's drawAnt() (section 5), but as
   persistent THREE.Mesh instances whose matrices get rewritten every frame
   instead of one draw call per part every frame — same visual result, more
   Three-idiomatic. Two shared geometries (a unit sphere and a unit cylinder,
   y in [0,1] to match core/vecmath.js's segBasis()) are scaled/oriented per
   part via matrixAutoUpdate=false + a directly-written THREE.Matrix4, the
   Three equivalent of the old file's m4Basis()/segMat().

   Which body gets drawn is the avatar profile's (avatar.js): the part table
   is data, so the founding queen (#32) is the same six ellipsoids + bones
   with world/queen.js's own proportions and a two-segment breathing gaster,
   not a second mesh builder. Sizes are all in the profile's local frame;
   antMatrix() carries the scale, so nothing here multiplies by it.
   ========================================================================== */

let sphereGeo = null, cylGeo = null;
function sharedGeometries() {
  if (!sphereGeo) {
    sphereGeo = new THREE.SphereGeometry(1, 12, 8);
    cylGeo = new THREE.CylinderGeometry(1, 1, 1, 7).translate(0, 0.5, 0); // y: 0..1, matches segBasis()
  }
  return { sphereGeo, cylGeo };
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

function partMesh(geo, color) {
  const mesh = new THREE.Mesh(geo, material(color));
  mesh.matrixAutoUpdate = false;
  mesh.castShadow = true;
  return mesh;
}

// Reused across setEllipsoid/setBone calls to avoid an allocation per part
// per frame — 30-something parts * 60fps adds up otherwise.
const _m4 = new THREE.Matrix4();
const _vx = new THREE.Vector3(), _vy = new THREE.Vector3(), _vz = new THREE.Vector3(), _vp = new THREE.Vector3();

function setEllipsoid(mesh, worldPos, xAxis, yAxis, zAxis) {
  _vx.set(xAxis[0], xAxis[1], xAxis[2]);
  _vy.set(yAxis[0], yAxis[1], yAxis[2]);
  _vz.set(zAxis[0], zAxis[1], zAxis[2]);
  _m4.makeBasis(_vx, _vy, _vz);
  _vp.set(worldPos[0], worldPos[1], worldPos[2]);
  _m4.setPosition(_vp);
  mesh.matrix.copy(_m4);
}

function setBone(mesh, a, c, radius) {
  const basis = segBasis(a, c, radius); // {x,y,z,p} — see core/vecmath.js
  setEllipsoid(mesh, basis.p, basis.x, basis.y, basis.z);
}

// mirror a local-space point to the other side of the body
function mirror(v) { return [-v[0], v[1], v[2]]; }

/**
 * Builds one ant's mesh (player or, later, an NPC) as a THREE.Group plus an
 * updatePose(a, legState, elapsed) to call every frame. `a` is the plain
 * ant-record shape from legs.js (makeAnt()); legState from makeLegState().
 */
export function buildAntMesh(profile = PLAYER_AVATAR) {
  const { sphereGeo: SG, cylGeo: CG } = sharedGeometries();
  const B = profile.body, C = profile.colors;
  const [L1, L2] = legLengths(profile);

  const group = new THREE.Group();
  group.name = 'ant';

  const gaster = B.gaster.map(() => partMesh(SG, C.chitinB));
  const petiole = partMesh(SG, C.chitinB);
  const thorax = partMesh(SG, C.chitinA);
  const head = partMesh(SG, C.chitinA);
  const eyeL = partMesh(SG, C.eye), eyeR = partMesh(SG, C.eye);
  group.add(...gaster, petiole, thorax, head, eyeL, eyeR);

  const mandL = partMesh(CG, C.mandible), mandR = partMesh(CG, C.mandible);
  group.add(mandL, mandR);

  const antL1 = partMesh(CG, C.limb), antL2 = partMesh(CG, C.limb);
  const antR1 = partMesh(CG, C.limb), antR2 = partMesh(CG, C.limb);
  group.add(antL1, antL2, antR1, antR2);

  const legParts = profile.legs.map(() => ({
    thigh: partMesh(CG, C.limb), shin: partMesh(CG, C.limb),
    knee: partMesh(SG, C.limb), foot: partMesh(SG, C.limb),
  }));
  for (const lp of legParts) group.add(lp.thigh, lp.shin, lp.knee, lp.foot);

  function updatePose(a, legState, elapsed) {
    const mat = antMatrix(a);
    const b = mat.basis;
    const s = mat.scale;
    const ell = (mesh, at, r, k = 1) => setEllipsoid(
      mesh, localToWorld(mat, at),
      scl3(b.side, r[0] * s * k), scl3(b.up, r[1] * s * k), scl3(b.fwd, r[2] * s * k));

    // the queen's gaster breathes, as it does on the seated queen
    // (world/queen.js): a slow 4% swell that keeps her alive-looking while
    // the player stands still, which matters a lot in a prologue spent alone
    const breathe = profile.breathes ? 1 + Math.sin(elapsed * 0.55) * 0.04 : 1;
    for (let i = 0; i < gaster.length; i++) ell(gaster[i], B.gaster[i].at, B.gaster[i].r, breathe);
    ell(petiole, B.petiole.at, B.petiole.r);
    ell(thorax, B.thorax.at, B.thorax.r);
    ell(head, B.head.at, B.head.r);
    ell(eyeL, B.eye.at, B.eye.r);
    ell(eyeR, mirror(B.eye.at), B.eye.r);

    const M = B.mandible;
    const gape = M.gape + Math.sin(elapsed * 3.1) * 0.06 + Math.max(0, Math.min(a.speed, 14)) * 0.012;
    const mTip = [M.tip[0] + gape, M.tip[1], M.tip[2]];
    setBone(mandL, localToWorld(mat, M.root), localToWorld(mat, mTip), M.r * s);
    setBone(mandR, localToWorld(mat, mirror(M.root)), localToWorld(mat, mirror(mTip)), M.r * s);

    const A = B.antenna;
    for (const side of [1, -1]) {
      const sw = Math.sin(elapsed * 2.4 + (side > 0 ? 0 : 1.1)) * 0.42;
      const sw2 = Math.cos(elapsed * 1.7 + (side > 0 ? 0.4 : 1.9)) * 0.3;
      const flip = (v) => (side > 0 ? v : mirror(v));
      const root = localToWorld(mat, flip(A.root));
      const elbow = localToWorld(mat, flip([A.elbow[0] + sw * 0.25, A.elbow[1] + sw2 * 0.3, A.elbow[2]]));
      const tip = localToWorld(mat, flip([A.tip[0] + sw, A.tip[1] + sw2, A.tip[2]]));
      setBone(side > 0 ? antL1 : antR1, root, elbow, A.r1 * s);
      setBone(side > 0 ? antL2 : antR2, elbow, tip, A.r2 * s);
    }

    const LR = B.legR;
    for (let i = 0; i < profile.legs.length; i++) {
      const L = profile.legs[i], S = legState[i], lp = legParts[i];
      const hipW = localToWorld(mat, L.hip);
      const footW = S.planted;
      const outward = L.hip[0] > 0 ? b.side : scl3(b.side, -1);
      const pole = nrm3([b.up[0] + outward[0] * 0.75, b.up[1] + outward[1] * 0.75, b.up[2] + outward[2] * 0.75]);
      const knee = solveKnee(hipW, footW, L1, L2, pole);
      setBone(lp.thigh, hipW, knee, LR.thigh * s);
      setBone(lp.shin, knee, footW, LR.shin * s);
      const kr = LR.knee * s, fr = LR.foot * s;
      setEllipsoid(lp.knee, knee, [kr, 0, 0], [0, kr, 0], [0, 0, kr]);
      setEllipsoid(lp.foot, footW, [fr, 0, 0], [0, fr, 0], [0, 0, fr]);
    }
  }

  return { group, updatePose };
}
