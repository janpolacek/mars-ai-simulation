import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const websiteDirectory = resolve(scriptDirectory, '..');
const projectDirectory = resolve(websiteDirectory, '..');

/** Destination of the generated public asset copies inside the website. */
export const destinationDirectory = resolve(websiteDirectory, 'public', 'assets');

/**
 * Sources whose assets are cleared for release by the current timeline step.
 * `docs/brand` holds the approved identity mark and its derivatives.
 */
export const publicSourceDirectories = [
    resolve(projectDirectory, 'docs/brand'),
];

/**
 * Gated sources. Their files are deliberately NOT copied into the public build
 * until their release step authorises it, and any copy a previous run left in
 * the destination is pruned. `docs/vehicle` holds the surface-vehicle dossier
 * and its renders, which the release controls in `docs/SCENARIO.md` withhold
 * until the vehicle-design step (`docs/timeline/003-vehicle-design.md`).
 */
export const gatedSourceDirectories = [
    resolve(projectDirectory, 'docs/vehicle'),
];

/**
 * Names of the PNG files a directory holds, or an empty list when it is absent.
 * @param {string} directory
 * @returns {Promise<string[]>}
 */
export async function listPngNames(directory) {
    let entries;
    try {
        entries = await readdir(directory, { withFileTypes: true });
    } catch (error) {
        if (error.code === 'ENOENT') return [];
        throw error;
    }

    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.png'))
        .map((entry) => entry.name)
        .sort();
}

/**
 * Copies every release-cleared asset into the public directory and keeps gated
 * assets out of it.
 * @param {{ destination?: string }} [options]
 * @returns {Promise<{ copied: string[], gated: string[], pruned: string[] }>}
 */
export async function syncAssets({ destination = destinationDirectory } = {}) {
    await mkdir(destination, { recursive: true });

    const copied = [];
    for (const sourceDirectory of publicSourceDirectories) {
        for (const name of await listPngNames(sourceDirectory)) {
            await cp(resolve(sourceDirectory, name), resolve(destination, name));
            copied.push(name);
        }
    }

    const publicNames = new Set(copied);
    const gatedNames = new Set();
    for (const sourceDirectory of gatedSourceDirectories) {
        for (const name of await listPngNames(sourceDirectory)) gatedNames.add(name);
    }

    // A gated name is pruned only when no public source provides it, so a stale
    // copy from an earlier build cannot survive into the published dist/ tree.
    const destinationNames = new Set(await listPngNames(destination));
    const pruned = [];
    for (const name of gatedNames) {
        if (publicNames.has(name) || !destinationNames.has(name)) continue;
        await rm(resolve(destination, name));
        pruned.push(name);
    }

    return {
        copied: copied.sort(),
        gated: [...gatedNames].sort(),
        pruned: pruned.sort(),
    };
}
