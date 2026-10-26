---
sourceHash: "e6ef26186e48"
title: "Termide 0.23.11：多个 Git 状态面板并排显示"
description: "termide 0.23.11 带来：1 项新增和 1 项安全修复。"
date: 2026-06-05
kind: release
version: 0.23.11
cover: ./cover.jpg
coverAlt: "Termide 0.23.11 发布海报"
---

## 新增
- **多个 Git 状态面板。** 打开 Git 状态（`Alt+G` / 工具菜单）现在总是新建一个面板，而不是聚焦已有的面板，因此可以并排监视多个仓库 —— 每个面板通过下拉列表跟踪自己的仓库。

## 安全
- SSH askpass 辅助程序现在通过直接写入 stdout 而不是 `print!` 宏把密码短语交给 ssh。行为没有变化（ssh 通过它自己拥有的管道读取 —— 从不经过终端或日志）；这只是为了避免静态分析把 askpass 约定误判为明文日志记录。
