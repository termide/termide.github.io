---
sourceHash: "15decef40aa2"
title: "Termide 0.23.5：Import class 不再弄乱文本"
description: "termide 0.23.5 带来：1 项修复。"
date: 2026-06-02
kind: release
version: 0.23.5
cover: ./cover.jpg
coverAlt: "Termide 0.23.5 发布海报"
---

## 修复
- **“Import class”不再弄乱文件或重复导入。** 0.23.4 中新增的基于命令的快速修复可能会弄乱插入点附近的文本 —— phpactor 等服务器会把导入作为同一位置上的两次编辑发送，而应用编辑的代码把它们的顺序弄错了 —— 并且再次运行时会多出一行重复的 `use`，因为服务器从未被告知文件已更改。现在编辑按文档中的绝对偏移量应用（其他每一行都原样保留），并且每次应用编辑后都会与语言服务器重新同步。
