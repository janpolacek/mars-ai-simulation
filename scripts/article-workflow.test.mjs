#!/usr/bin/env node
import assert from 'node:assert/strict';
import { chmodSync, existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workflow = join(repositoryRoot, 'scripts/article-workflow.mjs');
const fixture = mkdtempSync(join(tmpdir(), 'mars-article-workflow-'));
const fakeBin = join(fixture, 'bin');
const logPath = join(fixture, 'bd-log.jsonl');
const counterPath = join(fixture, 'bd-counter');
const requiredSkills = [
  'create-article-workflow',
  'research-and-fact-check',
  'article-drafting',
  'image-generation',
  'editorial-review',
  'site-deployment',
];

function run(args, extraEnv = {}) {
  const result = spawnSync(process.execPath, [workflow, ...args], {
    cwd: fixture,
    encoding: 'utf8',
    env: { ...process.env, ARTICLE_WORKFLOW_ROOT: fixture, PATH: `${fakeBin}:${process.env.PATH}`, ...extraEnv },
  });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout;
}

try {
  for (const skill of requiredSkills) {
    const contents = readFileSync(join(repositoryRoot, '.agents/skills', skill, 'SKILL.md'), 'utf8');
    assert.match(contents, /Required inputs:/);
    assert.match(contents, /Allowed tools:/);
    assert.match(contents, /Reject/);
    assert.match(contents, /[Aa]cceptance\s+checks/);
    assert.match(contents, /Beads/);
  }
  mkdirSync(fakeBin, { recursive: true });
  writeFileSync(join(fixture, 'AGENTS.md'), '# test\n');
  writeFileSync(join(fakeBin, 'bd'), `#!/usr/bin/env node
const { appendFileSync, existsSync, readFileSync, writeFileSync } = require('node:fs');
const args = process.argv.slice(2);
appendFileSync(process.env.BD_TEST_LOG, JSON.stringify(args) + '\\n');
if (args[0] === 'create') {
  const next = existsSync(process.env.BD_TEST_COUNTER) ? Number(readFileSync(process.env.BD_TEST_COUNTER, 'utf8')) + 1 : 1;
  writeFileSync(process.env.BD_TEST_COUNTER, String(next));
  process.stdout.write('test-' + next + '\\n');
}
else if (args[0] === 'ready') process.stdout.write(process.env.BD_TEST_READY || '[]');
`, 'utf8');
  chmodSync(join(fakeBin, 'bd'), 0o755);

  const output = run(['create', '--title', 'Test article', '--slug', 'test-article', '--brief', 'A public-safe test.', '--timeline-step', 'site-foundation'], {
    BD_TEST_LOG: logPath,
    BD_TEST_COUNTER: counterPath,
  });
  const created = JSON.parse(output);
  assert.equal(created.paths.article, 'content/articles/test-article.md');
  assert.ok(existsSync(join(fixture, created.paths.brief)));
  assert.match(readFileSync(join(fixture, created.paths.article), 'utf8'), /status: draft/);
  assert.match(readFileSync(join(fixture, created.paths.review), 'utf8'), /Final status: pending/);

  const calls = readFileSync(logPath, 'utf8').trim().split('\n').map(JSON.parse);
  assert.equal(calls.filter((call) => call[0] === 'create').length, 6);
  const dependencies = calls.filter((call) => call[0] === 'dep' && call[1] === 'add');
  assert.equal(dependencies.length, 4);
  assert.deepEqual(dependencies.map((call) => call.slice(2, 4)), [
    [created.ids.draft, created.ids.research],
    [created.ids.images, created.ids.draft],
    [created.ids.review, created.ids.images],
    [created.ids.deploy, created.ids.review],
  ]);
  assert.ok(calls.some((call) => call.join(' ').includes('role:research')));
  assert.ok(calls.some((call) => call.join(' ').includes('role:editor')));

  const readyIssue = [{ id: 'test-ready', title: 'Research source pack: test-article', labels: ['content', 'article', 'slug:test-article', 'role:research', 'stage:research'] }];
  const dispatched = JSON.parse(run(['dispatch'], { BD_TEST_LOG: logPath, BD_TEST_READY: JSON.stringify(readyIssue), BD_TEST_COUNTER: counterPath }));
  assert.equal(dispatched.length, 1);
  assert.equal(dispatched[0].skill, 'research-and-fact-check');
  assert.match(dispatched[0].worker_prompt, /test-ready/);

  const nonArticle = JSON.parse(run(['dispatch'], { BD_TEST_LOG: logPath, BD_TEST_READY: JSON.stringify([{ id: 'ignore', labels: ['role:research'] }]), BD_TEST_COUNTER: counterPath }));
  assert.deepEqual(nonArticle, []);
  process.stdout.write('article-workflow contract test passed\n');
} finally {
  rmSync(fixture, { recursive: true, force: true });
}
