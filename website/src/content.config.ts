import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
    loader: glob({
        base: './news',
        pattern: '**/*.mdx',
    }),
    schema: z.object({
        title: z.string(),
        category: z.string(),
        status: z.string(),
        publication: z.enum(['draft', 'published']).default('published'),
        summary: z.string(),
        linkLabel: z.string(),
        order: z.number().int().nonnegative(),
        media: z.string().optional(),
        mediaAlt: z.string().optional(),
        mediaLabel: z.string().optional(),
        accent: z.enum(['oxide', 'amber']).default('oxide'),
    }),
});

export const collections = { news };
