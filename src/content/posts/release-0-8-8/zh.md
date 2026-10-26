---
sourceHash: "0b4ef9836907"
title: "Termide 0.8.8: 可配置的快捷键"
description: "termide 0.8.8 带来了什么：1 项安全修复、2 项新增和 3 项变更。"
date: 2026-01-13
kind: release
version: 0.8.8
cover: ./cover.jpg
coverAlt: "Termide 0.8.8 发布海报"
---

## 安全
- **lru 漏洞**：通过升级到 lru 0.16.3 修复 GHSA-rhfx-m35p-ff5j（IterMut 违反 Stacked Borrows 规则）

## 新增
- **可配置的快捷键**：通过 config.toml 完整自定义所有面板的快捷键
- **共享抽象**：新增 ClickTracker、Viewport、SelectionStyle 等工具，减少重复代码（DRY）

## 变更
- **依赖**：升级 ratatui 0.29→0.30、ratatui-image 5→10
- **性能**：热点路径提速 50–500 倍（字形簇迭代、git diff 标记、LRU 淘汰、gitignore 检查）
- **重构**：在 GitStatusPanel 和 FileManager 中接入 ClickTracker（节省约 40 行代码）
