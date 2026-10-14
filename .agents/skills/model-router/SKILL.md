---
name: model-router
description: "Discovers and evaluates current AI models and providers, creates task-specific routing plans, benchmarks representative tasks, selects primary/fallback models, and prevents stale model assumptions."
---

# MODEL ROUTER

Do not assume a permanent "best model."
Discover current candidates for the actual workload.

Evaluate:
- Cloudflare Workers AI
- OpenRouter
- Hugging Face
- other user-approved providers

For every candidate record:
- provider
- exact model ID
- task
- current availability
- free status if any
- cost
- context
- structured output support
- tool support
- modality
- latency
- limitations
- licensing concerns
- verification date

Create: 
When quality materially matters, build representative evaluations.
Store results: 

Choose:
PRIMARY
FAST/CHEAP
FALLBACK
SPECIALIST

Do not choose from leaderboard prestige alone. Prefer actual application performance.
