import * as THREE from 'three';
import { scl3 } from '../core/vecmath.js';
import { groundY } from '../world/index.js';
import { antMatrix, localToWorld } from './legs.js';
import { PLAYER_AVATAR } from './avatar.js';
import { resourceNodes, nodesAreProvisional } from './resources.js';

/* ==========================================================================
   The things the harvest loop has to *show* (#29).

   Three of them, and the first is the one that matters most:

   1. What she is carrying, held in her mandibles. A counter going up is
      bookkeeping; a seed visibly clamped in front of her head is the reason
      the walk home reads as a walk home. Placed in the ant's own local frame
      (legs.js's antMatrix/localToWorld, the same maths antMesh.js uses for
      every body part), so it follows her body — including up a stem — with
      no separate animation.
   2. The pile she is building, which is the site she has committed to and
      the thing the colony gets founded on (harvest.js).
   3. Stand-in markers for the resource nodes, and *only* while
      resources.js is on its stand-in set: when world/** publishes
      RESOURCE_NODES it draws its own nodes (contract §3, "le monde met à jour
      le visuel du noeud lui-même") and this part switches itself off.

   Everything is preallocated and toggled with .visible: these meshes have to
   exist before main.js's one-shot scene.traverse() applies the nest shading,
   or they would be lit as if standing in an open field a hundred units
   underground.
   ========================================================================== */

// per-kind ellipsoid radii, in the same local units as antMesh.js's body
// parts (multiplied by the avatar scale where they are held)
const ITEM_SHAPE = {
  graine: { r: [0.95, 0.78, 1.30], color: 0xd9c184, emissive: 0x000000 },
  brindille: { r: [2.90, 0.26, 0.26], color: 0x7a5228, emissive: 0x000000 },
  miellat: { r: [0.90, 0.88, 0.90], color: 0xe8a83c, emissive: 0x3a2405 },
};

const GROUND_SCALE = 2.0;    // items lying on the ground are drawn at world
                             // scale, not at the queen's local scale
const PILE_SLOTS = 12;       // how many dropped items are drawn on the pile

let itemGeo = null;
function sharedGeo() {
  if (!itemGeo) itemGeo = new THREE.SphereGeometry(1, 10, 7);
  return itemGeo;
}

const matCache = new Map();
function itemMaterial(kind) {
  let m = matCache.get(kind);
  if (!m) {
    const s = ITEM_SHAPE[kind];
    m = new THREE.MeshStandardMaterial({ color: s.color, emissive: s.emissive, roughness: 0.7, metalness: 0.02 });
    matCache.set(kind, m);
  }
  return m;
}

const _m4 = new THREE.Matrix4();
const _vx = new THREE.Vector3(), _vy = new THREE.Vector3(), _vz = new THREE.Vector3(), _vp = new THREE.Vector3();

function placeEllipsoid(mesh, pos, xAxis, yAxis, zAxis) {
  _vx.set(xAxis[0], xAxis[1], xAxis[2]);
  _vy.set(yAxis[0], yAxis[1], yAxis[2]);
  _vz.set(zAxis[0], zAxis[1], zAxis[2]);
  _m4.makeBasis(_vx, _vy, _vz);
  _vp.set(pos[0], pos[1], pos[2]);
  _m4.setPosition(_vp);
  mesh.matrix.copy(_m4);
}

function newItem(kind) {
  const mesh = new THREE.Mesh(sharedGeo(), itemMaterial(kind));
  mesh.matrixAutoUpdate = false;
  mesh.castShadow = true;
  mesh.visible = false;
  return mesh;
}

/** An item lying flat on the ground at (x, z), rotated by `spin`. */
function layFlat(mesh, kind, x, z, spin, lift = 0) {
  const r = ITEM_SHAPE[kind].r.map((v) => v * GROUND_SCALE);
  const c = Math.cos(spin), s = Math.sin(spin);
  placeEllipsoid(mesh,
    [x, groundY(x, z) + r[1] * 0.9 + lift, z],
    [c * r[0], 0, s * r[0]], [0, r[1], 0], [-s * r[2], 0, c * r[2]]);
  mesh.visible = true;
}

