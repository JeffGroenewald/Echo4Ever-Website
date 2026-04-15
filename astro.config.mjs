import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://echo4ever.com',
  output: 'static',
  integrations: [sitemap()],
});
