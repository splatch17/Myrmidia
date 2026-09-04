/* Loads the real world modules in plain Node — no browser, no bundler, no GL.
   Everything measured against this is the game's own data (world/grass.js's
   footprints, world/nestDecor.js's ROCKS/MUSHROOMS, world/resources.js's
   RESOURCE_NODES), not a re-creation of it, which is the only way a bench can
   say anything about the game.

   Two stubs are needed and only two: Vite's asset imports (the loader hook
   next to this file) and the handful of DOM entry points Three's TextureLoader
   touches while building a material. Nothing here fakes geometry or maths. */

const IMG = () => ({ style: {}, addEventListener() {}, removeEventListener() {}, setAttribute() {}, width: 1, height: 1 });

export function stubDom() {
  if (globalThis.document) return;
  globalThis.document = {
    createElementNS: () => IMG(),
    createElement: () => IMG(),
    getElementById: () => null,
    addEventListener() {}, removeEventListener() {},
    body: { appendChild() {}, style: {} },
  };
  globalThis.window = globalThis;
  globalThis.self = globalThis;
  globalThis.requestAnimationFrame = () => 0;
  globalThis.cancelAnimationFrame = () => {};
  globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
}

export async function loadWorld() {
  stubDom();
  const world = await import('../../src/world/index.js');
  return { W: world, built: world.createWorld() };
}
