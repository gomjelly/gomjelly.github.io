import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
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

export const collections = { hobby, study };
