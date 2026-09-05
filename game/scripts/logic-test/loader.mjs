// Node module-resolution hook for scripts/test-logic.mjs. Its only job is to
// redirect any import of world/texturing.js to texturing-stub.mjs in this
// same directory.
//
// Why this exists: terrain.js, founding.js and underground.js are otherwise
// plain, DOM-free geometry/math modules (three.js core, noise, vector math)
// that run fine under plain `node`. texturing.js is the one exception — it
// touches `document.createElement('canvas')` and THREE.TextureLoader to
// decode PNGs, neither of which exist outside a browser. Since none of the
// logic under test (ground height, containment, founding clearance) reads
// pixel data, swapping in inert stand-ins lets the real production modules
// run unmodified.

export async function resolve(specifier, context, nextResolve) {
  if (specifier.endsWith('/texturing.js')) {
    return { url: new URL('./texturing-stub.mjs', import.meta.url).href, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}
