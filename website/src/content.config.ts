import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

import { newsMediaIssues } from './lib/media';
import { simulatedDatePattern } from './lib/simulated-date';
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
            /**
             * The simulated record date: the date, inside the fiction, on which
             * the article was written, as a `YYYY-MM-DD` calendar date from the
             * locked milestone table in `docs/SCENARIO.md`.
             *
             * Optional on purpose. `mars-ai-simulator-editor` assigns and
             * verifies the value, and the release that first carries one supplies
             * it, so an article that has none yet is valid — and a required field
             * would force a value this schema is not allowed to invent (a date
             * the milestone table does not hold is new scenario canon).
             *
             * Both shapes the YAML frontmatter can deliver are accepted: the
             * quoted string, and the `Date` a parser produces from an unquoted
             * `2026-10-12` (`js-yaml` resolves a bare date at UTC midnight), so
             * the field cannot fail the build over how an author quoted it.
             * `src/lib/simulated-date.ts` normalises either shape into the same
             * public wording.
             *
             * This is a date inside the fiction, never a real publication date:
             * nothing machine-readable is derived from it (`src/lib/seo.ts`).
             */
            simulatedDate: z.union([z.string().regex(simulatedDatePattern), z.date()]).optional(),
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
            for (const issue of newsMediaIssues({ ...data, publication: data.publication })) {
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
            for (const issue of newsMediaIssues({ ...data, publication: data.publication })) {
                context.addIssue({ code: 'custom', path: [issue.field], message: issue.message });
            }
        }),
});

export const collections = { news, wiki };
