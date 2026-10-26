---
sourceHash: "2821ab348c4b"
title: "Termide 0.24.1：SFTP 符号链接与按住按键重新可用"
description: "termide 0.24.1 带来：1 项变更和 2 项修复。"
date: 2026-06-12
kind: release
version: 0.24.1
cover: ./cover.jpg
coverAlt: "Termide 0.24.1 发布海报"
---

## 变更
- 在操作面板中取消后台操作现在会先请求确认 —— 无论通过 `Esc`、`Delete`/`Backspace` 还是卡片的弹出菜单 —— 因此下意识按下的 `Esc` 不会再中止正在进行的传输。

## 修复
- 进入**远程 SFTP 文件系统上的目录符号链接**时，现在会导航进入该目录，而不是显示无休止的“同步中”。此前链接被误判为文件，从而触发了对其目标目录树的递归下载。现在符号链接在进入时被解析（目录 → 导航进入，文件 → 打开），SFTP 传输遍历会防范符号链接循环，符号链接也以独特的标记显示，而不再像可执行文件那样加粗。
- **Kitty 协议终端上的按住按键自动重复。** termide 启用了 Kitty 键盘协议的 `REPORT_EVENT_TYPES`，因此按住按键会持续发送 `Repeat` 事件；这些事件此前被丢弃，导致按住按键没有任何效果。现在 `Repeat` 被视同 `Press`，自动重复得以恢复。（感谢 @olegpro171，#26。）
