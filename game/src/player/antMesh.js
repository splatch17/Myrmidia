import * as THREE from 'three';
import { nrm3, scl3, segBasis } from '../core/vecmath.js';
import { antMatrix, localToWorld, solveKnee } from './legs.js';
import { PLAYER_AVATAR, WORKER, FOUNDING_QUEEN, legLengths } from './avatar.js';
import { createInstancedPool } from '../core/instancedPool.js';

/* ==========================================================================
   Procedural ant mesh: the same low-poly hexapod as
   design/prototypes/sortie-fourmiliere.html's drawAnt() (section 5), but as
   persistent instances whose transforms get rewritten every frame instead of
   one draw call per part every frame — same visual result, more
   Three-idiomatic.

   #36 — WHY THIS FILE NO LONGER CALLS `new THREE.Mesh` PER PART. It used to:
   one Mesh per ellipsoid/bone, ~36-37 of them per ant (measured with
   scripts/bench-antmesh.mjs against the pre-#36 code: 72/ant worker,
   74/ant queen once core/outline.js's shell is counted too — the ticket's
   own "~30" was in the right ballpark but a little low). That is one draw
   call per part per ant: fine for one player, a real cost at the ticket's
   own "vingt ouvrières" — 1440 mesh objects, hence draw calls, for twenty
   workers plus their outlines.

   The fix is core/instancedPool.js's THREE.InstancedMesh wrapper: TWO shared
   pools for the whole game — one for every ellipsoid part (gaster, petiole,
   thorax, head, eyes, knees, feet; all built from the unit sphere) and one
   for every bone (mandibles, antennae, thighs, shins; all built from the
   unit cylinder) — regardless of how many ants exist or which profile they
   use. buildAntMesh() now RESERVES instance slots in those pools instead of
   creating meshes, and updatePose() writes this ant's pose into ITS OWN
   reserved slots (mesh.setMatrixAt) instead of into a per-part mesh.matrix.
   Colour moves the same way: every part is the SAME material (vertexColors
   enabled), tinted per-instance ONCE at spawn (a part's colour never
   changes over its lifetime, unlike its pose) via instanceColor rather than
   by looking up a per-hex-colour material the way the old materialCache did.

   Net effect at the pool level, any number of ants, any mix of profiles: 2
   geometries (as before), 1 material (down from up to 6 — see
   scripts/bench-antmesh.mjs), 2 draw calls for bodies + 2 for outlines
   (core/outline.js), where before it was 2*(ants) + 2*(ants). The `group`
   this file returns is therefore the SAME persistent THREE.Group every call
   (it holds the two pool meshes, created lazily on the first call) — handing
   it to `scene.add()` once per ant (player/index.js does exactly this today)
   is a harmless no-op past the first time, since Three's Object3D.add() on an
   object that already has that parent just re-parents it to itself.

   Which body gets drawn is still the avatar profile's (avatar.js): the part
   table is data, so the founding queen (#32) is the same six ellipsoids +
   bones with world/queen.js's own proportions and a two-segment breathing
   gaster, not a second mesh builder. Sizes are all in the profile's local
   frame; antMatrix() carries the scale, so nothing here multiplies by it.
   ========================================================================== */

/** How many ants (any profile mix) the shared pools are sized for. This is
 *  piège #6's discipline applied to a COUNT rather than a body size: it is
 *  the one number in this file that is not derived from avatar.js, so it is
 *  the one number a future round has to remember to raise (and re-run
 *  scripts/bench-antmesh.mjs) if the game ever wants more ants on screen at
 *  once than this. The ticket's own criterion is five uncontrolled ants; its
 *  motivating example is twenty workers. 32 clears both with headroom
 *  without the pools costing more than a few thousand floats each. */
export const MAX_ANTS = 32;

/* Per-ant instance counts, derived from the profile tables themselves
   (avatar.js's WORKER/FOUNDING_QUEEN) rather than hand-counted — so a third
   profile with more legs or a three-segment gaster sizes the pools
   correctly by construction instead of silently overflowing them the day
   someone adds it and forgets this file exists. */
function partCounts(profile) {
  const legs = profile.legs.length;
  return {
    // gaster segment(s) + petiole + thorax + head + 2 eyes + (knee+foot) per leg
    sphere: profile.body.gaster.length + 5 + legs * 2,
    // 2 mandible bones + 4 antenna bones + (thigh+shin) per leg
    cyl: 6 + legs * 2,
  };
}

let spherePool = null, cylPool = null, poolGroup = null;

