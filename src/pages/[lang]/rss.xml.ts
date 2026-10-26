import type { APIContext } from 'astro';
import { feed } from '../../lib/rss';
import { localeProps } from '../../lib/paths';
import type { Locale } from '../../lib/i18n';

export const getStaticPaths = () => localeProps();
export const GET = (ctx: APIContext) => feed(ctx.props.locale as Locale, ctx);
