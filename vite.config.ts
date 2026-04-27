import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: production build must use '/<repository-name>/' (case-sensitive).
// Local dev uses '/' so assets load correctly on localhost.
// If you rename the repo, update GITHUB_PAGES_BASE below.
const GITHUB_PAGES_BASE = '/alvin-lennarthsson/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? GITHUB_PAGES_BASE : '/',
}));