function ensurePools() {
  if (poolGroup) return;
  const sphereGeo = new THREE.SphereGeometry(1, 12, 8);
  const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 7).translate(0, 0.5, 0); // y: 0..1, matches segBasis()

  // One material for every part of every ant: it carries no colour of its
  // own (white), the tint is per-instance (see core/instancedPool.js's
  // setColor) — this is what lets a queen and any number of differently-
  // coloured workers share it instead of one material per hex colour.
  const antMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, vertexColors: true, roughness: 0.55, metalness: 0.05,
  });

  const maxPerAnt = [WORKER, FOUNDING_QUEEN].reduce((m, p) => {
    const c = partCounts(p);
    return { sphere: Math.max(m.sphere, c.sphere), cyl: Math.max(m.cyl, c.cyl) };
  }, { sphere: 0, cyl: 0 });

  spherePool = createInstancedPool(sphereGeo, antMaterial, MAX_ANTS * maxPerAnt.sphere);
  cylPool = createInstancedPool(cylGeo, antMaterial, MAX_ANTS * maxPerAnt.cyl);
  spherePool.mesh.castShadow = true;
  cylPool.mesh.castShadow = true;

  poolGroup = new THREE.Group();
  poolGroup.name = 'ant-part-pools';
  poolGroup.add(spherePool.mesh, cylPool.mesh);
}

/** Reserve one instance slot in `pool`, tint it once, and hand back the
 *  {pool, index} handle updatePose() writes a matrix into every frame. */
function allocPart(pool, colorHex) {
  const index = pool.allocate(1);
  pool.setColor(index, _tmpColor.set(colorHex));
  return { pool, index };
}
const _tmpColor = new THREE.Color();

// Reused across setEllipsoid/setBone calls to avoid an allocation per part
// per frame — dozens of parts * several ants * 60fps adds up otherwise.
const _m4 = new THREE.Matrix4();
const _vx = new THREE.Vector3(), _vy = new THREE.Vector3(), _vz = new THREE.Vector3(), _vp = new THREE.Vector3();

function setEllipsoid(handle, worldPos, xAxis, yAxis, zAxis) {
  _vx.set(xAxis[0], xAxis[1], xAxis[2]);
  _vy.set(yAxis[0], yAxis[1], yAxis[2]);
  _vz.set(zAxis[0], zAxis[1], zAxis[2]);
  _m4.makeBasis(_vx, _vy, _vz);
  _vp.set(worldPos[0], worldPos[1], worldPos[2]);
  _m4.setPosition(_vp);
  handle.pool.setMatrix(handle.index, _m4);
}

function setBone(handle, a, c, radius) {
  const basis = segBasis(a, c, radius); // {x,y,z,p} — see core/vecmath.js
  setEllipsoid(handle, basis.p, basis.x, basis.y, basis.z);
}

// mirror a local-space point to the other side of the body
function mirror(v) { return [-v[0], v[1], v[2]]; }

/**
 * Builds one ant's mesh (player or an NPC — #36 makes this callable any
 * number of times, up to MAX_ANTS) as a set of reserved pool slots plus an
 * updatePose(a, legState, elapsed) to call every frame. `a` is the plain
 * ant-record shape from legs.js/core+player/entities.js; legState from
 * legs.js's makeLegState().
 */
export function buildAntMesh(profile = PLAYER_AVATAR) {
  ensurePools();
  const B = profile.body, C = profile.colors;
  const [L1, L2] = legLengths(profile);

  const gaster = B.gaster.map(() => allocPart(spherePool, C.chitinB));
  const petiole = allocPart(spherePool, C.chitinB);
  const thorax = allocPart(spherePool, C.chitinA);
  const head = allocPart(spherePool, C.chitinA);
  const eyeL = allocPart(spherePool, C.eye), eyeR = allocPart(spherePool, C.eye);

  const mandL = allocPart(cylPool, C.mandible), mandR = allocPart(cylPool, C.mandible);
  const antL1 = allocPart(cylPool, C.limb), antL2 = allocPart(cylPool, C.limb);
  const antR1 = allocPart(cylPool, C.limb), antR2 = allocPart(cylPool, C.limb);

  const legParts = profile.legs.map(() => ({
    thigh: allocPart(cylPool, C.limb), shin: allocPart(cylPool, C.limb),
    knee: allocPart(spherePool, C.limb), foot: allocPart(spherePool, C.limb),
  }));

  function updatePose(a, legState, elapsed) {
    const mat = antMatrix(a);
    const b = mat.basis;
    const s = mat.scale;
    const ell = (handle, at, r, k = 1) => setEllipsoid(
      handle, localToWorld(mat, at),
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

  return { group: poolGroup, updatePose };
}

/* Test-only: the pool state is module-level (by design — it is what makes
   sharing work across independently-called buildAntMesh()s), which means a
   harness that wants a clean slate between scenarios has to be able to ask
   for one explicitly rather than re-importing the module (Node's ESM cache
   would just hand back the same instance). Not used by production code. */
export function _resetPoolsForTest() { spherePool = null; cylPool = null; poolGroup = null; }
