import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/conference/',
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  preview: {
    port: 4173,
  },
});

