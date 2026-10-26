---
title: "Termide 0.13.0: Brackets that close themselves"
description: "What termide 0.13.0 brings: 4 additions and 4 changes."
date: 2026-02-24
kind: release
version: 0.13.0
cover: ./cover.jpg
coverAlt: "Termide 0.13.0 release poster"
---

## Added
- **Editor**: Auto-closing brackets and quotes with context-aware logic (don't close apostrophes mid-word)
- **Editor**: Ctrl+Left/Right word navigation and Ctrl+Shift+Left/Right word selection
- **Editor**: Split-bracket indent on Enter between matching pairs (`{|}` → three lines with proper indentation)
- **Editor**: `auto_indent` and `auto_close_brackets` configuration options

## Changed
- **VFS**: Deduplicate SFTP operations via `spawn_op`/`spawn_op2` helpers (-224 LOC)
- **I18n**: Replace unsafe pointer cast in `t()` with safe `Box::leak` approach
- **I18n**: Use fallback instead of guard-checked `expect` in pluralization
- **Editor**: Extract word boundary logic from vim motions into shared `word_boundary` module
