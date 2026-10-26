---
title: "Termide 0.8.7: Install with Nix, a smaller binary"
description: "What termide 0.8.7 brings: 2 additions, 4 fixes and 3 changes."
date: 2026-01-12
kind: release
version: 0.8.7
cover: ./cover.jpg
coverAlt: "Termide 0.8.7 release poster"
---

## Added
- **Install script**: Nix installation method with `nix profile install` for NixOS users
- **Install script**: Nix shown as "(recommended for NixOS)" on NixOS systems

## Fixed
- **Install script**: Works correctly when piped via `curl | sh` (reads from /dev/tty)
- **Install script**: Fixed download URLs (removed incorrect `v` prefix from version)
- **Install script**: Fixed ANSI escape codes appearing literally in success message
- **Install script**: Added `--refresh` flag to ensure latest version is installed via Nix

## Changed
- **Build**: Enabled LTO and strip for release builds (-14% binary size: 29→25 MiB)
- **Packaging**: Removed obsolete help/themes install steps (files are embedded in binary)
- **Nix**: Track Cargo.lock for reproducible flake builds
