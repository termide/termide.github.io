---
sourceHash: "6ee38e7aebae"
title: "Termide 0.12.2: Termide 会说中文了"
description: "termide 0.12.2 带来了什么：3 项新增、1 项变更和 1 项修复。"
date: 2026-02-08
kind: release
version: 0.12.2
cover: ./cover.jpg
coverAlt: "Termide 0.12.2 发布海报"
---

## 新增
- **i18n**：完整的中文（zh）本地化——翻译了所有剩余的英文界面字符串
- **i18n**：在所有语言中翻译 git 操作标签（暂存、取消暂存、提交等）
- **文档**：添加完整的中文文档（doc/zh/）和 README.zh.md

## 变更
- **文档**：更新英文和俄文文档，加入新的按键绑定、菜单项、面板类型、LSP/Vim 章节，并更新配置示例

## 修复
- **大纲面板**：CJK 标题不再被截断为第一个字符——定位时使用显示宽度而不是字符索引
