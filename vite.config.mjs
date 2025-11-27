import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'shopxfe',   
  },
  base: '/shopxfe/',   // required for correct routing
});
