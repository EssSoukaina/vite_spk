import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // This allows access over your network!
    port: 5175,   // Set it to match what Vite used (or pick another unused one)
  },
});
