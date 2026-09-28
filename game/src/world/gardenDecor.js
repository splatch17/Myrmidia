import * as THREE from 'three';
import { rng, vnoise, clamp, lerp } from '../core/noise.js';
import { MeshBuilder, unitCylinder } from '../core/meshBuilder.js';
import { segBasis } from '../core/vecmath.js';
import { unindexWorldEntry } from '../core/worldIndexBridge.js';
import { texturedSurfaceMaterial, stoneAlbedo, capAlbedo } from './texturing.js';
import { groundY, groundSlope, waterDepthAt, distanceToWater, LAWN_BOUNDS } from './terrain.js';
import { RESOURCE_NODES } from './resources.js';
import { TREE } from './tree.js';
import { ROCKS } from './nestDecor.js';

/* ==========================================================================
   The garden floor (#80): plain daylight mushrooms, mossy pebbles and one
   fallen leaf, after the lawn pass of design/prototypes/sortie-fourmiliere.html
   (~l.1259-1320) — the idea, not the code.

   - Mushrooms here are the ordinary kind: cream, tan and brown caps, no
     emission, no lamp. "Champignon lumineux = fantastique" is kept for the
     nest (world/founding.js), so the two can never be confused.
   - Grouped in a handful of clusters, never scattered: design/ambiance-
     prologue.md §3d reads the map by clumps. Kept off the spawn, the tree's
     foot, the water, the resource clusters and the old gallery's zone; and
     when a nest is dug, anything on its footprint or its mouth is taken away
     (clearIn(), called by world/founding.js with the grass).
   - One InstancedMesh per kind (stems, caps, pebbles) plus the leaf: four
     draw calls for the whole garden, whatever the counts.

   Sizes are for the founding queen (collision radius 2.85, about six units
   tall), not for the prototype's seven-unit worker: a garden mushroom is a
   landmark she walks UNDER when it is tall, round when it is a button.

   COLLISION. Every footprint goes into ROCKS, the lawn's collider list
   (design/api-monde-gameplay.md §9): player/decorCollision.js already walks
   it on the lawn and nowhere else, so nothing on the gameplay side changes.
   A tall mushroom collides by its stem only — the cap is over her head —
   a short one by most of its cap.
   ========================================================================== */

const col = (hex) => new THREE.Color(hex);

const CAP_TINTS = [col('#e3d2b0'), col('#c89a64'), col('#9a6a3e'), col('#d8bd8c')];
const STEM_TINT = col('#e6dcc4');
const PEBBLE_TINT = col('#8a8070');
const C_MOSS = [0.30, 0.42, 0.15];
const C_LEAF_A = [0.30, 0.16, 0.06], C_LEAF_B = [0.70, 0.44, 0.15];

const SPAWN = [140, 170];     // player/index.js SURFACE_START
const QUEEN_H = 6.5;          // a cap higher than this is over her head

/* ---- unit shapes, instanced ------------------------------------------- */

/** A stem, y 0..1, radius ~1: flared at the foot, a ring under the cap. */
export function stemGeometry() {
  const M = new MeshBuilder();
  const rings = 7, segs = 10, ids = [];
  for (let r = 0; r <= rings; r++) {
    const t = r / rings;
    const rad = 0.85 + 0.45 * Math.pow(1 - t, 3) + (t > 0.78 && t < 0.9 ? 0.18 : 0);
    const shade = 0.62 + 0.38 * t;
    const row = [];
    for (let s = 0; s <= segs; s++) {
      const a = (s / segs) * Math.PI * 2;
      row.push(M.addVertex(Math.cos(a) * rad, t, Math.sin(a) * rad, [shade, shade * 0.97, shade * 0.92]));
    }
    ids.push(row);
  }
  for (let r = 0; r < rings; r++) for (let s = 0; s < segs; s++) {
    M.addQuad(ids[r][s], ids[r + 1][s], ids[r + 1][s + 1], ids[r][s + 1]);
  }
  return M.toBufferGeometry();
}

/** A cap, radius 1 at the rim, dome 0.6 high; the gills underneath darker.
 *  Origin at the centre of the gill plane, which sits on the stem's top. */
