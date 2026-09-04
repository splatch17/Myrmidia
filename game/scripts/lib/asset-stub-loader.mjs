/* Node import hook: makes `import url from './x.png'` (a Vite asset import,
   see world/texturing.js) resolvable outside Vite, so the world modules can
   be loaded and measured in plain Node with no browser and no bundler.
   The stub returns the file path as a string, which is exactly what Vite
   hands the module at run time — nothing that runs headless ever fetches it. */
const ASSET = /\.(png|jpg|jpeg|webp|ktx2|hdr|glb|gltf)(\?.*)?$/i;

export async function resolve(specifier, context, nextResolve) {
  if (ASSET.test(specifier)) {
    const url = new URL(specifier, context.parentURL).href;
    return { url, format: 'module', shortCircuit: true };
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (ASSET.test(url)) {
    return { format: 'module', shortCircuit: true, source: `export default ${JSON.stringify(url)};` };
  }
  return nextLoad(url, context);
}
