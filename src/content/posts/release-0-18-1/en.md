---
title: "Termide 0.18.1: Reliable auto-refresh"
description: "What termide 0.18.1 brings: 7 fixes."
date: 2026-03-28
kind: release
version: 0.18.1
cover: ./cover.jpg
coverAlt: "Termide 0.18.1 release poster"
---

## Fixed
- **File Manager**: Canonicalize `current_path` at all write points (new, navigate, GoHomeDir) to fix symlink/bind-mount watcher mismatch — root cause of repeated auto-refresh failures
- **Git**: Skip diff coloring for gitignored files (added `git check-ignore` check)
- **Git**: Count local commits as ahead when remote refs are missing (empty remote after clone)
- **Watcher**: Canonicalize repo root from git events; detect MERGE_HEAD, FETCH_HEAD, REBASE_HEAD, CHERRY_PICK_HEAD
- **Terminal**: Strip spurious newlines from soft-wrapped lines on copy (track per-line `wrapped` flag)
- **Modal**: Use high-contrast fg/bg inversion for buttons in all remaining modals (info, info_action, editable_select, tree_search)
- **Terminal**: Add debug_assert for buffer/wrapped-flag length sync
