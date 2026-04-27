import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: set base to '/<repository-name>/'
// For a user/org site (username.github.io) or local dev, use '/'
// See README for details.
export default defineConfig({
  plugins: [react()],
  base: '/alvin-lennarthsson/',
});
