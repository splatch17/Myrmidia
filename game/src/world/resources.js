import * as THREE from 'three';
import { rng, clamp, lerp } from '../core/noise.js';
import { MeshBuilder, unitSphere, unitCylinder } from '../core/meshBuilder.js';
import { makeBasis, segBasis } from '../core/vecmath.js';
import {
  groundY, groundNormal, groundSlope, waterDepthAt, distanceToWater, LAWN_BOUNDS,
} from './terrain.js';
import { TREE } from './tree.js';

/* ==========================================================================
   Harvestable resource nodes (design/api-monde-gameplay.md §3).

   They are WORLD DATA, not gameplay: a position, an amount, and a mesh. What
   the player does with them lives in player/**, and nothing here knows the
   player exists.

   Three things the contract is strict about, all honoured below:
     - `id` is stable and never reassigned;
     - a spent node STAYS in RESOURCE_NODES with amount 0 (removing it would
       shift every index anyone had remembered) — it just changes how it
       looks;
     - sown once at startup, no repop.

   PLACEMENT follows design/ambiance-prologue.md §3d: clusters of 3 to 6
   inside 12 units, never a lone node. A single seed lying in the grass is
   invisible at ant height and therefore takes part in no decision; a clump
   with a common silhouette is a thing you can see from across the meadow and
   walk towards. Density is high by the tree and in the bowl/hollow, thin on
   the bare rims, zero in and beside the river — which is what finally gives
   player/siteQuality.js's `food` factor something real to measure and stops
   every site scoring the same.

   RENDERING: one InstancedMesh per species, three draw calls for the whole
   map, per-instance colour and matrix. Depletion is not a state flag with no
   picture: the instance shrinks and greys out to a husk, so a spent cluster
   reads as spent from a distance.
   ========================================================================== */

export const RESOURCE_NODES = [];
const byId = new Map();

const KINDS = ['graine', 'brindille', 'miellat'];

/* Yield per node, before the +-1 jitter below. A twig is one carry, a seed
   feeds for a while, honeydew is the richest and the rarest. */
const BASE_AMOUNT = { graine: 4, brindille: 3, miellat: 5 };
const PICK_RADIUS = { graine: 5.0, brindille: 6.0, miellat: 5.0 };

/* ---- palettes (charte anchors: chitine #E0A752, miel #E6B558) ----------- */
const C_SEED_A = [0.88, 0.66, 0.32], C_SEED_B = [0.55, 0.38, 0.18];
const C_TWIG_A = [0.42, 0.32, 0.19], C_TWIG_B = [0.24, 0.18, 0.10];
const C_DEW_A = [0.94, 0.74, 0.36], C_DEW_B = [0.78, 0.50, 0.20];
const C_HUSK = new THREE.Color('#4A4438');   // what is left once it is picked

const mixc = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

/* ---- local-space geometry, one per species ------------------------------
   Everything is modelled at true prop scale: a seed is 7 units long, which
   is the length of the ant carrying it and larger than the queen's head. The
   triangle counts are deliberately small — there are ~140 of these on the
   map, instanced from one buffer each, so the shape is paid for once and
   drawn everywhere. */

/** Solid of revolution about local Y, y in 0..1 scaled by `h`. */
function lathe(h, radius, segs, rings, colorFn) {
  const M = new MeshBuilder();
  const rows = [];
  for (let r = 0; r <= rings; r++) {
    const v = r / rings, row = [];
    const rr = radius(v);
    for (let s = 0; s < segs; s++) {
      const th = 2 * Math.PI * s / segs;
      row.push(M.addVertex(Math.cos(th) * rr, v * h, Math.sin(th) * rr, colorFn(v, th)));
    }
    rows.push(row);
  }
  for (let r = 0; r < rings; r++) {
    for (let s = 0; s < segs; s++) {
      const n = (s + 1) % segs;
      M.addQuad(rows[r][s], rows[r][n], rows[r + 1][n], rows[r + 1][s]);
    }
  }
  return M;
}

/* A seed: teardrop, 7 long, 4 across at the belly, with a paler flank so the
   shape reads without a texture. 7 x 5 x 2 = 70 triangles. */
function seedGeometry() {
  const M = lathe(7.0, (v) => Math.pow(Math.sin(Math.PI * v), 0.62) * 2.0 * (1 - 0.30 * v), 7, 5,
    (v, th) => mixc(C_SEED_B, C_SEED_A,
      clamp(0.25 + 0.75 * Math.pow(Math.abs(Math.cos(th * 0.5)), 1.5) * (0.4 + 0.6 * v), 0, 1)));
  return M.toBufferGeometry();
}

