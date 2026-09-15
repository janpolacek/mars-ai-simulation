import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const websiteDirectory = resolve(scriptDirectory, '..');
const assetGroups = ['media', 'brand'];

for (const group of assetGroups) {
  const sourceDirectory = resolve(websiteDirectory, '..', 'assets', group);
  const destinationDirectory = resolve(websiteDirectory, 'public', group);

  await mkdir(sourceDirectory, { recursive: true });
  await rm(destinationDirectory, { recursive: true, force: true });
  await mkdir(destinationDirectory, { recursive: true });

  for (const entry of await readdir(sourceDirectory, { withFileTypes: true })) {
    if (entry.name === '.gitkeep') continue;
    await cp(resolve(sourceDirectory, entry.name), resolve(destinationDirectory, entry.name), {
      recursive: entry.isDirectory(),
    });
  }

  await writeFile(resolve(destinationDirectory, '.gitkeep'), '');
}
