---
sourceHash: "de0ae0d32aee"
title: "Termide 0.6.1: 主题实时预览"
description: "termide 0.6.1 带来了什么：2 项新增和 3 项修复。"
date: 2025-12-16
kind: release
version: 0.6.1
cover: ./cover.jpg
coverAlt: "Termide 0.6.1 发布海报"
---

## 新增
- 主题实时预览：在主题选择菜单中移动光标时即时切换主题
- 取消（Esc）时恢复原主题，确认（Enter）时保存

## 修复
- 再次点击菜单时将其收起（偏好设置下拉菜单在第二次点击时关闭）
- 嵌套子菜单的开关（主题菜单在再次点击时关闭）
- i18n：time_*_ago 系列函数的复数形式（修复会话列表中出现 "{plural}" 的问题）

## 性能
- Git 状态：每次调用启动的 git 进程从 6 个减少到 2 个（减少 66%）
- RenamePattern::apply()：改用 Vec<&str> 代替 Vec<String>，减少内存分配

## 重构
- 提取 CursorNavigation trait，用于模态框中的光标导航（DRY，减少 70 行代码）
- 提取 git_command 辅助函数，减少重复
- system-monitor 与 status_bar 中的 DRY 改进
- 移除多个 crate 中的死代码（约 300 行）
