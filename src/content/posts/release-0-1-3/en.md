---
title: "Termide 0.1.3: Accordion panels: groups that stack by width"
description: "What termide 0.1.3 brings: 3 additions, 2 changes and 2 removals."
date: 2025-12-02
kind: release
version: 0.1.3
cover: ./cover.jpg
coverAlt: "Termide 0.1.3 release poster"
---

## Added
- **Accordion panel system** - Major architectural improvement
  - Smart panel stacking based on terminal width
  - Vertical accordion layout within horizontal groups
  - One expanded panel per group, others collapse to title bar
  - Configurable minimum panel width threshold (80 characters)
- New navigation hotkeys:
  - `Alt+Up/Down` - Navigate panels within group
  - `Alt+PgUp/PgDn` - Move panel to previous/next group
  - `Alt+Home/End` - Move panel to first/last group
  - `Alt+Plus/Minus` - Increase/decrease active group width
  - `Alt+Backspace` - Toggle panel stacking (merge/unstack)
- Developer documentation (`doc/en/architecture.md`, `doc/en/developer-guide.md`)

## Changed
- Complete panel layout system redesign
  - New `LayoutManager` for centralized panel group management
  - New `PanelGroup` for vertical panel stacking
  - Separate panel rendering logic
- Panel width management improvements
  - Fix redistribute after group deletion (8 locations)
  - Add zero-sum balance correction for resize operations
  - Fix auto-stacking calculation to use average width
  - Add proportional width redistribution across all groups

## Removed
- **BREAKING**: Removed `LayoutMode` (SimplePanel/MultiPanel) in favor of dynamic groups
- **BREAKING**: Changed panel navigation model from flat to hierarchical (groups + panels)
