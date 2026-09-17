/*
 * Identity-mark suite: the homepage hero's transparent variant.
 *
 * The human story owner asked for the homepage hero mark on a transparent
 * background (2026-09-17, card `t_183d9f11`). `docs/brand/BRAND.md` forbids
 * redrawing or re-rendering the mark for public use, so the variant is a
 * mechanical un-composite of the approved black-field source. Two things then
 * have to stay true, and neither is visible in a diff:
 *
 *   1. the variant still *is* the approved mark — recomposited over the void
 *      black field it reproduces `logo-bg-black.png` within the card's 1 LSB
 *      budget, so a future re-derivation, crop, resample or colour adjustment
 *      fails here instead of shipping a different logo;
 *   2. the emitted hero asset carries an alpha channel, while every other
 *      placement keeps the hash-approved black-field mark.
 *
 * The fidelity assertion is proven to have teeth: the same function is pointed
 * at the rejected derivative `docs/brand/logo.png` and must fail it.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

import sharp from 'sharp';
import { describe, expect, it } from 'vitest';

import {
    alphaCensus,
    blueCueCount,
    compareRgb,
    compositeOver,
    rejectedVariantPath,
    sourcePath,
    variantPath,
    websiteDirectory,
} from '../scripts/derive-identity-mark.mjs';
import { newsMedia } from '../src/features/news/media';

const distDirectory = resolve(websiteDirectory, 'dist');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** Decode one PNG to raw pixels, whatever channel count it carries. */
async function rawPixels(path) {
    return await sharp(await readFile(path)).raw().toBuffer({ resolveWithObject: true });
}

/** The approved source, the shipped variant and the rejected derivative, decoded once. */
let decodedMarks;
async function marks() {
    if (!decodedMarks) {
        const [source, variant, rejected] = await Promise.all([
            rawPixels(sourcePath),
            rawPixels(variantPath),
            rawPixels(rejectedVariantPath),
        ]);
        decodedMarks = { source, variant, rejected };
    }
    return decodedMarks;
}

/** Every `<img>` tag on a built page. */
const imagesIn = (html) => [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);

/** The `src` of one `<img>` tag. */
const srcOf = (tag) => tag.match(/src="([^"]+)"/)?.[1];

/** The first `<img>` rendered inside the element that carries `className`. */
function imgInside(html, className) {
    return html.match(new RegExp(`class="${className}"[\\s\\S]*?<img\\b[^>]*>`))?.[0];
}

async function routeHtml(route) {
    return await readFile(join(distDirectory, route), 'utf8');
}

describe('the transparent identity mark derives from the approved source', () => {
    it('recomposited over #010000, reproduces the approved source within one LSB per channel', async () => {
        const { source, variant } = await marks();

        expect(variant.info.width).toBe(source.info.width);
        expect(variant.info.height).toBe(source.info.height);
        expect(variant.info.channels).toBe(4);

        const fidelity = compareRgb(
            source.data,
            compositeOver(variant.data, source.info.width, source.info.height),
            source.info.width,
            source.info.height,
        );

        expect(fidelity.maxDelta, 'max channel delta, variant recomposited over the approved field')
            .toBeLessThanOrEqual(1);
        expect(fidelity.pixelsOverTwoLsb, 'pixels differing by more than 2 LSB').toBe(0);
    });

    it('fails that same measurement on the rejected derivative, so the check has teeth', async () => {
        const { source, rejected } = await marks();

        // `docs/brand/logo.png` is the RGBA derivative the 001 editorial review
        // failed ("an RGBA derivative with no black field"); its SHA-256 is
        // pinned as the rejected file in the review record and in BRAND.md's
        // history. Measured here: max delta 190 LSB (r 111 / g 126 / b 190) and
        // 53,717 pixels (3.42%) differing by more than 2 LSB.
        const fidelity = compareRgb(
            source.data,
            compositeOver(rejected.data, source.info.width, source.info.height),
            source.info.width,
            source.info.height,
        );

        expect(fidelity.maxDelta).toBeGreaterThan(1);
        expect(fidelity.pixelsOverTwoLsb).toBeGreaterThan(0);
    });

    it('carries an alpha channel, keeps the glow gradation, and has no dark matte', async () => {
        const { source, variant } = await marks();
        const { width, height } = source.info;

        const metadata = await sharp(await readFile(variantPath)).metadata();
        expect(metadata.hasAlpha).toBe(true);
        expect(metadata.channels).toBe(4);

        const census = alphaCensus(variant.data, width, height);

        // A derived mark must actually have a transparent field, not a flattened
        // image with an alpha channel bolted on.
        expect(census.transparentShare).toBeGreaterThan(0.3);
        expect(census.partial).toBeGreaterThan(0);
        // The sunrise glow's falloff survives as real gradation, not a 1-bit cut-out.
        expect(census.distinctAlphaLevels).toBeGreaterThan(200);
        // A dark matte/fringe would be a near-black colour at visible coverage.
        expect(census.nearBlackVisiblePartialPixels).toBe(0);

        // The cool Earth/Moon cues are the mark's only blue-led pixels, and they
        // survive the round trip pixel for pixel.
        const composite = compositeOver(variant.data, width, height);
        const cues = blueCueCount(source.data, width, height);
        expect(cues).toBeGreaterThan(0);
        expect(blueCueCount(composite, width, height)).toBe(cues);
    });
});

