---
sourceHash: "eb43777ee8ad"
title: "Termide 0.8.2: 编辑器中的行内 diff 与 git 标记"
description: "termide 0.8.2 带来了什么：3 项新增和 4 项修复。"
date: 2026-01-01
kind: release
version: 0.8.2
cover: ./cover.jpg
coverAlt: "Termide 0.8.2 发布海报"
---

## 新增
- **行内 diff 可视化**：在编辑器中对修改过的行进行字符级 diff 高亮（删除的文本为红色，插入的为绿色）
- **Git 边栏标记**：在编辑器行号处显示可视标记（`+` 表示新增行，`~` 表示修改行）
- **还原按钮**：在 Git 状态面板中快速还原单个文件

## 修复
- 编辑子目录中的文件时，git 命令现在能正确识别所在仓库
- 当上方有行被添加/删除时，行内 diff 的行映射能正确追踪被修改的行
- Debian 软件包（.deb）现在会把二进制文件安装到 `/usr/bin/`
- 修正 README.md 中 .deb 和 .rpm 软件包的下载链接
