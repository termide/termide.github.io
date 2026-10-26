---
title: "Termide 0.33.0: Fewer freezes, sharper LSP"
description: "What termide 0.33.0 brings: 1 addition, 3 changes and 6 fixes."
date: 2026-09-07
kind: release
version: 0.33.0
cover: ./cover.jpg
coverAlt: "Termide 0.33.0 release poster"
---

## Added
- Settings now exposes the **Database** and **Viewer** keybinding sections. The modal listed seven of the nine sections the configuration defines, so the database panel's six bindings and the viewer's two could only be changed by editing `config.toml` by hand.

## Changed
- The **git diff panel loads in the background**. It used to run `git status` twice plus a `git diff` for every changed file on the UI thread — and not only when opening: the panel refreshes on filesystem and git events, so editing a file anywhere in the repository froze the interface on each watcher tick. Measured on a warm cache, that was 90 ms for four changed files and 360 ms for thirty. The panel now opens immediately with a loading marker in its title and keeps showing the previous diff while the new one loads.
- **Language servers receive only the ranges that changed.** Every keystroke used to ship the whole document, which allocated a copy of the file and walked the entire buffer — a cost that grew with the file rather than with the edit, and was noticeable on multi-megabyte files. The whole document is still sent where ranges cannot be trusted: to a server that only advertises full synchronization, after a reload from disk, and when a backlog of unsent changes accumulates.
- The contributor gate now also checks for unused dependency declarations (`cargo machete`) and runs tests through `cargo nextest`, which cut the workspace suite from 21.5 s to 4.1 s. The pre-commit hook checks what is actually staged rather than the working tree, so splitting a session into separate commits no longer needs `--no-verify`.

## Fixed
- **Hover, completion, go-to-definition, find-references and rename asked language servers about the wrong token** whenever an emoji, a combining accent or a ZWJ sequence sat earlier on the same line. Editor columns count grapheme clusters while the Language Server Protocol counts UTF-16 code units, and one was being passed as the other; the two agree for ASCII and for the whole Basic Multilingual Plane, which is why plain text and Cyrillic were unaffected. Completion's own text edits were misread the same way and could replace the wrong span.
- **Opening an SFTP bookmark could take down the whole application.** Failing to start the SFTP backend panicked on whichever thread reached it first, which is the interface thread; it now surfaces as a connection error.
- **Cancelling a file copy left a truncated file behind** that looked like a finished one. The destination is now removed unless the copy completes. Note that cancelling a copy *over an existing file* now removes that file: it was already destroyed when the copy began, and a fragment posing as a complete copy is worse than its absence.
- **Creating a file or directory on an SFTP, FTP or SMB share froze the interface** for the length of the round trip — up to the backend's thirty-second deadline on an unresponsive server. The entry now appears when the server answers, and the interface stays usable meanwhile.
- **Double-clicking `some_long_name` selected only `some`.** Word selection treated `_` as a separator, while this editor's own vim motions and the terminal's double-click both already counted it as part of a word.
- Timestamps a year or older fell back to English in Bengali, Hindi, Indonesian, Japanese, Korean, Thai, Turkish, Vietnamese and Chinese: the `year` plural was missing from those nine translations.
