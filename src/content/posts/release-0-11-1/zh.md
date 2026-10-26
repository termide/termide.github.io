---
sourceHash: "cdbe0c51813f"
title: "Termide 0.11.1: 折叠的面板不再干活"
description: "termide 0.11.1 带来了什么：1 项新增、3 项变更和 4 项修复。"
date: 2026-02-01
kind: release
version: 0.11.1
cover: ./cover.jpg
coverAlt: "Termide 0.11.1 发布海报"
---

## 新增
- **109 个新测试**：在 8 个 crate 中补充测试，覆盖关键缺口（layout、config、buffer、clipboard、core、git、i18n、session）

## 变更
- **折叠即过期优化**：折叠的面板跳过 tick/监视器/git/LSP 后台工作；再次展开时刷新一次
- **感知展开状态的迭代器**：为 LayoutManager 添加 `iter_all_panels_with_expanded_state_mut()` 和 `iter_expanded_panels_mut()`
- **LSP 轮询仅限展开的编辑器**：加载状态只为可见的编辑器面板更新

## 修复
- **CI/安全**：跨平台构建改用内置（vendored）OpenSSL，修复 macOS 上的 statvfs 类型，日志中隐去凭据
- **SFTP 过期问题**：本地文件系统/git 事件不再把远程面板标记为过期（避免重连失败）
- **VFS 加载动画卡住**：即使折叠，FileManager 的 tick 也总会取空 VFS 和 git 状态的接收端，防止加载动画卡住
- **VFS 错误取出**：修复 FileManager tick 中的提前返回，它导致 VFS 的错误结果无法被处理
