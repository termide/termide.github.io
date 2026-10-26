---
title: "Termide 0.22.0: Accordion and split in one layout"
description: "What termide 0.22.0 brings: 2 additions, 5 changes and 7 fixes."
date: 2026-04-30
kind: release
version: 0.22.0
cover: ./cover.jpg
coverAlt: "Termide 0.22.0 release poster"
---

## Added
- **Layout**: Unified accordion + split layout model with three-mode header drag and live vertical-divider resize (#18)
- **Layout**: Split-mode borders and `Alt+Shift+=` / `Alt+Shift+-` step resize for the focused panel

## Changed
- **Hotkeys**: Single end-to-end canonicalization at the matcher boundary — Cyrillic→Latin, shifted-glyph undo, Caps-Lock strip on letters, and VTE-only legacy quirks (`Ctrl+7→Ctrl+/`, `Ctrl+4→Ctrl+\`); inline conflict warnings in the keybinding picker; startup warnings for chords that require Kitty proto
- **Hotkeys defaults**: Tighter punctuation defaults — `panel_grow_vertical`/`panel_shrink_vertical` → `Alt+Shift+=`/`Alt+Shift+-`; `open_sessions` → `Alt+\`; `*.switch_directory` → `Ctrl+\`; `editor.toggle_comment` → `["Ctrl+/", "Ctrl+."]`; `editor.replace_all` → `["Ctrl+Alt+R", "Alt+R"]`; `editor.trigger_completion` → `["Ctrl+J", "Ctrl+Space"]`
- **Layout**: Accordion and split modes share one layout model; resize, drag, and keyboard-resize behaviour now identical in both
- **VFS**: `VfsManager` provider dispatch deduplicated via a closure-based `dispatch_remote` helper; semantics preserved (read-guard scope, cache invalidation)
- **Cleanup**: Dead helpers pruned across `i18n`/`highlight`/`panel-git-status`; two `clippy --all-targets` lints (test-only) silenced; visibility tightened on tree helpers in `panel-git-status`

## Fixed
- **Commands**: Editing a command via the modal now invalidates the cached hotkey table, so the rebind takes effect immediately and survives a restart
- **Commands**: Project-local `commands.toml` is honoured after a session switch — `commands_registry` and `hotkey_table` are reset on `project_root` change in `switch_to_session` / `create_new_session` / `move_session_to`
- **Commands**: Refined command-config editing flow and local-definition handling
- **Mouse**: Wheel events route to the panel under the cursor instead of the active panel
- **Operations panel**: Status icons normalised to match the rest of the UI
- **File ops**: Symlink destination handling unified across copy paths
- **Panel terminal**: Input passthrough compatibility with more shells / TUIs

## Documentation
- Hotkeys reference (`doc/{en,ru,zh}/keybindings.md`) refreshed; new panel-resize step documented; drag-overlay copy updated
- Shared project skills generalised so non-Anthropic agents can run them
