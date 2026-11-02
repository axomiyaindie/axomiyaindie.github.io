import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    title_as: z.string(),
    description: z.string(),
    description_as: z.string(),
    link: z.string().url(),
    logo: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    title_as: z.string(),
    description: z.string(),
    description_as: z.string(),
    link: z.string().url().optional(),
  }),
});

export const collections = { projects, blog };