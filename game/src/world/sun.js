import { nrm3 } from '../core/vecmath.js';

/* ==========================================================================
   Where the sun is, and what the outdoor sky is worth — as data, in one
   place, because two different consumers must never disagree about it:

     - main.js drives the actual DirectionalLight/hemisphere/fog from it;
     - world/shade.js answers shadeAt(x, z) from it, and that answer is read
       out to the player in the HUD.

   A sun the HUD reasons about and a sun the renderer draws are the exact
   class of split that design/api-monde-gameplay.md was written to stop.

   The two rigs are design/ambiance-prologue.md §1b, verbatim. The prologue
   sun sits at 18.5 degrees of elevation and that is not a mood choice: at
   that angle a slope facing away from the light is genuinely dark, which is
   what gives shadeAt() something to measure on a terrain whose features are
   ten units high. At the founded rig's 51 degrees the same terrain is
   almost uniformly lit — the world opening up is also the shade factor
   flattening out, and both are intended.

   Not implemented from that spec, deliberately, because the assets belong to
   Cephalotes: the `sky_gradient-prologue` / `sky_gradient-lawn` backgrounds
   (flat colours below, marked PLACEHOLDER) and the toon ramp swap.
   ========================================================================== */

/* Retuned at integration, on captures, against the values
   design/ambiance-prologue.md specifies. The hue, the sun angle and the whole
   prologue identity are kept — what changed is the near field.

   The spec's numbers are a landscape photographer's: fog from 40 to 300 and
   an exposure of 1.02 describe a hazy dusk seen across a valley. At ant
   scale 40 units is under two body lengths, so the haze started *inside* the
   grass the player is walking through and the entire playable near field
   went to violet milk, with the queen a brown silhouette on brown ground.
   The measured comparison is in the session notes; the short version is that
   the game became unreadable everywhere it is actually played.

   So: haze pushed out past the near field (95/420, matching the founded rig's
   depth budget), and the near field lit back to where a stylised dusk still
   shows local colour. The fog colour is a touch deeper than the spec's
   #8b8399 for the same reason — a light fog reads as wash, a slightly darker
   one reads as air. Everything else is untouched.

   If the art direction wants the milk back, the lever is here and it is four
   numbers; but it should be judged on an ant-height capture, not a wide.

   Second pass, after the grass started casting shadows: with a sun at 18.5
   degrees, 1600 blades throw long shadows across most of the ground, and the
   scene lost most of what the first pass had given back. The hemisphere fill
   is what a shadow falls back to, so that is the term that was raised —
   design/charte-stylisation.md 1c: a shadow is a colour, not an absence. The
   sun is untouched, so the *contrast* between lit and shadowed ground is the
   same; only the floor moved.

   Third pass, and this one was measured rather than judged. Reading the
   drawing buffer down a vertical strip through the queen, the entire playable
   frame sat between luminance 1 and 62 out of 255 — the whole image inside
   the bottom twelve percent of the range, with the queen and the ground she
   stands on both around 10-20 and therefore indistinguishable. The shadow
   ratio was fine; the absolute level was not. Twilight is a colour, not an
   underexposure, and the spec's numbers had been read as the second. Sun,
   exposure and fill all raised together so the hue and the lit/shadow ratio
   hold while the picture leaves the mud. */
export const RIG_PROLOGUE = {
  sunDir: nrm3([-300, 120, 195]),   // elevation 18.5 deg, azimuth from -x/+z
  sunColor: 0xe8b98c,
  sunIntensity: 5.4,                // spec 1.9 — see the note on grazing light
  hemiSky: 0x6e7fa8,
  hemiGround: 0x4a4530,
  hemiIntensity: 1.15,              // spec 0.62 — see the shadow note below
  fog: 0x7d7488,                    // spec 0x8b8399
  fogNear: 95,                      // spec 40
  fogFar: 420,                      // spec 300
  sky: 0x9a93a8,                    // PLACEHOLDER for sky_gradient-prologue
  exposure: 1.30,                   // spec 1.02
};

export const RIG_FOUNDED = {
  sunDir: nrm3([30, 45, 20]),       // elevation 51 deg — charte §1a
  sunColor: 0xffd98a,
  sunIntensity: 2.5,
  hemiSky: 0xbfd8f5,
  hemiGround: 0x6e6a38,
  hemiIntensity: 0.85,
  fog: 0xafc8d8,
  fogNear: 90,
  fogFar: 420,
  sky: 0x9cc6e4,                    // PLACEHOLDER for sky_gradient-lawn
  exposure: 1.15,
};

/* 0 = prologue (queen alone), 1 = colony founded. Animated once, at the
   moment of founding (design/ambiance-prologue.md §2a). Kept here rather
   than in main.js so shadeAt() reads the same value the renderer is using
   mid-transition instead of jumping a rig ahead of the picture. */
let mix = 0;

export function foundedMix() { return mix; }
export function setFoundedMix(v) { mix = v < 0 ? 0 : (v > 1 ? 1 : v); }

const _dir = [0, 1, 0];

/** Unit vector pointing from the world *towards* the sun, at the current mix. */
export function sunDir() {
  const a = RIG_PROLOGUE.sunDir, b = RIG_FOUNDED.sunDir;
  _dir[0] = a[0] + (b[0] - a[0]) * mix;
  _dir[1] = a[1] + (b[1] - a[1]) * mix;
  _dir[2] = a[2] + (b[2] - a[2]) * mix;
  const l = Math.hypot(_dir[0], _dir[1], _dir[2]) || 1;
  _dir[0] /= l; _dir[1] /= l; _dir[2] /= l;
  return _dir;
}
