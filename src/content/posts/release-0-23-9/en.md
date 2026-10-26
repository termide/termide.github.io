---
title: "Termide 0.23.9: SSH passphrases in a modal for git push, pull, fetch"
description: "What termide 0.23.9 brings: 1 fix and 1 addition."
date: 2026-06-04
kind: release
version: 0.23.9
cover: ./cover.jpg
coverAlt: "Termide 0.23.9 release poster"
---

## Fixed
- **SSH/credential prompts no longer corrupt the interface.** Opening a repo auto-fetches, and push/pull/fetch ran with the terminal attached, so when ssh needed an SSH key passphrase it drew the prompt straight over the TUI. Network git operations now run non-interactively (detached stdin, `GIT_TERMINAL_PROMPT=0`, ssh `BatchMode`), so a key already in ssh-agent just works and a missing one fails cleanly. A failed auto-fetch reports on the status line instead of popping a modal.

## Added
- **Enter an SSH key passphrase in a modal for git push/pull/fetch.** When an operation needs a passphrase that isn't in ssh-agent, termide now asks for it in a masked modal and retries (via a private, short-lived askpass handoff) instead of failing. The passphrase is cached in memory for the session so repeated operations don't re-prompt; it is never written to the config or persisted.
