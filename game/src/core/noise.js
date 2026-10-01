// Deterministic value noise + small numeric helpers, ported line-for-line
// from design/prototypes/sortie-fourmiliere.html (section 0, "small math
// library") so world generation stays numerically identical to values
// already validated by the studio in the old prototype.

export function hash2(x, y) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

export function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

/* Mulberry32 — same tiny deterministic PRNG as the old prototype, so seeded
   generation (grass placement, bark wobble, etc.) reproduces identically. */
export function rng(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
export function lerp(a, b, t) { return a + (b - a) * t; }
export function damp(a, b, rate, dt) { return lerp(a, b, 1 - Math.exp(-rate * dt)); }

/* 3D value noise for the dug volume (world/nestVolume.js, #81): the walls of
   a cavity are carved in 3D, so a 2D noise would draw the same wobble straight
   down every wall — the vertical streaks of a sawn face, not dug earth. Same
   hash family and smoothstep as vnoise(), one more axis. */
export function hash3(x, y, z) {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

export function vnoise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const a0 = lerp(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), u);
  const b0 = lerp(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), u);
  const a1 = lerp(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), u);
  const b1 = lerp(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), u);
  return lerp(lerp(a0, b0, v), lerp(a1, b1, v), w);
}
