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

/**
 * Domain warp whose amplitude is expressed as a fraction of one *cell* of
 * the field being warped, rather than as a fraction of the whole tile.
 *
 * `cellFrac` is the peak displacement in cells: 0.20 means "no sample is
 * ever pushed more than a fifth of a cell". warped() above takes its
 * amplitude in uv, which silently means a completely different thing per
 * field — 0.09 uv against an 11-cell field is half a cell of displacement,
 * i.e. enough to dissolve the very shape the warp was meant to roughen.
 * Same lesson as the round-4 deformation fix: an amplitude is only
 * meaningful relative to the thing it deforms.
 *
 * Tiling survives for the same reason as warped(): the offset field is
 * itself periodic with period 1.
 */
function warpedCells(field, cellX, cellY, cellFrac, seed) {
  const wu = tileableNoise(9, 9, seed);
  const wv = tileableNoise(9, 9, seed + 31);
  return (u, v) => field(u + (wu(u, v) - 0.5) * 2 * cellFrac / cellX,
                         v + (wv(u, v) - 0.5) * 2 * cellFrac / cellY);
}

/**
 * Pull a colour toward the neutral of its own brightness along one common
 * hue axis, keeping `keep` of the chroma it was painted with.
 *
 * WHY THIS EXISTS, AND WHY ONLY THE LAWN USES IT.
 * world/texturing.js divides each sample by the texture's own *per-channel*
 * mean, so the mean hue is removed but every pixel's departure from that
 * mean is not: a pixel painted warmer than the texture average multiplies
 * the vertex colour toward warm. On the ground quad the vertex colour is
 * already a soil/moss decision (terrain.js mixes C_SOIL_A/B with C_MOSS_A/B
 * by its own moss map), so a texture that *also* swings brown-to-green
 * multiplies the two swings together. Measured on lawn-soil v1 against
 * C_SOIL_A #86673B: R:G goes from 1.76 at the vertex colour to 3.56 at the
 * worst texel — #81462f, terracotta. That is defect 1 of PROGRESS.md, and
 * it is arithmetic, not taste.
 *
 * The division of labour that fixes it: the vertex colour owns hue, the
 * texture owns value. Painting still happens with the soil/moss families
 * (readable code, and the shapes need their own light), then the chroma is
 * compressed at the end by a single documented number.
 *
 * Luminance is taken on the sRGB bytes rather than in linear light: it is a
 * styling knob, and all that matters is that it is monotone in brightness
 * and leaves the axis hue fixed.
 */
function chromaKeep(col, axis, keep) {
  const lum = (c) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  const k = lum(col) / Math.max(lum(axis), 1e-3);
  return mixRGB([axis[0] * k, axis[1] * k, axis[2] * k], col, keep);
}

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
const SEED_DK = hexToRGB('#6E5426'), SEED_MD = hexToRGB('#A8864A'), SEED_LT = hexToRGB('#D8BE86');
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
// sky_gradient-lawn / sky_gradient-prologue — the sky, not a surface.
//
// Shipped as a texture for the same reason the toon ramps are: the curve
// belongs to the DA and has to be iterable without touching a shader.
// Today `scene.background` is a single flat colour, and the captures show
// what that costs — the sky reads exactly #8FB6CF at the zenith and
// exactly #8FB6CF one pixel above the ground line, so the world ends in a
// hard 111-value cut with no air in between (see design/ambiance-
// prologue.md, section 0).
//
// v = 0 is the zenith, v = 1 the horizon. The bottom stop of each ramp is
// also that state's fog colour, so ground fading into fog and sky meeting
// the horizon arrive at the same value and the seam disappears.
//
// These are colour, not data: they load with colorSpace = SRGBColorSpace,
// unlike the toon ramps.
// ---------------------------------------------------------------------

/** stops: [[t, '#rrggbb'], ...] sorted by t, smoothstepped between. */
function gradient(stops) {
  const cs = stops.map(([t, hex]) => [t, hexToRGB(hex)]);
  return (t) => {
    if (t <= cs[0][0]) return cs[0][1];
    for (let i = 1; i < cs.length; i++) {
      if (t <= cs[i][0]) {
        const k = smoothstep((t - cs[i - 1][0]) / (cs[i][0] - cs[i - 1][0]));
        return mixRGB(cs[i - 1][1], cs[i][1], k);
      }
    }
    return cs[cs.length - 1][1];
  };
}

