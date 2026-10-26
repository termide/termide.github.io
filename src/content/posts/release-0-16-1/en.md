---
title: "Termide 0.16.1: A calendar, FTP and SMB"
description: "What termide 0.16.1 brings: 4 additions and 4 changes."
date: 2026-03-16
kind: release
version: 0.16.1
cover: ./cover.jpg
coverAlt: "Termide 0.16.1 release poster"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/866a330a-5c39-4162-a2c4-4adec686e4eb" />

## Added
- **UI**: Calendar modal on clock click — monthly grid with day navigation (arrows, PgUp/PgDn for months, Home to jump to today)
- **UI**: Colorized panel titles and improved status bar styling
- **Git Log**: Open commit in browser with `o` / `Shift+Enter`
- **VFS**: FTP/FTPS and SMB connection support via address bar input

## Changed
- **Refactor**: Deduplicate grapheme utilities into shared `termide-ui` crate
- **Refactor**: Clean up menu bar rendering, remove `TERMIDE_LANG` env variable
- **Performance**: Fix render allocations and SMB error handling
- **Docs**: Sync documentation with recent feature changes
