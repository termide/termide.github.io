---
sourceHash: "0a367ae05bff"
title: "Termide 0.29.6：Markdown 表格中的格式化单元格"
description: "termide 0.29.6 带来：4 项修复和 2 项变更。"
date: 2026-08-01
kind: release
version: 0.29.6
cover: ./cover.jpg
coverAlt: "Termide 0.29.6 发布海报"
---

## 修复
- Markdown 和 HTML 表格现在会在单元格内渲染行内格式（行内代码、`**bold**`、`*italic*`）和可点击的链接。此前带格式的单元格会留空，其内容则以纯文本形式漏到表格下方。
- 终端只有几行高时，诊断面板不再 panic。
- 在 `.git` 活动频繁时（rebase、gc、fetch、大规模 checkout），Git 状态和日志面板不再堆积多余的后台刷新工作线程，避免了 CPU 和 git 子进程的峰值。
- 编辑器的内联 git diff 不再有把 git/SSH 凭据提示画到界面上的风险，并且现在能为通过符号链接路径打开的文件正确解析差异。

## 变更
- Git blame 的时间间隔和会话列表中的相对时间现在跟随界面语言（blame 此前始终为英文），并新增了“年”这一档；这条新字符串已翻译到所有内置语言环境。
- 在大文件中搜索时编辑器渲染更快，git 状态面板的每帧工作量也更低。
