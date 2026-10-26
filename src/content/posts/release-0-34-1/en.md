---
title: "Termide 0.34.1: Copy the hover popup"
description: "What termide 0.34.1 brings: 1 addition."
date: 2026-09-11
kind: release
version: 0.34.1
cover: ./cover.jpg
coverAlt: "Termide 0.34.1 release poster"
---

## Added
- **The hover popup's text can be copied.** `Ctrl+C` while the popup is open puts the symbol's type, signature or documentation on the clipboard instead of the editor selection — what a reader usually wants it for is pasting an unfamiliar signature or error into a search engine, and until now it could only be read and retyped. The copy carries the text as the language server sent it, not as the popup wrapped it.
