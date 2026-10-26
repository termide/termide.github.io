---
title: "Termide 0.23.3: More quick-fixes show up on Alt+Enter"
description: "What termide 0.23.3 brings: 1 fix."
date: 2026-06-01
kind: release
version: 0.23.3
cover: ./cover.jpg
coverAlt: "Termide 0.23.3 release poster"
---

## Fixed
- **Code actions from servers that fill in the edit lazily now work.** Quick-fixes that a language server returns without an inline edit (resolving it only when chosen) previously never appeared in the `Alt+Enter` popup; they are now listed and resolved on accept, so more servers' actions (e.g. phpactor "Import class") apply.
