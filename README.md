# Termide website

The landing page and blog of [Termide](https://github.com/termide/termide), an
all-in-one terminal workspace for desktops and servers. Astro, built and
deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to
`main`.

- English: https://termide.github.io (blog: `/blog/`)
- Russian: https://termide.github.io/ru/
- Chinese: https://termide.github.io/zh/

## Working on it

```bash
pnpm install
pnpm dev          # http://localhost:4321, drafts included
pnpm build        # checks, then builds into dist/; must pass before a push
pnpm preview      # serve dist/
```

`pnpm build` runs `scripts/check.mjs` first: it fails when a language's
strings miss a key of `en.json` or have one it lacks, when an image
`src/data.json` names is not under `public/`, or when a post's translation is
missing or older than its English original.

## Layout

```
src/data.json            language-neutral landing data: version, slides, cards, comparison, install commands, themes
src/i18n/<lang>.json     every visible string; en.json defines the shape (blog topics live under blog.tags)
src/views/Landing.astro  the landing page
src/views/{Feed,Post,Tag}.astro   the blog
src/content/posts/<slug>/{en,ru,zh}.mdx   posts, with their images beside them
src/components/mdx/      what posts use: Shot, Video, Keys
public/css, public/js    the landing's stylesheet and script, served as they are
public/assets/           images anything links to by URL
scripts/check.mjs        pre-build checks; `stamp` records a translation's original
```

## Writing a post

A post is a folder `src/content/posts/<slug>/`: `en.mdx` is the original,
`ru.mdx` and `zh.mdx` its translations; the schema is in
`src/content.config.ts`. `kind` is `release` (an announcement, with the
release's `version`) or `guide` (a hands-on article about a feature).
`draft: true` in `en.mdx` keeps a post to `pnpm dev`, translations not needed.

After translating, record which original the translations follow:

```bash
pnpm translations stamp src/content/posts/<slug>
```

Images go beside the post and are imported or referenced relatively
(`cover: ./cover.png`), so Astro resizes them. Screen recordings are MP4
files under `public/assets/blog/<slug>/`, shown with `<Video>`.

### Release posts

A release's post is made from its GitHub release, not written by hand:

```bash
pnpm release-post 0.46.0
```

writes `src/content/posts/release-0-46-0/en.md` from the release notes and
`cover.jpg` from the poster attached to the release (`termide-<v>-poster.jpg`),
dated by the day it was published. Rerun it when the notes change: the text,
date and cover follow them, while an edited `title`, `subtitle`,
`description`, `tags` or `discussion` stays. Then translate `ru.md` and
`zh.md` and stamp them as above. Needs the GitHub CLI (`gh`).

## Releases

The main repository's release workflow (`update-site` in
`.github/workflows/release.yml`) sets `version` and `download_mb` in
`src/data.json` and pushes; the push deploys the site. It needs the
`SITE_DEPLOY_KEY` secret there, a deploy key with write access to this
repository. The page also asks the GitHub API for the latest release and
updates the footer and the versioned install commands when a newer one exists.

## Screenshots

Screenshots under `public/assets/screenshots/` and theme previews under
`public/assets/themes/` come from the reproducible pipeline in the main
repository (`tools/screenshots/`). After a run there, `./sync-shots.sh` copies
its `out/site/` here; review with `git status` and commit what should change.

This repository is where termide's images live for anything that links to
them: the main repository's README and docs use
`https://termide.github.io/assets/…`, so a file they name must not be renamed
or removed without updating them. Drafts and the sources of posters, figures
and posts stay in the media workshop, not here.

## License

MIT
