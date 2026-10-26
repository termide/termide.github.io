---
title: "Termide 0.11.3: Four new themes, a layout that fits the screen"
description: "What termide 0.11.3 brings: 4 additions, 4 changes and 6 fixes."
date: 2026-02-06
kind: release
version: 0.11.3
cover: ./cover.jpg
coverAlt: "Termide 0.11.3 release poster"
---

## Added
- **4 New Themes**: Matrix (digital rain), Terminator (Skynet HUD), Pip-Boy (Fallout CRT), Manuscript (medieval parchment)
- **Adaptive Default Layout**: Width-dependent session layout — wide terminals (>= 160 cols) get 3-group layout, normal terminals get 2-group layout with sidebar accordion
- **GitStatus in Default Sidebar**: New sessions automatically include GitStatus panel in the sidebar accordion when a git repository is detected
- **Diagnostic Row Caching**: Editor caches diagnostic row counts for faster viewport scrolling with LSP diagnostics

## Changed
- **State Module Split**: Refactored monolithic `crates/state/src/lib.rs` into submodules: `batch`, `layout`, `operations`, `pending_action`, `ui`
- **Dead Code Removal**: Removed unused functions across 7 crates (`clipboard::has_text`, `git::check_git_available`, `logger::get_entries`, `editor::cleanup_temp_file`, `theme::all_themes`, `theme::builtin_theme_names`, `system_monitor::cpu_usage_float`)
- **Removed text-search Crate**: Deleted unused `termide-text-search` crate from workspace
- **Documentation Update**: Updated README, architecture docs, and developer guides (EN+RU) to reflect current workspace structure, 24 themes, 15 languages, all panel types

## Fixed
- **Security**: Updated `time` crate 0.3.45 → 0.3.47 to fix stack exhaustion DoS vulnerability (GHSA)
- **Editor Diagnostics**: Reverted diagnostic row deduplication in viewport scroll methods that caused incorrect cursor positioning
- **Watcher Registration**: Fixed watchers not being registered on session switch; optimized `.git/objects` watch exclusion
- **Terminal Link Highlight**: Fixed Ctrl+click link highlight offset for non-ASCII content in terminal panel
- **File Manager Git Root**: Preserved `git_root` on internal navigation, fixed post-commit refresh losing git context
- **File Manager Redraw**: Fixed missing redraw after async git status update completed
