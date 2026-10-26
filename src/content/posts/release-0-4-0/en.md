---
title: "Termide 0.4.0: Every script, wrapped right"
description: "What termide 0.4.0 brings: 7 additions, 4 changes and 4 fixes."
date: 2025-12-06
kind: release
version: 0.4.0
cover: ./cover.jpg
coverAlt: "Termide 0.4.0 release poster"
---

## Added
- Double-click word selection in editor
  - Select word between nearest delimiters with double-click
  - Proper handling of alphanumeric word boundaries
- Smart word wrapping with word boundary detection
  - Breaks lines at word boundaries when possible
  - Falls back to hard break for words wider than viewport
- Visual line navigation for word-wrapped text
  - Cursor Up/Down moves through visual lines, not buffer lines
  - Preserves preferred column across visual line movements
- Proper Unicode rendering for CJK and combining characters
  - Chinese/Japanese/Korean characters display with correct 2-column width
  - Hindi and other scripts with combining characters render correctly
  - Uses grapheme clusters for proper text segmentation
- Localization for 7 new languages
  - German (de), Spanish (es), French (fr), Hindi (hi)
  - Japanese (ja), Korean (ko), Portuguese (pt), Thai (th), Chinese (zh)
- Panel reordering hotkeys
  - Alt+[ and Alt+] to reorder panels within current group
  - Alt+PageUp/PageDown context-aware (reorder or switch)
- Kitty keyboard protocol support for proper Alt+Cyrillic handling

## Changed
- Major editor architecture decomposition
  - Extracted cursor movement to dedicated modules (physical, visual)
  - Separated rendering into focused modules (line, wrap, cursor, highlights)
  - Created RenderContext for shared rendering state
  - Keyboard handling with Command Pattern
- Translations migrated from Rust code to TOML files
  - Easier to add/update translations
  - Cleaner separation of concerns
- Terminal VT100 parser extracted to dedicated module
- Extensive code cleanup and DRY refactoring
  - Extracted TextInputHandler for modal inputs
  - Created path_utils module for path resolution
  - Added panel downcast helpers (PanelExt trait)

## Fixed
- Cursor Up/Down navigation with word wrap
- Git status tracking in subdirectories
- Editor navigation and viewport issues with word wrap
- App initialization with correct terminal size

## Performance
- Critical hot path optimizations (100-270x faster)
  - Vec pre-allocation when size is known
  - Eliminated unnecessary string allocations
  - Optimized terminal character shift with copy_within
