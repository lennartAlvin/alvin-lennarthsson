# Developer portfolio (static)

## What This Is

A single-page, static developer portfolio for recruiters, hiring managers, and collaborators. It presents a hero, about copy, featured projects, strengths, a compact tools list, and contact placeholders. The site is built with Vite, React, TypeScript, and Tailwind CSS, deployable to GitHub Pages with no backend.

## Core Value

Visitors can quickly understand who you are as a developer, see representative work, and contact you — all from one fast, readable page.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Replace placeholder name, links, and project URLs with real content
- [ ] Set Vite `base` for the target GitHub Pages URL and verify deploy
- [ ] Optional: add CI (GitHub Actions) for automatic deploys

### Out of Scope

- Backend, CMS, or database — static-only by design
- Blog, multi-page routing, or authenticated areas — single-page portfolio only
- Heavy animation or marketing-style landing patterns — keep minimal and professional

## Context

Greenfield project initialized from an empty folder. Target audience: technical hiring and peers. Tone: slightly casual, friendly, confident without arrogance; avoid agency-style or overly salesy copy. Design: minimal dark theme, strong spacing, clear hierarchy, responsive layout, subtle motion only where it helps.

## Constraints

- **Tech stack:** Vite, React, TypeScript, Tailwind CSS — keep dependencies minimal
- **Hosting:** Must work as fully static output (GitHub Pages compatible)
- **Content:** Static arrays in `src/data/` for easy edits

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Single-page sections with anchor navigation | Simple, fast, no router needed for GH Pages | — Pending |
| Data in `src/data/*.ts` | Easy to customize without touching layout | — Pending |
| Default `base: '/'` in Vite | Local dev and root-hosted sites; user sets repo path for project Pages | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):

1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):

1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-27 after initialization*
