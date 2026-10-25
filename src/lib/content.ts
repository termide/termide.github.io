import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export type Post = CollectionEntry<'posts'>;
export type Kind = Post['data']['kind'];
export const kinds: readonly Kind[] = ['release', 'guide'];
/** URL segment of a kind's feed: /blog/releases/, /blog/guides/. Post slugs may not take these. */
export const kindSegment: Record<Kind, string> = { release: 'releases', guide: 'guides' };

/** "my-post/ru" → ["my-post", "ru"] */
export function parseId(id: string): [slug: string, locale: Locale] {
  const i = id.lastIndexOf('/');
  return [id.slice(0, i), id.slice(i + 1) as Locale];
}

export const slugOf = (e: { id: string }) => parseId(e.id)[0];
export const localeOf = (e: { id: string }) => parseId(e.id)[1];

/** Posts of a language, newest first; drafts appear only in `pnpm dev`. */
export async function getPosts(locale: Locale, kind?: Kind): Promise<Post[]> {
  const all = await getCollection(
    'posts',
    (p) => localeOf(p) === locale && (import.meta.env.DEV || !p.data.draft) && (!kind || p.data.kind === kind),
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Topics with at least one post; translations share their original's topics, so English decides. */
export async function getUsedTags(): Promise<string[]> {
  const posts = await getPosts('en');
  return [...new Set(posts.flatMap((p) => p.data.tags))].sort();
}
