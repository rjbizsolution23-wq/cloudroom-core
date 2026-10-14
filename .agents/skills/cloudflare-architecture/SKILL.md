---
name: cloudflare-architecture
description: "Selects appropriate Cloudflare components for compute, storage, durable state, async execution, AI, queues, caching and deployment without overengineering."
---

# Cloudflare Architecture

Evaluate by requirement:
SHORT REQUEST/RESPONSE → Worker
PERSISTENT PER-ENTITY STATE → evaluate Durable Objects
RESUMABLE LONG-RUNNING PROCESS → evaluate Workflows
BACKGROUND EVENTS → evaluate Queues
RELATIONAL SERVERLESS DATA → evaluate D1
OBJECT/BLOB STORAGE → evaluate R2
KEY/VALUE CACHE OR CONFIG → evaluate KV
NATIVE AI → evaluate Workers AI
MULTI-PROVIDER AI CONTROL → evaluate AI Gateway
AGENT STATE → evaluate Agents SDK
VECTOR RETRIEVAL → evaluate Vectorize

Do not use a service solely because it exists.
Verify current Cloudflare docs before emitting configuration.
