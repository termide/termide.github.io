---
title: "Termide 0.22.1: Per-project config overrides"
description: "What termide 0.22.1 brings: 3 additions, 2 changes, 3 fixes and 1 security fix."
date: 2026-05-10
kind: release
version: 0.22.1
cover: ./cover.jpg
coverAlt: "Termide 0.22.1 release poster"
---

## Added
- **Config**: Layered global + per-project override loading. `<project>/.termide/config.toml` overlays the user's global `~/.config/termide/config.toml`, which in turn overlays built-in defaults. Both files now save **only** fields that differ from their baseline (defaults for global, defaults+global for the project file), so config files stay small and a future release-changed default no longer gets silently masked by the user's saved-as-default value.
- **Settings**: New footer button "Create / Remove project override" — single visual control to start writing a per-project diff or delete it (with confirmation). State derived from the existence of the project file; no separate flag.
- **Editor**: `F8` deletes the current line (or every line touched by the active selection) outside vim mode. Read-only buffers ignore the binding; clipboard is intentionally untouched.

## Changed
- **VFS**: Provider dispatch deduplicated via a closure-based `dispatch_remote` helper (no behavioural change; ~70 LOC removed from `crates/vfs/src/lib.rs`).
- **Cleanup**: Three unused public helpers removed (`is_supported`, `is_language_supported`, `count_files_under`); `panel-terminal` test code re-formatted to silence two `clippy --all-targets` lints.

## Fixed
- **Editor**: Inline blame annotation is now anchored to the last wrap-row of the cursor's logical line in word-wrap mode. Earlier it tried to follow the cursor's exact wrap-row, which on long lines is the row most full of code and pushed the annotation off the right edge — effectively invisible.
- **Panel terminal**: While a background program writes new output, the user's scrollback position no longer drifts toward the live tail. `scroll_up` now bumps `scroll_offset` (capped at scrollback length) when a line goes into the scrollback, so the visible window stays on the same content. Tail-following users (offset == 0) keep seeing the latest output as before.
- **Editor → Commands**: Editing a project command's hotkey through the modal now invalidates the in-memory hotkey table, so the rebind takes effect immediately and survives a restart.

## Security
- **openssl** bumped to `0.10.79` (transitive via `native-tls → suppaftp → termide-vfs`), closing GHSA-xv59-967r-8726 / CVE-2026-44662 (heap overflow in AES key-wrap-with-padding) and GHSA-xp3w-r5p5-63rr / CVE-2026-42327 (UB in `X509Ref::ocsp_responders` on non-UTF-8 OCSP URLs). Termide does not exercise either code path directly.
