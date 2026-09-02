import * as THREE from 'three';
import { vnoise, clamp, lerp } from '../core/noise.js';
import { nrm3 } from '../core/vecmath.js';
import { MeshBuilder } from '../core/meshBuilder.js';
import { undergroundFloor, TUNNEL_MOUTH } from './underground.js';
import { texturedSurfaceMaterial, lawnAlbedo } from './texturing.js';

/* ==========================================================================
   The surface world (#31). Since design/boucle-de-jeu.md §0 the outdoors is
   no longer the doormat in front of the nest — the game starts here, queen
   alone, and the player picks where to found. So this file owns three things
   it did not before: relief, a river edge, and a horizon.

   AUTHORED, NOT GENERATED. The ticket is explicit: a fixed hand-made map, so
   an intention can be placed to the metre. Noise is still used, but only as
   *material* — every decision (where the river runs, where the bowl is, where
   the ground is flat enough to be worth founding on) is a numbered entry in
   RELIEF/RIVER below, and the whole field is a pure function of (x, z) with
   no RNG at all. Move a number, move a place.

   SCALE. The ant is ~7 units long. 10 units of rise is a hill, 20 is a ridge
   you have to walk around. Everything below is sized against that, not
   against a human intuition of landscape — the features here would be
   pebble-sized to a person and read as terrain to an ant.

   groundY() IS THE SINGLE SOURCE OF TRUTH for ground height, outdoors and in
   (it defers to undergroundFloor() past the tunnel mouth). The controller,
   the IK legs and the camera all sample it; a second, disagreeing height
   function is how walking breaks.
   ========================================================================== */

export { TUNNEL_MOUTH };

/* Where the player may stand. movement.js clamps to x0+15 / x1-15 / z1-12,
   and those margins are what these numbers are chosen against: the west
   clamp is meant to land exactly on the waterline (see RIVER below), the
   east and north ones well inside ground that is still rising, so the
   invisible part of the boundary is always somewhere the terrain already
   told the player not to go. */
export const LAWN_BOUNDS = { x0: -208, x1: 190, z0: 0, z1: 250 };

/* What actually gets built as mesh: wider than the playable area on every
   side, so the map never ends in a visible cliff edge. West it runs across
   the river to the far shore; east and north it keeps climbing into the
   ridges that close the view. */
export const TERRAIN_BOUNDS = { x0: -300, x1: 252, z0: 0, z1: 322 };

export const WATER_Y = -4.5;         // the river's surface height

const smooth01 = (t) => { const c = clamp(t, 0, 1); return c * c * (3 - 2 * c); };

/* ---- the river ---------------------------------------------------------- */

/* One river, along the west edge, running roughly north-south. The near
   waterline is deliberately almost straight (+-3 units of meander, under half
   an ant length) while the channel widens and narrows on the far side: the
   player's edge of the map has to be a line the movement clamp can follow,
   and 3 units of slack is imperceptible where 30 would read as an invisible
   wall standing off from the water. */
export const RIVER = {
  edgeX: -196,          // mean x of the near waterline
  bankTop: 2.0,         // ground height at the top of the near bank
  bankRun: 15,          // how far inland the bank climbs out of the water
  depth: 5.0,           // riverbed below WATER_Y
  bedRun: 30,           // how far out the bed reaches full depth
  farBankAt: 68,        // where the far shore starts rising
  farBankRun: 46,
  farBankTop: 24,       // the far shore stands well above the water: it is the
                        // backdrop of every view west, and a flat one would
                        // read as the map running out
  blendRun: 36,         // inland distance over which general relief takes over
};

/** x of the near waterline at depth z (the shoreline itself). */
export function riverEdgeAt(z) {
  return RIVER.edgeX + 2.0 * Math.sin(z * 0.021) + 1.0 * Math.sin(z * 0.047 + 1.3);
}

/** Signed distance from the near waterline, positive on dry land. */
export function distanceToWater(x, z) {
  return x - riverEdgeAt(z);
}

/* Height of the ground as the river alone would shape it. s is measured from
   the waterline, positive into the water. s = 0 is exactly WATER_Y, which is
   what pins the shoreline to riverEdgeAt() no matter what the rest of the
   relief does. */
