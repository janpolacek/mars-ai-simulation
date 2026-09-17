/*
 * Plate-fill suite: an image cell shows the plate's own artwork to its edges
 * instead of the pale `--rh-surface-plate` mat.
 *
 * The defect (card `t_f97d6184`, human report 2026-09-17): the cell filled with
 * `--rh-surface-plate` (#eeebe5) and the plate was fitted whole into it
 * (`object-fit: contain`), so every plate whose ratio is not the cell's showed
 * that tone as a band. Measured on the built homepage at 1280x800, the 3:2
 * `asteria-field-01-mars-locator` in a 645x645 cell left 215px of band, 97% of
 * its pixels within +/-8 of that tone; the reader reads it as a white
 * background.
 *
 * What is asserted is the property that removes it, not today's numbers:
 *
 * - the image cell's own fill is never the plate tone, so the defect cannot
 *   return by way of a cell background;
 * - a fill layer covers the cell and paints the plate's own emitted asset (the
 *   very URL the cell's `<img>` uses) behind the plate, so the leftover area is
 *   derived from the plate at any ratio rather than from a size that fits
 *   today's plates;
 * - the plate itself is still fitted whole (`object-fit: contain`), because
 *   cropping it to the cell was measured to drop the plate's north arrow and to
 *   truncate its own title bar and target callout box mid-word;
 * - the placeholder cell, which a published item without `media` renders, keeps
 *   its own field and gains no fill layer.
 *
 * Both surfaces are covered: `NewsCard` renders on the homepage carousel and on
 * the newsroom index (`/news/`), and neither may show the plate tone.
 *
 * Every case is non-vacuous in the way `t_b66ef5f9` demands: the cells, their
 * assets and the rules are read from the real build output, a build with no
 * image cell fails instead of passing quietly, and a rule this suite cannot
 * find in the built stylesheets fails with the reason instead of matching
 * nothing.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { listFiles, websiteDirectory } from '../scripts/guards.mjs';

const distDirectory = resolve(websiteDirectory, 'dist');
const newsDirectory = resolve(websiteDirectory, 'news');

/** The two surfaces the card renders on: the homepage carousel and the index. */
const surfaces = {
    homepage: join(distDirectory, 'index.html'),
    'newsroom index': join(distDirectory, 'news', 'index.html'),
};
const hasBuild = existsSync(surfaces.homepage);

/** The pale tone the defect showed, `--rh-surface-plate` in `src/styles/tokens.css`. */
const plateTone = '--rh-surface-plate';

/** Slugs the site must list: the same `publication: published` predicate the build uses. */
async function publishedSlugs() {
    const slugs = [];
    for (const file of await listFiles(newsDirectory)) {
        if (!file.endsWith('.mdx')) continue;
        const source = await readFile(file, 'utf8');
        const block = source.match(/^---\n([\s\S]*?)\n---/);
        const line = block?.[1].split('\n').find((candidate) => candidate.startsWith('publication:'));
        const state = line?.slice('publication:'.length).trim().replace(/^['"]|['"]$/g, '');
        if (state === 'published') slugs.push(basename(file, '.mdx'));
    }
    return slugs;
}

/**
 * The cells one built page renders, in document order: the image cell with the
 * asset it shows and the fill it carries, or the placeholder.
 */
function cellsIn(html) {
    const cells = [];
    for (const match of html.matchAll(/<div class="(news-image|news-placeholder)"([^>]*)>/g)) {
        const attributes = match[2];
        const end = html.indexOf('</div>', match.index);
        const body = html.slice(match.index, end === -1 ? html.length : end);
        const style = attributes.match(/style="([^"]*)"/)?.[1] ?? '';
        const src = body.match(/<img[^>]*\ssrc="([^"]+)"/)?.[1] ?? null;
        cells.push({
            kind: match[1],
            fill: style.match(/--plate-fill:\s*url\('([^']+)'\)/)?.[1] ?? null,
            src,
        });
    }
    return cells;
}

