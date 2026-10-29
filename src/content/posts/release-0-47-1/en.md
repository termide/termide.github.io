---
title: "Termide 0.47.1: Safe archive unpacking"
description: "What termide 0.47.1 brings: 1 security fix."
date: 2026-10-29
kind: release
version: 0.47.1
cover: ./cover.jpg
coverAlt: "Termide 0.47.1 release poster"
---

## Security
- **A crafted zip archive can no longer write outside its destination.** The zip library termide unpacks archives with read an entry's local and central headers inconsistently, so a crafted `.zip` could pass the checks and overwrite files outside the folder it was unpacked into (zip 9.0.0–9.0.4). It is now on a fixed version.
