# Phase 1: Portfolio MVP (static) - Context

**Gathered:** 2026-04-27  
**Status:** Ready for planning  
**Note:** Context was captured **retroactively**: the codebase already implements Phase 1. Decisions below match the **as-built** implementation and prior CV/redesign work. Refine via edit or a short follow-up if anything should change before `/gsd-plan-phase 1`.

<domain>
## Phase Boundary

Deliver a **single-page, fully static** developer portfolio (no backend, CMS, or runtime APIs) that:

- Runs locally with **npm** and builds to **`dist/`** for static hosting.
- Is **compatible with GitHub Pages**, including documented **`vite.config` `base`** guidance for project sites.
- Presents hero, about, featured projects, strengths, tools, and contact; smooth in-page navigation and responsive layout.

Scope is **fixed by** `.planning/ROADMAP.md` Phase 1 and **REQ** EXP/UX/TEC in `.planning/REQUIREMENTS.md`. Phase 2 covers deploy hardening, CI, and remaining URL polish.

</domain>

<decisions>
## Implementation Decisions

### Stack and tooling
- **D-01:** **Vite 6** + **React 18** + **TypeScript** + **Tailwind CSS 3** — no extra animation libraries; motion via CSS keyframes + a small **`Reveal`** wrapper (`IntersectionObserver`).
- **D-02:** **No client-side router** — anchor sections only (`id` + smooth scroll); appropriate for GitHub Pages static hosting.
- **D-03:** **No runtime API calls** — all copy and project data live in **`src/data/site.ts`** and **`src/data/projects.ts`**.

### Visual and UX direction
- **D-04:** **Light, professional** palette (cool neutrals + single **teal** accent), **Plus Jakarta Sans** via Google Fonts, subtle **grain** overlay and **radial** hero wash — not a dark theme for this milestone.
- **D-05:** **Scroll spy** in header (`useActiveSection`) + **sticky** header with blur; **mobile menu** with escape and body scroll lock.
- **D-06:** **Motion:** staggered **fade-up** on scroll; **`prefers-reduced-motion`** respected globally in CSS and hooks.
- **D-07:** **Accessibility:** visible **focus** styles on interactive elements, **skip to content** link in **`App.tsx`**.

### Content and language
- **D-08:** **English** for all portfolio copy; biographical and project content is aligned with the user’s **CV** (Alvin Lennarthsson, WIS/GameLimiter, KlunkGolf, booking project, education, contact).
- **D-09:** **LinkedIn** URL and **KlunkGolf** repo/live URLs may still need user verification; **GameLimiter** treated as **non-public** — no forced GitHub/demo links.

### Projects section layout and links
- **D-10:** **Asymmetric layout:** first project **featured** (wider / split on large screens); remaining two in a **2-column** grid on **`md+`**.
- **D-11:** **`githubUrl` / `demoUrl` optional** on `Project`. If both absent, show **“Ask about this work”** → **`#contact`** (avoids dead `href="#"`).
- **D-12:** Employer product (**GameLimiter**) uses **contact CTA** unless/until a **public** marketing or repo URL is approved.

### Deployment
- **D-13:** Default **`base: '/'`** in **`vite.config.ts`** for local and root-hosted deploys; **README** documents setting **`base: '/<repo>/'`** for GitHub **project** Pages.

### Verification / docs hygiene (remaining for Phase 1 closure)
- **D-14:** Treat **REQUIREMENTS.md** checkboxes and **PROJECT.md** “Active” bullets as **out of date** until someone runs a **manual pass** (or plan) to mark items **done** after deploy smoke-test.
- **D-15:** **Footer** legal links point to **example.com** placeholders — replace or remove before public launch.

### Claude's Discretion (planning / small tweaks)
- Exact **spacing tokens**, minor **typography** tweaks, and **OG image** addition.
- Optional **GitHub Actions** workflow — defer to Phase 2 unless folded into Phase 1 verification plan.

</decisions>

<specifics>
## Specific Ideas

- Portfolio should read as a **personal developer** site for **recruiters and peers**, not an agency landing page.
- **Tone:** friendly, professional, confident — avoid hype and buzzword soup.
- **Real name and work history** from CV are reflected in **`site.ts`** / **`projects.ts`**; **phone** and **email** are on the contact section.

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning and scope
- `.planning/ROADMAP.md` — Phase 1 goal, success criteria, UI hint.
- `.planning/REQUIREMENTS.md` — EXP-01…TEC-04 traceability (update statuses when verified).
- `.planning/PROJECT.md` — core value, constraints, active vs out-of-scope (sync with implementation).

### Product / technical
- `README.md` — local dev, build, GitHub Pages **`base`** notes.
- `vite.config.ts` — **`base`**, plugins.
- `index.html` — title, meta, font preconnect.

### Content (single source of truth)
- `src/data/site.ts` — hero, about, strengths, tools, contact.
- `src/data/projects.ts` — project cards, optional URLs.

No separate SPEC.md for this phase — requirements live in **REQUIREMENTS.md** + roadmap.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable assets
- **`src/components/Section.tsx`** — section shell, optional **`tone`** (`default` | `muted`).
- **`src/components/Reveal.tsx`** — scroll-triggered reveal; **`delayMs`** for stagger.
- **`src/components/ProjectCard.tsx`** — featured variant; conditional GitHub / demo / contact CTA.
- **`src/hooks/useActiveSection.ts`**, **`usePrefersReducedMotion.ts`** — nav highlight and a11y motion.

### Established patterns
- **Data-only edits** for copy: prefer changing **`src/data/*`** over hardcoding in components.
- **Tailwind theme** extensions in **`tailwind.config.js`** (`canvas`, `surface`, `ink`, `accent`, shadows, keyframes).

### Integration points
- **`App.tsx`** composes all sections; **`Header`** / **`Footer`** frame **`main`**.
- Static assets under **`public/`** (e.g. **`favicon.svg`**).

</code_context>

<deferred>
## Deferred Ideas

- **Phase 2 (roadmap):** production deploy verification, final **`base`**, optional **CI**, confirm **LinkedIn** slug and **KlunkGolf** public URLs, **`og:image`**.
- **i18n** (Swedish/English toggle) — new capability; not in Phase 1.
- **Blog**, **multi-page** routing, **analytics** — backlog / later phases.

</deferred>

---

*Phase: 01-portfolio-mvp*  
*Context gathered: 2026-04-27*
