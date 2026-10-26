---
title: "Termide 0.12.0: Navigate code by its outline"
description: "What termide 0.12.0 brings: 3 additions, 3 changes and 2 fixes."
date: 2026-02-07
kind: release
version: 0.12.0
cover: ./cover.jpg
coverAlt: "Termide 0.12.0 release poster"
---

## Added
- **Outline Panel**: Structural code navigation using tree-sitter queries with regex fallback for markdown/HTML; tree-drawing prefixes, cursor sync, and keyboard/mouse navigation
- **Global Hotkeys**: Keyboard shortcuts for Outline, Diagnostics, and Git Log panels
- **File Manager Edit Button**: Replaced Git Status button with Edit in file info modal

## Changed
- **Code Quality**: Eliminated unsafe unwraps across app and git crates, deduplicated batch operations
- **Modal Handlers**: Deduplicated modal handlers, added path traversal guard and RwLock recovery
- **Panel Index Cleanup**: Removed obsolete panel_index field, fixed related clippy warnings

## Fixed
- **Outline Sync**: Outline panel now syncs on panel navigation and debounces live edits
- **Outline Resync on Close**: Outline panel rebinds to another editor (or clears) when tracked editor is closed
