import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// Define your new Project collection here
const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    pubDate: z.coerce.date(),
    venue: z.string(),
    description: z.string(),
    image: z.string(), // This will be your 4:3 research figure
    projectUrl: z.string().url().optional(),
    pdfUrl: z.string().url().optional(),
    arxivUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, project };