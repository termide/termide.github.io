---
title: "Termide 0.8.1: Git status at Alt+G"
description: "What termide 0.8.1 brings: 5 additions and 4 fixes."
date: 2025-12-28
kind: release
version: 0.8.1
cover: ./cover.jpg
coverAlt: "Termide 0.8.1 release poster"
---

## Added
- **Alt+G hotkey**: Quick access to open/focus Git Status panel
- **Git Status navigation**: Spatial navigation with Up/Down between sections, Left/Right within rows
- **Git Status sticky headers**: Staged/Unstaged headers stay visible when scrolled
- **CommitModal improvements**: PageUp/PageDown support, mouse scroll in textarea
- **Terminal Shift+Enter**: Insert newline for multi-line input

## Fixed
- Git Status panel: PageDown now scrolls fully to show all files
- Terminal: Shift+Enter sends newline instead of CSI u escape sequence
- Editor: Mouse scroll no longer jumps back to cursor position
- CommitModal: Textarea border now uses correct accent color

## Documentation
- Added Shift+Enter shortcut to terminal documentation (EN/RU)
- Added Git panel menu item and Alt+G shortcut to UI docs (EN/RU)
- Updated help files for all 9 languages with Git panel shortcuts
