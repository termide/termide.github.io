---
title: "Termide 0.23.1: PHP, JSX and multi-line highlighting fixed"
description: "What termide 0.23.1 brings: 1 addition, 3 fixes, 2 changes and 2 security fixes."
date: 2026-05-31
kind: release
version: 0.23.1
cover: ./cover.jpg
coverAlt: "Termide 0.23.1 release poster"
---

## Added
- The version string (`termide --version` and the help panel header) now includes the git commit it was built from, e.g. `0.23.1 (50b81b1)`, so builds that share a version number can be told apart.

## Fixed
- **PHP syntax highlighting** — `.php` files are now highlighted instead of shown as plain text, including mixed HTML/PHP templates (the HTML, the `<?php … ?>` code, and the tags are all coloured). The PHP grammar had been silently disabled in the shipped binary: different crates pulled incompatible tree-sitter-php versions, whose clashing `tree_sitter_php` symbols collided at link time onto an ABI the runtime rejected. All crates are now pinned to the same grammar version.
- **JSX syntax highlighting** — `.jsx` files are now highlighted; the language was listed as supported but never actually loaded.
- **Multi-line constructs** — block comments and strings that span several lines now stay coloured to their end across every language, instead of losing highlighting after the first line.

## Changed
- The editor now highlights the whole buffer in one context-aware pass (files up to 1 MB) rather than line by line, which is what makes template languages and multi-line tokens colour correctly. Larger files fall back to the previous per-line highlighting.
- A syntax grammar that fails to load is now logged instead of being dropped silently, so missing highlighting is diagnosable.

## Security
- Bumped `russh` to 0.61.1 (CVE-2026-46702): the SFTP client now bounds post-decompression SSH packet size, closing a remote resource-exhaustion vector a malicious server could trigger when compression is negotiated.
- Refreshed the dependency lock off the yanked `aes` 0.9.0 onto 0.9.1 (no API change).
