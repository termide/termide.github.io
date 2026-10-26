---
sourceHash: "679ad17beef3"
title: "Termide 0.1.5: Linux 软件包重新顺利构建"
description: "termide 0.1.5 带来了什么：1 项修复和 1 项新增。"
date: 2025-12-02
kind: release
version: 0.1.5
cover: ./cover.jpg
coverAlt: "Termide 0.1.5 发布海报"
---

## 修复
- ARM64 架构上 .deb 和 .rpm 软件包的构建问题
  - 从软件包构建矩阵中移除 aarch64，以避免交叉编译问题
  - 二进制 tar 包仍支持包括 ARM64 在内的所有平台

## 新增
- 本地软件包构建测试脚本（`scripts/test-packages.sh`）
