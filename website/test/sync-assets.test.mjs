import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, resolve } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import {
    gatedSourceDirectories,
    listPngNames,
    publicSourceDirectories,
    syncAssets,
} from '../scripts/assets.mjs';

let destination;

beforeAll(async () => {
    destination = await mkdtemp(resolve(tmpdir(), 'red-horizon-assets-'));
});

afterAll(async () => {
    await rm(destination, { recursive: true, force: true });
});

describe('public asset sync', () => {
    it('keeps every gated source directory out of the public sources', () => {
        const publicDirectories = publicSourceDirectories.map((path) => basename(path));
        const gatedDirectories = gatedSourceDirectories.map((path) => basename(path));

        expect(gatedDirectories).toContain('vehicle');
        for (const gatedDirectory of gatedDirectories) {
            expect(publicDirectories).not.toContain(gatedDirectory);
        }
    });

    it('copies release-cleared assets and no gated asset into the destination', async () => {
        const { copied, gated, pruned } = await syncAssets({ destination });

        expect(copied.length).toBeGreaterThan(0);
        expect(gated.length).toBeGreaterThan(0);
        expect(pruned).toEqual([]);

        const written = await listPngNames(destination);
        expect(written).toEqual(copied.sort());
        for (const gatedName of gated) {
            expect(written).not.toContain(gatedName);
        }
    });

    it('prunes a gated asset left in the destination by an earlier run', async () => {
        const [gatedName] = await listPngNames(gatedSourceDirectories[0]);
        await writeFile(resolve(destination, gatedName), 'stale copy from an earlier sync');

        const { pruned } = await syncAssets({ destination });

        expect(pruned).toEqual([gatedName]);
        expect(await listPngNames(destination)).not.toContain(gatedName);
    });
});
