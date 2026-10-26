---
title: "Termide 0.20.0: New settings, rename with F4"
description: "What termide 0.20.0 brings: 9 additions, 8 changes, 10 fixes and 1 removal."
date: 2026-04-19
kind: release
version: 0.20.0
cover: ./cover.jpg
coverAlt: "Termide 0.20.0 release poster"
---

## Added
- **LSP**: Rename symbol (default `F4`) — full WorkspaceEdit flow with prompt modal, guards for unsaved/no-identifier cases, i18n feedback on applied edits across 15 locales
- **Settings**: Redesigned settings modal with sidebar layout, functional groupings with separators, expandable Keybindings group, checkbox `[✓]/[✗]` style, native language names, Tab/Shift+Tab zone cycling
- **InfoModal**: Scrollable content for long script reports — scrollbar on right border, Up/Down/PageUp/PageDown/Home/End + mouse wheel
- **Panels**: `Ctrl+C` copy support across all panels; VTE terminal keyboard handling fix
- **Git**: Stash dropdown menu from git status button (replaces separate stash panel)
- **Git**: `F2` rename stash message in dropdown menu
- **Git**: Stage all / Unstage all / Revert all / Log buttons in git status panel
- **Help**: Help generator reads configurable keybindings instead of hardcoded values
- **i18n**: Translated 46 missing settings/permission keys, added English runtime fallback, `lsp_rename_*` keys across 15 locales

## Changed
- **Architecture**: Decomposed `modal_handler.rs` (1694 → 659 LOC, -61%) into 6 focused submodules (git/bookmark/search/path/progress/script)
- **Architecture**: Decomposed `mouse_handler.rs` (1531 → 530 LOC, -65%) into 3 submodules (indicators/submenu/layout)
- **Architecture**: Added `AppState` facade getters (`is_menu_open`, `is_resource_modal_open`, `has_pending_action`, `active_modal`) and migrated 13 call sites
- **Architecture**: Consolidated 5 scattered batch-operation fields into `BatchOperationState`; activated `app-core` traits (`StateManager`, `ModalManager`, `PanelProvider`, `LayoutController`)
- **Architecture**: Save-and-close flow deduplicated via `queue_remote_editor_upload()` / `force_save_active_editor()` helpers
- **Config**: Migrated all panel hotkeys from hardcoded matchers to config-driven `HotkeyTable`
- **Hotkeys**: `rename_symbol` default set to `F4` to avoid conflict with `save = [F2, Ctrl+S]`
- **Cleanup**: Removed empty `app-event` crate; replaced `eprintln!` with `log` macros; dropped debug logging remnants

## Fixed
- **Security**: Updated `rand` 0.9.2 → 0.9.4 (advisory RUSTSEC)
- **App**: Closed 3 async-upload TODOs — remote editor saves now reliably queue uploads
- **Settings**: UTF-8-safe string truncation in labels (no more panics on multibyte characters)
- **Scripts**: `direnv` JSON integration, `setsid` for process groups, journal prepare_render fix
- **Git**: Directory color uses majority status instead of worst-wins
- **Git**: Stash drop message, `Delete` key handling, and button click offset
- **Git**: Stash dropdown polish and cleanup
- **UI**: Toggle behavior for disk indicator, stash dropdown, terminal submenu, bookmark/script groups
- **UI**: Centred `rwx` headers over permission checkboxes in file properties modal
- **Image**: Prevent double `Escape` firing when closing image viewer

## Removed
- **Crates**: Empty `app-event` crate
