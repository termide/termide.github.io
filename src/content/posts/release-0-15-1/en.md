---
title: "Termide 0.15.1: Search in the terminal"
description: "What termide 0.15.1 brings: 3 additions and 2 fixes."
date: 2026-03-11
kind: release
version: 0.15.1
cover: ./cover.jpg
coverAlt: "Termide 0.15.1 release poster"
---

## Added
- **Terminal**: Text search with `Ctrl+F` — search across scrollback buffer and visible screen with match highlighting, navigation, and auto-scroll
- **Core**: `Searchable` trait for unified search across Editor, Journal, and Terminal panels
- **Search Modal**: Button focus area with keyboard navigation (Down/Up to switch, Left/Right between buttons)

## Fixed
- **Terminal**: Default search keybinding changed from `Ctrl+Shift+F` to `Ctrl+F` — host terminals (GNOME Terminal, etc.) intercept `Ctrl+Shift+F`
- **Journal**: Auto-scroll suppressed during active search to keep viewport on current match
