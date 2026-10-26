---
title: "Termide 0.10.1: Clean terminal frames"
description: "What termide 0.10.1 brings: 4 changes and 4 fixes."
date: 2026-01-23
kind: release
version: 0.10.1
cover: ./cover.jpg
coverAlt: "Termide 0.10.1 release poster"
---

## Changed
- **LSP Performance**: Reduced lock contention and reorganized response handling
- **Editor Refactoring**: Extracted mouse handling to separate module
- **Modal Cleanup**: Removed unused panel_index field from SelectOption
- **Theme Colors**: Updated theme color usage in modals and dropdowns

## Fixed
- **Terminal Sync Artifacts**: Defer cache invalidation during sync_output batches to prevent partial frame rendering
- **Terminal Render Clearing**: Clear render area before drawing to prevent visual artifacts
- **Modal Width Stability**: Fixed editable select width during dropdown toggle
- **Terminal Cache**: Added cache invalidation for all buffer-modifying operations
