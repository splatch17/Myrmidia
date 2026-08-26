// Procedural texture generator for Myrmidia's Three.js asset set.
//
// Why a hand-rolled script instead of an external tool: the DA doctrine
// (see design/pipeline-textures.md) is "small, tileable, procedural" —
// textures earn their RAM/GPU budget only if they're cheap to regenerate
// and cheap to load. This script has zero dependencies beyond Node's
// built-in `zlib` (for PNG's DEFLATE stream) so it never touches
// node_modules or the network: run it, diff the PNGs, done.
//
// Usage: node game/scripts/generate-procedural-textures.mjs
// (also wired as `npm run gen:textures` from game/)

import { writeFileSync, mkdirSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEXTURES_DIR = join(ROOT, 'src', 'assets', 'textures');

// ---------------------------------------------------------------------
// Minimal PNG encoder (8-bit RGB, filter type 0, single IDAT).
// No canvas/sharp/etc — just zlib.deflateSync, which ships with Node.
// ---------------------------------------------------------------------

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = CRC_TABLE[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

/** @param {number} width @param {number} height @param {Uint8Array} rgb - width*height*3 bytes */
function encodePNG(width, height, rgb) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB (no alpha — these are opaque albedo maps)
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const stride = width * 3;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (stride + 1);
    raw[rowStart] = 0; // filter type "None" per scanline
    raw.set(rgb.subarray(y * stride, (y + 1) * stride), rowStart + 1);
  }
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

// ---------------------------------------------------------------------
// Tileable value noise. Lattice points are hashed directly (no lookup
// table to wrap), and u/v are periodic with period 1 by construction —
// so noise(0, v) === noise(1, v) exactly, which is what makes the
// output seamless when Three.js repeats the texture across a wall or
// the ground plane.
// ---------------------------------------------------------------------

function hash2(ix, iy, seed) {
  let h = (ix | 0) * 374761393 + (iy | 0) * 668265263 + seed * 2654435761;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

function wrap(i, n) {
  return ((i % n) + n) % n;
}

/**
 * Periodic value noise. gridX/gridY (must be integers) control frequency
 * per axis. Lattice indices are wrapped modulo the grid size, so the
 * hash sampled at index 0 is *exactly* the hash sampled at index
 * gridX/gridY — that's what makes noise(0, v) === noise(1, v) and the
 * texture seamless when Three.js repeats it, not just approximately close.
 */
function tileableNoise(gridX, gridY, seed) {
  return (u, v) => {
    const gx = u * gridX;
    const gy = v * gridY;
    const x0 = Math.floor(gx);
    const y0 = Math.floor(gy);
    const x1 = x0 + 1;
    const y1 = y0 + 1;
    const fx = smoothstep(gx - x0);
    const fy = smoothstep(gy - y0);
    const h00 = hash2(wrap(x0, gridX), wrap(y0, gridY), seed);
    const h10 = hash2(wrap(x1, gridX), wrap(y0, gridY), seed);
    const h01 = hash2(wrap(x0, gridX), wrap(y1, gridY), seed);
    const h11 = hash2(wrap(x1, gridX), wrap(y1, gridY), seed);
    const a = h00 + (h10 - h00) * fx;
    const b = h01 + (h11 - h01) * fx;
    return a + (b - a) * fy;
  };
}

/** Sparse round flecks (moss specks, grit) on a cell grid that evenly divides [0,1). cellCount MUST divide the output resolution for a clean tile. */
function fleckMask(cellCount, seed, density, radius) {
  return (u, v) => {
    const cx = Math.floor(u * cellCount);
    const cy = Math.floor(v * cellCount);
    const present = hash2(cx, cy, seed) < density;
    if (!present) return 0;
    // Jittered center + radius inside the cell, in cell-local [0,1) space.
    const jx = hash2(cx, cy, seed + 101);
    const jy = hash2(cx, cy, seed + 202);
    const jr = radius * (0.6 + 0.4 * hash2(cx, cy, seed + 303));
    const lu = u * cellCount - cx;
    const lv = v * cellCount - cy;
    const d = Math.hypot(lu - jx, lv - jy);
    return d < jr ? smoothstep(1 - d / jr) : 0;
  };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function mixRGB(c1, c2, t) {
  return [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];
}

function hexToRGB(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Palette anchors, cf. README.md / design/concept.html.
const PAL = {
  chitine: hexToRGB('#E0A752'),
  mousse: hexToRGB('#8FAE5E'),
  rouille: hexToRGB('#E07356'),
  miel: hexToRGB('#E6B558'),
  soie: hexToRGB('#9DB0D8'),
  spore: hexToRGB('#C497D9'),
};

// Quantizing to steps of a few levels (instead of the full 0-255 range)
// costs nothing visually at this stylized, flat-shaded scale — the
// prototype already bakes cavity shading in coarse per-vertex steps,
// not smooth gradients — and it matters a lot for file size: repeated
// byte values are what let DEFLATE's LZ77 stage actually find matches
// in noise-derived data. Smooth float noise quantizes to nothing but
// entropy.
function quantize(v, step) {
  return Math.round(v / step) * step;
}

function writeTexture(materialSlug, mapName, width, height, sample, quantStep = 4) {
  const rgb = new Uint8Array(width * height * 3);
  for (let y = 0; y < height; y++) {
    const v = y / height;
    for (let x = 0; x < width; x++) {
      const u = x / width;
      const [r, g, b] = sample(u, v);
      const i = (y * width + x) * 3;
      rgb[i] = Math.max(0, Math.min(255, quantize(r, quantStep)));
      rgb[i + 1] = Math.max(0, Math.min(255, quantize(g, quantStep)));
      rgb[i + 2] = Math.max(0, Math.min(255, quantize(b, quantStep)));
    }
  }
  const png = encodePNG(width, height, rgb);
  const dir = join(TEXTURES_DIR, materialSlug);
  mkdirSync(dir, { recursive: true });
  const outPath = join(dir, `${materialSlug}_${mapName}.png`);
  writeFileSync(outPath, png);
  const kb = (png.length / 1024).toFixed(1);
  console.log(`  ${outPath.replace(ROOT + '\\', '').replace(ROOT + '/', '')}  (${width}x${height}, ${kb} KB)`);
}


// ---------------------------------------------------------------------
// Shape helpers — the round-2 upgrade over pure noise.
//
// Round 1 (bark/tunnel-dirt, first version) produced *noise*: grain with
// no shapes in it. Against the render target fixed in #25 — "stylise
// facon WoW, texture peinte a la main lisible avant realisme" — noise is
// the wrong grammar. A hand-painted texture reads because it is built out
// of *shapes with the light already painted into them*: a clod, a pebble,
// a bark ridge, each lighter on the light side and carrying a dark
// contact line on the other. That dark line under the shape is what keeps
// the surface legible when the ant is 30 units away and texel density
// collapses — a noise field just averages to flat mud at that distance
// (see design/charte-stylisation.md, section "de bruit a forme").
// ---------------------------------------------------------------------

function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }

/**
 * Tileable cellular (Worley) field, anisotropic: cellX/cellY set the cell
 * count per axis independently, so `cellular(2, 7, s)` gives wide, short
 * cells whose boundaries run mostly horizontally (used for the cracks
 * that break up the bark ridges).
 *
 * Returns F1 (distance to the nearest feature point), F2 - F1 as `edge`
 * (near zero exactly on a cell boundary — this is what draws a *fissure
 * network*, whereas thresholding F1 alone only ever draws separate
 * circles), the vector to the feature, and a stable per-feature id.
 *
 * Feature positions come from *wrapped* lattice indices, so the field is
 * exactly periodic over [0,1) on both axes — same guarantee as
 * tileableNoise, and it holds for any cell count (unlike fleckMask, which
 * does no neighbour lookup and so needs its count to divide the output
 * resolution).
 */
function cellular(cellX, cellY, seed) {
  return (u, v) => {
    const gx = u * cellX, gy = v * cellY;
    const ix = Math.floor(gx), iy = Math.floor(gy);
    let f1 = 1e9, f2 = 1e9, bdx = 0, bdy = 0, bid = 0;
    for (let oy = -1; oy <= 1; oy++) {
      for (let ox = -1; ox <= 1; ox++) {
        const cx = ix + ox, cy = iy + oy;
        const wx = wrap(cx, cellX), wy = wrap(cy, cellY);
        const px = cx + hash2(wx, wy, seed);
        const py = cy + hash2(wx, wy, seed + 77);
        const dx = px - gx, dy = py - gy;
        const d = Math.hypot(dx, dy);
        if (d < f1) { f2 = f1; f1 = d; bdx = dx; bdy = dy; bid = hash2(wx, wy, seed + 155); }
        else if (d < f2) { f2 = d; }
      }
    }
    return { d: f1, edge: f2 - f1, dx: bdx, dy: bdy, id: bid };
  };
}

/**
 * Domain warp: offsets the sampling position by a low-amplitude tileable
 * noise before a shape field is evaluated. Without it every cellular
 * shape comes out a circle and the result reads as bubbles or cobbles,
 * not as clods/tufts/plates — which is exactly what the first pass of
 * this round produced. Tiling survives because the offset field is itself
 * periodic with period 1, so f(u + p(u,v)) agrees at u = 0 and u = 1.
 */
function warped(field, amp, seed) {
  const wu = tileableNoise(9, 9, seed);
  const wv = tileableNoise(9, 9, seed + 31);
  return (u, v) => field(u + (wu(u, v) - 0.5) * amp, v + (wv(u, v) - 0.5) * amp);
}

/**
 * Baked key light for a shape, from the vector (dx, dy) pointing from the
 * sample toward the shape's centre. Returns -1 on the shadowed flank, +1
 * on the lit one.
 *
 * The light is fixed at the upper-left of the texture — the canonical
 * convention for hand-painted assets, and the reason they stay readable
 * when the runtime light moves: the painted light gives the *form*, the
 * runtime light gives the *place*. Nothing in the engine has to agree
 * with this direction for it to work; what matters is that every texture
 * in the set agrees with itself.
 */
function facetLight(dx, dy) {
  const len = Math.hypot(dx, dy) || 1;
  return (0.70 * dx + 0.71 * dy) / len;
}

/**
 * Three-value colour construction: shadow / base / light, with `t` in
 * [0,1]. Deliberately the same three-plateau grammar as the toon ramp
 * shipped below (toon/toon_ramp-*.png) — the texture is painted in the
 * same number of values the lighting quantises to, so the two do not
 * fight and produce a fourth, muddy value nobody chose.
 */
function tri(dk, md, lt, t) {
  t = clamp01(t);
  return t < 0.5 ? mixRGB(dk, md, t * 2) : mixRGB(md, lt, (t - 0.5) * 2);
}

function darken(c, k) { return mixRGB(c, [0, 0, 0], k); }

// Material palettes, all derived from the root palette and the per-zone
// charter in design/charte-stylisation.md. Three values per material
// (see tri() above). Note how much *lighter* the "lit" values are than
// the vertex colours currently in game/src/world/ — the captures that
// motivated this round showed every surface topping out around #5a4226,
// which is why the whole game read as one brown wash.
const DIRT_DK = hexToRGB('#352515'), DIRT_MD = hexToRGB('#74552F'), DIRT_LT = hexToRGB('#B0854A');
const STONE_DK = hexToRGB('#46423A'), STONE_MD = hexToRGB('#7A7263'), STONE_LT = hexToRGB('#B0A794');
const BARK_DK = hexToRGB('#2E2113'), BARK_MD = hexToRGB('#6F5330'), BARK_LT = hexToRGB('#B7904E');
const SOIL_DK = hexToRGB('#52412A'), SOIL_MD = hexToRGB('#86673B'), SOIL_LT = hexToRGB('#B18F55');
const MOSS_DK = hexToRGB('#47632A'), MOSS_MD = hexToRGB('#83A845'), MOSS_LT = hexToRGB('#BCD478');
const CHIT_DK = hexToRGB('#5E3B15'), CHIT_MD = hexToRGB('#A9702A'), CHIT_LT = hexToRGB('#E5B75F');
const CHIT_HI = hexToRGB('#F6DCA2');
const SPORE_DK = hexToRGB('#4E2F6B'), SPORE_MD = hexToRGB('#9A63C4'), SPORE_LT = hexToRGB('#D9AEEE');
const WART_HI = hexToRGB('#F3E6FF');

// ---------------------------------------------------------------------
// toon_ramp-lawn / toon_ramp-nest — the lighting ramp, not a surface.
//
// Shipped as a texture because that is exactly what THREE.MeshToonMaterial
// consumes as `gradientMap`: it samples at (dotNL * 0.5 + 0.5, 0) — a
// half-lambert coordinate, which is already the right base for this look
// (the terminator never reaches 0, so shadows are *filled*, not crushed).
// Authoring the ramp as a file rather than as GLSL means the DA owns the
// curve and can iterate on it without touching a shader.
//
// Three plateaus, not two: two is cel-shading (anime), which #25
// explicitly rules out. Not four, and not a smooth gradient either — that
// just reads as ordinary lambert. Shadow / mid / light is how a
// hand-painted texture is built, so the lighting is built the same way.
//
// Knees are ~0.10-0.14 wide in half-lambert space (roughly 14-18 degrees
// of surface normal), not 0.02: at 0.02 the terminator is a hard ink line
// (cel again); at 0.12 it reads as a painted transition and survives the
// low-poly faceting without turning every facet edge into a hard band.
// ---------------------------------------------------------------------

function rampCurve(x, floorV, midV, k1a, k1b, k2a, k2b) {
  if (x <= k1a) return floorV;
  if (x < k1b) return lerp(floorV, midV, smoothstep((x - k1a) / (k1b - k1a)));
  if (x <= k2a) return midV;
  if (x < k2b) return lerp(midV, 1, smoothstep((x - k2a) / (k2b - k2a)));
  return 1;
}

function generateRamps() {
  const W = 64, H = 4;
  // Lawn: shadow floor 0.30. High, on purpose — outdoors the sky fill is
  // strong, and a shadow that goes darker than this stops carrying the
  // cool shadow colour and just reads as dirt.
  writeTexture('toon', 'ramp-lawn', W, H, (u) => {
    const g = rampCurve(u, 0.30, 0.62, 0.44, 0.56, 0.70, 0.80) * 255;
    return [g, g, g];
  }, 1);
  // Nest: floor 0.18 (less fill to lift it) but a wider mid plateau, so a
  // mushroom's light lands as a broad soft pool rather than a tight
  // hotspot — the "many small lamps, each making a pool" language the
  // prototype established, expressed in the ramp instead of the falloff.
  writeTexture('toon', 'ramp-nest', W, H, (u) => {
    const g = rampCurve(u, 0.18, 0.55, 0.40, 0.54, 0.66, 0.82) * 255;
    return [g, g, g];
  }, 1);
}

// ---------------------------------------------------------------------
// lawn-soil_albedo — the ground quad, 380x250 units, half of every
// outdoor frame. Highest-value texture in the game by surface area.
//
// Built as overlapping tufts of moss growing *over* soil, soil showing
// through in the gaps — not as a soil/moss noise blend, which is exactly
// what currently makes the lawn read as flat olive mud. Tufts are warped
// and large enough to merge into each other: separated circles read as
// peas on mud (first attempt of this round did precisely that).
// ---------------------------------------------------------------------

function generateLawnSoil() {
  const W = 128, H = 128;
  const clump = warped(cellular(5, 5, 21), 0.13, 26);
  const detail = warped(cellular(11, 11, 27), 0.09, 28);
  const broad = tileableNoise(3, 3, 22);
  const grain = tileableNoise(44, 44, 23);
  const fine = tileableNoise(96, 96, 24);
  const grit = fleckMask(16, 25, 0.18, 0.22);

  writeTexture('lawn-soil', 'albedo', W, H, (u, v) => {
    let col = tri(SOIL_DK, SOIL_MD, SOIL_LT,
      smoothstep(clamp01(broad(u, v) * 0.6 + grain(u, v) * 0.4)));

    // big tufts: r ~0.45-0.68 in cell units against a cell of 1, so they
    // overlap and cover most of the surface
    const c = clump(u, v);
    const r = 0.46 + 0.22 * c.id;
    if (c.d < r) {
      const lit = facetLight(c.dx, c.dy);
      const g = tri(MOSS_DK, MOSS_MD, MOSS_LT,
        clamp01(0.46 + lit * 0.26 + (c.id - 0.5) * 0.20 + (fine(u * 2, v * 2) - 0.5) * 0.22));
      col = mixRGB(col, g, smoothstep(clamp01((1 - c.d / r) / 0.30)) * 0.95);
      // dark contact line just inside the tuft's shadowed edge only — a
      // ring all the way round reads as a bubble, not as a plant sitting
      // in soil
      const rim = (1 - Math.abs(c.d - r * 0.90) / (r * 0.18)) * clamp01(0.55 - lit);
      if (rim > 0) col = mixRGB(col, darken(SOIL_DK, 0.30), smoothstep(clamp01(rim)) * 0.45);
    }

    // small blades catching the light on top of the tufts
    const d2 = detail(u, v);
    if (d2.d < 0.30) {
      const k = smoothstep(clamp01(1 - d2.d / 0.30));
      col = mixRGB(col, MOSS_LT, k * 0.26 * clamp01(facetLight(d2.dx, d2.dy) + 0.4));
    }

    const gr = grit(u, v);
    if (gr > 0) col = mixRGB(col, SOIL_LT, gr * 0.40);
    const n = (fine(u, v) - 0.5) * 10;
    return [col[0] + n, col[1] + n, col[2] + n];
  });
}

// ---------------------------------------------------------------------
// stone_albedo — boulders on the lawn and pebbles underground, one
// material for both (the pipeline doc's "range par materiau, pas par
// biome" rule). Irregular plates separated by a fissure network (F2 - F1,
// not a distance threshold), each plate its own value, with moss taking
// the upward flanks — the "moss climbs" idiom already established on the
// prototype's midden debris and lawn rocks.
// ---------------------------------------------------------------------

function generateStone() {
  const W = 128, H = 128;
  const plate = warped(cellular(4, 4, 31), 0.15, 36);
  const chip = warped(cellular(10, 10, 37), 0.10, 38);
  const grain = tileableNoise(38, 38, 32);
  const fine = tileableNoise(90, 90, 33);
  const mossFleck = fleckMask(8, 34, 0.45, 0.42);
  const broad = tileableNoise(3, 3, 35);

  writeTexture('stone', 'albedo', W, H, (u, v) => {
    const c = plate(u, v);
    const facet = facetLight(c.dx, c.dy);
    let col = tri(STONE_DK, STONE_MD, STONE_LT, clamp01(
      0.46 + (c.id - 0.5) * 0.40 + facet * 0.24 + (broad(u, v) - 0.5) * 0.22
      + (grain(u, v) - 0.5) * 0.16));

    // chipped facets inside each plate: the small angular value breaks a
    // painted rock always has, so the plate is not a single flat wash
    const ch = chip(u, v);
    col = mixRGB(col, tri(STONE_DK, STONE_MD, STONE_LT, clamp01(0.5 + facetLight(ch.dx, ch.dy) * 0.42)), 0.28);

    // fissure network between plates
    const fis = 1 - smoothstep(clamp01(c.edge / 0.16));
    col = mixRGB(col, darken(STONE_DK, 0.50), fis * 0.80);

    // moss on the upward (lit) flanks, never in the fissures
    const m = mossFleck(u, v) * clamp01(facet * 1.1 + 0.45) * (1 - fis);
    if (m > 0) {
      col = mixRGB(col, tri(MOSS_DK, MOSS_MD, MOSS_LT, clamp01(0.45 + (fine(u, v) - 0.5) * 0.9)), m * 0.62);
    }
    const n = (fine(u, v) - 0.5) * 12;
    return [col[0] + n, col[1] + n, col[2] + n];
  });
}

// ---------------------------------------------------------------------
// chitin_albedo — the ant, the queen, every future NPC. Smallest surface
// on this list and the most looked-at: on screen 100% of the time, and
// the one thing a player identifies with. Currently flat vertex colour,
// which is why it reads as orange plastic in every capture.
//
// Overlapping plates on an offset row grid: a lit lip just inside each
// plate's leading edge, a dark seam at the trailing one. Two strokes,
// exactly how a plated insect is painted by hand. The per-plate value
// spread and the broad blotch pass are what stop it reading as quilting.
// ---------------------------------------------------------------------

function generateChitin() {
  const W = 128, H = 128;
  const COLS = 5, ROWS = 8; // ROWS even so the half-row offset still tiles in v
  const fine = tileableNoise(80, 80, 42);
  const broad = tileableNoise(3, 4, 43);
  const wob = tileableNoise(6, 6, 46);
  const pit = fleckMask(32, 44, 0.28, 0.18);

  writeTexture('chitin', 'albedo', W, H, (u, v) => {
    const uu = u + (wob(u, v) - 0.5) * 0.05;
    const gy = v * ROWS, ry = Math.floor(gy), fy = gy - ry;
    const gx = uu * COLS + (ry % 2) * 0.5, rx = Math.floor(gx), fx = gx - rx;
    const ex = (fx - 0.5) / 0.54, ey = (fy - 0.50) / 0.56;
    const d = Math.hypot(ex, ey);
    const id = hash2(wrap(rx, COLS), wrap(ry, ROWS), 45);

    let col = tri(CHIT_DK, CHIT_MD, CHIT_LT, clamp01(
      (0.60 - ey * 0.50) + (id - 0.5) * 0.34 + (broad(u, v) - 0.5) * 0.28
      + (fine(u, v) - 0.5) * 0.10));

    const seam = 1 - Math.abs(d - 1.0) / 0.18;
    if (seam > 0) col = mixRGB(col, darken(CHIT_DK, 0.55), smoothstep(clamp01(seam)) * 0.72);
    const lip = 1 - Math.abs(d - 0.78) / 0.14;
    if (lip > 0 && ey < 0.10) col = mixRGB(col, CHIT_HI, smoothstep(clamp01(lip)) * 0.45);
    if (d > 1.10) col = mixRGB(col, darken(CHIT_DK, 0.45), 0.45);

    const p = pit(u, v);
    if (p > 0) col = mixRGB(col, darken(CHIT_DK, 0.20), p * 0.28);
    return col;
  });
}

// ---------------------------------------------------------------------
// mushroom-cap_albedo — the fungus gardens, i.e. the gallery's only real
// light source and the whole of the "feerique" pole. Currently a flat
// emissive vertex colour, which reads as violet plastic.
//
// Meant to modulate the *emission*, not just the albedo (see the request
// to Atta in design/charte-stylisation.md): the pale warts then glow
// brighter than the cap around them, which is what turns a smooth ball
// into a living lamp.
// ---------------------------------------------------------------------

function generateMushroomCap() {
  const W = 128, H = 128;
  const mottle = tileableNoise(4, 4, 51);
  const fine = tileableNoise(70, 70, 52);
  const wart = warped(cellular(6, 6, 53), 0.10, 54);

  writeTexture('mushroom-cap', 'albedo', W, H, (u, v) => {
    let col = tri(SPORE_DK, SPORE_MD, SPORE_LT,
      smoothstep(clamp01(mottle(u, v) * 0.78 + fine(u, v) * 0.22)));

    const c = wart(u, v);
    const r = 0.26 + 0.16 * c.id;
    if (c.d < r) {
      const lit = facetLight(c.dx, c.dy);
      // solid pale wart with the light baked across it, and a dark
      // contact crescent only on its shadowed side (a full ring reads as
      // a bubble outline, which is what the first pass produced)
      col = mixRGB(col, mixRGB(SPORE_LT, WART_HI, clamp01(0.30 + lit * 0.60)),
        smoothstep(clamp01((1 - c.d / r) / 0.55)) * 0.92);
      const crescent = (1 - Math.abs(c.d - r * 0.92) / (r * 0.20)) * clamp01(0.35 - lit);
      if (crescent > 0) col = mixRGB(col, SPORE_DK, smoothstep(clamp01(crescent)) * 0.45);
    }
    return col;
  });
}

// ---------------------------------------------------------------------
// bark_albedo — regenerated. v1 was vertical noise streaks; this is
// vertical *ridges*: each with a lit left flank, a crest, and a hard dark
// groove where it meets the next one. The cracks that break the ridges up
// use anisotropic cells (2 wide x 7 tall) so their boundaries run mostly
// horizontally — an isotropic crack field cuts the ridges in every
// direction and the trunk comes out looking like wickerwork.
// ---------------------------------------------------------------------

function generateBark() {
  const W = 128, H = 128;
  const wobbleN = tileableNoise(3, 7, 5);
  const grain = tileableNoise(20, 90, 3); // grain runs along the trunk
  const fine = tileableNoise(80, 80, 6);
  const crack = warped(cellular(2, 7, 7), 0.06, 9);
  const moss = fleckMask(16, 4, 0.14, 0.30);
  const RIDGES = 9;

  writeTexture('bark', 'albedo', W, H, (u, v) => {
    const g = (u + (wobbleN(u, v) - 0.5) * 0.07) * RIDGES;
    const rf = g - Math.floor(g);
    const id = hash2(wrap(Math.floor(g), RIDGES), 0, 8);
    const prof = Math.sin(rf * Math.PI); // 0 in the grooves, 1 on the crest

    let col = tri(BARK_DK, BARK_MD, BARK_LT, clamp01(
      prof * 0.52 + (1 - rf) * 0.26 + (id - 0.5) * 0.26 + (grain(u, v) - 0.5) * 0.26));

    const groove = Math.min(
      smoothstep(clamp01(1 - rf / 0.11)) + smoothstep(clamp01(1 - (1 - rf) / 0.11)), 1);
    col = mixRGB(col, darken(BARK_DK, 0.45), groove * 0.65);

    // sparse horizontal breaks
    const ck = 1 - smoothstep(clamp01(crack(u, v).edge / 0.09));
    col = mixRGB(col, darken(BARK_DK, 0.35), ck * 0.35);

    const mm = moss(u, v) * clamp01(1 - prof * 1.4);
    if (mm > 0) col = mixRGB(col, tri(MOSS_DK, MOSS_MD, MOSS_LT, 0.45), mm * 0.6);

    const n = (fine(u, v) - 0.5) * 12;
    return [col[0] + n, col[1] + n, col[2] + n];
  });
}

// ---------------------------------------------------------------------
// tunnel-dirt_albedo — regenerated. v1 was cavity noise; this is clods of
// packed earth separated by crevices, with pebbles pressed into the
// surface, each with a lit cap and a dark contact line underneath. The
// crevice lines are what give a gallery wall a *scale* — the same job the
// prototype's per-vertex cavity shading does for the geometry, one level
// of detail further down.
// ---------------------------------------------------------------------

function generateTunnelDirt() {
  const W = 128, H = 128;
  const clod = warped(cellular(4, 4, 11), 0.16, 17);
  const pebble = warped(cellular(9, 9, 16), 0.08, 18);
  const broad = tileableNoise(3, 3, 12);
  const grain = tileableNoise(40, 40, 13);
  const fine = tileableNoise(96, 96, 14);
  const mossFleck = fleckMask(32, 15, 0.06, 0.20);

  writeTexture('tunnel-dirt', 'albedo', W, H, (u, v) => {
    const c = clod(u, v);
    const t = clamp01(0.40 + (c.id - 0.5) * 0.34 + facetLight(c.dx, c.dy) * 0.24
      + (broad(u, v) - 0.5) * 0.24 + (grain(u, v) - 0.5) * 0.22);
    let col = tri(DIRT_DK, DIRT_MD, DIRT_LT, t);

    const cre = 1 - smoothstep(clamp01(c.edge / 0.15));
    col = mixRGB(col, darken(DIRT_DK, 0.55), cre * 0.80);

    const p = pebble(u, v), pr = 0.22 + 0.14 * p.id;
    if (p.d < pr && p.id > 0.52) {
      const pl = facetLight(p.dx, p.dy);
      col = mixRGB(col, tri(STONE_DK, STONE_MD, STONE_LT, clamp01(0.45 + pl * 0.42)),
        smoothstep(clamp01((1 - p.d / pr) / 0.45)) * 0.88);
      const rim = (1 - Math.abs(p.d - pr * 0.92) / (pr * 0.22)) * clamp01(0.30 - pl);
      if (rim > 0) col = mixRGB(col, darken(DIRT_DK, 0.5), smoothstep(clamp01(rim)) * 0.6);
    }

    const m = mossFleck(u, v) * clamp01(t * 1.6 - 0.5);
    if (m > 0) col = mixRGB(col, tri(MOSS_DK, MOSS_MD, MOSS_LT, 0.4), m * 0.5);

    const n = (fine(u, v) - 0.5) * 10;
    return [col[0] + n, col[1] + n, col[2] + n];
  });
}

console.log('Generating procedural textures ->', TEXTURES_DIR);
generateRamps();
generateLawnSoil();
generateTunnelDirt();
generateStone();
generateChitin();
generateMushroomCap();
generateBark();
console.log('Done.');
