import * as world from '../world/index.js';
import { clamp } from '../core/noise.js';
import { GRASS, CLIMB_MIN_H } from './climb.js';

/* ==========================================================================
   "What is this ground worth?" — the reading the founding queen gets under
   her feet while she looks for somewhere to dig (design/boucle-de-jeu.md §0
   and §1, #32).

   The design decision this implements, and does not reopen: the site is the
   player's to choose, but the terrain has an opinion. So this returns two
   different things and never conflates them:
     - diggable / not diggable, with a *reason* (bare rock, the river's edge,
       a slope that would collapse). A hard no, not a penalty.
     - a 0-100 score with the factors that produced it, so the player can
       tell a merely acceptable site from a good one instead of guessing.

   ---- the interface this expects from world/index.js -----------------------
   Atta is rebuilding the surface in parallel (#31: relief, river, distant
   mountains), so most of the data below does not exist yet. Each probe is
   optional and falls back to something honest rather than to a made-up
   number, and every fallback marks its factor `assumed: true` so the HUD can
   say "unknown" instead of quietly inventing a verdict. Names asked for, in
   the order they matter:

     soilAt(x, z)       -> 'terre' | 'argile' | 'sable' | 'roche' | 'boue' |
                           'litiere', or { kind, firmness? }.  No fallback
                           worth the name: everything currently reads as
                           plain earth, which makes the whole map equally
                           diggable — exactly the "tous les sites se valent"
                           the design rejects.
     waterDistance(x, z)-> distance in world units to the nearest water edge,
                           <= 0 inside the water itself. Drives both the
                           "flooded, cannot dig" refusal and the "close to
                           drink, far enough not to drown" sweet spot.
     shadeAt(x, z)      -> 0..1, 1 = fully shaded. The fallback below reads
                           the tree and the tall grass, which is a poor proxy
                           once there is real relief casting shadow.
     slopeAt(x, z)      -> degrees. The fallback derives it from
                           groundNormal(), which is exact — this one only
                           exists in case the terrain wants to publish a
                           cheaper or authored value.
     RESOURCE_NODES     -> [{x, z, kind}] harvestables on the map. The
                           fallback counts tall grass, i.e. "there is
                           vegetation here", which is not the same thing as
                           food.
   ========================================================================== */

/* Read through a copy of the namespace, not through `world.x` directly: the
   probes below are *optional* world exports (see the interface note above),
   and a direct namespace member access lets the bundler resolve — and warn
   about, or in a stricter config fail on — a name the world does not export
   yet. Through a plain object, "not there yet" is simply `undefined`, which
   is exactly the case each probe already handles. */
const W = { ...world };

const SOILS = {
  terre:   { label: 'terre meuble',        diggable: true,  quality: 0.90 },
  argile:  { label: 'argile',              diggable: true,  quality: 0.72 },
  litiere: { label: 'litière de feuilles', diggable: true,  quality: 0.66 },
  sable:   { label: 'sable',               diggable: true,  quality: 0.38 },
  roche:   { label: 'roche',               diggable: false, quality: 0 },
  boue:    { label: 'boue détrempée',      diggable: false, quality: 0 },
};

// A gallery collapses in anything steeper; below that, a little slope is
// better than none (water runs off instead of standing in the entrance).
const MAX_SLOPE_DEG = 32;
const IDEAL_SLOPE_DEG = 9;

// Closer than MIN_WATER and the first rain floods the nest — the design's
// "bord de riviere" exclusion. Past FAR_WATER the trip to drink stops being
// worth making.
const MIN_WATER = 18, IDEAL_WATER = 55, FAR_WATER = 190;

const RESOURCE_RADIUS = 55;   // "within one forage trip"
const GOOD_RESOURCES = 14;    // count at which the factor saturates

const WEIGHTS = { soil: 0.28, slope: 0.16, water: 0.20, shade: 0.18, food: 0.18 };

/* ---- probes: world data if it exists, honest fallback if it does not ---- */

