---
sourceHash: "eeaf3be1ffff"
title: "Termide 0.23.9：git push、pull、fetch 时在模态框中输入 SSH 密码短语"
description: "termide 0.23.9 带来：1 项修复和 1 项新增。"
date: 2026-06-04
kind: release
version: 0.23.9
cover: ./cover.jpg
coverAlt: "Termide 0.23.9 发布海报"
---

## 修复
- **SSH/凭据提示不再破坏界面。** 打开仓库时会自动 fetch，而 push/pull/fetch 运行时附着在终端上，所以当 ssh 需要 SSH 密钥的密码短语时，会把提示直接画在 TUI 上面。现在网络 git 操作以非交互方式运行（分离的 stdin、`GIT_TERMINAL_PROMPT=0`、ssh `BatchMode`），因此已在 ssh-agent 中的密钥可以直接使用，缺失的密钥则干净地失败。自动 fetch 失败时会在状态行报告，而不是弹出模态框。

## 新增
- **git push/pull/fetch 时在模态框中输入 SSH 密钥密码短语。** 当操作需要一个不在 ssh-agent 中的密码短语时，termide 现在会在一个掩码输入的模态框中询问，然后重试（通过一个私有的、短暂存在的 askpass 交接），而不是直接失败。密码短语在本次会话中缓存在内存里，因此重复操作不会再次询问；它永远不会写入配置或被持久化。
