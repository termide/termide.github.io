---
sourceHash: "0fb6d49e0eb7"
title: "Termide 0.28.0：用于 HTML 和网页的文本模式浏览器"
description: "termide 0.28.0 带来：6 项新增和 2 项修复。"
date: 2026-06-30
kind: release
version: 0.28.0
cover: ./cover.jpg
coverAlt: "Termide 0.28.0 发布海报"
---

## 新增
- **HTML 预览面板。** `.html` / `.htm` 文件以渲染后的只读视图打开（`F3`），具备完整的查看器体验 —— 可移动的光标、文本选择、剪贴板复制、增量搜索（`Ctrl+F`）、从磁盘重新加载（`Ctrl+R`），以及用 `Ctrl+E` 切换到可编辑的源码。支持的部分标签会带样式显示（标题、列表、表格、`<pre>`/`<code>`、`<kbd>`/`<b>`/`<i>`/`<sub>`、链接、图片图标）；未知标签保持透明，作者的 CSS/脚本会被忽略。
- **Markdown 中嵌入的 HTML 现在会被渲染。** `.md` 文件中的原始 HTML —— 居中的 `<img>` 徽章、`<details>`/`<summary>`、HTML `<table>` 以及 `<kbd>`/`<sub>` 等行内标签 —— 通过同一引擎渲染，而不再显示为带尖括号的原样文本。
- **Markdown 和 HTML 查看器现在是一个文本模式浏览器。** `Ctrl+G` —— 或新的 `Windows ▸ Web` 菜单项 —— 可打开一个路径或 `http(s)://` URL；页面会被获取并渲染，链接在原处跟随并带有后退/前进历史（`[` / `]` 或 `Backspace`），相对链接和 `#section` 锚点链接都能解析，图片链接会在图片预览中打开。获取到的视图以 URL 作为标题，并带 🌐 图标。获取受到安全限制：仅限 http/https、经过验证的 TLS、15 秒超时、最多 5 次重定向且不允许 `https→http` 降级、8 MiB 的正文上限，并且从不加载嵌入资源（例如 `<img>`）。`[viewer] open_links` 和 `[viewer] open_images` 设置决定在面板中还是在外部打开（默认 `panel`）；`O` 总是在外部浏览器中打开链接。
- **书签在查看器中打开。** HTML / Markdown / Mermaid / 图片文件以及 `http(s)` 网页链接会按类型在内置查看器中打开（遵循 `[viewer] open_links`），而不是总是启动外部程序。目录、远程路径、SSH 和数据库保持不变。
- **通过 `"Reset"` 主题颜色实现透明背景。** 把任意主题颜色设为 `"Reset"` 即可使用终端的原生颜色（例如 `bg = "Reset"` 会透出终端背景）。命名的主题颜色现在不区分大小写地匹配。（#37，感谢 @shepelpavel）
- **帮助面板中的查看器快捷键**（`Alt+H` / `F1`）—— 新增的“查看器”部分记录了 Markdown/HTML/图表的热键。

## 修复
- Markdown / 图表查看器：打开时获得焦点，每个文件打开一个新的查看器，在面板边框上绘制滚动条，用 `Ctrl+R` 从磁盘重新加载，失去焦点时隐藏光标，并让紧跟在 HTML 块之后的标题独占一行。
- Git 日志面板：选择光标现在占满整行宽度（没有未着色的边缘，也没有空白的底行），并移除了一条多余的“Refreshed”状态提示。

## 文档
- 新增了俄文 README（`README.ru.md`），并以主截图和功能对比表重写了 README；同步了安装指南、新的查看器文档，以及 en/ru/zh 的翻译。
