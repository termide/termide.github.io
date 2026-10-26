---
title: "Termide 0.17.4: Filter the git diff by change"
description: "What termide 0.17.4 brings: 1 addition and 3 fixes."
date: 2026-03-24
kind: release
version: 0.17.4
cover: ./cover.jpg
coverAlt: "Termide 0.17.4 release poster"
---

<img width="1902" height="943" alt="Screenshot From 2026-03-24 17-00-02" src="https://github.com/user-attachments/assets/e1f37ec6-cff8-4951-9618-ef56dbf73b06" />

## Added
- **Git Diff**: File filter dropdown — click the `[filter ▼]` widget to show only Added, Modified, or Deleted files

## Fixed
- **Git**: Subdirectories inside untracked directories now highlighted green (previously only top-level untracked dir was highlighted)
- **File Manager / Git Status**: Actions on deleted files (move, copy, rename) now ignored to prevent errors
- **Editor**: All lines shown as Added (green) for untracked files, matching git status behavior

## Performance
- **Core**: `Panel::prepare_render()` now accepts `Arc<Config>` instead of `&Config`, eliminating per-frame allocations
- **Editor**: Pre-allocated syntax style vectors in line rendering
