---
sourceHash: "52e4f651a25f"
title: "Termide 0.17.1：Windows 修复"
description: "termide 0.17.1 带来了什么：2 项修复和 3 项变更。"
date: 2026-03-21
kind: release
version: 0.17.1
cover: ./cover.jpg
coverAlt: "Termide 0.17.1 发布海报"
---

<img width="1907" height="950" alt="Screenshot From 2026-03-21 20-31-23" src="https://github.com/user-attachments/assets/0ad0afbe-281e-4ff5-bfb9-e6e1b5f23565" />

## 修复
- **Windows**：会话文件现在能正确保存——通过 `Path::components()` 去掉盘符前缀（`C:\`），防止会话被写入项目根目录
- **Windows**：所有界面面板中的三角符号 `▶`（U+25B6）替换为兼容 WGL4 的 `►`（U+25BA）——修复了在 Windows 控制台默认字体中显示为方块/豆腐块的问题

## 变更
- **重构**：`panel-file-manager/src/lib.rs` 拆分为职责单一的模块——`SelectionState`→`selection.rs`，`NavigationState`→`navigation.rs`，git 跟踪→`git_status.rs`，文件打开逻辑→`operations.rs`；文件从 2694 行缩减到 2143 行
- **重构**：加固了 LSP 服务器的互斥锁守卫，防止线程 panic 导致锁中毒（`unwrap()` → `unwrap_or_else(|e| e.into_inner())`）
- **重构**：在多个 crate 中消除了 29 处冗余的字符串分配（`to_string_lossy().to_string()` → `into_owned()`）
