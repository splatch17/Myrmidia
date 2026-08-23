import * as THREE from 'three';
import { vnoise, clamp } from '../core/noise.js';
import { nrm3 } from '../core/vecmath.js';
import { MeshBuilder } from '../core/meshBuilder.js';
import { undergroundFloor, TUNNEL_MOUTH } from './underground.js';

/* ==========================================================================
   Outdoor terrain: the lawn ground the ant walks on above the gallery mouth.
   Ported from design/prototypes/sortie-fourmiliere.html's groundY()/
   groundNormal() (section 1) and the lawn heightfield block of buildWorld()
   (section 3). The mound-face backdrop wall from the old prototype is NOT
   ported this round (purely decorative, not needed for #20/#21/#22) — a
   follow-up DA pass can add it once the room/grass/tree work here lands.
   ========================================================================== */

export { TUNNEL_MOUTH };

/* One height function, used both to build the lawn mesh and to stand
   grass/tree/ant on it, so nothing hovers or sinks. Blends into the gallery
   mouth's floor height so the seam between underground and lawn is seamless. */
export function groundY(x, z) {
  if (z < TUNNEL_MOUTH) return undergroundFloor(x, z);
  const h = (vnoise(x * 0.012, z * 0.012) - 0.5) * 4.2
          + (vnoise(x * 0.052, z * 0.052) - 0.5) * 1.3;
  const t = clamp(z / 26, 0, 1);
  return h * t + undergroundFloor(x, 0) * (1 - t);
}

export function groundNormal(x, z) {
  const e = 1.4;
  return nrm3([groundY(x - e, z) - groundY(x + e, z), 2 * e, groundY(x, z - e) - groundY(x, z + e)]);
}

export const LAWN_BOUNDS = { x0: -190, x1: 190, z0: 0, z1: 250 };

const C_SOIL_A = new THREE.Color('#6d5130'), C_SOIL_B = new THREE.Color('#463320');
const C_MOSS_A = new THREE.Color('#4c5f2f'), C_MOSS_B = new THREE.Color('#7d9c4e');

function mixColor(a, b, t) { return new THREE.Color(a).lerp(b, clamp(t, 0, 1)); }

export function buildLawn() {
  const { x0: GX0, x1: GX1, z0: GZ0, z1: GZ1 } = LAWN_BOUNDS;
  const GS = 5.5;
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
      const c = mixColor(
        mixColor(C_SOIL_A, C_SOIL_B, vnoise(gx * 0.09, gz * 0.09)),
        mixColor(C_MOSS_A, C_MOSS_B, vnoise(gx * 0.05, gz * 0.05)),
        mossAmt
      );
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

  const mesh = new THREE.Mesh(M.toBufferGeometry(), new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.95, metalness: 0,
  }));
  mesh.name = 'lawn';
  mesh.receiveShadow = true;
  return mesh;
}
