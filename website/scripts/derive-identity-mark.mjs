/*
 * Derive the transparent-background identity mark from the approved source.
 *
 * The human story owner asked for the homepage hero mark on a transparent
 * background (2026-09-17, card `t_183d9f11`). `docs/brand/BRAND.md` forbids
 * regenerating, redrawing, cropping or recolouring the mark for public use
 * without a new review, so this is a **mechanical** derivation, not a render:
 * the approved source is the mark composited over the void-black field
 * (`#010000`), so every pixel is un-composited back to straight alpha.
 *
 * Per pixel, with `m = max(R, G, B)`:
 *
 *   alpha   = m / 255                     (the field's own 1 LSB survives as
 *                                          the faintest alpha step)
 *   colour  = (P - field * (1 - alpha)) / alpha
 *
 * The colour term inverts the composite equation against the named field
 * colour, so recompositing the variant over `#010000` reproduces the approved
 * source exactly (measured max delta 0 LSB; the plain `colour = P / alpha` form
 * the card wrote out leaves a systematic +1 LSB on the field's own pixels —
 * both are inside the card's 1 LSB budget, the inverse form is exact).
 *
 * Usage:
 *   node scripts/derive-identity-mark.mjs           # derive, write, report
 *   node scripts/derive-identity-mark.mjs --report  # report only, no write
 */
/* global console, process */
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));

/** Root of the Astro project. */
export const websiteDirectory = resolve(scriptDirectory, '..');

/** Repository root, which holds the canonical documentation tree. */
export const projectDirectory = resolve(websiteDirectory, '..');

/** The hash-approved black-field source named in `docs/brand/BRAND.md`. */
export const sourcePath = resolve(projectDirectory, 'docs', 'brand', 'logo-bg-black.png');

/** The transparent variant this script writes, beside the approved source. */
export const variantPath = resolve(projectDirectory, 'docs', 'brand', 'logo-transparent.png');

/** The derivative the 001 editorial review rejected — read-only, never written. */
export const rejectedVariantPath = resolve(projectDirectory, 'docs', 'brand', 'logo.png');

/** The approved mark's field colour: the void black of `docs/brand/BRAND.md`. */
export const voidBlack = [1, 0, 0];

/**
 * Un-composites straight RGBA out of an opaque RGB buffer whose background is
 * `field`. Pure and total: every input pixel produces one output pixel.
 */
export function deriveTransparent(rgb, width, height, field = voidBlack) {
    const rgba = new Uint8Array(width * height * 4);
    for (let index = 0; index < width * height; index += 1) {
        const r = rgb[index * 3];
        const g = rgb[index * 3 + 1];
        const b = rgb[index * 3 + 2];
        const maximum = Math.max(r, g, b);
        const alpha = maximum / 255;
        const target = index * 4;
        rgba[target + 3] = maximum;
        if (maximum === 0) continue;
        for (let channel = 0; channel < 3; channel += 1) {
            const value = [r, g, b][channel];
            const straight = (value - field[channel] * (1 - alpha)) / alpha;
            rgba[target + channel] = Math.max(0, Math.min(255, Math.round(straight)));
        }
    }
    return rgba;
}

/** The card's literal `colour = RGB / alpha` form, kept for the comparison report. */
export function derivePlain(rgb, width, height) {
    const rgba = new Uint8Array(width * height * 4);
    for (let index = 0; index < width * height; index += 1) {
        const r = rgb[index * 3];
        const g = rgb[index * 3 + 1];
        const b = rgb[index * 3 + 2];
        const maximum = Math.max(r, g, b);
        const target = index * 4;
        rgba[target + 3] = maximum;
        if (maximum === 0) continue;
        const alpha = maximum / 255;
        for (let channel = 0; channel < 3; channel += 1) {
            const value = [r, g, b][channel];
            rgba[target + channel] = Math.max(0, Math.min(255, Math.round(value / alpha)));
        }
    }
    return rgba;
}

/**
 * Composites straight RGBA over an opaque `background`, the way a browser
 * renders the mark on the page's dark field. Returns an RGB buffer comparable
 * to the approved source.
 */
export function compositeOver(rgba, width, height, background = voidBlack) {
    const rgb = new Uint8Array(width * height * 3);
    for (let index = 0; index < width * height; index += 1) {
        const alpha = rgba[index * 4 + 3] / 255;
        for (let channel = 0; channel < 3; channel += 1) {
            const value = rgba[index * 4 + channel] * alpha + background[channel] * (1 - alpha);
            rgb[index * 3 + channel] = Math.max(0, Math.min(255, Math.round(value)));
        }
    }
    return rgb;
}