function generateSky() {
  const W = 8, H = 128;

  // Founded colony — full morning. Cool at the zenith, hazy pale at the
  // horizon, and a last stop that picks up a trace of the green the
  // horizon is actually made of, so the sky belongs to this lawn rather
  // than to a stock skybox.
  const lawn = gradient([
    [0.00, '#4E8FD6'],
    [0.38, '#77B0E2'],
    [0.72, '#A3CBE9'],
    [0.92, '#AFC8D8'],   // == fog colour, founded
    [1.00, '#C3D2D0'],
  ]);

  // Prologue — the end of dusk. Deliberately NOT a golden hour: gold is
  // reserved for the colony, so the reward of founding stays univocal.
  // The haze family is a heavily desaturated spore violet (#C497D9 at
  // ~10% chroma), which keeps the loneliest moment of the game inside the
  // project's own palette instead of a generic sunset.
  const prologue = gradient([
    [0.00, '#232A4E'],
    [0.35, '#3A4269'],
    [0.66, '#5C6183'],
    [0.88, '#8B8399'],   // == fog colour, prologue
    [1.00, '#A88E92'],
  ]);

  writeTexture('sky', 'gradient-lawn', W, H, (u, v) => lawn(v), 1);
  writeTexture('sky', 'gradient-prologue', W, H, (u, v) => prologue(v), 1);
}

// ---------------------------------------------------------------------
// lawn-soil_albedo — the ground quad, 398x250 units, half of every
// outdoor frame. Highest-value texture in the game by surface area.
//
// v2 — fixes defect 1 of PROGRESS.md ("vire au rouille sur les zones sans
// mousse"). Three things changed, in order of how much they mattered:
//
//   1. THE TEXTURE NO LONGER CARRIES A SOIL/MOSS *HUE* SWING. It used to
//      paint brown ground and green tufts at full chroma; terrain.js
//      already makes exactly that decision per vertex, and the triplanar
//      sampler multiplies the two together (see chromaKeep() above for the
//      measurement: R:G 1.76 -> 3.56, i.e. #86673B soil rendering as
//      #81462f terracotta). The shapes are still painted with the soil and
//      moss families — they need their own light — and the chroma is then
//      compressed onto one olive axis at the end. Vertex colour owns hue,
//      texture owns value.
//   2. THE BARE GROUND BETWEEN TUFTS IS PALE, NOT DARK. Its ramp position
//      is biased into 0.42..0.95 instead of the full 0..1: the dark end
//      was what drew a connected web, and a dark warm web is exactly what
//      reads as cracked Martian clay from thirty units up.
//   3. THE CONTACT LINE IS HALVED AND TUFTS SHARE A LARGE-SCALE VALUE.
//      On the wide shots each tuft had its own dark ring and read as a
//      cobble; groups of tufts now drift together on `broad`, so the
//      surface reads as turf with lumps rather than as a pebble mosaic.
//
// Warp amplitudes are per cell now (warpedCells), not per tile: the small
// blade field was being displaced by half its own cell width, which is the
// round-4 deformation lesson repeating itself.
// ---------------------------------------------------------------------

// The single hue every lawn texel is painted on, and how much of the
// painted chroma survives. 0.28 was picked against the measurement, not by
// eye: it holds the worst-case R:G under 2.1 on bare soil (the vertex
// colour's own value is 1.76) while leaving enough green in the tufts that
// a close-up still reads as turf rather than as raked earth.
const LAWN_AXIS = hexToRGB('#8C9455');
const LAWN_CHROMA = 0.28;