/* world/terrain.js names its ground types in English and against a shorter
   list than the one above (it has no clay and no leaf litter yet). The
   translation lives here, on the consumer side, rather than being pushed into
   the terrain: the terrain answers "what is this made of", this file decides
   what that is worth to dig in, and only one of those two is a design call.
   Anything not in the table falls through to the honest `assumed` path. */
const KIND_ALIAS = {
  soil: 'terre', moss: 'litiere', sand: 'sable', rock: 'roche', water: 'boue',
  terre: 'terre', argile: 'argile', litiere: 'litiere', sable: 'sable',
  roche: 'roche', boue: 'boue',
};

function probeSoil(x, z) {
  if (typeof W.soilAt === 'function') {
    const raw = W.soilAt(x, z);
    const kind = KIND_ALIAS[typeof raw === 'string' ? raw : (raw && raw.kind)];
    const soil = SOILS[kind];
    if (soil) return { ...soil, kind, assumed: false };
  }
  return { ...SOILS.terre, kind: 'terre', assumed: true };
}

function probeSlope(x, z) {
  if (typeof W.slopeAt === 'function') return { deg: W.slopeAt(x, z), assumed: false };
  const n = W.groundNormal(x, z);
  return { deg: Math.acos(clamp(n[1], -1, 1)) * 180 / Math.PI, assumed: false };
}

function probeWater(x, z) {
  if (typeof W.waterDistance === 'function') return { d: W.waterDistance(x, z), assumed: false };
  // world/terrain.js's own name for the same quantity: signed distance to the
  // near waterline, positive on dry land. Negative inside the river, which
  // waterScore()/the blocker below already read as "flooded".
  if (typeof W.distanceToWater === 'function') return { d: W.distanceToWater(x, z), assumed: false };
  return { d: null, assumed: true };
}

/* Fallback shade: the canopy, plus whatever tall grass stands around. Crude
   on purpose — it exists so the factor is not a constant while #31 lands,
   and it is the first thing to delete once shadeAt() is real. */
function probeShade(x, z) {
  if (typeof W.shadeAt === 'function') return { v: clamp(W.shadeAt(x, z), 0, 1), assumed: false };
  const tree = W.TREE;
  const canopy = tree ? clamp(1 - Math.hypot(x - tree.x, z - tree.z) / 90, 0, 1) : 0;
  let tall = 0;
  for (let i = 0; i < GRASS.length; i++) {
    const g = GRASS[i];
    if (g.h < CLIMB_MIN_H) continue;
    if (Math.abs(g.x - x) > 26 || Math.abs(g.z - z) > 26) continue;
    if (Math.hypot(g.x - x, g.z - z) < 26) tall++;
  }
  return { v: clamp(canopy * 0.8 + Math.min(tall, 8) / 8 * 0.5, 0, 1), assumed: true };
}

function probeFood(x, z) {
  const nodes = W.RESOURCE_NODES;
  if (Array.isArray(nodes)) {
    let n = 0;
    for (const r of nodes) if (Math.hypot(r.x - x, r.z - z) < RESOURCE_RADIUS) n++;
    return { n, assumed: false };
  }
  let n = 0;
  for (let i = 0; i < GRASS.length; i++) {
    const g = GRASS[i];
    if (g.h < CLIMB_MIN_H) continue;
    if (Math.abs(g.x - x) > RESOURCE_RADIUS || Math.abs(g.z - z) > RESOURCE_RADIUS) continue;
    if (Math.hypot(g.x - x, g.z - z) < RESOURCE_RADIUS) n++;
  }
  return { n, assumed: true };
}

/* ---- scoring ------------------------------------------------------------ */

function slopeScore(deg) {
  if (deg >= MAX_SLOPE_DEG) return 0;
  // peaks at IDEAL_SLOPE_DEG: a gentle penalty for a dead-flat pan, a steep
  // one as the ground approaches the collapse angle
  const t = deg <= IDEAL_SLOPE_DEG
    ? 0.78 + 0.22 * (deg / IDEAL_SLOPE_DEG)
    : 1 - Math.pow((deg - IDEAL_SLOPE_DEG) / (MAX_SLOPE_DEG - IDEAL_SLOPE_DEG), 1.4);
  return clamp(t, 0, 1);
}

