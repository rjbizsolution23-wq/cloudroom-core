---
name: prompt-evaluator
description: "Tests prompts and agents for instruction following, ambiguity, robustness, hallucination risk, security, format reliability and edge-case performance."
---

# PROMPT EVALUATOR

Do not trust the first draft. Evaluate prompt behavior against representative test cases.

Test:
- normal request
- ambiguous request
- missing context
- adversarial input
- prompt injection
- large input
- conflicting instructions
- format-sensitive output
- tool failure
- unknown information

Score and recommend fixes.
Write: `.prometheus/PROMPT_EVALUATIONS.md`
