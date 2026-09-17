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
 *
 * Round 2 (card `t_cc2dfd29`) added the second roadmap link — step 2,
 * `Mission architecture`, now points at `/news/003-vehicle-design/` — so the
 * published side of the contract is asserted through the site's own predicate
 * rather than against a hand-kept slug list: `publishedSlugs()` reads the real
 * `website/news/` frontmatter and runs it through `selectPublicNews()`, the same
 * selection that feeds the carousel, the newsroom index and the `/news/<slug>/`
 * generator. A step may therefore link only to an article those three surfaces
 * already publish and route, and the step the record has not reached renders no
 * anchor at all.
 *
 * What this file cannot prove is that the strings are the approved ones: that is
 * the deck-hash comparison recorded on the card, because the deck lives outside
 * the site and is not a build input. The render-fidelity case below proves the
 * built page carries the module's own strings, which is the half a build can
 * check.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { listFiles, listRoutes, websiteDirectory } from '../scripts/guards.mjs';
import { progressHeading, progressSteps } from '../src/features/progress/steps';
import { selectPublicNews } from '../src/lib/publication';

const distDirectory = resolve(websiteDirectory, 'dist');
const newsDirectory = resolve(websiteDirectory, 'news');
const hasBuild = existsSync(join(distDirectory, 'index.html'));
const builtHome = join(distDirectory, 'index.html');

/** Collapse runs of whitespace, as a reader would see the rendered text. */
const collapse = (value) => value.replace(/\s+/g, ' ').trim();

/** The homepage's progress section, or `undefined` when the page carries none. */
async function progressSection() {
    const html = await readFile(builtHome, 'utf8');
    return html.match(/<section[^>]*\bclass="progress-section"[^>]*>([\s\S]*?)<\/section>/)?.[1];
}

/** Each rendered step as its `<li>` attributes plus its inner markup. */
function stepItems(section) {
    return [...section.matchAll(/<li\b([^>]*)>([\s\S]*?)<\/li>/g)].map((match) => ({
        attributes: match[1],
        inner: match[2],
    }));
}

/** One entry per rendered step, in document order. */
function stepBlocks(section) {
    return stepItems(section).map((item) => item.inner);
}

/** Every `<a>` start tag in a fragment, whatever its attribute order. */
function anchorTags(fragment) {
    return [...fragment.matchAll(/<a\b[^>]*>/g)].map((match) => match[0]);
}

/** The `href` of every anchor in a fragment. */
function anchorHrefs(fragment) {
    return anchorTags(fragment).map((tag) => tag.match(/href="([^"]*)"/)?.[1]);
}

/** The class tokens on an element's attribute string. */
function classTokens(attributes) {
    return (attributes.match(/\bclass="([^"]*)"/)?.[1] ?? '').split(/\s+/).filter(Boolean);
}

