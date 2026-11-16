import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from '../data/site';

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
