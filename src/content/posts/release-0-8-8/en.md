---
title: "Termide 0.8.8: Configurable keybindings"
description: "What termide 0.8.8 brings: 1 security fix, 2 additions and 3 changes."
date: 2026-01-13
kind: release
version: 0.8.8
cover: ./cover.jpg
coverAlt: "Termide 0.8.8 release poster"
---

## Security
- **lru vulnerability**: Fixed GHSA-rhfx-m35p-ff5j (IterMut Stacked Borrows violation) by updating to lru 0.16.3

## Added
- **Configurable keybindings**: Full keybinding customization via config.toml for all panels
- **Shared abstractions**: New ClickTracker, Viewport, SelectionStyle utilities for DRY code

## Changed
- **Dependencies**: Updated ratatui 0.29→0.30, ratatui-image 5→10
- **Performance**: 50-500x speedup in hot paths (grapheme iteration, git diff markers, LRU eviction, gitignore checks)
- **Refactoring**: Integrated ClickTracker into GitStatusPanel and FileManager (~40 LOC saved)
