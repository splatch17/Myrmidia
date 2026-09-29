import * as THREE from 'three';
import {
  CHUNK, VOXEL, readBlock, sampleD, onVolumeChange, volumeChunks,
} from './nestVolume.js';

/* ==========================================================================
   The dug volume, drawn (#81): surface nets, one mesh per 16^3 chunk,
   remeshed only where the volume changed and only as much per frame as the
   budget allows.

   WHY SURFACE NETS rather than marching cubes. One vertex per cell that the
   wall passes through, placed at the mean of the cell's edge crossings, and
   one quad per crossed lattice edge. Against marching cubes: no case table,
   roughly half the triangles for the same lattice, no slivers, and the
   vertices are SHARED between neighbouring quads — so the normal is smooth by
   construction. It is taken from the density's own gradient, not from the
   triangles, so two chunks that meet compute the same normal on either side
   of the seam and the seam does not show.

   CHUNK SEAMS. Chunk (c) owns the lattice edges that START inside it, and
   reads a two-sample apron from its neighbours for the cells and gradients
   that those edges touch. Each edge is therefore emitted exactly once in the
   whole nest, and the vertices either side of a seam are computed from the
   same samples — no cracks, no double walls.

   THE LOOK is the one the hand-built rooms had: the same material
   (triplanar dirt, #78's indigo depth tint, the local lamp pool — the caller
   passes it in), vertex colour from the same fresh-earth ramp, and the AO
   that ramp used to fake with wall wobble is now measured: how much open air
   there is two and a half units out along the normal. Creases, the foot of a
   wall and the corners of a doorway darken on their own.
   ========================================================================== */

const N = CHUNK;
const P = N + 4;                // lattice points per axis in the local block (2-apron)
const P2 = P * P;
const at = (x, y, z) => (x * P + z) * P + y;   // same layout as readBlock
/** Chunks per axis in one drawn region (see rebuildRegion). */
const REGION = 3;

/**
 * @param group     where chunk meshes are added (the founded nest's group)
 * @param material  the nest wall material, shared by every chunk
 * @param clip      (x, y, z, ny) -> true where a quad must not be drawn (the open
 *                  cut beyond the chamber's headwall, which the cut's own
 *                  sheet and the spoil mound draw)
 * @param colour    (x, y, z, ny, ao, out[3]) -> fills out with linear RGB
 * @param lawnAt    (x, z) -> meadow height, for the macro view's ground clip
 */
