import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// viteSingleFile inlines all JS/CSS into dist/index.html so the built page
// can be opened by double-clicking it (file://) with no server.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
});
