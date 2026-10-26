---
sourceHash: "3220b35f732d"
title: "Termide 0.22.0：手风琴与分屏合为一种布局"
description: "termide 0.22.0 带来了什么：2 项新增、5 项变更和 7 项修复。"
date: 2026-04-30
kind: release
version: 0.22.0
cover: ./cover.jpg
coverAlt: "Termide 0.22.0 发布海报"
---

## 新增
- **布局**：统一的手风琴 + 分屏布局模型，支持三种模式的标题栏拖动和垂直分隔线的实时调整大小（#18）
- **布局**：分屏模式下的边框，以及用 `Alt+Shift+=` / `Alt+Shift+-` 按步长调整获得焦点的面板大小

## 变更
- **快捷键**：在匹配器边界处进行一次端到端的规范化——西里尔字母→拉丁字母、撤销 Shift 产生的字形变化、去除字母上的 Caps Lock 影响，以及仅 VTE 才有的旧式特殊行为（`Ctrl+7→Ctrl+/`、`Ctrl+4→Ctrl+\`）；在快捷键选择器中内联显示冲突警告；对需要 Kitty 协议的组合键在启动时发出警告
- **快捷键默认值**：更严谨的标点符号默认值——`panel_grow_vertical`/`panel_shrink_vertical` → `Alt+Shift+=`/`Alt+Shift+-`；`open_sessions` → `Alt+\`；`*.switch_directory` → `Ctrl+\`；`editor.toggle_comment` → `["Ctrl+/", "Ctrl+."]`；`editor.replace_all` → `["Ctrl+Alt+R", "Alt+R"]`；`editor.trigger_completion` → `["Ctrl+J", "Ctrl+Space"]`
- **布局**：手风琴模式和分屏模式共用同一个布局模型；调整大小、拖动和键盘调整大小的行为在两种模式下完全一致
- **VFS**：通过基于闭包的 `dispatch_remote` 辅助函数消除了 `VfsManager` 提供程序分发中的重复代码；语义保持不变（读锁作用域、缓存失效）
- **清理**：在 `i18n`/`highlight`/`panel-git-status` 中删除了无用的辅助函数；屏蔽了两条 `clippy --all-targets` lint（仅限测试）；收紧了 `panel-git-status` 中树辅助函数的可见性

## 修复
- **命令**：通过模态窗口编辑命令后，现在会使缓存的快捷键表失效，因此重新绑定立即生效，并在重启后保留
- **命令**：切换会话后会遵循项目本地的 `commands.toml`——在 `switch_to_session` / `create_new_session` / `move_session_to` 中，`project_root` 变化时会重置 `commands_registry` 和 `hotkey_table`
- **命令**：改进了命令配置的编辑流程和本地定义的处理
- **鼠标**：滚轮事件会传递给光标下方的面板，而不是当前活动面板
- **操作面板**：状态图标已统一，与界面的其余部分保持一致
- **文件操作**：在各复制路径中统一了符号链接目标的处理
- **终端面板**：输入透传与更多 shell / TUI 程序兼容

## 文档
- 更新了快捷键参考（`doc/{en,ru,zh}/keybindings.md`）；记录了新的面板步进调整大小功能；更新了拖动覆盖层的说明文字
- 通用化了共享的项目技能，使非 Anthropic 的代理也能运行它们
