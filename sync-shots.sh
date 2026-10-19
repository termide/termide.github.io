#!/usr/bin/env bash
# Copy the recorded screenshots into assets/: what the recorder in the main
# repository (termide/tools/screenshots, `run.sh`) left in out/site/, under
# the names this site uses. Files the recorder did not make are left alone;
# review with `git status` and commit what should change.
#   ./sync-shots.sh [path/to/termide]   (default: ../termide)
set -euo pipefail

here=$(cd "$(dirname "$0")" && pwd)
termide=${1:-"$here/../termide"}
site="$termide/tools/screenshots/out/site"
[ -d "$site" ] || { echo "no $site: run tools/screenshots/run.sh there first" >&2; exit 1; }

mkdir -p "$here/assets/screenshots" "$here/assets/themes"
cp "$site"/screenshots/* "$here/assets/screenshots/"
cp "$site"/themes/* "$here/assets/themes/" 2>/dev/null || true
[ -f "$site/og.png" ] && cp "$site/og.png" "$here/assets/og.png"
git -C "$here" status --short -- assets
