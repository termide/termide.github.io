---
title: "Termide 0.16.0: Native Windows, no WSL"
description: "What termide 0.16.0 brings: 9 additions, 6 fixes and 3 changes."
date: 2026-03-16
kind: release
version: 0.16.0
cover: ./cover.jpg
coverAlt: "Termide 0.16.0 release poster"
---

## Added
- **Windows**: Native Windows 11/10 support via ConPTY (no WSL required)
- **Windows**: Native Win32 APIs for disk space and process detection
- **Windows**: Git Bash as default shell on Windows
- **Windows**: Windows MSVC build target in CI release workflow
- **Theme**: New `terminal` theme — classic black background inheriting terminal colors
- **Network**: Real-time network throughput monitor (download/upload) in header bar
- **Security**: Symlink validation in scripts loader — prevents directory traversal
- **Security**: 30-second timeout for background git operations (push/pull/fetch)
- **i18n**: `git_operation_timed_out` translation in all 15 locales

## Fixed
- **SSH**: Ghost divider line and drag coalescing for smooth SSH resize
- **File Manager**: Open source files in editor even when executable bit is set
- **Docs**: Sync theme count (24→25), language count (15+→21), remove duplicate doc link
- **Docs**: Fix deb package description language count (19→21)
- **Code**: Cleanup formatting and dead code from PRs #9, #10, #11
- **Build**: Gate executable permission variables behind `#[cfg(unix)]`

## Changed
- **Performance**: Replace PowerShell subprocess calls with native Win32 APIs on Windows
- **Docs**: Add native Windows installation section to all 3 language docs
- **Docs**: Update platform list to include native Windows support
