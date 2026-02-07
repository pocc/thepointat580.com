# Tech Stack

## React App (`src/`)

### Core
| Technology              | Version   | Role                              |
|-------------------------|-----------|-----------------------------------|
| React                   | 19        | UI framework                      |
| React DOM               | 19        | DOM rendering                     |
| TypeScript              | ~5.7      | Type-safe JavaScript              |
| Vite                    | 6         | Dev server and build tool         |
| @vitejs/plugin-react    | 4         | React Fast Refresh + JSX          |

### Build & Dev
| Tool                    | Purpose                                  |
|-------------------------|------------------------------------------|
| `npm run dev`           | Vite dev server with HMR (port 5173)     |
| `npm run build`         | Type-check (`tsc -b`) + production build |
| `npm run preview`       | Preview production build locally         |

### Configuration Files
| File                | Purpose                                    |
|---------------------|--------------------------------------------|
| `package.json`      | Dependencies and scripts                   |
| `vite.config.ts`    | Vite config (base, root, output)           |
| `tsconfig.json`     | TypeScript project references              |
| `tsconfig.app.json` | App TypeScript config (strict, react-jsx)  |
| `tsconfig.node.json`| Node/Vite config TypeScript config         |

## Static Site (Legacy)

### Core
| Technology              | Role                                     |
|-------------------------|------------------------------------------|
| HTML5                   | Page structure and content               |
| CSS3 (inline)           | Styling — originally from GoDaddy themes |
| JavaScript (inline)     | Interactivity — GoDaddy runtime scripts  |
| GoDaddy Website Builder 8.0 | Original site builder (no longer active) |
| Monolith v2.7.0         | CLI tool used to archive pages as self-contained HTML |

## Hosting
| Technology              | Role                                     |
|-------------------------|------------------------------------------|
| <!-- TODO: Confirm -->  | Static file hosting                      |

## Tools Used in Development

| Tool        | Purpose                                               |
|-------------|-------------------------------------------------------|
| `npm`       | Package management and script running                 |
| `vite`      | Dev server and production bundler                     |
| `tsc`       | TypeScript type checking                              |
| `monolith`  | Archive web pages as single self-contained HTML files |
| `git`       | Version control                                       |
