---
title: "Termide 0.23.11: Several Git Status panels side by side"
description: "What termide 0.23.11 brings: 1 addition and 1 security fix."
date: 2026-06-05
kind: release
version: 0.23.11
cover: ./cover.jpg
coverAlt: "Termide 0.23.11 release poster"
---

## Added
- **Multiple Git Status panels.** Opening Git Status (`Alt+G` / Tools menu) now always creates a new panel instead of focusing the existing one, so several repositories can be watched side by side — each panel tracks its own repo via the dropdown.

## Security
- The SSH askpass helper now hands the passphrase to ssh via a raw stdout write rather than a `print!` macro. Behaviour is unchanged (ssh reads it over a pipe it owns — never a terminal or log); this just keeps static analysis from mistaking the askpass contract for cleartext logging.
