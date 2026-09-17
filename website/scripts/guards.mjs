/*
 * Fail-closed guards for the public build.
 *
 * The release controls in `docs/SCENARIO.md` withhold the surface-vehicle
 * dossier until the vehicle-design step and keep the mission timeline private.
 * Those directories used to be protected by a copy step that simply did not
 * copy their files: a reference that bypassed the copy would have shipped
 * silently, and a stale generated copy was invisible to `git status`. These
 * guards fail the build instead of relying on a reviewer to notice.
 *
 * The withheld directory names are written as separate path segments so that
 * this file does not itself contain a reference into a gated directory.
 */
import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { basename, dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));

/** Root of the Astro project. */
export const websiteDirectory = resolve(scriptDirectory, '..');

/** Repository root, which holds the canonical documentation tree. */
export const projectDirectory = resolve(websiteDirectory, '..');

/** Name of the documentation directory that holds every dossier. */
export const gatedTreeDirectory = 'docs';

/** Dossier directory names whose material must never reach the public build. */
export const gatedDirectoryNames = ['vehicle', 'timeline'];

/** Absolute paths of the withheld directories. */
export const gatedSourceDirectories = gatedDirectoryNames.map((name) =>
    resolve(projectDirectory, gatedTreeDirectory, name)
);

/**
 * Text that must never appear in a public build: the vehicle designation, the
 * withheld dossier's name, and the landing-region coordinates are gated by the
 * release controls in `docs/SCENARIO.md`.
 *
 * The landing-region name is deliberately **not** in this list. The human story
 * owner released the name, the planning-centre coordinates and the three
 * `docs/area/` map plates for article 001 on 2026-09-17, and
 * `docs/SCENARIO.md` §Continuity and release controls records that partial
 * release. Everything else about the field stays withheld: the gated directory
 * names, the path-reference scan, and the markers below are unchanged, and
 * `test/guards.test.mjs` proves both halves of the retirement — a withheld
 * marker still fails a build, the released name passes.
 */
export const gatedTextMarkers = ['RH-01', 'Pathfinder', '18° 42', '226° 14'];

/**
 * Extensions scanned for gated references. Markdown prose is deliberately not
 * scanned (README text discusses the gated directories by name); MDX is, because
 * article frontmatter and bodies can reference assets.
 */
const sourceExtensions = [
    '.astro',
    '.css',
    '.html',
    '.js',
    '.json',
    '.mjs',
    '.mdx',
    '.svg',
    '.ts',
    '.yaml',
    '.yml',
];

/** Extensions whose contents are searched for gated text markers. */
const textExtensions = ['.css', '.html', '.js', '.json', '.mjs', '.svg', '.txt', '.webmanifest', '.xml'];

const skippedDirectoryNames = new Set(['.astro', '.git', 'dist', 'node_modules']);
const skippedFileNames = new Set(['package-lock.json']);

async function walk(directory, { extensions = null, into = [] } = {}) {
    let entries;
    try {
        entries = await readdir(directory, { withFileTypes: true });
    } catch (error) {
        if (error.code === 'ENOENT') return into;
        throw error;
    }

    for (const entry of entries) {
        const path = resolve(directory, entry.name);
        if (entry.isDirectory()) {
            if (skippedDirectoryNames.has(entry.name)) continue;
            await walk(path, { extensions, into });
            continue;
        }
        if (!entry.isFile()) continue;
        if (skippedFileNames.has(entry.name)) continue;
        if (extensions && !extensions.some((extension) => entry.name.endsWith(extension))) continue;
        into.push(path);
    }

    return into;
}

/** Every non-ignored file under `directory`. */
export function listFiles(directory) {
    return walk(directory, { extensions: null, into: [] });
}

/** Site source files that could hold a reference to an asset. */
export function listSourceFiles(directory) {
    return walk(directory, { extensions: sourceExtensions, into: [] });
}

function isInsideDirectory(target, directory) {
    const path = relative(directory, target);
    return path === '' || (path !== '..' && !path.startsWith(`..${sep}`) && !isAbsolute(path));
}

/**
 * Find every reference in the site source that resolves into a withheld
 * directory. Two rules: a literal path into the documentation tree, and any
 * relative reference (import, `src=`, markdown link) whose resolved target lies
 * inside a withheld directory.
 *
 * @returns {Promise<Array<{ kind: string, file: string, detail: string }>>}
 */
