# Roadmap: Developer portfolio (static)

**Milestone:** v1 static portfolio  
**Granularity:** Coarse

## Phase 1 — Portfolio MVP (static)

**Goal:** Ship a complete single-page portfolio that runs locally and can deploy to GitHub Pages with documented `base` configuration.

**Requirements:** EXP-01 … EXP-06, UX-01 … UX-03, TEC-01 … TEC-04

**Success criteria**

1. `npm install` and `npm run dev` show all sections with placeholder content.
2. `npm run build` produces a working `dist/` with no runtime network dependencies.
3. Navigation scrolls smoothly to sections; mobile menu works on small viewports.
4. README explains GitHub Pages and how to set `base` for project sites.

**UI hint:** yes

**Depends on:** —

---

## Phase 2 — Personalization & deploy hardening (optional)

**Goal:** Replace placeholders, set correct `base`, and optionally add automated Pages deploy.

**Requirements:** (from PROJECT.md Active list after v1 validation)

**Success criteria**

1. Real name, links, and project URLs in `src/data/`.
2. Production deploy verified on GitHub Pages with correct assets.
3. Optional: CI workflow documented or added.

**Depends on:** Phase 1

---

## Summary

| # | Phase | Goal |
|---|-------|------|
| 1 | Portfolio MVP | Working static site + docs |
| 2 | Personalization | Real content + deploy polish |
