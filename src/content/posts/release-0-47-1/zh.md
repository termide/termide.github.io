---
sourceHash: "4da0ec2aedc0"
title: "Termide 0.47.1：安全解压归档"
description: "termide 0.47.1 带来了什么：1 项安全修复。"
date: 2026-10-29
kind: release
version: 0.47.1
cover: ./cover.jpg
coverAlt: "Termide 0.47.1 发布海报"
---

## 安全
- **精心构造的 zip 归档不能再写到目标文件夹之外。** termide 用来解压归档的 zip 库对条目的本地文件头与中央目录头读取不一致，因此精心构造的 `.zip` 可以绕过检查，覆盖解压目标文件夹之外的文件（zip 9.0.0–9.0.4）。现在使用的是已修复的版本。
