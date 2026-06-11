import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    global: 'globalThis',
  },
  esbuild: {
    loader: 'jsx',
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
