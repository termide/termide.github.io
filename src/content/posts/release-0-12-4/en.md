---
title: "Termide 0.12.4: YAML and XML outlines, git and session fixes"
description: "What termide 0.12.4 brings: 1 addition, 5 changes and 4 fixes."
date: 2026-02-17
kind: release
version: 0.12.4
cover: ./cover.jpg
coverAlt: "Termide 0.12.4 release poster"
---

## Added
- **Outline**: YAML and XML regex fallback for outline panel when tree-sitter is unavailable

## Changed
- **Editor**: Extract viewport/scrolling logic into dedicated `editor_viewport.rs` module (-572 LOC from core.rs)
- **Editor**: Extract generic `poll_receiver` helper to deduplicate LSP polling methods
- **Codebase**: Replace magic numbers with named constants (`PROGRESS_THROTTLE_FILES`, `EXECUTABLE_MASK`)
- **Codebase**: Preserve error context in VFS lock/channel/FTP operations instead of discarding
- **Codebase**: Replace `is_none() + unwrap()` pattern with `is_none_or` and double `.all()` iteration with single-pass check

## Fixed
- **Git**: Show local commit count as ahead when no remote/upstream is configured
- **Git Status**: Re-discover git repository on refresh after external `git init`
- **Session**: Restore non-empty orphaned unsaved buffers instead of deleting them
- **Editor**: Invalidate word-wrap cache on undo/redo, replace, and vim edits
