#!/usr/bin/env python3
"""Render the landing page for every language from src/.

    python3 build.py           write index.html, ru/index.html, zh/index.html
    python3 build.py --check   exit 1 if a generated page is out of date

The pages are committed because GitHub Pages serves this repository as is.
Strings live in src/i18n/<lang>.json; en.json defines the shape every other
language must match exactly, so a missing or extra key fails the build instead
of leaking English into a translated page.
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"

CHECK = "&#10003;"
CROSS = "&#10007;"


def load(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def shape_errors(ref, other, path=""):
    """Differences in structure between two string trees."""
    if isinstance(ref, dict):
        if not isinstance(other, dict):
            return [f"{path}: expected an object"]
        errors = []
        for key in ref.keys() - other.keys():
            errors.append(f"{path}.{key}: missing")
        for key in other.keys() - ref.keys():
            errors.append(f"{path}.{key}: not in en.json")
        for key in ref.keys() & other.keys():
            errors.extend(shape_errors(ref[key], other[key], f"{path}.{key}"))
        return errors
    if not isinstance(other, str) or not other.strip():
        return [f"{path}: expected a non-empty string"]
    return []


def attr(text):
    return html.escape(text, quote=True)


class Page:
    def __init__(self, data, lang, strings):
        self.data = data
        self.lang = lang
        self.s = strings
        self.root = "../" if lang["dir"] else ""

    def t(self, path):
        node = self.s
        for part in path.split("."):
            if not isinstance(node, dict) or part not in node:
                raise KeyError(f"{self.lang['code']}: no string '{path}'")
            node = node[part]
        return node

    def url(self, lang):
        base = self.data["site_url"] + "/"
        return base + (lang["dir"] + "/" if lang["dir"] else "")

    # Blocks -------------------------------------------------------------

    def hreflang(self):
        lines = [
            f'    <link rel="alternate" hreflang="{lang["code"]}" href="{self.url(lang)}">'
            for lang in self.data["languages"]
        ]
        lines.append(
            f'    <link rel="alternate" hreflang="x-default" href="{self.url(self.data["languages"][0])}">'
        )
        return "\n".join(lines)

    def jsonld(self):
        doc = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "TermIDE",
            "url": self.url(self.lang),
            "description": self.t("meta.description"),
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Linux, macOS, Windows, Android",
            "softwareVersion": self.data["version"],
            "license": "https://opensource.org/licenses/MIT",
            "downloadUrl": self.data["repo_url"] + "/releases/latest",
            "codeRepository": self.data["repo_url"],
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"},
        }
        body = json.dumps(doc, ensure_ascii=False, indent=2).replace("</", "<\\/")
        return f'    <script type="application/ld+json">\n{body}\n    </script>'

    def slides_json(self):
        slides = [
            {"text": self.t(f"hero.slides.{s['id']}"), "image": self.root + s["image"]}
            for s in self.data["slides"]
        ]
        return json.dumps(slides, ensure_ascii=False).replace("</", "<\\/")

    def lang_switcher(self):
        parts = []
        for lang in self.data["languages"]:
            target = lang["dir"] + "/index.html" if lang["dir"] else "index.html"
            href = self.root + target
            active = ' class="active"' if lang is self.lang else ""
            parts.append(f'<a href="{href}"{active}>{lang["label"]}</a>')
        joined = '\n            <span class="divider">/</span>\n            '.join(parts)
        return f'        <div class="lang-switcher">\n            {joined}\n        </div>'

    def hero_images(self):
        lines = []
        for i, s in enumerate(self.data["slides"]):
            active = " active" if i == 0 else ""
            alt = attr(self.t(f"hero.slides.{s['id']}"))
            loading = "" if i == 0 else ' loading="lazy"'
            lines.append(
                f'                        <img src="{self.root}{s["image"]}" alt="{alt}" class="screenshot{active}"{loading}>'
            )
        return "\n".join(lines)

    def _home_items(self, key):
        lines = []
        for item in self.data["homes"][key]:
            lines.append(
                "                    <div class=\"home-item\">\n"
                f"                        <h4>{self.t(f'homes.{key}.{item}.t')}</h4>\n"
                f"                        <p>{self.t(f'homes.{key}.{item}.d')}</p>\n"
                "                    </div>"
            )
        return "\n".join(lines)

    def homes_desk(self):
        return self._home_items("desk")

    def homes_server(self):
        return self._home_items("server")

    def agent_items(self):
        lines = []
        for item in self.data["agent"]["items"]:
            lines.append(
                "                    <div class=\"agent-item\">\n"
                f"                        <h4>{self.t(f'agent.items.{item}.t')}</h4>\n"
                f"                        <p>{self.t(f'agent.items.{item}.d')}</p>\n"
                "                    </div>"
            )
        return "\n".join(lines)

    def _code_block(self, command, indent, extra=""):
        pad = " " * indent
        template = attr(command)
        shown = attr(command.replace("{v}", self.data["version"]))
        return (
            f'{pad}<div class="code-block{extra}">\n'
            f'{pad}    <pre><code data-template="{template}">{shown}</code></pre>\n'
            f'{pad}    <button class="copy-btn" data-copy="{shown}" title="{attr(self.t("install.copy"))}">'
            f'<span class="copy-icon">&#128203;</span></button>\n'
            f"{pad}</div>"
        )

    def agent_cli(self):
        return self._code_block(self.data["agent"]["cli"], 16)

    def hero_install(self):
        return self._code_block(self.data["hero_install"], 16, extra=" hero-install")

    def trust(self):
        items = "\n".join(
            f'            <li><span class="trust-mark">&#10003;</span> {self.t(f"trust.{k}")}</li>'
            for k in self.data["trust"]
        )
        return f'        <ul class="trust-strip">\n{items}\n        </ul>'

    def agent_hooks(self):
        items = "\n".join(
            "                <div class=\"agent-hook\">\n"
            f"                    <span class=\"agent-hook-q\">{self.t(f'agent.hooks.{k}.t')}</span>\n"
            f"                    <span class=\"agent-hook-a\">{self.t(f'agent.hooks.{k}.d')}</span>\n"
            "                </div>"
            for k in self.data["agent"]["hooks"]
        )
        return f'            <div class="agent-hooks">\n{items}\n            </div>'

    def feature_list(self):
        out = []
        for group in self.data["feature_groups"]:
            gid = group["id"]
            rows = []
            for card in group["cards"]:
                cid = card["id"]
                rows.append(
                    "                    <li>"
                    f"<span class=\"feature-icon\">{card['icon']}</span>"
                    f"<span><strong>{self.t(f'features.groups.{gid}.cards.{cid}.t')}</strong> "
                    f"{self.t(f'features.groups.{gid}.cards.{cid}.d')}</span></li>"
                )
            out.append(
                "            <div class=\"feature-group\">\n"
                f"                <h3 class=\"feature-group-title\">{self.t(f'features.groups.{gid}.title')}</h3>\n"
                "                <ul class=\"feature-list\">\n"
                + "\n".join(rows)
                + "\n                </ul>\n            </div>"
            )
        return '            <div class="feature-groups">\n' + "\n".join(out) + "\n            </div>"

    def theme_show_all(self):
        count = len(self.data["themes"])
        if count <= self.data["gallery_initial"]:
            return ""
        label = self.t("themes.show_all").replace("{n}", str(count))
        return f'            <div class="show-all"><button class="btn btn-secondary" data-show-all>{label}</button></div>'

    def theme_custom(self):
        custom = self.data["theme_custom"]
        points = "\n".join(
            f"                    <li>{self.t(f'themes.custom.points.{k}')}</li>" for k in custom["points"]
        )
        doc = f"{self.data['repo_url']}/blob/main/doc/{self.lang['code']}/{custom['doc']}"
        return (
            '            <div class="theme-custom">\n'
            '                <div class="theme-custom-text">\n'
            f'                    <h3>{self.t("themes.custom.title")}</h3>\n'
            f'                    <p>{self.t("themes.custom.subtitle")}</p>\n'
            f'                    <ul>\n{points}\n                    </ul>\n'
            f'                    <a class="doc-link" href="{doc}" target="_blank" rel="noopener">&gt; {self.t("themes.custom.doc")}</a>\n'
            "                </div>\n"
            + self._code_block(custom["example"], 16, extra=" theme-example")
            + "\n            </div>"
        )

    def faq(self):
        items = []
        for k in self.data["faq"]:
            items.append(
                "                <details class=\"faq-item\">\n"
                f"                    <summary>{self.t(f'faq.items.{k}.q')}</summary>\n"
                f"                    <p>{self.t(f'faq.items.{k}.a')}</p>\n"
                "                </details>"
            )
        return '            <div class="faq-list">\n' + "\n".join(items) + "\n            </div>"

    def _cell(self, value):
        if value == "yes":
            return f'<span class="check">{CHECK}</span>'
        if value == "no":
            return f'<span class="cross">{CROSS}</span>'
        return f'<span class="plugin">{self.t(f"compare.values.{value}")}</span>'

    def _compare_rows(self, rows):
        out = []
        for row in rows:
            cells = [f"<td>{self.t('compare.rows.' + row['id'])}</td>"]
            for i, value in enumerate(row["values"]):
                cls = ' class="highlight"' if i == 0 else ""
                cells.append(f"<td{cls}>{self._cell(value)}</td>")
            out.append("                        <tr>" + "".join(cells) + "</tr>")
        return "\n".join(out)

    def _compare_table(self, rows, indent=12):
        cmp = self.data["compare"]
        pad = " " * indent
        head = [f"<th>{self.t('compare.feature_col')}</th>"]
        for i, col in enumerate(cmp["columns"]):
            cls = ' class="highlight"' if i == 0 else ""
            head.append(f"<th{cls}>{col}</th>")
        return (
            f'{pad}<div class="table-wrapper">\n'
            f'{pad}    <table class="comparison-table">\n'
            f"{pad}        <thead>\n"
            f"{pad}            <tr>" + "".join(head) + "</tr>\n"
            f"{pad}        </thead>\n"
            f"{pad}        <tbody>\n" + self._compare_rows(rows) + "\n"
            f"{pad}        </tbody>\n"
            f"{pad}    </table>\n"
            f"{pad}</div>"
        )

    def compare_table(self):
        cmp = self.data["compare"]
        by_id = {row["id"]: row for row in cmp["rows"]}
        featured = [by_id[i] for i in cmp["featured"]]
        rest = [row for row in cmp["rows"] if row["id"] not in cmp["featured"]]
        html_out = self._compare_table(featured)
        if rest:
            html_out += (
                '\n            <details class="compare-more">\n'
                f'                <summary>{self.t("compare.show_all")}</summary>\n'
                + self._compare_table(rest, 16)
                + "\n            </details>"
            )
        return html_out

    def stack_table(self):
        cols = ["task", "usual", "termide"]
        highlight = {c: ' class="highlight"' if c == "termide" else "" for c in cols}
        head = "".join(
            f"<th{highlight[c]}>{self.t(f'compare.stack_cols.{c}')}</th>" for c in cols
        )
        rows = []
        for item in self.data["stack"]:
            cells = [
                f"<td{highlight[c]}>{self.t(f'compare.stack.{item}.{c}')}</td>" for c in cols
            ]
            rows.append("                        <tr>" + "".join(cells) + "</tr>")
        return (
            '                <table class="comparison-table stack-table">\n'
            "                    <thead>\n"
            f"                        <tr>{head}</tr>\n"
            "                    </thead>\n"
            "                    <tbody>\n" + "\n".join(rows) + "\n"
            "                    </tbody>\n"
            "                </table>"
        )

    def theme_filters(self):
        buttons = []
        for i, group in enumerate(self.data["theme_groups"]):
            active = " active" if i == 0 else ""
            buttons.append(
                f'                <button class="filter-btn{active}" data-filter="{group}">{self.t(f"themes.groups.{group}")}</button>'
            )
        return '            <div class="theme-filters">\n' + "\n".join(buttons) + "\n            </div>"

    def theme_gallery(self):
        items = []
        for i, theme in enumerate(self.data["themes"]):
            name = html.escape(theme["name"])
            extra = " extra" if i >= self.data["gallery_initial"] else ""
            items.append(
                f'                <div class="gallery-item{extra}" data-group="{theme["group"]}">\n'
                '                    <div class="gallery-frame neon-border-hover">\n'
                f'                        <img src="{self.root}assets/themes/{theme["id"]}.png" alt="{name}" loading="lazy">\n'
                f'                        <div class="gallery-overlay"><span class="theme-name">{name}</span></div>\n'
                "                    </div>\n"
                "                </div>"
            )
        return "\n".join(items)

    def install_tabs(self):
        tabs, panels = [], []
        for i, method in enumerate(self.data["install"]):
            mid = method["id"]
            active = " active" if i == 0 else ""
            selected = "true" if i == 0 else "false"
            tabs.append(
                f'                <button class="install-tab{active}" role="tab" aria-selected="{selected}" '
                f'data-tab="{mid}">{self.t(f"install.tabs.{mid}.label")}</button>'
            )
            panels.append(
                f'            <div class="install-panel{active}" role="tabpanel" data-panel="{mid}">\n'
                f'                <p class="platform">{self.t(f"install.tabs.{mid}.note")}</p>\n'
                + self._code_block(method["command"], 16)
                + "\n            </div>"
            )
        return (
            '            <div class="install-card">\n'
            '            <div class="install-tabs" role="tablist">\n'
            + "\n".join(tabs)
            + "\n            </div>\n"
            + "\n".join(panels)
            + "\n            </div>"
        )

    # Rendering ----------------------------------------------------------

    def render(self, template):
        values = {
            "lang": self.lang["code"],
            "root": self.root,
            "canonical": self.url(self.lang),
            "og_image": self.data["site_url"] + "/" + self.data["og_image"],
            "repo_url": self.data["repo_url"],
            "version": self.data["version"],
            "agent_image": self.data["agent"]["image"],
            "doc_lang": self.lang["code"],
        }

        def replace(match):
            token = match.group(1)
            if token.startswith("t:"):
                key, _, flt = token[2:].partition("|")
                text = self.t(key)
                return attr(re.sub(r"<[^>]+>", "", html.unescape(text))) if flt == "attr" else text
            if token.startswith("block:"):
                return getattr(self, token[6:])()
            return values[token]

        return re.sub(r"\{\{([^}]+)\}\}", replace, template)


def missing_assets(data):
    paths = {s["image"] for s in data["slides"]} | {data["agent"]["image"], data["og_image"]}
    paths |= {f"assets/themes/{t['id']}.png" for t in data["themes"]}
    return sorted(p for p in paths if not (ROOT / p).exists())


def main():
    check = "--check" in sys.argv[1:]
    data = load(SRC / "data.json")
    template = (SRC / "template.html").read_text(encoding="utf-8")
    reference = load(SRC / "i18n" / "en.json")

    errors = []
    pages = {}
    for lang in data["languages"]:
        strings = load(SRC / "i18n" / f"{lang['code']}.json")
        if lang["code"] != "en":
            errors += [f"{lang['code']}{e}" for e in shape_errors(reference, strings)]
        if not errors:
            out = ROOT / lang["dir"] / "index.html" if lang["dir"] else ROOT / "index.html"
            pages[out] = Page(data, lang, strings).render(template)
    if errors:
        print("i18n shape errors:\n  " + "\n  ".join(errors), file=sys.stderr)
        return 1

    for path in missing_assets(data):
        print(f"warning: missing asset {path}", file=sys.stderr)

    stale = []
    for path, content in pages.items():
        current = path.read_text(encoding="utf-8") if path.exists() else None
        if current == content:
            continue
        if check:
            stale.append(path.relative_to(ROOT))
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content, encoding="utf-8")
            print(f"wrote {path.relative_to(ROOT)}")
    if stale:
        print("out of date, run python3 build.py: " + ", ".join(map(str, stale)), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