/* A twig: two tapering segments with a kink, plus one short side shoot.
   ~60 triangles. Laid along local Y like the others so one instance matrix
   convention covers all three species. */
function twigGeometry() {
  const M = new MeshBuilder();
  const cyl = unitCylinder(5);
  const pts = [[0, 0, 0], [0.6, 5.5, 0.4], [2.4, 10.6, 0.2]];
  for (let i = 0; i < 2; i++) {
    M.bake(cyl, segBasis(pts[i], pts[i + 1], 0.62 - i * 0.16), (x, y) =>
      mixc(C_TWIG_B, C_TWIG_A, clamp(0.55 + 0.25 * Math.sin(y * 1.7), 0, 1)));
  }
  M.bake(cyl, segBasis([0.6, 5.5, 0.4], [-2.6, 8.2, -1.1], 0.33), () => C_TWIG_B);
  return M.toBufferGeometry();
}

/* Honeydew: three droplets pooled on the ground, the only glossy prop out
   here. ~108 triangles. */
function dewGeometry() {
  const M = new MeshBuilder();
  const sph = unitSphere(6, 3);
  const blobs = [[0, 0.9, 0, 2.6, 1.5, 2.2], [2.4, 0.6, 1.1, 1.7, 1.0, 1.5], [-1.6, 0.7, 1.6, 1.9, 1.2, 1.7]];
  for (const b of blobs) {
    M.bake(sph, makeBasis([b[3], 0, 0], [0, b[4], 0], [0, 0, b[5]], [b[0], b[1], b[2]]), (x, y) =>
      mixc(C_DEW_B, C_DEW_A, clamp((y - b[1]) / (b[4] * 2) + 0.55, 0, 1)));
  }
  return M.toBufferGeometry();
}

/* ---- where they grow ----------------------------------------------------- */

const bump = (d, r) => (d >= r ? 0 : Math.pow(1 - d / r, 1.5));

/* The authored answer to "why would anyone walk over there". The three
   generous spots are the tree shelf, the bowl and the hollow behind the
   knoll — the same three features terrain.js's RELIEF was written around, so
   the reward and the landmark are the same place. */
export function nodeDensity(x, z) {
  if (waterDepthAt(x, z) > 0) return 0;
  if (distanceToWater(x, z) < 10) return 0;
  let d = 0.16;
  d += 1.05 * bump(Math.hypot(x - TREE.x, z - TREE.z), 78);
  d += 0.85 * bump(Math.hypot(x - 88, z - 168), 74);
  d += 0.70 * bump(Math.hypot(x - 24, z - 128), 46);
  // bare rims: a steep face carries nothing worth walking up for
  return d * clamp(1 - (groundSlope(x, z) - 0.16) / 0.5, 0.12, 1);
}
const DENSITY_MAX = 2.0;

function kindFor(x, z, R) {
  const nearTree = Math.hypot(x - TREE.x, z - TREE.z) < 85;
  const r = R();
  if (nearTree) return r < 0.55 ? 'brindille' : (r < 0.85 ? 'miellat' : 'graine');
  const rich = bump(Math.hypot(x - 88, z - 168), 74) + bump(Math.hypot(x - 24, z - 128), 46) > 0.25;
  if (rich) return r < 0.60 ? 'graine' : (r < 0.85 ? 'miellat' : 'brindille');
  return r < 0.50 ? 'graine' : (r < 0.80 ? 'brindille' : 'miellat');
}

const CLUSTERS = 32;

