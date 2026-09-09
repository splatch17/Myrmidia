// throwaway probe: what does the nest footprint look like along the axis?
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const PORT = 4181;
const URL = `http://localhost:${PORT}/`;

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try { const res = await fetch(url); if (res.ok) return resolve(); } catch { }
      if (Date.now() - start > timeoutMs) return reject(new Error('no server'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: gameDir, shell: true, stdio: 'pipe' });
await waitForServer(URL, 25000);
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=d3d11'] });
const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
page.on('pageerror', (e) => console.log('pageerror', e.message));
await page.goto(URL);
await page.waitForFunction(() => window.__ant && window.__foundNest, null, { timeout: 20000 });
await page.waitForTimeout(500);

const out = await page.evaluate(() => {
  const a = window.__ant;
  let site = null;
  for (let ang = 0; ang < 64 && !site; ang++) {
    const th = ang / 64 * Math.PI * 2;
    for (let r = 34; r <= 70; r += 2) {
      const x = a.x + Math.cos(th) * r, z = a.z + Math.sin(th) * r;
      if (window.__canFound(x, z).ok && window.__decorPenetration(x, z, window.__antRadius + 6) === 0) { site = { x, z }; break; }
    }
  }
  window.__foundNest(site.x, site.z);
  window.__digGallery();
  const n = window.__nest();
  const L = n.chamber, M = n.mouth;
  let ox = M.x - L.x, oz = M.z - L.z;
  const ol = Math.hypot(ox, oz); ox /= ol; oz /= ol;
  const rows = [];
  for (let r = 0; r <= 50; r += 2) {
    const x = L.x + ox * r, z = L.z + oz * r;
    const p = window.__nestAt(x, z);
    rows.push({ r, inside: p.inside, floor: +p.floorY.toFixed(2), ground: +p.ground.toFixed(2) });
  }
  return { approx: n.approx, chamber: L, mouth: M, entry: n.entry, mouthDist: ol, rows };
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
server.kill();
process.exit(0);
