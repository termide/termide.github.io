---
sourceHash: "5d9887961658"
title: "Termide 0.3.0: 每个面板都是一等公民"
description: "termide 0.3.0 带来了什么：4 项新增和 1 项变更。"
date: 2025-12-04
kind: release
version: 0.3.0
cover: ./cover.jpg
coverAlt: "Termide 0.3.0 发布海报"
---

## 新增
- 用于自动化发布流程的 Claude Code 发布管理技能
  - 发布前质量检查（fmt、clippy、test、build）
  - 多来源变更分析（未提交的更改、提交、文件状态）
  - 带校验的交互式版本选择
  - 自动更新 12 个以上文件中的版本号
  - 根据 git 历史自动生成 CHANGELOG 条目
  - 更新后的质量验证
  - 生成约定式提交并创建 git 标签
- 支持 XDG 基础目录规范
  - 配置：`~/.config/termide/`（或 `$XDG_CONFIG_HOME/termide/`）
  - 数据：`~/.local/share/termide/`（或 `$XDG_DATA_HOME/termide/`）
  - 缓存：`~/.cache/termide/`（或 `$XDG_CACHE_HOME/termide/`）
  - 正确的跨平台路径（Linux、macOS、Windows）
- 自动持久化会话，保留期限可配置
  - 失去焦点时自动保存会话（带防抖）
  - 自动清理超过所配置保留期限（默认：30 天）的会话
  - 按项目存储会话
  - 未保存的缓冲区在会话之间保留
- 完善的项目文档
  - 包含完整版本历史（0.1.0 至 0.2.0）的 CHANGELOG.md
  - 包含开发指南的 CONTRIBUTING.md
  - 更新了 issue 模板
  - 修订了安全策略
  - Contributor Covenant 行为准则

## 变更
- **不兼容**：文件管理器现在是普通的可关闭面板
  - 移除了对固定左侧面板的特殊处理
  - 文件管理器可以关闭、调整大小，并在组之间移动
  - 默认初始化为 2 个文件管理器面板（50/50 布局）
  - 架构得到简化（减少约 350 行代码）
  - 所有面板现在都是一等公民，能力完全相同
  - 已有会话将以默认布局加载