export async function scanSourceForGatedReferences({
    directory = websiteDirectory,
    gatedDirectories = gatedSourceDirectories,
} = {}) {
    const gatedNames = gatedDirectories.map((gatedDirectory) => basename(gatedDirectory));
    const literalPattern = new RegExp(
        `(?:^|[^A-Za-z0-9_])(?:[A-Za-z0-9_$@.~-]+/)*${gatedTreeDirectory}/(?:${gatedNames.join('|')})(?![A-Za-z0-9_-])`,
        'i',
    );
    const literalPatternGlobal = new RegExp(literalPattern.source, 'gi');
    const quotedPattern = /(['"`])([^'"`\n]{1,300})\1|!?\[[^\]]*\]\(([^)\s]{1,300})\)/g;

    const offences = [];
    for (const file of await listSourceFiles(directory)) {
        const text = await readFile(file, 'utf8');

        for (const match of text.matchAll(literalPatternGlobal)) {
            offences.push({ kind: 'gated-path', file, detail: match[0].trim() });
        }

        for (const match of text.matchAll(quotedPattern)) {
            const reference = match[2] ?? match[3];
            if (!reference || !reference.startsWith('.')) continue;
            const target = resolve(dirname(file), reference);
            if (!gatedDirectories.some((gatedDirectory) => isInsideDirectory(target, gatedDirectory))) continue;
            offences.push({ kind: 'gated-reference', file, detail: reference });
        }
    }

    return offences;
}

async function sha256(file) {
    return createHash('sha256').update(await readFile(file)).digest('hex');
}

/**
 * Every withheld source file with the identities a build output could carry:
 * its file name, its leading name token, and its content hash.
 */
export async function collectGatedSources(directories = gatedSourceDirectories) {
    const sources = [];
    for (const directory of directories) {
        for (const file of await listFiles(directory)) {
            const name = basename(file);
            sources.push({ path: file, name, stem: name.split('.')[0], sha256: await sha256(file) });
        }
    }
    return sources;
}

/**
 * Check a build output directory for withheld material: a file that matches a
 * withheld source by name, by leading name token (catches a re-encoded copy),
 * or by content hash, and any text file carrying a gated marker.
 *
 * @returns {Promise<Array<{ kind: string, file: string, detail: string }>>}
 */
export async function checkDist({
    directory = resolve(websiteDirectory, 'dist'),
    sources,
    markers = gatedTextMarkers,
} = {}) {
    const gatedSources = sources ?? (await collectGatedSources());
    const names = new Set(gatedSources.map((source) => source.name));
    const stems = new Set(gatedSources.map((source) => source.stem));
    const byHash = new Map(gatedSources.map((source) => [source.sha256, source.path]));

    const offences = [];
    for (const file of await listFiles(directory)) {
        const name = basename(file);
        if (names.has(name)) offences.push({ kind: 'gated-name', file, detail: name });
        else if (stems.has(name.split('.')[0])) offences.push({ kind: 'gated-name-stem', file, detail: name });

        const digest = await sha256(file);
        if (byHash.has(digest)) offences.push({ kind: 'gated-content', file, detail: byHash.get(digest) });

        if (!textExtensions.some((extension) => name.endsWith(extension))) continue;
        const text = (await readFile(file, 'utf8')).toLowerCase();
        for (const marker of markers) {
            if (text.includes(marker.toLowerCase())) offences.push({ kind: 'gated-text', file, detail: marker });
        }
    }

    return offences;
}

/** Every generated HTML route in a build output directory, as a URL path. */
export async function listRoutes(directory = resolve(websiteDirectory, 'dist')) {
    return (await listFiles(directory))
        .filter((file) => file.endsWith('.html'))
        .map((file) => `/${relative(directory, file).split(sep).join('/')}`)
        .sort();
}

/** Root of the verbatim passthrough directory: files Astro copies, not generates. */
export const publicDirectory = resolve(websiteDirectory, 'public');

/**
 * Every URL path answered by a verbatim copy of a file in `public/`.
 *
 * Astro copies `public/` into the build output byte for byte, so each file in it
 * is *served* at one path rather than generated by a page. Those documents are
 * authored outside the page pipeline (an engine verification file, `robots.txt`,
 * a manifest): no layout or route can give them page metadata, and one of them
 * carries no `<title>` by prescription. This is kept beside `listRoutes()` rather
 * than filtered out of it, because "every HTML document in the output" and "every
 * document a page generated" are two different true statements: `listRoutes()`
 * still answers the first, and the page assertions ask the second.
 */
export async function listPassthroughRoutes(directory = publicDirectory) {
    return (await listFiles(directory))
        .map((file) => `/${relative(directory, file).split(sep).join('/')}`)
        .sort();
}

/**
 * Every route a page generated: the build output minus the verbatim `public/`
 * copies. A path that also exists under `public/` is served from there, so it is
 * not a generated route.
 */
export async function listGeneratedRoutes(directory = resolve(websiteDirectory, 'dist')) {
    const passthrough = new Set(await listPassthroughRoutes());
    return (await listRoutes(directory)).filter((route) => !passthrough.has(route));
}
