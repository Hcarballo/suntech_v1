import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({  
  plugins: [react()],
  base: '/suntech_v1/', // 👈 Esta línea es la clave
});