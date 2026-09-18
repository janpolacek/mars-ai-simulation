/*
 * Media-scope suite: no emitted asset reaches the served output unreferenced.
 *
 * Astro's asset pipeline emits a file for every image the module graph imports,
 * whether or not a rendered page uses it. `src/features/news/media.ts` imports
 * the asset behind every `media:` key, so a key belonging to an article the
 * publication gate holds back put that article's artwork into `dist/_astro/` as
 * a raw copy with nothing linking to it — served at its hashed URL by the
 * automatic deploy while the article stayed withheld (card `t_70d50bd3`, found
 * by `t_a5abca85`: `/_astro/payload-sensor-illustration.BprT2vSN.png`, 200 /
 * 1402406 B, while 002 was a draft). `scripts/media-scope.mjs` is the rule that
 * closes the class.
 *
 * The rule reads the build output, not the frontmatter: an emitted asset no
 * built document references is exactly the asset of an item the newsroom has not
 * published, because a published item's media is rendered by its page and the
 * page names the file. That keeps one copy of the publication predicate (the
 * content collection query) and makes the prune provably safe — it can only
 * remove a file nothing serves.
 *
 * Both directions are pinned: the payload illustration flagged while it is
 * emitted unreferenced, kept once a document references it, and — on the real
 * build output — referenced whenever it is emitted at all, so this suite passes
 * whether or not 002 has been released.
 */
import { existsSync } from 'node:fs';
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';

import { projectDirectory, websiteDirectory } from '../scripts/guards.mjs';
import { checkMediaScope, emittedAssetDirectory, pruneMediaScope, scanMediaScope } from '../scripts/media-scope.mjs';
import { newsMedia } from '../src/features/news/media';

const temporaryDirectories = [];

async function temporaryDirectory(prefix) {
    const directory = await mkdtemp(join(tmpdir(), prefix));
    temporaryDirectories.push(directory);
    return directory;
}

afterAll(async () => {
    for (const directory of temporaryDirectories) {
        await rm(directory, { recursive: true, force: true });
    }
});

const distDirectory = resolve(websiteDirectory, 'dist');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** The source file behind the one currently-unpublished media key. */
const payloadSource = resolve(projectDirectory, 'docs', 'payload', '03-dust-scanning.png');

/** The name the registry resolves that key to, read off the shipped registry. */
const payloadSourceName = basename(String(newsMedia['payload-sensor-illustration'].plates[0].src));

/** The name stem Astro keeps when it emits that source: `<stem>.<hash>.<ext>`. */
const payloadStem = payloadSourceName.replace(/\.[^.]+$/, '');

/** The emitted name the real defect served. */
const emittedPayload = `${payloadStem}.BprT2vSN.png`;

/**
 * An output directory carrying the payload illustration exactly as the failing
 * build emitted it — under the generated-assets directory, with the source
 * bytes, and with a page that either references it or does not.
 */
async function distCarryingThePayloadAsset({ referenced = false } = {}) {
    const dist = await temporaryDirectory('rh-media-dist-');
    await mkdir(join(dist, emittedAssetDirectory), { recursive: true });
    await copyFile(payloadSource, join(dist, emittedAssetDirectory, emittedPayload));
    await writeFile(
        join(dist, 'index.html'),
        referenced
            ? `<img src="/${emittedAssetDirectory}/${emittedPayload}" alt="An illustrative payload sensor.">`
            : '<p>Red Horizon newsroom.</p>',
    );
    return dist;
}

