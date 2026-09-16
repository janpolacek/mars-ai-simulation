import { cp, mkdir, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const websiteDirectory = resolve(scriptDirectory, '..');
const projectDirectory = resolve(websiteDirectory, '..');
const destinationDirectory = resolve(websiteDirectory, 'public', 'assets');
const sourceDirectories = [
    resolve(projectDirectory, 'docs/brand'),
    resolve(projectDirectory, 'docs/vehicle'),
];

await mkdir(destinationDirectory, { recursive: true });

for (const sourceDirectory of sourceDirectories) {
    let entries;
    try {
        entries = await readdir(sourceDirectory, { withFileTypes: true });
    } catch (error) {
        if (error.code === 'ENOENT') continue;
        throw error;
    }

    for (const entry of entries) {
        if (!entry.isFile() || !entry.name.endsWith('.png')) continue;
        await cp(resolve(sourceDirectory, entry.name), resolve(destinationDirectory, entry.name));
    }
}
