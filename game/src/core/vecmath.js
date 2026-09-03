// Plain-array 3-vector helpers, ported from the old prototype's mat4/vec3
// section. Kept as [x,y,z] arrays (not THREE.Vector3) because the world
// builders below port generator code that already reads that way in
// design/prototypes/sortie-fourmiliere.html — converting to THREE.Vector3
// chains there would just be churn with no behaviour change.

export function nrm3(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}
export function cross3(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
export function scl3(v, s) { return [v[0] * s, v[1] * s, v[2] * s]; }
export function add3(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
export function sub3(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }

/* A basis = three (already-scaled) axis vectors + an origin, i.e. exactly
   what the old m4Basis() packed into a 4x4 — kept unpacked here since
   nothing downstream needs a real matrix, just "transform this local point". */
export function makeBasis(xAxis, yAxis, zAxis, p) {
  return { x: xAxis, y: yAxis, z: zAxis, p };
}

export function applyBasis(basis, local) {
  const [lx, ly, lz] = local;
  return [
    basis.x[0] * lx + basis.y[0] * ly + basis.z[0] * lz + basis.p[0],
    basis.x[1] * lx + basis.y[1] * ly + basis.z[1] * lz + basis.p[1],
    basis.x[2] * lx + basis.y[2] * ly + basis.z[2] * lz + basis.p[2],
  ];
}

/* The basis that maps a unit cylinder (y: 0..1, r: 1) onto the segment a->b —
   same construction as the old prototype's segMat(). */
export function segBasis(a, b, radius) {
  const d = sub3(b, a);
  const len = Math.hypot(d[0], d[1], d[2]) || 1e-4;
  const yA = [d[0] / len, d[1] / len, d[2] / len];
  const ref = Math.abs(yA[1]) < 0.97 ? [0, 1, 0] : [1, 0, 0];
  const xA = nrm3(cross3(ref, yA));
  const zA = cross3(xA, yA); // right-handed, so winding isn't mirrored
  return makeBasis(scl3(xA, radius), scl3(yA, len), scl3(zA, radius), a);
}
