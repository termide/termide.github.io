---
title: "Termide 0.1.2: Duplicate lines, configurable tab size"
description: "What termide 0.1.2 brings: 5 additions, 4 changes and 2 fixes."
date: 2025-11-28
kind: release
version: 0.1.2
cover: ./cover.jpg
coverAlt: "Termide 0.1.2 release poster"
---

## Added
- Duplicate line/selection feature (`Ctrl+D`)
- Replace operation feedback ("Replaced N occurrence(s)" message)
- File size validation before opening in editor (100 MB limit)
- Configurable tab size support (reads from `config.toml`)
- Crates.io publishing in release workflow

## Changed
- Migrate to semantic versioning tags without 'v' prefix (e.g., `0.1.2` instead of `v0.1.2`)
- Update license in Cargo.toml from dual (MIT OR Apache-2.0) to MIT only
- Improve error handling across the application
  - Replace panic with graceful error handling in theme parsing
  - Falls back to hardcoded default theme on parse errors
  - Better mutex error handling in terminal (22 `.lock().unwrap()` replaced with `.expect()`)
- Add clear error messages for oversized files

## Fixed
- Application crashes from invalid theme files
- Editor tab size now respects user configuration
