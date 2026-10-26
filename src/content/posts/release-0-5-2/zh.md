---
sourceHash: "a3e2e8684c1c"
title: "Termide 0.5.2: 应用等待输入时终端也能滚动"
description: "termide 0.5.2 带来了什么：2 项修复和 2 项变更。"
date: 2025-12-15
kind: release
version: 0.5.2
cover: ./cover.jpg
coverAlt: "Termide 0.5.2 发布海报"
---

## 修复
- 等待用户输入时终端无法滚动（滚动事件现在绕过模态检查）
- i18n 占位符显示为 '{}' 而不是实际值（全部 9 个语言文件都已改用具名占位符）

## 变更
- 移除项目根目录下重复的 `/i18n/` 文件夹（那是一份未使用的副本）
- 将 `/help/` 文件移至 `crates/panel-misc/help/`，使代码组织更清晰
