---
title: "Termide 0.17.0: Color previews, nine new themes"
description: "What termide 0.17.0 brings: 2 additions, 5 fixes and 1 change."
date: 2026-03-20
kind: release
version: 0.17.0
cover: ./cover.jpg
coverAlt: "Termide 0.17.0 release poster"
---

<img width="1901" height="943" alt="Screenshot From 2026-03-20 23-46-24" src="https://github.com/user-attachments/assets/68383569-25fb-4490-b060-292a6d9c2f6c" />

## Added
- **UI / Editor / Terminal**: Hex color preview popup on `Ctrl+click` — clicking on a `#rgb` or `#rrggbb` value shows a color swatch while the button is held; works in both the editor and terminal panels
- **Theme**: 9 new built-in themes: `ayu-dark`, `catppuccin-macchiato`, `everforest`, `github-dark`, `gruvbox`, `kanagawa`, `material-ocean`, `rosepine`, `tokyonight`

## Fixed
- **Theme**: Menu bar items and editor cursor line now use `accented_fg` on `accented_bg` surfaces — fixes low-contrast rendering in `windows-98`, `dos-navigator`, and similar themes
- **Theme**: Disabled color contrast improved in classic retro themes (`norton-commander`, `volkov-commander`, `far-manager`, `windows-95`); `github-light` error color corrected to GitHub red
- **UI**: Indic script cursor desync fixed via unicode-width fork — cursor no longer drifts when editing text containing Devanagari, Bengali, or other complex scripts
- **File Manager**: Right arrow key now only expands directories in tree view; no longer also triggers directory entry
- **App**: Fixed double-nesting when copying a directory with OverwriteAll conflict mode selected

## Changed
- **Refactor**: Removed leaky pub exports, dead methods, and simplified regex statics across multiple crates (no behavior change)
