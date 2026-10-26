---
sourceHash: "e2d80c5f2efd"
title: "Termide 0.29.0：从源码生成类图"
description: "termide 0.29.0 带来：5 项新增、3 项变更和 2 项修复。"
date: 2026-07-03
kind: release
version: 0.29.0
cover: ./cover.jpg
coverAlt: "Termide 0.29.0 发布海报"
---

## 新增
- **从源代码生成类图。** 编辑器的 `View as diagram` 菜单项会为打开的文件所声明的内容构建一张 Mermaid 类图，并在图表查看器中打开。每个方框以声明作为标题（`pub struct Cli`、`enum Mode`、`public interface Draw`……），成员带有 UML 可见性标记（`+`/`-`/`#`/`~`），继承、trait/接口实现和字段组合都以边绘制。Rust、Python、TypeScript/TSX/JSX、Go、Java、C、C++、Ruby 和 PHP 有完善的提取器（类型、签名、关系）；其他 tree-sitter 语言则回退为带方法名的类型方框，外加一个以文件命名、收纳顶层函数的方框。
- **保存生成的图表**：在图表查看器中用 `Ctrl+S` 或菜单中的 `Save diagram as…` 项，将其保存为永久的 `.mmd` 文件。
- **输入即过滤**：在 git 面板的仓库和分支下拉列表中，开始输入即可缩小列表。
- **编辑器中按单词删除：** `Ctrl+Backspace`（或 `Alt+Backspace`）删除前一个单词，`Ctrl+Delete` 删除后一个单词。
- **用鼠标选择单词/整行：** 在编辑器和终端中，双击选中光标下的单词，三击选中整行。

## 变更
- Git 状态和 git diff 面板现在在获得焦点时自动刷新，因此在面板之外做出的更改无需手动 `Ctrl+R` 就会显示出来。
- 剪贴板复制现在会检测是否有可用的显示服务器（X11/Wayland），而不是根据 SSH 来猜测，因此在无头环境、Docker 和串口控制台会话中能正确使用 OSC 52 回退方案。
- 帮助面板现在已在全部 15 种语言中完整本地化；此前即使在已翻译的语言环境中，许多描述仍以英文显示。

## 修复
- 在 git 仓库/分支过滤框中没有匹配项时按 Enter，不再切换到第一个仓库/分支。
- 面板专属的操作（例如 `View as diagram`）现在会出现在面板的 `[≡]` 下拉菜单中。
