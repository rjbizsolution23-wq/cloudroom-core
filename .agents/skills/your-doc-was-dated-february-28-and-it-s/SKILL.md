---
name: your-doc-was-dated-february-28-and-it-s
description: "Use this skill for Your doc was dated February 28, and it's. Your doc was dated February 28, and it's gone stale in the places that matter. Below I fix what's wrong as of October 4, 2026, then give you the agent as a plug-in pack."
---

# Your doc was dated February 28, and it's

Your doc was dated February 28, and it's gone stale in the places that matter. Below I fix what's wrong as of October 4, 2026, then give you the agent as a plug-in pack. It has two parts. One is an MCP server that checks versions live, so the agent never quotes them from memory. The other is a skill file that holds what the agent should know and its default picks. Anything that speaks MCP can load both, including Claude Code, Claude Desktop, CrewAI, LangGraph and PydanticAI.

I named it `python-universe-agent` after your doc title. Rename it before you create the repo if you want something else.

## Part 1: What changed since Feb 28

| Your doc says | Current (verified Oct 4, 2026) |
|---|---|
| Python current: 3.14.3 | **3.14.8** shipped Oct 1, 2026 [1]. **3.15.0 final is scheduled for Oct 9, 2026**; rc3 is out now [2] |
| Nothing on 3.15 | 3.15 adds `lazy import` (PEP 810), built-in `frozendict` and `sentinel`, UTF-8 as the default encoding, `*`/`**` unpacking inside comprehensions, and a new `profiling` package with the Tachyon sampling profiler. The `profile` module is deprecated and goes away in 3.17 [3] |
| Pydantic v2.12.5 | **v2.13.x** (v2.13 came out April 13; the docs show v2.13.4). The docs moved to `pydantic.dev/docs/validation/` [4][5] |
| FastAPI (your profile pins 0.136.1) | **0.142.2**, released Sep 30, 2026 [6] |
| CrewAI (your profile pins 1.14.4) | **1.15.23** [7] |
| LangGraph | **1.2.x**; LangChain and LangGraph both reached 1.0 [8][9] |
| Django ORM docs link `/en/5.0/` | Django **6.0** came out Dec 3, 2025, with a built-in tasks framework [10] |
| pytest | **9.1.1** is the latest release announcement [11] |
| ruff / uv | ruff **0.16.10** (Oct 1) [12]. OpenAI acquired Astral (the company behind uv, ruff and ty) on Mar 19, 2026. All three are still open source, but keep an eye on governance [13] |
| `passlib` for password hashing | passlib looks unmaintained. Use **argon2-cffi** directly, which also matches your argon2id rule [14] |
| `pip install` everywhere | Your stack uses `uv add`. The agent will use uv |

There are also three things I'm only medium-confident about, so the agent checks them at runtime instead of hard-coding them. First, `python-jose` has maintenance concerns, so I default to PyJWT. Second, Microsoft moved AutoGen toward its newer Agent Framework, and `pip install autogen` may not install the package you expect. Third, Vaex shows little recent activity.

## Part 2: The agent

### File tree
```
python-universe-agent/
├── pyproject.toml
├── src/python_universe/{__init__.py, server.py, catalog.py, watchdog.py}
├── skill/SKILL.md
└── tests/test_server.py
```

### `pyproject.toml`
```toml
[project]
name = "python-universe-agent"
version = "1.0.0"
description = "Live-verified Python ecosystem expert — MCP server + skill pack. Built by RJ Business Solutions."
requires-python = ">=3.13"
dependencies = ["mcp[cli]>=1.0", "httpx>=0.28"]

[dependency-groups]
dev = ["pytest>=9.0", "respx>=0.22"]

[project.scripts]
python-universe = "python_universe.server:main"

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.build.targets.wheel]
packages = ["src/python_universe"]
```
Running `uv lock` writes exact pins to `uv.lock`, which satisfies your no-`^`/`~` rule. I left lower bounds in `pyproject.toml` because I'm not going to guess patch versions for `mcp` or `httpx` from memory.

