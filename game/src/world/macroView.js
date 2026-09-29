import * as THREE from 'three';
import { getFoundedNest, dugRooms, digFaces, descentPath } from './founding.js';
import { lawnY } from './terrain.js';
import { getLocalLights } from './lighting.js';
import { markEmitter } from '../core/bloom.js';

/* ==========================================================================
   MACRO VIEW (#34) — what the world looks like when the player steps back
   from the ant and looks at the nest as a scale model.

   This file owns only the LOOK of the mode. Which camera, which input, what a
   click means: core/macroMode.js. The split is the one the ticket asks for —
   macro becomes the base of nest building, so the model has to be something
   a later tool can draw on (hover/selection are uniforms here, nothing is
   baked), not a special camera bolted onto the play view.

   THE MODEL, and why it is drawn this way.
     - The earth goes away: lawn, grass, garden decor, tree, water, horizon,
       resources, the spoil heaps and berms, the light shafts. Hidden, not
       faded: every one of them is opaque and depth-writing, and a translucent
       meadow over the nest would need sorting against the shells for no gain.
       What stays of the surface is a contour grid on lawnY() and the mouth's
       outline, so the ground level still reads.
     - Every cavity mesh (the founding shell, each room, each tunnel) is drawn
       TWICE with the same geometry. Their faces are wound inward (measured:
       every room triangle faces its centre), so:
         * FrontSide, opaque = the inside of the cavity. From above, a dome's
           inner face points down, away from the camera, and is culled: what
           is left is the floor and the far walls — the room opened like a
           doll's house, with nothing sorted and nothing transparent.
         * BackSide, additive fresnel = the outside of the same shell. Faint
           head-on, bright at grazing angles, so each dome and each tube has
           a glowing silhouette: the volume reads even where its interior is
           hidden behind another room.
       Flat indigo/violet, darker with depth (#78's nest palette), no local
       light loop: the model is legible by construction, not by lamps.
     - Ants are drawn a second time as bright dots over everything, sized to
       the camera distance; open dig faces as gauge-coloured rings whose inner
       disc fills with progress (the #51 dial's own gradient).
   ========================================================================== */

const MAX_MARKERS = 72;      // the queen + crowd.js's MAX_ANTS, with spare
const MAX_FACES = 24;
const MAX_LAMPS = 48;

const C_DEEP = new THREE.Color('#150f38');
const C_HIGH = new THREE.Color('#5b47b4');
const C_FLOOR = new THREE.Color('#a996f0');
const C_RIM = new THREE.Color('#7f78f0');
const C_HOVER = new THREE.Color('#f3cf7a');      // the HUD's gold
const C_SEL = new THREE.Color('#ffb44d');        // the HUD's amber
const C_QUEEN = new THREE.Color('#ffd36a');
const C_WORKER = new THREE.Color('#f4ead0');
const C_DIGGER = new THREE.Color('#ff9a4a');
const C_DIAL_A = new THREE.Color('#ffe29a');     // hud.js #dialgrad
const C_DIAL_B = new THREE.Color('#e88a2a');

/* Shared by the two cavity materials, so hover/selection and the depth ramp
   are one write per frame whatever the number of rooms. */
const U = {
  uYRange: { value: new THREE.Vector2(-20, 20) },
  uHover: { value: new THREE.Vector4(0, 0, 0, 0) },    // x, z, r, floorY — r = 0: none
  uSel: { value: new THREE.Vector4(0, 0, 0, 0) },
  uTime: { value: 0 },
  uDeep: { value: C_DEEP }, uHigh: { value: C_HIGH }, uFloor: { value: C_FLOOR },
  uRim: { value: C_RIM }, uHoverCol: { value: C_HOVER }, uSelCol: { value: C_SEL },
};

