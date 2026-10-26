---
title: "Termide 0.39.0: An agent that recalls the project"
description: "What termide 0.39.0 brings: 10 additions, 6 changes and 9 fixes."
date: 2026-10-06
kind: release
version: 0.39.0
cover: ./cover.jpg
coverAlt: "Termide 0.39.0 release poster"
---

## Breaking Changes
- **An agent is defined by one `agents/<name>/AGENT.md`.** Its settings (`description`, `model`, `mode`, `tools`, or `command` for an external agent) live in the front matter and the prompt template in the body, like a `SKILL.md`. `SOUL.md` and `agent.toml` are no longer read: move their content into `AGENT.md`. A directory under `agents/` without an `AGENT.md` no longer defines an agent; an empty one will do.
- **The default agent is `ai/agents/default/AGENT.md`.** An existing `ai/AGENTS.md` is moved there on start, so your edits stay in effect; `ai/AGENTS.md` is not read afterwards.

## Added
- **The agent recalls what the project already knows.** A read-only `recall` tool searches earlier agent sessions, the git history and the project's files together and returns cited results, with no memory store to curate. It also reaches a directory the panel moved to outside the project, can answer from its results with a model of your choice, and runs headless as `termide --recall`. Time limits are under `[ai.recall]`.
- **Plan mode works the task through with you.** The agent explores, then settles the open decisions in rounds of question cards, each with a recommended answer, before it writes the plan. It can delegate searches to read-only subagents. The plan card can carry the plan out from a clean context, which drops what was read along the way and keeps your messages and answers word for word. `←` and `→` step back and forth between the model's questions.
- **Claude Code, Codex and Gemini CLI get the tools of termide's MCP servers**, beside their own, and every call goes through termide's checks. On Claude Code, termide's tools show in the Tools chip and the checklist again and can be switched off. External agents also get the plan card, and Claude Code learns when plan mode switches mid-session.
- **A session carries over between agents.** Reopening a session, or switching it to an external agent, resumes that agent's own session where it can, and otherwise starts the new one with a recap of the conversation. An external agent's tool calls are now logged in the session, so `recall` and a reopened session see them.
- **Reopen the projects of the last run** from the `Projects` menu. The set is saved whenever it changes, so it also survives a crash; reopened projects load only when you enter them.
- **Links open the same way everywhere.** A Markdown link in the agent chat keeps its address, and a path or URL in a tool headline opens with `Ctrl+click` across all the rows it wraps over; holding `Ctrl` highlights the whole link. Bare web addresses in Markdown become links. A followed link opens by the same rules in every panel: a web address by `[viewer] open_links`, a directory in the file manager, a file where `Open…` would open it, an image by `open_images`.
- **Edit each key of a binding in the settings.** `←`/`→` walk the keys of an action, `Enter` replaces the one under the cursor or adds a new one on the `[+]` button, and `Delete` removes the selected key. A chord the action already answers to is refused.
- **The help panel lists the agent panel's keys.**
- **The agent reports mistakes in its definitions**: front-matter keys nothing reads and tool texts with an empty body or named after no tool.
- **What the model is told about each built-in tool lives in `ai/tools/<name>.md`** and can be edited like the service prompts.

## Changed
- **Waiting panels and projects are marked with a bell instead of a colour.** The 🔔 takes the place of the panel icon (`!` without emoji icons), and entering a project moves the focus to the panel that waits.
- **The agent chat reads quieter.** An edit shows its diff hunks with the added and removed counts in the headline; a tool call's prefix turns success or error colour once it finishes; long read, edit, search and fetch headlines wrap instead of clipping; finished reasoning dims; the cursor and run controls dim in a background panel.
- **In the agent prompt, `↑`/`↓` move through wrapped rows** before recalling history, and a recalled request opens with the cursor at its start.
- **More read-only commands pass plan mode**: printing `sed`, listing `git tag`, `git branch`, `git stash` and `git worktree`, other git reads, and the listing and viewing forms of `gh`, `glab` and `tea`. A refused command names the part that is not read-only.
- **Compaction shows its progress** and the new context size as soon as it ends.
- **The operations panel follows you across project switches**, and a command running in another project names it.

## Fixed
- **Dismissing a build report with `Enter` could quit termide.** A quit refused with `Esc` stayed armed until the next modal closed. Quitting now takes an accepted confirmation.
- **A report finishing over an open question replaced it** and lost the answer; it now waits until the question is answered.
- **Long calls from Claude Code to termide's tools timed out** after five minutes, and one long call held up every other; a question card the agent gave up on stayed open.
- **Styled text split words apart**: `**bold**ly` read "bold ly" and `[docs](u).` read "docs .".
- **The context bar ran up to a cell ahead** of the figures beside it.
- **The auto mode reviewer and the recall solver failed** on a connection that names no model.
- **Claude Code could not ask a question or offer a command on a card**: its `question` and `suggest_command` calls found no one to ask, so commands ended up as text in its reply.
- **Long lines in code blocks were cut off** at the panel's edge in the agent chat and the Markdown and HTML viewers; they now wrap.
- **A paused run's controls carried over into a newly opened session.**
