---
sourceHash: "ae633070a588"
title: "Termide 0.16.2：自选 shell"
description: "termide 0.16.2 带来了什么：2 项新增和 5 项修复。"
date: 2026-03-16
kind: release
version: 0.16.2
cover: ./cover.jpg
coverAlt: "Termide 0.16.2 发布海报"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/54bde520-365e-4ebb-89bb-d1cf11d6ebda" />

## 新增
- **终端**：在“窗口 > 终端”下新增 shell 选择子菜单——列出所有可用的 shell，用 ● 标记默认项，并将所选项保存到配置中（#12）
- **文档**：为 shell 选择功能编写文档（en、ru、zh）

## 修复
- **终端**：按规范路径 + 文件名对选择器中的 shell 去重——消除了 NixOS 和合并 usr 发行版上的重复项，同时保留 sh/bash 为各自独立的条目
- **Windows**：将粘贴的文本合并为括号粘贴（bracketed paste）事件（#13）
- **Git**：未推送提交指示器显示的是项目的提交总数，而不是领先的提交数
- **应用**：点击菜单外部关闭菜单时清除缓存的 shell 列表
- **界面**：将“终端”移到“窗口”子菜单顶部，以便更快访问
