---
title: "Termide 0.28.0: A text-mode browser for HTML and the web"
description: "What termide 0.28.0 brings: 6 additions and 2 fixes."
date: 2026-06-30
kind: release
version: 0.28.0
cover: ./cover.jpg
coverAlt: "Termide 0.28.0 release poster"
---

## Added
- **HTML preview panel.** `.html` / `.htm` files open as a rendered, read-only view (`F3`) with the full viewer UX — movable cursor, text selection, clipboard copy, incremental search (`Ctrl+F`), reload from disk (`Ctrl+R`), and `Ctrl+E` to toggle to the editable source. A supported subset of tags is styled (headings, lists, tables, `<pre>`/`<code>`, `<kbd>`/`<b>`/`<i>`/`<sub>`, links, image pictograms); unknown tags stay transparent and author CSS/scripts are ignored.
- **HTML embedded in Markdown now renders.** Raw HTML in `.md` files — centered `<img>` badges, `<details>`/`<summary>`, HTML `<table>`s, and inline tags like `<kbd>`/`<sub>` — renders through the same engine instead of appearing as literal angle-bracket text.
- **The Markdown and HTML viewers are now a text-mode browser.** `Ctrl+G` — or the new `Windows ▸ Web` menu entry — opens a path or an `http(s)://` URL; pages are fetched and rendered, links are followed in place with back/forward history (`[` / `]` or `Backspace`), relative and `#section` anchor links resolve, and image links open in the image preview. A fetched view shows the URL as its title with a 🌐 icon. Fetching is security-bounded: http/https only, verified TLS, 15-second timeout, at most 5 redirects with no `https→http` downgrade, an 8 MiB body cap, and embedded resources (e.g. `<img>`) are never loaded. The `[viewer] open_links` and `[viewer] open_images` settings choose panel-vs-external (default `panel`); `O` always opens the link in the external browser.
- **Bookmarks open in the viewer.** HTML / Markdown / Mermaid / image files and `http(s)` web links open in the built-in viewer by type (honouring `[viewer] open_links`), instead of always launching an external program. Directories, remote paths, SSH, and databases are unchanged.
- **Transparent background via the `"Reset"` theme colour.** Set any theme colour to `"Reset"` to use the terminal's native colour (e.g. `bg = "Reset"` shows the terminal background through). Named theme colours are now matched case-insensitively. (#37, thanks @shepelpavel)
- **Viewer shortcuts in the help panel** (`Alt+H` / `F1`) — a new "Viewers" section documenting the Markdown/HTML/diagram hotkeys.

## Fixed
- Markdown / diagram viewers: take focus on open, open a fresh viewer per file, draw the scrollbar on the panel border, reload from disk with `Ctrl+R`, hide the cursor when unfocused, and keep a heading that follows an HTML block on its own line.
- Git log panel: the selection cursor is now full-width (no uncoloured edges, no blank bottom row), and a stray "Refreshed" status note was removed.

## Documentation
- Added a Russian README (`README.ru.md`) and reworked the README with a hero screenshot and a feature-comparison table; synchronised the installation guides, new viewer docs, and translations across en/ru/zh.
