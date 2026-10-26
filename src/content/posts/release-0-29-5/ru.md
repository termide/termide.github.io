---
sourceHash: "3334dd66c23c"
title: "Termide 0.29.5: обновление безопасности библиотеки SFTP"
description: "Что нового в termide 0.29.5: 1 исправление безопасности."
date: 2026-07-28
kind: release
version: 0.29.5
cover: ./cover.jpg
coverAlt: "Постер выпуска Termide 0.29.5"
---

## Безопасность
- SSH-библиотека `russh` (используется бэкендом удалённых файлов SFTP) обновлена до 0.62.4, что закрывает три уязвимости средней степени опасности в russh ≤ 0.62.3: GHSA-5xvq-cp9x-6p6r, GHSA-cqjc-rmpq-xprq и GHSA-g9hv-x236-4qp3.