function riverBedY(s) {
  if (s <= 0) return WATER_Y + (RIVER.bankTop - WATER_Y) * smooth01(-s / RIVER.bankRun);
  let y = WATER_Y - RIVER.depth * smooth01(s / RIVER.bedRun);
  if (s > RIVER.farBankAt) y += RIVER.farBankTop * smooth01((s - RIVER.farBankAt) / RIVER.farBankRun);
  return y;
}

/* ---- authored relief ---------------------------------------------------- */

/* Hand-placed features. r is the radius at which the feature has died out;
   amp is its height at the centre (negative digs). Order is irrelevant, they
   sum. Anything you want to move, move here. */
const RELIEF = [
  // the ground immediately in front of the nest mouth stays low and open —
  // it is the first thing the player ever sees and the sightline out of the
  // gallery is built around it (grass.js clears the same corridor)
  { x: 0, z: 20, r: 64, amp: -3.5 },

  // the sunny knoll: the first landmark east of the mouth, close enough to
  // be climbed in the first minute, high enough to see the tree from
  { x: 62, z: 78, r: 62, amp: 16 },
  { x: 96, z: 44, r: 40, amp: 9 },

  // the bowl: a broad depression mid-map, deep enough that its far rim hides
  // what is inside it from the mouth. This is the "makes you want to go look"
  // feature the ticket asks for; it is also the best founding ground on the
  // map (flat floor, sheltered, 90 units from water).
  { x: 88, z: 168, r: 78, amp: -14 },
  { x: 88, z: 168, r: 30, amp: 4 },        // a rise back up in its middle, so
                                           // the bowl is a rim-and-island and
                                           // not a smooth funnel

  // the shelf the tree stands on (TREE is at -85, 95 and its root buttresses
  // reach ~35 units): flat, so the roots meet ground instead of floating.
  // Reads as a clearing, which is what a landmark wants around it.
  { x: -85, z: 95, r: 46, amp: 6 },
  { x: -85, z: 95, r: 26, amp: 1.5 },

  // low ridge between the tree and the river, so the water is discovered by
  // cresting something rather than by seeing it from the start
  { x: -150, z: 150, r: 66, amp: 13 },
  { x: -132, z: 44, r: 50, amp: 8 },

  // hollow behind the knoll, a shaded pocket
  { x: 24, z: 128, r: 44, amp: -8 },

  // the north rim: the map closes into rising ground rather than into a
  // clamp. Broad and far enough out that the playable area only feels it as
  // a gentle climb.
  { x: -40, z: 300, r: 150, amp: 34 },
  { x: 130, z: 296, r: 140, amp: 30 },

  // the east rim, same job
  { x: 250, z: 120, r: 130, amp: 30 },
  { x: 218, z: 232, r: 100, amp: 22 },
];

/* The unbroken part of the surface: authored features + two octaves of
   texture so no slope is dead flat. */
function generalRelief(x, z) {
  let h = (vnoise(x * 0.012, z * 0.012) - 0.5) * 4.2
        + (vnoise(x * 0.052, z * 0.052) - 0.5) * 1.3;
  for (let i = 0; i < RELIEF.length; i++) {
    const f = RELIEF[i];
    const d = Math.hypot(x - f.x, z - f.z);
    if (d >= f.r) continue;
    h += f.amp * smooth01(1 - d / f.r);
  }
  return h;
}

/**
 * Ground height. Outdoors: authored relief, overridden by the river's own
 * profile within RIVER.blendRun of the shoreline (so the waterline lands
 * exactly on WATER_Y whatever the relief nearby is doing). Past the tunnel
 * mouth it hands over to undergroundFloor(), and the two are cross-faded
 * around the mouth so the seam has no step in it.
 */
export function groundY(x, z) {
  if (z < TUNNEL_MOUTH) return undergroundFloor(x, z);

  const dw = x - riverEdgeAt(z);
  const rw = 1 - smooth01(dw / RIVER.blendRun);
  const h = rw > 0 ? lerp(generalRelief(x, z), riverBedY(-dw), rw) : generalRelief(x, z);

  /* The mouth seam. Weighted by distance in x as well as z: the old blend was
     z-only, which would now drag the whole width of the map — river included
     — up to the gallery floor height along the z = 0 edge. */
  const seam = (1 - smooth01(z / 26)) * clamp(1 - Math.abs(x) / 40, 0, 1);
  return seam > 0 ? lerp(h, undergroundFloor(x, 0), seam) : h;
}

