---
sourceHash: "a957e56fd667"
title: "Termide 0.8.7: 可用 Nix 安装，二进制更小"
description: "termide 0.8.7 带来了什么：2 项新增、4 项修复和 3 项变更。"
date: 2026-01-12
kind: release
version: 0.8.7
cover: ./cover.jpg
coverAlt: "Termide 0.8.7 发布海报"
---

## 新增
- **安装脚本**：为 NixOS 用户提供 Nix 安装方式，使用 `nix profile install`
- **安装脚本**：在 NixOS 系统上，Nix 选项标注为“(recommended for NixOS)”

## 修复
- **安装脚本**：通过 `curl | sh` 管道运行时也能正常工作（从 /dev/tty 读取输入）
- **安装脚本**：修正下载 URL（去掉版本号前错误的 `v` 前缀）
- **安装脚本**：修复成功提示中 ANSI 转义码被原样输出的问题
- **安装脚本**：添加 `--refresh` 参数，确保通过 Nix 安装的是最新版本

## 变更
- **构建**：发布构建启用 LTO 和 strip（二进制体积减少 14%：29→25 MiB）
- **打包**：移除过时的 help/themes 安装步骤（这些文件已嵌入二进制）
- **Nix**：将 Cargo.lock 纳入版本控制，以实现可复现的 flake 构建
