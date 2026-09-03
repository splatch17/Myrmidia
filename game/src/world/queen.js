import * as THREE from 'three';
import { nrm3, cross3, add3, sub3, scl3, makeBasis, applyBasis, segBasis } from '../core/vecmath.js';
import { clamp } from '../core/noise.js';
import { MeshBuilder, unitSphere, unitCylinder } from '../core/meshBuilder.js';
import { undergroundFloor, QUEEN } from './underground.js';

/* ==========================================================================
   The queen. Ported from drawQueen() in
   design/prototypes/sortie-fourmiliere.html (~line 2818), which redrew her
   from scratch every frame with immediate-mode matrices. Here the parts that
   never move (thorax, head, eyes, mandibles, the six legs she never walks on)
   are baked once into a single geometry, and only what actually animates gets
   its own object: the two gaster segments that breathe, and the four antenna
   bones that read the air. She is furniture the moment she stops moving, and
   she is the first thing the player sees at spawn.
   ========================================================================== */

const C_QUEEN_A = new THREE.Color('#b07226').toArray();
const C_QUEEN_B = new THREE.Color('#5e3d16').toArray();
const C_EYE = new THREE.Color('#100c06').toArray();

const S = 2.4;                  // she is ~2.4x a worker
const LEG_L1 = 2.7, LEG_L2 = 2.9;

/* Two-bone IK, same as the old prototype's solveKnee() — duplicated here
   rather than imported from player/legs.js on purpose: the world must not
   depend on the player module. */
function solveKnee(hip, foot, l1, l2, poleDir) {
  const d = sub3(foot, hip);
  const raw = Math.hypot(d[0], d[1], d[2]);
  const dist = clamp(raw, 0.05, l1 + l2 - 0.02);
  const dn = scl3(d, 1 / (raw || 1));
  const a = (l1 * l1 - l2 * l2 + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(l1 * l1 - a * a, 0));
  const dot = poleDir[0] * dn[0] + poleDir[1] * dn[1] + poleDir[2] * dn[2];
  const perp = nrm3(sub3(poleDir, scl3(dn, dot)));
  return add3(add3(hip, scl3(dn, a)), scl3(perp, h));
}

function primGeometry(prim) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(prim.p, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(prim.n, 3));
  g.setIndex(prim.i);
  return g;
}

/* A basis (three scaled axes + origin) straight into an Object3D's local
   matrix — the animated parts are placed the way the old prototype placed
   everything, by writing the matrix, not by decomposing into TRS. */
function setFromBasis(obj, b) {
  obj.matrix.set(
    b.x[0], b.y[0], b.z[0], b.p[0],
    b.x[1], b.y[1], b.z[1], b.p[1],
    b.x[2], b.y[2], b.z[2], b.p[2],
    0, 0, 0, 1,
  );
  obj.matrixWorldNeedsUpdate = true;
}

