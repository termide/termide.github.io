---
title: "Termide 0.29.6: Formatted cells in Markdown tables"
description: "What termide 0.29.6 brings: 4 fixes and 2 changes."
date: 2026-08-01
kind: release
version: 0.29.6
cover: ./cover.jpg
coverAlt: "Termide 0.29.6 release poster"
---

## Fixed
- Markdown and HTML tables now render inline formatting (inline code, `**bold**`, `*italic*`) and clickable links inside cells. Previously a formatted cell was left blank and its content leaked out as plain text below the table.
- The diagnostics panel no longer panics when the terminal is only a few rows tall.
- Git status and log panels no longer stack redundant background refresh workers during rapid `.git` activity (rebase, gc, fetch, large checkout), avoiding CPU and git-subprocess spikes.
- The editor's inline git diff no longer risks a git/SSH credential prompt being drawn over the interface, and now resolves diffs correctly for files opened through a symlinked path.

## Changed
- Git blame ages and the relative times in the session list now follow the interface language (blame was previously always English) and gain a "years" bucket; the new string is translated across all bundled locales.
- Faster editor rendering while searching in large files, and lower per-frame work in the git-status panel.
