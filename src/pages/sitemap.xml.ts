import type { APIRoute } from 'astro';
import { site, sections, categories } from '../data/site';
import { getArticles, getProducts, getDrills, articleUrl, productUrl, drillUrl } from '../lib/content';

export const GET: APIRoute = async () => {
  const [articles, products, drills] = await Promise.all([getArticles(), getProducts(), getDrills()]);

  const urls: { path: string; lastmod?: Date }[] = [
    { path: '/' },
    { path: '/gear/' },
    { path: '/drills/' },
    { path: '/about/' },
    { path: '/how-we-research/' },
    { path: '/community/' },
    { path: '/affiliate-disclosure/' },
    ...sections.map((s) => ({ path: `/${s.id}/` })),
    ...categories.map((c) => ({ path: `/gear/${c.id}/` })),
    ...articles.map((a) => ({ path: articleUrl(a), lastmod: a.data.updated ?? a.data.published })),
    ...products.map((p) => ({ path: productUrl(p), lastmod: p.data.updated })),
    ...drills.map((d) => ({ path: drillUrl(d), lastmod: d.data.published })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url><loc>${site.url}${u.path}</loc>` +
          (u.lastmod ? `<lastmod>${u.lastmod.toISOString().slice(0, 10)}</lastmod>` : '') +
          `</url>`,
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
