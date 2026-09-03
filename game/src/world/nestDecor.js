import * as THREE from 'three';
import { rng, vnoise, clamp, lerp } from '../core/noise.js';
import { makeBasis, segBasis } from '../core/vecmath.js';
import { MeshBuilder, unitSphere, unitCylinder } from '../core/meshBuilder.js';
import { addLocalLight } from './lighting.js';
import { texturedSurfaceMaterial, texturedEmissiveMaterial, stoneAlbedo, capAlbedo } from './texturing.js';
import {
  undergroundFloor, wallPoint, profileR,
  QUEEN, START, CH_Z, CH_R, TUNNEL_BACK, DAIS_R,
} from './underground.js';
import { groundY, waterDepthAt, distanceToWater } from './terrain.js';

/* ==========================================================================
   Everything that lives *inside* the nest: the queen's dais, roots arching
   through the ceiling, hanging rootlets, grains of earth in the walls,
   pebbles on the floor, fungus gardens, glow-beads, brood piles, and the
   granary/brood/midden props. Ported from the decor pass of buildWorld() in
   design/prototypes/sortie-fourmiliere.html (~lines 870-1160).

   Three buffers, three draw calls, no per-prop objects:
   - `M` collects everything matte and lit normally. It stays on vertex
     colour alone: eggs, roots, rootlets, silk and resin are small
     strong-silhouette props whose reading comes from shape and value, and
     the art direction keeps them untextured on purpose
     (design/charte-stylisation.md §4).
   - `S` collects the stony props — floor pebbles, midden refuse, lawn
     boulders — which do get the `stone` albedo. Split out of `M` for that
     reason alone: one extra draw call buys a material that covers a lot of
     screen outdoors.
   - `G` collects the things that are meant to *be* light (mushroom caps,
     glow-beads): normally lit, plus their own vertex colour added as
     emission, so they stay bright against a dark cavity without going flat.
     (Fully unlit was tried first and read as white paper cut-outs — a cap
     needs the shading its own cluster lamp gives it to have any form.) The
     light they cast on their surroundings still comes from the matching
     entries in the local-light pool (world/lighting.js), as before.

   The old file's per-vertex "daylight * k" darkening factors are folded into
   the vertex colours here, since daylight() itself is now evaluated per
   fragment (world/lighting.js) rather than baked per vertex.
   ========================================================================== */

const col = (hex) => new THREE.Color(hex).toArray();
const scl = (c, s) => [c[0] * s, c[1] * s, c[2] * s];
const mul = (c, a, b, d) => [c[0] * a, c[1] * b, c[2] * d];
const mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

const C_SOIL_A = col('#6d5130');
const C_WALL_A = col('#5a4226'), C_WALL_B = col('#332412');
const C_MOSS_A = col('#4c5f2f');
const C_STONE = col('#6a6154');
const C_ROOTLET_HEX = '#5E4526';  // charte §1d: was #7a5f38, read as pink stems louder than the ant
const C_ROOT = col('#4a3418'), C_ROOTLET = col(C_ROOTLET_HEX);
const C_BROOD = col('#efdcb0'), C_GRAIN = col('#7a6040');
const C_GLOW = col('#ffc46a');
const C_SPORE = col('#c497d9');
const C_CHITIN = col('#e0a752');
const C_RESIN = mix(col('#e07356'), col('#e6b558'), 0.5);
const C_SILK = col('#9db0d8');
const C_MOLD = scl(mix(C_MOSS_A, C_WALL_B, 0.62), 0.58);
const C_CARCASS = scl(C_WALL_B, 0.7);

// charte §1d: blue-violet, not magenta — magenta x a warm-brown wall albedo
// reinforces the wall's own hue and the lamp stops reading as another light
const SPORE_LIGHT = [0.72, 0.48, 1.75];
// the queen's chamber is the site's "feerique et epoustouflant" anchor, so its
// one fantastical note reads brighter than every warm-but-mundane lamp elsewhere
const GLOW_LIGHT = [1.95, 1.20, 0.52];

/** Collision footprints, same shape (and same generous-radius policy) as the
    old prototype's MUSHROOMS/ROCKS. Filled by buildNestDecor(); exported for a
    later gameplay pass to consume - deliberately not wired to the player here. */
