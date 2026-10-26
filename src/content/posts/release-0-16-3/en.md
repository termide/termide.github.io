---
title: "Termide 0.16.3: Steadier resource monitors"
description: "What termide 0.16.3 brings: 2 fixes and 2 changes."
date: 2026-03-17
kind: release
version: 0.16.3
cover: ./cover.jpg
coverAlt: "Termide 0.16.3 release poster"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/0e25829f-1135-41a6-8e8e-af2dafeef934" />

## Fixed
- **App**: Disk space in status bar is now cached per tick instead of calling `statvfs` on every render — eliminates potential blocking on NFS mounts under high input rate
- **App**: Resource modal auto-refresh interval unified — CPU, RAM and Disk modals all use `resource_monitor_interval` config (was hardcoded 3 s for process modals); default interval changed from 1 s to 2 s

## Changed
- **App**: Disk modal now auto-refreshes on tick like CPU/RAM modals
- **Refactor**: Preserve original error types in VFS/file-ops paths; remove dead code; optimize rendering hot path
