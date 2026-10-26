---
title: "Termide 0.2.0: Your changes, right in the gutter"
description: "What termide 0.2.0 brings: 6 additions, 3 changes and 7 fixes."
date: 2025-12-04
kind: release
version: 0.2.0
cover: ./cover.jpg
coverAlt: "Termide 0.2.0 release poster"
---

## Added
- Comprehensive logging system with configurable levels (debug, info, warn, error)
- Real-time git diff visualization in editor line numbers
  - Display uncommitted changes with color-coded line numbers
  - Show deletion markers with count on horizontal lines
  - In-memory diff computation with debounced updates (300ms)
  - Localized deletion marker text (English/Russian)
- Configurable word wrap option in editor (enabled by default)
- Per-project session storage with automatic unsaved buffer persistence
- Automatic cleanup of old sessions (configurable retention period, default 30 days)
- New configuration options:
  - `word_wrap` - Enable/disable word wrap in editor
  - `min_log_level` - Minimum logging level (debug, info, warn, error)
  - `session_retention_days` - Session cleanup retention period
  - `show_git_diff` - Toggle git diff visualization
  - `fm_extended_view_width` - Minimum width for file manager extended view

## Changed
- Rewrite clipboard system using arboard library
  - Support both CLIPBOARD and PRIMARY selections on Linux
  - More reliable cross-platform clipboard operations
- Improve cursor rendering across all panels
  - Use inverse colors instead of theme selection colors
  - Better visual contrast and cursor visibility
  - Handle reverse attribute correctly in terminal panels
- Improve config auto-completion with hash-based detection
  - Automatically detect ALL missing config keys
  - No manual maintenance of required_keys array
  - Correctly handle optional fields
  - Normalize config file format

## Fixed
- Word wrap rendering bug causing single-line display
- Cursor going off-screen with git diff deletion markers
- Viewport calculations now account for virtual lines (deletion markers)
- Empty line rendering in word wrap mode
- Modified flag after undo/redo operations
- File manager navigation now remembers directory when going up
- Old API tests marked as ignored to fix CI
