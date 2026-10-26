---
sourceHash: "db2b44a2fe3d"
title: "Termide 0.18.1：可靠的自动刷新"
description: "termide 0.18.1 带来了什么：7 项修复。"
date: 2026-03-28
kind: release
version: 0.18.1
cover: ./cover.jpg
coverAlt: "Termide 0.18.1 发布海报"
---

## 修复
- **文件管理器**：在所有写入点（新建、导航、GoHomeDir）规范化 `current_path`，修复符号链接/绑定挂载导致的监视器路径不匹配——这是自动刷新反复失效的根本原因
- **Git**：跳过对被 git 忽略的文件的差异着色（新增 `git check-ignore` 检查）
- **Git**：当远程引用缺失时（克隆后远程为空），将本地提交计为领先提交
- **监视器**：根据 git 事件规范化仓库根目录；检测 MERGE_HEAD、FETCH_HEAD、REBASE_HEAD、CHERRY_PICK_HEAD
- **终端**：复制时去除软换行行中多余的换行符（按行跟踪 `wrapped` 标志）
- **模态窗口**：在其余所有模态窗口（info、info_action、editable_select、tree_search）的按钮上使用高对比度的前景/背景反色
- **终端**：为缓冲区与 wrapped 标志的长度同步添加 debug_assert
