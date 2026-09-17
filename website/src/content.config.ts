import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

import { newsMediaIssues } from './lib/media';
import { wikiSections } from './lib/wiki-query';

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

const wiki = defineCollection({
    loader: glob({
        base: './wiki',
        pattern: '**/*.mdx',
    }),
    schema: z
        .object({
            title: z.string(),
            /**
             * The top-level tree node, and the URL segment under it. Required:
             * a page that does not name a section has no place in the tree, so
             * the build fails rather than routing it somewhere unlisted.
             */
            section: z.enum(wikiSections),
            /**
             * Defaults to `draft`, the same fail-closed default as news: a page
             * that forgets to declare its state is held back rather than
             * published.
             */
            publication: z.enum(['draft', 'published']).default('draft'),
            /** Sort position inside its section index. */
            order: z.number().int().nonnegative(),
            /** Public page summary, and the page's meta description. */
            summary: z.string(),
            /** Ids of related wiki pages; `selectRelatedWiki` resolves them against the published set. */
            related: z.array(z.string()).optional(),
            /** Path in `docs/` this page is derived from, when it has one. */
            canonicalDocs: z.string().optional(),
            /**
             * Media key, validated and resolved by the same modules a news item
             * uses (`src/lib/media.ts` for the key and its requirements,
             * `src/features/news/media.ts` for the assets), so the wiki tree
             * cannot invent a second, unchecked media vocabulary.
             */
            media: z.string().optional(),
            mediaAlt: z.union([z.string(), z.array(z.string())]).optional(),
            mediaLabel: z.string().optional(),
            mediaCaption: z.union([z.string(), z.array(z.string())]).optional(),
        })
        .superRefine((data, context) => {
            for (const issue of newsMediaIssues(data)) {
                context.addIssue({ code: 'custom', path: [issue.field], message: issue.message });
            }
        }),
});

export const collections = { news, wiki };
