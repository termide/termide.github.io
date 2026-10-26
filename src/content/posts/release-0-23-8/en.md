---
title: "Termide 0.23.8: No crash on small terminals"
description: "What termide 0.23.8 brings: 1 fix."
date: 2026-06-03
kind: release
version: 0.23.8
cover: ./cover.jpg
coverAlt: "Termide 0.23.8 release poster"
---

## Fixed
- **Crash when opening a dropdown on a short or narrow terminal.** Theme/menu/language/git-selector popups sized themselves from their item count without clamping to the terminal, so a list taller or wider than the screen rendered past the buffer edge and panicked (e.g. opening Options → Themes on a 24-row terminal, or a git branch/stash selector on a small window). Popups are now clamped to the visible area and scroll instead.
