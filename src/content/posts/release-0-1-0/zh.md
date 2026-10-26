---
sourceHash: "ff919889d678"
title: "Termide 0.1.0: 终端里的完整 IDE"
description: "termide 0.1.0 带来了什么：17 项新增。"
date: 2025-11-28
kind: release
version: 0.1.0
cover: ./cover.jpg
coverAlt: "Termide 0.1.0 发布海报"
---

## 新增
- Termide 首个版本，功能完备
- 基于终端的 IDE，为 15 种以上编程语言提供语法高亮
  - Rust、Python、JavaScript、TypeScript、Go、C/C++、Java、Ruby、PHP
  - Haskell、Nix、HTML、CSS、JSON、TOML、YAML、Bash、Markdown
- 智能文件管理器，TUI 界面直观易用
  - 文件类型图标及属性列
  - 识别符号链接和可执行文件
  - 完善的键盘和鼠标选择操作
  - 目录的递归 git 状态
- 集成虚拟终端，完整支持 PTY
  - Ctrl+Shift+V 粘贴，支持 bracketed paste 模式
  - 24 FPS 渲染
  - 回滚缓冲区和 ANSI 颜色支持
- 多面板布局系统
- Git 集成
  - 后台监视 git 状态，配合文件监视
  - 仓库变化时自动更新
  - 按颜色区分的状态指示
  - 被 gitignore 的文件以暗色显示
  - 支持仓库子目录
- 12 个内置主题
  - 深色：Default、Midnight、Dracula、OneDark、Monokai、Nord、Solarized Dark
  - 浅色：Atom One Light、Ayu Light、GitHub Light、Material Lighter、Solarized Light
  - 支持从配置目录加载自定义主题
- 系统资源监视
  - 实时显示 CPU 和内存占用
  - 按颜色区分的告警
- 多语言支持（英语、俄语）
  - 完整支持西里尔字母键盘布局
  - 快捷键转换保留大小写
- 所有面板和界面元素都支持鼠标
- 剪切/复制/粘贴操作的剪贴板系统
- 批量文件操作（复制、移动、删除）
- 存在未保存的更改或正在运行的进程时，退出前请求确认
- 健壮的错误处理和文件大小限制
- 文件系统变化时自动刷新目录
- 跨平台支持（Linux、macOS，Windows 通过 WSL）
- 多架构构建（x86_64、ARM64）

## 技术细节
- 使用 Rust 和 ratatui TUI 框架构建
- 使用 Crossterm 实现跨平台终端操作
- 使用 Portable-pty 实现 PTY
- 使用 Tree-sitter 实现语法高亮
- 使用 Ropey 管理文本缓冲区
- 使用 Sysinfo 监视系统资源
- 使用 pre-commit 钩子保证代码质量
- 全面的测试套件