/** A fragment's visible text: tags dropped, the escaped entities a reader sees decoded. */
function visibleText(fragment) {
    const named = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '"', '#39': "'" };
    return collapse(
        fragment.replace(/<[^>]*>/g, ' ').replace(
            /&([a-z0-9#]+);/gi,
            (match, entity) => named[entity.toLowerCase()] ?? match,
        ),
    );
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

/**
 * Every rule in a stylesheet corpus as `{ selector, body }`, in source order.
 *
 * Astro stamps its scope attribute between a selector's compound parts
 * (`.timeline-list[cid] li[cid].is-current .timeline-marker[cid]`), so a rule is
 * matched on the parts that carry meaning rather than on a literal selector
 * string. An `@media` block's own braces keep it out of the match; its inner
 * rules are read as top-level ones, which is what the cascade needs here.
 */
function cssRules(corpus) {
    return [...corpus.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((match) => ({
        selector: match[1].trim(),
        body: match[2],
    }));
}

/** Read one frontmatter value without pulling in a YAML parser. */
async function frontmatterValue(file, key) {
    const source = await readFile(file, 'utf8');
    const block = source.match(/^---\n([\s\S]*?)\n---/);
    if (!block) return undefined;
    const line = block[1].split('\n').find((candidate) => candidate.startsWith(`${key}:`));
    return line?.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
}

/**
 * The published slugs the site itself routes, through the site's own predicate.
 *
 * `selectPublicNews()` is the one selection the carousel, the newsroom index and
 * the `/news/<slug>/` generator all consume, so a slug this returns is a slug
 * with a page behind it — which is exactly what a roadmap link has to satisfy.
 */
async function publishedSlugs() {
    const entries = [];
    for (const file of await listFiles(newsDirectory)) {
        if (!file.endsWith('.mdx')) continue;
        entries.push({
            id: basename(file, '.mdx'),
            data: {
                publication: (await frontmatterValue(file, 'publication')) ?? 'draft',
                order: Number(await frontmatterValue(file, 'order')),
            },
        });
    }
    return selectPublicNews(entries).map((entry) => entry.id);
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

    it.runIf(hasBuild)("renders the module's own heading and step strings", async () => {
        const section = await progressSection();
        const text = visibleText(section);

        // The deck half of this contract is the hash comparison recorded on the
        // card; this case is the build half — the page carries the strings the
        // module declares, none of them dropped or mangled by the render.
        for (const value of [progressHeading.eyebrow, progressHeading.title, progressHeading.description]) {
            expect(text, `the progress section does not render "${value}"`).toContain(value);
        }

        const blocks = stepBlocks(section);
        progressSteps.forEach((step, index) => {
            const blockText = visibleText(blocks[index] ?? '');
            for (const value of [step.state, step.title, step.detail]) {
                expect(blockText, `step ${index + 1} does not render "${value}"`).toContain(value);
            }
        });
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

    it.runIf(hasBuild)('links only articles the site publishes, and skips the steps it has not reached', async () => {
        const section = await progressSection();
        const published = await publishedSlugs();
        const articleHrefs = anchorHrefs(section).filter((href) => href?.startsWith('/news/'));

        // Non-vacuity: "only published articles" means nothing over an empty
        // published set, and the published set is what the site routes.
        expect(published.length, 'no published article is on disk to check the links against').toBeGreaterThan(0);
        expect(articleHrefs.length, 'the progress section renders no article link').toBeGreaterThan(0);

        for (const href of articleHrefs) {
            const slug = href.match(/^\/news\/([a-z0-9-]+)\/$/)?.[1];
            expect(slug, `${href} is not a detail-route path`).toBeTruthy();
            expect(published, `the progress log links ${href}, which no published article carries`).toContain(slug);
        }

        // The final step is the one the published record has not reached: the
        // record carries no article for it, so it must declare no link and
        // render no anchor.
        const lastIndex = progressSteps.length - 1;
        expect(progressSteps[lastIndex].title).toBe('Surface operations');
        expect(progressSteps[lastIndex].link, 'Surface operations must carry no link').toBeUndefined();
        expect(anchorTags(stepBlocks(section)[lastIndex] ?? ''), 'Surface operations renders an anchor').toHaveLength(
            0,
        );
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

    it.runIf(hasBuild)('marks the current step, and only the current step, with the sun-core accent', async () => {
        const section = await progressSection();
        const items = stepItems(section);
        const rules = cssRules(await distStyles());
        const currentIndexes = progressSteps.map((step, index) => (step.current ? index : -1)).filter((index) =>
            index >= 0
        );

        // One marked step, and the render follows the flag it marks.
        expect(currentIndexes, 'exactly one step must be marked current').toHaveLength(1);
        items.forEach((item, index) => {
            expect(
                classTokens(item.attributes).includes('is-current'),
                `step ${index + 1} (${progressSteps[index].title}) is-current class`,
            ).toBe(index === currentIndexes[0]);
        });

        // The marker's accent. The `is-current` rules paint the marker and its
        // dot with `--rh-sun-core`; the base rules paint them with the earth
        // blue, so both halves are read separately rather than as one selector.
        const marked = rules.filter((rule) => rule.selector.includes('.is-current'));
        const marker = marked.filter((rule) =>
            rule.selector.includes('.timeline-marker') && !/\bspan\b/.test(rule.selector)
        );
        const dot = marked.filter((rule) => /\.timeline-marker\b.*\bspan\b/.test(rule.selector));

        expect(marker, 'no .is-current rule styles the marker').toHaveLength(1);
        expect(marker[0].body, 'the current marker does not carry the sun-core accent').toMatch(
            /border-color:\s*var\(--rh-sun-core\)/,
        );
        expect(dot, 'no .is-current rule styles the marker dot').toHaveLength(1);
        expect(dot[0].body, 'the current marker dot does not carry the sun-core accent').toMatch(
            /background:\s*var\(--rh-sun-core\)/,
        );
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
