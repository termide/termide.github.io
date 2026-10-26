---
sourceHash: "867ac00c950d"
title: "Termide 0.5.3: git 状态更稳定，不再误复制到剪贴板"
description: "termide 0.5.3 带来了什么：4 项修复和 1 项变更。"
date: 2025-12-15
kind: release
version: 0.5.3
cover: ./cover.jpg
coverAlt: "Termide 0.5.3 发布海报"
---

## 修复
- 重新加载目录时 git 状态颜色闪烁（刷新期间保留缓存）
- 查看仓库根目录时，提交后 `.git` 目录的日期不更新
- 在终端中单击鼠标会把字符复制到剪贴板（现在只有拖动选择才会复制）
- 文件管理器 git 状态的更新时机，以及菜单栏中 CPU 的显示格式

## 变更
- 将 git 监视器与文件系统监视器合并为单一的 `UnifiedWatcher`，各自使用独立的防抖间隔（文件 300ms，git 1000ms）

## 性能
- 优化渲染并减少内存分配
