---
sourceHash: "d9e618cb9ae1"
title: "Termide 0.23.0：文件管理器支持 SFTP 和 FTP"
description: "termide 0.23.0 带来了什么：10 项新增、9 项变更、7 项修复和 1 项移除。"
date: 2026-05-23
kind: release
version: 0.23.0
cover: ./cover.jpg
coverAlt: "Termide 0.23.0 发布海报"
---

## 新增
- **远程文件系统**——基于 russh + russh-sftp + rustls 的纯 Rust SFTP / FTP / FTPS。在同一个文件管理器中像本地路径一样浏览、打开、复制、重命名和移动远程文件。书签支持 `sftp://user@host:port/path`、`ftp://`、`ftps://` URL；`Auto` 认证依次尝试 SSH agent → `~/.ssh/config`（`IdentityFile`、`User`、`Port`、`Hostname` 别名）→ 默认密钥 → 密码。非 ASCII 路径经 URL 编码往返后保持完整。参见 [`doc/en/vfs.md`](https://github.com/termide/termide/blob/main/doc/zh/vfs.md)。
- **静态 musl Linux 二进制**——每次发布都会提供 `termide-0.23.0-x86_64-unknown-linux-musl.tar.gz`。可在 Alpine、distroless 容器以及任何不带 glibc 的 Linux 上运行。Nix flake 也以 `#termide-static` 提供相同的构建配方。
- **操作面板**——
  - 每张卡片都有弹出菜单（暂停 / 继续 / 取消），通过方括号中的类型图标 `[↑]`/`[↓]`/`[⧉]` 打开（鼠标），对应的键盘操作为 `Space` / `Esc` / `Delete`。
  - 中断远程上传时的取消清理模态窗口——“删除部分上传的 'filename'？”默认选择删除，且在批量操作中是安全的（只处理正在传输的文件）。
  - 操作暂停时，图标旁显示 `⏸` 指示。
  - 帮助面板现在将 Esc 与 Delete/Backspace 一并列出。
  - 参见 [`doc/en/operations.md`](https://github.com/termide/termide/blob/main/doc/zh/operations.md)。
- **`--diagnostics` 命令行参数**——预检（配置解析、XDG 目录、git 是否可用），在终端初始化之前运行，并以 0/1 退出码供脚本使用。
- **日志面板：级别标签**——标题行中可点击的 `[TRACE] [DEBUG] [INFO] [WARN] [ERROR]`，也可通过 `Alt+1..5` 切换。
- **未保存缓冲区恢复**——崩溃会话中遗留的缓冲区此前就会恢复为编辑器面板；现在每一个都会在日志面板中通告，让用户知道为什么多出了这些标签页。
- **文件管理器——光标所在层级的操作**——`Ctrl+N`、`D`/`F7` 和 `Ctrl+V` 现在作用于光标所在的树层级（即光标所在的那个子目录），而不总是面板根目录。已在 `doc/{en,ru,zh}/file-manager.md` 中说明。
- **编辑器**——在非 vim 模式下，`F8` 删除当前行（或当前选区涉及的每一行）；只读缓冲区会忽略它。
- **配置**——分层加载全局配置 + 项目级覆盖；`<project>/.termide/config.toml` 叠加在 `~/.config/termide/config.toml` 之上。两个文件都只保存相对于各自基准的差异。
- **架构文档**——`doc/en/architecture.md` 新增了“异步流水线”表格和专门的 VFS 章节。

## 变更
- **大规模的启动 / 交互性能优化。** 此前打开一个文件管理器根目录位于被跟踪的主目录的会话时，界面会冻结好几秒。以下各项都已移出主线程，全部通过现有的 `tick()` 模式轮询：
  - 初始目录读取。
  - 子树展开（本地：启动工作线程，显示占位行 `…`；与现有的远程模式一致）。
  - Git 状态 / git 日志面板刷新（每次刷新 5–6 次 `git` 调用）。
  - Git 子模块发现（`RepoManager`——只有顶层仓库是同步发现的；子模块通过 `poll` 逐步并入）。
  - 文件搜索中的 git 状态遍历。
  - 会话恢复——组中的每个面板都在各自的工作线程中构建，然后按保存的顺序汇合。
  - 监视器的仓库注册——`WalkBuilder` 遍历移到工作线程；`inotify_add_watch` 调用分块分摊到多个 tick 中（`INSTALL_CHUNK = 256`），因此包含 5000 个目录的仓库也不会让单个 tick 出现峰值。
- **SFTP 传输可以正确暂停。** actor 现在只处理原子化的打开 / 读取块 / 写入块 / 关闭命令；分块循环运行在同步工作线程上，并在每次分发之间检查暂停/取消。暂停的上传会真正停止字节流，其他面板的 `list_dir` 请求仍能畅通无阻。
- **同一主机上的 SFTP / FTP 重命名在服务器端完成**——在同一连接内 `mv` 不再先下载再重新上传。
- **宽视图目录大小**——每次遍历的默认时间预算从 1000 ms 降到 100 ms；在目录上按 `Space` 也会把其精确大小发布到共享缓存，下次重绘时该列即可显示。
- **配置 / 会话加载失败会记录到日志面板**，而不是在进入原始模式前输出到 stderr，导致消息被滚走。
- **编辑器**——面板未获得焦点时隐藏光标和当前行高亮；视觉状态现在与文件管理器一致。
- **模态窗口边框**——空标题不再在上边框上打出一个 1 格宽的缺口。
- **远程文件管理器面板的异步树展开**，带有 `…` 占位行；同时修复了重复展开时出现重复条目的问题。
- 自动换行的编辑器行中，**内联 blame 注释**固定在最后一个换行行上，而不是光标所在的行。

## 修复
- 多个 SFTP 取消的边界情况：取消时 actor 挂起、文件句柄未关闭、过期的接收端卡住 russh-sftp 的请求 ID 空间——暂停 / 取消 / 重新连接现在都很干净（缓存的 `ConnectOptions` 让已取消的传输之后能够无缝自动重连）。
- 远程面板的重命名曾经走本地 `fs::*`（会创建一个本地目录并留下残余文件）；现在走 VFS 路径。
- 新建文件/目录后的光标定位：按完整路径匹配，因此能正确找到位于已展开子目录内的条目。
- 对远程目录重复展开曾会导致子项重复。
- 从剪贴板粘贴时，无论光标在哪里，总是落在面板根目录。
- 编辑器 → 命令：编辑项目命令的快捷键后，现在会使内存中的快捷键表失效，因此重新绑定立即生效。
- 终端面板：实时输出不再把用户在回滚缓冲区中的位置拖向末尾。

## 移除
- **`--features vendored-openssl` 构建参数**——工作区是纯 Rust 的（rustls + russh + russh-sftp），不依赖 OpenSSL。该参数早已不起作用；已从 `release.yml` 中移除。

## CI / 开发体验
- 新的 `.github/workflows/ci.yml` 会在每个 PR 以及每次推送到 main 时运行 fmt / check / clippy / test（release.yml 仍只用于发布）。
- `deny.toml` + `cargo-deny check` 步骤涵盖安全公告、许可证、禁用项和来源。
- 在 `CONTRIBUTING.md` 中记录了 pre-commit 钩子。