function waterScore(d) {
  if (d === null) return 0.5; // unknown: neither rewarded nor punished
  if (d <= MIN_WATER) return 0;
  if (d <= IDEAL_WATER) return clamp((d - MIN_WATER) / (IDEAL_WATER - MIN_WATER), 0, 1);
  return clamp(1 - (d - IDEAL_WATER) / (FAR_WATER - IDEAL_WATER), 0.15, 1);
}

const GRADES = [
  { min: 78, key: 'excellent', label: 'excellent' },
  { min: 60, key: 'bon', label: 'bon' },
  { min: 42, key: 'moyen', label: 'moyen' },
  { min: 0, key: 'ingrat', label: 'ingrat' },
];

function gradeOf(score) { return GRADES.find((g) => score >= g.min); }

function shadeLabel(v) {
  if (v > 0.66) return "à l'ombre";
  if (v > 0.3) return 'mi-ombre';
  return 'plein soleil';
}
function foodLabel(n) {
  if (n >= GOOD_RESOURCES) return 'ressources abondantes';
  if (n >= GOOD_RESOURCES * 0.4) return 'quelques ressources';
  return 'peu de ressources';
}

/**
 * Full reading for one spot. Pure — no world mutation, safe to call for a
 * hypothetical position (a cursor, a quest marker) as well as for the ant's
 * own feet.
 */
export function evaluateSite(x, z) {
  const soil = probeSoil(x, z);
  const slope = probeSlope(x, z);
  const water = probeWater(x, z);
  const shade = probeShade(x, z);
  const food = probeFood(x, z);

  const factors = [
    { key: 'soil', label: soil.label, value: soil.quality, assumed: soil.assumed },
    { key: 'slope', label: `pente ${slope.deg.toFixed(0)}°`, value: slopeScore(slope.deg), assumed: slope.assumed },
    { key: 'water', label: water.d === null ? 'eau inconnue' : `eau à ${water.d.toFixed(0)}`, value: waterScore(water.d), assumed: water.assumed },
    { key: 'shade', label: shadeLabel(shade.v), value: clamp(shade.v * 1.25, 0, 1), assumed: shade.assumed },
    { key: 'food', label: foodLabel(food.n), value: clamp(food.n / GOOD_RESOURCES, 0, 1), assumed: food.assumed },
  ];

  let blocker = null;
  if (z < W.TUNNEL_MOUTH) blocker = { key: 'underground', text: 'sous terre — rien à fonder ici' };
  else if (!soil.diggable) blocker = { key: 'soil', text: `${soil.label} — impossible de creuser` };
  else if (water.d !== null && water.d <= MIN_WATER) blocker = { key: 'water', text: "trop près de l'eau — la galerie serait inondée" };
  else if (slope.deg >= MAX_SLOPE_DEG) blocker = { key: 'slope', text: `pente ${slope.deg.toFixed(0)}° — le sol s'effondrerait` };

  let sum = 0;
  for (const f of factors) sum += f.value * WEIGHTS[f.key];
  const score = Math.round(clamp(sum, 0, 1) * 100);

  return {
    x, z,
    diggable: !blocker,
    blocker,
    score,
    grade: gradeOf(score),
    factors,
    // any factor still on a fallback means the verdict is provisional — the
    // HUD says so rather than pretending the map has been surveyed
    assumed: factors.some((f) => f.assumed),
  };
}

/** One line for the site readout, e.g. "Site : bon (64/100)". */
export function siteHeadline(site) {
  if (!site.diggable) return `Site : impossible — ${site.blocker.text}`;
  return `Site : ${site.grade.label} (${site.score}/100)`;
}

/** The factors behind the headline, worst first, so the reason a site is only
 *  "moyen" is the first thing read. A trailing "?" marks a factor still on a
 *  fallback probe (see the interface note at the top). */
export function siteDetail(site) {
  return site.factors
    .slice()
    .sort((a, b) => a.value - b.value)
    .map((f) => (f.assumed ? `${f.label} ?` : f.label))
    .join(' · ');
}
