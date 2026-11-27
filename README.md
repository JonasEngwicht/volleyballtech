# VolleyballTech

Source for [volleyballtech.com](https://volleyballtech.com) – a volleyball gear directory with guides, drills and community.

Built with [Astro](https://astro.build), deployed to Cloudflare Workers (static assets). Every push to `main` triggers a build.

## Content

| What | Folder | URL |
| --- | --- | --- |
| Articles (learn, guides, best picks, comparisons) | `src/content/articles/` | `/<section>/<file-name>/` |
| Products | `src/content/products/` | `/gear/<category>/<file-name>/` |
| Drills | `src/content/drills/` | `/drills/<file-name>/` |

Sections: `learn` (rules and skills), `guides`, `best`, `compare`. Diagrams live in `public/diagrams/`.

Files starting with `_` are ignored. Set `draft: true` to hide an entry.

### Product pages

Copy `src/content/products/_TEMPLATE.md`. Besides specs, pros and cons, a product can have:

- `verdict` – the bottom line, shown in the "Quick take" box
- `faq` – questions and answers (also sent to search engines as FAQ data)
- `alternatives` – file names of products for the comparison table

Every product gets "Check price on Amazon" buttons automatically. The link is an Amazon search for
`amazonQuery` (or the product name) with the Associates tag from `src/data/site.ts`. Articles and drills
list every product they link to, with the same button, in a "Gear mentioned" block.

Category texts (intro, buying checklist, FAQ) and the products featured on the homepage live in
`src/data/site.ts`.

## Commands

- `npm install` – install dependencies
- `npm run dev` – local preview at http://localhost:4321
- `npm run build` – build to `dist/`
