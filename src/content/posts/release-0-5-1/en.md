---
title: "Termide 0.5.1: A faster terminal panel"
description: "What termide 0.5.1 brings: 2 changes and 3 fixes."
date: 2025-12-13
kind: release
version: 0.5.1
cover: ./cover.jpg
coverAlt: "Termide 0.5.1 release poster"
---

## Changed
- Terminal panel performance optimizations
  - Use `has_pending_output()` in event loop for efficient redraw triggering
  - Pre-allocate spans Vec for reduced allocations
  - Use O(1) VecDeque methods for row 0 operations
- Remove crates.io publishing (distribution via GitHub Releases, deb/rpm only)

## Fixed
- Git status display in file info modal now shows actual change count
- File manager cursor resets to position 0 when entering subdirectory
- Version consistency across modal, panel-editor, ui-render crates
