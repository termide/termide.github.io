# termide.github.io — the Termide website

Astro + MDX, static build, deployed to GitHub Pages from `main` by
`.github/workflows/deploy.yml`. Everything in this repository that is not site
content is English: commit messages, README, this file, code comments, script
output. See `README.md` for the layout and commands.

## Rules

- `pnpm build` must pass before every push: it runs `scripts/check.mjs`, `astro check` and the build.
- The landing renders `src/data.json` and `src/i18n/<lang>.json`. Its markup and `public/css/style.css`
  are the landing's look; change them only when the task is about the landing.
- `src/data.json` keeps its path and its `version` / `download_mb` keys: the main repository's release
  workflow writes them.
- Files under `public/assets/` are linked by URL from the main repository's README and docs:
  do not rename or remove one without updating them.
- Strings may hold inline HTML; render them with `set:html`. In attributes and `<title>`, use `plain()`.
- Build paths with `localePath(locale, path)` from `src/lib/i18n.ts`; never hard-code `/ru/...`.
  English has no prefix; ru and zh live under `/ru/` and `/zh/`, and every page exists in all three.
- A page is a wrapper in `src/pages/` (en) plus one in `src/pages/[lang]/` (ru, zh) around a shared view
  in `src/views/`.

## Posts

- `src/content/posts/<slug>/en.mdx` (or `.md`) is the original; `ru` and `zh` translate it. A slug may not be
  `releases`, `guides` or `tags`.
- `kind: release` announces a release and needs `version`; `kind: guide` shows one feature in use and gives
  the release that brought it in `version`.
- A release post is the release's GitHub notes and poster, made by `pnpm release-post <version>`
  (`scripts/release-post.mjs`); fix its text in the notes and rerun, edit only its head fields by hand.
  Its translations are `ru.md` / `zh.md`: plain Markdown, since the notes are not MDX-safe.
- Every claim comes from the main repository: its release notes, `doc/en/`, the code. Keys, settings and
  labels are spelled as termide shows them; in translations, use the label termide shows in that language
  (`crates/i18n/i18n/<lang>.toml`).
- Topics are the keys of `blog.tags` in `src/i18n/*.json`; add one in all three files before using it.
- After translating, run `pnpm translations stamp src/content/posts/<slug>`; the build fails when the
  original changes after its translations.
- Components for posts live in `src/components/mdx/`: `Shot` (a screenshot in the terminal frame, opens
  full size), `Video` (a looping screen recording), `Keys` (key caps: `<Keys k="Ctrl+S" />`).

## Astro documentation

https://docs.astro.build — check it before working on routing, collections, images or i18n: the
installed version is newer than model memory.
