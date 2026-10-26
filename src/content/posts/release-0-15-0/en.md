---
title: "Termide 0.15.0: Symlinks in the file manager"
description: "What termide 0.15.0 brings: 4 additions, 4 changes and 7 fixes."
date: 2026-03-10
kind: release
version: 0.15.0
cover: ./cover.jpg
coverAlt: "Termide 0.15.0 release poster"
---

## Added
- **File Manager**: Symlink creation from copy modal and follow-symlink navigation
- **UI**: Emoji icons for panel types in title bars
- **File Manager**: Font modifier styling — ITALIC for symlinks, BOLD for executables
- **File Manager**: Grouped sorting — directories → executables → regular files

## Changed
- **Editor**: Git gutter uses background-colored line numbers with auto-contrast instead of foreground coloring
- **Refactor**: Reduced coupling, tightened visibility (`pub(crate)`), extracted panel factory
- **Performance**: Cached SFTP file name allocations, reduced per-frame config cloning
- **Docs**: Updated README and docs — CLI options, Ctrl+/ comment toggle, package managers

## Fixed
- **Git**: Inline diff detection for consecutive modified lines (Del…Del Ins…Ins blocks now paired correctly)
- **Git**: Symlink path resolution — `canonicalize()` before `strip_prefix()` for diff loading
- **Git Status**: Directory label format in tree view
- **UI**: Tilde expansion for paths in copy/move/symlink/save-as modals
- **File Ops**: Prevent symlink deletion from destroying target data
- **File Manager**: Prevent ".." from being selectable
- **UI**: Double spacing in collapsed panel headers
