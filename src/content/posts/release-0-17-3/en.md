---
title: "Termide 0.17.3: Repo and branch pickers in git log"
description: "What termide 0.17.3 brings: 2 additions, 7 fixes and 2 changes."
date: 2026-03-23
kind: release
version: 0.17.3
cover: ./cover.jpg
coverAlt: "Termide 0.17.3 release poster"
---

<img width="1902" height="943" alt="Screenshot From 2026-03-24 16-59-02" src="https://github.com/user-attachments/assets/37998058-1adc-456c-b58c-da386a9bac20" />

## Added
- **Session Switcher**: Filter input field in the session switching modal — typing filters sessions by path (case-insensitive substring match); backspace removes last character; navigation (↑↓/Enter/Esc) works on filtered results
- **Git Log**: Repo and branch selector dropdowns — click `[repo ▼]` or `[branch ▼]` widgets to open inline dropdown lists for switching repositories and branches directly from the git log panel

## Fixed
- **Git Log**: Clicking an open selector now toggles it closed (instead of reopening); clicking one selector while another is open now switches immediately in one click
- **Git Log**: Branch dropdown aligned with its selector position; branch selector placed immediately after repo selector
- **File Manager**: Bare Cyrillic hotkeys now translated to Latin (e.g., pressing `щ` on ЙЦУКЕН layout acts as `o`)
- **File Manager**: `o` key added as fallback for open-with-external-viewer (in addition to `Ctrl+Enter`)
- **Git Status**: Modifiers cleared when rendering dropdown items to prevent strikethrough style bleeding from previous render
- **Git**: Repository paths canonicalized to deduplicate symlinked repos (prevents same repo appearing twice in repo selector)
- **Editor**: Render cache invalidated after file reload from disk — ensures updated content is displayed immediately

## Changed
- **Assets**: Theme screenshots refreshed, 15 new theme previews added
- **Refactor**: Magic submenu index numbers replaced with named constants (`SESSIONS_SUBMENU_SWITCH`, `TOOLS_SUBMENU_GIT_LOG`, etc.) across all menu action handlers
