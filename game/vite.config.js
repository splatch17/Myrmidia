import { defineConfig } from 'vite';

// Relative base so the build can be served from any subpath
// (GitHub Pages, raw.githack.com preview links, etc.) without reconfiguring.
export default defineConfig({
  base: './',
  build: {
    target: 'es2020'
  }
});
