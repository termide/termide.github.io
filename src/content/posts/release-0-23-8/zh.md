---
sourceHash: "ee48a9d44c34"
title: "Termide 0.23.8：小终端上不再崩溃"
description: "termide 0.23.8 带来：1 项修复。"
date: 2026-06-03
kind: release
version: 0.23.8
cover: ./cover.jpg
coverAlt: "Termide 0.23.8 发布海报"
---

## 修复
- **在矮或窄的终端上打开下拉列表时崩溃。** 主题/菜单/语言/git 选择器弹窗按条目数量确定自身大小，却没有限制在终端范围内，因此比屏幕更高或更宽的列表会绘制到缓冲区边缘之外并引发 panic（例如在 24 行的终端上打开 选项 → 主题，或在小窗口中打开 git 分支/stash 选择器）。现在弹窗会被限制在可见区域内，改为滚动显示。
