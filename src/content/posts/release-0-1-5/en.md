---
title: "Termide 0.1.5: Linux packages build cleanly again"
description: "What termide 0.1.5 brings: 1 fix and 1 addition."
date: 2025-12-02
kind: release
version: 0.1.5
cover: ./cover.jpg
coverAlt: "Termide 0.1.5 release poster"
---

## Fixed
- Package build issues for .deb and .rpm on ARM64 architecture
  - Removed aarch64 from package build matrices to avoid cross-compilation issues
  - Binary tarballs still support all platforms including ARM64

## Added
- Local package build testing script (`scripts/test-packages.sh`)
