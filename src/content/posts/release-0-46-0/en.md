---
title: "Termide 0.46.0: Placeholders and patient delegates"
description: "What termide 0.46.0 brings: 2 additions, 3 fixes and 1 change."
date: 2026-10-26
kind: release
version: 0.46.0
cover: ./cover.jpg
coverAlt: "Termide 0.46.0 release poster"
---

## Added
- **`{file}`, `{line}` and parameters right in a command's line.** A command reached its parameters only as `TERMIDE_PARAM_*` environment variables, so running `p4 edit` on the file at hand took a form, a typed path and `"$TERMIDE_PARAM_FILE"`, which PowerShell and cmd do not even read. A `{name}` in `command` or `build` is now replaced before the command runs: by the parameter of that name, or by what the focused panel has — `{file}` and `{line}`/`{col}` of the editor's cursor, `{file}` under the file manager's cursor and `{files}` it has selected, `{dir}`, and the `{project}` root. `command = "p4 edit {file}"` is the whole command. A value is always taken literally, wherever its placeholder stands — bare, in single quotes or inside a double-quoted string — quoted by the rules of whatever reads the line: sh for background and report commands, the terminal's own shell (sh, fish, PowerShell, cmd) in terminal mode, one word per value for a debugger's program; a file named `$(rm -rf ~).c` is only a name. Without a value to give — a terminal focused, a remote file, `{line}` outside an editor — the command does not run and says what to focus. Only these names are replaced: `awk '{print $1}'`, `{{.Name}}` templates, brace expansion, `${VAR}` and a placeholder escaped for the shell stay as written, and the environment variables stay too.
- **A delegate stopped by a limit waits it out.** A delegated task that hit a quota, rate or transient limit answered its call with the limit's text, and the work was lost to the agent that handed it over. It now parks: its row above the input shows `⏸`, the delegate and when it goes again, and it wakes by itself at the reset, when you ask, or when the panel's connection has changed — so a subscription that ran out and was swapped for a local model picks the work back up from its own log. The delegating agent is told the task is parked and will report back, so it does not hand it over again. With `on_limit` asking, a card offers to try now or give up; giving up tells the agent the task did not finish. After six tries the limit reaches the agent, naming the connection and the reset. A failure that waiting does not cure — auth, a bad request, an overflowing context — is answered at once as before.

## Fixed
- **A theme or language picked from the menus holds across projects.** In a project with its own settings file the choice went into that file, so every other project opened with the old one and the choice seemed lost on a switch. The menus now save it globally; a per-project theme is still set in the settings with Stored: Project.
- **Git selectors show which repository and branch they hold.** Long repository paths and branch names share their start (`github.com/team/`, `feature/`) and differ at the end, yet were cut at the end. They now keep the end behind a leading `…`. The repository selector also takes what a short branch leaves instead of stopping at half the header, and every git dropdown is as wide as its widest option, within the panel.
- **A word wider than the row wraps instead of being cut off.** A long URL in an agent prompt or a path in an answer or a Markdown file ran past the edge. It now breaks onto rows of its own; copied, the rows join back without a space, and a link stays clickable on every row it spans.

## Changed
- **The name is written Termide** throughout the documentation, the READMEs and the program's own texts, where it was TermIDE.
