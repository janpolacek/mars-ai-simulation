import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

import { newsMediaIssues } from './lib/media';

const news = defineCollection({
    loader: glob({
        base: './news',
        pattern: '**/*.mdx',
    }),
    schema: z
        .object({
            title: z.string(),
            category: z.string(),
            status: z.string(),
            /**
             * Defaults to `draft`: an item that forgets to declare its state is
             * held back rather than published.
             */
            publication: z.enum(['draft', 'published']).default('draft'),
            summary: z.string(),
            linkLabel: z.string(),
            order: z.number().int().nonnegative(),
            /**
             * Media key, resolved by `src/features/news/media.ts` to the canonical
             * assets under `docs/`. Not a URL: the site no longer copies assets into
             * `public/`, so a URL here would 404 instead of failing loudly.
             *
             * The key also decides what the article must declare: one plate with
             * one `mediaAlt` entry (`programme-identity`), or three plates with
             * one `mediaAlt` and one `mediaCaption` entry each, in plate order,
             * plus a `mediaLabel` (`asteria-plates`). `src/lib/media.ts` holds the
             * requirements; the checks below apply them.
             */
            media: z.string().optional(),
            mediaAlt: z.union([z.string(), z.array(z.string())]).optional(),
            mediaLabel: z.string().optional(),
            mediaCaption: z.union([z.string(), z.array(z.string())]).optional(),
            accent: z.enum(['oxide', 'amber']).default('oxide'),
        })
        .superRefine((data, context) => {
            for (const issue of newsMediaIssues(data)) {
                context.addIssue({ code: 'custom', path: [issue.field], message: issue.message });
            }
        }),
});

export const collections = { news };