export function createProps({ scene, profile = PLAYER_AVATAR }) {
  const group = new THREE.Group();
  group.name = 'gameplay-props';
  scene.add(group);

  // ---- carried item: one mesh per kind, at most one visible ---------------
  const carried = {};
  for (const kind of Object.keys(ITEM_SHAPE)) {
    carried[kind] = newItem(kind);
    group.add(carried[kind]);
  }

  // ---- the pile ----------------------------------------------------------
  const pile = [];
  for (let i = 0; i < PILE_SLOTS; i++) {
    const m = newItem('graine');
    pile.push(m);
    group.add(m);
  }
  let pileDrawn = -1;

  // ---- stand-in node markers (only while the world has no nodes) ---------
  const provisional = nodesAreProvisional();
  const markers = [];
  if (provisional) {
    for (const n of resourceNodes()) {
      // three items per node, so a node reads as a small clutch rather than
      // one floating bead — and so an emptied node visibly thins out
      const clutch = [];
      for (let k = 0; k < 3; k++) {
        const m = newItem(n.kind);
        group.add(m);
        clutch.push(m);
      }
      markers.push({ node: n, clutch, drawn: -1 });
    }
  }

  function updateMarkers() {
    for (const mk of markers) {
      const n = mk.node;
      const shown = Math.max(0, Math.min(mk.clutch.length, n.amount));
      if (shown === mk.drawn) continue;
      mk.drawn = shown;
      for (let k = 0; k < mk.clutch.length; k++) {
        if (k < shown) {
          const a = (k / mk.clutch.length) * Math.PI * 2 + n.id;
          layFlat(mk.clutch[k], n.kind, n.x + Math.cos(a) * 3.2, n.z + Math.sin(a) * 3.2, a);
        } else {
          mk.clutch[k].visible = false;
        }
      }
    }
  }

  function updatePile(cache) {
    if (!cache) return;
    if (cache.total === pileDrawn) return;
    pileDrawn = cache.total;
    // dropped items spiral outward from the first one, so the pile visibly
    // grows toward the founding threshold instead of stacking in place
    let i = 0;
    for (const [kind, n] of Object.entries(cache.items)) {
      for (let k = 0; k < n && i < pile.length; k++, i++) {
        const a = i * 2.399, rad = 1.6 + i * 1.15;   // golden-angle scatter
        const m = pile[i];
        m.material = itemMaterial(kind);
        layFlat(m, kind, cache.x + Math.cos(a) * rad, cache.z + Math.sin(a) * rad, a * 1.7);
      }
    }
    for (; i < pile.length; i++) pile[i].visible = false;
  }

  function updateCarried(ant, carrying) {
    for (const kind of Object.keys(carried)) carried[kind].visible = false;
    if (!carrying) return;
    const mesh = carried[carrying.kind];
    if (!mesh) return;
    const mat = antMatrix(ant);
    const b = mat.basis, s = mat.scale;
    const M = (ant.profile || profile).body.mandible;
    // just past the mandible tips, low enough to sit between them
    const at = [0, M.tip[1] - 0.15, M.tip[2] + 0.55];
    const r = ITEM_SHAPE[carrying.kind].r;
    placeEllipsoid(mesh, localToWorld(mat, at),
      scl3(b.side, r[0] * s), scl3(b.up, r[1] * s), scl3(b.fwd, r[2] * s));
    mesh.visible = true;
  }

  /** Call once a frame with the ant and harvest.js's state. */
  function update(ant, hstate) {
    updateCarried(ant, hstate.carrying);
    updatePile(hstate.cache);
    if (provisional) updateMarkers();
  }

  function dispose() {
    scene.remove(group);
  }

  return { group, update, dispose, provisional };
}