export function capGeometry() {
  const M = new MeshBuilder();
  const segs = 16;
  const prof = [];
  // gills: from the stem out to the rim, slightly concave
  for (let i = 0; i <= 3; i++) { const u = i / 3; prof.push([0.12 + 0.88 * u, -0.05 + 0.08 * u * u, 0.9 + 0.1 * u]); }
  // rim, then the dome up to the crown
  prof.push([1.02, 0.08, 0.95]);
  for (let i = 1; i <= 6; i++) {
    const a = (i / 6) * Math.PI / 2;
    prof.push([Math.cos(a) * 0.98, 0.08 + Math.sin(a) * 0.55, 1.0]);
  }
  const ids = prof.map(([r, y, c]) => {
    const row = [];
    for (let s = 0; s <= segs; s++) {
      const a = (s / segs) * Math.PI * 2;
      row.push(M.addVertex(Math.cos(a) * r, y, Math.sin(a) * r, [c, c, c]));
    }
    return row;
  });
  for (let k = 0; k < prof.length - 1; k++) for (let s = 0; s < segs; s++) {
    M.addQuad(ids[k][s], ids[k + 1][s], ids[k + 1][s + 1], ids[k][s + 1]);
  }
  const geo = M.toBufferGeometry();
  /* The gills face straight down, which under this rig's hemisphere is the
     ground colour (0x423c28) and nothing else: from the queen's eye, under a
     tall cap, that was a black disc. Given a horizontal normal they take the
     same sky fill as the stem under them — roughly what the light scattered
     in under a real cap does — and still read darker than the top. */
  const nrm = geo.getAttribute('normal');
  for (let k = 0; k <= 3; k++) for (let s = 0; s <= segs; s++) {
    const a = (s / segs) * Math.PI * 2;
    const i = ids[k][s];
    nrm.setXYZ(i, Math.cos(a) * 0.99, 0.12, Math.sin(a) * 0.99);
  }
  nrm.needsUpdate = true;
  return geo;
}

/** A lumpy pebble of radius ~1, moss creeping over its crown (vertex colour;
 *  the instance colour only shades it, so every pebble's moss sits on top). */
function pebbleGeometry() {
  const M = new MeshBuilder();
  const seg = 16, ring = 10, ids = [];
  for (let r = 0; r <= ring; r++) {
    const phi = Math.PI * r / ring;
    const row = [];
    for (let s = 0; s <= seg; s++) {
      const th = 2 * Math.PI * (s % seg) / seg;
      const nx = Math.sin(phi) * Math.cos(th), ny = Math.cos(phi), nz = Math.sin(phi) * Math.sin(th);
      const k = 0.82 + 0.26 * vnoise(nx * 1.7 + 11, nz * 1.7 + ny * 1.3 + 5) + 0.08 * vnoise(nx * 4 + 3, ny * 4 + nz * 2);
      const flat = ny < -0.2 ? 0.75 : 1;   // sits on a flatter base
      const up = clamp(ny * 1.7 + 0.1 + 0.5 * (vnoise(nx * 3 + 7, nz * 3 + 1) - 0.5), 0, 1);
      const c = [1, 1, 1].map((v, i) => lerp(v, C_MOSS[i] / 0.5, up * up * (3 - 2 * up)));
      row.push(M.addVertex(nx * k, ny * k * flat, nz * k, c));
    }
    ids.push(row);
  }
  for (let r = 0; r < ring; r++) for (let s = 0; s < seg; s++) {
    M.addQuad(ids[r][s], ids[r][s + 1], ids[r + 1][s + 1], ids[r + 1][s]);
  }
  return M.toBufferGeometry();
}

/** The fallen leaf, as one mesh in world space: tip on the ground at (x, z),
 *  stalk end raised onto whatever it leans on. */
