---
title: "Termide 0.12.1: Hidden files toggle and panel fixes"
description: "What termide 0.12.1 brings: 1 addition, 2 changes and 4 fixes."
date: 2026-02-08
kind: release
version: 0.12.1
cover: ./cover.jpg
coverAlt: "Termide 0.12.1 release poster"
---

## Added
- **File Manager**: Toggle hidden files visibility with `.` key

## Changed
- **InfoModal**: Colored segments, multiline support and truncation
- **Codebase**: Rename Welcome remnants to Help across codebase

## Fixed
- **Layout**: Refresh stale panels on next/prev switch in group — fixes Outline going empty after panel switching
- **File Manager**: Treat directory symlinks as directories
- **App**: Enable search in vim normal mode and JournalPanel
- **Outline**: Repopulate outline after expanding collapsed panel
