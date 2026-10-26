---
sourceHash: "6485c0946cdc"
title: "Termide 0.16.3：更稳定的资源监视器"
description: "termide 0.16.3 带来了什么：2 项修复和 2 项变更。"
date: 2026-03-17
kind: release
version: 0.16.3
cover: ./cover.jpg
coverAlt: "Termide 0.16.3 发布海报"
---

<img width="1901" height="985" alt="image" src="https://github.com/user-attachments/assets/0e25829f-1135-41a6-8e8e-af2dafeef934" />

## 修复
- **应用**：状态栏中的磁盘空间现在按 tick 缓存，不再在每次渲染时调用 `statvfs`——消除了高输入频率下 NFS 挂载点可能造成的阻塞
- **应用**：统一了资源模态窗口的自动刷新间隔——CPU、内存和磁盘模态窗口都使用 `resource_monitor_interval` 配置（此前进程模态窗口硬编码为 3 秒）；默认间隔从 1 秒改为 2 秒

## 变更
- **应用**：磁盘模态窗口现在与 CPU/内存模态窗口一样按 tick 自动刷新
- **重构**：在 VFS/文件操作路径中保留原始错误类型；删除死代码；优化渲染热路径
