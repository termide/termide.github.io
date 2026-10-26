---
sourceHash: "49d8cab950d6"
title: "Termide 0.23.3：Alt+Enter 中出现更多快速修复"
description: "termide 0.23.3 带来：1 项修复。"
date: 2026-06-01
kind: release
version: 0.23.3
cover: ./cover.jpg
coverAlt: "Termide 0.23.3 发布海报"
---

## 修复
- **延迟填充编辑内容的服务器所提供的代码操作现在可以使用了。** 语言服务器返回的不含内联编辑（只在被选中时才解析）的快速修复，此前从不会出现在 `Alt+Enter` 弹出列表中；现在它们会被列出，并在接受时解析，因此更多服务器的操作（例如 phpactor 的“Import class”）能够生效。
