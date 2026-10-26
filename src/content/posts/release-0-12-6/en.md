---
title: "Termide 0.12.6: New command-line options"
description: "What termide 0.12.6 brings: 3 additions, 6 changes and 4 fixes."
date: 2026-02-22
kind: release
version: 0.12.6
cover: ./cover.jpg
coverAlt: "Termide 0.12.6 release poster"
---

## Added
- **CLI**: `--log-level`, `--no-lsp`, `--config` command-line arguments
- **CLI**: Set terminal window/tab title to "Termide: <cwd>" on startup
- **Logger**: TRACE log level and trace user input events

## Changed
- **Git Status**: Remove flat view mode, always use tree view
- **ProgressModal**: Deduplicate 8 constructors via shared base + struct update syntax (-166 LOC)
- **API**: Return `&[T]` instead of `&Vec<T>` in `PanelGroup::panels()` and `TerminalScreen::get_line_by_absolute()`
- **Constants**: Centralize `MEGABYTE` in `termide-config`, remove duplicates from `panel-editor` and `modal`
- **Codebase**: Remove unused `_buffer` parameter from `build_diagnostic_maps`
- **Codebase**: Remove redundant clones, deduplicate constructors, fix unwrap

## Fixed
- **Editor**: Invalidate wrap cache on selection delete
- **Journal**: Account for trailing empty line in auto-scroll check
- **Journal**: Bind auto-scroll to cursor position instead of key codes
- **Terminal**: Update cursor position on arrow key movement
