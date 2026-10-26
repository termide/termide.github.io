---
sourceHash: "c79fc9f03ac4"
title: "Termide 0.5.4: 在已打开的会话之间切换"
description: "termide 0.5.4 带来了什么：2 项新增和 3 项修复。"
date: 2025-12-15
kind: release
version: 0.5.4
cover: ./cover.jpg
coverAlt: "Termide 0.5.4 发布海报"
---

## 新增
- 会话切换模态框（Alt+M → 会话），用于在已打开的 termide 会话之间切换
- 文件监视器初始化时显示静态加载指示（取代原先的 Braille 动画）

## 修复
- 统一自动换行时的光标定位计算
- 开启自动换行时鼠标选区的偏移问题
- 磁盘空间指示的格式（去掉单位前的空格："411/467GB"）

## 性能
- 文件监视器现在使用 `ignore` crate 跳过被 .gitignore 忽略的目录

## 文档
- 更新 README 与架构文档中的项目结构，反映工作区 crate 的划分
- 更新 i18n 章节，列出全部 9 种支持的语言
- 在编辑器帮助文件中加入 Ctrl+D（复制当前行）
