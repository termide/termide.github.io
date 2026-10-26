---
title: "Termide 0.5.4: Switch between open sessions"
description: "What termide 0.5.4 brings: 2 additions and 3 fixes."
date: 2025-12-15
kind: release
version: 0.5.4
cover: ./cover.jpg
coverAlt: "Termide 0.5.4 release poster"
---

## Added
- Session switching modal (Alt+M → Sessions) to switch between open termide sessions
- Static loading indicator for file watcher initialization (replaced animated Braille spinner)

## Fixed
- Word wrap cursor positioning unified calculation
- Mouse selection offset with word wrap enabled
- Disk space indicator formatting (removed space before unit: "411/467GB")

## Performance
- File watcher now uses `ignore` crate to skip .gitignored directories

## Documentation
- Updated project structure in README and architecture docs to reflect workspace crates
- Updated i18n section to show all 9 supported languages
- Added Ctrl+D (duplicate line) to editor help files
