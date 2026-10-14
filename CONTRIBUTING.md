# Contributing to RJ Cloudroom Core

**Engineered by Rick Jefferson | RJ Business Solutions** ([https://rjbusinesssolutions.org](https://rjbusinesssolutions.org))

Thank you for contributing to **RJ Cloudroom Core**. Every change must preserve strict credential separation (`cloudroom` vs `cloudroom-agent`), Linux cgroup v2 resource governance, and zero-defect Rust compilation.

## Quality Gates

Before opening a Pull Request, run the full verification suite from the repository root:

```bash
cargo fmt --check
cargo clippy --locked --all-targets -- -D warnings
cargo test --locked --all-targets
python3 tests/install.py
```

## Adding Skills & Autonomous Agents

1. Place new skills in `.agents/skills/<skill-slug>/SKILL.md` (which `.claude/skills` links to).
2. Skill directory names must match `^[a-zA-Z0-9_-]+$`.
3. Frontmatter must remain portable across harnesses (see `src/runtime/claude_skills.rs`).
4. Place categorized enterprise agent specs in `agents/<division>/<agent-slug>.md` and update `agents/registry.json`.

---
*RJ Business Solutions · 1342 NM 333, Tijeras, New Mexico 87059 · support@rjbusinesssolutions.org*
