---
sourceHash: "2ad8cc63a86e"
title: "Termide 0.5.0: 文件在你不知情时被改动，现在会提醒你"
description: "termide 0.5.0 带来了什么：5 项新增、6 项变更和 6 项修复。"
date: 2025-12-13
kind: release
version: 0.5.0
cover: ./cover.jpg
coverAlt: "Termide 0.5.0 发布海报"
---

## 新增
- 编辑器支持插入 Tab 字符，以及整块缩进/取消缩进（Tab/Shift+Tab）
- 检测外部对文件的修改，并弹出重新加载/关闭对话框
- 基于编辑器渲染的日志查看面板（支持光标和选区）
- 鼠标滚动作用于光标所在位置，而不是取决于面板焦点
- 对 git 仓库进行递归文件监视

## 变更
- **大规模架构重构**：从单体的 src/ 中拆分出 31 个工作区 crate
  - 模块化的 crate 结构：app、app-core、app-event、app-modal、app-panel 等
  - 借助增量编译缩短构建时间
  - 更好的代码组织与关注点分离
- 类型安全的面板通信架构
  - 用 `PanelCommand` 枚举取代不安全的 `dyn Any` 向下转型
  - 用 `CommandResult` 枚举实现类型安全的命令响应
  - Panel trait 新增 `handle_command()` 方法
- 模态对话框代码整合
  - 共享的边框渲染，带 [X] 关闭按钮
  - 共享的带光标输入框渲染
  - 减少搜索/替换模态框中的重复代码
- 配置改为嵌套的 TOML 分节结构
- 异步计算 git diff，避免界面卡顿
- 文件系统更新遵循 gitignore 规则

## 修复
- 删除文件后，文件管理器的光标位置得以保留
- 复制/粘贴操作不再引起多余的滚动
- 文件修改时间按本地时区显示
- 文件大小取整到整数单位并右对齐
- 对 git diff 去重，避免界面卡顿
- 修复文件系统监视器的反馈循环以及已删除文件的显示问题

## 性能
- 异步 git diff 与遵循 gitignore 的文件系统更新
- 缓存 `find_repo_root()`，并对加载动画限流
- 按需重绘，降低空闲时的 CPU 占用
- 内存优化：移除多余的 clone

## 测试
- PanelCommand 与 CommandResult 单元测试（core 中 7 个测试）
- 编辑器 handle_command 集成测试（9 个测试）
- 文件管理器 handle_command 集成测试（8 个测试）
- 模态框基础模块测试（4 个测试）
- 大文件处理测试（7 个测试）
  - 加载和浏览一万行以上的文件
  - 滚动性能基准测试（5 万行耗时 <100ms）

## 代码质量
- 生产代码中不再有任何 TODO/FIXME 注释
- 全部 5 个 unsafe 块都附有 SAFETY 注释说明
- 将 21 处以上关键的 `unwrap()` 调用替换为带上下文信息的 `expect()`
- 修复编辑器 `handle_key()` 吞掉错误的问题——错误现在会显示给用户
- 移除死代码：未使用的 `RequestDirSize` 事件以及 `PanelProvider` trait 方法
- 优化 `get_selected_text()`——大选区时不再复制整个缓冲区
