#!/usr/bin/env node
// Checks that run before every build (`pnpm build`); exit 1 on any problem.
//   node scripts/check.mjs              check everything
//   node scripts/check.mjs stamp <dir>  record the en original's hash in the post's ru and zh files,
//                                       e.g. stamp src/content/posts/0.45.0
//
// - Strings: src/i18n/en.json defines the shape; every other language must have exactly its keys,
//   each a non-empty string, so a missing translation fails instead of leaking English.
// - Assets: every image src/data.json names exists under public/.
// - Posts: every en original has ru and zh translations whose `sourceHash` equals the original's
//   hash, so a change to the original marks its translations stale. Drafts are skipped.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const POSTS = 'src/content/posts';
const ORIGINAL = 'en';
const TARGETS = ['ru', 'zh'];
const EXT = ['mdx', 'md'];
/** Feed pages beside the posts under /blog/; a post may not take their names. */
const RESERVED = ['releases', 'guides', 'tags', 'page'];

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const find = (dir, lang) => EXT.map((e) => join(dir, `${lang}.${e}`)).find(existsSync);
const hash = (file) =>
  createHash('sha256').update(readFileSync(file, 'utf8').replace(/\r\n/g, '\n')).digest('hex').slice(0, 12);
const frontmatter = (text) => text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
const field = (text, name) => frontmatter(text).match(new RegExp(`^${name}:\\s*['"]?([^'"\\n]+)`, 'm'))?.[1]?.trim();

function shapeErrors(ref, other, path = '') {
  if (ref && typeof ref === 'object') {
    if (!other || typeof other !== 'object') return [`${path}: expected an object`];
    const errors = [];
    for (const key of Object.keys(ref)) if (!(key in other)) errors.push(`${path}.${key}: missing`);
    for (const key of Object.keys(other)) if (!(key in ref)) errors.push(`${path}.${key}: not in en.json`);
    for (const key of Object.keys(ref)) if (key in other) errors.push(...shapeErrors(ref[key], other[key], `${path}.${key}`));
    return errors;
  }
  return typeof other === 'string' && other.trim() ? [] : [`${path}: expected a non-empty string`];
}

function checkStrings(data) {
  const reference = readJson('src/i18n/en.json');
  return data.languages
    .filter((l) => l.code !== 'en')
    .flatMap((l) => shapeErrors(reference, readJson(`src/i18n/${l.code}.json`)).map((e) => `strings ${l.code}${e}`));
}

function checkAssets(data) {
  const paths = new Set([...data.slides.map((s) => s.image), data.agent.image, data.og_image]);
  for (const theme of data.themes) paths.add(`assets/themes/${theme.id}.png`);
  return [...paths].sort().filter((p) => !existsSync(join('public', p))).map((p) => `missing asset public/${p}`);
}

function checkPosts() {
  if (!existsSync(POSTS)) return [];
  const problems = [];
  for (const entry of readdirSync(POSTS, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dir = join(POSTS, entry.name);
    if (RESERVED.includes(entry.name)) problems.push(`${dir}: '${entry.name}' is a feed page's name, rename the post`);
    const original = find(dir, ORIGINAL);
    if (!original) { problems.push(`${dir}: no ${ORIGINAL} original`); continue; }
    if (field(readFileSync(original, 'utf8'), 'draft') === 'true') continue;
    const h = hash(original);
    for (const lang of TARGETS) {
      const file = find(dir, lang);
      if (!file) { problems.push(`${dir}: no ${lang} translation`); continue; }
      const got = field(readFileSync(file, 'utf8'), 'sourceHash');
      if (got !== h) problems.push(`${file}: stale translation (sourceHash ${got ?? 'none'}, original ${h}); update it, then: pnpm translations stamp ${dir}`);
    }
  }
  return problems;
}

function stamp(dir) {
  const original = find(dir, ORIGINAL);
  if (!original) throw new Error(`${dir}: no ${ORIGINAL} original`);
  const h = hash(original);
  for (const lang of TARGETS) {
    const file = find(dir, lang);
    if (!file) { console.error(`${dir}: no ${lang} translation`); process.exitCode = 1; continue; }
    const text = readFileSync(file, 'utf8');
    const next = /^sourceHash:/m.test(frontmatter(text))
      // Quoted: a hex hash like 24227e668961 would read as a number in YAML.
      ? text.replace(/^(---\n[\s\S]*?)^sourceHash:.*$/m, `$1sourceHash: "${h}"`)
      : text.replace(/^---\n/, `---\nsourceHash: "${h}"\n`);
    writeFileSync(file, next);
    console.log(`${file}: sourceHash ${h}`);
  }
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'stamp') {
  if (!arg) { console.error('usage: stamp <post dir>'); process.exit(2); }
  stamp(arg);
} else {
  const data = readJson('src/data.json');
  const problems = [...checkStrings(data), ...checkAssets(data), ...checkPosts()];
  if (problems.length) {
    console.error(`check failed:\n  ${problems.join('\n  ')}`);
    process.exit(1);
  }
  console.log('Strings, assets and translations are in order.');
}
