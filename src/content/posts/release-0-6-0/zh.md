---
sourceHash: "243dc9268fd7"
title: "Termide 0.6.0: 查找文件，也查找文件里的内容"
description: "termide 0.6.0 带来了什么：4 项新增和 3 项修复。"
date: 2025-12-16
kind: release
version: 0.6.0
cover: ./cover.jpg
coverAlt: "Termide 0.6.0 发布海报"
---

## 新增
- 文件搜索模态框（Ctrl+Shift+P），支持异步 glob 模式匹配
- 内容搜索模态框（Ctrl+Shift+F），支持用正则表达式搜索文件中的文本
- 在偏好设置中通过嵌套下拉菜单选择主题
  - 每个主题都有颜色预览，展示背景/前景色和强调色
  - 主题立即生效，并保存到配置中
- 主题系统重构：为主题系统提供 `all_theme_names()` 和 `get_by_name()` API

## 修复
- 在浅色主题下，语法高亮回退到主题的前景色
- 会话模态框：当前会话以强调色高亮显示，并且可以选中
- 会话模态框与文件搜索的交互体验改进

## 文档
- 新增文件搜索（Ctrl+Shift+P）与内容搜索（Ctrl+Shift+F）快捷键说明
- 更新主题文档，介绍新的通过菜单选择主题的方式
