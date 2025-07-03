import { z, defineCollection } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    // Add optional social sharing image (falls back to main image if not provided)
    socialImage: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
  }),
});

// Define the schema for about content
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastUpdated: z.date(),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
  'about': aboutCollection,
};