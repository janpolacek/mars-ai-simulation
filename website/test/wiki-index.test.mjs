/*
 * Wiki tree suite: one selection, three surfaces, and a page added to the tree
 * reaching every one of them with no second edit.
 *
 * The unit half runs without a build. The build half runs the real Astro CLI
 * over a throwaway project root this suite owns — the real `src/`, `scripts/`
 * and `astro.config.mjs` beside a `wiki/` directory holding this suite's own
 * fixture pages — so what is asserted is a genuine build output produced by the
 * real index pages and the real route generators, while the input is a state
 * this suite can create on purpose rather than the repository's own wiki (which
 * is empty on purpose: nothing in the tree is published yet).
 *
 * The published controls are not decoration, they are the non-vacuity half. A
 * build that rendered no wiki page at all would satisfy "the draft is absent"
 * trivially, so the published pages' routes, their entries in the index, their
 * section indexes and their bodies in the same corpus are asserted beside it.
 *
 * Why the fixture is built outside the repository: `website/` is shared by every
 * profile (`workspace_kind: dir`), so a page written into `website/wiki/` for the
 * length of one test would be picked up by a sibling card's concurrent build.
 * The root links the packages one at a time so its content-layer store is its
 * own (`linkPackages`), because Astro's cache directory defaults to
 * `./node_modules/.astro` and a shared store is written by every fixture build.
 */
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { cp, mkdir, mkdtemp, readdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execPath } from 'node:process';
import { promisify } from 'node:util';
import { afterAll, describe, expect, it } from 'vitest';

import { listFiles, listRoutes, projectDirectory, websiteDirectory } from '../scripts/guards.mjs';
import { headerNavigation, navigation } from '../src/lib/navigation';
import {
    groupWikiBySection,
    selectPublicWiki,
    selectRelatedWiki,
    wikiSectionLabel,
    wikiSections,
    wikiSectionsWithPages,
} from '../src/lib/wiki-query';

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
const wikiDirectory = resolve(websiteDirectory, 'wiki');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** Collapse runs of whitespace so a rendered page can be compared to source text. */
const collapse = (value) => value.replace(/\s+/g, ' ').trim();

/** How many times a pattern matches — not how many lines, which is what `grep -c` counts. */
function countMatches(text, pattern) {
    return (text.match(pattern) ?? []).length;
}

/** Strip markup, so a claim about text is not satisfied or defeated by an attribute. */
function stripMarkup(html) {
    return html.replace(/<[^>]*>/g, ' ');
}

describe('the wiki selection', () => {
    const publishedVehicle = {
        id: 'rh-01-pathfinder',
        data: { publication: 'published', order: 1, section: 'vehicle' },
    };
    const draftVehicle = { id: 'withheld-vehicle', data: { publication: 'draft', order: 2, section: 'vehicle' } };
    const publishedProject = {
        id: 'programme-framing',
        data: { publication: 'published', order: 3, section: 'project' },
    };
    const noStateDeclared = { id: 'no-state', data: { order: 4, section: 'project' } };

    it('selects every published page and nothing else', () => {
        const selected = selectPublicWiki([publishedVehicle, draftVehicle, publishedProject]);

        expect(selected.map((entry) => entry.id)).toEqual(['rh-01-pathfinder', 'programme-framing']);
    });

    it('orders the published selection by frontmatter order', () => {
        expect(selectPublicWiki([publishedProject, publishedVehicle]).map((entry) => entry.id)).toEqual([
            'rh-01-pathfinder',
            'programme-framing',
        ]);
    });

    it('holds back a page that omits publication, the same fail-closed default as news', () => {
        expect(selectPublicWiki([draftVehicle, noStateDeclared])).toEqual([]);
    });

    it('selects nothing from an empty collection', () => {
        expect(selectPublicWiki([])).toEqual([]);
    });

    it('names the tree sections, and labels each from its own name', () => {
        expect([...wikiSections]).toEqual(['area', 'vehicle', 'project']);
        expect(wikiSections.map((section) => wikiSectionLabel(section))).toEqual(['Area', 'Vehicle', 'Project']);
    });

    it('groups a published selection by section and drops empty sections', () => {
        const groups = groupWikiBySection(selectPublicWiki([publishedProject, publishedVehicle]));

        expect(groups.map((group) => group.section)).toEqual(['vehicle', 'project']);
        expect(wikiSectionsWithPages(selectPublicWiki([publishedProject]))).toEqual(['project']);
        expect(wikiSectionsWithPages(selectPublicWiki([draftVehicle]))).toEqual([]);
    });

    it('resolves related ids against the published selection only', () => {
        const selected = selectPublicWiki([publishedVehicle, draftVehicle, publishedProject]);

        expect(
            selectRelatedWiki(selected, ['programme-framing', 'withheld-vehicle', 'never-existed']).map((entry) =>
                entry.id
            ),
        ).toEqual(['programme-framing']);
        expect(selectRelatedWiki(selected, undefined)).toEqual([]);
    });
});