function generateLawnSoil() {
  const W = 128, H = 128;
  const clump = warpedCells(cellular(5, 5, 21), 5, 5, 0.22, 26);
  const detail = warpedCells(cellular(11, 11, 27), 11, 11, 0.16, 28);
  const broad = tileableNoise(3, 3, 22);
  const grain = tileableNoise(44, 44, 23);
  const fine = tileableNoise(96, 96, 24);
  const grit = fleckMask(16, 25, 0.18, 0.22);

  writeTexture('lawn-soil', 'albedo', W, H, (u, v) => {
    let col = tri(SOIL_DK, SOIL_MD, SOIL_LT,
      0.42 + 0.53 * smoothstep(clamp01(broad(u, v) * 0.55 + grain(u, v) * 0.45)));

    // big tufts: r ~0.58-0.78 in cell units against a cell of 1, so they
    // overlap and cover most of the surface. Separated circles read as peas
    // on mud (first attempt of round 4 did precisely that). The soil/moss
    // coverage ratio is scale-invariant, so this is the right knob whatever
    // worldPerTile ends up being.
    const c = clump(u, v);
    const r = 0.62 + 0.20 * c.id;
    if (c.d < r) {
      const lit = facetLight(c.dx, c.dy);
      const g = tri(MOSS_DK, MOSS_MD, MOSS_LT,
        clamp01(0.50 + lit * 0.18 + (c.id - 0.5) * 0.18
                + (broad(u, v) - 0.5) * 0.30       // neighbouring tufts drift together
                + (fine(u * 2, v * 2) - 0.5) * 0.20));
      col = mixRGB(col, g, smoothstep(clamp01((1 - c.d / r) / 0.34)) * 0.95);
      // dark contact line just inside the tuft's shadowed edge only — a
      // ring all the way round reads as a bubble, not as a plant sitting
      // in soil. Narrowed and halved from v1 (0.18/0.34 -> 0.14/0.18): at
      // full strength every tuft outlined itself and the lawn became
      // cobblestone at any distance.
      const rim = (1 - Math.abs(c.d - r * 0.92) / (r * 0.14)) * clamp01(0.50 - lit);
      if (rim > 0) col = mixRGB(col, darken(SOIL_DK, 0.20), smoothstep(clamp01(rim)) * 0.12);
    }

    // small blades catching the light on top of the tufts
    const d2 = detail(u, v);
    if (d2.d < 0.42) {
      const k = smoothstep(clamp01(1 - d2.d / 0.42));
      col = mixRGB(col, MOSS_LT, k * 0.34 * clamp01(facetLight(d2.dx, d2.dy) + 0.4));
    }

    const gr = grit(u, v);
    if (gr > 0) col = mixRGB(col, SOIL_LT, gr * 0.40);
    const n = (fine(u, v) - 0.5) * 8;
    return chromaKeep([col[0] + n, col[1] + n, col[2] + n], LAWN_AXIS, LAWN_CHROMA);
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
// chitin_albedo — v2. The ant, the queen, every future NPC: the smallest
// surface on this list and the most looked-at.
//
// v1 laid down a 5 x 8 grid of overlapping oval plates. At the density it
// is used (worldPerTile 4, an ant ~7 units long => ~9 plate columns and
// ~14 rows over the whole body) that is not an insect, it is bubble wrap:
// one scale, perfectly periodic, exactly the failure the bark rib grid
// had. And it fights the mesh — the ant is built from smooth low-poly
// lobes, so a plate pattern drawn in the texture never lines up with the
// silhouette and reads as a printed fabric stretched over the body.
//
// v2 gives up on drawing the plates. A real ant's segmentation is a
// property of its *body*, not of its cuticle finish, so it belongs to the
// mesh (a darker vertex-colour band per gaster tergite — see the request
// to Atta in design/ambiance-prologue.md). What the texture carries
// instead is the finish, which is what makes chitin read as chitin:
//
//   - punctation: dense, irregular, shallow pits with a lit upper-left
//     lip, ~0.16 world units each at worldPerTile 4 — fine enough to
//     dissolve into a matte sheen at combat distance, present enough to
//     kill the "orange plastic" read at close camera;
//   - hair sockets: sparser, darker pinpricks;
//   - broad sheen: two low-frequency diagonal bands of warmer, lighter
//     cuticle, the painted equivalent of a specular sweep, so the body is
//     never one flat value across a lobe.
//
// With no repeating motif left, the tile boundary has nothing to line up
// on, which makes the density far less critical than it was for v1.
// ---------------------------------------------------------------------

function generateChitin() {
  const W = 128, H = 128;
  const punct = warped(cellular(24, 24, 41), 0.012, 42);
  const sheen = tileableNoise(3, 2, 43);
  const blotch = tileableNoise(6, 5, 44);
  const fine = tileableNoise(96, 96, 45);
  const socket = fleckMask(16, 46, 0.09, 0.16);

  writeTexture('chitin', 'albedo', W, H, (u, v) => {
    // Diagonal sheen: a slow sweep across the tile plus a broad blotch
    // pass, so no lobe of the body is ever one flat value.
    // u + v, not 0.5u + 0.5v: tileableNoise is periodic with period 1 in
    // each argument, so only an integer coefficient on u keeps the diagonal
    // sweep continuous across the tile seam (a 0.5 coefficient measured 1.69x
    // the mean column step at the seam, i.e. a visible vertical join).
    const sw = sheen(u + v, v);
    let col = tri(CHIT_DK, CHIT_MD, CHIT_LT, clamp01(
      0.56 + (sw - 0.5) * 0.60 + (blotch(u, v) - 0.5) * 0.30
      + (fine(u, v) - 0.5) * 0.08));

    // Punctation: a shallow pit, lit lip on the light side, dark contact
    // on the other — the same two strokes as every other shape in the set.
    const p = punct(u, v);
    const pr = 0.30 + 0.16 * p.id;
    if (p.d < pr) {
      const t = smoothstep(clamp01((1 - p.d / pr) / 0.7));
      const lit = facetLight(p.dx, p.dy);
      col = mixRGB(col, darken(CHIT_DK, 0.25), t * clamp01(0.30 - lit * 0.55) * 0.85);
      col = mixRGB(col, CHIT_HI, t * clamp01(lit - 0.15) * 0.34);
    }

    const s = socket(u, v);
    if (s > 0) col = mixRGB(col, darken(CHIT_DK, 0.55), s * 0.55);
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
// bark_albedo — v3, plates instead of ribs.
//
// v2 was a strict grid of RIDGES=9 sine ribs plus a `grain` noise whose
// axes were swapped relative to its own comment (`tileableNoise(20, 90)`
// makes features 1/20 wide and 1/90 tall, i.e. *horizontal* streaks, not
// grain running along the trunk). A regular vertical rib crossed by
// horizontal banding is corrugated cardboard, and that is exactly how it
// read on review.
//
// Real bark has no period: it is irregular plates at several scales at
// once, split by a fissure network that forks and merges. So it is built
// here the way tunnel-dirt's clods are built — the one texture of the set
// that was validated — but with the cells stretched along the trunk:
//
//   - major plates: cellular(5, 3), heavily warped. 5 cells across x 3 down
//     means each plate is 0.20 wide and 0.33 tall, so plates are elongated
//     along the trunk without a single straight edge anywhere.
//   - sub-plates: cellular(9, 7) at ~half the fissure depth, so each major
//     plate is itself broken up. This is the "multi-scale" part: one scale
//     alone always reads as a pattern, whatever its shape.
//   - checking: cellular(19, 13), shallow, the surface crazing.
//
// Each plate carries facetLight() across it (lit lip on the light side of
// its rim, dark contact on the other) — the same two strokes as the
// pebbles in tunnel-dirt. Fibre is a *narrow, tall* noise this time
// (tileableNoise(46, 6)), and it is modulated per plate so the fibre stops
// at each fissure instead of running the full height of the texture, which
// is the other half of what made v2 look extruded.
//
// No knots. A knot is a one-off accident and this texture tiles: a knot
// would repeat on a regular lattice all over the trunk, which reads far
// worse than no knot at all. Knots belong to geometry or to a decal.
// ---------------------------------------------------------------------

function generateBark() {
  const W = 128, H = 128;
  const plate = warped(cellular(6, 2, 71), 0.085, 72);
  const sub = warped(cellular(11, 5, 73), 0.055, 74);
  const check = warped(cellular(21, 11, 75), 0.035, 76);
  const fibre = tileableNoise(46, 6, 77);  // narrow and tall: runs along the trunk
  const broad = tileableNoise(2, 3, 78);
  const fine = tileableNoise(90, 90, 79);
  const moss = fleckMask(16, 80, 0.16, 0.30);

  writeTexture('bark', 'albedo', W, H, (u, v) => {
    const P = plate(u, v), S = sub(u, v), C = check(u, v);
    const pl = facetLight(P.dx, P.dy), sl = facetLight(S.dx, S.dy);

    // Fibre is keyed to the plate id, so neighbouring plates do not share
    // a phase and the streaks cannot line up across a fissure.
    const fib = (fibre(u + P.id * 0.37, v) - 0.5);

    let col = tri(BARK_DK, BARK_MD, BARK_LT, clamp01(
      0.51 + (P.id - 0.5) * 0.38 + (S.id - 0.5) * 0.20
      + pl * 0.26 + sl * 0.12
      + (broad(u, v) - 0.5) * 0.18 + fib * 0.34));

    // Bevel each major plate before cutting the fissures, so the crack
    // itself stays the darkest thing and the lip beside it the lightest.
    const nearMaj = smoothstep(clamp01((0.30 - P.edge) / 0.26));
    if (pl > 0) col = mixRGB(col, BARK_LT, nearMaj * pl * 0.34);
    else col = mixRGB(col, darken(BARK_DK, 0.50), nearMaj * -pl * 0.44);

    const fMaj = 1 - smoothstep(clamp01(P.edge / 0.16));
    const fSub = (1 - smoothstep(clamp01(S.edge / 0.11))) * 0.60;
    const fChk = (1 - smoothstep(clamp01(C.edge / 0.07))) * 0.30;
    const fis = clamp01(Math.max(fMaj, Math.max(fSub, fChk)));
    col = mixRGB(col, darken(BARK_DK, 0.62), fis * 0.88);

    // Moss lives in the fissures, never on the crests — the same "moss
    // climbs into the hollows" idiom the rocks and the midden already use.
    const mm = moss(u, v) * fis;
    if (mm > 0) col = mixRGB(col, tri(MOSS_DK, MOSS_MD, MOSS_LT, 0.42), mm * 0.70);

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

// ---------------------------------------------------------------------
// seed_albedo — the harvestable seed (design/ressources-et-fondation.md),
// and the same coat on the granary's stored seeds underground.
//
// 64x64, not 128. A seed is ~4.5 units long and takes worldPerTile 6, so
// it never shows more than three quarters of a tile: half the resolution
// of a wall material is already more texel density per screen pixel than
// the ground quad gets. pipeline-textures.md section 2 asks that any move
// off 128 be a deliberate per-material choice — this is one, and it is
// what keeps the texture budget flat while adding a seventh material.
//
// ISOTROPIC ON PURPOSE. The obvious painting for a seed is longitudinal
// grooves, and it is the wrong one here: texturing.js projects
// triplanarly, so a directional pattern on a small ovoid shows its stripes
// running three different ways across the same object. The groove belongs
// to the geometry (a crease in the lathe), the coat belongs to the
// texture. What the texture carries is what a seed coat actually looks
// like up close: faint testa cells, a hard polished sheen, and dark
// speckles.
//
// No chromaKeep() here, unlike lawn-soil: a seed's vertex colour is one
// flat value chosen by whoever places it, not a soil/moss map, so there is
// no second hue swing for this one to multiply with.
// ---------------------------------------------------------------------

function generateSeed() {
  const W = 64, H = 64;
  const broad = tileableNoise(3, 3, 61);
  const testa = warpedCells(cellular(5, 5, 62), 5, 5, 0.20, 63);
  const fine = tileableNoise(26, 26, 64);
  const speck = fleckMask(8, 65, 0.14, 0.34);

  writeTexture('seed', 'albedo', W, H, (u, v) => {
    // Hard coat: a wide, slow value drift, biased pale. A seed reads
    // against dark soil, and it is the value contrast that lets the player
    // find one at ant height in grass.
    let col = tri(SEED_DK, SEED_MD, SEED_LT,
      0.30 + 0.66 * smoothstep(clamp01(broad(u, v) * 0.78 + fine(u, v) * 0.22)));

    // Testa cells: shallow domes, lit lip one side, contact line the other
    // — same two strokes as every other shape in this set. The lit lip is
    // deliberately strong: it is what makes the coat read as *hard*, which
    // is the whole difference between a seed and a crumb of soil.
    const c = testa(u, v);
    if (c.d < 0.50) {
      const k = smoothstep(clamp01(1 - c.d / 0.50));
      const lit = facetLight(c.dx, c.dy);
      col = mixRGB(col, SEED_LT, k * clamp01(lit - 0.05) * 0.62);
      col = mixRGB(col, darken(SEED_DK, 0.20), k * clamp01(-lit - 0.05) * 0.50);
    }
    // and the fissure network between them: a seed coat is cracked, not
    // tiled. Wide and soft rather than a one-pixel line — at 64 square a
    // hard edge reads as an ink scratch.
    if (c.edge < 0.16) col = mixRGB(col, darken(SEED_DK, 0.34), smoothstep(1 - c.edge / 0.16) * 0.42);

    const sp = speck(u, v);
    if (sp > 0) col = mixRGB(col, darken(SEED_DK, 0.46), sp * 0.62);

    const n = (fine(u, v) - 0.5) * 5;
    return [col[0] + n, col[1] + n, col[2] + n];
  });
}

console.log('Generating procedural textures ->', TEXTURES_DIR);
generateRamps();
generateSky();
generateLawnSoil();
generateTunnelDirt();
generateStone();
generateChitin();
generateMushroomCap();
generateBark();
generateSeed();
console.log('Done.');
