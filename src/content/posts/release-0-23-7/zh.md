---
sourceHash: "86f2037f07f3"
title: "Termide 0.23.7：把 Termide 用作 $EDITOR"
description: "termide 0.23.7 带来：1 项新增。"
date: 2026-06-02
kind: release
version: 0.23.7
cover: ./cover.jpg
coverAlt: "Termide 0.23.7 发布海报"
---

## 新增
- **从命令行打开文件 / 把 termide 用作 `$EDITOR`。** `termide path/to/file ...` 现在会打开指定的文件（不存在则创建），因此 termide 可以作为 `git commit`、`crontab -e`、`visudo` 等工具的编辑器 —— 这些工具此前会报错“unexpected argument”。带文件参数启动时，termide 进入轻量编辑器模式：只显示这些文件，不恢复也不保存项目会话（因此编辑提交信息不会覆盖它），关闭最后一个面板即退出 —— 像 nano 或 vim 一样把控制权交还给启动它的工具。
