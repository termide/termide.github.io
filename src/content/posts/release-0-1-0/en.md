---
title: "Termide 0.1.0: A whole IDE in your terminal"
description: "What termide 0.1.0 brings: 17 additions."
date: 2025-11-28
kind: release
version: 0.1.0
cover: ./cover.jpg
coverAlt: "Termide 0.1.0 release poster"
---

## Added
- Initial Termide release with complete feature set
- Terminal-based IDE with syntax highlighting for 15+ programming languages
  - Rust, Python, JavaScript, TypeScript, Go, C/C++, Java, Ruby, PHP
  - Haskell, Nix, HTML, CSS, JSON, TOML, YAML, Bash, Markdown
- Smart file manager with intuitive TUI interface
  - File type icons with attributes column
  - Symlink and executable file detection
  - Advanced keyboard and mouse selection controls
  - Recursive git status for directories
- Integrated virtual terminal with full PTY support
  - Ctrl+Shift+V paste with bracketed paste mode
  - 24 FPS rendering
  - Scrollback buffer and ANSI color support
- Multi-panel layout system
- Git integration
  - Background git status monitoring with file watching
  - Automatic updates on repository changes
  - Color-coded status indicators
  - Dimmed styling for gitignored files
  - Support for repository subdirectories
- 12 built-in themes
  - Dark: Default, Midnight, Dracula, OneDark, Monokai, Nord, Solarized Dark
  - Light: Atom One Light, Ayu Light, GitHub Light, Material Lighter, Solarized Light
  - Custom theme support from config directory
- System resource monitoring
  - Real-time CPU and RAM usage
  - Color-coded alerts
- Multi-language support (English, Russian)
  - Full Cyrillic keyboard layout support
  - Case-preserving hotkey translation
- Mouse support for all panels and UI elements
- Clipboard system for cut/copy/paste operations
- Batch file operations (copy, move, delete)
- Quit confirmation for unsaved changes and running processes
- Robust error handling and file size limits
- Automatic directory refresh on filesystem changes
- Cross-platform support (Linux, macOS, Windows via WSL)
- Multi-architecture builds (x86_64, ARM64)

## Technical
- Built with Rust using ratatui TUI framework
- Crossterm for cross-platform terminal manipulation
- Portable-pty for PTY implementation
- Tree-sitter for syntax highlighting
- Ropey for text buffer management
- Sysinfo for system resource monitoring
- Pre-commit hooks for code quality
- Comprehensive test suite
