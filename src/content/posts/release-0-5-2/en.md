---
title: "Termide 0.5.2: Terminal scrolls while an app waits for input"
description: "What termide 0.5.2 brings: 2 fixes and 2 changes."
date: 2025-12-15
kind: release
version: 0.5.2
cover: ./cover.jpg
coverAlt: "Termide 0.5.2 release poster"
---

## Fixed
- Terminal scroll not working during user input wait (scroll events now bypass modal check)
- i18n placeholders showing '{}' instead of values (all 9 language files updated with named placeholders)

## Changed
- Removed duplicate `/i18n/` folder from project root (was unused copy)
- Moved `/help/` files to `crates/panel-misc/help/` for better code organization
