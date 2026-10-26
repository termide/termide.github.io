---
sourceHash: "2bb1dc9b1b84"
title: "Termide 0.12.3: 正确处理 CRLF 换行符"
description: "termide 0.12.3 带来了什么：1 项新增、1 项变更和 4 项修复。"
date: 2026-02-09
kind: release
version: 0.12.3
cover: ./cover.jpg
coverAlt: "Termide 0.12.3 发布海报"
---

## 新增
- **状态栏**：编辑器状态栏中，在编码（UTF-8）之前显示 LF/CRLF 换行符指示

## 变更
- **代码库**：对 `LineEnding` 枚举去重——只在 buffer crate 根部定义一次，内部复用

## 修复
- **缓冲区**：加载文件时将 CRLF 换行符规范化为 LF，并保留原始类型用于保存
- **编辑器**：在基于 VTE 的终端中粘贴时规范化换行符
- **终端**：在 VTE 终端上添加 Alt+Enter 作为输入换行的备用方式
- **代码库**：减少 VFS 和渲染模块中的重复代码并提高安全性
