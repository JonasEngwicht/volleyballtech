import { getCollection, type CollectionEntry } from 'astro:content';
import { sections, amazonSearchUrl, featuredProducts } from '../data/site';

export type Article = CollectionEntry<'articles'>;
export type Product = CollectionEntry<'products'>;
export type Drill = CollectionEntry<'drills'>;

const articleDate = (a: Article) => (a.data.updated ?? a.data.published).getTime();

export async function getArticles(section?: string): Promise<Article[]> {
  const all = await getCollection(
    'articles',
    ({ data }) => !data.draft && (!section || data.section === section),
  );
  return all.sort((a, b) => articleDate(b) - articleDate(a));
}

export async function getProducts(category?: string): Promise<Product[]> {
  const all = await getCollection(
    'products',
    ({ data }) => !data.draft && (!category || data.category === category),
  );
  return all.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export async function getDrills(): Promise<Drill[]> {
  const all = await getCollection('drills', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
}

export const articleUrl = (a: Article) => `/${a.data.section}/${a.id}/`;
export const productUrl = (p: Product) => `/gear/${p.data.category}/${p.id}/`;
export const drillUrl = (d: Drill) => `/drills/${d.id}/`;

export const sectionLabel = (id: string) => sections.find((s) => s.id === id)?.label ?? id;

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** Affiliate link for a product: an explicit affiliateUrl, otherwise an Amazon search with our tag. */
export const productBuyUrl = (p: Product): string | undefined =>
  p.data.affiliateUrl ?? (p.data.amazon ? amazonSearchUrl(p.data.amazonQuery ?? p.data.name) : undefined);

export const productBuyLabel = (p: Product): string =>
  p.data.affiliateUrl ? `Check price${p.data.retailer ? ` at ${p.data.retailer}` : ''}` : 'Check price on Amazon';

/** Product name with its category keyword, e.g. "ASICS Gel-Rocket 12 Volleyball Shoes". */
export function productHeading(p: Product): string {
  const name = p.data.name;
  if (p.data.category === 'shoes' && !/shoe/i.test(name)) return `${name} Volleyball Shoes`;
  if (p.data.category === 'balls' && !/ball/i.test(name)) return `${name} Volleyball`;
  return name;
}

/** Products that a piece of Markdown links to, in order of first mention. */
export function productsInText(body: string | undefined, products: Product[]): Product[] {
  const found: Product[] = [];
  for (const match of (body ?? '').matchAll(/\/gear\/[a-z-]+\/([a-z0-9-]+)\//g)) {
    const product = products.find((p) => p.id === match[1]);
    if (product && !found.includes(product)) found.push(product);
  }
  return found;
}

/** Featured products first, then the rest in their existing order. */
export function byFeatured(products: Product[]): Product[] {
  const rank = (p: Product) => {
    const i = featuredProducts.indexOf(p.id);
    return i === -1 ? featuredProducts.length : i;
  };
  return [...products].sort((a, b) => rank(a) - rank(b));
}

export const levelLabel = (levels: string[]): string =>
  levels.length === 3 ? 'All levels' : levels.map((l) => l.charAt(0).toUpperCase() + l.slice(1)).join(', ');

/** Meta description: whole sentences only, kept to roughly what search results show. */
export function metaDescription(text: string, max = 165): string {
  if (text.length <= max) return text;
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [text];
  let out = '';
  for (const sentence of sentences) {
    if (out && (out + sentence).trim().length > max) break;
    out += sentence;
  }
  out = out.trim();
  if (out.length >= 110 && out.length <= max) return out;
  // The first sentence alone is too short or too long: cut at a word instead.
  return text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[\s,;:–-]+$/, '') + '…';
}
