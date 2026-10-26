/**
 * getStaticPaths for page pairs: `src/pages/x.astro` (en, no prefix) and `src/pages/[lang]/x.astro` (ru, zh).
 * The unprefixed page calls these with ['en'], the prefixed one with no argument.
 */
import { prefixed, type Locale } from './i18n';
import { getPosts, getUsedTags, kinds, kindSegment, slugOf } from './content';

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

/** Posts on one page of a feed. */
export const PER_PAGE = 12;

/**
 * Every page of every feed: all posts and each kind, split into pages of PER_PAGE.
 * `feed` is the path under /blog/: none for the first page of all, `releases`, `page/2`, `releases/page/2`.
 */
export async function feedPaths(ls: readonly Locale[] = prefixed) {
  const out = [];
  for (const l of ls) {
    for (const kind of [undefined, ...kinds]) {
      const pages = Math.max(1, Math.ceil((await getPosts(l, kind)).length / PER_PAGE));
      for (let page = 1; page <= pages; page++) {
        const feed = [kind && kindSegment[kind], page > 1 && `page/${page}`].filter(Boolean).join('/') || undefined;
        out.push({ params: { ...lang(l), feed }, props: { locale: l, kind, page, pages } });
      }
    }
  }
  return out;
}
