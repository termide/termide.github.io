---
title: "Termide 0.23.6: Quick-fixes keep your unsaved edits"
description: "What termide 0.23.6 brings: 1 fix."
date: 2026-06-02
kind: release
version: 0.23.6
cover: ./cover.jpg
coverAlt: "Termide 0.23.6 release poster"
---

## Fixed
- **"Import class" no longer deletes code or loses unsaved edits.** A command-based quick-fix's edit is computed by the language server against the document it tracks — the editor buffer — but it was being applied to the file on disk and the editor reloaded from there. With unsaved changes in the buffer (e.g. a just-typed `Order::where()`), disk and buffer diverged: the reload discarded the unsaved text and the edit landed on the wrong lines. Server-driven edits to an open file now go through its buffer, preserving unsaved work and landing where the server intended; the server is also synced before and after so repeated runs don't duplicate the import.
