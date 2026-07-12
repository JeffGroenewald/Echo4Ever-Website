import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://echo4ever.com',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => {
      // Exclude non-English language pages from sitemap until domain has more authority
      // Hreflang tags still handle language discovery for Google
      const langPrefixes = ['/ar/', '/de/', '/es/', '/fr/', '/hi/', '/ja/', '/mi/', '/pt/', '/zh/'];
      return !langPrefixes.some(prefix => page.includes(prefix));
    },
  })],
});