### `src/python_universe/watchdog.py`
```python
"""Supply-chain heuristics: typosquat distance against high-value package names."""
from __future__ import annotations

from python_universe.catalog import POPULAR


def levenshtein(a: str, b: str) -> int:
    """Classic edit distance, O(len(a)*len(b))."""
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]


def typosquat_neighbors(name: str) -> list[str]:
    """Popular packages within edit distance 1 — rule: must be ≥2 away."""
    n = name.lower().replace("_", "-")
    return [p for p in POPULAR if p != n and levenshtein(n, p) < 2]
```

### `src/python_universe/catalog.py`
```python
"""Opinionated defaults. Versions deliberately absent — always fetched live."""
from __future__ import annotations

CATALOG: dict[str, dict[str, object]] = {
    "web-api": {"default": "fastapi", "alts": ["litestar", "starlette", "falcon"], "notes": "Pydantic v2 native; pin exact via uv.lock."},
    "web-fullstack": {"default": "django", "alts": ["reflex", "flask"], "notes": "Django 6 ships a built-in tasks framework."},
    "data-validation": {"default": "pydantic", "alts": ["msgspec", "attrs"], "notes": "Use strict mode at trust boundaries."},
    "settings": {"default": "pydantic-settings", "alts": ["python-dotenv"], "notes": "Never commit .env."},
    "orm": {"default": "sqlalchemy", "alts": ["sqlmodel", "tortoise-orm"], "notes": "SQLAlchemy 2.0 async style only."},
    "migrations": {"default": "alembic", "alts": [], "notes": "Always write down-migrations."},
    "postgres-driver": {"default": "asyncpg", "alts": ["psycopg"], "notes": "psycopg 3 for sync + async in one."},
    "http-client": {"default": "httpx", "alts": ["aiohttp", "requests"], "notes": "Mock with respx."},
    "scraping": {"default": "playwright", "alts": ["scrapy", "beautifulsoup4", "lxml"], "notes": "Respect robots.txt and ToS."},
    "task-queue": {"default": "celery", "alts": ["arq", "dramatiq", "taskiq"], "notes": "Django 6 tasks for simple cases."},
    "testing": {"default": "pytest", "alts": ["hypothesis", "coverage", "locust", "faker"], "notes": "pytest 9 has native subtests."},
    "lint-format": {"default": "ruff", "alts": [], "notes": "Replaces black + isort + flake8."},
    "type-check": {"default": "pyright", "alts": ["mypy", "ty"], "notes": "ty is Astral's checker — verify maturity before CI-gating."},
    "package-mgmt": {"default": "uv", "alts": ["poetry", "hatch", "pipx"], "notes": "uv add / uv lock / uv run. Never global pip."},
    "llm-agents": {"default": "pydantic-ai", "alts": ["langgraph", "crewai", "openai-agents", "llama-index"], "notes": "LangGraph for durable state; CrewAI for role crews."},
    "llm-structured-output": {"default": "instructor", "alts": ["pydantic-ai"], "notes": "Validate every LLM output with Pydantic."},
    "llm-sdk": {"default": "anthropic", "alts": ["openai", "litellm"], "notes": "Claude docs: https://docs.claude.com"},
    "ml-classic": {"default": "scikit-learn", "alts": ["xgboost", "lightgbm"], "notes": ""},
    "deep-learning": {"default": "torch", "alts": ["transformers", "keras", "tensorflow"], "notes": "PyPI name is torch."},
    "dataframes": {"default": "polars", "alts": ["pandas", "pyarrow", "duckdb"], "notes": "Vaex: low recent activity — verify before use."},
    "viz": {"default": "plotly", "alts": ["matplotlib", "seaborn", "altair", "bokeh"], "notes": ""},
    "cli": {"default": "typer", "alts": ["click", "argparse"], "notes": "rich for output, textual for TUIs."},
    "logging": {"default": "structlog", "alts": ["loguru", "logging"], "notes": "JSON logs in prod."},
    "retries": {"default": "tenacity", "alts": [], "notes": "Exponential backoff + jitter."},
    "fast-json": {"default": "orjson", "alts": ["msgspec", "msgpack"], "notes": ""},
    "password-hashing": {"default": "argon2-cffi", "alts": ["pwdlib"], "notes": "argon2id only. passlib unmaintained; no bcrypt."},
    "jwt": {"default": "pyjwt", "alts": ["authlib"], "notes": "RS256 only. python-jose has maintenance concerns."},
    "crypto": {"default": "cryptography", "alts": [], "notes": "Use secrets (stdlib) for tokens."},
    "security-audit": {"default": "pip-audit", "alts": ["bandit"], "notes": "Run in CI, fail on critical."},
    "pdf": {"default": "weasyprint", "alts": ["reportlab", "fpdf2"], "notes": ""},
    "office-docs": {"default": "openpyxl", "alts": ["python-docx", "python-pptx"], "notes": ""},
    "payments": {"default": "stripe", "alts": [], "notes": "Verify webhook signatures; idempotency keys."},
    "observability": {"default": "sentry-sdk", "alts": ["logfire", "opentelemetry-sdk"], "notes": ""},
    "desktop-gui": {"default": "pyside6", "alts": ["flet", "customtkinter", "dearpygui", "tkinter"], "notes": ""},
    "binary-packaging": {"default": "pyinstaller", "alts": ["nuitka"], "notes": ""},
}

DEPRECATIONS: dict[str, str] = {
    "passlib": "Appears unmaintained. Use argon2-cffi or pwdlib.",
    "python-jose": "Maintenance concerns. Prefer pyjwt.",
    "autogen": "Name may not resolve to Microsoft's package; Microsoft moved toward Agent Framework. Verify.",
    "pytz": "Use stdlib zoneinfo.",
    "toml": "Use stdlib tomllib for reading (3.11+).",
    "nose": "Dead. Use pytest.",
    "vaex": "Low recent activity. Prefer polars.",
}

STDLIB_NOTES: dict[str, str] = {
    "3.13": "PEP 594 dead batteries removed (cgi, telnetlib, crypt, nntplib, etc.).",
    "3.14": "Free-threading officially supported (PEP 779); t-strings via string.templatelib (PEP 750); deferred annotations + annotationlib (PEP 649/749); concurrent.interpreters (PEP 734); compression.zstd.",
    "3.15": "lazy imports (PEP 810), frozendict (PEP 814), sentinel (PEP 661), UTF-8 default (PEP 686), comprehension unpacking (PEP 798), profiling + Tachyon (PEP 799); profile module deprecated (removal 3.17).",
}

POPULAR: list[str] = [
    "requests", "numpy", "pandas", "django", "flask", "fastapi", "pydantic", "boto3",
    "urllib3", "setuptools", "httpx", "sqlalchemy", "pytest", "scipy", "matplotlib",
    "pillow", "cryptography", "openai", "anthropic", "langchain", "torch", "tensorflow",
    "celery", "redis", "stripe", "colorama", "jinja2", "pyyaml", "click", "rich", "polars",
]
```

