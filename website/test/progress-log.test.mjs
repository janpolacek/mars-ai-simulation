/*
 * The homepage progress log's link contract.
 *
 * `src/features/progress/steps.ts` is a curated list, and its `link` field is
 * the one place the progress section points at an article. Nothing else guards
 * that pointer: a step could name a slug the newsroom never routes, or the
 * render could grow an anchor for a step that has no link, and the page would
 * still build. Both are asserted here against the built homepage, together with
 * the detail-paragraph class that keeps all three details styled alike (the
 * positional `p:last-child` rule this component used stopped matching the
 * linked step's detail once a link paragraph followed it).
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { listFiles, listRoutes, websiteDirectory } from '../scripts/guards.mjs';
import { progressSteps } from '../src/features/progress/steps';

const distDirectory = resolve(websiteDirectory, 'dist');
const hasBuild = existsSync(join(distDirectory, 'index.html'));
const builtHome = join(distDirectory, 'index.html');

/** The homepage's progress section, or `undefined` when the page carries none. */
async function progressSection() {
    const html = await readFile(builtHome, 'utf8');
    return html.match(/<section[^>]*\bclass="progress-section"[^>]*>([\s\S]*?)<\/section>/)?.[1];
}

/** One entry per rendered step, in document order. */
function stepBlocks(section) {
    return [...section.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map((match) => match[1]);
}

/** Every `<a>` start tag in a fragment, whatever its attribute order. */
function anchorTags(fragment) {
    return [...fragment.matchAll(/<a\b[^>]*>/g)].map((match) => match[0]);
}

/** The `href` of every anchor in a fragment. */
function anchorHrefs(fragment) {
    return anchorTags(fragment).map((tag) => tag.match(/href="([^"]*)"/)?.[1]);
}

/** All CSS the built site would apply, including Astro's inlined `<style>` blocks. */
async function distStyles() {
    const parts = [];
    const files = await listFiles(distDirectory);
    for (const file of files.filter((entry) => entry.endsWith('.css'))) {
        parts.push(await readFile(file, 'utf8'));
    }
    for (const file of files.filter((entry) => entry.endsWith('.html'))) {
        const source = await readFile(file, 'utf8');
        for (const match of source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    }
    return parts.join('\n');
}

describe('homepage progress log', () => {
    it.runIf(hasBuild)('renders one step block per declared step', async () => {
        const section = await progressSection();

        // A pattern that silently matches nothing would make every assertion
        // below vacuously true, so the section and its step count are asserted
        // first rather than assumed from the deck.
        expect(section, 'the built homepage carries no .progress-section').toBeTruthy();
        expect(progressSteps.length).toBeGreaterThan(0);
        expect(stepBlocks(section).length).toBe(progressSteps.length);
    });

    it.runIf(hasBuild)('resolves every progress-section article link to a generated route', async () => {
        const section = await progressSection();
        const routes = new Set(await listRoutes());
        const articleHrefs = anchorHrefs(section).filter((href) => href?.startsWith('/news/'));

        // Exactly one link per step that declares one — no more, no fewer.
        const declared = progressSteps.filter((step) => step.link).map((step) => step.link.href);
        expect(articleHrefs).toEqual(declared);
        expect(articleHrefs.length).toBeGreaterThan(0);

        for (const href of articleHrefs) {
            expect(href, `${href} is not a detail-route path`).toMatch(/^\/news\/[a-z0-9-]+\/$/);
            expect(routes.has(`${href}index.html`), `the progress log links ${href}, which has no route`).toBe(true);
        }
    });

    it.runIf(hasBuild)('emits no anchor for a step without a link', async () => {
        const blocks = stepBlocks(await progressSection());
        const silent = [];

        progressSteps.forEach((step, index) => {
            const anchors = anchorTags(blocks[index] ?? '');
            if (!step.link) silent.push(index);
            expect(
                anchors.length,
                `step ${index + 1} (${step.title}) declares no link but renders ${anchors.length} anchor(s)`,
            ).toBe(step.link ? 1 : 0);
            if (step.link) expect(anchorHrefs(blocks[index])).toEqual([step.link.href]);
        });

        // A list where every step happens to carry a link would pass the loop
        // above without exercising the no-link branch at all.
        expect(silent.length).toBeGreaterThan(0);
    });

    it.runIf(hasBuild)('gives every step detail the class its styling keys on', async () => {
        const blocks = stepBlocks(await progressSection());
        const styles = await distStyles();

        for (const [index, block] of blocks.entries()) {
            expect(block, `step ${index + 1} detail carries no .timeline-detail class`).toMatch(
                /<p[^>]*\bclass="timeline-detail"[^>]*>/,
            );
        }

        expect(styles).toMatch(/\.timeline-detail[^{]*\{[^}]*max-width:\s*30rem/);
        // The positional rule the class replaced: with it in place the linked
        // step's detail fell out of the muted, 30rem measure.
        expect(styles).not.toMatch(/\.timeline-list li > div:last-child > p:last-child/);
        expect(styles).toMatch(/\.timeline-link[^{]*\{[^}]*color:\s*var\(--rh-text-muted\)/);
    });
});