describe('the emitted-asset rule', () => {
    /*
     * Non-vacuity: the fixture is the real approved asset, and the name this
     * suite plants is the name Astro gives it. If either drifts (the key is
     * renamed, the asset moves out of `docs/payload/`), the cases below would
     * otherwise pass on a file that no longer exists.
     */
    it('plants the payload source under the name its key emits', () => {
        expect(payloadSourceName).toBe('03-dust-scanning.png');
        expect(existsSync(payloadSource)).toBe(true);
        expect(emittedPayload).toMatch(/^03-dust-scanning\.[A-Za-z0-9_-]+\.png$/);
    });

    it('flags the payload illustration when the output carries it unreferenced', async () => {
        const dist = await distCarryingThePayloadAsset();
        const offences = await checkMediaScope({ directory: dist });

        expect(offences.map((offence) => offence.url)).toEqual([`/${emittedAssetDirectory}/${emittedPayload}`]);
        expect(offences[0].kind).toBe('unreferenced-emitted-asset');
        expect(offences[0].detail).toContain(`/${emittedAssetDirectory}/${emittedPayload}`);
    });

    it('keeps the same asset once a built document references it', async () => {
        const dist = await distCarryingThePayloadAsset({ referenced: true });

        expect(await checkMediaScope({ directory: dist })).toEqual([]);
    });

    it('removes the unreferenced asset and leaves the referenced one', async () => {
        const dist = await temporaryDirectory('rh-media-prune-');
        const referenced = 'plate.DEADBEEF.webp';
        await mkdir(join(dist, emittedAssetDirectory), { recursive: true });
        await writeFile(join(dist, emittedAssetDirectory, referenced), 'served bytes');
        await copyFile(payloadSource, join(dist, emittedAssetDirectory, emittedPayload));
        await writeFile(join(dist, 'index.html'), `<img src="/${emittedAssetDirectory}/${referenced}" alt="">`);

        const pruned = await pruneMediaScope({ directory: dist });

        expect(pruned.map((offence) => offence.url)).toEqual([`/${emittedAssetDirectory}/${emittedPayload}`]);
        expect(existsSync(join(dist, emittedAssetDirectory, emittedPayload))).toBe(false);
        expect(existsSync(join(dist, emittedAssetDirectory, referenced))).toBe(true);
        expect(await checkMediaScope({ directory: dist })).toEqual([]);
    });

    it('leaves output outside the generated-assets directory alone', async () => {
        const dist = await temporaryDirectory('rh-media-out-of-scope-');
        await mkdir(join(dist, 'assets'), { recursive: true });
        await writeFile(join(dist, 'robots.txt'), 'User-agent: *\n');
        await writeFile(join(dist, 'assets', 'favicon.ico'), 'icon bytes');

        // No `_astro/` file at all: nothing here is an emitted asset, so a file
        // the site serves on purpose is not "unreferenced" — the guard is about
        // the asset pipeline, not a general purge of the output.
        expect(await scanMediaScope({ directory: dist })).toEqual([]);
        expect(await checkMediaScope({ directory: dist })).toEqual([]);
    });

    it('exempts a file the build copied verbatim from public/', async () => {
        const dist = await temporaryDirectory('rh-media-passthrough-');
        const passthrough = await temporaryDirectory('rh-media-public-');
        await mkdir(join(dist, emittedAssetDirectory), { recursive: true });
        await mkdir(join(passthrough, emittedAssetDirectory), { recursive: true });
        await writeFile(join(dist, emittedAssetDirectory, 'authored.txt'), 'copied, not generated');
        await writeFile(join(passthrough, emittedAssetDirectory, 'authored.txt'), 'copied, not generated');

        expect(await checkMediaScope({ directory: dist, passthrough })).toEqual([]);
    });

    it('is applied by the build itself, not only after it', async () => {
        const config = await readFile(resolve(websiteDirectory, 'astro.config.mjs'), 'utf8');

        expect(config).toContain("import { mediaScope } from './scripts/media-scope.mjs'");
        expect(config).toMatch(/integrations:\s*\[mdx\(\), mediaScope\(\)\]/);
    });
});

describe('the real build output', () => {
    it.runIf(hasBuild)('serves no emitted asset that no built document references', async () => {
        const measured = await scanMediaScope();

        // Non-vacuity: a build output with no emitted assets would satisfy the
        // assertion below without the rule having anything to check.
        expect(measured.length).toBeGreaterThan(0);
        expect(await checkMediaScope()).toEqual([]);
        expect(measured.every((asset) => asset.referenced)).toBe(true);
    });

    it.runIf(hasBuild)('carries the payload illustration only where a page references it', async () => {
        // State-independent by construction: while 002 is a draft the file is
        // not emitted at all, and once it is published the file is emitted and
        // referenced. What must never hold is an emitted, unreferenced copy.
        const payloadAssets = (await scanMediaScope()).filter((asset) => asset.name.startsWith(`${payloadStem}.`));

        for (const asset of payloadAssets) expect(asset.referenced).toBe(true);
    });
});
