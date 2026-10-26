---
sourceHash: "f8d4cf282f08"
title: "Termide 0.16.0: 原生 Windows，无需 WSL"
description: "termide 0.16.0 带来了什么：9 项新增、6 项修复和 3 项变更。"
date: 2026-03-16
kind: release
version: 0.16.0
cover: ./cover.jpg
coverAlt: "Termide 0.16.0 发布海报"
---

## 新增
- **Windows**：通过 ConPTY 原生支持 Windows 11/10（无需 WSL）
- **Windows**：使用原生 Win32 API 获取磁盘空间和检测进程
- **Windows**：Windows 上默认 shell 为 Git Bash
- **Windows**：CI 发布流程中加入 Windows MSVC 构建目标
- **主题**：新的 `terminal` 主题——经典黑色背景，沿用终端自身的颜色
- **网络**：标题栏中的实时网络吞吐量监视（下载/上传）
- **安全**：脚本加载器中校验符号链接——防止目录穿越
- **安全**：后台 git 操作（push/pull/fetch）30 秒超时
- **i18n**：在全部 15 种语言中加入 `git_operation_timed_out` 翻译

## 修复
- **SSH**：幽灵分隔线和拖动合并，使 SSH 调整大小更平滑
- **文件管理器**：即使设置了可执行位，源代码文件也在编辑器中打开
- **文档**：同步主题数量（24→25）、语言数量（15+→21），移除重复的文档链接
- **文档**：修正 deb 软件包描述中的语言数量（19→21）
- **代码**：清理 PR #9、#10、#11 遗留的格式问题和无用代码
- **构建**：可执行权限相关变量置于 `#[cfg(unix)]` 之下

## 变更
- **性能**：在 Windows 上用原生 Win32 API 取代 PowerShell 子进程调用
- **文档**：在全部 3 种语言的文档中加入原生 Windows 安装章节
- **文档**：更新平台列表，加入原生 Windows 支持
