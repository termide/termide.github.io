---
sourceHash: "48da3cf477b2"
title: "Termide 0.11.3: 四个新主题，适应屏幕的布局"
description: "termide 0.11.3 带来了什么：4 项新增、4 项变更和 6 项修复。"
date: 2026-02-06
kind: release
version: 0.11.3
cover: ./cover.jpg
coverAlt: "Termide 0.11.3 发布海报"
---

## 新增
- **4 个新主题**：Matrix（数字雨）、Terminator（天网 HUD）、Pip-Boy（Fallout CRT）、Manuscript（中世纪羊皮纸）
- **自适应默认布局**：会话布局取决于宽度——宽终端（>= 160 列）使用 3 组布局，普通终端使用 2 组布局并带侧边栏手风琴
- **默认侧边栏中的 GitStatus**：检测到 git 仓库时，新会话会自动在侧边栏手风琴中加入 GitStatus 面板
- **诊断行缓存**：编辑器缓存诊断信息的行数，有 LSP 诊断时视口滚动更快

## 变更
- **拆分 state 模块**：将庞大的 `crates/state/src/lib.rs` 重构为子模块：`batch`、`layout`、`operations`、`pending_action`、`ui`
- **删除无用代码**：移除 7 个 crate 中未使用的函数（`clipboard::has_text`、`git::check_git_available`、`logger::get_entries`、`editor::cleanup_temp_file`、`theme::all_themes`、`theme::builtin_theme_names`、`system_monitor::cpu_usage_float`）
- **移除 text-search crate**：从工作区删除未使用的 `termide-text-search` crate
- **文档更新**：更新 README、架构文档和开发者指南（英文+俄文），反映当前的工作区结构、24 个主题、15 种语言和所有面板类型

## 修复
- **安全**：将 `time` crate 从 0.3.45 升级到 0.3.47，修复栈耗尽 DoS 漏洞（GHSA）
- **编辑器诊断**：撤销视口滚动方法中的诊断行去重，它导致光标定位错误
- **监视器注册**：修复切换会话时未注册监视器的问题；优化对 `.git/objects` 的监视排除
- **终端链接高亮**：修复终端面板中非 ASCII 内容的 Ctrl+点击链接高亮偏移
- **文件管理器 Git 根目录**：内部导航时保留 `git_root`，修复提交后刷新丢失 git 上下文
- **文件管理器重绘**：修复异步 git 状态更新完成后缺少重绘
