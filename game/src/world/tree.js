import * as THREE from 'three';
import { rng, vnoise, lerp, clamp } from '../core/noise.js';
import { nrm3, cross3, add3, sub3, scl3, segBasis } from '../core/vecmath.js';
import { MeshBuilder, unitSphere, unitCylinder } from '../core/meshBuilder.js';
import { bladeCurvePoint } from './blade.js';
import { groundY } from './terrain.js';

/* ==========================================================================
   The first tree — a landmark on the lawn, at grass-blade scale rather than
   a minimised one. Ported from design/prototypes/sortie-fourmiliere.html
   section 3b, values as of #19 (trunk h=340, base radius 22, tip radius
   6.2 — the "make the fourmi/herbe/arbre scale relationship read as
   physically credible" pass, see the agent file's #19 note).

   The trunk is shaped exactly like an oversized grass blade ({x,z,h,ang,
   baseY}) so bladeCurvePoint() (blade.js) already knows how to walk it —
   Cataglyphis's climb code can treat the trunk like any other GRASS entry.
   TREE.walkBranch exposes the one walkable branch (point/radius/basis(u))
   in the same {pos,fwd,side,up} shape a climbing ant basis needs.
   ========================================================================== */

export const TREE = { x: -85, z: 95, h: 340, ang: Math.PI / 2, w: 22 };
TREE.baseY = groundY(TREE.x, TREE.z);

const C_WALL_A = new THREE.Color('#5a4226'), C_WALL_B = new THREE.Color('#332412');
const C_ROOT = new THREE.Color('#4a3418');
const C_BARK_A = new THREE.Color(C_WALL_A).lerp(C_ROOT, 0.3);
const C_BARK_B = new THREE.Color(C_WALL_B).lerp(C_ROOT, 0.55);
const C_LEAF_A = new THREE.Color('#5d7a37'), C_LEAF_B = new THREE.Color('#93b25c');

function mixColor(a, b, t) { return new THREE.Color(a).lerp(b, clamp(t, 0, 1)); }

export const TREE_TRUNK_T = 0.8;  // where the bare trunk hands off to branches/canopy
export const TREE_TIP_R = 6.2;    // trunk radius at TREE_TRUNK_T, shared by both LOD levels

export function treeCenterAt(t) { return bladeCurvePoint(TREE, t); }

export function treeRingFrame(t) {
  const p0 = treeCenterAt(t), p1 = treeCenterAt(Math.min(t + 0.01, 1));
  const tangent = nrm3(sub3(p1, p0));
  const ref = Math.abs(tangent[1]) < 0.97 ? [0, 1, 0] : [1, 0, 0];
  const xA = nrm3(cross3(ref, tangent));
  return { p: p0, x: xA, z: cross3(xA, tangent) };
}

/* Trunk taper, t in [0, TREE_TRUNK_T] — exposed so gameplay code can read
   how thick the trunk is at a given climb height (the tapered equivalent of
   a GRASS entry's own w). */
export function treeTrunkRadius(t) {
  return lerp(TREE.w, TREE_TIP_R, Math.pow(clamp(t, 0, TREE_TRUNK_T) / TREE_TRUNK_T, 0.7));
}

/* ---- the walkable branch, distinct from the decorative fan in
   buildTreeMesh() below. See TREE.walkBranch at the bottom of this file for
   the API exposed to Cataglyphis (#5/#14). ---- */
const TREE_WALK_SPLIT_T = TREE_TRUNK_T * 0.55;
const TREE_WALK_ANG = Math.PI * 1.511;
const TREE_WALK_LEN = 98;
const TREE_WALK_RISE = 36;
const TREE_WALK_BASE_R = 9.6;
const TREE_WALK_TIP_R = 5.0;

const treeWalkFork = treeRingFrame(TREE_WALK_SPLIT_T);
const treeWalkSide = nrm3(add3(scl3(treeWalkFork.x, Math.cos(TREE_WALK_ANG)), scl3(treeWalkFork.z, Math.sin(TREE_WALK_ANG))));
const treeWalkStart = add3(treeWalkFork.p, scl3(treeWalkSide, treeTrunkRadius(TREE_WALK_SPLIT_T) * 0.7));

function treeWalkPoint(u) {
  const ease = 1 - (1 - u) * (1 - u);
  return add3(treeWalkStart, add3(scl3(treeWalkSide, u * TREE_WALK_LEN), [0, ease * TREE_WALK_RISE, 0]));
}
function treeWalkRadius(u) { return lerp(TREE_WALK_BASE_R, TREE_WALK_TIP_R, clamp(u, 0, 1)); }
function treeWalkBasis(u) {
  // clamped on both sides (u=1 IS the destination/viewpoint, not a point to
  // walk past — a forward-only difference degenerates exactly there)
  const p0 = treeWalkPoint(clamp(u - 0.005, 0, 1)), p1 = treeWalkPoint(clamp(u + 0.005, 0, 1));
  const fwd = nrm3(sub3(p1, p0));
  const side = nrm3(cross3(fwd, [0, 1, 0]));
  const up = nrm3(cross3(side, fwd));
  return { pos: treeWalkPoint(u), fwd, side, up };
}

