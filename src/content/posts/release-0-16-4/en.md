---
title: "Termide 0.16.4: Git buttons that always fit"
description: "What termide 0.16.4 brings: 5 fixes and 4 changes."
date: 2026-03-19
kind: release
version: 0.16.4
cover: ./cover.jpg
coverAlt: "Termide 0.16.4 release poster"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/acf5fa08-becd-403c-96c4-806904c6b4f6" />

## Fixed
- **Git Status**: Pull button was silently truncated in narrow panels — buttons now wrap to the next line instead of being cut off
- **Git Status**: Button order changed to Pull → Push → Diff → Commit so the most critical sync actions appear first and are always visible
- **Git**: Files inside untracked directories now correctly show as Added in file manager git status
- **App**: `git fetch` errors are now displayed in the status bar instead of being silently swallowed
- **CI**: AUR PKGBUILD is now synced from the repository before version substitution

## Changed
- **Git Status / App**: Git panels (git-status, git-log) now sync their repository list when the user navigates to a new directory, so the panel reflects the current repo without a manual refresh
- **Refactor**: `ThemeColors` now derives `Copy` — eliminates heap allocations on every render frame
- **Refactor**: Parallel `unstaged_*` / `staged_*` tree fields in `GitStatusPanel` consolidated into a single `FileTree` struct, removing 8 redundant fields
- **Refactor**: Duplicate header rendering code in git-status panel extracted into reusable helpers (×4 → ×2 call sites)
