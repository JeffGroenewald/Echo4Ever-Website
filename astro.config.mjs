import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://echo4ever.com',
  output: 'static',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es', 'fr', 'de', 'zh', 'ja', 'hi', 'ar', 'mi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