### `src/python_universe/server.py`
```python
"""python-universe MCP server — live-verified Python ecosystem intelligence."""
from __future__ import annotations

import json
import sys
from datetime import datetime, timezone

import httpx
from mcp.server.fastmcp import FastMCP

from python_universe.catalog import CATALOG, DEPRECATIONS, STDLIB_NOTES
from python_universe.watchdog import typosquat_neighbors

mcp = FastMCP("python-universe")
_HEADERS = {"User-Agent": "python-universe-agent/1.0 (+https://rjbusinesssolutions.org)"}


def _get_json(url: str) -> dict | list:
    with httpx.Client(timeout=10.0, headers=_HEADERS, follow_redirects=True) as client:
        resp = client.get(url)
        resp.raise_for_status()
        return resp.json()


@mcp.tool()
def pypi_latest(package: str) -> dict:
    """Live latest version + metadata from PyPI. Never quote versions from memory."""
    url = f"https://pypi.org/pypi/{package}/json"
    try:
        data = _get_json(url)
    except httpx.HTTPError as exc:
        return {"package": package, "error": f"PyPI lookup failed: {exc}"}
    info, releases = data["info"], data["releases"]
    uploads = [f["upload_time_iso_8601"] for files in releases.values() for f in files]
    latest_files = releases.get(info["version"], [])
    license_str = (info.get("license_expression") or info.get("license") or "")[:200]
    return {
        "package": info["name"],
        "version": info["version"],
        "released": max((f["upload_time_iso_8601"] for f in latest_files), default=None),
        "first_release": min(uploads, default=None),
        "requires_python": info.get("requires_python"),
        "license": license_str or None,
        "osi_classifier": any("OSI Approved" in c for c in info.get("classifiers", [])),
        "has_wheel": any(f.get("packagetype") == "bdist_wheel" for f in latest_files),
        "deprecation_note": DEPRECATIONS.get(info["name"].lower()),
        "source": url,
    }


@mcp.tool()
def watchdog_check(package: str) -> dict:
    """Pre-install gate: age ≥90d, ≥1k weekly downloads, typosquat, license, wheel-only."""
    meta = pypi_latest(package)
    if "error" in meta:
        return {"package": package, "verdict": "BLOCK", "reasons": [meta["error"]]}
    reasons: list[str] = []
    if meta["first_release"]:
        age = (datetime.now(timezone.utc) - datetime.fromisoformat(meta["first_release"])).days
        if age < 90:
            reasons.append(f"first release only {age} days ago (<90)")
    name = meta["package"].lower().replace("_", "-")
    try:
        weekly = _get_json(f"https://pypistats.org/api/packages/{name}/recent")["data"]["last_week"]
        if weekly < 1000:
            reasons.append(f"{weekly} downloads last week (<1000)")
    except (httpx.HTTPError, KeyError):
        reasons.append("download stats unavailable — verify manually")
    if near := typosquat_neighbors(name):
        reasons.append(f"edit distance 1 from popular package(s): {near}")
    if not (meta["license"] or meta["osi_classifier"]):
        reasons.append("no license metadata")
    if not meta["has_wheel"]:
        reasons.append("sdist-only latest release — install executes build code")
    if meta["deprecation_note"]:
        reasons.append(meta["deprecation_note"])
    return {"package": meta["package"], "version": meta["version"],
            "verdict": "PASS" if not reasons else "REVIEW", "reasons": reasons}


@mcp.tool()
def python_release_status() -> list[dict]:
    """Live CPython support matrix (latest patch, release date, EOL) via endoflife.date."""
    data = _get_json("https://endoflife.date/api/python.json")
    return [{"cycle": d["cycle"], "latest": d["latest"],
             "latest_release_date": d.get("latestReleaseDate"), "eol": d["eol"],
             "highlights": STDLIB_NOTES.get(d["cycle"])} for d in data[:6]]


@mcp.tool()
def stdlib_lookup(module: str) -> dict:
    """Is it stdlib on this interpreter? Returns the official docs URL if so."""
    in_stdlib = module.split(".")[0] in sys.stdlib_module_names
    return {"module": module, "in_stdlib": in_stdlib,
            "checked_against": f"CPython {sys.version.split()[0]}",
            "docs": f"https://docs.python.org/3/library/{module}.html" if in_stdlib else None}


@mcp.tool()
def recommend(domain: str) -> dict:
    """Opinionated default + alternatives for a domain (e.g. 'jwt', 'orm', 'llm-agents')."""
    key = domain.lower().strip()
    hits = {k: v for k, v in CATALOG.items() if key in k or k in key}
    return hits or {"error": f"no domain '{domain}'", "domains": sorted(CATALOG)}


@mcp.resource("universe://catalog")
def catalog_resource() -> str:
    """Full catalog + deprecations + stdlib notes as JSON."""
    return json.dumps({"catalog": CATALOG, "deprecations": DEPRECATIONS,
                       "stdlib": STDLIB_NOTES}, indent=2)


def main() -> None:
    mcp.run()


if __name__ == "__main__":
    main()
```

