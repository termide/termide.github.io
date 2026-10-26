---
title: "Termide 0.9.0: Language servers come to the editor"
description: "What termide 0.9.0 brings: 10 additions, 5 changes and 3 fixes."
date: 2026-01-19
kind: release
version: 0.9.0
cover: ./cover.jpg
coverAlt: "Termide 0.9.0 release poster"
---

## Added
- **LSP Integration**: Full Language Server Protocol support with completion, diagnostics, hover, and go-to-definition
- **Git Diff Panel**: GitHub-style diff viewer with commit diff viewing from Git Log panel
- **Save As Modal**: New dialog with executable checkbox for setting file permissions (Ctrl+Shift+S)
- **Report Scripts**: Scripts with `.report.` suffix run in background and show output in modal dialog
- **Runtime Language Switching**: Change UI language on the fly with 15 language support
- **Dynamic Help Panel**: Replaced static WelcomePanel with context-aware help
- **Git Status Enhancements**: Init button when no repository, left-ellipsis path truncation, enhanced file properties
- **Terminal Features**: File path detection, multi-line link highlighting, bracketed paste support
- **Editor Features**: Disk space info in status bar, improved PageUp/PageDown behavior
- **UI Improvements**: Smart title truncation with Unicode ellipsis, unified animated spinners

## Changed
- **Menu Renamed**: "Tools" → "Windows", "Actions" → "Scripts" for better UX
- **Keybindings**: Ctrl+Shift+S now opens Save As (was Force Save)
- **Submenu Renamed**: "Manage actions" → "Manage scripts"
- **Git Diff Style**: Unified file headers with termide design system
- **Refactoring**: Extensive code cleanup with Command Pattern, state extraction, and helper consolidation

## Fixed
- **i18n**: Format keys moved to correct section, warnings redirected to journal
- **Git**: Submodule detection by parsing .gitmodules
- **Copy/Move Modals**: Removed duplicate text

## Documentation
- **LSP Docs**: Added comprehensive LSP documentation with configuration examples
- **Scripts Docs**: Updated for new menu names and .report. suffix feature
- **Editor Docs**: Added Ctrl+Shift+S Save As keybinding
