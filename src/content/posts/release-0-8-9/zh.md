---
sourceHash: "81ee8a5a7a51"
title: "Termide 0.8.9: 终端里的链接可点击，推送和拉取在后台进行"
description: "termide 0.8.9 带来了什么：3 项新增、4 项修复和 3 项变更。"
date: 2026-01-15
kind: release
version: 0.8.9
cover: ./cover.jpg
coverAlt: "Termide 0.8.9 发布海报"
---

## 新增
- **终端 URL 识别**：按住 Ctrl 悬停时高亮 URL（青色 + 下划线）并复制到剪贴板，Ctrl+单击在浏览器中打开
- **复用 ImagePanel**：浏览图片时复用已有面板，而不是新建面板
- **Git 异步操作**：推送/拉取在后台运行，显示旋转指示并以模态框展示结果

## 修复
- **模态框交互**：InfoModal 只在按 Enter、Escape 或点击按钮时关闭（而不是按任意键）
- **模态框显示**：Git 操作结果直接显示实际输出，不再带有 "Error:"/"Status:" 标签
- **Unicode 点击检测**：按字形簇宽度计算，修复 Unicode 文本上的按钮点击检测
- **Git 破坏 TUI 显示**：将 stdout/stderr 改为管道，防止 git 输出破坏终端显示

## 变更
- **Git 加载动画位置**：从状态栏移到 GitStatusPanel，在切换面板时更容易看到
- **界面清理**：合并重复代码并移除死代码
- **菜单结构**：重新组织菜单，并修复日志查看器的截断问题
