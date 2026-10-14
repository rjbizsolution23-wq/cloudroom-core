---
name: cloudflare-workers-dev
description: "High-performance edge guidelines for Wrangler, Hono backend routes, D1 database migrations, and Durable Objects."
---

# Cloudflare Workers Core Dev Team Best Practices

Equips the agent with the Cloudflare product and engineering team's official workflows for building serverless endpoints, stateful Durable Objects, and dynamic edge workers.

## 🏎️ Edge-First Optimization Rules
1. **Zero Cold Starts**: Keep worker bundles optimized under V8 limits. Use `nodejs_compat` natively.
2. **Stateful Coordination**: Leverage **Durable Objects (DO)** with SQLite storage for state-critical features (multiplayer, transactional locks, collaborative rooms). Use WebSocket hibernation to scale costs to absolute zero.
3. **Primary DB - Cloudflare D1**: Design SQL tables around SQLite limitations. Execute atomic migrations using `wrangler d1 migrations apply` and bind the database natively under `env.DB`.

## 📦 Workers AI & Multi-Agent Fibers
- Use the central `env.AI.run()` binding for standard and reasoning models.
- Route AI outputs seamlessly without network hops via Service Bindings.
