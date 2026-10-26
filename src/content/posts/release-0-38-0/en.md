---
title: "Termide 0.38.0: Projects stay open in the background"
description: "What termide 0.38.0 brings: 15 additions, 6 changes and 11 fixes."
date: 2026-10-03
kind: release
version: 0.38.0
cover: ./cover.jpg
coverAlt: "Termide 0.38.0 release poster"
---

## Added
- **Projects stay open in the background.** Switching to another project no longer closes the one you leave: programs in its terminals keep running, its agents keep working and unsaved edits stay as they were. A project stays open until you close it or quit. The `Projects` menu and the `Alt+\` switcher list the same projects in one flat list — the open ones first, sorted by path, then the others, the most recently used first, with the time you last worked on them. ● marks the current project, ○ one open in the background and 🔔 one whose panel waits for you (an agent's question or finished work, a terminal bell); while any does, the `Projects` title is highlighted. `Alt+\` then `Enter` goes back to the project you left last. `Delete`/`F8` closes a background project, or deletes the saved layout of one that is not open, after a confirmation; quitting names the background projects that still run something. `prev_project`, `next_project` and `goto_project_1`…`goto_project_9` switch by keyboard; they ship unbound, see [`doc/en/keybindings.md`](https://github.com/termide/termide/blob/main/doc/en/keybindings.md). Requested in [#61](https://github.com/termide/termide/issues/61).
- **Files travel through the system clipboard.** `Ctrl+C` in the file manager puts the selection on the clipboard as files, so Finder, Explorer or a file manager pastes them as files, and `Ctrl+V` (also `Cmd+V`) pastes files copied there into the panel. `Ctrl+X` marks the selection as cut, so the next paste moves it, and the confirmation says Move before anything is deleted; a cut is refused in a remote panel or inside an archive rather than turning into a copy. Paths copied as text paste too. Linux keeps a text-only clipboard. See [`doc/en/file-manager.md`](https://github.com/termide/termide/blob/main/doc/en/file-manager.md).
- **An `auto` permission mode with a reviewer model.** What would put a permission card up is decided by a separate model call that sees your messages and the agent's calls, never tool results, so content from files and pages cannot talk it into anything. Rules, plan mode and hooks still come first, and a block reaches the agent with its reason. Every call records who decided it. `[ai] auto_reviewer` picks the connection.
- **Rewind to a chosen message.** `Esc` in the empty prompt (or `F4`) lists the messages you sent above the prompt; picking one rewinds the conversation to before it and puts the message back in the input. When files changed since, a card asks whether to restore the files, the conversation or both.
- **Fork a session.** `F5`, `/fork` or the `[≡]` menu copies the session into a new agent panel, which continues from the same point while the original carries on; the copy is named `Refactor (2)`, `(3)` and so on.
- **Run shell commands from the agent prompt.** `$` in the empty prompt turns it into a shell line that runs at once without asking the model; the agent reads the command and its output at your next message. A new `suggest_command` tool lets the agent hand you a command instead of running it, on a card offering Run, Edit first, Copy and Don't run.
- **MCP servers over HTTP.** `url` servers in `.mcp.json` connect over streamable HTTP, with server push, OAuth sign-in (grants kept in `mcp-auth.json`) and `/mcp reload`, `login` and `logout`. `.mcp.json` is read from the panel's directory and every directory above it. Each server keeps one live status line, and the open toolset checklist fills in as servers connect.
- **Save the agent chat as Markdown** with `Ctrl+S`.
- **A livelier welcome banner.** It draws the project logo, is titled by the agent with its description, lists notices that arrived early under it, dates sessions to the minute, and lets a fresh session pick its directory with a click.
- **URLs in the agent chat open with `Ctrl+click`**, and a fetched URL is dimmed.
- **Built-in language servers for PHP, Terraform and Docker** (`phpantom_lsp`, `terraform-ls`, `docker-language-server`, with its telemetry turned off), used automatically when the binary is on `PATH`. Dockerfiles and Compose files are recognized by name. `.tsx` and `.jsx` files now start the TypeScript server.
- **Lua** syntax highlighting and outline.
- **Tabs reach the next tab stop.** A tab used to be drawn one column wide whatever the tab size; it now spans to the next stop everywhere the editor measures text — drawing, the cursor, clicks, wrapping and scrolling.
- **`.` toggles hidden directories in the directory picker.**
- **A bell from a terminal asks for attention**: the header of a terminal panel that is not focused turns the warning colour until you focus it.

## Changed
- **New agent sessions start in `auto` mode.** Pick another starting mode in the settings.
- **Service prompts and the root prompt template are read from the configuration directory only.** A repository can no longer ship a `.termide/ai/system/` or `.termide/ai/AGENTS.md` of its own that changes how the agent summarises, plans or judges, or drops its base guidelines. A project's conventions still reach the prompt through its `AGENTS.md` instructions.
- **Your own `[lsp.servers.*]` entries add to the built-in servers instead of replacing them all**; an entry for a built-in language changes only the fields it sets.
- **The Projects menu is a flat list instead of a directory tree**, and deleting the saved layouts of every project in a directory at once is gone with it. The `Alt+\` switcher shows one row per project with an inverted cursor.
- **Up and down keep the cursor in its screen column**, also across short lines without word wrap.
- **Auto reasoning reaches local servers.** A connection left to `auto` now sends the chat template's `enable_thinking` switch to servers on this machine or the local network (llama.cpp, vLLM, omlx, LM Studio), so their Reasoning chip appears.

## Fixed
- **Pasting a file into its own directory could empty it.** Choosing Overwrite on the conflict truncated the source before copying it onto itself. A copy onto itself now gets the next free name (`notes (1).txt`), a move onto itself does nothing, and copying or moving a directory into itself is refused.
- **A panic in one detached instance could take down every other instance** served by the same daemon; the web tools could likewise fail for good after one error.
- **On Windows, paths showed a `\\?\` prefix** in panel titles, bookmarks, git and the terminal.
- **Diagnostic underlines, completion and code actions sat in the wrong column** on lines with tabs, a repeated diagnostic was counted twice, and git diffs lost the indentation of tab-indented lines.
- **A click in a long, scrolled text field landed on the wrong character** and the field jumped back to its start; the editor's find bar now takes mouse clicks.
- **The status bar misplaced text with wide characters.**
- **The language server could receive requests before it was initialized.**
- **The toolset checklist dropped changes when closed without `Enter`**, and the agent banner's labels were not translated.
- **The rename dialog showed a "Move … to:" hint.**
- **The fullscreen column expanded when a fit-height panel took focus.**
- **russh updated to 0.63** for open security advisories in SSH connections.