describe('one query drives all three wiki surfaces', () => {
    it('renders the wiki entry in the header and in the footer from one definition', () => {
        const entry = navigation.find((item) => item.href === '/wiki/');

        expect(entry, 'navigation.ts has no /wiki/ entry').toBeDefined();
        expect(entry.label).toBe('Wiki');
        expect(entry.footerOnly, 'the wiki entry is a header item as well as a footer one').not.toBe(true);
        expect(headerNavigation.map((item) => item.href)).toContain('/wiki/');
    });

    it('reads the same published selection in the index, the section index and the route generator', async () => {
        const consumers = [
            'src/pages/wiki/index.astro',
            'src/pages/wiki/[section]/index.astro',
            'src/pages/wiki/[section]/[slug].astro',
        ];

        for (const consumer of consumers) {
            const source = await readFile(join(websiteDirectory, consumer), 'utf8');
            expect(source, `${consumer} does not use the published wiki query`).toMatch(
                /import \{ getPublishedWiki \} from '[^']*query'/,
            );
        }
    });
});

/*
 * ---------------------------------------------------------------------------
 * The fixture wiki tree
 * ---------------------------------------------------------------------------
 */

/** How long a fixture build may take before the case fails. */
const fixtureBuildTimeout = 180_000;

const fixtureVehicleControl = {
    slug: '901-wiki-fixture-vehicle-control',
    title: 'Wiki fixture: the published vehicle control',
    section: 'vehicle',
    publication: 'published',
    order: 1,
    summary: 'A published vehicle page the wiki index must list.',
    related: '902-wiki-fixture-project',
    body: 'The vehicle control closes on this sentence, which the build must serve.',
};

const fixtureProjectControl = {
    slug: '902-wiki-fixture-project',
    title: 'Wiki fixture: the published project control',
    section: 'project',
    publication: 'published',
    order: 2,
    summary: 'A published project page the wiki index must list.',
    body: 'The project control closes on this sentence, which the build must serve.',
};

/** The draft-shaped page that says `publication: draft` outright. */
const fixtureDraft = {
    slug: '903-wiki-fixture-draft',
    title: 'Wiki fixture: a draft no build may serve',
    section: 'vehicle',
    publication: 'draft',
    order: 3,
    summary: 'A draft page the wiki index must not list.',
    body: 'The draft closes on this sentence, which no build may serve.',
};

/** The page added after the first build: one new file, and nothing else edited. */
const fixtureAddedPage = {
    slug: '904-wiki-fixture-added-area',
    title: 'Wiki fixture: the page added with no other edit',
    section: 'area',
    publication: 'published',
    order: 4,
    summary: 'A published area page added to the tree after the first build.',
    body: 'The added page closes on this sentence, which the second build must serve.',
};

const fixturePages = [fixtureVehicleControl, fixtureProjectControl, fixtureDraft];

/** One fixture wiki page, written in the shape the content schema expects. */
function fixturePageSource({ title, section, publication, order, summary, related, body }) {
    const state = publication ? `publication: ${publication}\n` : '';
    const links = related ? `related:\n  - ${related}\n` : '';
    return `---
title: '${title}'
section: ${section}
${state}${links}order: ${order}
summary: '${summary}'
---

${body}
`;
}

/** The real site, minus its content directories, copied into the fixture root. */
const fixtureProjectEntries = ['src', 'public', 'scripts', 'astro.config.mjs', 'tsconfig.json', 'package.json'];

/** The source files a new page must not require anyone to edit. */
const fixtureFrozenSources = [
    'src/content.config.ts',
    'src/lib/navigation.ts',
    'src/lib/wiki-query.ts',
    'src/features/wiki/query.ts',
    'src/pages/wiki/index.astro',
    'src/pages/wiki/[section]/index.astro',
    'src/pages/wiki/[section]/[slug].astro',
];