/** Per-channel and aggregate channel deltas between two RGB buffers. */
export function compareRgb(expected, actual, width, height) {
    const channels = [0, 0, 0];
    let maximum = 0;
    let pixels = 0;
    let overOne = 0;
    let overTwo = 0;
    for (let index = 0; index < width * height; index += 1) {
        let worst = 0;
        for (let channel = 0; channel < 3; channel += 1) {
            const delta = Math.abs(expected[index * 3 + channel] - actual[index * 3 + channel]);
            channels[channel] = Math.max(channels[channel], delta);
            worst = Math.max(worst, delta);
        }
        if (worst > 0) pixels += 1;
        if (worst > 1) overOne += 1;
        if (worst > 2) overTwo += 1;
        maximum = Math.max(maximum, worst);
    }
    const total = width * height;
    return {
        maxChannelDelta: { r: channels[0], g: channels[1], b: channels[2] },
        maxDelta: maximum,
        pixelsDiffering: pixels,
        pixelsDifferingShare: pixels / total,
        pixelsOverOneLsb: overOne,
        pixelsOverTwoLsb: overTwo,
        pixelsOverTwoLsbShare: overTwo / total,
        total,
    };
}

/** Where the pixels that differ by exactly one LSB live, and what alpha they carry. */
export function oneLsbDiagnostic(expected, actual, rgba, width, height) {
    let count = 0;
    let lowestAlpha = 255;
    let highestAlpha = 0;
    let sumAlpha = 0;
    const channels = [0, 0, 0];
    for (let index = 0; index < width * height; index += 1) {
        let worst = 0;
        for (let channel = 0; channel < 3; channel += 1) {
            const delta = Math.abs(expected[index * 3 + channel] - actual[index * 3 + channel]);
            if (delta > 0) channels[channel] += 1;
            worst = Math.max(worst, delta);
        }
        if (worst !== 1) continue;
        count += 1;
        const alpha = rgba[index * 4 + 3];
        lowestAlpha = Math.min(lowestAlpha, alpha);
        highestAlpha = Math.max(highestAlpha, alpha);
        sumAlpha += alpha;
    }
    return {
        count,
        lowestAlpha: count > 0 ? lowestAlpha : 0,
        highestAlpha,
        meanAlpha: count > 0 ? sumAlpha / count : 0,
        channelCounts: { r: channels[0], g: channels[1], b: channels[2] },
    };
}

/** Alpha histogram of a straight RGBA buffer, as counts and shares. */
export function alphaCensus(rgba, width, height) {
    let transparent = 0;
    let partial = 0;
    let opaque = 0;
    let nearBlackPartial = 0;
    let nearBlackPartialWorstAlpha = 0;
    let nearBlackVisiblePartial = 0;
    let lowestPartialAlpha = 255;
    const levels = new Set();
    for (let index = 0; index < width * height; index += 1) {
        const alpha = rgba[index * 4 + 3];
        levels.add(alpha);
        if (alpha === 0) transparent += 1;
        else if (alpha === 255) opaque += 1;
        else {
            partial += 1;
            lowestPartialAlpha = Math.min(lowestPartialAlpha, alpha);
            const colour = Math.max(rgba[index * 4], rgba[index * 4 + 1], rgba[index * 4 + 2]);
            if (colour < 32) {
                nearBlackPartial += 1;
                nearBlackPartialWorstAlpha = Math.max(nearBlackPartialWorstAlpha, alpha);
                // A matte or fringe is only visible once the dark colour carries
                // real coverage; alpha 1/255 is the field's own 1 LSB.
                if (alpha > 8) nearBlackVisiblePartial += 1;
            }
        }
    }
    const total = width * height;
    return {
        transparent,
        partial,
        opaque,
        transparentShare: transparent / total,
        partialShare: partial / total,
        opaqueShare: opaque / total,
        distinctAlphaLevels: levels.size,
        darkestPartialAlpha: partial > 0 ? lowestPartialAlpha : 0,
        nearBlackPartialPixels: nearBlackPartial,
        nearBlackPartialWorstAlpha,
        nearBlackVisiblePartialPixels: nearBlackVisiblePartial,
        total,
    };
}

/** Counts the mark's cool cues: the only pixels where blue leads red. */
export function blueCueCount(rgb, width, height) {
    let count = 0;
    for (let index = 0; index < width * height; index += 1) {
        if (rgb[index * 3 + 2] > rgb[index * 3] + 8) count += 1;
    }
    return count;
}

