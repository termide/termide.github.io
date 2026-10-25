import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import en from './i18n/en.json';

/**
 * A post is a folder `src/content/posts/<slug>/` holding `en.mdx` (the original), `ru.mdx` and `zh.mdx`,
 * plus the images it shows. An entry id is `<slug>/<lang>` (see src/lib/content.ts).
 * Translations carry `sourceHash`, the hash of the en original; scripts/check.mjs checks it.
 */
const topics = Object.keys(en.blog.tags);

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '*/{en,ru,zh}.{md,mdx}' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        /** A line under the title, part of the title rather than of the text. */
        subtitle: z.string().optional(),
        /** One or two sentences: the feed card, the meta description, the RSS item. */
        description: z.string(),
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        /** A release announcement or a guide to a feature; the blog filters by it. */
        kind: z.enum(['release', 'guide']),
        /** The release a post announces, or the first release with the feature a guide shows. */
        version: z.string().regex(/^\d+\.\d+\.\d+$/).optional(),
        tags: z
          .array(z.string().refine((tag) => topics.includes(tag), { message: `unknown topic; add it to blog.tags in src/i18n/*.json (known: ${topics.join(', ')})` }))
          .default([]),
        /** Preview image for the feed card and social links; the site's og.png when absent. */
        cover: image().optional(),
        coverAlt: z.string().optional(),
        /** Whether the post page shows the cover above the text; off when the text opens with the same picture. */
        coverInPost: z.boolean().default(true),
        /** Link to the post's Telegram discussion, once the announcement is out. */
        discussion: z.url().optional(),
        draft: z.boolean().default(false),
        sourceHash: z.string().optional(),
      })
      .refine((p) => p.kind !== 'release' || p.version, { message: 'a release post needs `version`', path: ['version'] }),
});

export const collections = { posts };