export function groundNormal(x, z) {
  const e = 1.4;
  return nrm3([groundY(x - e, z) - groundY(x + e, z), 2 * e, groundY(x, z - e) - groundY(x, z + e)]);
}

/* ---- terrain queries, for gameplay (Cataglyphis) ------------------------- */

/**
 * Steepness at (x, z) as the tangent of the slope angle: 0 is flat, 1 is 45
 * degrees. Sampled over 3 units (about half an ant) rather than a fraction of
 * one, so it answers "is this a slope" and not "is there a bump under one
 * foot".
 */
export function groundSlope(x, z) {
  const e = 1.5;
  const dx = (groundY(x + e, z) - groundY(x - e, z)) / (2 * e);
  const dz = (groundY(x, z + e) - groundY(x, z - e)) / (2 * e);
  return Math.hypot(dx, dz);
}

/** How deep the water is at (x, z); 0 on dry land. */
export function waterDepthAt(x, z) {
  if (z < TUNNEL_MOUTH) return 0;
  return Math.max(0, WATER_Y - groundY(x, z));
}

const SOIL_ROCK_SLOPE = 0.62;   // above this the ant is on bare rock, not soil

/**
 * What the ground is made of at (x, z) — the same fields the lawn mesh is
 * coloured from, so what the player is told matches what the player sees.
 * `moss` is the 0..1 mix used for the vertex colour; `kind` is the coarse
 * answer gameplay wants ('water' | 'sand' | 'rock' | 'moss' | 'soil').
 */
export function soilAt(x, z) {
  const zone = vnoise(x * 0.006, z * 0.006);
  const moss = clamp(vnoise(x * 0.018, z * 0.018) * 2.3 - 0.55 + (zone - 0.5) * 0.6, 0, 1)
             * (0.55 + 0.45 * vnoise(x * 0.07, z * 0.07));
  const depth = waterDepthAt(x, z);
  const toWater = distanceToWater(x, z);
  const slope = groundSlope(x, z);
  let kind = 'soil';
  if (depth > 0) kind = 'water';
  else if (toWater < 14) kind = 'sand';
  else if (slope > SOIL_ROCK_SLOPE) kind = 'rock';
  else if (moss > 0.5) kind = 'moss';
  return { kind, moss, slope, depth, toWater };
}

/**
 * Everything about a spot in one call — for a "what is this ground worth"
 * readout (design/boucle-de-jeu.md §0: the terrain decides how good a
 * founding site is), and cheaper than four separate queries because they
 * share the height samples.
 */
export function sampleTerrain(x, z) {
  const s = soilAt(x, z);
  return {
    y: groundY(x, z),
    normal: groundNormal(x, z),
    slope: s.slope,
    soil: s.kind,
    moss: s.moss,
    waterDepth: s.depth,
    distToWater: s.toWater,
    diggable: s.depth === 0 && s.slope <= SOIL_ROCK_SLOPE && s.toWater > 10,
  };
}

/**
 * Clamp a candidate surface position into the walkable map — the outdoor twin
 * of containUnderground(). Keeps the ant out of the river (with a small
 * standoff so it stops at the waterline rather than in it) and inside the
 * authored bounds.
 *
 * NOT yet called by the controller: player/movement.js does its own
 * LAWN_BOUNDS box clamp, which is Cataglyphis's file. The bounds above are
 * picked so that box clamp already lands on the waterline; this is the exact
 * version to switch to when that file is next touched.
 */
export function containSurface(x, z) {
  const edge = riverEdgeAt(z) + 1.0;
  return [
    clamp(Math.max(x, edge), LAWN_BOUNDS.x0, LAWN_BOUNDS.x1),
    clamp(z, LAWN_BOUNDS.z0, LAWN_BOUNDS.z1),
  ];
}

/* ---- lawn mesh ---------------------------------------------------------- */

const C_SOIL_A = new THREE.Color('#86673B'), C_SOIL_B = new THREE.Color('#5A4529');
const C_MOSS_A = new THREE.Color('#5F8034'), C_MOSS_B = new THREE.Color('#9DBE58');
const C_SAND = new THREE.Color('#A79463');        // the river's silt shore
const C_BED = new THREE.Color('#4A5540');         // submerged bed, seen through the water
const C_ROCKFACE = new THREE.Color('#7C7566');    // bare ground on the steep rims

