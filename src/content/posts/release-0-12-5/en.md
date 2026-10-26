---
title: "Termide 0.12.5: Git status fits the panel width"
description: "What termide 0.12.5 brings: 1 addition, 5 changes and 2 fixes."
date: 2026-02-18
kind: release
version: 0.12.5
cover: ./cover.jpg
coverAlt: "Termide 0.12.5 release poster"
---

## Added
- **Git Status**: Auto-switch between tree and flat view based on panel width (>= 35 columns)

## Changed
- **Codebase**: Extract `TREE_VIEW_MIN_WIDTH` and `MAX_RECURSION_DEPTH` shared constants
- **Codebase**: Consolidate `SpeedTracker` into `file-ops` crate, re-export from `state`
- **Terminal**: Deduplicate constructor code via `set_env`/`spawn_reader`/`build` helpers
- **Git Status**: Optimize tree prefix computation from O(n²) to O(n) reverse scan
- **Clipboard**: Graceful fallback on headless systems instead of panic

## Fixed
- **Editor**: Correct cursor positioning with wide characters at wrap boundary and in no-wrap mode
- **Session**: Prevent duplicate unsaved buffer files on auto-save
