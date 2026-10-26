---
title: "Termide 0.24.1: SFTP symlinks and held keys work again"
description: "What termide 0.24.1 brings: 1 change and 2 fixes."
date: 2026-06-12
kind: release
version: 0.24.1
cover: ./cover.jpg
coverAlt: "Termide 0.24.1 release poster"
---

## Changed
- Cancelling a background operation in the Operations panel now asks for confirmation first — via `Esc`, `Delete`/`Backspace`, or the card's popup menu — so a reflexive `Esc` no longer aborts a running transfer.

## Fixed
- Entering a **directory symlink on a remote SFTP filesystem** now navigates into it instead of showing an endless "synchronization". The link was misread as a file, which kicked off a recursive download of its target tree. Symlinks are now resolved on entry (directory → navigate into it, file → open it), the SFTP transfer walk is guarded against symlink cycles, and symlinks render with a distinct marker instead of being drawn bold like executables.
- **Held-key auto-repeat on Kitty-protocol terminals.** termide enables the Kitty keyboard protocol's `REPORT_EVENT_TYPES`, so a held key streams `Repeat` events; these were discarded, so held keys did nothing. `Repeat` is now treated like `Press`, restoring auto-repeat. (Thanks @olegpro171, #26.)
