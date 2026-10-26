---
title: "Termide 0.18.0: Blame, stash and a command palette"
description: "What termide 0.18.0 brings: 7 additions, 6 changes and 6 fixes."
date: 2026-03-26
kind: release
version: 0.18.0
cover: ./cover.jpg
coverAlt: "Termide 0.18.0 release poster"
---

<img width="1903" height="941" alt="Screenshot From 2026-03-26 18-21-06" src="https://github.com/user-attachments/assets/6e555bfc-b275-4c3e-a7b6-1002294c12e5" />

## Added
- **Git Stash Panel**: Dedicated panel for stash management (Pop, Apply, Drop, Diff via context menu); accessible from Tools menu and git-status Stash button; session persistence
- **Git Blame**: Inline blame annotation in editor (Alt+B) showing author, age, commit hash, and summary; enabled by default for git repos; async loading
- **Command Palette**: Quick access to all commands via Ctrl+Shift+P
- **LSP Find References**: Open references panel with Shift+F12 showing all symbol usages across project
- **LSP Rename Symbol**: Rename symbol under cursor with F2 via LSP WorkspaceEdit
- **Themes**: 4 new themes — blue-sky (light), pinky-pie (light), green-backs (light), billiard (dark)
- **Git Diff**: Adaptive diff colors and arrow key navigation

## Changed
- **Git Stash**: Extracted from inline ViewMode in GitStatusPanel into standalone `panel-git-stash` crate with SelectModal context menu
- **Panels**: Git Log, Git Stash, and Git Diff panels are now singletons (reuse existing instead of creating duplicates)
- **Editor**: Opening an already-open file focuses existing tab instead of creating duplicate
- **Modal Buttons**: Use high-contrast fg/bg inversion for reliable readability across all themes
- **Terminal**: F-key escape sequences replaced with lookup table
- **SFTP**: Magic number polling intervals replaced with named constant

## Fixed
- **InputModal**: Left/Right arrows now navigate between OK/Cancel buttons (were intercepted by text input handler)
- **Git**: Lines outside git repo no longer incorrectly highlighted
- **Git Blame**: Annotation rendered on correct line (was off by one)
- **Git Blame**: Age formatter shows months range (avoids "0 years ago")
- **Hotkeys**: Resolved terminal/tmux conflicts, added missing bindings
- **Config**: `switch_directory` hotkey now configurable in file_manager.keybindings

## Refactored
- **PanelExt**: Reduced deprecated downcasts and fixed code duplication
- **Documentation**: Updated hotkey references, added Git Blame docs, Find References and Rename Symbol docs in all 3 languages
