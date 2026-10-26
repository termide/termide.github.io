---
title: "Termide 0.23.2: LSP quick-fixes on Alt+Enter"
description: "What termide 0.23.2 brings: 1 addition, 1 change and 1 fix."
date: 2026-06-01
kind: release
version: 0.23.2
cover: ./cover.jpg
coverAlt: "Termide 0.23.2 release poster"
---

## Added
- **LSP code actions** — press `Alt+Enter` on a line to request quick-fixes (e.g. "Import class" for PHP) and pick one from a popup; the chosen edit is applied across files with open editors reloaded. (`Ctrl+.` stays bound to toggle-comment, so the default is `Alt+Enter`.)

## Changed
- Auto-completion now triggers on the characters the language server actually advertises (so PHP's `->` opens the popup), falling back to the built-in set only when the server reports none.

## Fixed
- **Completion no longer duplicates the typed prefix.** Accepting a suggestion now applies the server's edit verbatim instead of a word-boundary heuristic, so `$va`→`$var` (not `$$var`) and `Ord`→`Order` (not `OrdOrder`). Imports that accompany a completion (`use` statements) are applied too.
