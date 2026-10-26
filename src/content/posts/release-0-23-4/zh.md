---
sourceHash: "9b5221f96453"
title: "Termide 0.23.4：基于命令的快速修复现在会生效"
description: "termide 0.23.4 带来：2 项修复。"
date: 2026-06-02
kind: release
version: 0.23.4
cover: ./cover.jpg
coverAlt: "Termide 0.23.4 发布海报"
---

## 修复
- **基于命令的快速修复现在会生效。** 语言服务器通过命令而非内联编辑执行的操作（例如 phpactor 的“Import class”）此前会出现在 `Alt+Enter` 弹出列表中，但选中后毫无反应。现在它们通过 `workspace/executeCommand` 运行，服务器回推的编辑也会被应用（添加 `use` 语句并重新加载受影响的编辑器）。至此，从 0.23.2–0.23.3 开始的代码操作支持已经完整。
- 代码操作快捷键（`Alt+Enter`）现在与其他 LSP 快捷键一起列在帮助面板中，文档中手动补全的快捷键也更正为 `Ctrl+J` / `Ctrl+Space`。
