---
title: "Termide 0.29.7: One bad setting no longer resets the config"
description: "What termide 0.29.7 brings: 1 security fix, 3 fixes and 2 changes."
date: 2026-08-05
kind: release
version: 0.29.7
cover: ./cover.jpg
coverAlt: "Termide 0.29.7 release poster"
---

## Security
- Updated the `russh` SSH library to 0.62.5, clearing advisory GHSA-m65r-rprj-r5rg (a server-side channel-lifecycle flaw). TermIDE only uses russh as an SFTP client, so the vulnerable server path isn't exercised, but the dependency is bumped to the patched release.

## Fixed
- A single invalid field in the config (most easily an `[lsp.servers.*]` entry with no `command`) no longer discards every other setting — configuration now degrades to the largest valid subset instead of silently falling back to defaults.
- Terminal panel: a leftover text selection is now cleared when the mouse wheel scrolls a mouse-tracking application (e.g. an agent or editor) inside the terminal, instead of the highlight staying stuck on screen and bleeding over the freshly scrolled content.
- The editor's "file changed on disk" message no longer points at a non-existent force-save shortcut; it now names the actions that actually exist (reload with `Ctrl+Shift+R`, or Save As).

## Changed
- Completed localization for the remaining 12 languages (de/es/fr/pt/ko/hi/ja/th/tr/vi/id/bn): the database viewer, in-files find/replace, and the remote-connection dialog strings are now translated instead of falling back to English; all bundled locales are now at full key parity.
- Corrected documented keybindings across the English/Russian/Chinese docs: the directory switcher is `Ctrl+\` (not `Ctrl+/`), "Add bookmark" is `Alt+B` (not `Alt+K`), and `Alt+P` opens the Settings modal.
