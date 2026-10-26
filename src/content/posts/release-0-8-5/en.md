---
title: "Termide 0.8.5: One-line install script"
description: "What termide 0.8.5 brings: 1 addition, 2 fixes and 5 changes."
date: 2026-01-07
kind: release
version: 0.8.5
cover: ./cover.jpg
coverAlt: "Termide 0.8.5 release poster"
---

## Added
- **Universal install script**: New `install.sh` for easy cross-platform installation

## Fixed
- **Config hot-reload**: Editor now applies settings (theme, word_wrap, tab_size) when saving config.toml
- **UTF-8 paths**: Git Status panel correctly handles non-ASCII file paths in truncation

## Changed
- **Git repo discovery**: Repositories now discovered from panel paths instead of project root
- **Performance**: O(n²) → O(n log n) optimization in nested paths removal algorithm
- **Performance**: Reduced allocations in search replace using `take()` instead of `clone()`
- **Code quality**: Extracted helper methods in GitStatusPanel (git operations, rendering, navigation, mouse handling)
- **Code quality**: Removed unused `SearchDirection` and `Action::Group` from buffer module
