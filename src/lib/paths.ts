/**
 * getStaticPaths for page pairs: `src/pages/x.astro` (en, no prefix) and `src/pages/[lang]/x.astro` (ru, zh).
 * The unprefixed page calls these with ['en'], the prefixed one with no argument.
 */
import { prefixed, type Locale } from './i18n';
import { getPosts, getUsedTags, slugOf } from './content';

const lang = (l: Locale) => (l === 'en' ? {} : { lang: l });

export const localeProps = (ls: readonly Locale[] = prefixed) => ls.map((l) => ({ params: lang(l), props: { locale: l } }));

export async function postPaths(ls: readonly Locale[] = prefixed) {
  const out = [];
  for (const l of ls) {
    for (const post of await getPosts(l)) {
      out.push({ params: { ...lang(l), slug: slugOf(post) }, props: { locale: l, post } });
    }
  }
  return out;
}

export async function tagPaths(ls: readonly Locale[] = prefixed) {
  const tags = await getUsedTags();
  return ls.flatMap((l) => tags.map((tag) => ({ params: { ...lang(l), tag }, props: { locale: l, tag } })));
}