/**
 * Run the Astro CLI this project installs, in the given project root, and return
 * everything it printed. The CLI entry point is read from the installed
 * package's own `bin` field rather than hard-coded, so a packaging change fails
 * here with the path it could not find instead of a bare module error.
 */
async function astroBuild(root) {
    const manifest = JSON.parse(
        await readFile(resolve(websiteDirectory, 'node_modules', 'astro', 'package.json'), 'utf8'),
    );
    const cli = resolve(websiteDirectory, 'node_modules', 'astro', manifest.bin.astro);

    try {
        const { stdout, stderr } = await promisify(execFile)(execPath, [cli, 'build'], {
            cwd: root,
            maxBuffer: 32 * 1024 * 1024,
        });
        return `${stdout}${stderr}`;
    } catch (error) {
        const output = `${error.stdout ?? ''}${error.stderr ?? ''}`;
        throw new Error(`the fixture build failed in ${root}:\n${output || error.message}`);
    }
}

/**
 * A `node_modules` directory the fixture owns, holding one symlink per installed
 * package rather than one symlink to the shared tree, so `node_modules/.astro`
 * (Astro's content-layer store) is created inside the throwaway root instead of
 * being shared with the repository's own build and every other fixture root.
 */
async function linkPackages(directory) {
    const shared = join(websiteDirectory, 'node_modules');
    await mkdir(directory, { recursive: true });

    for (const entry of await readdir(shared)) {
        // Dot entries are npm's own bookkeeping and the caches (`.astro`, `.vite`)
        // whose sharing is the defect; every installed package is a plain name.
        if (entry.startsWith('.')) continue;
        await symlink(join(shared, entry), join(directory, entry));
    }
}

/**
 * A throwaway project root holding the real site and its own `wiki/` directory,
 * with the real site build run in it.
 *
 * `src/lib/assets.ts` imports the canonical media from `../../../docs/...`, so
 * the root carries a `docs` symlink beside the copied `website/`. Nothing is
 * written inside the repository, and `temporaryDirectories` removes the whole
 * root in `afterAll`.
 */
async function buildFixtureProject() {
    const root = await temporaryDirectory('rh-wiki-fixture-');
    const site = join(root, 'website');
    await mkdir(site, { recursive: true });

    for (const entry of fixtureProjectEntries) {
        await cp(join(websiteDirectory, entry), join(site, entry), { recursive: true });
    }
    await symlink(join(projectDirectory, 'docs'), join(root, 'docs'), 'dir');
    await linkPackages(join(site, 'node_modules'));

    const wiki = join(site, 'wiki');
    await mkdir(wiki, { recursive: true });
    for (const page of fixturePages) {
        await writeFile(join(wiki, `${page.slug}.mdx`), fixturePageSource(page));
    }

    await astroBuild(site);

    return { root, site, wiki, dist: join(site, 'dist') };
}

/** The fixture build, made once per suite run and shared by the cases below. */
let fixtureProjectBuild;
function fixtureBuild() {
    fixtureProjectBuild ??= buildFixtureProject();
    return fixtureProjectBuild;
}

/** A fixture build output: its route list and every built document as one corpus. */
async function fixtureOutput(dist) {
    const routes = await listRoutes(dist);
    const documents = [];
    for (const file of (await listFiles(dist)).filter((entry) => entry.endsWith('.html'))) {
        documents.push(await readFile(file, 'utf8'));
    }
    return { routes, corpus: documents.join('\n') };
}

/** The `href` of every `<a class="wiki-title">` on a page, whatever the attribute order. */
function wikiTitleHrefs(html) {
    return [...html.matchAll(/<a\b[^>]*>/g)]
        .map((match) => match[0])
        .filter((tag) => /class="wiki-title"/.test(tag))
        .map((tag) => tag.match(/href="([^"]+)"/)?.[1]);
}

