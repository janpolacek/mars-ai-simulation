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
import { site } from '../src/lib/site';
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

    it('names the tree sections, and labels each with its approved public label', () => {
        expect([...wikiSections]).toEqual(['area', 'vehicle', 'project']);
        // The approved label set, written out: the section value stays the URL
        // key, the label is the wording every naming surface renders. The label
        // set is reviewed copy (`.agents/work/reviews/wiki-index-metadata.md`,
        // the human story owner's settlement for `area`), so it moves only by
        // editorial decision — this assertion is what makes such a move visible.
        expect(wikiSections.map((section) => wikiSectionLabel(section))).toEqual([
            'Landing Zones',
            'Vehicles',
            'Project',
        ]);
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
    const media = publication === 'published'
        ? `media: vehicle-references\nmediaAlt: 'Illustrative artwork of the fictional RH-01 rover in its clean baseline configuration.'\n`
        : '';
    return `---
title: '${title}'
section: ${section}
${state}${links}${media}order: ${order}
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

/** Read one built route out of a build's `dist/` directory. */
function readBuiltRoute(dist, route) {
    return readFile(join(dist, ...route.split('/').filter(Boolean)), 'utf8');
}

/**
 * Every `<title>` in a built document. The site renders one per document, in
 * `<head>` (`BaseLayout.astro`) and no other — there is no inline `<svg><title>`
 * anywhere in `src/` — so a count over the whole document is the document's own
 * title count, and a second one is a defect rather than a false alarm.
 */
function documentTitles(html) {
    return [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)].map((match) => match[1]);
}

/** The `content` of every `<meta name="description">`, whatever the attribute order. */
function metaDescriptions(html) {
    return [...html.matchAll(/<meta\b[^>]*>/g)]
        .filter((match) => /\bname="description"/.test(match[0]))
        .map((match) => match[0].match(/\bcontent="([^"]*)"/)?.[1] ?? '');
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

    /*
     * The reviewed index metadata, asserted on the built output rather than on
     * the module it comes from: a string that is right in
     * `src/lib/wiki-query.ts` and wrong in the document a reader receives is
     * exactly the defect these cases exist to catch. The expectations are
     * written out byte-for-byte from the review record
     * (`.agents/work/reviews/wiki-index-metadata.md` §3) so that a label or
     * description that changes fails here instead of re-deriving itself.
     */
    const approvedIndexMetadata = new Map([
        [
            '/wiki/',
            {
                title: 'Wiki | Red Horizon',
                description: 'Reference pages for Red Horizon, a fictional Mars exploration project.',
            },
        ],
        [
            '/wiki/area/',
            {
                title: 'Landing Zones | Red Horizon',
                description:
                    'Published reference pages about landing zones in the fictional Red Horizon Mars exploration project.',
            },
        ],
        [
            '/wiki/vehicle/',
            {
                title: 'Vehicles | Red Horizon',
                description:
                    'Published reference pages about vehicles in the fictional Red Horizon Mars exploration project.',
            },
        ],
        [
            '/wiki/project/',
            {
                title: 'Project | Red Horizon',
                description: 'Published reference pages about the fictional Red Horizon Mars exploration project.',
            },
        ],
    ]);

    /** The approved public label of each section, from the same review record. */
    const approvedSectionLabels = { area: 'Landing Zones', vehicle: 'Vehicles', project: 'Project' };

    it('renders the approved root index metadata, title unchanged and description explicit', async () => {
        const fixture = await fixtureBuild();
        const html = await readBuiltRoute(fixture.dist, '/wiki/index.html');
        const approved = approvedIndexMetadata.get('/wiki/');

        expect(documentTitles(html)).toEqual([approved.title]);
        expect(metaDescriptions(html)).toEqual([approved.description]);
        expect(html, 'the root index still inherits the site default description').not.toContain(
            site.defaultDescription,
        );
    }, fixtureBuildTimeout);

    it('renders the approved metadata and the approved label on every section index in the build', async () => {
        const fixture = await fixtureBuild();
        const sections = [fixtureVehicleControl.section, fixtureProjectControl.section];

        // Non-vacuity: a loop over the sections the fixture publishes is worth
        // nothing if it publishes none.
        expect(sections.length, 'the fixture publishes no section page').toBeGreaterThan(0);

        for (const section of sections) {
            const html = await readBuiltRoute(fixture.dist, `/wiki/${section}/index.html`);
            const approved = approvedIndexMetadata.get(`/wiki/${section}/`);
            const label = approvedSectionLabels[section];

            expect(documentTitles(html), `${section} index title`).toEqual([approved.title]);
            expect(metaDescriptions(html), `${section} index description`).toEqual([approved.description]);
            expect(html, `${section} index H1`).toContain(`>${label}</h1>`);
            expect(html, `${section} index still renders the superseded title formula`).not.toContain(
                ' wiki | Red Horizon',
            );
            expect(html, `${section} index still inherits the site default description`).not.toContain(
                site.defaultDescription,
            );
        }
    }, fixtureBuildTimeout);

    it('names every section with its approved label on the root index', async () => {
        const indexHtml = await readBuiltRoute((await fixtureBuild()).dist, '/wiki/index.html');

        for (const section of ['vehicle', 'project']) {
            const label = approvedSectionLabels[section];

            expect(indexHtml, `the root index does not name ${section} "${label}"`).toContain(`>${label}</a>`);
            expect(indexHtml, `the root index names ${section} by its URL segment`).not.toContain(`>${section}</a>`);
        }
    }, fixtureBuildTimeout);

    it("names a leaf page's section with the approved label, not the URL segment", async () => {
        const fixture = await fixtureBuild();
        const html = await readBuiltRoute(
            fixture.dist,
            `/wiki/${fixtureVehicleControl.section}/${fixtureVehicleControl.slug}/index.html`,
        );
        const breadcrumb = html.match(/<p\b[^>]*class="wiki-breadcrumb"[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? '';
        const breadcrumbText = collapse(stripMarkup(breadcrumb));

        expect(breadcrumbText, 'the leaf page has no breadcrumb').not.toBe('');
        expect(breadcrumbText).toContain(approvedSectionLabels[fixtureVehicleControl.section]);
        expect(breadcrumbText, 'the breadcrumb still prints the URL segment').not.toContain(
            fixtureVehicleControl.section,
        );
    }, fixtureBuildTimeout);

    it("serves a writer's summary byte-for-byte as the leaf description, never truncated", async () => {
        const fixture = await fixtureBuild();
        const html = await readBuiltRoute(
            fixture.dist,
            `/wiki/${fixtureVehicleControl.section}/${fixtureVehicleControl.slug}/index.html`,
        );

        // The summary is read out of the fixture page's own frontmatter, so the
        // comparison runs file -> built document and would catch a build step
        // that reflowed or shortened the writer's text on the way through. A
        // summary past the 155-char description target is a copy question for
        // the page's owner: it is reported on the card, never shortened here.
        const source = await readFile(join(fixture.wiki, `${fixtureVehicleControl.slug}.mdx`), 'utf8');
        const summary = source.match(/^summary: '(.*)'$/m)?.[1] ?? '';

        expect(summary, 'the fixture page carries no summary to compare').not.toBe('');
        expect(summary.length, `${fixtureVehicleControl.slug} is over the description target`).toBeLessThanOrEqual(
            155,
        );
        expect(metaDescriptions(html)).toEqual([summary]);
        expect(collapse(stripMarkup(html))).toContain(summary);
    }, fixtureBuildTimeout);

    it('gives every wiki document exactly one non-empty title and description, all distinct', async () => {
        const fixture = await fixtureBuild();
        const { routes } = await fixtureOutput(fixture.dist);
        const wikiRoutes = routes.filter((route) => route.startsWith('/wiki/'));
        const titles = [];
        const descriptions = [];

        // Non-vacuity: a uniqueness check over an empty route list passes for
        // the wrong reason.
        expect(wikiRoutes.length, 'the fixture build emitted no wiki document').toBeGreaterThan(1);

        for (const route of wikiRoutes) {
            const html = await readBuiltRoute(fixture.dist, route);
            const documentTitle = documentTitles(html);
            const documentDescription = metaDescriptions(html);

            expect(documentTitle, `${route} does not carry exactly one <title>`).toHaveLength(1);
            expect(documentDescription, `${route} does not carry exactly one meta description`).toHaveLength(1);
            expect(documentTitle[0].trim(), `${route} has a blank <title>`).not.toBe('');
            expect(documentDescription[0].trim(), `${route} has a blank description`).not.toBe('');
            expect(documentTitle[0], `${route} title is missing the site suffix`).toMatch(/ \| Red Horizon$/);

            titles.push(documentTitle[0]);
            descriptions.push(documentDescription[0]);
        }

        // The schema accepts blank and duplicate strings (`content.config.ts`),
        // so the built output is where they become visible: two indexes sharing
        // a title are indistinguishable in a result list, and a blank one is
        // nothing at all.
        expect(new Set(titles).size, `duplicate built titles among ${titles.join(' / ')}`).toBe(titles.length);
        expect(
            new Set(descriptions).size,
            `duplicate built descriptions among ${descriptions.join(' / ')}`,
        ).toBe(descriptions.length);
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

        // The `area` label is the row the human story owner settled after this
        // suite was written, so the section index its first page builds is
        // asserted for it too: title, H1 and description.
        const areaHtml = await readBuiltRoute(fixture.dist, '/wiki/area/index.html');
        const approvedArea = approvedIndexMetadata.get('/wiki/area/');

        expect(documentTitles(areaHtml)).toEqual([approvedArea.title]);
        expect(metaDescriptions(areaHtml)).toEqual([approvedArea.description]);
        expect(areaHtml).toContain(`>${approvedSectionLabels.area}</h1>`);

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
