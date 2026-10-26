---
title: "Termide 0.10.0: Vim keys and quick directory jumps"
description: "What termide 0.10.0 brings: 4 additions and 3 fixes."
date: 2026-01-22
kind: release
version: 0.10.0
cover: ./cover.jpg
coverAlt: "Termide 0.10.0 release poster"
---

## Added
- **Vim Mode**: Full vim keybinding support for Editor panel with Cyrillic keyboard layout support
- **Directory Switcher**: Quick directory navigation modal with Ctrl+P, recent directories, and fuzzy search
- **Bookmark Add Modal**: Smart group input with dropdown suggestions for organizing bookmarks
- **Modal Paste Support**: Paste text directly into modal input fields with control character filtering

## Fixed
- **Terminal Visual Artifacts**: Fixed race condition in sync_output cache invalidation
- **Terminal Batch Rendering**: Force cache invalidation on ED (clear screen) commands
- **Buffer Invariant**: Added ensure_buffer_size() to prevent IL/DL edge cases

## Documentation
- Added documentation for vim mode, directory switcher, and bookmarks features
