---
sourceHash: "7f2aa8e8a8c4"
title: "Termide 0.12.4: YAML 和 XML 大纲，git 与会话修复"
description: "termide 0.12.4 带来了什么：1 项新增、5 项变更和 4 项修复。"
date: 2026-02-17
kind: release
version: 0.12.4
cover: ./cover.jpg
coverAlt: "Termide 0.12.4 发布海报"
---

## 新增
- **大纲**：tree-sitter 不可用时，大纲面板对 YAML 和 XML 回退到正则表达式

## 变更
- **编辑器**：将视口/滚动逻辑提取到专门的 `editor_viewport.rs` 模块（core.rs 减少 572 行）
- **编辑器**：提取通用的 `poll_receiver` 辅助函数，消除 LSP 轮询方法中的重复
- **代码库**：用具名常量（`PROGRESS_THROTTLE_FILES`、`EXECUTABLE_MASK`）取代魔法数字
- **代码库**：在 VFS 的锁/通道/FTP 操作中保留错误上下文，而不是丢弃
- **代码库**：用 `is_none_or` 取代 `is_none() + unwrap()` 模式，用单次遍历检查取代两次 `.all()` 迭代

## 修复
- **Git**：未配置远程/上游时，将本地提交数显示为领先（ahead）
- **Git 状态**：外部执行 `git init` 后，刷新时重新发现 git 仓库
- **会话**：恢复非空的孤立未保存缓冲区，而不是删除它们
- **编辑器**：撤销/重做、替换和 vim 编辑时使自动换行缓存失效
