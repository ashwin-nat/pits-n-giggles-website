import { z, defineCollection } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    category: z.string(),
    image: image(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    // Add optional social sharing image (falls back to main image if not provided)
    socialImage: image().optional(),
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

// Define the schema for FAQ entries
const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number(),
    tags: z.array(z.string()).optional(),
    platforms: z.array(z.enum(['windows', 'macos', 'linux'])).optional(),
    searchTerms: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    updated: z.string().optional(),
    featured: z.boolean().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
  'about': aboutCollection,
  'faq': faqCollection,
};