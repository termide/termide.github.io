---
sourceHash: "23a259d60d94"
title: "Termide 0.23.2：用 Alt+Enter 调出 LSP 快速修复"
description: "termide 0.23.2 带来：1 项新增、1 项变更和 1 项修复。"
date: 2026-06-01
kind: release
version: 0.23.2
cover: ./cover.jpg
coverAlt: "Termide 0.23.2 发布海报"
---

## 新增
- **LSP 代码操作** —— 在某一行按 `Alt+Enter` 请求快速修复（例如 PHP 的“Import class”），并从弹出列表中选择一项；所选编辑会跨文件应用，已打开的编辑器会重新加载。（`Ctrl+.` 仍绑定为切换注释，因此默认快捷键是 `Alt+Enter`。）

## 变更
- 自动补全现在由语言服务器实际声明的字符触发（因此 PHP 的 `->` 会打开弹出列表），只有当服务器未声明任何字符时才回退到内置集合。

## 修复
- **补全不再重复已输入的前缀。** 接受建议时现在原样应用服务器给出的编辑，而不是按单词边界猜测，因此 `$va`→`$var`（而非 `$$var`），`Ord`→`Order`（而非 `OrdOrder`）。随补全一起的导入（`use` 语句）也会一并应用。
