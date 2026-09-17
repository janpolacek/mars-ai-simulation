/*
 * Media-scope guard for the public build.
 *
 * Astro's asset pipeline emits a file for every image the module graph imports,
 * whether or not a rendered page uses it: `src/features/news/media.ts` imports
 * the asset behind every `media:` key, so a key that belongs to an unpublished
 * article puts that article's artwork into `dist/_astro/` as a raw copy — with a
 * content-hashed name, and with nothing linking to it. Because a push to `main`
 * is the automatic production deployment, that copy is served at its `_astro`
 * URL while the article itself is held back by the publication gate.
 * `website/test/media-scope.test.mjs` pins the rule below on fixtures and on the
 * real build output.
 *
 * The rule: an asset the build emitted into its generated-assets directory is
 * served only when a built document references it. That is the same statement as
 * "no asset of an item the newsroom has not published is emitted", for two
 * reasons read off the site, not guessed:
 *
 * - Every asset a published page renders is referenced by that page: Astro emits
 *   the optimised derivative *because* an `<Image>` consumed it, and writes its
 *   URL into the markup or the stylesheet.
 * - Nothing renders the media of an item the publication gate holds back:
 *   `src/features/news/query.ts` feeds the same published selection to the
 *   carousel, the newsroom index and the `/news/<slug>/` route generator, so no
 *   page names that key and no page can reference its asset.
 *
 * So the guard needs no second copy of the publication rule — it reads the
 * build output. A file with no reference is unreachable by definition, which is
 * what makes the prune safe: it can never remove something a page serves.
 *
 * `public/` is exempt: Astro copies that directory into the output byte for byte
 * and those files are served as authored (the engine verification file is
 * unreferenced by design), so the guard never touches them.
 */
/* global console */
import { existsSync } from 'node:fs';
import { readFile, rm } from 'node:fs/promises';
import { basename, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { listFiles, websiteDirectory } from './guards.mjs';

/** The directory Astro writes its generated, content-hashed assets into. */
export const emittedAssetDirectory = '_astro';

/** The verbatim passthrough directory: copied, never generated. */
export const passthroughDirectory = resolve(websiteDirectory, 'public');

/**
 * Extensions whose contents can reference an emitted asset: page markup, an
 * emitted stylesheet or client chunk, a manifest. Kept beside `guards.mjs`'s
 * list rather than shared with it, because this scan reads the build output
 * (where a document referencing an asset is any text file) and that one reads
 * the site source.
 */
const referenceExtensions = ['.css', '.html', '.json', '.js', '.mjs', '.svg', '.txt', '.webmanifest', '.xml'];

/** Whether a build-output file could carry a reference to an emitted asset. */
function isReferenceDocument(file) {
    return referenceExtensions.some((extension) => file.endsWith(extension));
}

/** A build-output path as the URL path it is served at. */
function urlPath(directory, file) {
    return `/${relative(directory, file).split(sep).join('/')}`;
}

/**
 * Measure every asset the build emitted into its generated-assets directory,
 * and whether any document in the same output references it.
 *
 * @returns {Promise<Array<{ file: string, url: string, name: string, passthrough: boolean, referenced: boolean }>>}
 */
export async function scanMediaScope({
    directory = resolve(websiteDirectory, 'dist'),
    passthrough = passthroughDirectory,
} = {}) {
    const files = await listFiles(directory);

    const parts = [];
    for (const file of files) {
        if (isReferenceDocument(file)) parts.push(await readFile(file, 'utf8'));
    }
    const corpus = parts.join('\n');

    const measured = [];
    for (const file of files) {
        const url = urlPath(directory, file);
        if (!url.startsWith(`/${emittedAssetDirectory}/`)) continue;

        const name = basename(file);
        measured.push({
            file,
            url,
            name,
            // `public/` is copied verbatim: a file that also exists there is
            // served as authored, whatever the generated-assets scan sees.
            passthrough: existsSync(resolve(passthrough, url.slice(1))),
            // Names are content-hashed and unique, so a substring match cannot
            // credit the wrong file.
            referenced: corpus.includes(name),
        });
    }

    return measured;
}

/**
 * Every emitted asset in a build output that no document in it references.
 *
 * @returns {Promise<Array<{ kind: string, file: string, url: string, detail: string }>>}
 */
export async function checkMediaScope({ directory, passthrough } = {}) {
    const measured = await scanMediaScope({ directory, passthrough });

    return measured
        .filter((asset) => !asset.passthrough && !asset.referenced)
        .map((asset) => ({
            kind: 'unreferenced-emitted-asset',
            file: asset.file,
            url: asset.url,
            detail: `no built document references ${asset.url}`,
        }));
}

/**
 * Remove every emitted asset no document in the output references, and report
 * what was removed. A build that runs this cannot serve an asset only an
 * unpublished item's `media:` key resolved to.
 *
 * @returns {Promise<Array<{ kind: string, file: string, url: string, detail: string }>>}
 */
export async function pruneMediaScope({ directory, passthrough } = {}) {
    const offences = await checkMediaScope({ directory, passthrough });

    for (const offence of offences) {
        await rm(offence.file, { force: true });
    }

    return offences;
}

/**
 * Astro integration: apply the rule to the finished build, inside `astro build`
 * itself, so `astro build` alone already produces an output that does not carry
 * the asset.
 *
 * The prune is not silent — the build output is the only place the name of a
 * withheld-at-publication asset would have appeared, so every removed file is
 * printed.
 */
export function mediaScope() {
    return {
        name: 'media-scope',
        hooks: {
            /** @param {{ dir: URL }} options */
            'astro:build:done': async ({ dir }) => {
                const directory = fileURLToPath(dir);
                const pruned = await pruneMediaScope({ directory });

                if (pruned.length === 0) {
                    console.log(
                        `[media-scope] every asset emitted into ${emittedAssetDirectory}/ is referenced by a built document.`,
                    );
                    return;
                }

                console.log(
                    `[media-scope] withheld ${pruned.length} emitted asset(s) no article the newsroom publishes references:`,
                );
                for (const offence of pruned) console.log(`  - ${offence.url}`);
            },
        },
    };
}
