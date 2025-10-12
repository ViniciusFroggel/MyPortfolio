import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // necessário para Vercel
  optimizeDeps: {
    include: ['aos'] // pré-bundling do AOS
  },
  build: {
    outDir: 'dist', // garante que o output fique na pasta correta
    rollupOptions: {
      input: 'index.html' // garante que o Vite encontre o entry point
    }
  }
});