function mixColor(a, b, t) { return new THREE.Color(a).lerp(b, clamp(t, 0, 1)); }

/* 6.0 rather than the old 5.5: the map is now 2.4x the area and the smallest
   authored feature is 26 units across, so a 6-unit cell still carries every
   shape in RELIEF with room to spare. Net cost is measured in the session
   notes — it is the shadow box, not this grid, that the size change actually
   costs anything on. */
const GS = 6.0;

export function buildLawn() {
  const { x0: GX0, x1: GX1, z0: GZ0, z1: GZ1 } = TERRAIN_BOUNDS;
  const gCols = Math.floor((GX1 - GX0) / GS) + 1;
  const gRows = Math.floor((GZ1 - GZ0) / GS) + 1;

  const M = new MeshBuilder();
  for (let a = 0; a < gCols; a++) {
    for (let b = 0; b < gRows; b++) {
      const gx = GX0 + a * GS, gz = GZ0 + b * GS;
      const gy = groundY(gx, gz);
      // a broad, slow zone layer so the lawn reads as a few different corners
      // of the same meadow rather than one uniform texture repeated for 250
      // units — same "variation de palette entre zones" the old file added
      const zone = vnoise(gx * 0.006, gz * 0.006);
      const mossAmt = clamp(vnoise(gx * 0.018, gz * 0.018) * 2.3 - 0.55 + (zone - 0.5) * 0.6, 0, 1)
                    * (0.55 + 0.45 * vnoise(gx * 0.07, gz * 0.07));
      let c = mixColor(
        mixColor(C_SOIL_A, C_SOIL_B, vnoise(gx * 0.09, gz * 0.09)),
        mixColor(C_MOSS_A, C_MOSS_B, vnoise(gx * 0.05, gz * 0.05)),
        mossAmt
      );
      // shoreline: silt where the ground meets the water, weed-dark below it.
      // Painted from the same distance field the height uses, so the colour
      // band and the bank are the same edge — a shoreline that disagrees with
      // its own geometry is the classic tell of a bolted-on river.
      const dw = distanceToWater(gx, gz);
      if (dw < 30) {
        c = mixColor(c, C_SAND, smooth01((30 - dw) / 26));
        if (gy < WATER_Y + 0.6) c = mixColor(c, C_BED, smooth01((WATER_Y + 0.6 - gy) / 3.5));
      }
      // steep faces lose their moss: bare ground reads the rims and the bank
      const slope = groundSlope(gx, gz);
      if (slope > 0.45) c = mixColor(c, C_ROCKFACE, smooth01((slope - 0.45) / 0.5) * 0.75);
      M.addVertex(gx, gy, gz, c.toArray());
    }
  }
  for (let a = 0; a < gCols - 1; a++) {
    for (let b = 0; b < gRows - 1; b++) {
      const i00 = a * gRows + b;
      const i10 = (a + 1) * gRows + b;
      const i11 = (a + 1) * gRows + b + 1;
      const i01 = a * gRows + b + 1;
      M.addQuad(i00, i10, i11, i01);
    }
  }

  // side: DoubleSide — see underground.js's roomMaterial() for why: the old
  // prototype rendered with backface culling disabled globally.
  const mesh = new THREE.Mesh(M.toBufferGeometry(), texturedSurfaceMaterial({
    map: lawnAlbedo(), strength: 0.8, side: THREE.DoubleSide,
  }));
  mesh.name = 'lawn';
  mesh.receiveShadow = true;
  return mesh;
}

/* ---- water -------------------------------------------------------------- */

/* The water is a plane, not a simulation: a stylised surface owes the viewer
   movement and a specular, nothing more (#31 says as much). The ripple is two
   crossed sines in the vertex shader with an analytic normal, which is what
   makes the sun draw a moving highlight across it — a flat normal would leave
   it a matte blue floor no matter how it moved. */
/* Sky tint the surface reflects. There is no environment map in this scene
   (and adding one for a single plane would cost more than the plane), so the
   reflection is faked from one colour and a Fresnel term — without it the
   water is lit by the sun's specular alone and reads as a black trench cut
   through the meadow, which is exactly how it first rendered. Constant rather
   than driven from main.js's commuted sky: the river only exists outdoors, so
   there is nothing to commute it to. Matches SKY_OUT. */
