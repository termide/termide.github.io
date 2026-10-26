---
sourceHash: "34236af4b8d5"
title: "Termide 0.16.1: 日历、FTP 和 SMB"
description: "termide 0.16.1 带来了什么：4 项新增和 4 项变更。"
date: 2026-03-16
kind: release
version: 0.16.1
cover: ./cover.jpg
coverAlt: "Termide 0.16.1 发布海报"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/866a330a-5c39-4162-a2c4-4adec686e4eb" />

## 新增
- **界面**：点击时钟打开日历对话框——按月显示的网格，可按天导航（方向键，PgUp/PgDn 切换月份，Home 跳到今天）
- **界面**：彩色面板标题和改进的状态栏样式
- **Git 日志**：用 `o` / `Shift+Enter` 在浏览器中打开提交
- **VFS**：通过地址栏输入支持 FTP/FTPS 和 SMB 连接

## 变更
- **重构**：将字素簇工具函数去重并移入共享的 `termide-ui` crate
- **重构**：整理菜单栏渲染，移除 `TERMIDE_LANG` 环境变量
- **性能**：修复渲染中的内存分配和 SMB 错误处理
- **文档**：使文档与近期的功能变化保持同步
