---
title: "Termide 0.15.4: Clipboard over SSH, bells and background fetch"
description: "What termide 0.15.4 brings: 3 additions, 2 fixes and 6 changes."
date: 2026-03-15
kind: release
version: 0.15.4
cover: ./cover.jpg
coverAlt: "Termide 0.15.4 release poster"
---

## Added
- **Git Status**: Trigger background `git fetch` on Ctrl+R refresh
- **App**: Bell notification for git push/pull completion and terminal exit
- **Clipboard**: OSC 52 clipboard fallback for SSH/headless sessions

## Fixed
- **Terminal**: Prevent panic on UTF-8 search (Cyrillic, emoji) — advance by match length instead of 1 byte
- **File Manager**: Use full path when entering nested directory in tree view

## Changed
- **Performance**: Skip mouse handler processing and simplify OSC 52 logic
- **Performance**: Skip idle timer reset and forced redraw on mouse hover
- **Performance**: Replace `.repeat()` padding with static `PAD` slice in file manager rendering
- **Performance**: Cache menu layout in `MenuLayout` struct to avoid repeated allocations
- **Refactor**: Improve VFS error logging in batch handler
- **Refactor**: Remove dead `find_visible_by_path` method