/**
 * Exposed for Cataglyphis (#5/#14):
 *   - trunk portion, t in [0, TREE.walkBranch.splitT]: use
 *     bladeCurvePoint(TREE, t) / bladeClimbBasis(TREE, t) from blade.js
 *     directly, and treeTrunkRadius(t) for stand-off distance.
 *   - branch portion, u in [0, 1] (0 = the fork, 1 = the tip/viewpoint):
 *     point(u), radius(u), basis(u) -> {pos, fwd, side, up}.
 */
export const walkBranch = {
  splitT: TREE_WALK_SPLIT_T,
  point: treeWalkPoint,
  radius: treeWalkRadius,
  basis: treeWalkBasis,
  tipPos: treeWalkPoint(1),
  tipRadius: TREE_WALK_TIP_R,
};
TREE.walkBranch = walkBranch;

/* ---- mesh: two LOD levels of the same tree, wrapped in a THREE.LOD so the
   renderer picks which one to draw per-frame based on camera distance (the
   Three-idiomatic equivalent of the old prototype's manual hysteresis
   switch — see buildTree()'s comment there for the original budget numbers,
   which this mirrors: near ~1770 tris, far ~175 tris after #14/#19). ---- */
function buildTreeMesh(near) {
  const M = new MeshBuilder();
  const R = rng(near ? 481001 : 481002);
  const rings = near ? 20 : 4, angSegs = near ? 16 : 6;

  const rows = [];
  for (let ri = 0; ri <= rings; ri++) {
    const t = (ri / rings) * TREE_TRUNK_T;
    const fr = treeRingFrame(t);
    const radius = treeTrunkRadius(t);
    const ring = [];
    for (let a = 0; a < angSegs; a++) {
      const th = 2 * Math.PI * a / angSegs;
      const wob = near
        ? 0.86 + 0.10 * vnoise(Math.cos(th) * 2.2 + t * 13, Math.sin(th) * 2.2 + t * 13 + 30)
               + 0.06 * vnoise(Math.cos(th) * 6.4 + t * 29 + 8, Math.sin(th) * 6.4 + t * 29 + 51)
        : 1;
      const rr = radius * wob;
      const wp = add3(fr.p, add3(scl3(fr.x, Math.cos(th) * rr), scl3(fr.z, Math.sin(th) * rr)));
      const proud = clamp((wob - 0.86) / 0.2 + 0.4, 0, 1);
      const bark = mixColor(C_BARK_B, C_BARK_A, proud);
      ring.push(M.addVertex(wp[0], wp[1], wp[2], bark.toArray()));
    }
    rows.push(ring);
  }
  for (let r1 = 0; r1 < rows.length - 1; r1++) {
    for (let a1 = 0; a1 < angSegs; a1++) {
      const a2 = (a1 + 1) % angSegs;
      M.addQuad(rows[r1][a1], rows[r1][a2], rows[r1 + 1][a2], rows[r1 + 1][a1]);
    }
  }

  const cylPrim = unitCylinder(near ? 7 : 5);
  const spherePrim = unitSphere(near ? 8 : 6, near ? 5 : 4);
  const leafFlat = mixColor(C_LEAF_A, C_LEAF_B, 0.42);

  function foliageBlob(center, radius, tintT) {
    const scaleXZ = radius * (0.9 + R() * 0.3), scaleY = radius * (0.75 + R() * 0.25);
    const sphBasis = { x: [scaleXZ, 0, 0], y: [0, scaleY, 0], z: [0, 0, scaleXZ], p: center };
    M.bake(spherePrim, sphBasis, () => {
      const c = near ? mixColor(C_LEAF_A, C_LEAF_B, tintT) : leafFlat;
      return c.toArray();
    });
  }

  // the walkable branch itself: a tapered tube of rings, built from
  // treeWalkPoint/Radius/Basis so the mesh always matches the exposed
  // centerline exactly.
  const wRings = near ? 10 : 3, wSegs = near ? 10 : 5;
  const wRows = [];
  for (let wi = 0; wi <= wRings; wi++) {
    const wu = wi / wRings;
    const wb = treeWalkBasis(wu);
    const wr0 = treeWalkRadius(wu);
    const wring = [];
    for (let wa = 0; wa < wSegs; wa++) {
      const wth = 2 * Math.PI * wa / wSegs;
      const wwob = near
        ? 0.9 + 0.10 * vnoise(Math.cos(wth) * 2.4 + wu * 11 + 100, Math.sin(wth) * 2.4 + wu * 11 + 44)
        : 1;
      const wrr = wr0 * wwob;
      const wp2 = add3(wb.pos, add3(scl3(wb.side, Math.cos(wth) * wrr), scl3(wb.up, Math.sin(wth) * wrr)));
      const wbark = mixColor(C_BARK_B, C_BARK_A, clamp((wwob - 0.9) / 0.1, 0, 1));
      wring.push(M.addVertex(wp2[0], wp2[1], wp2[2], wbark.toArray()));
    }
    wRows.push(wring);
  }
  for (let wr1 = 0; wr1 < wRows.length - 1; wr1++) {
    for (let wa1 = 0; wa1 < wSegs; wa1++) {
      const wa2 = (wa1 + 1) % wSegs;
      M.addQuad(wRows[wr1][wa1], wRows[wr1][wa2], wRows[wr1 + 1][wa2], wRows[wr1 + 1][wa1]);
    }
  }

  if (near) {
    // root buttresses
    const baseP = treeCenterAt(0);
    const baseR = TREE.w;
    for (let rb = 0; rb < 4; rb++) {
      const rang = (rb / 4) * Math.PI * 2 + R() * 0.5;
      const len = baseR * 1.6 + R() * 3;
      const topR = [baseP[0], baseP[1] + baseR * 0.7, baseP[2]];
      const endR = [baseP[0] + Math.cos(rang) * len, baseP[1] - 1.6, baseP[2] + Math.sin(rang) * len];
      const basis = segBasis(topR, endR, baseR * 0.5);
      M.bake(cylPrim, basis, () => C_BARK_B.toArray());
    }

    // decorative branches, each ending in foliage — well clear of the
    // walkable branch's own fork (which sits at 0.55*TREE_TRUNK_T, below
    // this 0.6-0.95 zone)
    const branchCount = 5;
    for (let bI = 0; bI < branchCount; bI++) {
      const bt = TREE_TRUNK_T * (0.6 + (bI / branchCount) * 0.35 + R() * 0.03);
      const fr2 = treeRingFrame(bt);
      const outAng = (bI / branchCount) * Math.PI * 2 + R() * 0.7;
      const side2 = nrm3(add3(scl3(fr2.x, Math.cos(outAng)), scl3(fr2.z, Math.sin(outAng))));
      const dir2 = nrm3(add3(scl3(side2, 0.7), [0, 0.7, 0]));
      const start2 = add3(fr2.p, scl3(side2, treeTrunkRadius(bt) * 0.7));
      const branchLen = 34 + R() * 22;
      const end2 = add3(start2, scl3(dir2, branchLen));
      const branchR = 3.4 + R() * 1.4;
      const basis = segBasis(start2, end2, branchR);
      const branchColor = new THREE.Color(C_BARK_A).multiplyScalar(0.9);
      M.bake(cylPrim, basis, () => branchColor.toArray());
      foliageBlob(end2, 30 + R() * 13, R());
      foliageBlob(add3(start2, scl3(sub3(end2, start2), 0.55)), 22 + R() * 9, R());
    }
    foliageBlob(add3(treeCenterAt(TREE_TRUNK_T), [0, 12, 0]), 34, 0.5);
  } else {
    foliageBlob(add3(treeCenterAt(TREE_TRUNK_T), [-14, 14, 6]), 55, 0.5);
    foliageBlob(add3(treeCenterAt(TREE_TRUNK_T), [18, 22, -8]), 48, 0.5);
  }

  return M.toBufferGeometry();
}

