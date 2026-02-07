# Contributing to The Point at 580

## About This Project
This is the website for The Point at 580, a rental property at 227–249 Tewksbury Ave.,
Point Richmond, CA 94801. The site is currently a set of static HTML files archived from
GoDaddy Website Builder.

## Prerequisites
- **Git** — for version control
- **A static file server** — for local preview. Options:
  - Python 3: `python3 -m http.server`
  - Node.js: `npx serve`
  - VS Code: Live Server extension

## Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd thepointat580.com

# Preview locally
python3 -m http.server 8080
# Then open http://localhost:8080
```

## Project Structure

```
thepointat580.com/
├── index.html              # Homepage
├── contact-us/index.html   # Contact page
├── forms/index.html        # Downloadable forms
├── historic-area/index.html# Historic area info
├── listings/index.html     # Rental listings
└── README.md
```

## Important Notes for Contributors

### Working with Monolith HTML Files
- Each HTML file is **~5 MB** because all assets (CSS, JS, images) are inlined as
  base64 data URIs.
- **Do NOT try to open these in a basic text editor** — use VS Code or similar with
  word-wrap disabled and search (Ctrl/Cmd+F) to navigate.
- Use `grep` or your editor's search to locate the section you want to edit.

### Content Edits
To update text content (e.g., phone numbers, addresses, listings):
1. Open the relevant HTML file
2. Search for the current text
3. Replace with the new text
4. Test locally before committing

### Image Updates
Images are embedded as base64 data URIs (e.g., `data:image/jpeg;base64,...`).
To update an image:
1. Encode your new image: `base64 -i new-image.jpg`
2. Find the existing `data:image/...;base64,...` string for the image you want to replace
3. Swap in the new base64 string

<!-- TODO: If the site is modernized, update these instructions to reflect the new
asset pipeline (e.g., placing images in /public or /assets) -->

## Development Conventions
- **Trunk-based development** — commit directly to `master` (or short-lived branches)
- **Commit messages** — use conventional style: `fix:`, `content:`, `chore:`, etc.
- **No linting/formatting tools** are currently configured
  <!-- TODO: Consider adding Prettier for HTML formatting if the site is modernized -->

## Deployment
<!-- TODO: Document the deployment process. Options may include:
  - `git push` triggers auto-deploy (Cloudflare Pages, Netlify, GitHub Pages)
  - Manual upload to hosting provider
  - Currently unknown — confirm with project owner
-->
