---
title: "Termide 0.15.2: File manager tree view and file search"
description: "What termide 0.15.2 brings: 6 additions, 2 fixes and 4 changes."
date: 2026-03-13
kind: release
version: 0.15.2
cover: ./cover.jpg
coverAlt: "Termide 0.15.2 release poster"
---

## Added
- **File Manager**: Tree view with expandable/collapsible directories (`→`/`←` or `l`/`h` in vim mode)
- **File Manager**: In-tree incremental search (`/`) — filter files as you type with auto-expanding matches
- **File Manager**: Cascading selection — selecting a directory with `Insert` selects all files within it
- **File Manager**: Nested git status — directories show aggregated status of their children
- **Search Modal**: Unified search modal with file glob and content search modes from file manager (`Ctrl+F` / `Ctrl+Shift+F`)
- **Search Modal**: Tree-based result display with expandable file groups for content search

## Fixed
- **Search Modal**: Tab/Shift+Tab now trigger initial search in non-Text modes (matching F3/Shift+F3 behavior)
- **Git**: Handle empty original content for new/untracked files in diff cache

## Changed
- **Refactor**: Deduplicated nested submenu navigation in menu actions
- **Refactor**: Unified git-status file selection and tree building helpers
- **Refactor**: Extracted VFS URL parsing and source name helpers in batch handler
- **Performance**: Cached line boundary calculations in git-status panel loops
