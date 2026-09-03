import { clamp } from '../core/noise.js';
import { groundY, groundNormal, TUNNEL_MOUTH } from './terrain.js';
import { sunDir } from './sun.js';
import { TREE, TREE_TRUNK_T, treeCenterAt } from './tree.js';
import { ROCKS } from './nestDecor.js';

/* ==========================================================================
   shadeAt(x, z) — "how sheltered from the sun is this spot", 0..1, closing
   the `shade` factor of player/siteQuality.js (design/api-monde-gameplay.md
   §2).

   ANALYTIC, NOT A SCENE RAYCAST, as the contract requires: nothing here
   touches THREE, the scene graph, or a BVH. Two ingredients, both closed
   form apart from a fourteen-step march over a height *function*:

   1. INCIDENCE, relative to flat ground. dot(N, sun) alone is useless as a
      gameplay signal under the prologue's 18.5-degree sun: it reads 0.32 on
      every flat metre of the map, so every site would come back "in shade".
      Dividing by the flat-ground reference (sun.y) makes level ground 1 and
      a face turned away from the light 0. This is the term that actually
      varies over the map, and it is the reason the low sun matters: at 18.5
      degrees a ten-unit rise has a strongly lit side and a dark one, at 51
      degrees the same rise is nearly uniform.

   2. CAST SHADOW, from three occluders that exist in the world and can be
      described in closed form: the terrain itself (marched against
      groundY(), geometric step so the far half of a long shadow costs four
      samples rather than forty), the tree's trunk (a vertical cylinder) and
      canopy, and the lawn boulders (spheres). Grass is deliberately not an
      occluder: 620 blades would cost more than everything else here put
      together and would only dapple.

   Cost per call: ~14 groundY() + ~42 sphere tests. groundY() is itself a
   16-feature sum, so a call is on the order of a few microseconds — fine at
   the contract's 4 Hz, and fine for scoring a hundred candidate sites in a
   frame if that is ever wanted.

   The sun this reads is world/sun.js's *current* one, so the answer follows
   the founding transition instead of describing a sky the player cannot see.
   ========================================================================== */

/* Height of the tree's canopy mass and its radius, as one sphere. With a low
   sun a canopy 250 units up throws its shadow several hundred units away —
   usually clean off the map — which is exactly why the old fallback proxy in
   siteQuality.js ("within 90 units of the trunk = shaded") was wrong. The
   term is kept anyway because it becomes real if the tree is ever shortened
   or the sun ever raised. */
const CANOPY_R = 56;

function sphereShade(px, py, pz, cx, cy, cz, R, S) {
  const vx = cx - px, vy = cy - py, vz = cz - pz;
  const along = vx * S[0] + vy * S[1] + vz * S[2];
  if (along <= 0) return 0;
  const perp2 = vx * vx + vy * vy + vz * vz - along * along;
  const perp = Math.sqrt(perp2 > 0 ? perp2 : 0);
  const soft = R * 0.35 + along * 0.06;      // penumbra grows with distance
  const t = clamp((R + soft - perp) / soft, 0, 1);
  return t * t * (3 - 2 * t);
}

/** Shadow of the trunk, treated as a vertical cylinder of radius TREE.w. */
function trunkShade(px, py, pz, S) {
  const hl = Math.hypot(S[0], S[2]);
  if (hl < 1e-4) return 0;
  const hx = S[0] / hl, hz = S[2] / hl;
  const vx = TREE.x - px, vz = TREE.z - pz;
  const along = vx * hx + vz * hz;
  if (along <= 0) return 0;
  const perp = Math.abs(vx * hz - vz * hx);
  const rayY = py + (S[1] / hl) * along;
  if (rayY > TREE.baseY + TREE.h * TREE_TRUNK_T) return 0;   // over the trunk
  const soft = TREE.w * 0.4 + along * 0.05;
  const t = clamp((TREE.w + soft - perp) / soft, 0, 1);
  return t * t * (3 - 2 * t);
}

function terrainShade(x, y, z, S) {
  const hl = Math.hypot(S[0], S[2]);
  if (hl < 1e-4) return 0;                    // sun overhead: nothing can occlude
  const hx = S[0] / hl, hz = S[2] / hl, rise = S[1] / hl;
  /* Far enough to catch the tallest authored rise (the map rim, 34 units)
     at this sun angle, and no further. At 51 degrees that is ~40 units; at
     18.5 it is ~115, which is where the low sun's long ridges come from. */
  const maxD = Math.min(170, 34 / rise + 14);
  let occ = 0;
  for (let d = 2.5; d < maxD; d *= 1.38) {
    const h = groundY(x + hx * d, z + hz * d);
    /* +0.5 bias: without it the two octaves of surface texture under the
       sampler's own feet report the ground shadowing itself. */
    const excess = h - (y + rise * d + 0.5);
    if (excess <= 0) continue;
    const soft = 1.2 + d * 0.05;
    const t = clamp(excess / soft, 0, 1);
    if (t > occ) occ = t;
    if (occ >= 1) break;
  }
  return occ;
}

/**
 * 0..1, 1 = fully in shade. Underground is 1 by definition.
 * See the header for what is and is not taken into account.
 */
export function shadeAt(x, z) {
  if (z < TUNNEL_MOUTH) return 1;
  const S = sunDir();
  const y = groundY(x, z);
  const N = groundNormal(x, z);

  // incidence relative to flat ground: 1 level, 0 turned away from the light
  const inc = clamp((N[0] * S[0] + N[1] * S[1] + N[2] * S[2]) / Math.max(S[1], 1e-3), 0, 1);

  let occ = terrainShade(x, y, z, S);
  if (occ < 1) {
    const eye = y + 1.2;                      // an ant's back, not the soil
    occ = Math.max(occ, trunkShade(x, eye, z, S));
    const c = treeCenterAt(TREE_TRUNK_T);
    occ = Math.max(occ, sphereShade(x, eye, z, c[0], c[1] + 14, c[2], CANOPY_R, S));
    for (let i = 0; i < ROCKS.length && occ < 1; i++) {
      const r = ROCKS[i];
      // ROCKS carries no height; its radius is the (x,z) footprint, and the
      // boulders it comes from are flattened spheres sitting a third proud.
      const rr = r.r * 0.8;
      occ = Math.max(occ, sphereShade(x, eye, z, r.x, groundY(r.x, r.z) + rr * 0.45, r.z, rr, S));
    }
  }

  return clamp(1 - inc * (1 - occ), 0, 1);
}
