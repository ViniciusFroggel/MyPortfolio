import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/meu-repo/', // <-- nome do repositório (ex.: /my-portfolio-react/)
});
