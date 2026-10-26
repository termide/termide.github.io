---
title: "Termide 0.23.0: SFTP and FTP in the file manager"
description: "What termide 0.23.0 brings: 10 additions, 9 changes, 7 fixes and 1 removal."
date: 2026-05-23
kind: release
version: 0.23.0
cover: ./cover.jpg
coverAlt: "Termide 0.23.0 release poster"
---

## Added
- **Remote filesystems** — pure-Rust SFTP / FTP / FTPS via russh + russh-sftp + rustls. Browse, open, copy, rename and move remote files in the same FileManager as local paths. Bookmarks accept `sftp://user@host:port/path`, `ftp://`, `ftps://` URLs; `Auto` auth chains SSH agent → `~/.ssh/config` (`IdentityFile`, `User`, `Port`, `Hostname` aliases) → default keys → password. Non-ASCII paths round-trip through URL encoding intact. See [`doc/en/vfs.md`](https://github.com/termide/termide/blob/main/doc/en/vfs.md).
- **Static musl Linux binary** — `termide-0.23.0-x86_64-unknown-linux-musl.tar.gz` published with every release. Runs on Alpine, distroless containers and any glibc-free Linux. The Nix flake also exposes the same recipe as `#termide-static`.
- **Operations panel** —
  - Per-card popup menu (Pause / Resume / Cancel) on the bracketed type icon `[↑]`/`[↓]`/`[⧉]` (mouse) plus `Space` / `Esc` / `Delete` keyboard equivalents.
  - Cancel-cleanup modal for interrupted remote uploads — "Delete partial upload 'filename'?" defaults to delete and is batch-safe (only the in-flight file).
  - `⏸` indicator next to the icon while an operation is paused.
  - Help panel now lists Esc alongside Delete/Backspace.
  - See [`doc/en/operations.md`](https://github.com/termide/termide/blob/main/doc/en/operations.md).
- **`--diagnostics` CLI** — pre-flight check (config parse, XDG dirs, git availability) that runs before terminal init and exits 0/1 for scripts.
- **Journal panel: level pills** — clickable `[TRACE] [DEBUG] [INFO] [WARN] [ERROR]` in the header row, also togglable via `Alt+1..5`.
- **Unsaved buffer recovery** — orphaned buffers from a crashed session were already restored as editor panels; now each one is announced in the Journal so users see why the extra tabs appeared.
- **FileManager — cursor-level actions** — `Ctrl+N`, `D`/`F7` and `Ctrl+V` now land at the cursor's tree level (the same subdir the cursor is inside), not always at the panel root. Documented in `doc/{en,ru,zh}/file-manager.md`.
- **Editor** — `F8` deletes the current line (or every line touched by the active selection) outside vim mode; read-only buffers ignore it.
- **Config** — layered global + per-project override loading; `<project>/.termide/config.toml` overlays `~/.config/termide/config.toml`. Both files save only diffs against their baseline.
- **Architecture docs** — `doc/en/architecture.md` gained an "Async Pipelines" table and a dedicated VFS section.

## Changed
- **Massive startup / interaction perf work.** Opening a session whose FileManagers root at a tracked home directory used to freeze the UI for seconds. Each of the following moved off the main thread, all polling through the existing `tick()` pattern:
  - Initial directory read.
  - Subtree expand (local: spawn worker, placeholder `…` row; matches the existing remote pattern).
  - Git status / git log panel refresh (5–6 `git` calls per refresh).
  - Git submodule discovery (`RepoManager` — only the top-level repo is found sync; submodules fold in via `poll`).
  - File-search git status walk.
  - Session restore — every panel in a group is built on its own worker thread, then joined in saved order.
  - Watcher repository registration — `WalkBuilder` traversal moved to a worker; `inotify_add_watch` calls are chunked across ticks (`INSTALL_CHUNK = 256`) so a 5000-directory repo doesn't spike a single tick.
- **SFTP transfers are pause-correct.** The actor now serves only atomic open / read-chunk / write-chunk / close commands; the chunk loop lives on a sync worker and polls pause/cancel between dispatches. A paused upload actually stops the byte stream, and other panels' `list_dir` requests still go through unblocked.
- **Same-host SFTP / FTP renames stay on the server** — `mv` within one connection no longer downloads and re-uploads.
- **Wide-view directory size** — default per-walk budget lowered from 1000 ms → 100 ms; `Space` on a directory also publishes its exact size into the shared cache so the column picks it up on the next redraw.
- **Config / session load failures route to the Journal** instead of stderr-before-raw-mode where the message scrolled away.
- **Editor** — cursor and current-line highlight hidden when the panel is unfocused; the visual state now matches the FileManager.
- **Modal block** — an empty title no longer punches a 1-cell gap through the top border.
- **Async tree-expand for remote FileManager panels** with `…` placeholder rows; duplicate-on-repeat-expand fixed in the same pass.
- **Inline blame annotation** in wrapped editor lines anchors to the last wrap-row instead of the cursor's row.

## Fixed
- Several SFTP cancel-edge cases: hanging actor on cancel, file handles left open, stale receivers wedging the russh-sftp request-id space — pause / cancel / reconnect are clean now (the cached `ConnectOptions` enables seamless auto-reconnect after a cancelled transfer).
- Remote panel rename routed through local `fs::*` (created a local dir + leftover file); now goes through the VFS path.
- Newly-created file/dir cursor placement: matches by full path, so an entry nested inside an expanded subdir is found correctly.
- Repeated expand on a remote directory used to duplicate children.
- Paste from clipboard always landed at the panel root regardless of cursor position.
- Editor → Commands: editing a project command's hotkey now invalidates the in-memory hotkey table so the rebind takes effect immediately.
- Panel terminal: live output no longer drags the user's scrollback position toward the tail.

## Removed
- **`--features vendored-openssl` build flag** — the workspace is pure-Rust (rustls + russh + russh-sftp), no OpenSSL footprint. The flag was a no-op already; removed from `release.yml`.

## CI / DX
- New `.github/workflows/ci.yml` runs fmt / check / clippy / test on every PR and push to main (release.yml stays release-only).
- `deny.toml` + `cargo-deny check` step covers advisories, licenses, bans and sources.
- Pre-commit hook documented in `CONTRIBUTING.md`.