describe('the homepage hero renders the transparent variant', () => {
    it.runIf(hasBuild)('points the hero at a webp whose pixels carry alpha', async () => {
        const html = await routeHtml('index.html');
        const heroTag = imgInside(html, 'hero-mark');

        expect(heroTag, 'the homepage has no hero mark image').toBeTruthy();

        const src = srcOf(heroTag);
        expect(src, 'the hero still renders the black-field square').toMatch(/\/_astro\/logo-transparent\..*\.webp$/);
        // Unchanged geometry: the variant is wired in place of the source, at
        // the same rendered size and format.
        expect(heroTag).toMatch(/width="896"/);
        expect(heroTag).toMatch(/height="896"/);

        const emitted = await sharp(join(distDirectory, src.replace(/^\//, ''))).metadata();
        expect(emitted.hasAlpha, 'the emitted hero webp has no alpha channel').toBe(true);
        expect(emitted.channels).toBe(4);
    });

    it.runIf(hasBuild)('leaves the header, the splash and every other route on the black-field mark', async () => {
        const routes = [
            'index.html',
            'news/index.html',
            'news/001-project-announcement/index.html',
            'about/index.html',
            '404.html',
        ];

        for (const route of routes) {
            const html = await routeHtml(route);
            const header = imgInside(html, 'wordmark');
            const splash = imgInside(html, 'splash-inner');

            expect(srcOf(header), `the header on /${route} left the approved black-field mark`).toMatch(
                /\/_astro\/logo-bg-black\..*\.webp$/,
            );
            expect(srcOf(splash), `the splash on /${route} left the approved black-field mark`).toMatch(
                /\/_astro\/logo-bg-black\..*\.webp$/,
            );

            if (route !== 'index.html') {
                expect(html, `/${route} renders the hero's transparent variant outside the homepage`).not.toContain(
                    'logo-transparent.',
                );
            }
        }

        // On the homepage the variant appears exactly once — in the hero — and
        // every other mark image is still the approved source.
        const home = await routeHtml('index.html');
        const heroSrc = srcOf(imgInside(home, 'hero-mark'));
        const transparent = imagesIn(home).filter((tag) => srcOf(tag)?.includes('logo-transparent.'));

        expect(transparent.map(srcOf)).toEqual([heroSrc]);
        expect(imagesIn(home).filter((tag) => srcOf(tag)?.includes('logo-bg-black.'))).toHaveLength(2);
    });

    it('keeps the news programme-identity plate on the black-field mark', () => {
        // The media registry is the news card's mark; the human decision of
        // 2026-09-17 is homepage-hero only.
        const plate = newsMedia['programme-identity'].plates[0];

        expect(String(plate.src)).toContain('logo-bg-black');
        expect(String(plate.src)).not.toContain('logo-transparent');
    });
});
