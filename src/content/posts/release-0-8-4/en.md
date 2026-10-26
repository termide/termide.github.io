---
title: "Termide 0.8.4: Terminal selection that sticks, Termide on the AUR"
description: "What termide 0.8.4 brings: 2 additions and 5 fixes."
date: 2026-01-07
kind: release
version: 0.8.4
cover: ./cover.jpg
coverAlt: "Termide 0.8.4 release poster"
---

## Added
- **CI/CD automation**: Automatic AUR and Homebrew updates on release via GitHub Actions
- **AUR packages published**: `termide` (source) and `termide-bin` (binary) now available on AUR

## Fixed
- **Terminal text selection**: Selection now uses absolute buffer coordinates
- **Selection persistence**: Selection follows text when scrolling through scrollback
- **Ctrl+Shift+C**: Keyboard shortcut for copying terminal selection
- **Selection cleanup**: Selection cleared on keyboard input
- **Trailing whitespace**: Preserved when copying selected text
