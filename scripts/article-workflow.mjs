#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = resolve(process.env.ARTICLE_WORKFLOW_ROOT || scriptRoot);
const ROLES = Object.freeze({
  research: 'research-and-fact-check',
  redactor: 'article-drafting',
  visual: 'image-generation',
  editor: 'editorial-review',
  tech: 'site-deployment',
});
const STAGES = Object.freeze({
  research: 'research',
  redactor: 'draft',
  visual: 'assets',
  editor: 'review',
  tech: 'deploy',
});

function fail(message) {
  process.stderr.write(`Error: ${message}\n`);
  process.exitCode = 1;
}

function parseArgs(values) {
  const args = {};
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (!value.startsWith('--')) continue;
    const key = value.slice(2);
    if (key === 'force') {
      args.force = true;
      continue;
    }
    const next = values[index + 1];
    if (!next || next.startsWith('--')) throw new Error(`Missing value for --${key}.`);
    args[key] = next;
    index += 1;
  }
  return args;
}

function shell(command, args, { json = false } = {}) {
  const result = spawnSync(command, args, { cwd: ROOT, encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed:\n${result.stderr || result.stdout}`);
  }
  const output = result.stdout.trim();
  return json ? JSON.parse(output) : output;
}

function bd(args, options) {
  return shell('bd', args, options);
}

function quoteYaml(value) {
  return JSON.stringify(value);
}

function checkSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

function filePath(...segments) {
  return resolve(ROOT, ...segments);
}

function artifactPaths(slug) {
  return {
    brief: `content/briefs/${slug}.md`,
    sources: `content/sources/${slug}.md`,
    article: `content/articles/${slug}.md`,
    review: `content/reviews/${slug}.md`,
    assets: `assets/articles/${slug}/assets.md`,
  };
}

function writeNew(relativePath, contents) {
  const destination = filePath(relativePath);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, contents, { encoding: 'utf8', flag: 'wx' });
}

function articleTemplates({ title, slug, brief, author, timelineStep }) {
  const paths = artifactPaths(slug);
  return {
    [paths.brief]: `# ${title}\n\n## Request\n\n${brief}\n\n## Workflow context\n\n- Slug: \`${slug}\`\n- Author: ${author}\n- Timeline step: \`${timelineStep}\`\n- Public/canon status: proposal; requires human review before approval or release.\n\n## Constraints\n\n- Do not expose private scenario material.\n- Cite every material factual claim through the source pack.\n- Keep the Red Horizon project clearly fictional and AI-assisted where relevant.\n`,
    [paths.sources]: `# Source pack: ${title}\n\nStatus: pending research\n\n| Material claim | Canonical URL | Publisher / author | Published or updated | Accessed | Support note |\n| --- | --- | --- | --- | --- | --- |\n`,
    [paths.article]: `---\ntitle: ${quoteYaml(title)}\nslug: ${slug}\nstatus: draft\nauthor: ${quoteYaml(author)}\npublished_at: null\nsources_file: ${quoteYaml(paths.sources)}\nreview_file: ${quoteYaml(paths.review)}\nasset_manifest: ${quoteYaml(paths.assets)}\ntimeline_step: ${quoteYaml(timelineStep)}\n---\n\n<!-- The redactor replaces this comment after the source pack is complete. -->\n`,
    [paths.review]: `# Editorial review: ${title}\n\nFinal status: pending\n\n| Check | Result | Evidence or required correction |\n| --- | --- | --- |\n| Factual claims and citations | pending | |\n| Broken or misleading links | pending | |\n| Title/body coherence and internal consistency | pending | |\n| Audience, voice, grammar, and house style | pending | |\n| Image placement, captions, and meaningful alt text | pending | |\n| Metadata and CMS-content schema | pending | |\n\n## Decision\n\nEditorial result: pending\n\nAn editorial approval does not approve canon, publication, or deployment.\n`,
    [paths.assets]: `# Asset manifest: ${title}\n\nStatus: pending visual work\n\n| Path | Placement target | Alt text | Caption | Source or prompt | Model/tool | Licence or permission status |\n| --- | --- | --- | --- | --- | --- |\n`,
  };
}

function existingArtifacts(paths) {
  return Object.values(paths).filter((relativePath) => {
    try {
      readFileSync(filePath(relativePath));
      return true;
    } catch (error) {
      if (error.code === 'ENOENT') return false;
      throw error;
    }
  });
}

function createIssue(title, parent, labels, skill, description, acceptance, type = 'task') {
  const args = [
    'create', title, '--type', type, '--parent', parent, '--labels', labels.join(','),
    '--description', description, '--acceptance', acceptance, '--silent',
  ];
  if (skill) args.push('--skills', skill);
  return bd(args);
}

function createWorkflow(args) {
  const { title, slug, brief, author = 'Red Horizon editorial team', 'timeline-step': timelineStep } = args;
  if (!title || !slug || !brief || !timelineStep) {
    throw new Error('create requires --title, --slug, --brief, and --timeline-step.');
  }
  if (!checkSlug(slug)) throw new Error('Slug must use lowercase letters, numbers, and single hyphens.');
  if (timelineStep !== 'site-foundation' && !/^\d{3}-[a-z0-9-]+$/.test(timelineStep)) {
    throw new Error('Timeline step must be site-foundation or an approved step such as 001-coalition-proposal.');
  }

  const paths = artifactPaths(slug);
  const existing = existingArtifacts(paths);
  if (existing.length && !args.force) {
    throw new Error(`Refusing to overwrite existing workflow artifacts: ${existing.join(', ')}. Use a new slug.`);
  }
  if (existing.length) throw new Error('--force is intentionally unsupported for workflow artifacts; create a corrective issue instead.');

  const baseLabels = ['content', 'article', `slug:${slug}`];
  const epic = bd([
    'create', `Article: ${title}`, '--type', 'epic', '--labels', baseLabels.join(','),
    '--description', `Article workflow for ${slug}. Brief: ${paths.brief}. Timeline step: ${timelineStep}. This is a proposal until human canon and release approval.`,
    '--acceptance', 'All child tasks close with evidence; final artifacts exist; editorial review passes; deployment remains human-authorised and verified.', '--silent',
  ]);

  const ids = { epic };
  ids.research = createIssue(`Research source pack: ${slug}`, epic, [...baseLabels, 'role:research', 'stage:research'], ROLES.research,
    `Read ${paths.brief}. Write ${paths.sources}; record every material claim with a canonical source, URL, dates, and support note.`,
    `Source pack exists at ${paths.sources}; every material claim has a canonical source or an explicit unresolved note.`);
  ids.draft = createIssue(`Draft article: ${slug}`, epic, [...baseLabels, 'role:redactor', 'stage:draft'], ROLES.redactor,
    `Read ${paths.brief} and ${paths.sources}. Draft ${paths.article}; preserve metadata and cite the source pack.`,
    `Article exists at ${paths.article}; it follows the brief, preserves draft status, and every material claim traces to ${paths.sources}.`);
  ids.images = createIssue(`Create visual assets: ${slug}`, epic, [...baseLabels, 'role:visual', 'stage:assets'], ROLES.visual,
    `Read ${paths.article} and ${paths.brief}. Place candidates under assets/articles/${slug}/ and complete ${paths.assets}.`,
    `Asset manifest exists at ${paths.assets}; candidates have placement, alt text, caption, source/prompt, tool, and rights records.`);
  ids.review = createIssue(`Editorial final gate: ${slug}`, epic, [...baseLabels, 'role:editor', 'stage:review'], ROLES.editor,
    `Review ${paths.article}, ${paths.sources}, and ${paths.assets}. Record pass/fail evidence in ${paths.review}; create a corrective dependency for any material failure.`,
    `Review record at ${paths.review} is approved and the article has integrated, accessible, rights-cleared asset evidence.`);
  ids.deploy = createIssue(`Build and deploy: ${slug}`, epic, [...baseLabels, 'role:tech', 'stage:deploy'], ROLES.tech,
    `After an approved editorial record, validate the local site article package. Production deployment requires a current explicit human approval reference; otherwise record the blocker and do not close.`,
    'Schema/front matter, build, and preview pass; production deployment closes only with human approval and a verified URL.');

  bd(['dep', 'add', ids.draft, ids.research]);
  bd(['dep', 'add', ids.images, ids.draft]);
  bd(['dep', 'add', ids.review, ids.images]);
  bd(['dep', 'add', ids.deploy, ids.review]);

  const templates = articleTemplates({ title, slug, brief, author, timelineStep });
  for (const [relativePath, contents] of Object.entries(templates)) writeNew(relativePath, contents);
  bd(['update', epic, '--append-notes', `Workflow created. Artifacts: ${Object.values(paths).join(', ')}. Child issues: research ${ids.research}, draft ${ids.draft}, images ${ids.images}, review ${ids.review}, deploy ${ids.deploy}.`]);
  process.stdout.write(`${JSON.stringify({ ids, paths }, null, 2)}\n`);
}

function articleIssue(issue) {
  const labels = issue.labels || [];
  return labels.includes('content') && labels.includes('article') && labels.some((label) => label.startsWith('slug:'));
}

function dispatch() {
  const ready = bd(['ready', '--json'], { json: true });
  const records = ready.filter(articleIssue).flatMap((issue) => {
    const roleLabels = (issue.labels || []).filter((label) => label.startsWith('role:'));
    if (roleLabels.length !== 1) return [];
    const role = roleLabels[0].slice('role:'.length);
    const skill = ROLES[role];
    if (!skill) return [];
    const slug = (issue.labels || []).find((label) => label.startsWith('slug:'))?.slice('slug:'.length);
    if (!slug) return [];
    const paths = artifactPaths(slug);
    return [{
      issue_id: issue.id,
      title: issue.title,
      role,
      stage: STAGES[role],
      skill,
      slug,
      artifact_paths: paths,
      worker_prompt: `You are the ${skill} worker. Claim and complete Beads issue ${issue.id} only. Repository root: ${ROOT}. Read AGENTS.md, the issue, and declared artifacts. Apply .agents/skills/${skill}/SKILL.md. Record output paths, source URLs where applicable, checks, and failures in Beads before closing. Do not work outside this issue or deploy without current explicit human approval.`,
    }];
  });
  process.stdout.write(`${JSON.stringify(records, null, 2)}\n`);
}

function usage() {
  process.stdout.write(`Usage: article-workflow.mjs create --title <title> --slug <slug> --brief <brief> --timeline-step <step> [--author <author>]
       article-workflow.mjs dispatch
`);
}

try {
  const [command, ...values] = process.argv.slice(2);
  if (command === 'create') createWorkflow(parseArgs(values));
  else if (command === 'dispatch') dispatch();
  else usage();
} catch (error) {
  fail(error.message);
}
