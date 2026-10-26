---
sourceHash: "d2533e0e1db9"
title: "Termide 0.15.3: 对话框与翻译修复"
description: "termide 0.15.3 带来了什么：1 项新增、6 项修复和 1 项变更。"
date: 2026-03-13
kind: release
version: 0.15.3
cover: ./cover.jpg
coverAlt: "Termide 0.15.3 发布海报"
---

## 新增
- **Git 状态**：单击目录图标即可展开/折叠树节点

## 修复
- **对话框**：修正退出确认的标题和按钮布局
- **对话框**：调整 InputModal 中复选框的缩进和间距
- **i18n**：添加 `modal_confirm_title` 键——ConfirmModal 不再以“是”作为标题
- **i18n**：本地化文件管理器粘贴确认中硬编码的“确认”字符串
- **文档**：修正 README 中支持语法高亮的语言数量（19→21）
- **文档**：更新 CONTRIBUTING.md，反映当前的 i18n 架构（15 种语言，基于 TOML）

## 变更
- **重构**：编辑器关闭对话框改用 ChoiceModal 取代 SelectModal
