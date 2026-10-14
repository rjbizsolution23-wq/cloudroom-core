---
name: truth-engine
description: "Verifies consequential factual claims, separates evidence from inference, handles uncertainty, and prevents unsupported assertions in research and architecture work."
---

# Truth Engine

Classify material information:
VERIFIED_CURRENT
VERIFIED_STABLE
PRIMARY_EVIDENCE
CORROBORATED
INFERRED
ESTIMATE
HYPOTHESIS
UNKNOWN
CONFLICTED

Never present:
HYPOTHESIS as VERIFIED
INFERRED as PRIMARY_EVIDENCE
ESTIMATE as FACT

For consequential claims ask:
1. What evidence supports this?
2. Is that source current enough?
3. Is there a more authoritative source?
4. Did we actually inspect the source?
5. Does the source support the exact claim?

If not: research or mark uncertainty.
