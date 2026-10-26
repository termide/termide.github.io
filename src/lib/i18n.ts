/**
 * Languages and strings. Every visible string lives in src/i18n/<lang>.json; en.json defines the
 * shape every other language must match (scripts/check.mjs fails the build on a missing or extra key).
 * Strings may hold inline HTML (<code>, <strong>, links): render them with `set:html`.
 */
import data from '../data.json';
import en from '../i18n/en.json';
import ru from '../i18n/ru.json';
import zh from '../i18n/zh.json';

export const locales = ['en', 'ru', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Locales that live under a prefix (`/ru/`, `/zh/`). */
export const prefixed = locales.filter((l) => l !== defaultLocale);

/** BCP 47 tags for <html lang>, hreflang and dates. */
export const htmlLang: Record<Locale, string> = { en: 'en', ru: 'ru', zh: 'zh' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', ru: 'ru_RU', zh: 'zh_CN' };

type Tree = { [key: string]: string | Tree };
const strings: Record<Locale, Tree> = { en, ru, zh };

/** The string at a dotted path, e.g. `t('ru', 'hero.headline')`. A missing key fails the build. */
export function t(locale: Locale, path: string): string {
  let node: string | Tree = strings[locale];
  for (const part of path.split('.')) {
    if (typeof node !== 'object' || !(part in node)) throw new Error(`${locale}: no string '${path}'`);
    node = node[part];
  }
  if (typeof node !== 'string') throw new Error(`${locale}: '${path}' is not a string`);
  return node;
}

/** The keys under a dotted path, in file order (`keys('en', 'blog.tags')`). */
export function keys(locale: Locale, path: string): string[] {
  let node: string | Tree = strings[locale];
  for (const part of path.split('.')) node = (node as Tree)[part];
  return Object.keys(node as Tree);
}

/** A string with its markup stripped, for attributes and <title>. */
export const plain = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');

/** Path of a page in a locale: en has no prefix, others get /ru, /zh. `path` starts with "/". */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

export const absoluteUrl = (path: string) => new URL(path, data.site_url).href;

export function formatDate(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(htmlLang[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

/** Link to a page of the main repository's documentation in the reader's language. */
export const docUrl = (locale: Locale, page = 'README.md') => `${data.repo_url}/blob/main/doc/${locale}/${page}`;

export const languageLabel = (locale: Locale) => data.languages.find((l) => l.code === locale)?.label ?? locale;
