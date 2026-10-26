---
sourceHash: "717cd573e3fc"
title: "Termide 0.8.5: 一行命令即可安装的脚本"
description: "termide 0.8.5 带来了什么：1 项新增、2 项修复和 5 项变更。"
date: 2026-01-07
kind: release
version: 0.8.5
cover: ./cover.jpg
coverAlt: "Termide 0.8.5 发布海报"
---

## 新增
- **通用安装脚本**：新的 `install.sh`，便于跨平台安装

## 修复
- **配置热重载**：保存 config.toml 时，编辑器现在会应用设置（theme、word_wrap、tab_size）
- **UTF-8 路径**：Git 状态面板在截断路径时能正确处理非 ASCII 文件路径

## 变更
- **Git 仓库发现**：现在根据面板路径而不是项目根目录来发现仓库
- **性能**：嵌套路径去除算法从 O(n²) 优化到 O(n log n)
- **性能**：搜索替换中用 `take()` 代替 `clone()`，减少内存分配
- **代码质量**：在 GitStatusPanel 中提取辅助方法（git 操作、渲染、导航、鼠标处理）
- **代码质量**：从 buffer 模块中移除未使用的 `SearchDirection` 和 `Action::Group`
