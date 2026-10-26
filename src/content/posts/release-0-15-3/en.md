---
title: "Termide 0.15.3: Dialog and translation fixes"
description: "What termide 0.15.3 brings: 1 addition, 6 fixes and 1 change."
date: 2026-03-13
kind: release
version: 0.15.3
cover: ./cover.jpg
coverAlt: "Termide 0.15.3 release poster"
---

## Added
- **Git Status**: Single-click directory icon to expand/collapse tree nodes

## Fixed
- **Modal**: Correct quit confirm title and button layout
- **Modal**: Adjust checkbox indent and spacing in InputModal
- **i18n**: Add `modal_confirm_title` key — ConfirmModal no longer shows "Yes" as title
- **i18n**: Localize hardcoded "Confirm" string in file manager paste confirmation
- **Docs**: Fix syntax highlighting language count in README (19→21)
- **Docs**: Update CONTRIBUTING.md with current i18n architecture (15 languages, TOML-based)

## Changed
- **Refactor**: Replace SelectModal with ChoiceModal for editor close dialogs
