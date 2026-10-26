---
title: "Termide 0.20.1: Panel actions menu and drag-and-drop panels"
description: "What termide 0.20.1 brings: 3 additions, 2 changes and 1 fix."
date: 2026-04-21
kind: release
version: 0.20.1
cover: ./cover.jpg
coverAlt: "Termide 0.20.1 release poster"
---

## Added
- **Panels**: Context menu on `[≡]` button with Close / Split / Merge / Move actions (closes #16)
- **Panels**: Hotkey for panel action context menu (`Alt+K` / `Shift+F10`)
- **Panels**: Drag-and-drop panels by their top border

## Changed
- **Architecture**: Deduplicated drag overlay and menu action dispatch
- **Architecture**: Deduplicated layout-op error handling and navigation bookkeeping

## Fixed
- **Bookmarks**: Suppress xdg-open output to prevent TUI corruption
