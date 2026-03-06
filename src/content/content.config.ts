import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Important for the new Content Layer

const project = defineCollection({
  // This tells Astro to look in src/data/project for any .md files
  loader: glob({ pattern: "**/*.md", base: "./src/data/project" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    pubDate: z.coerce.date(),
    venue: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = { project };