export function createVolumeMesher({ group, material, clip, colour, lawnAt }) {
  const meshes = new Map();     // region key string -> THREE.Mesh
  const chunkData = new Map();  // chunk key string -> its surface, as arrays
  const dirty = new Set();      // chunk key strings
  const dirtyRegions = new Set();
  const block = new Float32Array(P * P * P);
  const cellVert = new Int32Array((N + 1) * (N + 1) * (N + 1));
  let pos = new Float32Array(3 * 4096), nrm = new Float32Array(3 * 4096);
  let col = new Float32Array(3 * 4096), lawn = new Float32Array(4096);
  let idx = new Uint32Array(6 * 4096);
  const rgb = [0, 0, 0];
  let meshedChunks = 0, lastMs = 0;

  const keyOf = (cx, cy, cz) => `${cx}_${cy}_${cz}`;
  const regionKeyOf = (cx, cy, cz) => keyOf(Math.floor(cx / REGION), Math.floor(cy / REGION), Math.floor(cz / REGION));

  const off = onVolumeChange((e) => {
    if (e.kind === 'clear') {
      for (const m of meshes.values()) disposeMesh(m);
      meshes.clear();
      chunkData.clear();
      dirty.clear();
      dirtyRegions.clear();
      return;
    }
    if (e.kind !== 'open') return;
    for (const t of e.chunks) {
      /* The samples a chunk's mesh reads run two past its own edge on the low
         side and one on the high side (the apron), so a change within reach
         of a face dirties the neighbour across it. */
      const rx = [0], ry = [0], rz = [0];
      if (t.lo[0] <= 1) rx.push(-1); if (t.hi[0] >= N - 2) rx.push(1);
      if (t.lo[1] <= 1) ry.push(-1); if (t.hi[1] >= N - 2) ry.push(1);
      if (t.lo[2] <= 1) rz.push(-1); if (t.hi[2] >= N - 2) rz.push(1);
      for (const a of rx) for (const b of ry) for (const c of rz) dirty.add(keyOf(t.cx + a, t.cy + b, t.cz + c));
    }
  });

  function disposeMesh(m) {
    if (m.parent) m.parent.remove(m);
    m.geometry.dispose();
  }

  function grow(nv, ni) {
    if (nv * 3 > pos.length) {
      const n = Math.max(nv, pos.length / 3 * 2);
      const np = new Float32Array(n * 3); np.set(pos); pos = np;
      const nn = new Float32Array(n * 3); nn.set(nrm); nrm = nn;
      const nc = new Float32Array(n * 3); nc.set(col); col = nc;
      const nl = new Float32Array(n); nl.set(lawn); lawn = nl;
    }
    if (ni > idx.length) {
      const n = Math.max(ni, idx.length * 2);
      const nx = new Uint32Array(n); nx.set(idx); idx = nx;
    }
  }

  /* Trilinear sample of the local block, local lattice coordinates. */
  function bl(x, y, z) {
    const ix = Math.min(P - 2, Math.max(0, Math.floor(x)));
    const iy = Math.min(P - 2, Math.max(0, Math.floor(y)));
    const iz = Math.min(P - 2, Math.max(0, Math.floor(z)));
    const tx = x - ix, ty = y - iy, tz = z - iz;
    const i = at(ix, iy, iz);
    const c000 = block[i], c001 = block[i + 1], c100 = block[i + P2], c101 = block[i + P2 + 1];
    const c010 = block[i + P], c011 = block[i + P + 1], c110 = block[i + P2 + P], c111 = block[i + P2 + P + 1];
    // at(): x stride P2, z stride P, y stride 1
    const x00 = c000 + (c100 - c000) * tx, x01 = c001 + (c101 - c001) * tx;
    const x10 = c010 + (c110 - c010) * tx, x11 = c011 + (c111 - c011) * tx;
    const y0 = x00 + (x01 - x00) * ty, y1 = x10 + (x11 - x10) * ty;
    return y0 + (y1 - y0) * tz;
  }

  /* The 12 edges of a cell, as corner pairs; corner k = (k&1, (k>>1)&1, (k>>2)&1) in (x, y, z). */
  const EDGES = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
  const CX = [0, 1, 0, 1, 0, 1, 0, 1], CY = [0, 0, 1, 1, 0, 0, 1, 1], CZ = [0, 0, 0, 0, 1, 1, 1, 1];
  const cv = new Float32Array(8);

  function meshChunk(cx, cy, cz) {
    const key = keyOf(cx, cy, cz);
    const bx = cx * N - 2, by = cy * N - 2, bz = cz * N - 2;
    readBlock(bx, by, bz, P, block);

    // any sign change at all? (most chunks of a dug nest are all earth)
    let neg = false, posv = false;
    for (let i = 0; i < block.length && !(neg && posv); i++) { if (block[i] < 0) neg = true; else posv = true; }
    if (!neg || !posv) { removeChunk(key); return; }

    /* ---- one vertex per crossed cell. Cells with local origin 1..N+1 (i.e.
       chunk-local -1..N-1): the four cells round any edge this chunk owns. */
    cellVert.fill(-1);
    let nv = 0;
    const C1 = N + 1;
    for (let x = 1; x <= N + 1; x++) {
      for (let z = 1; z <= N + 1; z++) {
        for (let y = 1; y <= N + 1; y++) {
          let mask = 0;
          for (let k = 0; k < 8; k++) {
            const v = block[at(x + CX[k], y + CY[k], z + CZ[k])];
            cv[k] = v;
            if (v < 0) mask |= 1 << k;
          }
          if (mask === 0 || mask === 255) continue;
          let sx = 0, sy = 0, sz = 0, n = 0;
          for (let e = 0; e < 12; e++) {
            const a = EDGES[e][0], b = EDGES[e][1];
            const va = cv[a], vb = cv[b];
            if ((va < 0) === (vb < 0)) continue;
            const t = va / (va - vb);
            sx += CX[a] + (CX[b] - CX[a]) * t;
            sy += CY[a] + (CY[b] - CY[a]) * t;
            sz += CZ[a] + (CZ[b] - CZ[a]) * t;
            n++;
          }
          grow(nv + 1, 0);
          const lx = x + sx / n, ly = y + sy / n, lz = z + sz / n;
          // gradient of the density, pointing into the earth; the wall faces the air
          let gx = bl(lx + 0.5, ly, lz) - bl(lx - 0.5, ly, lz);
          let gy = bl(lx, ly + 0.5, lz) - bl(lx, ly - 0.5, lz);
          let gz = bl(lx, ly, lz + 0.5) - bl(lx, ly, lz - 0.5);
          const gl = Math.hypot(gx, gy, gz) || 1;
          gx = -gx / gl; gy = -gy / gl; gz = -gz / gl;
          const wx = (bx + lx) * VOXEL, wy = (by + ly) * VOXEL, wz = (bz + lz) * VOXEL;
          pos[nv * 3] = wx; pos[nv * 3 + 1] = wy; pos[nv * 3 + 2] = wz;
          nrm[nv * 3] = gx; nrm[nv * 3 + 1] = gy; nrm[nv * 3 + 2] = gz;
          /* How much air two and a half units out: ~1 facing open space, less
             in a crease. The probe leaves the local block, so it asks the
             volume itself. */
          const aoFar = Math.min(1, Math.max(0, -sampleD(wx + gx * 2.5, wy + gy * 2.5, wz + gz * 2.5) / 2.5));
          /* #90: and a short probe, for the small creases and hollows of the
             wall itself — the prototype's "shade of the hollows baked per
             vertex" lives at this scale, the 2.5 probe only sees corners. */
          const aoNear = Math.min(1, Math.max(0, -sampleD(wx + gx * 1.1, wy + gy * 1.1, wz + gz * 1.1) / 1.1));
          const ao = aoFar * (0.45 + 0.55 * aoNear);
          colour(wx, wy, wz, gy, ao, rgb);
          col[nv * 3] = rgb[0]; col[nv * 3 + 1] = rgb[1]; col[nv * 3 + 2] = rgb[2];
          lawn[nv] = lawnAt ? wy - lawnAt(wx, wz) : 0;
          cellVert[((x - 1) * C1 + (z - 1)) * C1 + (y - 1)] = nv;
          nv++;
        }
      }
    }

    /* ---- one quad per crossed edge whose start point is this chunk's own
       (local 0..N-1, block 2..N+1). Wound so the front face looks into the
       air: world/macroView.js draws the cavity's inside with FrontSide. */
    let ni = 0;
    const cell = (x, y, z) => cellVert[((x - 1) * C1 + (z - 1)) * C1 + (y - 1)];
    const quad = (a, b, c, d, flip) => {
      if (a < 0 || b < 0 || c < 0 || d < 0) return;
      const mx = (pos[a * 3] + pos[b * 3] + pos[c * 3] + pos[d * 3]) * 0.25;
      const mz = (pos[a * 3 + 2] + pos[b * 3 + 2] + pos[c * 3 + 2] + pos[d * 3 + 2]) * 0.25;
      if (clip && clip(mx, (pos[a * 3 + 1] + pos[b * 3 + 1] + pos[c * 3 + 1] + pos[d * 3 + 1]) * 0.25, mz,
        (nrm[a * 3 + 1] + nrm[b * 3 + 1] + nrm[c * 3 + 1] + nrm[d * 3 + 1]) * 0.25)) return;
      grow(0, ni + 6);
      if (!flip) { idx[ni++] = a; idx[ni++] = b; idx[ni++] = c; idx[ni++] = a; idx[ni++] = c; idx[ni++] = d; }
      else { idx[ni++] = a; idx[ni++] = c; idx[ni++] = b; idx[ni++] = a; idx[ni++] = d; idx[ni++] = c; }
    };
    for (let x = 2; x <= N + 1; x++) {
      for (let z = 2; z <= N + 1; z++) {
        for (let y = 2; y <= N + 1; y++) {
          const v0 = block[at(x, y, z)];
          const s0 = v0 < 0;
          // along x: the four cells share (y, z) - {0,1}; order (y,z) CCW about +x
          const vx = block[at(x + 1, y, z)];
          if (s0 !== (vx < 0)) {
            quad(cell(x, y - 1, z - 1), cell(x, y, z - 1), cell(x, y, z), cell(x, y - 1, z), s0);
          }
          // along y: order (z, x) CCW about +y
          const vy = block[at(x, y + 1, z)];
          if (s0 !== (vy < 0)) {
            quad(cell(x - 1, y, z - 1), cell(x - 1, y, z), cell(x, y, z), cell(x, y, z - 1), s0);
          }
          // along z: order (x, y) CCW about +z
          const vz = block[at(x, y, z + 1)];
          if (s0 !== (vz < 0)) {
            quad(cell(x - 1, y - 1, z), cell(x, y - 1, z), cell(x, y, z), cell(x - 1, y, z), s0);
          }
        }
      }
    }
    if (!ni) { removeChunk(key); return; }

    chunkData.set(key, {
      pos: pos.slice(0, nv * 3), nrm: nrm.slice(0, nv * 3), col: col.slice(0, nv * 3),
      lawn: lawn.slice(0, nv), idx: idx.slice(0, ni), nv, ni,
    });
    dirtyRegions.add(regionKeyOf(cx, cy, cz));
    meshedChunks++;
  }

  function removeChunk(key) {
    if (!chunkData.has(key)) return;
    chunkData.delete(key);
    const [cx, cy, cz] = key.split('_').map(Number);
    dirtyRegions.add(regionKeyOf(cx, cy, cz));
  }

  /* ---- regions: what is actually drawn ----------------------------------
     Chunks are the unit of REMESHING (small, so a dig costs little); regions
     of REGION^3 chunks are the unit of DRAWING. Every draw call of the nest
     material uploads the whole local-lamp pool (world/lighting.js), and at
     one mesh per 16^3 chunk the founded nest was sixty draw calls where the
     hand-built rooms had six: measured, the frame rate in the hall halved.
     A region is its chunks' buffers concatenated — a copy, not a remesh. */
  function rebuildRegion(rkey) {
    const [rx, ry, rz] = rkey.split('_').map(Number);
    const parts = [];
    let nv = 0, ni = 0;
    for (let a = 0; a < REGION; a++) for (let b = 0; b < REGION; b++) for (let c = 0; c < REGION; c++) {
      const d = chunkData.get(keyOf(rx * REGION + a, ry * REGION + b, rz * REGION + c));
      if (d) { parts.push(d); nv += d.nv; ni += d.ni; }
    }
    let mesh = meshes.get(rkey);
    if (!ni) { if (mesh) { disposeMesh(mesh); meshes.delete(rkey); } return; }
    const P3 = new Float32Array(nv * 3), N3 = new Float32Array(nv * 3), C3 = new Float32Array(nv * 3);
    const L1 = new Float32Array(nv);
    const I = nv < 65536 ? new Uint16Array(ni) : new Uint32Array(ni);
    let ov = 0, oi = 0;
    for (const d of parts) {
      P3.set(d.pos, ov * 3); N3.set(d.nrm, ov * 3); C3.set(d.col, ov * 3); L1.set(d.lawn, ov);
      for (let k = 0; k < d.ni; k++) I[oi + k] = d.idx[k] + ov;
      ov += d.nv; oi += d.ni;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(P3, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(N3, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(C3, 3));
    geo.setAttribute('aLawn', new THREE.BufferAttribute(L1, 1));
    geo.setIndex(new THREE.BufferAttribute(I, 1));
    geo.computeBoundingSphere();
    geo.computeBoundingBox();
    if (mesh) {
      const old = mesh.geometry;
      mesh.geometry = geo;
      // the macro view's silhouette double shares the play mesh's geometry
      for (const ch of mesh.children) if (ch.userData.macroGhost) ch.geometry = geo;
      old.dispose();
    } else {
      mesh = new THREE.Mesh(geo, material);
      mesh.name = `nest-volume-${rkey}`;
      mesh.receiveShadow = true;
      mesh.userData.volumeRegion = rkey;
      meshes.set(rkey, mesh);
      group.add(mesh);
    }
  }

  function flushRegions() {
    for (const r of dirtyRegions) rebuildRegion(r);
    dirtyRegions.clear();
  }

  function remeshKey(key) {
    const [cx, cy, cz] = key.split('_').map(Number);
    meshChunk(cx, cy, cz);
  }

  /**
   * Remesh dirty chunks until `budgetMs` is spent (at least one per call, so
   * a heavy frame never stalls the queue for good). Nearest to `near` first
   * when given, so the chunk the player is looking at settles first.
   */
  function update(budgetMs = 2.5, near = null) {
    if (!dirty.size) return 0;
    const t0 = performance.now();
    let keys = [...dirty];
    if (near && keys.length > 1) {
      const d = (k) => {
        const [cx, cy, cz] = k.split('_').map(Number);
        return ((cx + 0.5) * N * VOXEL - near.x) ** 2 + ((cy + 0.5) * N * VOXEL - near.y) ** 2 + ((cz + 0.5) * N * VOXEL - near.z) ** 2;
      };
      keys.sort((a, b) => d(a) - d(b));
    }
    let done = 0;
    for (const k of keys) {
      dirty.delete(k);
      remeshKey(k);
      done++;
      if (performance.now() - t0 > budgetMs) break;
    }
    flushRegions();
    lastMs = performance.now() - t0;
    return done;
  }

  /** Remesh everything that is dirty, now. For the discrete events (the
   *  founding, a room completing) and for harnesses that stop the frame loop. */
  function flush() {
    const t0 = performance.now();
    for (const k of [...dirty]) { dirty.delete(k); remeshKey(k); }
    flushRegions();
    lastMs = performance.now() - t0;
  }

  /** Throw every chunk mesh away and rebuild from the volume (debug). */
  function rebuildAll() {
    for (const c of volumeChunks()) dirty.add(keyOf(c.cx, c.cy, c.cz));
    flush();
  }

  function dispose() {
    off();
    for (const m of meshes.values()) disposeMesh(m);
    meshes.clear();
    chunkData.clear();
    dirty.clear();
    dirtyRegions.clear();
  }

  return {
    update, flush, rebuildAll, dispose,
    get pending() { return dirty.size; },
    stats: () => {
      let tris = 0, verts = 0;
      for (const m of meshes.values()) { tris += m.geometry.index.count / 3; verts += m.geometry.attributes.position.count; }
      return { meshes: meshes.size, chunks: chunkData.size, tris, verts, pending: dirty.size, meshedChunks, lastMs };
    },
  };
}
