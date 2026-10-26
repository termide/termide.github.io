---
title: "Termide 0.5.3: Steadier git status, no stray clipboard copies"
description: "What termide 0.5.3 brings: 4 fixes and 1 change."
date: 2025-12-15
kind: release
version: 0.5.3
cover: ./cover.jpg
coverAlt: "Termide 0.5.3 release poster"
---

## Fixed
- Git status color flickering on directory reload (preserve cache during refresh)
- `.git` directory date not updating on commit when viewing repo root
- Single mouse click copying character to clipboard in terminal (now only drag selection copies)
- File manager git status update timing and CPU format display in menu bar

## Changed
- Unified git and filesystem watchers into single `UnifiedWatcher` with separate debounce intervals (300ms files, 1000ms git)

## Performance
- Optimized rendering and reduced memory allocations
