---
title: "Termide 0.5.0: Notices when files change under you"
description: "What termide 0.5.0 brings: 5 additions, 6 changes and 6 fixes."
date: 2025-12-13
kind: release
version: 0.5.0
cover: ./cover.jpg
coverAlt: "Termide 0.5.0 release poster"
---

## Added
- Editor Tab key insertion and block indent/unindent (Tab/Shift+Tab)
- External file change detection with reload/close dialog
- Log viewer panel with Editor-based rendering (cursor, selection support)
- Mouse scroll based on cursor position, not panel focus
- Recursive file watching for git repositories

## Changed
- **Major architecture refactoring**: extracted 31 workspace crates from monolithic src/
  - Modular crate structure: app, app-core, app-event, app-modal, app-panel, etc.
  - Improved build times with incremental compilation
  - Better code organization and separation of concerns
- Type-safe panel communication architecture
  - `PanelCommand` enum replacing unsafe `dyn Any` downcasting
  - `CommandResult` enum for type-safe command responses
  - `handle_command()` method on Panel trait
- Modal dialog code consolidation
  - Shared frame rendering with [X] close button
  - Shared input field rendering with cursor
  - Reduced code duplication in search/replace modals
- Config restructured to nested TOML sections
- Async git diff computation to prevent UI freeze
- Gitignore-aware filesystem updates

## Fixed
- File manager cursor position preserved after file deletion
- Copy/paste operations no longer cause unwanted scroll
- Local timezone display for file modification times
- File sizes rounded to whole units and right-aligned
- Git diff deduplication to prevent UI freeze
- FS watcher feedback loops and deleted files display

## Performance
- Async git diff and gitignore-aware FS updates
- Cache `find_repo_root()` and throttle spinner
- Conditional redraw to reduce idle CPU usage
- Memory optimization: removed redundant clones

## Tests
- PanelCommand and CommandResult unit tests (7 tests in core)
- Editor handle_command integration tests (9 tests)
- FileManager handle_command integration tests (8 tests)
- Modal base module tests (4 tests)
- Large file handling tests (7 tests)
  - 10K+ line file loading and navigation
  - Scroll performance benchmark (50K lines in <100ms)

## Code Quality
- Zero TODO/FIXME comments in production code
- All 5 unsafe blocks documented with SAFETY comments
- Replaced 21+ critical `unwrap()` calls with `expect()` + context messages
- Fixed error swallowing in Editor `handle_key()` - errors now shown to user
- Removed dead code: unused `RequestDirSize` event and `PanelProvider` trait methods
- Optimized `get_selected_text()` - no longer copies entire buffer for large selections
