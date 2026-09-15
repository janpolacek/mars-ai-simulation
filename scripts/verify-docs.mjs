#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const coreDocuments = [
  'docs/PLAN.md',
  'docs/INSTRUCTIONS.md',
  'docs/GENERAL.md',
  'docs/agents/README.md',
  'docs/timeline/README.md',
  'docs/vehicles/red-horizon-01.md',
];

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = resolve(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
  });
}

const documents = markdownFiles(resolve(root, 'docs'));
const linkPattern = /\[[^\]]+\]\(([^)#]+)(?:#[^)]+)?\)/g;
const requiredPolicyText = [
  ['docs/PLAN.md', 'Phase 0 — Operating foundation'],
  ['docs/INSTRUCTIONS.md', 'do not route, import, quote'],
  ['docs/GENERAL.md', 'canonical only after human approval'],
  ['docs/agents/README.md', 'Article harness mapping'],
  ['docs/timeline/README.md', 'This directory is the hidden scenario backbone.'],
  ['docs/vehicles/red-horizon-01.md', 'proposed private canon'],
];

const failures = [];
for (const absolutePath of documents) {
  const relativePath = relative(root, absolutePath);
  if (!existsSync(absolutePath)) {
    failures.push(`Missing core document: ${relativePath}`);
    continue;
  }
  const contents = readFileSync(absolutePath, 'utf8');
  for (const match of contents.matchAll(linkPattern)) {
    const target = match[1];
    if (/^[a-z]+:/i.test(target) || target.startsWith('/')) continue;
    const targetPath = resolve(dirname(absolutePath), target);
    if (!existsSync(targetPath)) failures.push(`${relativePath} links to missing ${target}`);
  }
}
for (const [relativePath, text] of requiredPolicyText) {
  if (!readFileSync(resolve(root, relativePath), 'utf8').includes(text)) {
    failures.push(`${relativePath} is missing required policy text: ${text}`);
  }
}

if (failures.length) {
  process.stderr.write(`Documentation verification failed:\n- ${failures.join('\n- ')}\n`);
  process.exit(1);
}
process.stdout.write(`Documentation verification passed (${documents.length} docs files; ${coreDocuments.length} core documents).\n`);
