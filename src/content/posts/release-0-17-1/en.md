---
title: "Termide 0.17.1: Windows fixes"
description: "What termide 0.17.1 brings: 2 fixes and 3 changes."
date: 2026-03-21
kind: release
version: 0.17.1
cover: ./cover.jpg
coverAlt: "Termide 0.17.1 release poster"
---

<img width="1907" height="950" alt="Screenshot From 2026-03-21 20-31-23" src="https://github.com/user-attachments/assets/0ad0afbe-281e-4ff5-bfb9-e6e1b5f23565" />

## Fixed
- **Windows**: Session files now save correctly — drive letter prefix (`C:\`) is stripped via `Path::components()` to prevent sessions from being written to the project root
- **Windows**: Triangle symbols `▶` (U+25B6) replaced with WGL4-compatible `►` (U+25BA) in all UI panels — fixes square/tofu rendering in default Windows console fonts

## Changed
- **Refactor**: `panel-file-manager/src/lib.rs` split into focused modules — `SelectionState`→`selection.rs`, `NavigationState`→`navigation.rs`, git tracking→`git_status.rs`, file-open logic→`operations.rs`; file reduced from 2694→2143 LOC
- **Refactor**: LSP server mutex guards hardened against thread-panic lock poisoning (`unwrap()` → `unwrap_or_else(|e| e.into_inner())`)
- **Refactor**: Eliminated 29 redundant string allocations (`to_string_lossy().to_string()` → `into_owned()`) across multiple crates