const CAVITY_VS = /* glsl */`
  attribute float aLawn;
  varying vec3 vW;
  varying vec3 vN;
  varying float vLawn;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vW = w.xyz;
    vLawn = aLawn;
    vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

/* Hover/selection mark a room by its footprint: horizontal distance to its
   centre, and a height band from its floor to above its dome. Cheaper than a
   per-mesh material, and it lights the mouths of the tunnels that enter the
   room too, which is what "this room" means when you point at it. */
const REGION = /* glsl */`
  varying float vLawn;
  uniform vec4 uHover, uSel;
  uniform float uTime;
  float region(vec4 R, vec3 p) {
    if (R.z <= 0.0) return 0.0;
    float d = length(p.xz - R.xy) / R.z;
    float band = step(R.w - 3.0, p.y) * step(p.y, R.w + 26.0);
    return band * (1.0 - smoothstep(0.92, 1.12, d));
  }
`;

function interiorMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: U,
    vertexShader: CAVITY_VS,
    fragmentShader: /* glsl */`
      uniform vec2 uYRange;
      uniform vec3 uDeep, uHigh, uFloor, uHoverCol, uSelCol;
      varying vec3 vW;
      varying vec3 vN;
      ${REGION}
      void main() {
        // the trench's banks stand above the meadow: the model is cut at the
        // ground level, so the entrance reads as a cut in the grid
        if (vLawn > 0.25) discard;
        vec3 n = normalize(vN);
        /* #90: which side is shown is decided by the smooth normal, not by the
           triangle's winding: on the volume's creases (the foot of every wall)
           the quads' facing flips from one to the next, and face culling cut
           the floor's edge into a staircase of teeth. */
        if (dot(n, cameraPosition - vW) < 0.0) discard;
        float h = clamp((vW.y - uYRange.x) / max(uYRange.y - uYRange.x, 1.0), 0.0, 1.0);
        vec3 base = mix(uDeep, uHigh, h);
        // floors a shade lighter than walls: the plan of the nest is what the
        // eye should find first
        base = mix(base, uFloor * (0.55 + 0.45 * h), smoothstep(0.55, 0.9, n.y) * 0.7);
        float lam = 0.42 + 0.58 * max(dot(n, normalize(vec3(0.35, 1.0, 0.25))), 0.0);
        // contour lines every 3 units: the depth of each room reads as a
        // number of rings, the way a survey model is read
        float c = abs(fract(vW.y / 3.0) - 0.5) * 2.0;
        float line = 1.0 - smoothstep(0.0, fwidth(vW.y / 3.0) * 2.0, 1.0 - c);
        vec3 col = base * lam * (1.0 + 0.18 * line);
        float hv = region(uHover, vW), sl = region(uSel, vW);
        col = mix(col, uHoverCol * (0.55 + 0.45 * lam), hv * 0.5);
        col = mix(col, uSelCol * (0.6 + 0.4 * lam), sl * (0.45 + 0.1 * sin(uTime * 4.0)));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }
    `,
    side: THREE.DoubleSide,
  });
}

function shellMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: U,
    vertexShader: CAVITY_VS,
    fragmentShader: /* glsl */`
      uniform vec3 uRim, uHoverCol, uSelCol;
      varying vec3 vW;
      varying vec3 vN;
      ${REGION}
      void main() {
        if (vLawn > 0.25) discard;
        vec3 n = -normalize(vN);                      // outward: this is the back face
        vec3 v = normalize(cameraPosition - vW);
        float f = pow(1.0 - abs(dot(n, v)), 2.2);
        vec3 rim = mix(uRim, uHoverCol, max(region(uHover, vW), region(uSel, vW)));
        gl_FragColor = vec4(rim * (0.035 + 0.62 * f), 1.0);
        #include <colorspace_fragment>
      }
    `,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

const CAVITY = /^(founded-nest-shell|nest-volume-|nest-room-|nest-link-)/;
const SURFACE_BITS = /^nest-(mound|heap-|berm-|pan)/;

/**
 * @param world  what createWorld() returned (its `surface` handles)
 * @param scene  where the overlays (grid, markers, faces, lamp glows) live
 */
export function createMacroView({ world, scene }) {
  const interior = interiorMaterial();
  const shell = shellMaterial();

  const root = new THREE.Group();
  root.name = 'macro-view';
  root.visible = false;
  scene.add(root);

  /* ---- ants: one bright dot each, drawn over everything --------------- */
  const dotGeo = new THREE.IcosahedronGeometry(1, 1);
  const dotMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, depthTest: false, depthWrite: false, transparent: true, opacity: 0.95, fog: false,
  });
  const dots = new THREE.InstancedMesh(dotGeo, dotMat, MAX_MARKERS);
  dots.name = 'macro-ants';
  dots.frustumCulled = false;
  dots.renderOrder = 30;
  dots.setColorAt(0, C_WORKER);
  dots.count = 0;
  root.add(dots);

  /* ---- dig faces: ring + progress disc, oriented on the wall ---------- */
  const ringGeo = new THREE.TorusGeometry(1, 0.13, 6, 28);
  const discGeo = new THREE.CircleGeometry(0.84, 24);
  const faceMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, depthTest: false, depthWrite: false, transparent: true, opacity: 0.92,
    side: THREE.DoubleSide, fog: false,
  });
  const rings = new THREE.InstancedMesh(ringGeo, faceMat, MAX_FACES);
  const discs = new THREE.InstancedMesh(discGeo, faceMat, MAX_FACES);
  for (const m of [rings, discs]) {
    m.frustumCulled = false; m.renderOrder = 25; m.count = 0; m.setColorAt(0, C_DIAL_A); root.add(m);
  }
  rings.name = 'macro-dig-rings'; discs.name = 'macro-dig-discs';

  /* ---- lamps: small glowing points on the bloom layer ----------------- */
  const lampMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false, toneMapped: false });
  const lamps = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), lampMat, MAX_LAMPS);
  lamps.name = 'macro-lamps';
  lamps.frustumCulled = false;
  lamps.count = 0;
  lamps.setColorAt(0, C_WORKER);
  markEmitter(lamps);
  root.add(lamps);

  /* ---- surface level: contour grid + translucent sheet + mouth ring ---- */
  let ground = null;

  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3();
  const _s = new THREE.Vector3(), _c = new THREE.Color(), _n = new THREE.Vector3();
  const _z = new THREE.Vector3(0, 0, 1);

  let active = false;
  const hidden = [];        // [obj, wasVisible] of what setActive(true) hid
  const swapped = new Map(); // cavity mesh -> { orig, ghost }
  let forNest = null, forChildren = -1;
  let rooms = [], faces = [], bounds = null, refreshT = 0;

  function surfaceObjects() {
    const s = world.surface || {};
    return [s.lawn, s.water, s.horizon, s.grass, s.tree, s.resources, s.garden, s.atmosphere].filter(Boolean);
  }

  /** Swap every cavity mesh of the nest to the model look, hide the spoil. */
  function processNest(nest) {
    nest.group.traverse((o) => {
      if (!o.isMesh || o.userData.macroGhost) return;
      if (CAVITY.test(o.name)) {
        let rec = swapped.get(o);
        if (!rec) {
          /* Height over the meadow, per vertex, once: the clip above needs
             lawnY() and a shader cannot call it. The geometry is shared with
             the play mesh, which simply never reads the extra attribute. */
          if (!o.geometry.attributes.aLawn) {
            const pos = o.geometry.attributes.position;
            const h = new Float32Array(pos.count);
            for (let i = 0; i < pos.count; i++) h[i] = pos.getY(i) - lawnY(pos.getX(i), pos.getZ(i));
            o.geometry.setAttribute('aLawn', new THREE.BufferAttribute(h, 1));
          }
          const ghost = new THREE.Mesh(o.geometry, shell);
          ghost.name = `${o.name}-macro-shell`;
          ghost.userData.macroGhost = true;
          ghost.renderOrder = 10;
          ghost.visible = false;
          o.add(ghost);
          rec = { orig: o.material, ghost, mesh: o };
          swapped.set(o, rec);
        }
        o.material = interior;
        rec.ghost.visible = true;
      } else if (SURFACE_BITS.test(o.name) && o.visible) {
        o.visible = false;
        hidden.push([o, true]);
      }
    });
    forNest = nest;
    forChildren = nest.group.children.length;
  }

  function restoreNest() {
    for (const rec of swapped.values()) {
      rec.mesh.material = rec.orig;
      rec.ghost.visible = false;
    }
  }

  /** The nest as a box: rooms, descent path, mouth. null if nothing founded. */
  function computeBounds() {
    const nest = getFoundedNest();
    if (!nest) return null;
    const b = { x0: Infinity, x1: -Infinity, z0: Infinity, z1: -Infinity, y0: Infinity, y1: -Infinity };
    const add = (x, y, z, r = 0) => {
      b.x0 = Math.min(b.x0, x - r); b.x1 = Math.max(b.x1, x + r);
      b.z0 = Math.min(b.z0, z - r); b.z1 = Math.max(b.z1, z + r);
      b.y0 = Math.min(b.y0, y); b.y1 = Math.max(b.y1, y);
    };
    for (const r of rooms) { add(r.x, r.floorY, r.z, r.r * 1.1); b.y1 = Math.max(b.y1, r.floorY + 20); }
    const path = descentPath();
    if (path) for (const p of path) add(p.x, p.y, p.z, 4);
    add(nest.mouth.x, nest.mouth.y, nest.mouth.z, nest.mouth.r || 6);
    b.minR = rooms.length ? Math.min(...rooms.map((r) => r.r)) : 12;
    return b;
  }

  function buildGround(cx, cz, half, mouth) {
    if (ground) { root.remove(ground); ground.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
    ground = new THREE.Group();
    ground.name = 'macro-ground';
    const N = 34, step = (half * 2) / N;
    const hs = new Float32Array((N + 1) * (N + 1));
    const as = new Float32Array((N + 1) * (N + 1));
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      const x = cx - half + i * step, z = cz - half + j * step;
      hs[i * (N + 1) + j] = lawnY(x, z) + 0.15;
      const d = Math.hypot(x - cx, z - cz) / half;
      as[i * (N + 1) + j] = Math.max(0, 1 - d * d);
    }
    const vtx = (i, j) => [cx - half + i * step, hs[i * (N + 1) + j], cz - half + j * step];
    // the grid lines
    const lp = [], la = [];
    for (let i = 0; i <= N; i++) for (let j = 0; j < N; j++) {
      lp.push(...vtx(i, j), ...vtx(i, j + 1)); la.push(as[i * (N + 1) + j], as[i * (N + 1) + j + 1]);
      lp.push(...vtx(j, i), ...vtx(j + 1, i)); la.push(as[j * (N + 1) + i], as[(j + 1) * (N + 1) + i]);
    }
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
    lg.setAttribute('aA', new THREE.Float32BufferAttribute(la, 1));
    const fade = (alpha, col) => new THREE.ShaderMaterial({
      uniforms: { uCol: { value: new THREE.Color(col) }, uA: { value: alpha } },
      vertexShader: `attribute float aA; varying float vA;
        void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uCol; uniform float uA; varying float vA;
        void main(){ gl_FragColor = vec4(uCol, uA * vA);
        #include <colorspace_fragment>
        }`,
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
    });
    const lines = new THREE.LineSegments(lg, fade(0.34, '#b7c6ff'));
    lines.renderOrder = 12;
    ground.add(lines);
    // the sheet: just enough to see where the ground is when the grid is
    // edge-on at a low pitch
    const sp = [], sa = [], si = [];
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) { sp.push(...vtx(i, j)); sa.push(as[i * (N + 1) + j]); }
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const a = i * (N + 1) + j, b = a + N + 1;
      si.push(a, b, a + 1, b, b + 1, a + 1);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    sg.setAttribute('aA', new THREE.Float32BufferAttribute(sa, 1));
    sg.setIndex(si);
    const sheet = new THREE.Mesh(sg, fade(0.09, '#7e8fd0'));
    sheet.renderOrder = 11;
    ground.add(sheet);
    if (mouth) {
      const mp = [];
      const R = (mouth.r || 8) * 1.1;
      for (let k = 0; k <= 48; k++) {
        const a = (k / 48) * Math.PI * 2;
        const x = mouth.x + Math.cos(a) * R, z = mouth.z + Math.sin(a) * R;
        mp.push(x, lawnY(x, z) + 0.4, z);
      }
      const mg = new THREE.BufferGeometry();
      mg.setAttribute('position', new THREE.Float32BufferAttribute(mp, 3));
      const ring = new THREE.Line(mg, new THREE.LineBasicMaterial({
        color: 0xffc46a, transparent: true, opacity: 0.9, depthWrite: false, fog: false,
      }));
      ring.renderOrder = 13;
      ground.add(ring);
    }
    root.add(ground);
  }

  /** Rooms, faces, lamps and bounds, re-read at 4 Hz (they allocate). */
  function refresh(focus) {
    rooms = dugRooms();
    faces = digFaces();
    const nest = getFoundedNest();
    bounds = computeBounds();
    if (bounds) {
      U.uYRange.value.set(bounds.y0 - 1, Math.max(bounds.y1 - 6, bounds.y0 + 8));
    }
    // lamps inside the nest box that are lit
    let n = 0;
    if (bounds) {
      for (const L of getLocalLights()) {
        if (n >= MAX_LAMPS) break;
        const [x, y, z] = L.p;
        if (x < bounds.x0 - 4 || x > bounds.x1 + 4 || z < bounds.z0 - 4 || z > bounds.z1 + 4) continue;
        const e = Math.max(L.c[0], L.c[1], L.c[2]);
        if (e < 0.05) continue;
        _m.compose(_p.set(x, y, z), _q.identity(), _s.setScalar(0.45 + 0.2 * Math.min(e, 2)));
        lamps.setMatrixAt(n, _m);
        // the lamp's own hue, never white: a white point would read as an ant
        _c.setRGB(L.c[0] / e, L.c[1] / e, L.c[2] / e).multiplyScalar(0.95);
        lamps.setColorAt(n, _c);
        n++;
      }
    }
    lamps.count = n;
    lamps.instanceMatrix.needsUpdate = true;
    if (lamps.instanceColor) lamps.instanceColor.needsUpdate = true;
    const key = bounds ? `${rooms.length}` : `q${Math.round(focus.x / 20)},${Math.round(focus.z / 20)}`;
    if (key !== refresh.key) {
      refresh.key = key;
      if (bounds) {
        const cx = (bounds.x0 + bounds.x1) / 2, cz = (bounds.z0 + bounds.z1) / 2;
        buildGround(cx, cz, Math.max(bounds.x1 - bounds.x0, bounds.z1 - bounds.z0) * 0.5 + 45, nest.mouth);
      } else {
        buildGround(focus.x, focus.z, 70, null);
      }
    }
  }

  function setActive(on, focus) {
    if (on === active) return;
    active = on;
    root.visible = on;
    if (on) {
      hidden.length = 0;
      for (const o of surfaceObjects()) { hidden.push([o, o.visible]); o.visible = false; }
      refresh.key = null;
      refresh(focus);
      const nest = getFoundedNest();
      if (nest) processNest(nest);
    } else {
      for (const [o, v] of hidden) o.visible = v;
      hidden.length = 0;
      restoreNest();
      forNest = null; forChildren = -1;
      U.uHover.value.z = 0;
    }
  }

  /**
   * Once a frame while active, after world.update() (which re-decides the
   * garden's visibility every frame) and after the camera is placed.
   * `focus` is the orbit target (THREE.Vector3): ant dots are sized by the
   * camera's distance to it. forEachAnt(fn) calls fn(x, y, z, kind) for every ant, kind in
   * 'queen' | 'worker' | 'digger'. Nothing here allocates per frame.
   */
  let dotN = 0, dotScale = 1;
  const dotSink = (x, y, z, kind) => {
    if (dotN >= MAX_MARKERS) return;
    const big = kind === 'queen' ? 1.7 : 1;
    const s = dotScale * big;
    // a pin over the ant, not a disc on it: close up the ant itself is what
    // should be seen, so the pin shrinks away under ~45 units of distance
    _m.makeScale(s, s, s).setPosition(x, y + (kind === 'queen' ? 9 : 4.5) + s * 1.2, z);
    dots.setMatrixAt(dotN, _m);
    dots.setColorAt(dotN, kind === 'queen' ? C_QUEEN : kind === 'digger' ? C_DIGGER : C_WORKER);
    dotN++;
  };

  function update(dt, elapsed, camera, forEachAnt, focus) {
    if (!active) return;
    U.uTime.value = elapsed;
    // world.update() re-shows the garden every frame; keep the earth away
    for (const [o] of hidden) o.visible = false;
    const nest = getFoundedNest();
    if (nest && (nest !== forNest || nest.group.children.length !== forChildren)) processNest(nest);
    refreshT -= dt;
    if (refreshT <= 0) { refreshT = 0.25; refresh(focus); }

    const dist = camera.position.distanceTo(focus);
    dotScale = THREE.MathUtils.clamp(dist * 0.009, 0.7, 3.5) * THREE.MathUtils.smoothstep(dist, 38, 75);
    dotN = 0;
    if (forEachAnt) forEachAnt(dotSink);
    dots.count = dotN;
    dots.instanceMatrix.needsUpdate = true;
    if (dots.instanceColor) dots.instanceColor.needsUpdate = true;

    let fN = 0;
    const pulse = 0.85 + 0.15 * Math.sin(elapsed * 5);
    for (let i = 0; i < faces.length && fN < MAX_FACES; i++) {
      const f = faces[i];
      const k = f.needed > 0 ? THREE.MathUtils.clamp(f.worked / f.needed, 0, 1) : 0;
      _n.set(f.nx, 0, f.nz).normalize();
      _q.setFromUnitVectors(_z, _n);
      const R = 3.2 + dotScale * 0.8;
      _p.set(f.x + f.nx * 0.6, f.y + 3.5, f.z + f.nz * 0.6);
      _m.compose(_p, _q, _s.setScalar(R));
      rings.setMatrixAt(fN, _m);
      _c.copy(C_DIAL_A).lerp(C_DIAL_B, k).multiplyScalar(k > 0 ? pulse * 1.2 : 0.55);
      rings.setColorAt(fN, _c);
      _m.compose(_p, _q, _s.setScalar(R * Math.max(k, 0.001)));
      discs.setMatrixAt(fN, _m);
      discs.setColorAt(fN, _c);
      fN++;
    }
    rings.count = fN; discs.count = fN;
    for (const m of [rings, discs]) {
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }
  }

  const setRegion = (v, room) => {
    if (room) v.set(room.x, room.z, room.r, room.floorY); else v.z = 0;
  };

  return {
    root,
    setActive,
    update,
    get active() { return active; },
    /** Latest reading of the nest (4 Hz): rooms, open faces, bounds. */
    rooms: () => rooms,
    faces: () => faces,
    bounds: () => bounds,
    /** Highlight a room (hover) / mark one selected; null clears. */
    setHover: (room) => setRegion(U.uHover.value, room),
    setSelected: (room) => setRegion(U.uSel.value, room),
    /** Force a re-read now (e.g. on entering, before the first frame). */
    refresh: (focus) => refresh(focus),
  };
}

/* The macro environment: a dark studio backdrop, no fog, a neutral fill, so
   the model is read on its own. `mix` 0..1 blends from whatever the game's
   own zone commutation left in place (main.js applyEnvironment). */
const MACRO_BG = new THREE.Color('#0c0a1c');
const MACRO_SKY = new THREE.Color('#c9c2ff'), MACRO_GROUND = new THREE.Color('#3a3160');
export function applyMacroEnvironment({ scene, renderer, hemi }, mix) {
  if (mix <= 0) return;
  scene.background.lerp(MACRO_BG, mix);
  scene.fog.near = THREE.MathUtils.lerp(scene.fog.near, 4000, mix);
  scene.fog.far = THREE.MathUtils.lerp(scene.fog.far, 5000, mix);
  renderer.toneMappingExposure = THREE.MathUtils.lerp(renderer.toneMappingExposure, 1.15, mix);
  hemi.color.lerp(MACRO_SKY, mix);
  hemi.groundColor.lerp(MACRO_GROUND, mix);
  hemi.intensity = THREE.MathUtils.lerp(hemi.intensity, 1.1, mix);
}