export function buildQueen() {
  const group = new THREE.Group();
  group.name = 'queen';

  const base = [QUEEN[0], undergroundFloor(QUEEN[0], QUEEN[2]), QUEEN[2]];
  const yaw = Math.PI;                        // she faces the length of the chamber
  const fwd = [Math.sin(yaw), 0, Math.cos(yaw)];
  const up = [0, 1, 0];
  const side = nrm3(cross3(up, fwd));
  const mat = makeBasis(side, up, fwd, [base[0], base[1] + 1.05 * S, base[2]]);
  const toWorld = (local) => applyBasis(mat, scl3(local, S));

  const spherePrim = unitSphere(12, 9);
  const cylPrim = unitCylinder(8);

  const M = new MeshBuilder();
  const ellBasis = (local, rx, ry, rz) => makeBasis(
    scl3(side, rx * S), scl3(up, ry * S), scl3(fwd, rz * S), toWorld(local));
  const ell = (local, rx, ry, rz, tint) => M.bake(spherePrim, ellBasis(local, rx, ry, rz), () => tint);
  const bone = (a, b, r, tint) => M.bake(cylPrim, segBasis(a, b, r), () => tint);

  ell([0, 1.5, -1.2], 0.5, 0.5, 0.62, C_QUEEN_B);        // petiole
  ell([0, 1.62, 0.5], 1.06, 1.02, 1.75, C_QUEEN_A);      // thorax
  ell([0, 1.66, 2.7], 1.18, 1.02, 1.12, C_QUEEN_A);      // head
  ell([0.76, 2.12, 3.1], 0.3, 0.26, 0.3, C_EYE);
  ell([-0.76, 2.12, 3.1], 0.3, 0.26, 0.3, C_EYE);

  for (let sM = -1; sM <= 1; sM += 2) {                   // mandibles
    bone(toWorld([sM * 0.55, 1.45, 3.5]), toWorld([sM * 0.34, 1.2, 4.8]), 0.17 * S, C_QUEEN_A);
  }

  // legs: she never walks, so they are solved once and baked
  const QH = [[0.92, 1.5, 1.7], [-0.92, 1.5, 1.7], [1.02, 1.4, 0.4],
              [-1.02, 1.4, 0.4], [0.92, 1.4, -1.15], [-0.92, 1.4, -1.15]];
  const QF = [[4.1, 0, 3.9], [-4.1, 0, 3.9], [4.9, 0, 0.3],
              [-4.9, 0, 0.3], [4.5, 0, -3.5], [-4.5, 0, -3.5]];
  for (let i = 0; i < 6; i++) {
    const hip = toWorld(QH[i]);
    const foot = toWorld(QF[i]);
    foot[1] = undergroundFloor(foot[0], foot[2]);
    const outward = QH[i][0] > 0 ? side : scl3(side, -1);
    const knee = solveKnee(hip, foot, LEG_L1 * S, LEG_L2 * S,
      nrm3(add3(up, scl3(outward, 0.75))));
    bone(hip, knee, 0.2 * S, C_QUEEN_B);
    bone(knee, foot, 0.14 * S, C_QUEEN_B);
    M.bake(spherePrim, makeBasis([0.3 * S, 0, 0], [0, 0.3 * S, 0], [0, 0, 0.3 * S], knee), () => C_QUEEN_B);
  }

  const bodyMat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.45, metalness: 0.05,
  });
  const body = new THREE.Mesh(M.toBufferGeometry(), bodyMat);
  body.name = 'queen-body';
  body.castShadow = true;
  group.add(body);

  // ---- animated parts: gaster (breathing) and antennae (reading the air)
  const sphereGeo = primGeometry(spherePrim);
  const cylGeo = primGeometry(cylPrim);
  const chitinMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color().fromArray(C_QUEEN_B), roughness: 0.45, metalness: 0.05,
  });

  const gaster = [
    { local: [0, 1.5, -5.4], rx: 1.34, ry: 1.30, rz: 1.9 },
    { local: [0, 1.55, -3.2], rx: 1.60, ry: 1.54, rz: 2.1 },
  ].map((g) => {
    const mesh = new THREE.Mesh(sphereGeo, chitinMat);
    mesh.matrixAutoUpdate = false;
    mesh.castShadow = true;
    group.add(mesh);
    return { mesh, ...g };
  });

  const antenna = [];
  for (let sA = -1; sA <= 1; sA += 2) {
    for (let seg = 0; seg < 2; seg++) {
      const mesh = new THREE.Mesh(cylGeo, chitinMat);
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
      antenna.push({ mesh, sA, seg });
    }
  }

  function update(t) {
    const breathe = 1 + Math.sin(t * 0.55) * 0.04;
    for (const g of gaster) {
      setFromBasis(g.mesh, ellBasis(g.local, g.rx * breathe, g.ry * breathe, g.rz));
    }
    for (const a of antenna) {
      const sw = Math.sin(t * 1.1 + (a.sA > 0 ? 0 : 1.3)) * 0.35;
      const root = toWorld([a.sA * 0.58, 2.1, 3.2]);
      const elbow = toWorld([a.sA * (1.4 + sw * 0.3), 3.3, 4.2]);
      const tip = toWorld([a.sA * (1.85 + sw), 3.2 + sw * 0.4, 6.1]);
      setFromBasis(a.mesh, a.seg === 0
        ? segBasis(root, elbow, 0.14 * S)
        : segBasis(elbow, tip, 0.11 * S));
    }
  }

  update(0);
  return { group, update };
}
