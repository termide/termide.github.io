---
sourceHash: "ad0cba031940"
title: "Termide 0.15.1: 在终端中搜索"
description: "termide 0.15.1 带来了什么：3 项新增和 2 项修复。"
date: 2026-03-11
kind: release
version: 0.15.1
cover: ./cover.jpg
coverAlt: "Termide 0.15.1 发布海报"
---

## 新增
- **终端**：用 `Ctrl+F` 搜索文本——在回滚缓冲区和可见屏幕中搜索，带匹配高亮、导航和自动滚动
- **核心**：`Searchable` trait，在编辑器、日志和终端面板中统一搜索
- **搜索对话框**：按钮焦点区域，支持键盘导航（Down/Up 切换区域，Left/Right 在按钮之间移动）

## 修复
- **终端**：默认搜索按键从 `Ctrl+Shift+F` 改为 `Ctrl+F`——宿主终端（GNOME Terminal 等）会拦截 `Ctrl+Shift+F`
- **日志**：搜索进行中暂停自动滚动，使视口停留在当前匹配项上
