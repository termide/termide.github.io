---
sourceHash: "3799ac2a7b10"
title: "Termide 0.12.5: Git 状态适应面板宽度"
description: "termide 0.12.5 带来了什么：1 项新增、5 项变更和 2 项修复。"
date: 2026-02-18
kind: release
version: 0.12.5
cover: ./cover.jpg
coverAlt: "Termide 0.12.5 发布海报"
---

## 新增
- **Git 状态**：根据面板宽度（>= 35 列）在树形视图和平铺视图之间自动切换

## 变更
- **代码库**：提取共享常量 `TREE_VIEW_MIN_WIDTH` 和 `MAX_RECURSION_DEPTH`
- **代码库**：将 `SpeedTracker` 合并到 `file-ops` crate，并从 `state` 重新导出
- **终端**：通过 `set_env`/`spawn_reader`/`build` 辅助函数消除构造函数中的重复代码
- **Git 状态**：树形前缀的计算从 O(n²) 优化为 O(n) 的反向扫描
- **剪贴板**：在无图形界面的系统上平稳回退，而不是 panic

## 修复
- **编辑器**：修正换行边界处和不换行模式下宽字符的光标定位
- **会话**：防止自动保存时产生重复的未保存缓冲区文件