export const MUSHROOMS = [];
export const ROCKS = [];

/* A mushroom cap overhangs its stem; making the ant detour around the full cap
   silhouette is what turned the clustered gardens into a maze in the old file. */
export function mushroomCollideR(m) { return m.r * 0.65; }

export function buildNestDecor(rooms) {
  const M = new MeshBuilder();
  const G = new MeshBuilder();
  const S = new MeshBuilder();
  const R = rng(20260812);
  const sphere = unitSphere(10, 7);
  const grain = unitSphere(6, 4);
  const cyl = unitCylinder(8);

  /* An axis-aligned ellipsoid basis - the old prototype's m4Basis() with
     scale-only axes, which is all the props ever used it for. */
  const box = (sx, sy, sz, p) => makeBasis([sx, 0, 0], [0, sy, 0], [0, 0, sz], p);

  /* ---- the dais, tessellated finely from the same height function -------- */
  {
    const rings = 9, segs = 30, ids = [];
    for (let ri = 0; ri <= rings; ri++) {
      const row = [];
      for (let ai = 0; ai <= segs; ai++) {
        const th = 2 * Math.PI * ai / segs, rad = DAIS_R * 1.02 * ri / rings;
        const x = QUEEN[0] + Math.cos(th) * rad, zz = QUEEN[2] + Math.sin(th) * rad;
        const y = undergroundFloor(x, zz) + 0.08;
        const cc = mix(C_SOIL_A, C_WALL_A, clamp(0.3 + vnoise(x * 0.2, zz * 0.2) * 0.5, 0, 1));
        row.push(M.addVertex(x, y, zz, scl(cc, 0.65 + 0.35 * (1 - ri / rings))));
      }
      ids.push(row);
    }
    for (let r2 = 0; r2 < rings; r2++) {
      for (let a5 = 0; a5 < segs; a5++) {
        M.addQuad(ids[r2][a5], ids[r2][a5 + 1], ids[r2 + 1][a5 + 1], ids[r2 + 1][a5]);
      }
    }
  }

  /* ---- roots arching through the ceiling -------------------------------- */
  const rootCol = scl(C_ROOT, 0.8);
  function rootArc(z0, th0, th1, thick, sag, drift) {
    const segs = 8;
    let prev = null;
    for (let i = 0; i <= segs; i++) {
      const u = i / segs, bulge = Math.sin(u * Math.PI);
      const th = lerp(th0, th1, u);
      const p = wallPoint(th, z0 + drift * bulge, sag * bulge);
      if (prev) M.bake(cyl, segBasis(prev, p, thick * (0.65 + 0.5 * bulge)), () => rootCol);
      prev = p;
    }
  }
  for (let rt = 0; rt < 30; rt++) {
    const rz = TUNNEL_BACK + 8 + R() * (Math.abs(TUNNEL_BACK) - 16);
    const base = Math.PI * (0.15 + R() * 0.7);
    rootArc(rz, base, base + 0.5 + R() * 1.3, 0.5 + R() * 0.9, 0.06 + R() * 0.16, (R() - 0.5) * 9);
  }

  /* ---- rootlets hanging from the ceiling -------------------------------- */
  const rootletCol = scl(C_ROOTLET, 0.55);
  for (let hl = 0; hl < 150; hl++) {
    const hz = TUNNEL_BACK + 5 + R() * (Math.abs(TUNNEL_BACK) - 10);
    const hth = Math.PI * (0.18 + R() * 0.64);
    const hp = wallPoint(hth, hz, 0.02);
    const len = 1.2 + R() * (profileR(hz) > 16 ? 7 : 3);
    const tip = [hp[0] + (R() - 0.5) * 0.8, hp[1] - len, hp[2] + (R() - 0.5) * 0.8];
    M.bake(cyl, segBasis(hp, tip, 0.09 + R() * 0.1), () => rootletCol);
  }

  /* ---- grains of earth caught in the walls, so surfaces have a size ------ */
  for (let gn = 0; gn < 520; gn++) {
    const gz = TUNNEL_BACK + 3 + R() * (Math.abs(TUNNEL_BACK) - 5);
    const gth = R() * Math.PI * 2;
    const gp = wallPoint(gth, gz, 0.01);
    const gs = 0.22 + R() * 0.55;
    const gc = scl(C_GRAIN, (0.7 + R() * 0.7) * (0.5 + R() * 0.5));
    M.bake(grain, box(gs, gs * 0.8, gs, gp), () => gc);
  }

  /* ---- pebbles and husks on the floor ----------------------------------- */
  for (let fd = 0; fd < 120; fd++) {
    const fz = TUNNEL_BACK + 5 + R() * (Math.abs(TUNNEL_BACK) - 8);
    const lim = profileR(fz) * 0.7;
    const fx = (R() - 0.5) * 2 * lim;
    const fs = 0.3 + R() * 0.9;
    const fc = scl(C_STONE, (0.6 + R() * 0.8) * 0.8);
    S.bake(grain, box(fs * 1.3, fs * 0.7, fs * 1.1, [fx, undergroundFloor(fx, fz) + fs * 0.3, fz]), () => fc);
  }

  /* ---- fungus gardens: the gallery's only real light -------------------- */
  /* capTint overrides the default cap colour, which is the stem tint pushed
     toward magenta (more red and blue, less green). That shaping is what makes
     the spore caps glow violet — applied to the midden's mould green it cancels
     exactly the channel that carries the meaning, so the midden passes its own. */
  function fungusCluster(cx, cz, n, scale, tint, lightCol, capTint) {
    // nothing grows where the player stands up
    if (Math.hypot(cx - START[0], cz - START[1]) < 15) return;
    const stemCol = mul(tint, 0.3, 0.28, 0.4);
    const capCol = capTint || mul(tint, 0.95, 0.62, 1.15);
    for (let i = 0; i < n; i++) {
      const fx = cx + (R() - 0.5) * 7, fz = cz + (R() - 0.5) * 7;
      const sc = scale * (0.45 + R() * 0.9);
      const fy = undergroundFloor(fx, fz);
      const top = [fx, fy + 1.7 * sc, fz];
      M.bake(cyl, segBasis([fx, fy, fz], top, 0.22 * sc), () => stemCol);
      G.bake(sphere, box(1.15 * sc, 0.8 * sc, 1.15 * sc, top), () => capCol);
      MUSHROOMS.push({ x: fx, z: fz, r: 1.15 * sc + 0.5 });
    }
    addLocalLight([cx, undergroundFloor(cx, cz) + 2.4, cz], lightCol);
  }

  for (let fg = 0; fg < 9; fg++) {
    const fgz = -14 - fg * 10.5;
    fungusCluster((fg % 2 ? 1 : -1) * (3.5 + R() * 1.8), fgz, 4 + Math.floor(R() * 4),
      1.3, C_SPORE, SPORE_LIGHT);
  }

  /* ---- the chamber: gardens, glow-beads on the roots, brood at her flanks */
  for (let bg = 0; bg < 8; bg++) {
    const bth = R() * Math.PI * 2, brad = 17 + R() * 9;
    let bx2 = QUEEN[0] + Math.cos(bth) * brad;
    const bz2 = QUEEN[2] + Math.sin(bth) * brad;
    const roomHere = profileR(bz2) * 0.72;               // don't plant them in the wall
    if (Math.abs(bx2) > roomHere) bx2 = Math.sign(bx2) * roomHere;
    fungusCluster(bx2, bz2, 5 + Math.floor(R() * 5), 1.9, C_SPORE, SPORE_LIGHT);
  }

  const threadCol = scl(C_ROOTLET, 0.36);
  const beadCol = mul(C_GLOW, 1.25, 1.15, 1.4);
  for (let gb = 0; gb < 26; gb++) {
    const gth2 = Math.PI * (0.2 + R() * 0.6);
    const gz2 = CH_Z + (R() - 0.5) * CH_R * 1.5;
    const gp2 = wallPoint(gth2, gz2, 0.03);
    const bp = [gp2[0], gp2[1] - (3 + R() * 11), gp2[2]];
    M.bake(cyl, segBasis(gp2, bp, 0.07), () => threadCol);
    const br = 0.55 + R() * 0.75;
    G.bake(sphere, box(br, br * 1.25, br, bp), () => beadCol);
    if (gb % 3 === 0) addLocalLight(bp, GLOW_LIGHT);
  }

  const broodCol = mul(C_BROOD, 0.76, 0.70, 0.58);
  for (let bp2 = 0; bp2 < 5; bp2++) {
    const pth = Math.PI * (0.15 + bp2 * 0.42), prad = 8 + R() * 5;
    const px2 = QUEEN[0] + Math.cos(pth) * prad, pz2 = QUEEN[2] + Math.sin(pth) * prad;
    for (let eg = 0; eg < 22; eg++) {
      const ex = px2 + (R() - 0.5) * 5.5, ez = pz2 + (R() - 0.5) * 5.5;
      const es = 0.5 + R() * 0.35;
      M.bake(sphere, box(es * 0.72, es * 0.72, es * 1.5,
        [ex, undergroundFloor(ex, ez) + es * 0.6, ez]), () => broodCol);
    }
    addLocalLight([px2, undergroundFloor(px2, pz2) + 1.5, pz2], [0.55, 0.42, 0.22]);
  }
  addLocalLight([QUEEN[0], undergroundFloor(QUEEN[0], QUEEN[2]) + 9, QUEEN[2]], [1.5, 1.05, 0.5]);

  /* ---- the granary: seed and resin mounds, lit only near its mouth ------- */
  if (rooms && rooms.granary) {
    const B = rooms.granary;
    for (let mnd = 0; mnd < 5; mnd++) {
      const mth = (R() - 0.5) * Math.PI * 1.6;
      const mu = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.5, B.uMax * 0.42, B.uMax * 0.96);
      const mp = B.pointAt(mth, mu, 0.12);
      for (let gi = 0; gi < 26; gi++) {
        const gx = mp[0] + (R() - 0.5) * 4.5, gz = mp[2] + (R() - 0.5) * 4.5;
        const gs = 0.5 + R() * 1.3;
        const depth = clamp(1 - Math.hypot(gx - mp[0], gz - mp[2]) / 4.5, 0, 1);
        const seedCol = scl(mix(mix(C_CHITIN, C_RESIN, R() * 0.4), C_WALL_B, depth * 0.5),
          0.55 + 0.35 * (1 - depth));
        M.bake(grain, box(gs, gs * 0.85, gs, [gx, undergroundFloor(gx, gz) + gs * 0.4, gz]), () => seedCol);
      }
    }
    // resin drops: the only glossy surface in the room, so it reads at a glance
    const resinCol = mul(C_RESIN, 0.94, 0.81, 0.51);
    for (let rd = 0; rd < 10; rd++) {
      const rth = (R() - 0.5) * Math.PI * 1.5;
      const ru = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.55, 4, B.uMax - 2);
      const hang = R() < 0.5;
      const rp = B.pointAt(rth, ru, hang ? 0.85 : 0.06);
      const rs = 0.5 + R() * 0.7;
      const by = hang ? rp[1] - rs * (0.6 + R() * 1.6) : undergroundFloor(rp[0], rp[2]) + rs * 0.55;
      M.bake(sphere, box(rs * 0.8, rs * 1.3, rs * 0.8, [rp[0], by, rp[2]]), () => resinCol);
    }
    for (let lp = 0; lp < 2; lp++) {
      const lpt = B.pointAt(0, 2 + R() * 4, 0.3);
      addLocalLight([lpt[0], undergroundFloor(lpt[0], lpt[2]) + 2.2, lpt[2]], [0.42, 0.30, 0.14]);
    }
  }

  /* ---- the brood chambers: dense egg/larva/nymph piles, each its own lamp - */
  if (rooms && rooms.brood) {
    const B = rooms.brood;
    const stageR = [0.34, 0.5, 0.68], stageStretch = [1.0, 1.55, 1.15];
    const silkCol = mul(C_SILK, 0.42, 0.40, 0.46);
    for (let pile = 0; pile < 7; pile++) {
      const pth = (R() - 0.5) * Math.PI * 1.7;
      const pu = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.6, B.uMax * 0.32, B.uMax * 0.97);
      const pp = B.pointAt(pth, pu, 0.1);
      const pfl = undergroundFloor(pp[0], pp[2]);
      const n = 14 + Math.floor(R() * 14);
      for (let eg = 0; eg < n; eg++) {
        const stage = Math.floor(R() * 3);
        const es = stageR[stage] + R() * 0.22;
        const ex = pp[0] + (R() - 0.5) * 4.6, ez = pp[2] + (R() - 0.5) * 4.6;
        const sh = (0.85 + R() * 0.25) * 0.85;
        const ec = mul(C_BROOD, sh, sh * 0.94, sh * 0.8);
        M.bake(sphere, box(es * 0.75, es * 0.75, es * 1.5 * stageStretch[stage],
          [ex, undergroundFloor(ex, ez) + es * 0.6, ez]), () => ec);
      }
      // silk cocoon threads binding some piles: the room's one cold accent
      if (pile % 2 === 0) {
        // kept low and thin on purpose: at the old prototype's height/radius
        // these read as scaffolding poles crossing the room once they were
        // lit by the pile's own lamp instead of being baked nearly black
        const wraps = 4 + Math.floor(R() * 3);
        for (let w = 0; w < wraps; w++) {
          const a0 = R() * Math.PI * 2, a1 = a0 + 1.4 + R() * 1.2, r0 = 2.2 + R() * 1.2;
          const p0 = [pp[0] + Math.cos(a0) * r0, pfl + 0.5 + R() * 1.0, pp[2] + Math.sin(a0) * r0];
          const p1 = [pp[0] + Math.cos(a1) * r0, pfl + 0.5 + R() * 1.0, pp[2] + Math.sin(a1) * r0];
          M.bake(cyl, segBasis(p0, p1, 0.03), () => silkCol);
        }
      }
      addLocalLight([pp[0], pfl + 1.6, pp[2]], [0.62, 0.46, 0.24]);
    }
    // a sparing feeder-mushroom cluster or two, not a garden
    for (let fc = 0; fc < 2; fc++) {
      const fth = (R() - 0.5) * Math.PI * 1.4;
      const fu = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.4, 4, B.uMax - 2);
      const fp = B.pointAt(fth, fu, 0.1);
      fungusCluster(fp[0], fp[2], 2 + Math.floor(R() * 2), 1.1, C_SPORE, SPORE_LIGHT);
    }
  }

  /* ---- the midden: decomposer fungus, refuse heaps, husks, puddles ------- */
  if (rooms && rooms.midden) {
    const B = rooms.midden;
    // The tint the DA spec asks for (mould = the game's one green, mixed down
    // toward the wall colour) goes nearly black once it is only lit by its own
    // guttering lamp, and "green = decay" has to be legible at a glance — so
    // the cap is lifted back up while the *light* stays sickly and weak.
    const MOLD_STEM_TINT = mix(C_MOSS_A, C_WALL_B, 0.5);
    const MOLD_CAP_TINT = scl(mix(C_MOSS_A, C_WALL_B, 0.3), 3.5);
    const MOLD_LIGHT = [0.30, 0.46, 0.30];
    for (let fc2 = 0; fc2 < 3; fc2++) {
      const fth2 = (R() - 0.5) * Math.PI * 1.6;
      const fu2 = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.5, 4, B.uMax - 2);
      const fp2 = B.pointAt(fth2, fu2, 0.08);
      fungusCluster(fp2[0], fp2[2], 3 + Math.floor(R() * 3), 1.0, MOLD_STEM_TINT, MOLD_LIGHT, MOLD_CAP_TINT);
    }
    for (let hp = 0; hp < 4; hp++) {
      const hth = (R() - 0.5) * Math.PI * 1.7;
      const hu = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.55, 3, B.uMax - 1.5);
      const hpt = B.pointAt(hth, hu, 0.1);
      for (let dc = 0; dc < 20; dc++) {
        const dx3 = hpt[0] + (R() - 0.5) * 5, dz3 = hpt[2] + (R() - 0.5) * 5;
        const ds = 0.4 + R() * 1.1;
        const dcol = scl(R() < 0.5 ? C_STONE : C_GRAIN, (0.3 + R() * 0.35) * 0.55);
        S.bake(grain, box(ds * 1.2, ds * 0.7, ds,
          [dx3, undergroundFloor(dx3, dz3) + ds * 0.3, dz3]), () => dcol);
      }
    }
    const carcassCol = scl(C_CARCASS, 0.5);
    for (let cs = 0; cs < 5; cs++) {
      const cth = (R() - 0.5) * Math.PI * 1.6;
      const cu = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.5, 3, B.uMax - 1.5);
      const cp = B.pointAt(cth, cu, 0.12);
      const cfl = undergroundFloor(cp[0], cp[2]);
      const clen = 2.2 + R() * 2.2, cang = R() * Math.PI * 2;
      M.bake(cyl, segBasis([cp[0], cfl + 0.35, cp[2]],
        [cp[0] + Math.cos(cang) * clen, cfl + 0.3, cp[2] + Math.sin(cang) * clen],
        0.55 + R() * 0.35), () => carcassCol);
    }
    const puddleCol = mul(C_MOLD, 0.3, 0.36, 0.3);
    for (let pd = 0; pd < 6; pd++) {
      const pth2 = (R() - 0.5) * Math.PI * 1.6;
      const pu2 = clamp(B.uEnd + (R() - 0.5) * B.uMax * 0.55, 3, B.uMax - 1.5);
      const ppt = B.pointAt(pth2, pu2, 0.05);
      const prad = 1.0 + R() * 1.6;
      M.bake(sphere, box(prad, 0.12, prad,
        [ppt[0], undergroundFloor(ppt[0], ppt[2]) + 0.03, ppt[2]]), () => puddleCol);
    }
  }

  /* ---- lawn pebbles: the outdoor half of the decor collision set --------- */
  for (let pb = 0; pb < 42; pb++) {
    const px2 = -200 + R() * 380, pz2 = 8 + R() * 250;
    if (waterDepthAt(px2, pz2) > 0 || distanceToWater(px2, pz2) < 4) continue;
    const sxx = 2 + R() * 6, syy = 1.5 + R() * 4, szz = 2 + R() * 6;
    const yy = groundY(px2, pz2) + syy * 0.35;
    const shade = 0.75 + R() * 0.5;
    const mossSeed = R() * 40, mossCap = R() < 0.6 ? 0.5 + R() * 0.5 : 0;
    S.bake(sphere, box(sxx, syy, szz, [px2, yy, pz2]), (x, y, z) => {
      const stone = scl(C_STONE, shade);
      if (mossCap <= 0) return stone;
      const up = clamp((y - yy) / syy + 0.15 * vnoise(x * 0.3 + mossSeed, z * 0.3 + mossSeed), 0, 1);
      return mix(stone, C_MOSS_A, up * up * mossCap);
    });
    ROCKS.push({ x: px2, z: pz2, r: (sxx + szz) * 0.5 + 1.0 });
  }

  const group = new THREE.Group();
  group.name = 'nest-decor';

  const matte = new THREE.Mesh(M.toBufferGeometry(), new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.92, metalness: 0, side: THREE.DoubleSide,
  }));
  matte.name = 'nest-decor-matte';
  group.add(matte);

  const stone = new THREE.Mesh(S.toBufferGeometry(), texturedSurfaceMaterial({
    map: stoneAlbedo(), strength: 1.0, roughness: 0.92, side: THREE.DoubleSide,
  }));
  stone.name = 'nest-decor-stone';
  stone.castShadow = true;
  stone.receiveShadow = true;
  group.add(stone);

  // emission = the vertex colour, modulated by the cap albedo so the pale
  // warts glow brighter than the cap around them (charte §7.8). Added after
  // lighting (see opaque_fragment), so world/lighting.js's daylight
  // attenuation leaves it alone — a glow-bead is not dimmer for being deep
  // underground. Diffuse is damped to half (color 0x777777): a cap sits about
  // two units from its own cluster lamp, so at full albedo the nearest ones
  // blew out to white while the ones a few metres down the gallery still read
  // correctly. Damping what they *receive* and leaning on what they *emit*
  // keeps the whole garden on the same curve.
  const glowMat = texturedEmissiveMaterial({
    map: capAlbedo(), strength: 0.7, emissive: 0.95,
    color: 0x777777, side: THREE.DoubleSide,
  });
  const glow = new THREE.Mesh(G.toBufferGeometry(), glowMat);
  glow.name = 'nest-decor-glow';
  group.add(glow);

  return { group, mushrooms: MUSHROOMS, rocks: ROCKS };
}
