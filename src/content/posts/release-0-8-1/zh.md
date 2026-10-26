---
sourceHash: "6c7480342a27"
title: "Termide 0.8.1: 按 Alt+G 打开 Git 状态"
description: "termide 0.8.1 带来了什么：5 项新增和 4 项修复。"
date: 2025-12-28
kind: release
version: 0.8.1
cover: ./cover.jpg
coverAlt: "Termide 0.8.1 发布海报"
---

## 新增
- **Alt+G 快捷键**：快速打开 Git 状态面板或将焦点切换到它
- **Git 状态导航**：空间导航——用上/下在各分区之间移动，用左/右在行内移动
- **Git 状态吸顶标题**：滚动时“已暂存”/“未暂存”标题保持可见
- **CommitModal 改进**：支持 PageUp/PageDown，文本框内支持鼠标滚动
- **终端 Shift+Enter**：插入换行，用于多行输入

## 修复
- Git 状态面板：PageDown 现在能完整滚动，显示所有文件
- 终端：Shift+Enter 发送换行，而不是 CSI u 转义序列
- 编辑器：鼠标滚动后不再跳回光标位置
- CommitModal：文本框边框现在使用正确的强调色

## 文档
- 在终端文档中加入 Shift+Enter 快捷键（英文/俄文）
- 在界面文档中加入 Git 面板菜单项和 Alt+G 快捷键（英文/俄文）
- 更新全部 9 种语言的帮助文件，加入 Git 面板快捷键
