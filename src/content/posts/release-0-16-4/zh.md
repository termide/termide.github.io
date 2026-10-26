---
sourceHash: "f62fbf4bf1ba"
title: "Termide 0.16.4：始终放得下的 Git 按钮"
description: "termide 0.16.4 带来了什么：5 项修复和 4 项变更。"
date: 2026-03-19
kind: release
version: 0.16.4
cover: ./cover.jpg
coverAlt: "Termide 0.16.4 发布海报"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/acf5fa08-becd-403c-96c4-806904c6b4f6" />

## 修复
- **Git 状态**：在较窄的面板中，“拉取”按钮会被悄无声息地截断——现在按钮会换到下一行，而不是被裁掉
- **Git 状态**：按钮顺序改为“拉取 → 推送 → 差异 → 提交”，使最关键的同步操作排在最前并始终可见
- **Git**：未跟踪目录中的文件现在会在文件管理器的 git 状态中正确显示为“已添加”
- **应用**：`git fetch` 的错误现在会显示在状态栏中，而不是被悄悄吞掉
- **CI**：AUR 的 PKGBUILD 现在会先从仓库同步，再进行版本替换

## 变更
- **Git 状态 / 应用**：当用户进入新目录时，Git 面板（git-status、git-log）现在会同步其仓库列表，无需手动刷新即可反映当前仓库
- **重构**：`ThemeColors` 现在派生 `Copy`——消除了每个渲染帧上的堆分配
- **重构**：`GitStatusPanel` 中平行的 `unstaged_*` / `staged_*` 树字段合并为单个 `FileTree` 结构体，移除了 8 个冗余字段
- **重构**：git-status 面板中重复的标题渲染代码被提取为可复用的辅助函数（调用点由 ×4 减为 ×2）
