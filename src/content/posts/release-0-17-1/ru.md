---
sourceHash: "52e4f651a25f"
title: "Termide 0.17.1: исправления для Windows"
description: "Что нового в termide 0.17.1: 2 исправления и 3 изменения."
date: 2026-03-21
kind: release
version: 0.17.1
cover: ./cover.jpg
coverAlt: "Постер выпуска Termide 0.17.1"
---

<img width="1907" height="950" alt="Screenshot From 2026-03-21 20-31-23" src="https://github.com/user-attachments/assets/0ad0afbe-281e-4ff5-bfb9-e6e1b5f23565" />

## Исправлено
- **Windows**: файлы сессий теперь сохраняются правильно — префикс буквы диска (`C:\`) отбрасывается через `Path::components()`, чтобы сессии не записывались в корень проекта
- **Windows**: символы треугольника `▶` (U+25B6) во всех панелях интерфейса заменены на совместимые с WGL4 `►` (U+25BA) — это исправляет отрисовку квадратиков-«тофу» в стандартных шрифтах консоли Windows

## Изменено
- **Рефакторинг**: `panel-file-manager/src/lib.rs` разделён на модули по назначению — `SelectionState`→`selection.rs`, `NavigationState`→`navigation.rs`, отслеживание git→`git_status.rs`, логика открытия файлов→`operations.rs`; файл сократился с 2694 до 2143 строк
- **Рефакторинг**: блокировки мьютексов LSP-сервера защищены от отравления блокировки при панике потока (`unwrap()` → `unwrap_or_else(|e| e.into_inner())`)
- **Рефакторинг**: в нескольких крейтах убрано 29 лишних выделений памяти под строки (`to_string_lossy().to_string()` → `into_owned()`)
