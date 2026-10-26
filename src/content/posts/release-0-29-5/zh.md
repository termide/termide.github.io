---
sourceHash: "3334dd66c23c"
title: "Termide 0.29.5：SFTP 库安全更新"
description: "termide 0.29.5 带来：1 项安全修复。"
date: 2026-07-28
kind: release
version: 0.29.5
cover: ./cover.jpg
coverAlt: "Termide 0.29.5 发布海报"
---

## 安全
- 将 `russh` SSH 库（SFTP 远程文件后端使用）更新到 0.62.4，修复了影响 russh ≤ 0.62.3 的三个中危安全公告：GHSA-5xvq-cp9x-6p6r、GHSA-cqjc-rmpq-xprq 和 GHSA-g9hv-x236-4qp3。
