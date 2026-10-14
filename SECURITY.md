<div align="center">
  <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ Business Solutions" width="72" />
  <h1>Security Policy — RJ Cloudroom Core</h1>
  <p><strong>Engineered by Rick Jefferson | RJ Business Solutions</strong></p>
</div>

---

## Reporting a Vulnerability

RJ Business Solutions takes the security of **RJ Cloudroom Core**, its systemd sandboxing boundaries, credential isolation (`cloudroom` vs `cloudroom-agent`), and its 416+ autonomous agent and skill modules seriously.

If you discover a security vulnerability, privilege escalation vector, or credential boundary issue, **do not open a public GitHub issue**.

Please report security vulnerabilities privately to:

- **Security & Support Email**: [support@rjbusinesssolutions.org](mailto:support@rjbusinesssolutions.org)
- **Lead Architect**: Rick Jefferson, CEO @ RJ Business Solutions
- **Website**: [https://rjbusinesssolutions.org](https://rjbusinesssolutions.org)

### What to Include

1. Affected component (`src/runtime`, `src/api`, `src/sync`, `install/`, or a specific agent/skill module in `.agents/skills/` or `agents/`).
2. Exact reproduction steps or proof-of-concept request/payload.
3. Expected vs. observed security boundary behavior.

We acknowledge vulnerability reports within **48 hours** and issue verified patches after full regression testing.
