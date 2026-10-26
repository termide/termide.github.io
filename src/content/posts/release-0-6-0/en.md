---
title: "Termide 0.6.0: Find files and what is in them"
description: "What termide 0.6.0 brings: 4 additions and 3 fixes."
date: 2025-12-16
kind: release
version: 0.6.0
cover: ./cover.jpg
coverAlt: "Termide 0.6.0 release poster"
---

## Added
- File search modal (Ctrl+Shift+P) with async glob pattern matching
- Content search modal (Ctrl+Shift+F) with regex support for searching text in files
- Theme selection UI with nested dropdown menu in Preferences
  - Color preview for each theme showing bg/fg and accent colors
  - Immediate theme application and config persistence
- Theme refactoring: `all_theme_names()` and `get_by_name()` API for theme system

## Fixed
- Syntax highlighting fallback to theme foreground color for light themes
- Session modal: current session now highlighted with accent color and selectable
- Session modal and file search UX improvements

## Documentation
- Added file search (Ctrl+Shift+P) and content search (Ctrl+Shift+F) shortcuts
- Updated theme documentation with new menu-based selection method
