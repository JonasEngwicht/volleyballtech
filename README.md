# VolleyballTech

Source for [volleyballtech.com](https://volleyballtech.com) – a volleyball gear directory with guides, drills and community.

Built with [Astro](https://astro.build), deployed to Cloudflare Workers (static assets). Every push to `main` triggers a build.

## Content

| What | Folder | URL |
| --- | --- | --- |
| Articles (guides, best picks, comparisons) | `src/content/articles/` | `/<section>/<file-name>/` |
| Products | `src/content/products/` | `/gear/<category>/<file-name>/` |
| Drills | `src/content/drills/` | `/drills/<file-name>/` |

Files starting with `_` are ignored. Set `draft: true` to hide an entry.

## Commands

- `npm install` – install dependencies
- `npm run dev` – local preview at http://localhost:4321
- `npm run build` – build to `dist/`