describe('the built wiki tree', () => {
    it('routes the published pages, and no page the publication gate holds back', async () => {
        const fixture = await fixtureBuild();
        const { routes } = await fixtureOutput(fixture.dist);

        // Non-vacuity: the fixture's published pages are what the route
        // assertions below are about, so they must exist.
        expect(routes).toContain('/wiki/index.html');
        expect(routes).toContain(`/wiki/vehicle/${fixtureVehicleControl.slug}/index.html`);
        expect(routes).toContain(`/wiki/project/${fixtureProjectControl.slug}/index.html`);

        // One section index per section that has a published page, and none for
        // the section that has only a draft: `/wiki/area/` must not exist even
        // though `area` is a section of the tree.
        expect(routes).toContain('/wiki/vehicle/index.html');
        expect(routes).toContain('/wiki/project/index.html');
        expect(routes).not.toContain('/wiki/area/index.html');

        // The draft has no route at all — not a page with no index entry, and
        // not an index entry with no page.
        expect(routes).not.toContain(`/wiki/vehicle/${fixtureDraft.slug}/index.html`);

        // The rule, not a hand-maintained list: the wiki routes are exactly the
        // index, the sections that have a published page, and one leaf route per
        // published page.
        expect(routes.filter((route) => route.startsWith('/wiki/')).sort()).toEqual([
            '/wiki/index.html',
            `/wiki/project/${fixtureProjectControl.slug}/index.html`,
            '/wiki/project/index.html',
            `/wiki/vehicle/${fixtureVehicleControl.slug}/index.html`,
            '/wiki/vehicle/index.html',
        ]);
    }, fixtureBuildTimeout);

    it('lists every published page on the index and on its section index', async () => {
        const fixture = await fixtureBuild();
        const indexHtml = await readFile(join(fixture.dist, 'wiki', 'index.html'), 'utf8');
        const sectionHtml = await readFile(join(fixture.dist, 'wiki', 'vehicle', 'index.html'), 'utf8');
        const published = [fixtureVehicleControl, fixtureProjectControl];

        // The listing half of the guard, asserted against a non-empty set: an
        // index that listed nothing fails here rather than passing quietly.
        expect(published.length).toBeGreaterThan(0);
        expect(wikiTitleHrefs(indexHtml).length).toBe(published.length);

        for (const page of published) {
            expect(indexHtml, `the index does not list ${page.slug}`).toContain(collapse(page.title));
            expect(indexHtml, `the index does not link ${page.slug}`).toContain(`/wiki/${page.section}/${page.slug}/`);
            expect(wikiTitleHrefs(indexHtml)).toContain(`/wiki/${page.section}/${page.slug}/`);
        }

        // The section heading links to the section index, and each section index
        // carries its own pages only.
        expect(indexHtml).toContain('href="/wiki/vehicle/"');
        expect(indexHtml).toContain('href="/wiki/project/"');
        expect(indexHtml, 'the empty area section rendered a group anyway').not.toContain('href="/wiki/area/"');
        expect(sectionHtml).toContain(collapse(fixtureVehicleControl.title));
        expect(sectionHtml).not.toContain(collapse(fixtureProjectControl.title));
        expect(sectionHtml).toContain('href="/wiki/"');
    }, fixtureBuildTimeout);

    it('renders one page per published wiki page, with its media, body and cross-links', async () => {
        const fixture = await fixtureBuild();
        const html = await readFile(
            join(fixture.dist, 'wiki', 'vehicle', `${fixtureVehicleControl.slug}`, 'index.html'),
            'utf8',
        );

        expect(html).toContain(`<title>${fixtureVehicleControl.title} | Red Horizon</title>`);
        expect(html).toMatch(new RegExp(`<h1[^>]*>${fixtureVehicleControl.title}</h1>`));
        expect(html, 'the summary is not the meta description').toMatch(
            new RegExp(`<meta name="description" content="${fixtureVehicleControl.summary}"`),
        );
        expect(collapse(stripMarkup(html))).toContain(fixtureVehicleControl.body);
        expect(html, 'the related page is not linked').toContain(`/wiki/project/${fixtureProjectControl.slug}/`);
    }, fixtureBuildTimeout);

    it('keeps a draft page out of the routes, the listings and the built text', async () => {
        const fixture = await fixtureBuild();
        const { routes, corpus } = await fixtureOutput(fixture.dist);

        expect(corpus, 'the draft title reached the build').not.toContain(fixtureDraft.title);
        expect(corpus, 'the draft body reached the build').not.toContain(fixtureDraft.body);
        expect(corpus, 'a document links the draft route').not.toContain(`/wiki/vehicle/${fixtureDraft.slug}/`);
        expect(routes).not.toContain(`/wiki/vehicle/${fixtureDraft.slug}/index.html`);

        // Non-vacuity: the same build served the published controls' bodies and
        // their routes, so the four assertions above are a withholding rather
        // than a build that emitted no wiki page at all.
        for (const page of [fixtureVehicleControl, fixtureProjectControl]) {
            expect(corpus, `${page.slug} is published but its body is not in the build`).toContain(page.body);
            expect(routes, `${page.slug} is published but has no route`).toContain(
                `/wiki/${page.section}/${page.slug}/index.html`,
            );
        }
    }, fixtureBuildTimeout);

    it('renders the wiki entry in the header and the footer of every wiki route', async () => {
        const fixture = await fixtureBuild();
        const { routes } = await fixtureOutput(fixture.dist);
        const wikiRoutes = routes.filter((route) => route.startsWith('/wiki/'));

        expect(wikiRoutes.length).toBeGreaterThan(1);

        for (const route of wikiRoutes) {
            const html = await readFile(join(fixture.dist, ...route.split('/').filter(Boolean)), 'utf8');
            // `<a href="/wiki/">Wiki</a>` is the nav link exactly as
            // `SiteHeader`/`SiteFooter` render it (Astro adds its scope attribute
            // to the element), so this counts chrome links and not breadcrumbs.
            expect(countMatches(html, /<a\b[^>]*href="\/wiki\/"[^>]*>Wiki<\/a>/g), `${route} nav`).toBe(2);
        }
    }, fixtureBuildTimeout);

    it('adds a new published page to every surface with one new file and no other edit', async () => {
        const fixture = await fixtureBuild();
        const before = new Map();
        for (const file of fixtureFrozenSources) {
            before.set(file, await readFile(join(fixture.site, file), 'utf8'));
        }

        const indexBefore = await readFile(join(fixture.dist, 'wiki', 'index.html'), 'utf8');

        await writeFile(join(fixture.wiki, `${fixtureAddedPage.slug}.mdx`), fixturePageSource(fixtureAddedPage));
        await astroBuild(fixture.site);

        const { routes } = await fixtureOutput(fixture.dist);
        const indexAfter = await readFile(join(fixture.dist, 'wiki', 'index.html'), 'utf8');

        // The whole point: the page reached the index, the section index and the
        // routes, and not one source file changed to let it.
        expect(indexAfter, 'the added page is not in the index').toContain(collapse(fixtureAddedPage.title));
        expect(indexAfter, 'the added page has no link').toContain(
            `/wiki/${fixtureAddedPage.section}/${fixtureAddedPage.slug}/`,
        );
        expect(indexAfter, 'the new section did not appear').toContain('href="/wiki/area/"');
        expect(routes).toContain('/wiki/area/index.html');
        expect(routes).toContain(`/wiki/area/${fixtureAddedPage.slug}/index.html`);

        // Additive: the pages the first build listed are still listed, so the
        // difference really is the one new entry.
        for (const page of [fixtureVehicleControl, fixtureProjectControl]) {
            expect(indexAfter).toContain(collapse(page.title));
        }
        expect(countMatches(indexAfter, /class="wiki-title"/g)).toBe(
            countMatches(indexBefore, /class="wiki-title"/g) + 1,
        );

        for (const file of fixtureFrozenSources) {
            expect(await readFile(join(fixture.site, file), 'utf8'), `${file} was edited to add a page`).toBe(
                before.get(file),
            );
        }
    }, fixtureBuildTimeout);
});

describe('the shipped build', () => {
    it.runIf(hasBuild)('generates a section index only for a section that has a published page', async () => {
        const routes = await listRoutes();
        const published = [];

        for (const file of (await listFiles(wikiDirectory)).filter((entry) => entry.endsWith('.mdx'))) {
            const block = (await readFile(file, 'utf8')).match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
            const value = (key) =>
                block.split('\n').find((line) => line.startsWith(`${key}:`))?.slice(key.length + 1).trim();
            if (value('publication') !== 'published') continue;

            published.push({ section: value('section'), slug: file.split('/').pop().replace(/\.mdx$/, '') });
        }

        const expected = [
            '/wiki/index.html',
            ...wikiSections
                .filter((section) => published.some((page) => page.section === section))
                .map((section) => `/wiki/${section}/index.html`),
            ...published.map((page) => `/wiki/${page.section}/${page.slug}/index.html`),
        ].sort();

        // Equality, not containment: a section index or a leaf route for a page
        // that is not published fails here.
        expect(routes.filter((route) => route.startsWith('/wiki/')).sort()).toEqual(expected);
    });
});
