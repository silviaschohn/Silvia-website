import { defineCollection, z } from 'astro:content';

// Schema for "Imagine" (Experiential Design) projects.
// Every project file in src/content/imagine/ must follow this shape.
// Adding a new project = copy an existing .md file, change the fields.
// Set featured: true to pull a project into the homepage's Featured section.
const imagine = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(), // controls position in the sidebar + scroll order
    blurb: z.string(),
    images: z.array(z.string()),
    imageFolder: z.string(),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(), // specific image for the homepage card; falls back to images[0]
  }),
});

const build = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    blurb: z.string(),
    images: z.array(z.string()),
    imageFolder: z.string(),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
  }),
});

const direct = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    blurb: z.string(),
    images: z.array(z.string()),
    imageFolder: z.string(),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
  }),
});

export const collections = { imagine, build, direct };
