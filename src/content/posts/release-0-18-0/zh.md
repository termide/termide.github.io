---
sourceHash: "ede72ddcc607"
title: "Termide 0.18.0：Blame、暂存与命令面板"
description: "termide 0.18.0 带来了什么：7 项新增、6 项变更和 6 项修复。"
date: 2026-03-26
kind: release
version: 0.18.0
cover: ./cover.jpg
coverAlt: "Termide 0.18.0 发布海报"
---

<img width="1903" height="941" alt="Screenshot From 2026-03-26 18-21-06" src="https://github.com/user-attachments/assets/6e555bfc-b275-4c3e-a7b6-1002294c12e5" />

## 新增
- **Git 暂存面板**：用于管理暂存的专用面板（通过上下文菜单执行弹出、应用、删除、差异）；可从“工具”菜单和 git-status 的“暂存”按钮打开；随会话保存
- **Git Blame**：编辑器内联 blame 注释（Alt+B），显示作者、时间、提交哈希和摘要；在 git 仓库中默认启用；异步加载
- **命令面板**：通过 Ctrl+Shift+P 快速访问所有命令
- **LSP 查找引用**：按 Shift+F12 打开引用面板，显示符号在整个项目中的所有用法
- **LSP 重命名符号**：按 F2 通过 LSP WorkspaceEdit 重命名光标下的符号
- **主题**：4 款新主题——blue-sky（浅色）、pinky-pie（浅色）、green-backs（浅色）、billiard（深色）
- **Git 差异**：自适应差异颜色和方向键导航

## 变更
- **Git 暂存**：从 GitStatusPanel 中的内联 ViewMode 提取为独立的 `panel-git-stash` crate，并使用 SelectModal 上下文菜单
- **面板**：Git 日志、Git 暂存和 Git 差异面板现在是单例（复用已有面板，而不是创建重复的面板）
- **编辑器**：打开已打开的文件时会聚焦到现有标签页，而不是创建重复的标签页
- **模态窗口按钮**：使用高对比度的前景/背景反色，在所有主题下都清晰可读
- **终端**：F 键转义序列改用查找表
- **SFTP**：轮询间隔魔数替换为具名常量

## 修复
- **InputModal**：左右方向键现在可在“确定”/“取消”按钮之间切换（此前被文本输入处理程序截获）
- **Git**：git 仓库之外的行不再被错误地高亮
- **Git Blame**：注释渲染在正确的行上（此前错位一行）
- **Git Blame**：时间格式化显示月份范围（避免出现“0 年前”）
- **快捷键**：解决了与终端/tmux 的冲突，补充了缺失的绑定
- **配置**：`switch_directory` 快捷键现在可在 file_manager.keybindings 中配置

## 重构
- **PanelExt**：减少了已弃用的向下转型，并修复了代码重复
- **文档**：更新了快捷键参考，并以全部 3 种语言补充了 Git Blame、查找引用和重命名符号的文档
