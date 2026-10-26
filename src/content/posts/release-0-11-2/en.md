---
title: "Termide 0.11.2: Word wrap and git status fixes"
description: "What termide 0.11.2 brings: 10 fixes."
date: 2026-02-04
kind: release
version: 0.11.2
cover: ./cover.jpg
coverAlt: "Termide 0.11.2 release poster"
---

## Fixed
- **UTF-8 Panic**: Fixed byte-index panic when resizing panels with Cyrillic/Unicode text — now truncates by display width, not byte offset
- **Editor Word-Wrap Mouse**: Fixed cursor mispositioning on mouse click in word-wrap mode when git deletion markers are present
- **Editor Word-Wrap Scroll**: Fixed viewport failing to scroll past lines with deletion markers or diagnostics in word-wrap mode
- **Editor Visual Cursor**: Fixed cursor unable to reach end of last visual row during page navigation in word-wrap mode
- **Editor Inline Diff Click**: Fixed mouse click offset in no-wrap mode when inline diff deleted text shifts visual positions
- **Git Status Stale Panel**: Collapsed git-status panel now marks itself stale and refreshes on expand (MarkStale/RefreshIfStale)
- **Git Status Title**: Collapsed git-status panel title now updates branch/file counts on git/filesystem events
- **Git Diff Toggle**: Mouse click on file header in git-diff panel now correctly toggles collapse
- **Operations Panel Focus**: Opening the operations panel no longer steals focus from the active editor
- **CodeQL Security**: Broke taint chain for cleartext-logging alerts in VFS types
