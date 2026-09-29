import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  subcategory: z.string().optional(),
  draft: z.boolean().default(false),
  cover: z.string().optional(),
});

const hobby = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/hobby' }),
  schema: postSchema,
});

const study = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/study' }),
  schema: postSchema,
});

const minecraftItemSchema = z.object({
  name: z.string(),
  category: z.enum(['블록', '아이템', '몹', '작물', '기타']),
  subcategory: z.string(),
  description: z.string(),
  acquisition: z.string(),
  uses: z.array(z.string()),
  relatedItems: z.array(z.string()).default([]),
  farming: z.string().optional(),
  version: z.string().optional(),
});

const minecraft = defineCollection({
  loader: file('src/content/minecraft/items.json'),
  schema: minecraftItemSchema,
});

export const collections = { hobby, study, minecraft };
