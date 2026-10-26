---
title: "Termide 0.29.5: SFTP library security update"
description: "What termide 0.29.5 brings: 1 security fix."
date: 2026-07-28
kind: release
version: 0.29.5
cover: ./cover.jpg
coverAlt: "Termide 0.29.5 release poster"
---

## Security
- Updated the `russh` SSH library (used by the SFTP remote-file backend) to 0.62.4, addressing three medium-severity advisories affecting russh ≤ 0.62.3: GHSA-5xvq-cp9x-6p6r, GHSA-cqjc-rmpq-xprq and GHSA-g9hv-x236-4qp3.
