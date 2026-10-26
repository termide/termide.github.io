---
title: "Termide 0.23.5: Import class without garbled text"
description: "What termide 0.23.5 brings: 1 fix."
date: 2026-06-02
kind: release
version: 0.23.5
cover: ./cover.jpg
coverAlt: "Termide 0.23.5 release poster"
---

## Fixed
- **"Import class" no longer mangles the file or duplicates the import.** The command-based quick-fix added in 0.23.4 could garble text around the insertion point — servers such as phpactor send the import as two edits at the same position, which the edit-application code mis-ordered — and running it a second time added a duplicate `use` line because the server was never told the file had changed. Edits are now applied by absolute document offset (every other line is preserved verbatim), and the language server is resynced after each applied edit.
