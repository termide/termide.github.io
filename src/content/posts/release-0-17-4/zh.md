---
sourceHash: "2f3f840a9f9c"
title: "Termide 0.17.4：按变更类型过滤 git 差异"
description: "termide 0.17.4 带来了什么：1 项新增和 3 项修复。"
date: 2026-03-24
kind: release
version: 0.17.4
cover: ./cover.jpg
coverAlt: "Termide 0.17.4 发布海报"
---

<img width="1902" height="943" alt="Screenshot From 2026-03-24 17-00-02" src="https://github.com/user-attachments/assets/e1f37ec6-cff8-4951-9618-ef56dbf73b06" />

## 新增
- **Git 差异**：文件过滤下拉框——点击 `[filter ▼]` 控件，可只显示已添加、已修改或已删除的文件

## 修复
- **Git**：未跟踪目录中的子目录现在也会以绿色高亮（此前只高亮顶层的未跟踪目录）
- **文件管理器 / Git 状态**：对已删除文件的操作（移动、复制、重命名）现在会被忽略，以避免出错
- **编辑器**：未跟踪文件的所有行都显示为已添加（绿色），与 git 状态的行为一致

## 性能
- **核心**：`Panel::prepare_render()` 现在接受 `Arc<Config>` 而不是 `&Config`，消除了每帧的内存分配
- **编辑器**：在行渲染中预先分配语法样式向量
