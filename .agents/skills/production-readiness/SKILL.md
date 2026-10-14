---
name: production-readiness
description: "Enforces launch gates covering builds, tests, security, secrets, configuration, persistence, migrations, observability, recovery, documentation and deployment."
---

# Production Readiness

Applicable checks:
[ ] installation reproducible
[ ] typecheck passes
[ ] lint passes
[ ] tests pass
[ ] build passes
[ ] critical workflows verified
[ ] security reviewed
[ ] no critical vulnerabilities open
[ ] secrets protected
[ ] production configuration verified
[ ] migrations defined
[ ] logging/observability adequate
[ ] recovery/rollback considered
[ ] documentation current

Do not mark production-ready when a mandatory item is unresolved.
