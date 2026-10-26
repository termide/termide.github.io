---
sourceHash: "b5277e0558db"
title: "Termide 0.20.0：全新设置，按 F4 重命名"
description: "termide 0.20.0 带来了什么：9 项新增、8 项变更、10 项修复和 1 项移除。"
date: 2026-04-19
kind: release
version: 0.20.0
cover: ./cover.jpg
coverAlt: "Termide 0.20.0 发布海报"
---

## 新增
- **LSP**：重命名符号（默认 `F4`）——完整的 WorkspaceEdit 流程，带输入提示模态窗口，对未保存文件和光标下无标识符的情况做了防护，并以 15 种语言提供已应用编辑的反馈
- **设置**：重新设计的设置模态窗口，采用侧栏布局、带分隔线的功能分组、可展开的“快捷键”分组、`[✓]/[✗]` 风格的复选框、以各语言本名显示的语言名称，以及用 Tab/Shift+Tab 在区域间循环切换
- **InfoModal**：长脚本报告的内容可滚动——右边框上显示滚动条，支持 Up/Down/PageUp/PageDown/Home/End 和鼠标滚轮
- **面板**：所有面板均支持 `Ctrl+C` 复制；修复了 VTE 终端的键盘处理
- **Git**：从 git 状态按钮打开暂存下拉菜单（取代单独的暂存面板）
- **Git**：在下拉菜单中按 `F2` 重命名暂存说明
- **Git**：git 状态面板中新增“全部暂存”/“全部取消暂存”/“全部还原”/“日志”按钮
- **帮助**：帮助生成器读取可配置的快捷键，而不是硬编码的值
- **i18n**：翻译了 46 个缺失的设置/权限键，新增英语运行时回退，并为 15 种语言添加了 `lsp_rename_*` 键

## 变更
- **架构**：将 `modal_handler.rs`（1694 → 659 行，-61%）拆分为 6 个职责单一的子模块（git/bookmark/search/path/progress/script）
- **架构**：将 `mouse_handler.rs`（1531 → 530 行，-65%）拆分为 3 个子模块（indicators/submenu/layout）
- **架构**：新增 `AppState` 外观层的 getter（`is_menu_open`、`is_resource_modal_open`、`has_pending_action`、`active_modal`），并迁移了 13 处调用点
- **架构**：将 5 个分散的批量操作字段合并到 `BatchOperationState`；启用了 `app-core` 的 trait（`StateManager`、`ModalManager`、`PanelProvider`、`LayoutController`）
- **架构**：通过 `queue_remote_editor_upload()` / `force_save_active_editor()` 辅助函数消除了“保存并关闭”流程中的重复代码
- **配置**：所有面板快捷键从硬编码匹配迁移到由配置驱动的 `HotkeyTable`
- **快捷键**：`rename_symbol` 的默认值设为 `F4`，以避免与 `save = [F2, Ctrl+S]` 冲突
- **清理**：移除了空的 `app-event` crate；用 `log` 宏替换了 `eprintln!`；删除了残留的调试日志

## 修复
- **安全**：将 `rand` 从 0.9.2 升级到 0.9.4（RUSTSEC 安全公告）
- **应用**：完成了 3 个异步上传相关的 TODO——远程编辑器保存时现在能可靠地将上传加入队列
- **设置**：标签中的字符串截断现在对 UTF-8 安全（不会再因多字节字符而 panic）
- **脚本**：`direnv` JSON 集成，使用 `setsid` 管理进程组，修复日志面板的 prepare_render
- **Git**：目录颜色采用多数文件的状态，而不是取最严重的状态
- **Git**：修复暂存删除提示消息、`Delete` 键处理和按钮点击偏移
- **Git**：暂存下拉菜单的打磨与清理
- **界面**：磁盘指示器、暂存下拉菜单、终端子菜单、书签/脚本分组的切换行为
- **界面**：文件属性模态窗口中 `rwx` 标题在权限复选框上方居中
- **图片**：防止关闭图片查看器时 `Escape` 被触发两次

## 移除
- **Crate**：空的 `app-event` crate
