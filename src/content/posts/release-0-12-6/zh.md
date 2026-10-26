---
sourceHash: "0e6cf8044794"
title: "Termide 0.12.6: 新的命令行选项"
description: "termide 0.12.6 带来了什么：3 项新增、6 项变更和 4 项修复。"
date: 2026-02-22
kind: release
version: 0.12.6
cover: ./cover.jpg
coverAlt: "Termide 0.12.6 发布海报"
---

## 新增
- **CLI**：命令行参数 `--log-level`、`--no-lsp`、`--config`
- **CLI**：启动时将终端窗口/标签页标题设为 "Termide: <cwd>"
- **日志记录器**：TRACE 日志级别，并跟踪用户输入事件

## 变更
- **Git 状态**：移除平铺视图模式，始终使用树形视图
- **ProgressModal**：通过共享基础结构和结构体更新语法消除 8 个构造函数中的重复（减少 166 行）
- **API**：`PanelGroup::panels()` 和 `TerminalScreen::get_line_by_absolute()` 返回 `&[T]` 而不是 `&Vec<T>`
- **常量**：将 `MEGABYTE` 集中到 `termide-config`，移除 `panel-editor` 和 `modal` 中的重复定义
- **代码库**：移除 `build_diagnostic_maps` 中未使用的 `_buffer` 参数
- **代码库**：移除多余的 clone，消除构造函数重复，修复 unwrap

## 修复
- **编辑器**：删除选区时使换行缓存失效
- **日志**：自动滚动检查时考虑末尾的空行
- **日志**：自动滚动绑定到光标位置，而不是按键码
- **终端**：用方向键移动时更新光标位置
