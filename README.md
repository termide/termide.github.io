# TermIDE Landing Page

Official landing page for [TermIDE](https://github.com/termide/termide), an
all-in-one terminal workspace for desktops and servers.

- English: https://termide.github.io
- Russian: https://termide.github.io/ru/
- Chinese: https://termide.github.io/zh/

## Editing

The pages are generated. Do not edit `index.html`, `ru/index.html` or
`zh/index.html` by hand; edit the sources and rebuild:

```
src/template.html      page layout with {{t:...}} strings and {{block:...}} sections
src/data.json          language-neutral data: slides, cards, comparison, install commands, themes
src/i18n/<lang>.json   every visible string; en.json defines the shape
```

```bash
python3 build.py          # regenerate all pages
python3 build.py --check  # fail if a page is out of date (CI runs this)
```

The build fails when a translation is missing a key or has one that `en.json`
does not, and warns about images referenced but not present in `assets/`.

To add a language: add it to `languages` in `src/data.json`, copy
`src/i18n/en.json` to `src/i18n/<code>.json`, translate, rebuild.

On a release, the main repository's release workflow (`update-site` in
`.github/workflows/release.yml`) sets `version` and `download_mb` in
`src/data.json` from the published release, rebuilds the pages and pushes
them; it needs the `SITE_DEPLOY_KEY` secret there, a deploy key with write
access to this repository. `download_mb` fills `{mb}` in the strings. The page
also asks the GitHub API for the latest release and updates the footer and the
versioned install commands when a newer one exists.

## Screenshots

Screenshots under `assets/screenshots/` and theme previews under
`assets/themes/` come from the reproducible pipeline in the main repository
(`tools/screenshots/`), which records a synthetic project in an isolated
container. After a run there, `./sync-shots.sh` copies its `out/site/` here;
review with `git status` and commit what should change.

This repository is where termide's images live for anything that links to
them: the main repository's README and docs use
`https://termide.github.io/assets/…` (`screenshots/tour.gif`, `agent.png`,
`themes/<id>.png` and others), so a file they name must not be renamed or
removed without updating them. Drafts and the sources of posters, figures
and posts stay in the media workshop, not here.

## Local preview

```bash
python3 -m http.server 8000
```

## Structure

```
├── build.py            page generator
├── src/                template, data and strings
├── index.html          generated, English
├── ru/index.html       generated, Russian
├── zh/index.html       generated, Chinese
├── css/style.css       styles
├── js/main.js          carousel, tabs, filters, latest version
└── assets/             logo, screenshots, theme previews
```

## License

MIT
