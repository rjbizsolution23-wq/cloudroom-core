# 🏛️ RJ Cloudroom Core — Agent & Engineering Guidelines

**Engineered by Rick Jefferson | RJ Business Solutions** ([https://rjbusinesssolutions.org](https://rjbusinesssolutions.org))

This repository powers **RJ Cloudroom Core**: the Linux daemon, HTTP API, harness supervisor (Claude Code, Codex, Pi), file/skill synchronizer, and sovereign repository for **416 invocable skills** (`.agents/skills/` / `.claude/skills/`) and **222 autonomous agents** (`agents/`).

---

## 1. Sovereign Engineering Principles (Cloudroom Core)

- **Think from first principles.** Do not copy patterns without knowing why they fit here. Solve the root cause, not the symptom.
- **Keep it small and clear.** Prefer the simplest design that works in production. Delete dead code instead of working around it. Do not add helpers, layers, or options for hypothetical needs.
- **Name things well.** Use plain domain words. Avoid vague names like `data`, `info`, `helper`, `manager`, `service`, `utils`, `handler`, `process`, or `item` when a specific word fits.
- **Write short comments that explain why.** Do not narrate what the code already says. Comment invariants, trade-offs, protocol quirks, or non-obvious decisions.
- **Fail clearly.** Validate inputs at boundaries, handle errors explicitly, and never silently swallow failures.
- **Verify your work.** Run the relevant checks and tests before finishing (`cargo fmt --check`, `cargo clippy --locked --all-targets -- -D warnings`, `cargo test --locked --all-targets`), and state what you ran.
- **Do not commit or push unless asked.** Leave git history and remotes alone until the user asks.

---

## 2. Integrated Autonomous Agents & Skills Ecosystem

RJ Cloudroom Core ships with the complete **RJ Business Solutions** multi-agent and skill library pre-integrated:

| Component | Path | Count | Purpose |
| :--- | :--- | :--- | :--- |
| **Runtime Skills** | `.agents/skills/<slug>/SKILL.md` (symlinked at `.claude/skills`) | **416** | Natively loaded by `src/runtime/claude_skills.rs` and synced via `src/sync/mod.rs` (`skills-shared` & `skills-claude`). |
| **Autonomous Agents** | `agents/<division>/<slug>.md` | **222** | 10 specialized divisions (`directors`, `engineering`, `finance_credit_tax`, `growth_marketing_sales`, `legal_compliance`, `media_audio_video`, `operations_sop`, `orchestrators`, `specialized`, `plugins`). |
| **Master Registry** | `agents/registry.json` & `agents/CATALOG.md` | **1** | Machine-readable JSON index and full Markdown catalog of all 222 agents and 416 skills. |
| **Brand Design System** | `brand/` (`RJ-MASTER.md`, `brand.css`, `tokens.css`, `tokens.json`) | **Full** | Official RJ Business Solutions design tokens, typography (`Space Grotesk`, `Inter`), and executive palette (`#0f172a`, `#1e3a8a`, `#2563eb`, `#0ea5e9`). |
| **Home Provisioner** | `install/provision-rj-agents.py` | **CLI** | Provisions all 416 skills, 222 agents, and brand assets into the `cloudroom-agent` home directory (`~/.agents/skills` & `~/.claude/skills`). |

### Skill Compatibility Contract (`src/runtime/claude_skills.rs`)
Every skill in `.agents/skills/<name>/SKILL.md` must satisfy:
1. Directory `<name>` uses only ASCII `[a-zA-Z0-9_-]`.
2. Frontmatter starts with `---\n` and closes with `\n---\n` (using portable metadata keys `name` and `description`).
3. Frontmatter must **not** include harness-exclusive runtime flags (`allowed-tools`, `disallowed-tools`, `model`, `effort`, `context`, `agent`, `background`, `hooks`, `shell`, `arguments`, `user-invocable`), and the body must not contain raw shell-expansion directives (`!` backtick, `$ARGUMENTS`, `${CLAUDE_`).

---

## 3. RJ Business Solutions Brand & Compliance Standards

- **Legal Name**: RJ Business Solutions
- **Founder & CEO**: Rick Jefferson (Credit Technology Architect & AI Systems Builder)
- **Website**: [https://rjbusinesssolutions.org](https://rjbusinesssolutions.org)
- **Design Palette**: Primary Blue `#2563eb` · Sky `#0ea5e9` · Deep Blue `#1e3a8a` · Dark Navy `#0f172a` · Soft Light `#f8fafc`
- **Typography**: Display/Headings: `Space Grotesk` · Body: `Inter` · Code: `SF Mono` / `ui-monospace`
- **Compliance Notice**: *RJ Business Solutions provides software and automation technology. Not financial or legal advice.*
