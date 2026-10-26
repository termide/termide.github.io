---
sourceHash: "68064ad1feeb"
title: "Termide 0.8.6: 向 Claude Code 粘贴恢复正常"
description: "termide 0.8.6 带来了什么：1 项新增、2 项修复和 2 项变更。"
date: 2026-01-11
kind: release
version: 0.8.6
cover: ./cover.jpg
coverAlt: "Termide 0.8.6 发布海报"
---

## 新增
- **i18n**：为 Git 面板和偏好设置补齐 7 种语言（de、es、fr、hi、pt、th、zh）中缺失的 25 个翻译键

## 修复
- **主题下拉菜单**：鼠标点击现在对所有条目都有效（不再只有前 12 项）
- **终端粘贴**：移除显式 flush，避免 React/Ink TUI 应用（如 Claude Code）出现溢出错误

## 变更
- **README**：新增“Why TermIDE?”对比表和快速导航链接
- **README**：修正主题截图的路径
