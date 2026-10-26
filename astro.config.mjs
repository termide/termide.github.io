// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://termide.github.io',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'ru', 'zh'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', ru: 'ru-RU', zh: 'zh-CN' },
      },
    }),
  ],
});
