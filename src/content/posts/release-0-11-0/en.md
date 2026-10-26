---
title: "Termide 0.11.0: Remote files over SFTP"
description: "What termide 0.11.0 brings: 13 additions, 9 changes and 12 fixes."
date: 2026-02-01
kind: release
version: 0.11.0
cover: ./cover.jpg
coverAlt: "Termide 0.11.0 release poster"
---

## Added
- **VFS with SFTP Support**: Remote file operations via sftp:// protocol — browse, open, edit, upload, download remote files
- **Unified File Operations System**: OperationManager with pause/cancel support for copy, move, delete, upload, download
- **Operations Panel**: Dedicated panel showing active file operations with progress cards and speed tracking
- **Conflict Resolution**: End-to-end conflict handling — overwrite, skip, rename, overwrite-all, skip-all
- **Byte Progress Bar**: Single-file upload/download progress with byte-level granularity
- **Background Operations Indicator**: Status bar indicator for running file operations
- **Ctrl+C Copy in Terminal**: Copy selected text with Ctrl+C when selection is active
- **Auto-scroll During Selection**: Continuous auto-scroll when dragging mouse beyond editor/terminal viewport
- **Word Wrap Caching**: Cached word wrap functions for faster cursor movement in large files
- **Text Selection in Modals**: Full text selection support in all input fields
- **Word Wrap in Journal**: JournalPanel now supports word-wrapped log entries
- **Version Header in Help**: Help panel displays current version
- **Mouse Scroll Coalescing**: Batched scroll events reduce render cycles during fast scrolling

## Changed
- **i18n Cleanup**: Removed 98 dead translation keys, wired 30 new keys for previously hardcoded UI strings
- **OperationManager Migration**: Migrated local copy, delete, batch upload/download, and directory copy to unified system
- **Logging Migration**: Switched to standard `log` crate macros throughout the codebase
- **Module Decomposition**: Split monolithic `app/mod.rs` into focused submodules (watcher, session, background_ops, etc.)
- **SuggestionInput Component**: Extracted reusable dropdown input widget from bookmark modal
- **Zero-alloc Rendering**: Reduced allocations in rendering hot paths with static buffers
- **Adaptive Tick Rate**: Event loop slows from 24 FPS to 5 FPS after 500ms idle, reducing CPU to near-zero
- **Conditional System Monitor Redraw**: Only redraws status bar when CPU% or memory MB actually changes
- **Watcher Registration**: Split from per-tick polling; registration runs only on panel add/navigate

## Fixed
- **Operations Panel Tracking**: Fixed batch and remote operation tracking in operations panel
- **Conflict Reuse**: Fixed conflict resolution reuse and batch progress tracking
- **Duplicate Downloads**: Prevented duplicate downloads when copying from remote
- **Editor Upload Flow**: Fixed close-after-save and file manager refresh for remote saves
- **Session Panel Widths**: Adapt panel widths to current terminal size on session restore
- **Terminal Duplicate Prompts**: Prevented duplicate prompts during sync_output transitions
- **Editable Select Padding**: Fixed extra empty lines and padding in dropdown
- **VFS Path Sync**: Fixed local directory navigation path synchronization
- **Git Session Restore**: Preserved repository list when restoring session with submodule
- **Unicode Search Highlighting**: Corrected Unicode handling in editor search
- **Spinner CPU Usage**: Throttled spinner redraws to reduce idle CPU
- **Bookmark Navigation**: Fixed dropdown keyboard navigation and mouse click handling
