---
sourceHash: "40bb3f4673de"
title: "Termide 0.5.1: 更快的终端面板"
description: "termide 0.5.1 带来了什么：2 项变更和 3 项修复。"
date: 2025-12-13
kind: release
version: 0.5.1
cover: ./cover.jpg
coverAlt: "Termide 0.5.1 发布海报"
---

## 变更
- 终端面板性能优化
  - 在事件循环中使用 `has_pending_output()`，更高效地触发重绘
  - 预先分配 spans Vec，减少内存分配
  - 对第 0 行的操作使用 O(1) 的 VecDeque 方法
- 不再发布到 crates.io（仅通过 GitHub Releases 及 deb/rpm 分发）

## 修复
- 文件信息模态框中的 git 状态现在显示实际的变更数量
- 进入子目录时，文件管理器光标重置到位置 0
- modal、panel-editor、ui-render 各 crate 的版本号保持一致
