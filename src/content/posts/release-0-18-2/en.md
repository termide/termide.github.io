---
title: "Termide 0.18.2: A layout that fits your terminal"
description: "What termide 0.18.2 brings: 5 additions, 4 fixes and 2 changes."
date: 2026-04-02
kind: release
version: 0.18.2
cover: ./cover.jpg
coverAlt: "Termide 0.18.2 release poster"
---

## Added
- **Layout**: Adaptive default layout — 1/2/3 panel groups based on terminal width (<100, 100-139, 140-199, 200+)
- **Directory Picker**: Tree-view navigation with expand/collapse (Right/Left), cursor matching file manager style
- **Hotkey**: `Alt+N` for creating new session (configurable)
- **Theme**: Norton Commander theme auto-selected on Linux VT (16-color terminals)
- **File Manager**: Single-file copy shows full path with filename for inline rename

## Fixed
- **Help Panel**: Opens in wide group instead of narrow sidebar
- **Command Palette**: Category and keybinding columns right-aligned consistently
- **Git**: Directory replacing deleted symlink now shows correct status (Added, not Deleted)
- **Directory Picker**: Long paths truncated left with ellipsis

## Changed
- **Layout**: Auto-width groups now receive remaining space (not average of fixed groups)
- **Documentation**: Updated theme count to 38, added missing themes to tables, Ctrl+Shift+P hotkey
