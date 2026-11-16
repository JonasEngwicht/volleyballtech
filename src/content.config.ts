import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categoryIds, sectionIds } from './data/site';

const level = z.enum(['beginner', 'intermediate', 'advanced']);

// Files starting with "_" (e.g. _TEMPLATE.md) are ignored.
const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(sectionIds),
    category: z.enum(categoryIds).optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    brand: z.string(),
    category: z.enum(categoryIds),
    summary: z.string(),
    affiliateUrl: z.string().url().optional(),
    retailer: z.string().optional(),
    priceRange: z.enum(['$', '$$', '$$$']).optional(),
    bestFor: z.array(z.string()).default([]),
    level: z.array(level).default([]),
    specs: z.record(z.string(), z.string()).default({}),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    testedHandsOn: z.boolean().default(false),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const drills = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/drills' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    skill: z.enum(['serving', 'passing', 'setting', 'attacking', 'blocking', 'defense', 'footwork', 'jumping']),
    level,
    players: z.string(),
    duration: z.string(),
    equipment: z.array(z.enum(categoryIds)).default([]),
    published: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, products, drills };
