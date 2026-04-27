# Developer portfolio (static)

A single-page developer portfolio built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. It is fully static — no backend, database, or server-side code — and is suitable for **GitHub Pages** or any static host.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (comes with Node)

## Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Customize content

- **Bio, hero, strengths, tools, contact:** edit `src/data/site.ts`
- **Projects:** edit `src/data/projects.ts`
- **Page title / meta:** edit `index.html`

## Deploy to GitHub Pages

GitHub Pages serves your site from a repository. For a **project site** the site URL is:

`https://<username>.github.io/<repository-name>/`

Vite needs the **`base`** option to match that path so asset URLs resolve correctly.

1. Open `vite.config.ts` and set `base` to your repository name with slashes, for example:

   ```ts
   base: '/PortfolioPageDraft/',
   ```

   Use your **actual** repo name — case-sensitive.

2. If you use a **user or organization** site (`username.github.io` with the repo named `username.github.io`), use:

   ```ts
   base: '/',
   ```

3. Build:

   ```bash
   npm run build
   ```

4. Deploy the `dist` folder to GitHub Pages. Common options:

   - **GitHub Actions:** add a workflow that runs `npm ci`, `npm run build`, and publishes `dist` with [actions/upload-pages-artifact](https://github.com/actions/upload-pages-artifact) / [actions/deploy-pages](https://github.com/actions/deploy-pages) (configure **Pages** → **Build and deployment** → **GitHub Actions** in the repo settings).
   - **Manual:** push the contents of `dist` to the `gh-pages` branch, or use a tool such as [`gh-pages`](https://www.npmjs.com/package/gh-pages) from your machine.

After the first deploy, confirm the site loads and that CSS/JS requests return 200 (wrong `base` usually shows a blank page or 404 on assets).

## Scripts

| Command         | Description              |
|----------------|--------------------------|
| `npm run dev`  | Local dev server         |
| `npm run build`| Production build → `dist`|
| `npm run preview` | Preview production build locally |

## Project structure

```
src/
  App.tsx
  main.tsx
  index.css
  components/     # UI sections and layout
  data/           # Static copy and project data
public/           # Static assets (favicon, etc.)
```

## License

Private / your choice — update this section for your repo.
