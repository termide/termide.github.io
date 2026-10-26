---
title: "Termide 0.11.1: Collapsed panels rest"
description: "What termide 0.11.1 brings: 1 addition, 3 changes and 4 fixes."
date: 2026-02-01
kind: release
version: 0.11.1
cover: ./cover.jpg
coverAlt: "Termide 0.11.1 release poster"
---

## Added
- **109 New Tests**: Added tests across 8 crates covering critical gaps (layout, config, buffer, clipboard, core, git, i18n, session)

## Changed
- **Stale-on-Collapse Optimization**: Collapsed panels skip tick/watcher/git/LSP background work; refresh once when expanded again
- **Expanded-Aware Iterators**: Added `iter_all_panels_with_expanded_state_mut()` and `iter_expanded_panels_mut()` to LayoutManager
- **LSP Polling Scoped to Expanded Editors**: Loading status updates only run for visible editor panels

## Fixed
- **CI/Security**: Vendored OpenSSL for cross-platform builds, fixed macOS statvfs types, redacted credentials from logs
- **SFTP Stale Bug**: Remote panels are never marked stale by local fs/git events (prevents broken reconnections)
- **VFS Spinner Hang**: FileManager tick always drains VFS and git-status receivers even when collapsed, preventing stuck spinners
- **VFS Error Draining**: Fixed early return in FileManager tick that prevented VFS error results from being consumed