function leafMesh(x, z, heading, len, width, rise) {
  const M = new MeshBuilder();
  const along = 30, across = 12, ids = [];
  const hx = Math.cos(heading), hz = Math.sin(heading);
  const sx = -hz, sz = hx;
  // an oak-ish outline: lobes along the edge, blunt at the stalk
  const shape = (t) => {
    const c = clamp(t, 0, 1);
    const body = Math.pow(Math.sin(Math.PI * c), 0.75) * (1 - 0.3 * c);
    return body * (0.82 + 0.18 * Math.cos(c * Math.PI * 9));
  };
  const g0 = groundY(x, z);
  for (let i = 0; i <= along; i++) {
    const t = i / along;
    const w = width * shape(t) + 0.25;
    const row = [];
    for (let j = 0; j <= across; j++) {
      const v = j / across * 2 - 1;
      const px = x + hx * t * len + sx * v * w, pz = z + hz * t * len + sz * v * w;
      const base = Math.max(groundY(px, pz), g0 + rise * t * t);
      // edges curl up, the midrib is a shallow valley, the tip lifts off the grass
      const y = base + 0.3 + v * v * w * 0.26 + Math.pow(1 - t, 8) * 2.5;
      const rib = Math.exp(-v * v * 90);
      const vein = Math.pow(Math.abs(Math.cos((t * 5.5 - Math.abs(v) * 0.9) * Math.PI)), 18) * (1 - rib) * (1 - Math.abs(v) * 0.6);
      const edge = clamp((Math.abs(v) - 0.7) * 3, 0, 1);
      const blot = clamp((vnoise(px * 0.22 + 40, pz * 0.22) - 0.55) * 3, 0, 1);
      const dry = clamp(0.25 + 0.55 * vnoise(px * 0.07, pz * 0.07) + 0.2 * t, 0, 1);
      const k = (1 + 0.28 * rib - 0.3 * vein - 0.35 * edge - 0.3 * blot) * (0.9 + 0.1 * vnoise(px * 0.8, pz * 0.8));
      const c = [0, 1, 2].map((q) => lerp(C_LEAF_A[q], C_LEAF_B[q], dry) * k);
      row.push(M.addVertex(px, y, pz, c));
    }
    ids.push(row);
  }
  for (let i = 0; i < along; i++) for (let j = 0; j < across; j++) {
    M.addQuad(ids[i][j], ids[i + 1][j], ids[i + 1][j + 1], ids[i][j + 1]);
  }
  // the stalk, carrying on past the end onto the stone
  {
    const e = [x + hx * len, Math.max(groundY(x + hx * len, z + hz * len), g0 + rise) + 0.3, z + hz * len];
    const f = [e[0] + hx * 7, e[1] + 0.8, e[2] + hz * 7];
    M.bake(unitCylinder(6), segBasis(e, f, 0.5), () => [C_LEAF_A[0] * 1.4, C_LEAF_A[1] * 1.4, C_LEAF_A[2] * 1.4]);
  }
  const mesh = new THREE.Mesh(M.toBufferGeometry(), new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.85, metalness: 0, side: THREE.DoubleSide,
  }));
  mesh.name = 'garden-leaf';
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/* ---- placement ---------------------------------------------------------- */

function siteOk(x, z, clusters, spacing) {
  const B = LAWN_BOUNDS;
  if (x < B.x0 + 20 || x > B.x1 - 20 || z < B.z0 + 40 || z > B.z1 - 20) return false;
  if (Math.abs(x) < 40 && z < 40) return false;                    // the old gallery's zone
  if (waterDepthAt(x, z) > 0 || distanceToWater(x, z) < 12) return false;
  if (groundSlope(x, z) > 0.45) return false;
  if (Math.hypot(x - SPAWN[0], z - SPAWN[1]) < 24) return false;
  if (Math.hypot(x - TREE.x, z - TREE.z) < TREE.w + 26) return false;
  for (const n of RESOURCE_NODES) if (Math.hypot(x - n.x, z - n.z) < 14) return false;
  for (const c of clusters) if (Math.hypot(x - c[0], z - c[1]) < spacing) return false;
  return true;
}

