---
sourceHash: "79afebbc7358"
title: "Termide 0.24.0：面板中的数据库，Android 上的 Termide"
description: "termide 0.24.0 带来：2 项新增和 1 项修复。"
date: 2026-06-07
kind: release
version: 0.24.0
cover: ./cover.jpg
coverAlt: "Termide 0.24.0 发布海报"
---

## 新增
- **数据库查看器（只读）。** 通过路径为数据库 URL（`sqlite:///…`、`postgres://…`、`mysql://…`）的书签浏览 **SQLite**、**PostgreSQL** 和 **MySQL/MariaDB** 表。面板在后台连接，并以带单元格光标的二维网格显示行，支持滑动窗口分页、单列服务端排序（升序 → 降序 → 不排序）、按类型感知的逐列过滤（以 `AND` 组合）、整行详情对话框（复制为 TSV / JSON / INSERT），以及单元格/行复制。当 URL 中省略了数据库时（PostgreSQL/MySQL），会有一个选择器让你挑选（默认自动选中第一个）；面板会跨会话恢复。查询在后台运行时中执行，因此界面永不阻塞；一切都严格只读（仅 `SELECT`/目录查询）。操作键可在 `[database.keybindings]` 下配置并显示在帮助中；鼠标可以打开选择器、点击列标题排序，以及点击单元格移动光标。参见[数据库查看器](https://github.com/termide/termide/blob/main/doc/zh/database.md)。
- **Android / Termux 支持。** 发布版本现在包含一个可在 Termux 中运行的静态链接 `aarch64-unknown-linux-musl` 二进制文件；参见安装文档。

## 修复
- 操作面板不再为脚本/命令操作提供 **暂停**（这从来都无法真正实现）；**取消** 仍会通过结束进程来停止它们。暂停/继续 仍保留给文件传输。
