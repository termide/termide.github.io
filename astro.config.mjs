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
    // Dark inline, light as --shiki-light variables for the light scheme (public/css/style.css)
    shikiConfig: {
      themes: { dark: 'github-dark-dimmed', light: 'github-light' },
      defaultColor: 'dark',
      wrap: true,
    },
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
