---
title: "Termide 0.8.9: Clickable links in the terminal, push and pull in the background"
description: "What termide 0.8.9 brings: 3 additions, 4 fixes and 3 changes."
date: 2026-01-15
kind: release
version: 0.8.9
cover: ./cover.jpg
coverAlt: "Termide 0.8.9 release poster"
---

## Added
- **Terminal URL detection**: Ctrl+hover highlights URLs (cyan + underline), copies to clipboard, Ctrl+click opens in browser
- **ImagePanel reuse**: Browsing images reuses existing panel instead of creating new ones
- **Git async operations**: Push/Pull run in background with spinner indicator and result modal

## Fixed
- **Modal UX**: InfoModal closes only on Enter, Escape, or button click (not any key press)
- **Modal display**: Git operation results show actual output without "Error:"/"Status:" labels
- **Unicode click detection**: Fixed button click detection for Unicode text using grapheme width
- **Git TUI corruption**: Stdout/stderr piped to prevent git output from corrupting terminal display

## Changed
- **Git spinner location**: Moved from status bar to GitStatusPanel for better visibility during panel switches
- **UI cleanup**: Consolidated duplicate code and removed dead code
- **Menu structure**: Restructured menu and fixed log viewer truncation
