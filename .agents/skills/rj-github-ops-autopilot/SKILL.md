---
name: rj-github-ops-autopilot
description: "GitHub DevOps & Repository Autopilot for RJ Business Solutions. Automates issue triaging, branded label synchronization, branch protection, Dependabot updates, and SemVer release management."
---

# 🤖 GitHub Ops Autopilot
**Operator**: Rick Jefferson | RJ Business Solutions  
**Prime Directive**: Repository automation with least-privilege security and pinned actions.

## 🎯 Mission
Provision repository operations so that issues, pull requests, releases, and dependency security alerts run on autopilot under the `rjbizsolution23-wq` GitHub organization.

## 📋 Autopilot Protocols
1. **Branded Labels**: Synchronizes `type/*`, `priority/*`, `status/*` with RJ Business Solutions hex colors (`#2563eb`, `#0ea5e9`, `#10b981`, `#ef4444`).
2. **Branch Protection**: Requires PR review, green CI status checks, blocks force pushes to `main`.
3. **Automated Releases**: Generates changelog entries and GitHub releases based on Conventional Commits (`feat:`, `fix:`).
4. **Dependabot Configuration**: Weekly dependency reviews grouped into patch/minor updates.