function sowNodes(seed = 90210) {
  const R = rng(seed);
  const B = LAWN_BOUNDS;
  let placed = 0, guard = 0, nextId = 1;
  while (placed < CLUSTERS && guard++ < CLUSTERS * 200) {
    const cx = lerp(B.x0 + 14, B.x1 - 14, R());
    const cz = lerp(B.z0 + 16, B.z1 - 14, R());
    if (R() * DENSITY_MAX > nodeDensity(cx, cz)) continue;
    const kind = kindFor(cx, cz, R);
    const n = 3 + Math.floor(R() * 4);
    let made = 0;
    for (let k = 0; k < n * 3 && made < n; k++) {
      const a = R() * Math.PI * 2, rad = Math.sqrt(R()) * 12;
      const nx = cx + Math.cos(a) * rad, nz = cz + Math.sin(a) * rad;
      if (waterDepthAt(nx, nz) > 0 || distanceToWater(nx, nz) < 10) continue;
      if (groundSlope(nx, nz) > 0.7) continue;
      const amount = Math.max(1, BASE_AMOUNT[kind] + Math.round((R() - 0.5) * 2));
      const node = {
        id: nextId++, x: nx, z: nz, kind, amount, r: PICK_RADIUS[kind],
        /* Beyond the contract's fields, and additive to it: the full amount
           (for the depletion visual), the pose, and which instance slot this
           node draws as. */
        amount0: amount, yaw: R() * Math.PI * 2, tilt: (R() - 0.5) * 0.5,
        size: 0.75 + R() * 0.5, _slot: -1,
      };
      RESOURCE_NODES.push(node);
      byId.set(node.id, node);
      made++;
    }
    if (made) placed++;
  }
}

/* ---- meshes -------------------------------------------------------------- */

const meshes = {};        // kind -> InstancedMesh
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();

function writeInstance(node) {
  const mesh = meshes[node.kind];
  if (!mesh || node._slot < 0) return;
  const frac = node.amount0 > 0 ? node.amount / node.amount0 : 0;
  /* A picked-over node does not vanish (the contract keeps it in the array)
     and it must not still look like food: it shrinks to a husk and loses its
     warmth. Half scale rather than a token 90% — the difference has to
     survive being seen from twenty units up. */
  const scale = node.size * lerp(0.45, 1.0, Math.pow(frac, 0.6));
  const n = groundNormal(node.x, node.z);
  _e.set(node.tilt - Math.atan2(n[2], n[1]) * 0.6, node.yaw, node.tilt + Math.atan2(n[0], n[1]) * 0.6);
  _q.setFromEuler(_e);
  _p.set(node.x, groundY(node.x, node.z) - 0.35 * scale, node.z);
  _s.set(scale, scale, scale);
  _m.compose(_p, _q, _s);
  mesh.setMatrixAt(node._slot, _m);
  _c.set(1, 1, 1).lerp(C_HUSK, (1 - frac) * 0.8);
  mesh.setColorAt(node._slot, _c);
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
}

/**
 * Take up to `qty` from node `id`. Returns what was actually removed — 0 for
 * an unknown id or a spent node. The world updates the node's own visual;
 * the caller only has to believe the number it gets back.
 */
export function harvestNode(id, qty = 1) {
  const node = byId.get(id);
  if (!node || node.amount <= 0 || !(qty > 0)) return 0;
  const took = Math.min(qty, node.amount);
  node.amount -= took;
  writeInstance(node);
  return took;
}

/** Nodes within `radius` of (x, z) that still hold something. */
export function nodesNear(x, z, radius = 12, includeSpent = false) {
  const out = [];
  for (const n of RESOURCE_NODES) {
    if (!includeSpent && n.amount <= 0) continue;
    if (Math.hypot(n.x - x, n.z - z) <= radius) out.push(n);
  }
  return out;
}

export function buildResources() {
  const group = new THREE.Group();
  group.name = 'resources';
  if (RESOURCE_NODES.length === 0) sowNodes();

  const geo = { graine: seedGeometry(), brindille: twigGeometry(), miellat: dewGeometry() };
  // Honeydew is the one glossy thing on the lawn: a droplet that does not
  // catch the sun is a brown pebble. The other two share the matte material.
  const matte = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 });
  const glossy = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.22, metalness: 0 });

  for (const kind of KINDS) {
    const list = RESOURCE_NODES.filter((n) => n.kind === kind);
    const cap = Math.max(list.length, 1);
    const mesh = new THREE.InstancedMesh(geo[kind], kind === 'miellat' ? glossy : matte, cap);
    mesh.name = 'resource-' + kind;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.count = list.length;
    // instanceColor must exist before the first setColorAt
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3).fill(1), 3);
    /* The instances are placed by matrix, so Three's bounding sphere (taken
       from the source geometry, which sits at the origin) would cull the
       whole species the moment the origin left the frustum. */
    mesh.frustumCulled = false;
    meshes[kind] = mesh;
    list.forEach((node, i) => { node._slot = i; writeInstance(node); });
    group.add(mesh);
  }
  return { group, nodes: RESOURCE_NODES };
}
