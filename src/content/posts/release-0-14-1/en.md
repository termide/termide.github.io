---
title: "Termide 0.14.1: File manager shortcuts and a directory picker"
description: "What termide 0.14.1 brings: 6 additions, 2 changes and 4 fixes."
date: 2026-03-04
kind: release
version: 0.14.1
cover: ./cover.jpg
coverAlt: "Termide 0.14.1 release poster"
---

## Added
- **File Manager**: F3 opens files in read-only mode (view mode)
- **File Manager**: Directory picker on title click for quick navigation
- **File Manager**: Keyboard shortcuts for rename (R/F2), view (V/F3), edit (E/F4), new file (F/Ctrl+N)
- **Git Status**: Keyboard shortcuts for revert, view, edit
- **Layout**: Improved accordion panel insertion and removal behavior
- **Git Status**: Auto-fetch on init to show correct pull button

## Changed
- **I18n**: `init()` and `init_with_language()` return `Result` instead of panicking
- **Codebase**: Added `must_use` attributes, fixed unsafe unwrap

## Fixed
- **Terminal**: Resize alternate screen buffer on window resize
- **Git**: Canonicalize paths before strip_prefix for symlink repos
- **File Manager**: Deleted files appearing in wrong directories
- **Keyboard**: Fixed incorrect and missing keyboard shortcuts in documentation