### `tests/test_server.py`
```python
import httpx
import respx

from python_universe import server
from python_universe.watchdog import levenshtein, typosquat_neighbors

OLD_PKG = {
    "info": {"name": "fastapi", "version": "9.9.9", "requires_python": ">=3.10",
             "license_expression": "MIT", "classifiers": []},
    "releases": {
        "0.1.0": [{"upload_time_iso_8601": "2018-12-05T00:00:00Z", "packagetype": "sdist"}],
        "9.9.9": [{"upload_time_iso_8601": "2026-09-30T00:00:00Z", "packagetype": "bdist_wheel"}],
    },
}


@respx.mock
def test_pypi_latest_should_return_live_version_when_package_exists():
    respx.get("https://pypi.org/pypi/fastapi/json").mock(return_value=httpx.Response(200, json=OLD_PKG))
    out = server.pypi_latest("fastapi")
    assert out["version"] == "9.9.9" and out["has_wheel"] and out["first_release"].startswith("2018")


@respx.mock
def test_watchdog_should_pass_when_package_is_mature_and_popular():
    respx.get("https://pypi.org/pypi/fastapi/json").mock(return_value=httpx.Response(200, json=OLD_PKG))
    respx.get("https://pypistats.org/api/packages/fastapi/recent").mock(
        return_value=httpx.Response(200, json={"data": {"last_week": 5_000_000}}))
    assert server.watchdog_check("fastapi")["verdict"] == "PASS"


@respx.mock
def test_watchdog_should_block_when_package_missing():
    respx.get("https://pypi.org/pypi/nope-xyz/json").mock(return_value=httpx.Response(404))
    assert server.watchdog_check("nope-xyz")["verdict"] == "BLOCK"


def test_typosquat_should_flag_when_one_edit_from_popular():
    assert levenshtein("requests", "reqests") == 1
    assert "requests" in typosquat_neighbors("reqests")
    assert typosquat_neighbors("requests") == []


def test_stdlib_lookup_should_detect_stdlib_module():
    assert server.stdlib_lookup("pathlib")["in_stdlib"] is True
    assert server.stdlib_lookup("fastapi")["in_stdlib"] is False
```

