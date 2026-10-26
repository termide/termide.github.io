---
title: "Termide 0.23.4: Command-based quick-fixes now apply"
description: "What termide 0.23.4 brings: 2 fixes."
date: 2026-06-02
kind: release
version: 0.23.4
cover: ./cover.jpg
coverAlt: "Termide 0.23.4 release poster"
---

## Fixed
- **Command-based quick-fixes now apply.** Actions a language server performs through a command rather than an inline edit — such as phpactor's "Import class" — showed up in the `Alt+Enter` popup but did nothing when chosen. They now run via `workspace/executeCommand`, and the edit the server pushes back is applied (adding the `use` statement and reloading any affected editors). This completes the code-action support started in 0.23.2–0.23.3.
- The code-action shortcut (`Alt+Enter`) is now listed in the help panel alongside the other LSP shortcuts, and the documented manual-completion shortcut was corrected to `Ctrl+J` / `Ctrl+Space`.