const WATER_SKY = new THREE.Color('#9CC6E4');

const WATER_PARS = /* glsl */`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;

export function buildWater() {
  const { x0: WX0, z0: WZ0, z1: WZ1 } = TERRAIN_BOUNDS;
  const rows = 56, cols = 14;
  const M = new MeshBuilder();
  const surface = new THREE.Color('#3E6B7A'), deep = new THREE.Color('#22414F');

  for (let r = 0; r <= rows; r++) {
    const z = WZ0 + (WZ1 - WZ0) * (r / rows);
    // each row spans from the west edge of the built world to just past the
    // shoreline at *this* z, so the water sheet follows the meander exactly
    // instead of being a rectangle the bank has to hide
    const xEnd = riverEdgeAt(z) + 1.2;
    for (let c = 0; c <= cols; c++) {
      const x = lerp(WX0, xEnd, c / cols);
      const d = clamp((WATER_Y - groundY(x, z)) / 6, 0, 1);
      M.addVertex(x, WATER_Y, z, mixColor(surface, deep, d).toArray());
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i00 = r * (cols + 1) + c;
      /* Wound so the front face points UP, unlike the rest of this file's
         meshes. Everything else here is DoubleSide with inconsistent winding
         and gets away with it, because its geometry normals were computed
         from that same winding: normal * faceDirection comes out right either
         way. The water cannot get away with it — the vertex shader below
         throws the geometry normal away and substitutes the wave's analytic
         +Y one, so a down-facing front face has faceDirection flip it back to
         -Y and the sun ends up lighting the underside of the river. Which is
         exactly how it first rendered: a black trench. */
      M.addQuad(i00 + cols + 1, i00 + cols + 2, i00 + 1, i00);
    }
  }

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.16, metalness: 0.0,
    transparent: true, opacity: 0.86, side: THREE.DoubleSide,
  });
  const uniforms = { uWaveTime: { value: 0 }, uSkyCol: { value: WATER_SKY } };
  material.userData.waterUniforms = uniforms;
  material.userData.shaderTag = 'water-ripple';
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', WATER_PARS + '\n#include <common>')
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        transformed.y += wh;`);
    /* Fresnel toward the sky: near-vertical views keep the bed visible
       through the water, grazing ones go to sky. The 0.13 floor is what
       stops the surface directly under the camera from turning into a hole.
       Both `normal` and `vViewPosition` are view-space here, which is why
       this can sit after the lighting without a world-space basis. */
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', 'uniform vec3 uSkyCol;\n#include <common>')
      .replace('#include <tonemapping_fragment>', `
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`);
  };
  material.customProgramCacheKey = () => 'water-ripple';

  const mesh = new THREE.Mesh(M.toBufferGeometry(), material);
  mesh.name = 'water';
  mesh.receiveShadow = false;   // a shadow map on a moving translucent sheet
                                // buys nothing and costs a second pass on the
                                // largest quad in the scene
  return {
    mesh,
    update(elapsed) { uniforms.uWaveTime.value = elapsed; },
  };
}

/* ---- horizon ------------------------------------------------------------ */

/* Distant mountains, as two curtains of geometry that follow the camera in x
   and z (never in y, so climbing the tree really does raise the horizon).
   Following the camera is what makes them read as far away: at a real 3 km
   the parallax across a 500-unit map would be invisible anyway, and pinning
   them removes any question of the map's own geometry poking through them.
   They draw first with depth test and depth write off (renderOrder well
   negative), so every real surface paints over them regardless of distance —
   which is the whole reason they can sit at a radius the camera's far plane
   can still see.

   Cost: 2 layers x 96 segments x 2 quads = 768 triangles, one draw call each,
   no shadow, no fog (the aerial haze is baked into the vertex colours instead
   — scene fog is commuted for the nest and would turn them black underground). */
const HORIZON_LAYERS = [
  { r: 442, segs: 96, base: -120, peak: 165, seed: 3.1, rough: 0.55, haze: 0.72, tint: '#8FA6C4' },
  { r: 384, segs: 96, base: -120, peak: 118, seed: 11.7, rough: 0.75, haze: 0.50, tint: '#6E86A6' },
];

