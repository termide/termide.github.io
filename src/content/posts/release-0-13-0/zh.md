---
sourceHash: "fcdd15150d18"
title: "Termide 0.13.0: 自动闭合的括号"
description: "termide 0.13.0 带来了什么：4 项新增和 4 项变更。"
date: 2026-02-24
kind: release
version: 0.13.0
cover: ./cover.jpg
coverAlt: "Termide 0.13.0 发布海报"
---

## 新增
- **编辑器**：括号和引号自动闭合，并感知上下文（单词中间的撇号不会闭合）
- **编辑器**：Ctrl+Left/Right 按单词移动，Ctrl+Shift+Left/Right 按单词选择
- **编辑器**：在成对括号之间按 Enter 时拆分并缩进（`{|}` → 三行，缩进正确）
- **编辑器**：配置选项 `auto_indent` 和 `auto_close_brackets`

## 变更
- **VFS**：通过 `spawn_op`/`spawn_op2` 辅助函数消除 SFTP 操作中的重复（减少 224 行）
- **I18n**：`t()` 中不安全的指针转换改为安全的 `Box::leak` 方式
- **I18n**：复数处理中用回退值取代带守卫检查的 `expect`
- **编辑器**：将 vim 移动命令中的单词边界逻辑提取到共享的 `word_boundary` 模块
