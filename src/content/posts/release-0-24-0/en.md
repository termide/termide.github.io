---
title: "Termide 0.24.0: Databases in a panel, Termide on Android"
description: "What termide 0.24.0 brings: 2 additions and 1 fix."
date: 2026-06-07
kind: release
version: 0.24.0
cover: ./cover.jpg
coverAlt: "Termide 0.24.0 release poster"
---

## Added
- **Database viewer (read-only).** Browse **SQLite**, **PostgreSQL** and **MySQL/MariaDB** tables from a bookmark whose path is a database URL (`sqlite:///…`, `postgres://…`, `mysql://…`). The panel connects in the background and shows rows in a 2D grid with a cell cursor, sliding-window pagination, single-column server-side sort (ascending → descending → unsorted), type-aware per-column filtering (combined with `AND`), a full-row detail dialog (copy as TSV / JSON / INSERT), and cell/row copy. When the URL omits a database (PostgreSQL/MySQL) a selector lets you pick one (the first is auto-selected); the panel is restored across sessions. Queries run on a background runtime so the UI never blocks; everything is strictly read-only (`SELECT`/catalog queries only). Action keys are configurable under `[database.keybindings]` and shown in Help; the mouse can open the selectors, sort by clicking a column header, and move the cursor by clicking a cell. See [Database Viewer](https://github.com/termide/termide/blob/main/doc/en/database.md).
- **Android / Termux support.** Releases now include a statically-linked `aarch64-unknown-linux-musl` binary that runs in Termux; see the installation docs.

## Fixed
- The Operations panel no longer offers **Pause** for script/command operations (it was never actually implementable); **Cancel** still stops them by killing the process. Pause/Resume remain for file transfers.
