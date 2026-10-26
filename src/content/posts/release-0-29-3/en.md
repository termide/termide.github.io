---
title: "Termide 0.29.3: Balanced diagrams and a steady repository pick"
description: "What termide 0.29.3 brings: 3 fixes."
date: 2026-07-15
kind: release
version: 0.29.3
cover: ./cover.jpg
coverAlt: "Termide 0.29.3 release poster"
---

## Fixed
- The git status/log panels no longer reset the selected repository when working in a directory that contains many git projects. Navigating (which re-derives the repo list) dropped the asynchronously-discovered nested repositories and submodules, resetting the selection to the first repository; the repo list is now merged instead of replaced, so the selection is preserved.
- The diagram viewer now shows a horizontal scrollbar on the bottom border for diagrams wider than the panel, so you can tell how far along the X axis the view is (and that there's more to the right). Previously only a vertical scrollbar was drawn.
- Diagram layout is more balanced: a rank's nodes are now centred on their connected neighbours instead of drifting to one side, so a hub with many connections (e.g. an entity referenced by many others in an ER diagram) straddles its neighbours symmetrically. This removes the wide empty channels and long connecting lines that stranded the first boxes far to the left, and makes wide diagrams noticeably narrower.