### `skill/SKILL.md`
This is the knowledge layer. Drop it into any agent's skills folder or system prompt.
```markdown
---
name: python-universe
description: Python ecosystem expert. Use for any Python library choice, version question, stdlib lookup, dependency vetting, or project setup. Verifies versions live via the python-universe MCP tools.
---

# Python Universe — Operating Rules

1. NEVER state a package or Python version from memory. Call `pypi_latest` or `python_release_status` first and cite the returned `source`.
2. Before recommending any install, run `watchdog_check`. PASS → proceed. REVIEW → show reasons, ask. BLOCK → refuse.
3. For "which library for X", call `recommend`. Default to the catalog pick unless the user's constraints say otherwise; explain the tradeoff in one line.
4. Before suggesting a third-party package, check `stdlib_lookup` — stdlib wins when it's sufficient (zoneinfo over pytz, tomllib over toml, secrets over random for tokens).
5. Tooling: `uv init`, `uv add`, `uv lock`, `uv run`. Never global pip. Lint/format with ruff. Test with pytest.

# Language knowledge (re-verify with python_release_status)
- 3.13: PEP 594 dead batteries removed; experimental free-threaded build + JIT.
- 3.14 (Oct 2025): free-threading officially supported (PEP 779), template strings `t"..."` (PEP 750, string.templatelib), deferred annotations + annotationlib (PEP 649/749), concurrent.interpreters (PEP 734), compression.zstd.
- 3.15 (final scheduled 2026-10-09): `lazy import x` (PEP 810), frozendict + sentinel builtins, UTF-8 default encoding (PEP 686 — still pass encoding= explicitly for cross-version code), `[*L for L in lists]` comprehension unpacking (PEP 798), `profiling.sampling` (Tachyon) + `profiling.tracing`; `profile` module deprecated.

# Security defaults
argon2id via argon2-cffi (never bcrypt, never passlib). JWT via PyJWT, RS256 only. Pydantic strict mode at trust boundaries. Parameterized SQL only. pip-audit in CI.

# Canonical sources
docs.python.org/3/py-modindex.html · peps.python.org · pypi.org · pydantic.dev/docs · fastapi.tiangolo.com · docs.astral.sh · docs.claude.com
```

