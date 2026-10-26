---
title: "Termide 0.31.0: Alatyr in the Structure panel"
description: "What termide 0.31.0 brings: 1 addition, 1 fix and 1 security fix."
date: 2026-09-01
kind: release
version: 0.31.0
cover: ./cover.jpg
coverAlt: "Termide 0.31.0 release poster"
---

## Added
- The Structure panel now recognizes Alatyr `.al` files. Alatyr has no declaration keywords — a declaration binds a name to a value (`name := value`) — so the outline lists bindings and classifies the right-hand-side introducer: `fn`, `struct`, `enum`, `union`, `mod` and `brand`, including declarations inside inline `mod { ... }` values. Locals inside a function body are skipped, and `:=` inside strings or comments is not mistaken for a declaration. Works whether or not you have set up `[[highlight.custom_languages]]` for the extension.

## Fixed
- The editor's line-number column now grows for large files. It was fixed at four digits, so from line 10 000 on the number overran the diagnostic marker and the separator space next to the code; the width is now derived from the file's line count, keeping the four-digit minimum so ordinary files look exactly as before.

## Security
- Updated the `suppaftp` FTP client to 10.0.2, clearing RUSTSEC-2026-0271 (FTP command injection via CRLF in control-channel arguments). Command arguments — user name, password and remote paths — are now validated before they go on the wire, so a path containing `\r` or `\n` fails with an error instead of smuggling a second FTP command into the session.
