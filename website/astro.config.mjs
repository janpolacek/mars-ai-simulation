// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import { mediaScope } from './scripts/media-scope.mjs';

/**
 * The production origin is deliberately not hard-coded: no domain, provider
 * project, or public URL has been authorised yet (`docs/PLAN.md`, "Deployment
 * decision point"). Supply the approved origin as `SITE_URL` at build time; with
 * `SITE_URL` unset, `site` stays undefined and no canonical link is emitted
 * rather than a wrong one.
 *
 * `process` is read through `globalThis` because this project does not install
 * `@types/node` and this config file is type-checked (`// @ts-check`).
 *
 * @type {{ process?: { env?: Record<string, string | undefined> } }}
 */
const runtime = /** @type {any} */ (globalThis);
const site = runtime.process?.env?.SITE_URL;

/** @type {import('astro').AstroUserConfig} */
const userConfig = {
    output: 'static',
    // Directory routes with a trailing slash: `/news/` and `/news/<slug>/`.
    trailingSlash: 'always',
    integrations: [mdx(), mediaScope()],
};

if (site) userConfig.site = site;

// https://astro.build/config
export default defineConfig(userConfig);
