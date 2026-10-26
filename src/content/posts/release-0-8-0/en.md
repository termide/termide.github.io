---
title: "Termide 0.8.0: Stage, commit, push without leaving"
description: "What termide 0.8.0 brings: 6 additions, 3 fixes and 2 changes."
date: 2025-12-27
kind: release
version: 0.8.0
cover: ./cover.jpg
coverAlt: "Termide 0.8.0 release poster"
---

## Added
- **Git Status Panel**: Full git status panel with staged/unstaged files, commit/push/pull actions
- **Git Log Panel**: View commit history with navigation
- **Sessions Menu**: New/switch/change-root session actions via Ctrl+S menu
- **CommitModal**: Multi-line textarea for entering commit messages with Commit/Cancel buttons
- **TextArea component**: Multi-line text input with 2D cursor, selection, undo/redo, clipboard support
- **Input field improvements**: Text selection, undo/redo (Ctrl+Z/Y), clipboard support in modal input fields

## Fixed
- Modal input fields: UTF-8 handling, clipboard operations, text selection
- Collapsed panel titles: now show truncated title instead of empty string
- Git Status panel title: properly displays repo name, branch, and status indicators

## Changed
- Git Status panel: spinner icon during refresh, status numbers moved to panel title
- InlineSelector component: improved styling and interaction