export function buildGardenDecor() {
  const R = rng(20260929);
  const group = new THREE.Group();
  group.name = 'garden-decor';
  const items = [];      // { mesh, index | -1, x, z, r, rock }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const v = new THREE.Vector3(), s = new THREE.Vector3();

  /* -- mushrooms -- */
  const shrooms = [];
  const clusters = [];
  // the first cluster in the opening view (spawn faces -X), the rest anywhere
  const wanted = [[104, 182], [112, 138]];
  for (let tries = 0; clusters.length < 8 && tries < 400; tries++) {
    const c = wanted.length ? wanted.shift() : [LAWN_BOUNDS.x0 + R() * (LAWN_BOUNDS.x1 - LAWN_BOUNDS.x0), R() * LAWN_BOUNDS.z1];
    if (!siteOk(c[0], c[1], clusters, 60)) continue;
    clusters.push(c);
    const n = 3 + Math.floor(R() * 4);
    const tint = CAP_TINTS[Math.floor(R() * CAP_TINTS.length)];
    for (let i = 0; i < n; i++) {
      // one tall one, the rest shorter and down to buttons
      const big = i === 0 ? 1 : 0.25 + R() * 0.6;
      const a = R() * Math.PI * 2, rr = i === 0 ? 0 : 4 + R() * 9;
      const x = c[0] + Math.cos(a) * rr, z = c[1] + Math.sin(a) * rr;
      if (waterDepthAt(x, z) > 0) continue;
      const H = (9 + R() * 12) * big + 1.2, capR = (5 + R() * 4) * Math.pow(big, 0.8) + 1.0;
      const stemR = capR * (0.16 + R() * 0.05);
      shrooms.push({ x, z, y: groundY(x, z), H, capR, stemR, lean: [(R() - 0.5) * 0.14, (R() - 0.5) * 0.14],
        spin: R() * Math.PI * 2, tint: tint.clone().multiplyScalar(0.85 + R() * 0.25) });
    }
  }
  const stemGeo = stemGeometry(), capGeo = capGeometry();
  const stems = new THREE.InstancedMesh(stemGeo, new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.8, metalness: 0,
  }), shrooms.length);
  const caps = new THREE.InstancedMesh(capGeo, texturedSurfaceMaterial({
    map: capAlbedo(), strength: 0.45, roughness: 0.7, side: THREE.DoubleSide,
  }), shrooms.length);
  shrooms.forEach((m, k) => {
    e.set(m.lean[0], m.spin, m.lean[1]);
    q.setFromEuler(e);
    m4.compose(v.set(m.x, m.y - 0.6, m.z), q, s.set(m.stemR, m.H + 0.6, m.stemR));
    stems.setMatrixAt(k, m4);
    stems.setColorAt(k, STEM_TINT);
    // the cap sits on the (leaning) stem's top
    const top = new THREE.Vector3(0, m.H + 0.6, 0).applyQuaternion(q).add(v);
    m4.compose(top, q, s.set(m.capR, m.capR, m.capR));
    caps.setMatrixAt(k, m4);
    caps.setColorAt(k, m.tint);
    const tall = m.H > QUEEN_H;
    const rock = { x: m.x, z: m.z, r: tall ? m.stemR * 1.15 : m.capR * 0.7, kind: 'mushroom' };
    ROCKS.push(rock);
    items.push({ meshes: [stems, caps], index: k, x: m.x, z: m.z, r: m.capR, rock });
  });
  for (const im of [stems, caps]) { im.castShadow = true; im.receiveShadow = true; group.add(im); }
  stems.name = 'garden-mushroom-stems';
  caps.name = 'garden-mushroom-caps';

  /* -- pebbles, in small groups; one group carries the leaf -- */
  const pebbles = [];
  const groups = [];
  const wantedP = [[96, 150]];
  let leafAt = null;
  for (let tries = 0; groups.length < 6 && tries < 400; tries++) {
    const c = wantedP.length ? wantedP.shift() : [LAWN_BOUNDS.x0 + R() * (LAWN_BOUNDS.x1 - LAWN_BOUNDS.x0), R() * LAWN_BOUNDS.z1];
    if (!siteOk(c[0], c[1], clusters.concat(groups), 45)) continue;
    groups.push(c);
    const n = 2 + Math.floor(R() * 3);
    for (let i = 0; i < n; i++) {
      const a = R() * Math.PI * 2, rr = i === 0 ? 0 : 5 + R() * 8;
      const x = c[0] + Math.cos(a) * rr, z = c[1] + Math.sin(a) * rr;
      if (waterDepthAt(x, z) > 0) continue;
      const big = i === 0 ? 1 : 0.35 + R() * 0.5;
      const sx = (4 + R() * 4) * big + 0.8, sy = (2.5 + R() * 2.5) * big + 0.5, sz = (4 + R() * 4) * big + 0.8;
      pebbles.push({ x, z, sx, sy, sz, spin: R() * Math.PI * 2, shade: 0.75 + R() * 0.45 });
    }
    if (!leafAt) leafAt = pebbles[pebbles.length - n] || null;
  }
  const pebbleMesh = new THREE.InstancedMesh(pebbleGeometry(), texturedSurfaceMaterial({
    map: stoneAlbedo(), strength: 1.0, roughness: 0.92,
  }), pebbles.length);
  const tint = new THREE.Color();
  pebbles.forEach((p, k) => {
    q.setFromEuler(e.set(0, p.spin, 0));
    m4.compose(v.set(p.x, groundY(p.x, p.z) + p.sy * 0.3, p.z), q, s.set(p.sx, p.sy, p.sz));
    pebbleMesh.setMatrixAt(k, m4);
    pebbleMesh.setColorAt(k, tint.copy(PEBBLE_TINT).multiplyScalar(p.shade));
    const rock = { x: p.x, z: p.z, r: (p.sx + p.sz) * 0.5 * 0.85, kind: 'pebble' };
    ROCKS.push(rock);
    items.push({ meshes: [pebbleMesh], index: k, x: p.x, z: p.z, r: Math.max(p.sx, p.sz), rock });
  });
  pebbleMesh.name = 'garden-pebbles';
  pebbleMesh.castShadow = true;
  pebbleMesh.receiveShadow = true;
  group.add(pebbleMesh);

  /* -- the leaf: tip on the grass, stalk end resting on the group's big
     pebble. Decorative: walking up it would need groundY() to know about it,
     which is the whole terrain contract for one prop — not this round. */
  if (leafAt) {
    const heading = R() * Math.PI * 2;
    const len = 44, rise = leafAt.sy * 1.15 + 1.2;
    const lx = leafAt.x - Math.cos(heading) * len * 0.92, lz = leafAt.z - Math.sin(heading) * len * 0.92;
    if (waterDepthAt(lx, lz) === 0) {
      const leaf = leafMesh(lx, lz, heading, len, 11, rise);
      group.add(leaf);
      // the raised half is over knee height for her: a wall, not a carpet
      const cols = [];
      for (const t of [0.62, 0.78]) {
        const rock = { x: lx + Math.cos(heading) * len * t, z: lz + Math.sin(heading) * len * t, r: 6.5, kind: 'leaf' };
        ROCKS.push(rock);
        cols.push(rock);
      }
      items.push({ meshes: [leaf], index: -1, x: lx + Math.cos(heading) * len * 0.5, z: lz + Math.sin(heading) * len * 0.5, r: len * 0.55, rock: null, extra: cols });
    }
  }

  for (const im of [stems, caps, pebbleMesh]) {
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.computeBoundingSphere();
  }

  const hidden = new THREE.Matrix4().makeScale(0, 0, 0);
  const dropRock = (rock) => {
    if (!rock) return;
    const i = ROCKS.indexOf(rock);
    if (i >= 0) ROCKS.splice(i, 1);
    unindexWorldEntry(rock);
  };

  /** Take away everything standing where `buried(x, z)` says the ground is
   *  gone (a nest's cut, floor or spoil), or within `clear` of (cx, cz) — the
   *  mouth and the apron in front of it. Same seam as the grass's clearIn(). */
  function clearIn(buried, cx = NaN, cz = NaN, clear = 0) {
    let n = 0;
    for (const it of items) {
      if (it.gone) continue;
      let hit = Math.hypot(it.x - cx, it.z - cz) < clear + it.r;
      for (let k = 0; !hit && k <= 8; k++) {
        const a = (k / 8) * Math.PI * 2, rr = k === 8 ? 0 : it.r;
        hit = buried(it.x + Math.cos(a) * rr, it.z + Math.sin(a) * rr);
      }
      if (!hit) continue;
      it.gone = true;
      n++;
      if (it.index < 0) { for (const m of it.meshes) m.visible = false; }
      else for (const m of it.meshes) { m.setMatrixAt(it.index, hidden); m.instanceMatrix.needsUpdate = true; }
      dropRock(it.rock);
      if (it.extra) it.extra.forEach(dropRock);
    }
    return n;
  }

  return {
    group, clearIn,
    counts: { mushrooms: shrooms.length, pebbles: pebbles.length, leaf: !!leafAt },
    // where things are, for a harness to frame them (scripts/verify-decor-80.mjs)
    sites: {
      mushrooms: shrooms.map((m) => ({ x: m.x, z: m.z, y: m.y, H: m.H, capR: m.capR })),
      pebbles: pebbles.map((p) => ({ x: p.x, z: p.z, r: (p.sx + p.sz) * 0.5 })),
      clusters, groups,
      leaf: items.filter((it) => it.index < 0).map((it) => ({ x: it.x, z: it.z, r: it.r }))[0] || null,
    },
    hiddenCount: () => items.filter((it) => it.gone).length,
  };
}
