---
title: "Termide 0.26.0: A real commit graph, reconnect on failure"
description: "What termide 0.26.0 brings: 6 additions and 3 fixes."
date: 2026-06-22
kind: release
version: 0.26.0
cover: ./cover.jpg
coverAlt: "Termide 0.26.0 release poster"
---

<img width="1905" height="947" alt="Screenshot From 2026-06-22 19-39-20" src="https://github.com/user-attachments/assets/fbb337df-0676-4d39-8844-ca6c4eb9d3ff" />

## Added
- **Box-drawing commit graph in the Git Log panel.** Commit history is now drawn with proper pseudographics (`● │ ├ ╮ ╯`) laid out from each commit's parents, with every lane coloured so a branch can be followed by colour. Set `[git_log] unicode_graph = false` to fall back to git's native ASCII graph.
- **Database connection recovery dialog.** When a database connection or query fails fatally, the viewer now offers **Reconnect** or **Close** instead of leaving only a status-bar error; `Esc` dismisses it and keeps the last results visible.
- **Remote session recovery dialog.** When an SFTP/FTP/SMB operation fails because the session dropped (idle timeout, network loss), the file manager offers **Reconnect**, **Open home (local)**, or **Close** instead of a dead-end error.
- **Custom-language keyword highlighting from config.** Define a lightweight per-line highlighter for file types without a tree-sitter grammar directly in `config.toml` (`[[highlight.custom_languages]]`) — keywords, types, and line comments, with no rebuild required.
- **`Ctrl+R` re-runs the search in the inline find bar**, re-matching the current query against the latest content (file-manager directory, terminal scrollback, or editor buffer) without retyping it.
- **Find bar seeds from the selection.** Opening the editor find/replace bar with a single-line selection pre-fills the search field with the selected text.

## Fixed
- A dropped SFTP session no longer triggers an endless stream of "connection error" pop-ups; the file manager stops retrying a dead session.
- Switching the interface language now updates the top-level menu bar too, which previously stayed in the original language until restart.
- `Ctrl+C` now copies the buffer selection while the find bar is open — clicking or dragging in the buffer moves focus there first.
