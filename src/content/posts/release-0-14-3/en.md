---
title: "Termide 0.14.3: Clearer resource monitors"
description: "What termide 0.14.3 brings: 7 fixes and 7 changes."
date: 2026-03-08
kind: release
version: 0.14.3
cover: ./cover.jpg
coverAlt: "Termide 0.14.3 release poster"
---

## Fixed
- **Resource Modals**: Normalize CPU % by core count (0–100% of total capacity instead of per-core)
- **Resource Modals**: Filter out threads (VfsLoader, GC-marker) and kernel threads from process lists
- **Resource Modals**: Add spacing between count and CPU columns to prevent overlap at high values
- **Resource Modals**: Always show process count (was hidden when count=1)
- **Resource Modals**: Remove colon separator in Segments modal rows
- **Resource Modals**: Auto-refresh CPU/RAM modal content every 3 seconds
- **SSH**: Validate port range (1–65535) instead of digits-only check

## Changed
- **Disk Modal**: Redesigned with free%, free, total columns and colored free values
- **Disk Modal**: Added column headers with i18n support (15 languages)
- **Performance**: Zero-allocation case-insensitive sort in file manager (was allocating on every comparison)
- **Performance**: Terminal keybindings cloned only when config changes (was cloned every frame)
- **Code Quality**: Synced ConflictResolution variants across core/modal/file-ops
- **Code Quality**: Added `#[must_use]` to 11 pure getters in BookmarksConfig
- **Security**: FTP password zeroed in memory on provider drop
