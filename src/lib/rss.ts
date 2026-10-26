import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { htmlLang, localePath, t, type Locale } from './i18n';
import { getPosts, slugOf } from './content';

export async function feed(locale: Locale, ctx: APIContext) {
  const posts = await getPosts(locale);
  return rss({
    title: `Termide — ${t(locale, 'blog.title')}`,
    description: t(locale, 'blog.subtitle'),
    site: new URL(localePath(locale, '/blog/'), ctx.site!).href,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: localePath(locale, `/blog/${slugOf(p)}/`),
      categories: [t(locale, `blog.kind.${p.data.kind}`), ...p.data.tags.map((tag) => t(locale, `blog.tags.${tag}`))],
    })),
    customData: `<language>${htmlLang[locale]}</language>`,
  });
}
