import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public review draft; replace with the approved Tufts origin before launch.
export default defineConfig({
  site: 'https://joyingl.github.io',
  base: '/crei-lab-website',
  output: 'static',
  integrations: [sitemap()],
});
