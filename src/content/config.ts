import { defineCollection, z } from 'astro:content';

const poetryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['诗词', '新诗', '散文', '随笔']).optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  poetry: poetryCollection,
};
