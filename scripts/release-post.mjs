// Makes the blog post of a release from its GitHub release: the notes become the text, the poster
// attached to the release becomes the cover, the publication day becomes the date.
//
//   node scripts/release-post.mjs <version>...    e.g. pnpm release-post 0.45.0
//
// Writes src/content/posts/release-<x-y-z>/en.md and cover.jpg. Run again after the notes change:
// the text, date and cover are refreshed, while the head fields an editor may have improved
// (title, subtitle, description, tags, discussion) are kept. The ru and zh translations are then
// stale until updated and stamped (pnpm translations stamp <dir>). Needs the GitHub CLI (`gh`).

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO = 'termide/termide';
const KEPT = ['title', 'subtitle', 'description', 'tags', 'discussion'];

const versions = process.argv.slice(2);
if (!versions.length || !versions.every((v) => /^\d+\.\d+\.\d+$/.test(v))) {
  console.error('usage: release-post <version>..., e.g. 0.45.0');
  process.exit(2);
}

const gh = (...args) => execFileSync('gh', args, { encoding: 'utf8' });
for (const version of versions) write(version);

function write(version) {
  const release = JSON.parse(gh('release', 'view', version, '-R', REPO, '--json', 'body,publishedAt,assets'));

  const dir = join('src/content/posts', `release-${version.replaceAll('.', '-')}`);
  mkdirSync(dir, { recursive: true });

  const poster = `termide-${version}-poster.jpg`;
  const hasPoster = release.assets.some((a) => a.name === poster);
  if (hasPoster) gh('release', 'download', version, '-R', REPO, '-p', poster, '-O', join(dir, 'cover.jpg'), '--clobber');
  else console.warn(`${version}: no ${poster} on the release; the post goes without a cover`);

  const body = notesBody(release.body, version);
  const head = {
    title: JSON.stringify(`Termide ${version}`),
    description: JSON.stringify(summary(body, version)),
    date: release.publishedAt.slice(0, 10),
    kind: 'release',
    version,
    ...(hasPoster && { cover: './cover.jpg', coverAlt: JSON.stringify(`Termide ${version} release poster`) }),
    ...keptFields(join(dir, 'en.md')),
  };

  const file = join(dir, 'en.md');
  const front = Object.entries(head).map(([k, v]) => `${k}: ${v}`).join('\n');
  writeFileSync(file, `---\n${front}\n---\n\n${body}\n`);
  console.log(`${file}: written; translate it into ru.md and zh.md, then: pnpm translations stamp ${dir}`);
}

/** The notes as the post's text: without the poster (it is the cover) and the link to the release. */
function notesBody(text, version) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/<!-- release-poster -->[\s\S]*?<!-- \/release-poster -->\n?/, '')
    .replace(/^\[\d+\.\d+\.\d+\]: \S+\n?/m, '')
    // The notes head their sections with ###; in a post they are the top level under the title.
    .replace(/^### /gm, '## ')
    // Links into the repository's docs are relative on GitHub; the blog needs them whole.
    .replace(/\]\(doc\//g, `](https://github.com/${REPO}/blob/main/doc/`)
    .trim();
}

/** The feed card's line until an editor writes a better one: what the release holds, by section. */
function summary(text, version) {
  const words = { Added: ['addition', 'additions'], Changed: ['change', 'changes'], Fixed: ['fix', 'fixes'], Removed: ['removal', 'removals'], Security: ['security fix', 'security fixes'], Breaking: ['breaking change', 'breaking changes'] };
  const parts = [];
  for (const [, name, items] of text.matchAll(/^## (\w+)\n([\s\S]*?)(?=^## |(?![\s\S]))/gm)) {
    const n = (items.match(/^- /gm) ?? []).length;
    if (n && words[name]) parts.push(`${n} ${words[name][n === 1 ? 0 : 1]}`);
  }
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts.at(-1)}` : parts[0] ?? 'changes';
  return `What termide ${version} brings: ${list}.`;
}

/** Head fields of an existing post worth keeping over the generated ones. */
function keptFields(path) {
  if (!existsSync(path)) return {};
  const front = readFileSync(path, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const kept = {};
  for (const line of front.split('\n')) {
    const m = line.match(/^(\w+): (.*)$/);
    if (m && KEPT.includes(m[1])) kept[m[1]] = m[2];
  }
  return kept;
}
