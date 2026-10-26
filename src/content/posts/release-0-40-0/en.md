---
title: "Termide 0.40.0: Projects as tabs, passwords in a vault"
description: "What termide 0.40.0 brings: 10 additions, 6 changes and 8 fixes."
date: 2026-10-08
kind: release
version: 0.40.0
cover: ./cover.jpg
coverAlt: "Termide 0.40.0 release poster"
---

## Breaking Changes
- **`Alt+1`…`Alt+9` switch open projects instead of panel groups.** Open projects now keep the order you give them, like tabs, so their numbers stay put. Jumping to a panel group by number (`goto_panel_N`) ships unbound; bind it in **Settings → Keybindings** if you used it. A `goto_panel_N = "Alt+N"` that an older version saved into `config.toml` gives way to the projects; to keep the digits for panels, also move `goto_project_N` to other keys in the same file.
- **`[ai.auto_reviewer]` is a table** of `connection` and `model`; a model alone reviews on the session's connection. The old `auto_reviewer = "<connection>"` under `[ai]` is dropped with a warning: move it into the table as `connection = "<connection>"`.

## Added
- **A password vault for remote logins.** SFTP, FTP/FTPS, PostgreSQL, MySQL and git over HTTPS or SSH ask for a refused password and can keep it in an encrypted vault under a master password (`~/.config/termide/vault.toml`). A password is saved only after the server accepted it, saving never needs the master password, and the vault locks after `[vault] lock_after_mins` of idle time or from the command palette. Saving a bookmark whose URL holds a password offers to move it into the vault. See [Password Vault](https://github.com/termide/termide/blob/main/doc/en/passwords.md).
- **Open projects show as buttons in the menu bar**, the current one bright and a waiting one with 🔔. A click switches; drag a button, or use `Alt+PgUp`/`Alt+PgDn`/`Alt+Home`/`Alt+End` in the `Projects` menu, the switcher or on the bar, to reorder the projects, and `Delete`/`F8` closes one. The order is saved and restored with the set. `Delete`/`F8` on the current project in the `Projects` menu now closes it and returns to the project left last.
- **`termide -r` / `--restore`** reopens the last run's projects at startup, in the project that run was in. Without a saved set it is an ordinary launch, so it is safe in a shell alias.
- **Failed agent runs offer a way on.** A subscription limit, a rate limit or a network outage is recognised, with its reset time, and the panel offers to wait until the reset, retry, keep retrying, compact, restart a dead external agent, switch agents or stop. A retry sends no new message. `[ai] on_limit = "ask" | "wait" | "stop"` lets an unattended `/goal` or `/loop` wait out a limit.
- **Subagents work in parallel and on any connection.** The read-only calls of one reply (reads, searches, fetches, `recall`, look-only commands) and delegated tasks now run side by side. A connection names, in `subagents`, where its delegates run, and on Claude Code a delegate can be a fresh Claude Code session. Subagents get the MCP servers' tools, show their tool calls in the task block, honour an agent's subagent turn limit, and their tokens, like the `auto` reviewer's, count in the session totals.
- **Cap the requests a connection serves at once** with `max_concurrent_requests`, so several panels, subagents and the reviewer do not crowd a local server; a waiting request shows ⏳ with its place in the queue.
- **Each connection can name its `auto` mode reviewer**, and a Claude Code or Codex subscription can serve as one. External agents are now reviewed in `auto` mode too.
- **External agents are level with the built-in loop.** A message typed during a turn steers it where the agent supports that; the model, reasoning level and the agent's other options (on a new **Options** chip) switch at any time and survive a reopen; the agent's own slash commands join the `/` list; `/goal` and `/handoff` work; Codex and Gemini CLI get `recall`, `skill`, `question` and `suggest_command`. The Model chip shows the model's own name and a spinner while the agent starts.
- **An `icon` in an agent's `AGENT.md`** replaces the 🤖 in its panel header, the agent picker and the AI menu.
- **Six night-path themes**: `black-earth`, `moonlit-dew` and `fireflies`, with their daytime light pairs `dry-path`, `morning-mist` and `summer-meadow`.

## Changed
- **Typing on a chat block goes to the prompt** instead of being swallowed.
- **The first click on an unfocused agent panel only focuses it.**
- **The agent's welcome banner scrolls as one page**, so on a short panel the fields make room for the recent sessions.
- **`suggest_command` reads as a shell call** in the chat, with its own "Suggesting" action.
- **The Projects menu no longer has a Switch project item**; the list below it and `Alt+\` do the same.
- **The Permissions guide states that agent tools run unsandboxed**: permissions are a control, not isolation.

## Fixed
- **Copying an agent answer copied its drawn rows**: the `›` mark, code block bars and breaks where the panel wrapped, so a copied command would not run.
- **An unused agent panel forgot its connection, model and options** when the project was reopened, and switching connection or agent emptied the prompt.
- **`termide -r` added the directory it was started from** to the saved set of projects.
- **The journal's level pills could not be toggled from the keyboard**; plain `1`…`5` now do it.
- **A message sent to an external agent stayed on the queue strip** after its turn had taken it.
- **Claude Code wrote commands as `! cmd`** in its replies instead of offering them on a card.
- **A subagent kept running after Stop** until its next event, and showed nothing while it waited for a slot.
- **Connection passwords could appear in debug logs.**
