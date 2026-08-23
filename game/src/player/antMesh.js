import * as THREE from 'three';
import { nrm3, scl3, segBasis } from '../core/vecmath.js';
import { antMatrix, localToWorld, solveKnee, LEGS, LEG_L1, LEG_L2 } from './legs.js';

/* ==========================================================================
   Procedural ant mesh: the same low-poly hexapod as
   design/prototypes/sortie-fourmiliere.html's drawAnt() (section 5), but as
   persistent THREE.Mesh instances whose matrices get rewritten every frame
   instead of one draw call per part every frame — same visual result, more
   Three-idiomatic. Two shared geometries (a unit sphere and a unit cylinder,
   y in [0,1] to match core/vecmath.js's segBasis()) are scaled/oriented per
   part via matrixAutoUpdate=false + a directly-written THREE.Matrix4, the
   Three equivalent of the old file's m4Basis()/segMat().
   ========================================================================== */

const C_HEAD = 0x8b5a24;
const C_GASTER = 0x432d15;
const C_LEG = 0x6b4420;
const C_MAND = 0xc9903f;
const C_EYE = 0x100c06;

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

function ellipsoidMesh(color) {
  const { sphereGeo } = sharedGeometries();
  const mesh = new THREE.Mesh(sphereGeo, material(color));
  mesh.matrixAutoUpdate = false;
  mesh.castShadow = true;
  return mesh;
}
function boneMesh(color) {
  const { cylGeo } = sharedGeometries();
  const mesh = new THREE.Mesh(cylGeo, material(color));
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

/**
 * Builds one ant's mesh (player or, later, an NPC) as a THREE.Group plus an
 * updatePose(a, legState, elapsed) to call every frame. `a` is the plain
 * ant-record shape from legs.js (makeAnt()); legState from makeLegState().
 */
export function buildAntMesh() {
  const group = new THREE.Group();
  group.name = 'ant';

  const gaster = ellipsoidMesh(C_GASTER);
  const petiole = ellipsoidMesh(C_GASTER);
  const alitrunk = ellipsoidMesh(C_HEAD);
  const head = ellipsoidMesh(C_HEAD);
  const eyeL = ellipsoidMesh(C_EYE);
  const eyeR = ellipsoidMesh(C_EYE);
  group.add(gaster, petiole, alitrunk, head, eyeL, eyeR);

  const mandL = boneMesh(C_MAND), mandR = boneMesh(C_MAND);
  group.add(mandL, mandR);

  const antL1 = boneMesh(C_LEG), antL2 = boneMesh(C_LEG);
  const antR1 = boneMesh(C_LEG), antR2 = boneMesh(C_LEG);
  group.add(antL1, antL2, antR1, antR2);

  const legParts = LEGS.map(() => ({
    thigh: boneMesh(C_LEG), shin: boneMesh(C_LEG),
    knee: ellipsoidMesh(C_LEG), foot: ellipsoidMesh(C_LEG),
  }));
  for (const lp of legParts) group.add(lp.thigh, lp.shin, lp.knee, lp.foot);

  function updatePose(a, legState, elapsed) {
    const mat = antMatrix(a);
    const b = mat.basis;

    setEllipsoid(gaster, localToWorld(mat, [0, 1.55, -3.1]), scl3(b.side, 1.35), scl3(b.up, 1.30), scl3(b.fwd, 1.95));
    setEllipsoid(petiole, localToWorld(mat, [0, 1.50, -1.25]), scl3(b.side, 0.42), scl3(b.up, 0.42), scl3(b.fwd, 0.42));
    setEllipsoid(alitrunk, localToWorld(mat, [0, 1.60, 0.35]), scl3(b.side, 0.95), scl3(b.up, 0.92), scl3(b.fwd, 1.55));
    setEllipsoid(head, localToWorld(mat, [0, 1.62, 2.55]), scl3(b.side, 1.12), scl3(b.up, 0.98), scl3(b.fwd, 1.05));
    setEllipsoid(eyeL, localToWorld(mat, [0.72, 2.05, 2.95]), scl3(b.side, 0.30), scl3(b.up, 0.26), scl3(b.fwd, 0.30));
    setEllipsoid(eyeR, localToWorld(mat, [-0.72, 2.05, 2.95]), scl3(b.side, 0.30), scl3(b.up, 0.26), scl3(b.fwd, 0.30));

    const mand = 0.22 + Math.sin(elapsed * 3.1) * 0.06 + Math.max(0, Math.min(a.speed, 14)) * 0.012;
    setBone(mandL, localToWorld(mat, [0.52, 1.42, 3.35]), localToWorld(mat, [0.30 + mand, 1.22, 4.55]), 0.15);
    setBone(mandR, localToWorld(mat, [-0.52, 1.42, 3.35]), localToWorld(mat, [-(0.30 + mand), 1.22, 4.55]), 0.15);

    const swL = Math.sin(elapsed * 2.4) * 0.42, sw2L = Math.cos(elapsed * 1.7 + 0.4) * 0.3;
    const rootL = localToWorld(mat, [0.55, 2.05, 3.05]);
    const elbowL = localToWorld(mat, [1.35 + swL * 0.25, 3.15 + sw2L * 0.3, 4.0]);
    const tipL = localToWorld(mat, [1.75 + swL, 3.05 + sw2L, 5.9]);
    setBone(antL1, rootL, elbowL, 0.13);
    setBone(antL2, elbowL, tipL, 0.10);

    const swR = Math.sin(elapsed * 2.4 + 1.1) * 0.42, sw2R = Math.cos(elapsed * 1.7 + 1.9) * 0.3;
    const rootR = localToWorld(mat, [-0.55, 2.05, 3.05]);
    const elbowR = localToWorld(mat, [-(1.35 + swR * 0.25), 3.15 + sw2R * 0.3, 4.0]);
    const tipR = localToWorld(mat, [-(1.75 + swR), 3.05 + sw2R, 5.9]);
    setBone(antR1, rootR, elbowR, 0.13);
    setBone(antR2, elbowR, tipR, 0.10);

    for (let i = 0; i < LEGS.length; i++) {
      const L = LEGS[i], S = legState[i], lp = legParts[i];
      const hipW = localToWorld(mat, L.hip);
      const footW = S.planted;
      const outward = L.hip[0] > 0 ? b.side : scl3(b.side, -1);
      const pole = nrm3([b.up[0] + outward[0] * 0.75, b.up[1] + outward[1] * 0.75, b.up[2] + outward[2] * 0.75]);
      const knee = solveKnee(hipW, footW, LEG_L1, LEG_L2, pole);
      setBone(lp.thigh, hipW, knee, 0.19);
      setBone(lp.shin, knee, footW, 0.13);
      setEllipsoid(lp.knee, knee, [0.24, 0, 0], [0, 0.24, 0], [0, 0, 0.24]);
      setEllipsoid(lp.foot, footW, [0.17, 0, 0], [0, 0.17, 0], [0, 0, 0.17]);
    }
  }

  return { group, updatePose };
}