## Part 3: Connecting it to agents

```zsh
cd ~/code && uv init --package python-universe-agent && cd python-universe-agent
# drop files in, then:
uv lock && uv run pytest -q
```

To add it to Claude Code, register the server and copy in the skill:
```zsh
claude mcp add python-universe -- uv --directory ~/code/python-universe-agent run python-universe
mkdir -p ~/.claude/skills/python-universe && cp skill/SKILL.md ~/.claude/skills/python-universe/
```

For Claude Desktop or any other MCP client, add this to `mcpServers`:
```json
{ "python-universe": { "command": "uv", "args": ["--directory", "/Users/YOU/code/python-universe-agent", "run", "python-universe"] } }
```

For CrewAI, LangGraph or PydanticAI, point each framework's MCP stdio adapter at the same command and paste `SKILL.md` into the agent's instructions.

To push it to GitHub as a private repo:
```zsh
git init && git add . && git commit -m "feat: python-universe-agent — RJ Business Solutions"
gh repo create rjbizsolution23-wq/python-universe-agent --private --source=. --push
```

**Caveats:**
- I can't run code or push to GitHub from here, so none of this has been executed. `uv run pytest -q` is the first check, and you should run it before connecting anything.
- If `mcp` changes its FastMCP import path, the error will show up on line 1 of `server.py`.
- I didn't rebuild the full 23-step monorepo for this. A tool with five functions doesn't need Stripe or Turborepo.

**Sources:**
1. [PEP 745, Python 3.14 release schedule](https://peps.python.org/pep-0745/)
2. [Python 3.15.0rc3 release page](https://www.python.org/downloads/latest/python3.15/)
3. [What's New in Python 3.15](https://docs.python.org/3.15/whatsnew/3.15.html)
4. [Pydantic v2.13 release post](https://pydantic.dev/articles/pydantic-v2-13-release)
5. [Pydantic docs](https://pydantic.dev/docs/validation/dev/get-started/)
6. [FastAPI on PyPI](https://pypi.org/project/fastapi/)
7. [CrewAI on PyPI](https://pypi.org/project/crewai/)
8. [LangChain changelog](https://docs.langchain.com/oss/python/releases/changelog)
9. [LangChain and LangGraph 1.0 announcement](https://www.langchain.com/blog/langchain-langgraph-1dot0)
10. [Django 6.0 release announcement](https://www.djangoproject.com/weblog/2025/dec/03/django-60-released/)
11. [pytest release announcements](https://docs.pytest.org/en/stable/announce/index.html)
12. [ruff versions on mise](https://mise-versions.jdx.dev/tools/ruff)
13. [Simon Willison on OpenAI acquiring Astral](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/)
14. [SecureDrop issue on dropping passlib for argon2-cffi](https://github.com/freedomofpress/securedrop/issues/6631)
