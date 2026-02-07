# Architecture Overview

## System Type
**Dual-nature project:**
1. **Static website** — archived GoDaddy monolith HTML pages at the root
2. **Vite + React + TypeScript SPA** — modern app in `src/`, builds to `/demo`

## Project Layout

```
┌─────────────────────────────────────────────────┐
│                   Browser                       │
├────────────────────┬────────────────────────────┤
│  /                 │  /demo/                    │
│  Static HTML       │  React SPA                 │
│  (monolith pages)  │  (Vite build output)       │
└────────────────────┴────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│              Static File Server                 │
│                                                 │
│  Root: monolith HTML files (~5 MB each)         │
│  /demo/: Vite-built React app                   │
└─────────────────────────────────────────────────┘
```

## Static Site Pages (Legacy)

| Route            | File                       | Purpose                                   |
|------------------|----------------------------|-------------------------------------------|
| `/`              | `index.html`               | Homepage — property overview, photos       |
| `/contact-us`    | `contact-us/index.html`    | Contact information and form               |
| `/forms`         | `forms/index.html`         | Downloadable lease/application forms       |
| `/historic-area` | `historic-area/index.html` | Information about Point Richmond history   |
| `/listings`      | `listings/index.html`      | Available rental units and pricing         |

## React App (`src/`)

| File              | Purpose                                  |
|-------------------|------------------------------------------|
| `src/index.html`  | Vite HTML entry point                    |
| `src/main.tsx`    | React root mount (`createRoot`)          |
| `src/App.tsx`     | Main application component               |
| `src/App.css`     | Application styles                       |
| `src/vite-env.d.ts` | Vite client type declarations         |

### Build Pipeline
- **Dev:** `vite` serves from `src/` with HMR at `localhost:5173/demo/`
- **Build:** `tsc -b && vite build` → type-checks then outputs to `/demo`
- **Preview:** `vite preview` serves the built `/demo` directory

### Vite Configuration (`vite.config.ts`)
- `root: "src"` — Vite operates from `src/` directory
- `base: "/demo/"` — all asset paths prefixed with `/demo/`
- `build.outDir: "../demo"` — output to project root `/demo`
- `build.emptyOutDir: true` — clean build each time

## Data Flow
- **Static site:** No dynamic data. All content is static HTML with inlined assets.
- **React app:** Client-side SPA. No backend API yet.
- **Forms:** The original contact form was handled by GoDaddy's form processing
  service. Post-migration, form handling is TBD.

## Known Limitations
1. **Monolith HTML files are very large** (~5 MB each) due to inlined base64 images.
2. **Duplicated assets** — the same CSS/JS/images are inlined in every monolith page.
3. **No shared navigation** between static pages and the React app.
4. **No backend API** — the React app is client-side only for now.
