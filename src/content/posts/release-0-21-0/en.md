---
title: "Termide 0.21.0: Faster at rest, battery by the clock"
description: "What termide 0.21.0 brings: 8 additions, 11 changes, 9 fixes and 2 security fixes."
date: 2026-04-27
kind: release
version: 0.21.0
cover: ./cover.jpg
coverAlt: "Termide 0.21.0 release poster"
---

## Added
- **Menu**: Battery percentage and AC-charging indicator next to the clock
- **Modal**: Mouse-wheel scrolling in list modals
- **Editor**: Shift+click to extend text selection (with Alt+click fallback)
- **Editor**: Click the Tab indicator in the status bar to override `tab_size` per editor
- **File Manager**: Wide-view directory size computation with a per-frame time budget
- **File Manager**: Directory symlinks included in wide-view size walks
- **File Manager**: Directory-size cache shared across all FM panels and preserved across navigation
- **File Manager**: Symlink target shown in the properties modal; nested-entry status bar arrow fixed

## Changed
- **Performance (input)**: Drain Release/Repeat key events without generating idle ticks; fewer hotkey-table rebuilds and lower idle poll latency
- **Performance (system-monitor)**: Cache mount/process/network lookups; battery readings cached instead of rereading `/sys` every frame; removed duplicated `disk_space` module
- **Performance (file-manager)**: Async directory reload for watcher-triggered updates
- **Performance (editor)**: Wrap points precomputed once per physical line; per-render diagnostics-by-line map built once
- **Performance (highlight)**: Syntax fallback returns `Cow<str>` segments to skip `String` allocations
- **Performance (core)**: `Panel::prepare_render` borrows `Arc<Config>` instead of cloning
- **Performance (app)**: LSP diagnostics fan-out folded into a single panel loop
- **Performance (misc)**: Cache foreground-command lookup, menu layout and hunk regex; consolidate per-frame panel iterations
- **Observability**: Swallowed filesystem and Git errors are now logged instead of silently discarded
- **i18n**: Trivial string accessors generated via macro; `normalize_lang` made internal
- **Workspace**: `scripts` renamed to `commands` across the codebase; ~1.7K LOC of dead code pruned, several public APIs tightened to `pub(crate)`

## Fixed
- **Hotkeys**: Letter bindings honour Caps Lock state via the Kitty keyboard protocol
- **Terminal**: Encode Ctrl/Shift/Alt modifiers for arrow, Home and End keys (#17)
- **Terminal**: Keep the PTY screen alive on very small terminal sizes
- **Modal**: Coalesced mouse-wheel events routed into the active modal
- **Modal**: Tab-size modal no longer shows a stray prompt row
- **Settings**: Removed the non-functional `[X]` close button from the modal title
- **Editor**: Smart-indent triggers gated behind a recognized syntax
- **File Manager**: Disconnected async-reload channels handled gracefully (no more panic)
- **System Monitor**: Add Windows fallback for `get_disk_space_info_cached` so the indicators code path compiles on Windows targets

## Security
- **deps**: Bump `openssl` 0.10.76 → 0.10.78 to address GHSA-pqf5-4pqq-29f5 (CVE-2026-41676), GHSA-8c75-8mhr-p7r9 (CVE-2026-41678), GHSA-ghm9-cr32-g9qj (CVE-2026-41681), GHSA-hppc-g8h3-xhp3 and GHSA-xmgf-hq76-4vx2 — buffer overflow / out-of-bounds advisories in `Deriver::derive`, `aes::unwrap_key`, `MdCtxRef::digest_final` and PSK/cookie/PEM callbacks. Reached transitively via `suppaftp` → `native-tls`.
- **deps**: Bump `rand` 0.8.5 → 0.8.6 to address GHSA-cq8v-f236-94qc (Stacked Borrows soundness issue triggered by custom loggers calling `thread_rng()` under trace-level logging).
