---
title: "Termide 0.32.0: macOS keys that get through"
description: "What termide 0.32.0 brings: 2 additions, 2 changes, 7 fixes and 1 security fix."
date: 2026-09-06
kind: release
version: 0.32.0
cover: ./cover.jpg
coverAlt: "Termide 0.32.0 release poster"
---

## Added
- Startup diagnostics for keybindings the terminal cannot deliver. On macOS, termide reports how many `Alt+<key>` bindings are lost to Option composing text, and lists the actions bound to a function key and nothing else, each with the setting that fixes it for the terminal at hand.
- `general.report_all_keys` (macOS only, on by default) — asks the terminal to report every key as an escape code, which is what makes `Alt+<letter>` hotkeys reachable there. Turn it off if you need dead-key or IME composition inside termide.

## Changed
- macOS: `Alt+<letter>` hotkeys work out of the box on terminals with the Kitty keyboard protocol (Ghostty, kitty, WezTerm, iTerm2 3.5+). Previously all ~25 of them were swallowed by Option's text composition.
- Continuous integration runs the full format / lint / test gate on macOS as well as Linux. macOS used to be built only at release time, so platform regressions could not be caught before a tag.

## Fixed
- **Save as, Reload, Redo, Search in files and Replace in files** (`Ctrl+Shift+S`, `Ctrl+Shift+R`, `Ctrl+Shift+Z`, `Ctrl+Shift+F`, `Ctrl+Shift+H`) never worked on any terminal implementing the Kitty keyboard protocol, on every platform.
- **Find references** could not be triggered by its `F24` fallback on xterm-style terminals: function keys above F12 were rejected when the binding was read.
- macOS: the file watcher ran out of file descriptors on any real project and crashed its thread, and panels re-ran git status in a loop — visible as a spinner appearing in panel titles roughly once a second.
- macOS: the terminal panel showed the directory it was opened in instead of the shell's current one, left the running command missing from its title, and never noticed a running process — so closing a busy panel asked no confirmation, and "open here", the directory switcher and the git panels' repository search all worked from the wrong directory.
- macOS: the resource monitor listed no disks at all.
- macOS: opening a bookmark that points at a file or a URL did nothing.
- Rebinding a key through Settings could store a chord that no keypress would ever match, most visibly for `Alt+<letter>` on macOS.

## Security
- Remote connection diagnostics no longer write the account's user name to the log. Two `VfsManager` error messages printed the raw provider lookup key, which embeds the user name; they now use the same redacted form (`sftp://***@host:port`) as the rest of the codebase. No password was ever logged.
