---
title: "Termide 0.12.3: CRLF line endings handled properly"
description: "What termide 0.12.3 brings: 1 addition, 1 change and 4 fixes."
date: 2026-02-09
kind: release
version: 0.12.3
cover: ./cover.jpg
coverAlt: "Termide 0.12.3 release poster"
---

## Added
- **Status Bar**: Display LF/CRLF line ending indicator before encoding (UTF-8) in editor status bar

## Changed
- **Codebase**: Deduplicate `LineEnding` enum — single definition in buffer crate root, reused internally

## Fixed
- **Buffer**: Normalize CRLF line endings to LF on file load, preserving original type for save
- **Editor**: Normalize line endings on paste for VTE-based terminals
- **Terminal**: Add Alt+Enter as fallback for newline input on VTE terminals
- **Codebase**: Reduce duplication and improve safety across VFS and rendering modules