/**
 * The built page's style rules, flattened: each with the selector it applies to
 * (Astro's scope attribute removed, selector lists split) and its declarations.
 * At-rule preludes are not walked as rules; a media block's own rules are read
 * as written, which is what the property needs here — the mobile block styles
 * the same cells.
 */
function builtRules(styles) {
    const text = styles.replace(/\/\*[\s\S]*?\*\//g, '');
    const rules = [];
    for (const match of text.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
        const prelude = match[1].trim();
        if (prelude.length === 0 || prelude.startsWith('@')) continue;
        const declarations = new Map();
        for (const part of match[2].split(';')) {
            const colon = part.indexOf(':');
            if (colon === -1) continue;
            declarations.set(part.slice(0, colon).trim().toLowerCase(), part.slice(colon + 1).trim());
        }
        for (const selector of prelude.split(',')) {
            const scoped = selector.trim();
            if (scoped.length === 0) continue;
            rules.push({ selector: scoped.replace(/\[data-astro-cid-[a-z0-9]+\]/g, ''), declarations });
        }
    }
    return rules;
}

/** Every stylesheet the built pages apply: the emitted files plus the inlined blocks. */
async function builtStyles() {
    const parts = [];
    for (const file of await listFiles(distDirectory)) {
        if (file.endsWith('.css')) parts.push(await readFile(file, 'utf8'));
    }
    for (const surface of Object.values(surfaces)) {
        const html = await readFile(surface, 'utf8');
        for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    }
    return parts.join('\n');
}

/** The declarations of the rules that style one element directly. */
function declarationsFor(rules, selector) {
    return rules.filter((rule) => rule.selector === selector).map((rule) => rule.declarations);
}

const page = hasBuild ? await readFile(surfaces.homepage, 'utf8') : '';
const rules = hasBuild ? builtRules(await builtStyles()) : [];
const homepageCells = hasBuild ? cellsIn(page) : [];

describe('an image cell fills its box with the plate, never with the pale plate tone', () => {
    it.runIf(hasBuild)('renders a comparable image cell per published item on both surfaces', async () => {
        const published = await publishedSlugs();
        expect(published.length, 'no published item, so the build has no cell to compare').toBeGreaterThan(0);

        for (const [name, file] of Object.entries(surfaces)) {
            const cells = cellsIn(await readFile(file, 'utf8'));
            expect(cells.length, `${name} renders no news cell at all`).toBe(published.length);
            const images = cells.filter((cell) => cell.kind === 'news-image');
            expect(images.length, `${name} renders no image cell, so the fill cannot be measured`).toBeGreaterThan(0);
            for (const cell of images) {
                expect(cell.src, `${name}: an image cell renders no <img>`).not.toBe(null);
            }
        }
    });

    it.runIf(hasBuild)("never paints the pale plate tone as the image cell's own fill", () => {
        const cells = declarationsFor(rules, '.news-image');
        expect(cells.length, 'no built rule styles the image cell itself').toBeGreaterThan(0);

        const fills = cells.map((declarations) =>
            declarations.get('background') ?? declarations.get('background-color') ?? ''
        )
            .filter((value) => value.length > 0);
        expect(fills.length, 'the image cell declares no fill of its own to compare').toBeGreaterThan(0);
        for (const value of fills) {
            expect(value, 'the image cell paints the pale plate tone the defect showed').not.toContain(plateTone);
        }

        // The placeholder is the other half of the same shared rule: it keeps
        // its own field and must not be swept into the image treatment.
        const placeholders = declarationsFor(rules, '.news-placeholder');
        expect(placeholders.length, 'no built rule styles the placeholder cell').toBeGreaterThan(0);
        expect(
            placeholders.map((declarations) => declarations.get('background')).filter((value) => value !== undefined),
            'the placeholder lost the field it has today',
        ).toContain('var(--rh-relief-shadow)');
        for (const declarations of placeholders) {
            expect(
                declarations.get('background-image') ?? '',
                'the placeholder was swept into the plate fill',
            ).not.toContain('--plate-fill');
        }
    });

    it.runIf(hasBuild)('covers the image cell with a blurred copy of the plate itself', () => {
        const fillRules = rules.filter((rule) => /^\.news-image::?before$/.test(rule.selector));
        expect(fillRules.length, 'no built rule paints a fill layer on the image cell').toBeGreaterThan(0);

        for (const { declarations } of fillRules) {
            expect(
                declarations.get('background-image') ?? '',
                'the fill layer does not paint the plate the cell carries',
            ).toContain('var(--plate-fill)');
            expect(declarations.get('background-size'), 'the fill layer does not cover the cell').toBe('cover');
            expect(declarations.get('position'), 'the fill layer is not positioned over the cell').toBe('absolute');

            // Covering means reaching every cell edge: each `inset` side is at
            // the edge or beyond it. A positive value leaves a band of the
            // cell's own fill — the defect — inside the layer.
            const inset = declarations.get('inset');
            expect(inset, 'the fill layer is not pinned to the cell box').toBeDefined();
            for (const side of (inset ?? '').split(/\s+/)) {
                const value = Number.parseFloat(side.replace('%', ''));
                expect(Number.isFinite(value), `the fill layer's inset "${side}" cannot be compared`).toBe(true);
                expect(value, `the fill layer stops ${side} short of the cell edge`).toBeLessThanOrEqual(0);
            }

            // `filter: blur()` is what makes an extended copy read as a ground
            // rather than as a second, misaligned plate.
            expect(declarations.get('filter') ?? '', 'the fill is not softened into a ground').toContain('blur');

            // A negative z-index would paint the layer behind the cell's own
            // fill, which is the band the defect showed.
            const layer = declarations.get('z-index');
            expect(layer, 'the fill layer has no z-index to compare').toBeDefined();
            expect(Number(layer), "the fill layer paints behind the cell's own fill").toBeGreaterThanOrEqual(0);
        }

        const imageRules = declarationsFor(rules, '.news-image img');
        expect(imageRules.length, 'no built rule styles the plate inside the cell').toBeGreaterThan(0);
        const fits = imageRules.map((declarations) => declarations.get('object-fit')).filter((value) =>
            value !== undefined
        );
        expect(fits.length, 'the plate has no object-fit to compare').toBeGreaterThan(0);
        for (const fit of fits) {
            expect(fit, 'the plate is cropped to the cell instead of fitted whole').toBe('contain');
        }
        const stacking = imageRules.map((declarations) => Number(declarations.get('z-index'))).filter(Number.isFinite);
        expect(stacking.length, 'the plate carries no stacking order against the fill layer').toBeGreaterThan(0);
        for (const zIndex of stacking) {
            expect(zIndex, 'the plate does not paint above the fill layer').toBeGreaterThan(
                Number(fillRules[0].declarations.get('z-index') ?? 0),
            );
        }
    });

    it.runIf(hasBuild)("fills each cell with its own plate's emitted asset", async () => {
        for (const [name, file] of Object.entries(surfaces)) {
            const html = await readFile(file, 'utf8');
            const images = cellsIn(html).filter((cell) => cell.kind === 'news-image');
            expect(images.length, `${name} renders no image cell to compare`).toBeGreaterThan(0);
            for (const cell of images) {
                expect(cell.fill, `${name}: an image cell carries no fill for its plate`).not.toBe(null);
                expect(cell.fill, `${name}: the fill is not an emitted asset`).toMatch(/^\/_astro\//);
                expect(cell.fill, `${name}: the fill is not the plate the cell shows`).toBe(cell.src);
            }
        }
    });

    it.runIf(hasBuild)("keeps the cells the homepage renders in the carousel's single grid cell", () => {
        // The fill must not become a slide's own box: the card keeps its
        // placement, so the one-height contract of t_89b325e5 still holds.
        const cards = [...page.matchAll(/<article class="news-card[^"]*"[^>]*>/g)].map((match) => match[0]);
        expect(cards.length, 'the homepage renders no news card').toBe(homepageCells.length);
        for (const card of cards) {
            expect(card, 'a news card carries an inline style, which the height contract cannot see').not.toContain(
                'style=',
            );
        }
    });
});
