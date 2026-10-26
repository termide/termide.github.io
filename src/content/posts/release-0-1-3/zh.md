---
sourceHash: "473cfa70730b"
title: "Termide 0.1.3: 手风琴面板：按宽度堆叠的面板组"
description: "termide 0.1.3 带来了什么：3 项新增、2 项变更和 2 项移除。"
date: 2025-12-02
kind: release
version: 0.1.3
cover: ./cover.jpg
coverAlt: "Termide 0.1.3 发布海报"
---

## 新增
- **手风琴面板系统** - 一次重大的架构改进
  - 根据终端宽度智能堆叠面板
  - 水平排列的面板组内采用垂直手风琴布局
  - 每组只有一个展开的面板，其余折叠为标题栏
  - 可配置的面板最小宽度阈值（80 个字符）
- 新的导航快捷键：
  - `Alt+Up/Down` - 在组内的面板之间切换
  - `Alt+PgUp/PgDn` - 将面板移到上一个/下一个组
  - `Alt+Home/End` - 将面板移到第一个/最后一个组
  - `Alt+Plus/Minus` - 增加/减小活动组的宽度
  - `Alt+Backspace` - 切换面板堆叠（合并/拆分）
- 开发者文档（`doc/en/architecture.md`、`doc/en/developer-guide.md`）

## 变更
- 彻底重新设计面板布局系统
  - 新的 `LayoutManager` 集中管理面板组
  - 新的 `PanelGroup` 用于面板的垂直堆叠
  - 面板渲染逻辑独立出来
- 改进面板宽度管理
  - 修复删除组后的宽度重新分配（8 处）
  - 为调整大小操作添加零和平衡校正
  - 修复自动堆叠计算，改用平均宽度
  - 在所有组之间按比例重新分配宽度

## 移除
- **不兼容**：移除 `LayoutMode`（SimplePanel/MultiPanel），改用动态组
- **不兼容**：面板导航模型从扁平改为层级式（组 + 面板）
