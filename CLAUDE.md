# CLAUDE.md — Project Guidelines for AI Assistants

## Project Overview
**The Point at 580** (thepointat580.com) — a static website for a commercial/residential
rental property at 227–249 Tewksbury Ave., Point Richmond, CA 94801.

## Dual-Nature Project

This repo contains **two coexisting parts**:

1. **Static HTML site** (root) — archived GoDaddy monolith pages served at `/`
2. **Vite + React + TypeScript app** (`src/`) — modern app that builds to `/demo/`

## Static Site (Legacy Monolith)

Archived from GoDaddy Website Builder 8.0 using `monolith v2.7.0` on 2024-02-19.
All pages are self-contained HTML files with inlined assets (CSS, JS, images as base64
data URIs).

## React App (`src/`)

A Vite + React 19 + TypeScript app that builds to the `/demo` directory. This is the
active development area.

## Tech Stack
- **Static site:** HTML5, inline CSS/JS, base64 data URIs (monolith captures)
- **React app:** Vite 6, React 19, TypeScript 5.7
- **Hosting:** <!-- TODO: Confirm current hosting provider -->

## Project Structure
```
/
├── index.html               # Homepage (~5.7 MB monolith)
├── contact-us/index.html    # Contact page (monolith)
├── forms/index.html         # Downloadable forms (monolith)
├── historic-area/index.html # Point Richmond history (monolith)
├── listings/index.html      # Rental listings (monolith)
├── src/                     # Vite + React + TypeScript source
│   ├── index.html           # Vite entry HTML
│   ├── main.tsx             # React root mount
│   ├── App.tsx              # Main app component
│   ├── App.css              # Styles
│   └── vite-env.d.ts        # Vite type declarations
├── demo/                    # Build output (git-ignored)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── README.md
```

## Commands
```bash
npm run dev       # Start Vite dev server (localhost:5173/demo/)
npm run build     # Type-check + build to /demo
npm run preview   # Preview production build

# Static site preview (legacy pages only)
python3 -m http.server 8080
```

## Rules for AI Assistants

### General
1. **Be aware of the dual structure.** Static HTML at root, React app in `src/`.
2. **New feature work goes in `src/`.** Do not modify the monolith HTML files unless
   explicitly asked.

### Static HTML (monolith) files
3. **These are monolith captures.** Each HTML file is ~5 MB+ because all assets are
   inlined. Edits require careful navigation of very large files.
4. **Preserve the monolith structure** unless the user explicitly asks to decompose it.
5. **Be aware of file sizes.** The HTML files are too large to read in full — use
   grep/search to find specific sections before editing.
6. **External references** still point to `wsimg.com` (GoDaddy CDN) and
   `thepointat580.com`. Some may be broken since the site was archived.

### React app (`src/`)
7. **Use TypeScript** for all new code in `src/`.
8. **Follow Vite conventions** — entry point is `src/index.html`, root mount in
   `src/main.tsx`.
9. **Build output goes to `/demo`** (configured in `vite.config.ts`, git-ignored).

- Do not include 'Co-Authored-By' trailers or any AI attribution in git commit messages.
