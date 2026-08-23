import * as THREE from 'three';
import { applyBasis } from './vecmath.js';

// A small CPU-side mesh accumulator, the Three.js-facing equivalent of the
// old prototype's newMesh()/vtx()/tri()/quad()/computeNormals(). Vertices are
// never deduplicated across faces (same as the old file) — adjacent quads in
// a ring share indices because the ring-building loops reuse them directly,
// exactly like before, so THREE.BufferGeometry.computeVertexNormals() (index-
// based accumulation) smooths exactly where the old hand-rolled version did.
export class MeshBuilder {
  constructor() {
    this.positions = [];
    this.colors = [];
    this.indices = [];
  }

  addVertex(x, y, z, color) {
    this.positions.push(x, y, z);
    this.colors.push(color[0], color[1], color[2]);
    return this.positions.length / 3 - 1;
  }

  addTri(a, b, c) { this.indices.push(a, b, c); }
  addQuad(a, b, c, d) { this.addTri(a, b, c); this.addTri(a, c, d); }

  /* Bake a primitive (see unitSphere/unitCylinder below) into this builder,
     transformed by `basis` and coloured per-vertex by colorFn(worldX,Y,Z). */
  bake(geo, basis, colorFn) {
    const off = this.positions.length / 3;
    for (let v = 0; v < geo.p.length; v += 3) {
      const w = applyBasis(basis, [geo.p[v], geo.p[v + 1], geo.p[v + 2]]);
      const c = colorFn(w[0], w[1], w[2]);
      this.positions.push(w[0], w[1], w[2]);
      this.colors.push(c[0], c[1], c[2]);
    }
    for (let k = 0; k < geo.i.length; k++) this.indices.push(off + geo.i[k]);
  }

  toBufferGeometry() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(this.colors, 3));
    geo.setIndex(this.indices);
    geo.computeVertexNormals();
    return geo;
  }
}

/* ---- primitive generators, in local space — ported verbatim from the old
   prototype's unitSphere()/unitCylinder() (section 2). ---- */

export function unitSphere(seg, ring) {
  const p = [], n = [], idx = [];
  for (let r = 0; r <= ring; r++) {
    const phi = Math.PI * r / ring, sp = Math.sin(phi), cp = Math.cos(phi);
    for (let s = 0; s <= seg; s++) {
      const th = 2 * Math.PI * s / seg;
      const x = sp * Math.cos(th), y = cp, z = sp * Math.sin(th);
      p.push(x, y, z); n.push(x, y, z);
    }
  }
  for (let r2 = 0; r2 < ring; r2++) {
    for (let s2 = 0; s2 < seg; s2++) {
      const a = r2 * (seg + 1) + s2, b = a + seg + 1;
      idx.push(a, a + 1, b, a + 1, b + 1, b); // wound outward
    }
  }
  return { p, n, i: idx };
}

export function unitCylinder(seg) { // y: 0..1, radius 1
  const p = [], n = [], idx = [];
  for (let s = 0; s <= seg; s++) {
    const th = 2 * Math.PI * s / seg, cx = Math.cos(th), cz = Math.sin(th);
    p.push(cx, 0, cz); n.push(cx, 0, cz);
    p.push(cx, 1, cz); n.push(cx, 0, cz);
  }
  for (let s2 = 0; s2 < seg; s2++) {
    const a = s2 * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const base = p.length / 3;
  p.push(0, 0, 0); n.push(0, -1, 0);
  p.push(0, 1, 0); n.push(0, 1, 0);
  for (let s3 = 0; s3 < seg; s3++) {
    const th0 = 2 * Math.PI * s3 / seg, th1 = 2 * Math.PI * (s3 + 1) / seg;
    const i0 = p.length / 3;
    p.push(Math.cos(th0), 0, Math.sin(th0)); n.push(0, -1, 0);
    p.push(Math.cos(th1), 0, Math.sin(th1)); n.push(0, -1, 0);
    idx.push(base, i0 + 1, i0);
    const i1 = p.length / 3;
    p.push(Math.cos(th0), 1, Math.sin(th0)); n.push(0, 1, 0);
    p.push(Math.cos(th1), 1, Math.sin(th1)); n.push(0, 1, 0);
    idx.push(base + 1, i1, i1 + 1);
  }
  return { p, n, i: idx };
}
