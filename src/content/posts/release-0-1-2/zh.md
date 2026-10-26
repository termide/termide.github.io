---
sourceHash: "46a54dd7cf46"
title: "Termide 0.1.2: 复制行，可配置的制表符宽度"
description: "termide 0.1.2 带来了什么：5 项新增、4 项变更和 2 项修复。"
date: 2025-11-28
kind: release
version: 0.1.2
cover: ./cover.jpg
coverAlt: "Termide 0.1.2 发布海报"
---

## 新增
- 复制当前行/选区功能（`Ctrl+D`）
- 替换操作的反馈（“已替换 N 处”消息）
- 在编辑器中打开前检查文件大小（上限 100 MB）
- 支持配置制表符宽度（从 `config.toml` 读取）
- 发布流程中加入 Crates.io 发布

## 变更
- 改用不带 'v' 前缀的语义化版本标签（例如 `0.1.2` 而不是 `v0.1.2`）
- Cargo.toml 中的许可证从双许可（MIT OR Apache-2.0）改为仅 MIT
- 改进整个应用的错误处理
  - 主题解析中用平稳的错误处理取代 panic
  - 解析出错时回退到硬编码的默认主题
  - 改进终端中的互斥锁错误处理（22 处 `.lock().unwrap()` 改为 `.expect()`）
- 为过大的文件添加清晰的错误消息

## 修复
- 无效主题文件导致应用崩溃
- 编辑器的制表符宽度现在遵循用户配置
