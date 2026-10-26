---
title: "Termide 0.8.2: Inline diffs and git markers in the editor"
description: "What termide 0.8.2 brings: 3 additions and 4 fixes."
date: 2026-01-01
kind: release
version: 0.8.2
cover: ./cover.jpg
coverAlt: "Termide 0.8.2 release poster"
---

## Added
- **Inline diff visualization**: Character-level diff highlighting for modified lines in editor (deleted text in red, inserted in green)
- **Git gutter markers**: Visual indicators in editor line numbers (`+` for added, `~` for modified lines)
- **Revert button**: Quick revert action for individual files in Git Status panel

## Fixed
- Git commands now properly detect repository when editing files in subdirectories
- Inline diff line mapping correctly tracks modified lines when other lines are added/deleted above
- Debian package (.deb) now includes binary in `/usr/bin/`
- README.md download links corrected for .deb and .rpm packages
