---
sourceHash: "5d8956226e4a"
title: "Termide 0.15.4: 通过 SSH 使用剪贴板、响铃提醒和后台 fetch"
description: "termide 0.15.4 带来了什么：3 项新增、2 项修复和 6 项变更。"
date: 2026-03-15
kind: release
version: 0.15.4
cover: ./cover.jpg
coverAlt: "Termide 0.15.4 发布海报"
---

## 新增
- **Git 状态**：按 Ctrl+R 刷新时在后台执行 `git fetch`
- **应用**：git push/pull 完成和终端退出时发出响铃提醒
- **剪贴板**：SSH/无图形界面会话中回退到 OSC 52 剪贴板

## 修复
- **终端**：防止 UTF-8 搜索（西里尔字母、emoji）时 panic——按匹配长度前进，而不是每次 1 个字节
- **文件管理器**：在树形视图中进入嵌套目录时使用完整路径

## 变更
- **性能**：跳过不必要的鼠标处理，简化 OSC 52 逻辑
- **性能**：鼠标悬停时不再重置空闲计时器和强制重绘
- **性能**：文件管理器渲染中用静态 `PAD` 切片取代 `.repeat()` 填充
- **性能**：在 `MenuLayout` 结构体中缓存菜单布局，避免重复分配内存
- **重构**：改进批处理器中的 VFS 错误日志
- **重构**：移除无用的 `find_visible_by_path` 方法
