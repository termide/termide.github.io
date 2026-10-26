---
sourceHash: "373ea637f593"
title: "Termide 0.9.1: Linux 控制台配色，远程分支"
description: "termide 0.9.1 带来了什么：3 项新增、5 项变更和 2 项修复。"
date: 2026-01-21
kind: release
version: 0.9.1
cover: ./cover.jpg
coverAlt: "Termide 0.9.1 发布海报"
---

## 新增
- **Linux TTY 支持**：为 Linux 控制台/帧缓冲（TERM=linux）提供原生终端配色
- **显示远程分支**：Git 状态面板显示本地不存在的远程分支
- **DECSTBM 滚动区域**：为终端应用正确支持 CSI 滚动区域

## 变更
- **终端重构**：提取工具模块（clipboard、disk_space、link_detection、shell_utils）
- **编辑器重构**：将 core.rs 拆分为职责单一的模块（LSP、movement、search、text）
- **Git 重构**：将单体的 lib.rs 拆分为 command、commits、files、operations 模块
- **性能**：缓存用于链接识别的正则表达式，减少面板代码重复
- **DRY 改进**：提取在各面板中打开文件/终端的辅助函数

## 修复
- **同步输出**：修复退出 sync_output 模式（CSI ? 2026 l）时的缓存失效问题
- **CI 发布说明**：修复从 CHANGELOG.md 提取发布说明的问题

## 性能
- **终端**：降低 SSH 输入延迟和 htop 渲染开销
