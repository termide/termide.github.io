---
title: "Termide 0.23.10: Git panels find nested repositories"
description: "What termide 0.23.10 brings: 1 addition, 1 change and 2 fixes."
date: 2026-06-04
kind: release
version: 0.23.10
cover: ./cover.jpg
coverAlt: "Termide 0.23.10 release poster"
---

## Added
- **Git Status/Log now find nested repositories.** Opening termide in a directory that isn't a repo itself but contains git projects (or sits inside a whole-home/whole-disk repo) now lists those nested projects, discovered asynchronously up to two levels deep — alongside the usual submodule discovery.

## Changed
- The repository dropdown is sorted by name (case-insensitive) instead of full path, so the list reads alphabetically.

## Fixed
- The Git Status/Log panels no longer keep showing a repository's branch, files, or commits after it disappears (e.g. its `.git` was deleted) — the panel state is cleared, and it reloads when the selected repository changes.
- Navigating no longer briefly flashes "no repositories" while the repo list is re-scanned.
