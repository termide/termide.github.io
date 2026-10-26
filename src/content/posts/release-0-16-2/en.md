---
title: "Termide 0.16.2: Pick your shell"
description: "What termide 0.16.2 brings: 2 additions and 5 fixes."
date: 2026-03-16
kind: release
version: 0.16.2
cover: ./cover.jpg
coverAlt: "Termide 0.16.2 release poster"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/54bde520-365e-4ebb-89bb-d1cf11d6ebda" />

## Added
- **Terminal**: Shell picker submenu under Windows > Terminal — lists all available shells, marks default with ●, saves selection to config (#12)
- **Docs**: Document shell picker feature (en, ru, zh)

## Fixed
- **Terminal**: Deduplicate shells in picker by canonical path + basename — eliminates duplicates on NixOS and merged-usr distros while keeping sh/bash as separate entries
- **Windows**: Coalesce pasted text into bracketed paste events (#13)
- **Git**: Unpushed commits indicator was showing total project commits instead of ahead count
- **App**: Clear cached shells when closing menu by clicking outside it
- **UI**: Move Terminal to top of Windows submenu for faster access
