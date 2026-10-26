---
title: "Termide 0.9.1: Linux console colors, remote branches"
description: "What termide 0.9.1 brings: 3 additions, 5 changes and 2 fixes."
date: 2026-01-21
kind: release
version: 0.9.1
cover: ./cover.jpg
coverAlt: "Termide 0.9.1 release poster"
---

## Added
- **Linux TTY Support**: Native terminal colors for Linux console/framebuffer (TERM=linux)
- **Remote Branch Display**: Git Status panel shows remote branches not available locally
- **DECSTBM Scroll Regions**: Proper CSI scroll region support for terminal applications

## Changed
- **Terminal Refactoring**: Extracted utility modules (clipboard, disk_space, link_detection, shell_utils)
- **Editor Refactoring**: Decomposed core.rs into focused modules (LSP, movement, search, text)
- **Git Refactoring**: Split monolithic lib.rs into command, commits, files, operations modules
- **Performance**: Cached regex patterns for link detection, reduced panel code duplication
- **DRY Improvements**: Extracted helpers for file/terminal opening across panels

## Fixed
- **Synchronized Output**: Fixed cache invalidation when exiting sync_output mode (CSI ? 2026 l)
- **CI Release Notes**: Fixed extraction of release notes from CHANGELOG.md

## Performance
- **Terminal**: Reduced SSH input latency and htop rendering overhead
