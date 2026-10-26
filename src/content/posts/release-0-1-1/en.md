---
title: "Termide 0.1.1: Interactive search and replace in the editor"
description: "What termide 0.1.1 brings: 6 additions, 5 fixes and 2 changes."
date: 2025-11-28
kind: release
version: 0.1.1
cover: ./cover.jpg
coverAlt: "Termide 0.1.1 release poster"
---

## Added
- Interactive search modal (`Ctrl+F`) with live preview and match counter
- Interactive replace modal (`Ctrl+H`) with dual input fields
- Tab/Shift+Tab navigation in search mode
- State preservation for search/replace queries
- `[X]` close button on editor panels
- Arrow key navigation between fields in replace modal

## Fixed
- Replace operation skipping matches on same line
- Inconsistent cursor positioning (now always at end of match with selection)
- Prev/Next navigation buttons resetting search state
- Escape key behavior (closes search first, then panel)
- Enter key in replace modal (now replaces instead of deleting)

## Changed
- Update match positions after replacement operations
- Standardize cursor positioning across all search/replace operations
