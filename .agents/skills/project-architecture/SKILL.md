---
name: project-architecture
description: "Converts verified requirements into the minimum reliable maintainable architecture with explicit tradeoffs and acceptance criteria."
---

# Project Architecture

Start with requirements, not preferred technologies.
For every component answer:
WHY DOES THIS EXIST?

If the answer is weak, remove it.
Prefer:
- fewer moving parts
- explicit interfaces
- deterministic processing
- portable boundaries
- observable failure
- incremental growth

Create ADRs for significant irreversible decisions.
