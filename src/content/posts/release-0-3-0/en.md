---
title: "Termide 0.3.0: Every panel is first-class"
description: "What termide 0.3.0 brings: 4 additions and 1 change."
date: 2025-12-04
kind: release
version: 0.3.0
cover: ./cover.jpg
coverAlt: "Termide 0.3.0 release poster"
---

## Added
- Release management Claude Code skill for automated release workflow
  - Pre-release quality checks (fmt, clippy, test, build)
  - Multi-source change analysis (uncommitted, commits, file states)
  - Interactive version selection with validation
  - Automated version updates across 12+ files
  - Auto-generated CHANGELOG entries from git history
  - Post-update quality verification
  - Conventional commit generation and git tag creation
- XDG Base Directory Specification support
  - Config: `~/.config/termide/` (or `$XDG_CONFIG_HOME/termide/`)
  - Data: `~/.local/share/termide/` (or `$XDG_DATA_HOME/termide/`)
  - Cache: `~/.cache/termide/` (or `$XDG_CACHE_HOME/termide/`)
  - Proper cross-platform paths (Linux, macOS, Windows)
- Automatic session persistence with configurable retention
  - Sessions save automatically on focus loss (debounced)
  - Auto-cleanup of sessions older than configured retention period (default: 30 days)
  - Per-project session storage
  - Unsaved buffer persistence across sessions
- Comprehensive project documentation
  - CHANGELOG.md with full version history (0.1.0 to 0.2.0)
  - CONTRIBUTING.md with development guidelines
  - Updated issue templates
  - Revised security policy
  - Contributor Covenant Code of Conduct

## Changed
- **BREAKING**: FileManager is now a regular closable panel
  - Removed special fixed left panel handling
  - FileManager can be closed, resized, and moved between groups
  - Default initialization with 2 FileManager panels (50/50 layout)
  - Simplified architecture (-350 lines of code)
  - All panels are now first-class citizens with identical capabilities
  - Existing sessions will load with default layout
