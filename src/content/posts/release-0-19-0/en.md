---
title: "Termide 0.19.0: Scripts from a form, hotkeys in config"
description: "What termide 0.19.0 brings: 11 additions, 8 changes and 10 fixes."
date: 2026-04-13
kind: release
version: 0.19.0
cover: ./cover.jpg
coverAlt: "Termide 0.19.0 release poster"
---

## Added
- **Scripts**: Form-based script creation (ScriptCreateModal) with name, group, type (Terminal/Background/Report), and project scope
- **Scripts**: F2 rename and Delete with confirmation for scripts and bookmarks in menu
- **Scripts**: Type icons in menu and operation cards (terminal, background, report)
- **Hotkeys**: Config-based `HotkeyTable` system replacing hardcoded key matching — all hotkeys now configurable via TOML
- **Hotkeys**: Cyrillic keyboard normalization for all keys (ЙЦУКЕН → QWERTY mapping including punctuation)
- **Panels**: Escape requests panel close with confirmation dialog
- **Errors**: All errors now shown as InfoModal dialogs instead of transient status bar messages
- **File Manager**: Interactive permissions editor in file info modal
- **Menu**: Disk usage indicator, calendar grid in menu navigation
- **Menu**: Project-local `.termide/` support for bookmarks and scripts
- **Sessions**: Delete session via Delete key in sessions modal

## Changed
- **Hotkeys**: `open_external` unified across FM and Git Log panels — default changed to `O / Alt+Enter` for VTE terminal compatibility
- **Hotkeys**: Removed dead "Universal" hotkeys section from help panel and config (-435 LOC)
- **Operations**: Redesigned operation cards with border titles, icons, and elapsed timer
- **Operations**: Script name shown in card border title instead of generic "Script"
- **Layout**: Width distribution uses largest-remainder algorithm (fixes rounding errors)
- **Refactor**: Removed legacy HotkeyKind/Hotkey/HotkeyProcessor semantic layer
- **Refactor**: Editor blame converted from hotkey toggle to config setting
- **Logging**: Silent `let _ = fs::*` operations replaced with proper error logging

## Fixed
- **SSH**: Prevent blank screen on SSH — skip `supports_keyboard_enhancement()` detection, add panic handler for terminal state recovery, guard against 0×0 terminal size
- **SSH/Terminal**: Add bounds checks to prevent buffer index panics during terminal resize
- **SFTP**: Fix overwrite conflict for local-to-remote copy — use upload request instead of remote-to-remote, resolve destination as file or directory via VFS stat
- **Scripts**: Sanitize filenames in script create/rename (replace invalid chars with `-`)
- **Scripts**: Fix submenu executing wrong script with mixed project/global sources
- **Scripts**: Properly kill scripts on cancel, support parallel report scripts
- **Keyboard**: Restore lost keys from 0.18.2 (PageUp/PageDown/Enter in Outline, Diagnostics, Git panels)
- **Keyboard**: Fix editor F2/F4 binding conflicts with global hotkeys
- **File Operations**: Preserve permissions on copy, use `fs::rename` for same-filesystem move
- **i18n**: Remove duplicate keys, fix unlocalized help panel strings
