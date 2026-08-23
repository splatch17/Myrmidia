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
// bark_albedo — tree trunk. Vertical striations (anisotropic noise,
// stretched along Y) for the ridged-bark silhouette, a coarse blotch
// pass for warm/dark patches, fine grain for close-up read, and sparse
// moss flecks settling into the darker grooves — same "moss climbs the
// cavities" idiom already used on the underground rocks/midden debris
// in the WebGL1 prototype.
// ---------------------------------------------------------------------

function generateBark() {
  const W = 128, H = 128;
  const ridges = tileableNoise(14, 3, 1); // stretched vertically -> bark ridges run along the trunk
  const blotch = tileableNoise(4, 3, 2); // coarse warm/dark patches
  const grain = tileableNoise(48, 48, 3); // fine surface grit
  const moss = fleckMask(16, 4, 0.16, 0.34);

  // Groove tone leans rouille-dark (shadowed bark), ridge tone leans
  // chitine/miel (lit bark) — same warm terreux family as the wall/rock
  // language, never a neutral desaturated brown.
  const dark = mixRGB(PAL.rouille, [0, 0, 0], 0.62);
  const mid = mixRGB(PAL.chitine, PAL.rouille, 0.45);
  const light = mixRGB(PAL.miel, PAL.chitine, 0.3);

  writeTexture('bark', 'albedo', W, H, (u, v) => {
    let h = ridges(u, v) * 0.55 + blotch(u, v) * 0.30 + grain(u, v) * 0.15;
    h = smoothstep(h);
    let col = h < 0.5 ? mixRGB(dark, mid, h / 0.5) : mixRGB(mid, light, (h - 0.5) / 0.5);

    // Fine grit darkens/lightens the surface slightly without touching hue balance.
    const g = (grain(u * 3.1, v * 3.1) - 0.5) * 18;
    col = [col[0] + g, col[1] + g, col[2] + g];

    // Moss only takes root in shadowed grooves (h low) — keeps it a
    // detail, not a green wash over the whole trunk.
    const mossAmt = moss(u, v) * smoothstep(1 - h * 1.6);
    if (mossAmt > 0) col = mixRGB(col, PAL.mousse, mossAmt * 0.55);

    return col;
  });
}

// ---------------------------------------------------------------------
// tunnel-dirt_albedo — underground gallery wall/floor. Same procedural
// detail language as the WebGL1 prototype's galleries: cavity noise
// (large blobs standing in for baked per-vertex AO), fine grain for
// "this is soil, not a smooth wall", plus sparse pebble and moss
// flecks so the surface reads as having a scale, not a repeating
// pattern. Deliberately dark and low-saturation — this is the cold/
// utilitarian pole of the palette, not the queen's-chamber warmth.
// ---------------------------------------------------------------------

function generateTunnelDirt() {
  const W = 128, H = 128;
  const cavities = tileableNoise(5, 5, 11); // broad dark/lit pools, echoes the per-vertex cavity shading
  const grain = tileableNoise(40, 40, 12); // soil grain
  const fineGrain = tileableNoise(90, 90, 13); // closest-up grit
  const pebble = fleckMask(16, 14, 0.10, 0.26); // small lighter stones
  const moss = fleckMask(24, 15, 0.05, 0.22); // rare crevice moss

  const shadow = mixRGB(PAL.rouille, [10, 8, 6], 0.78); // near-black earth, warm not neutral
  const base = mixRGB(PAL.rouille, [40, 30, 20], 0.55);
  const lit = mixRGB(PAL.chitine, PAL.rouille, 0.5);

  writeTexture('tunnel-dirt', 'albedo', W, H, (u, v) => {
    let h = cavities(u, v) * 0.5 + grain(u, v) * 0.35 + fineGrain(u, v) * 0.15;
    h = smoothstep(h);
    let col = h < 0.5 ? mixRGB(shadow, base, h / 0.5) : mixRGB(base, lit, (h - 0.5) / 0.5);

    const g = (fineGrain(u * 2.3 + 0.5, v * 2.3 + 0.5) - 0.5) * 14;
    col = [col[0] + g, col[1] + g, col[2] + g];

    const pebbleAmt = pebble(u, v);
    if (pebbleAmt > 0) col = mixRGB(col, mixRGB(PAL.chitine, [255, 255, 255], 0.15), pebbleAmt * 0.6);

    // Moss only in the lit pools (h high), mirroring the queen's-chamber
    // contrast doctrine: growth needs light even underground.
    const mossAmt = moss(u, v) * smoothstep(h * 1.5 - 0.4);
    if (mossAmt > 0) col = mixRGB(col, PAL.mousse, mossAmt * 0.5);

    return col;
  });
}

console.log('Generating procedural textures ->', TEXTURES_DIR);
generateBark();
generateTunnelDirt();
console.log('Done.');
