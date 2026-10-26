---
sourceHash: "567778a99c2a"
title: "Termide 0.29.1：支持 Kotlin"
description: "termide 0.29.1 带来：1 项新增和 1 项修复。"
date: 2026-07-08
kind: release
version: 0.29.1
cover: ./cover.jpg
coverAlt: "Termide 0.29.1 发布海报"
---

## 新增
- **Kotlin 支持。** `.kt` / `.kts` 文件现在有语法高亮、类、接口、对象、枚举和函数的大纲，以及完善的类图（`View as diagram`）—— 包含属性、函数签名、`val`/`var` 构造函数属性、超类/接口关系，以及收纳在文件方框中的顶层声明。

## 修复
- 清理时不再整体删除项目会话。若一个过期的父目录中包含仍在使用的新鲜嵌套会话，现在会保留该会话 —— 只删除父目录自身已过期的文件 —— 因此活动会话及其设置不会再被悄悄丢失。