const TREE_LOD_ON = 130, TREE_LOD_OFF = 170; // same hysteresis band as the old prototype

/**
 * Builds the tree as a group holding both LOD meshes (both baked in
 * absolute world space, like everything else in this file) plus an
 * update(camera) function that toggles their visibility with hysteresis.
 *
 * Not THREE.LOD: that class measures distance from its own node's world
 * position, which would be the origin here since the geometry itself already
 * carries the tree's world offset (see bake() calls above, all through
 * treeCenterAt()/TREE.x/z) rather than a local transform — so a manual
 * distance-to-trunk-base check standing in for it, same as the old
 * prototype's TREE_LOD_ON/OFF switch.
 */
export function buildTree() {
  const material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 });
  const near = new THREE.Mesh(buildTreeMesh(true), material);
  const far = new THREE.Mesh(buildTreeMesh(false), material);
  near.castShadow = true; near.receiveShadow = true;
  far.castShadow = true;
  far.visible = false;

  const group = new THREE.Group();
  group.name = 'tree';
  group.add(near, far);

  let isNear = true;
  function update(camera) {
    const d = Math.hypot(camera.position.x - TREE.x, camera.position.z - TREE.z);
    if (isNear && d > TREE_LOD_OFF) isNear = false;
    else if (!isNear && d < TREE_LOD_ON) isNear = true;
    near.visible = isNear;
    far.visible = !isNear;
  }

  return { group, update };
}
