---
sourceHash: "4dc36d04b55d"
title: "Termide 0.7.0: 图片直接在面板中打开"
description: "termide 0.7.0 带来了什么：6 项新增、3 项修复和 2 项变更。"
date: 2025-12-18
kind: release
version: 0.7.0
cover: ./cover.jpg
coverAlt: "Termide 0.7.0 发布海报"
---

## 新增
- **ImagePanel**：借助终端图形协议（Kitty、Sixel、iTerm2）原生预览图片
- **调整面板大小**：用鼠标拖动面板边框来调整大小
- **F3 键**：查看文件而不执行（可执行文件会在编辑器中打开）
- **Shift+Enter**：强制用系统应用打开文件（xdg-open）
- **按 Enter 执行**：在终端中直接运行可执行文件
- 智能识别文件类型：位图 → ImagePanel，矢量图/视频/二进制文件 → xdg-open

## 修复
- 会话列表：光标现在定位在当前会话上
- 编辑器：智能自动换行中的差一错误
- 另存为对话框：现在使用文件管理器的工作目录

## 变更
- 将 `min_panel_width` 配置拆分为多个独立参数，以便更精细地控制
- 二进制文件检测提取为共享工具函数（`core::util::is_binary_file`）

## 文档
- 更新文件管理器文档，加入新的快捷键（F3、Shift+Enter）
- 更新全部 9 种语言的帮助页面
