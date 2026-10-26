---
sourceHash: "c3d55ffa3922"
title: "Termide 0.8.4: 终端选区不再跑偏，Termide 上架 AUR"
description: "termide 0.8.4 带来了什么：2 项新增和 5 项修复。"
date: 2026-01-07
kind: release
version: 0.8.4
cover: ./cover.jpg
coverAlt: "Termide 0.8.4 发布海报"
---

## 新增
- **CI/CD 自动化**：发布时通过 GitHub Actions 自动更新 AUR 和 Homebrew
- **AUR 软件包已发布**：`termide`（源码）和 `termide-bin`（二进制）现已上架 AUR

## 修复
- **终端文本选择**：选区现在使用缓冲区的绝对坐标
- **选区保持**：在回滚缓冲中滚动时，选区跟随文本移动
- **Ctrl+Shift+C**：用于复制终端选区的快捷键
- **选区清除**：键盘输入时清除选区
- **行尾空白**：复制所选文本时予以保留
