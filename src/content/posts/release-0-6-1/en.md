---
title: "Termide 0.6.1: Live theme preview"
description: "What termide 0.6.1 brings: 2 additions and 3 fixes."
date: 2025-12-16
kind: release
version: 0.6.1
cover: ./cover.jpg
coverAlt: "Termide 0.6.1 release poster"
---

## Added
- Live theme preview: theme changes on cursor navigation in theme selection menu
- Theme restored on cancel (Esc), saved on confirm (Enter)

## Fixed
- Menu toggle on repeated click (Preferences dropdown now closes on second click)
- Nested submenu toggle (Themes menu closes on repeated click)
- i18n: pluralization for time_*_ago functions (fixed "{plural}" appearing in session list)

## Performance
- Git status: optimized from 6 to 2 git process spawns per call (66% reduction)
- RenamePattern::apply(): reduced allocations using Vec<&str> instead of Vec<String>

## Refactoring
- Extracted CursorNavigation trait for modal cursor navigation (DRY, -70 LOC)
- Extracted git_command helpers to reduce duplication
- DRY improvements in system-monitor and status_bar
- Removed dead code across multiple crates (~300 LOC)
