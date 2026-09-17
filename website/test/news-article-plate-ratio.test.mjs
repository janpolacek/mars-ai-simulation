/*
 * Article-figure ratio suite: the lead figure renders the plate the newsroom
 * approved, not a square crop of it.
 *
 * The defect (found while placing step 003's studio reference, card
 * `t_accf6f7a`): `ArticleView.astro` passed the image service both `width` and
 * `height={1024}`, and Astro's default `fit` is `cover`. The approved
 * 1448x1086 plate therefore left the build as a 1024x1024 **centre crop** —
 * 25% of its width gone — while `NewsCard` and `MediaPlates`, which pass
 * `width` alone, emitted the same plate at 1024x768. Measured on the built
 * bytes against sharp's own transforms, the emitted file matched the `cover`
 * crop at a mean |delta| of 0.00.
 *
 * Why it stayed invisible until step 003: every earlier one-plate key resolves
 * to square artwork (the 002 payload illustration is 1024x1024), so a forced
 * square was a no-op. The first non-square plate was the first plate it
 * cropped — and a crop is not a presentation change a component may make to
 * approved artwork.
 *
 * What is asserted, on the real build output and against the canonical source:
 *
 * - a published article whose key resolves to one plate renders a lead figure;
 * - the figure's declared width and height carry the canonical plate's own
 *   aspect ratio, read from the `docs/` PNG the registry imports;
 * - the emitted asset the figure points at carries that ratio too, so a crop
 *   reintroduced anywhere in the pipeline fails here and not only in markup.
 *
 * Every case is read from the build output rather than from today's numbers:
 * the keys, the pages and the asset URLs come from the shipped tree, and a
 * build with no one-plate figure fails the non-vacuity assertion instead of
 * passing quietly.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { listFiles, projectDirectory, websiteDirectory } from '../scripts/guards.mjs';
import { newsMedia } from '../src/features/news/media';
import { newsMediaRequirements } from '../src/lib/media';

const distDirectory = resolve(websiteDirectory, 'dist');
const newsDirectory = resolve(websiteDirectory, 'news');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** Width/height of a PNG, read from its IHDR chunk. */
function pngSize(buffer) {
    expect(buffer.subarray(0, 8).toString('hex'), 'not a PNG').toBe('89504e470d0a1a0a');
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

/**
 * Width/height of a WebP, read from its container header: the extended format
 * (`VP8X`) stores both as 24-bit values minus one, the lossy format (`VP8 `)
 * as two 14-bit values, and the lossless format (`VP8L`) as 14-bit pairs
 * packed into one 32-bit field.
 */
function webpSize(buffer) {
    expect(buffer.subarray(0, 4).toString(), 'not a WebP').toBe('RIFF');
    expect(buffer.subarray(8, 12).toString(), 'not a WebP').toBe('WEBP');
    const chunk = buffer.subarray(12, 16).toString();

    if (chunk === 'VP8X') {
        return { width: buffer.readUIntLE(24, 3) + 1, height: buffer.readUIntLE(27, 3) + 1 };
    }
    if (chunk === 'VP8 ') {
        return {
            width: buffer.readUInt16LE(26) & 0x3fff,
            height: buffer.readUInt16LE(28) & 0x3fff,
        };
    }
    if (chunk === 'VP8L') {
        const bits = buffer.readUInt32LE(21);
        return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    throw new Error(`unexpected WebP chunk ${chunk}`);
}

const ratio = ({ width, height }) => width / height;

/** The ratio difference this suite tolerates: one pixel of rounding. */
const TOLERANCE = 0.01;

/** Read one frontmatter value without pulling in a YAML parser. */
async function frontmatterValue(file, key) {
    const source = await readFile(file, 'utf8');
    const block = source.match(/^---\n([\s\S]*?)\n---/);
    if (!block) return undefined;
    const line = block[1].split('\n').find((candidate) => candidate.startsWith(`${key}:`));
    return line?.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
}

/** Published articles whose media key resolves to exactly one plate. */
async function onePlateArticles() {
    const articles = [];
    for (const file of (await listFiles(newsDirectory)).filter((entry) => entry.endsWith('.mdx'))) {
        if ((await frontmatterValue(file, 'publication')) !== 'published') continue;
        const media = await frontmatterValue(file, 'media');
        if (!media || newsMediaRequirements[media]?.plateCount !== 1) continue;
        articles.push({ slug: basename(file, '.mdx'), media });
    }
    return articles;
}

/** The canonical `docs/` PNG a plate resolves to. */
function canonicalSourcePath(src) {
    const match = String(src).match(/docs\/[^'"`?]+\.png/);
    expect(match, `the plate source does not name a docs/ PNG: ${String(src)}`).not.toBeNull();
    const path = resolve(projectDirectory, match[0]);
    expect(existsSync(path), `the plate source is missing: ${path}`).toBe(true);
    return path;
}

/** The `<img>` a page's lead figure renders, with its declared dimensions. */
function figureImage(html) {
    // Astro adds its scope attribute to the tag, so the figure tag is matched
    // on the attribute rather than on `class="article-media">` ending.
    const figure = html.match(/<figure\b[^>]*\bclass="article-media"[^>]*>[\s\S]*?<\/figure>/);
    const tag = figure?.[0].match(/<img\b[^>]*>/);
    if (!tag) return null;
    return {
        src: tag[0].match(/src="([^"]+)"/)?.[1],
        width: Number(tag[0].match(/width="(\d+)"/)?.[1]),
        height: Number(tag[0].match(/height="(\d+)"/)?.[1]),
        alt: tag[0].match(/alt="([^"]*)"/)?.[1] ?? '',
    };
}

describe('the lead figure of a one-plate article', () => {
    it.runIf(hasBuild)("declares the canonical plate's own aspect ratio", async () => {
        const articles = await onePlateArticles();

        // Non-vacuity: at least one published article resolves to one plate, so
        // the loop below has something to check.
        expect(articles.length, 'no published one-plate article to read a figure from').toBeGreaterThan(0);

        for (const article of articles) {
            const page = join(distDirectory, 'news', article.slug, 'index.html');
            expect(existsSync(page), `${article.slug} is published but has no built page`).toBe(true);

            const image = figureImage(await readFile(page, 'utf8'));
            expect(image, `${article.slug} declares a one-plate key but renders no lead figure`).not.toBeNull();
            expect(image.src, `${article.slug} renders a figure with no src`).toBeTruthy();
            expect(image.alt.length, `${article.slug} renders a figure with no alt text`).toBeGreaterThan(0);

            const source = pngSize(await readFile(canonicalSourcePath(newsMedia[article.media].plates[0].src)));
            expect(image.width, `${article.slug} renders no width`).toBeGreaterThan(0);
            expect(image.height, `${article.slug} renders no height`).toBeGreaterThan(0);
            expect(
                Math.abs(ratio(image) - ratio(source)),
                `${article.slug} declares ${image.width}x${image.height} for a ${source.width}x${source.height} plate`,
            ).toBeLessThan(TOLERANCE);
        }
    });

    it.runIf(hasBuild)("emits the figure's asset at the plate's own ratio", async () => {
        const [article] = await onePlateArticles();
        expect(article, 'no published one-plate article to read a figure from').toBeDefined();

        const image = figureImage(await readFile(join(distDirectory, 'news', article.slug, 'index.html'), 'utf8'));
        const emitted = webpSize(await readFile(join(distDirectory, image.src.replace(/^\//, ''))));
        const source = pngSize(await readFile(canonicalSourcePath(newsMedia[article.media].plates[0].src)));

        expect(
            Math.abs(ratio(emitted) - ratio(source)),
            `${article.slug} emits ${emitted.width}x${emitted.height} for a ${source.width}x${source.height} plate`,
        ).toBeLessThan(TOLERANCE);
    });

    it.runIf(hasBuild)('emits no square copy of a plate that is not square', async () => {
        const [article] = await onePlateArticles();
        const image = figureImage(await readFile(join(distDirectory, 'news', article.slug, 'index.html'), 'utf8'));
        const emitted = webpSize(await readFile(join(distDirectory, image.src.replace(/^\//, ''))));
        const source = pngSize(await readFile(canonicalSourcePath(newsMedia[article.media].plates[0].src)));

        // The specific shape of the defect: a non-square plate, a square file.
        if (source.width !== source.height) {
            expect(emitted.width, `${article.slug}'s plate is ${source.width}x${source.height}, the figure is square`)
                .not.toBe(
                    emitted.height,
                );
        }
    });
});
