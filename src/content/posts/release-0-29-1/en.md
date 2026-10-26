---
title: "Termide 0.29.1: Kotlin support"
description: "What termide 0.29.1 brings: 1 addition and 1 fix."
date: 2026-07-08
kind: release
version: 0.29.1
cover: ./cover.jpg
coverAlt: "Termide 0.29.1 release poster"
---

## Added
- **Kotlin support.** `.kt` / `.kts` files now get syntax highlighting, an outline of their classes, interfaces, objects, enums and functions, and rich class diagrams (`View as diagram`) with properties, function signatures, `val`/`var` constructor properties, superclass/interface relationships, and top-level declarations collected in the file box.

## Fixed
- Project sessions are no longer deleted wholesale during cleanup. A stale parent directory that contains a fresh, in-use nested session now keeps that session — only the parent's own expired files are removed — so active sessions and their settings are no longer silently lost.