function ridgeHeight(a, seed, rough) {
  // periodic in a, so the ring closes without a seam
  const n1 = vnoise(Math.cos(a) * 2.1 + seed, Math.sin(a) * 2.1 + seed);
  const n2 = vnoise(Math.cos(a) * 5.3 + seed * 2, Math.sin(a) * 5.3 + seed * 2);
  const n3 = vnoise(Math.cos(a) * 11.0 + seed * 3, Math.sin(a) * 11.0 + seed * 3);
  return clamp(0.30 + (n1 - 0.5) * 1.5 + (n2 - 0.5) * rough + (n3 - 0.5) * rough * 0.45, 0.05, 1.0);
}

/* Two haze colours, not one: the aerial perspective is baked into the vertex
   colours (the curtains are unfogged on purpose — see above), so when the
   sky commutes from the prologue's violet-grey to the founded blue, a single
   baked haze leaves the mountains hanging in front of a sky they no longer
   belong to. Both sets are baked once and cross-faded on the CPU while the
   transition runs: ~1700 float lerps a frame for six seconds, against a
   shader permutation and a second program for the same result. */
export function buildHorizon(hazeProlog = '#8B8399', hazeFounded = '#AFC8D8') {
  const hazeA = new THREE.Color(hazeProlog), hazeB = new THREE.Color(hazeFounded);
  const group = new THREE.Group();
  group.name = 'horizon';
  const layers = [];

  for (const L of HORIZON_LAYERS) {
    const M = new MeshBuilder();
    const altColors = [];       // the same vertices, hazed for the other sky
    const tint = new THREE.Color(L.tint);
    const top = [], mid = [], bot = [];
    for (let i = 0; i <= L.segs; i++) {
      const a = (i / L.segs) * Math.PI * 2;
      const hN = ridgeHeight(a, L.seed, L.rough);
      const y = L.base + (L.peak - L.base) * hN;
      const cx = Math.cos(a) * L.r, cz = Math.sin(a) * L.r;
      /* Lateral shading baked from the ridge's own slope: with no real
         geometry facing the sun there is nothing to light, so the painted
         light does the work — the side of a peak that falls away to the east
         is darker, exactly the convention the textures are painted with. */
      const hPrev = ridgeHeight(a - 0.04, L.seed, L.rough);
      const face = clamp(0.5 + (hN - hPrev) * 6, 0, 1);
      const lit = mixColor(tint.clone().multiplyScalar(0.72), tint.clone().multiplyScalar(1.16), face);
      const hazed = (h) => {
        const peak = mixColor(lit, h, L.haze * 0.75);
        const foot = mixColor(lit.clone().multiplyScalar(0.85), h, Math.min(1, L.haze + 0.22));
        return [peak, mixColor(peak, foot, 0.6), foot];
      };
      const A = hazed(hazeA), B = hazed(hazeB);
      top.push(M.addVertex(cx, y, cz, A[0].toArray()));
      mid.push(M.addVertex(cx, lerp(L.base, y, 0.45), cz, A[1].toArray()));
      bot.push(M.addVertex(cx, L.base, cz, A[2].toArray()));
      for (const c of B) altColors.push(c.r, c.g, c.b);
    }
    for (let i = 0; i < L.segs; i++) {
      M.addQuad(top[i], top[i + 1], mid[i + 1], mid[i]);
      M.addQuad(mid[i], mid[i + 1], bot[i + 1], bot[i]);
    }
    const mesh = new THREE.Mesh(M.toBufferGeometry(), new THREE.MeshBasicMaterial({
      vertexColors: true, fog: false, side: THREE.DoubleSide,
      depthTest: false, depthWrite: false,
    }));
    mesh.renderOrder = -1000;
    mesh.frustumCulled = false;
    group.add(mesh);
    layers.push({ mesh, base: mesh.geometry.attributes.color.array.slice(), alt: new Float32Array(altColors) });
  }

  let hazedAt = -1;
  return {
    group,
    update(camera, founded = 0) {
      group.position.set(camera.position.x, 0, camera.position.z);
      if (Math.abs(founded - hazedAt) < 0.002) return;
      hazedAt = founded;
      for (const L of layers) {
        const a = L.mesh.geometry.attributes.color;
        for (let i = 0; i < a.array.length; i++) a.array[i] = L.base[i] + (L.alt[i] - L.base[i]) * founded;
        a.needsUpdate = true;
      }
    },
  };
}
