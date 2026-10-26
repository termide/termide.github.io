---
sourceHash: "170c640e91a4"
title: "Termide 0.17.0：颜色预览，九款新主题"
description: "termide 0.17.0 带来了什么：2 项新增、5 项修复和 1 项变更。"
date: 2026-03-20
kind: release
version: 0.17.0
cover: ./cover.jpg
coverAlt: "Termide 0.17.0 发布海报"
---

<img width="1901" height="943" alt="Screenshot From 2026-03-20 23-46-24" src="https://github.com/user-attachments/assets/68383569-25fb-4490-b060-292a6d9c2f6c" />

## 新增
- **界面 / 编辑器 / 终端**：`Ctrl+click` 弹出十六进制颜色预览——点击 `#rgb` 或 `#rrggbb` 值时，按住按键期间会显示色块；在编辑器和终端面板中均可使用
- **主题**：9 款新的内置主题：`ayu-dark`、`catppuccin-macchiato`、`everforest`、`github-dark`、`gruvbox`、`kanagawa`、`material-ocean`、`rosepine`、`tokyonight`

## 修复
- **主题**：菜单栏项和编辑器光标行现在在 `accented_bg` 表面上使用 `accented_fg`——修复了 `windows-98`、`dos-navigator` 等主题中对比度过低的问题
- **主题**：改进了经典复古主题（`norton-commander`、`volkov-commander`、`far-manager`、`windows-95`）中禁用颜色的对比度；`github-light` 的错误颜色更正为 GitHub 红
- **界面**：通过 unicode-width 的分支版本修复了印度系文字的光标错位——编辑包含天城文、孟加拉文或其他复杂文字的文本时，光标不再漂移
- **文件管理器**：右方向键现在只在树视图中展开目录，不会再同时进入该目录
- **应用**：修复了在选择“全部覆盖”冲突模式时复制目录会出现双重嵌套的问题

## 变更
- **重构**：在多个 crate 中移除了泄漏的 pub 导出和无用方法，并简化了正则静态变量（行为不变）
