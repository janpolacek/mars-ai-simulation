// @ts-check
import { defineConfig } from 'astro/config';

const deploymentBase = process.env.DEPLOYMENT_BASE;
const siteUrl = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  ...(deploymentBase ? { base: deploymentBase } : {}),
  ...(siteUrl ? { site: siteUrl } : {}),
});
