import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/meu-repo/', // se for GitHub Pages
  optimizeDeps: {
    include: ['aos'] // força Vite a pré-bundlar o AOS
  }
});