/** The pixel closest to a reference colour, as `{ distance, hex, count }`. */
export function nearestColour(rgb, width, height, reference) {
    let best = Number.POSITIVE_INFINITY;
    let hex = '';
    let count = 0;
    for (let index = 0; index < width * height; index += 1) {
        const r = rgb[index * 3];
        const g = rgb[index * 3 + 1];
        const b = rgb[index * 3 + 2];
        if (r === reference[0] && g === reference[1] && b === reference[2]) count += 1;
        const distance = (r - reference[0]) ** 2 + (g - reference[1]) ** 2 + (b - reference[2]) ** 2;
        if (distance < best) {
            best = distance;
            hex = `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
        }
    }
    return { distance: best, hex, exactCount: count };
}

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

const percent = (value) => `${(value * 100).toFixed(2)}%`;

async function main() {
    const reportOnly = process.argv.includes('--report');
    const sourceBytes = await readFile(sourcePath);
    const source = await sharp(sourceBytes).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = source.info;
    console.log(`[derive] source ${sourcePath}`);
    console.log(
        `[derive] source size ${width} x ${height}, channels ${source.info.channels}, sha256 ${sha256(sourceBytes)}`,
    );

    let writtenBytes = null;
    if (!reportOnly) {
        const rgba = deriveTransparent(source.data, width, height);
        writtenBytes = await sharp(rgba, { raw: { width, height, channels: 4 } })
            .png({ compressionLevel: 9, adaptiveFiltering: false, palette: false })
            .toBuffer();
        await writeFile(variantPath, writtenBytes);
        console.log(`[derive] wrote ${variantPath} (${writtenBytes.length} B)`);
    }

    const variantBytes = reportOnly ? await readFile(variantPath) : writtenBytes;
    const variant = await sharp(variantBytes).raw().toBuffer({ resolveWithObject: true });
    console.log(`[derive] variant ${variantPath}`);
    console.log(
        `[derive] variant size ${variant.info.width} x ${variant.info.height}, channels ` +
            `${variant.info.channels}, sha256 ${sha256(variantBytes)}`,
    );

    const composite = compositeOver(variant.data, width, height);
    const fidelity = compareRgb(source.data, composite, width, height);
    console.log('[derive] fidelity, variant recomposited over #010000 vs the approved source:');
    console.log(`[derive]   max delta overall ${fidelity.maxDelta} LSB ` + JSON.stringify(fidelity.maxChannelDelta));
    console.log(
        `[derive]   pixels differing at all ${fidelity.pixelsDiffering} (${percent(fidelity.pixelsDifferingShare)}), ` +
            `>1 LSB ${fidelity.pixelsOverOneLsb}, >2 LSB ${fidelity.pixelsOverTwoLsb} (${percent(
                fidelity.pixelsOverTwoLsbShare,
            )})`,
    );

    const oneLsb = oneLsbDiagnostic(source.data, composite, variant.data, width, height);
    console.log(
        `[derive]   the ${oneLsb.count} one-LSB pixels: alpha ${oneLsb.lowestAlpha}-${oneLsb.highestAlpha} ` +
            `(mean ${oneLsb.meanAlpha.toFixed(1)}), channels ${JSON.stringify(oneLsb.channelCounts)}`,
    );

    const plainComposite = compositeOver(derivePlain(source.data, width, height), width, height);
    const plainFidelity = compareRgb(source.data, plainComposite, width, height);
    console.log(
        `[derive] fidelity, card's literal colour = RGB / alpha form: max delta ${plainFidelity.maxDelta} LSB ` +
            JSON.stringify(plainFidelity.maxChannelDelta) +
            `, >2 LSB ${plainFidelity.pixelsOverTwoLsb}`,
    );

    const census = alphaCensus(variant.data, width, height);
    console.log(
        `[derive] alpha: fully transparent ${census.transparent} (${percent(census.transparentShare)}), ` +
            `partial ${census.partial} (${percent(census.partialShare)}), opaque ${census.opaque} (${percent(
                census.opaqueShare,
            )}), distinct levels ${census.distinctAlphaLevels}, darkest partial alpha ${census.darkestPartialAlpha}`,
    );
    console.log(
        `[derive] fringe check: partial-alpha pixels with a near-black colour (max channel < 32): ` +
            `${census.nearBlackPartialPixels} (worst alpha ${census.nearBlackPartialWorstAlpha}), of which with ` +
            `visible coverage (alpha > 8): ${census.nearBlackVisiblePartialPixels}`,
    );

    console.log(`[derive] cue check:`);
    console.log(
        `[derive]   blue-led pixels (B > R + 8): source ${blueCueCount(source.data, width, height)}, ` +
            `recomposited ${blueCueCount(composite, width, height)}`,
    );
    for (const [name, reference] of [
        ['Earth blue #7BA7FA', [0x7b, 0xa7, 0xfa]],
        ['Moon blue-gray #94A3B0', [0x94, 0xa3, 0xb0]],
        ['Sun core #FCA042', [0xfc, 0xa0, 0x42]],
        ['Rim light #FCC78B', [0xfc, 0xc7, 0x8b]],
    ]) {
        const inSource = nearestColour(source.data, width, height, reference);
        const inComposite = nearestColour(composite, width, height, reference);
        console.log(
            `[derive]   ${name}: source nearest ${inSource.hex} (exact ${inSource.exactCount}), recomposited nearest ` +
                `${inComposite.hex} (exact ${inComposite.exactCount})`,
        );
    }

    const rejectedBytes = await readFile(rejectedVariantPath);
    const rejected = await sharp(rejectedBytes).raw().toBuffer({ resolveWithObject: true });
    const rejectedFidelity = compareRgb(
        source.data,
        compositeOver(rejected.data, width, height),
        width,
        height,
    );
    console.log(
        `[derive] contrast, the rejected derivative docs/brand/logo.png recomposited: ` +
            `max delta ${rejectedFidelity.maxDelta} LSB ` +
            JSON.stringify(rejectedFidelity.maxChannelDelta) +
            `, >2 LSB ${rejectedFidelity.pixelsOverTwoLsb} (${percent(rejectedFidelity.pixelsOverTwoLsbShare)})`,
    );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await main();
}
