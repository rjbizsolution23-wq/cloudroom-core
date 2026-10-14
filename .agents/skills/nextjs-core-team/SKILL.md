---
name: nextjs-core-team
description: "Expert guidelines from the Next.js core engineering team for App Router, RSC, Turbopack, and high-performance server rendering."
---

# Next.js Core Team Engineering Guidelines (v15 & v16)

This skill equips the agent with official architecture principles established by the Vercel/Next.js Core team for shipping high-performance, secure, and production-hardened web applications.

## 🏛️ Core Principles & RSC-First Mentality
1. **Server-First Execution**: Default to React Server Components (RSC) to minimize Client-Side JavaScript. Move data fetching, expensive formatting, and heavy utility libraries entirely to the server layer.
2. **Client Boundaries**: Keep `'use client'` components at the absolute leaves of your component tree. Pass server-fetched data down via standard props.
3. **Data Fetching & Cache**: Leverage `fetch` with native cache configurations, or wrap database calls in React's `cache` utility for request-deduplication.

## ⚡ Next.js 16 Breaking Changes Compliance
- **Awaitable Async APIs**: In Next.js 16, dynamic functions (`cookies()`, `headers()`, `params`, `searchParams`) are strictly asynchronous. Always `await` them before reading properties.
- **Proxy Middleware**: Use `proxy.ts` (named export: `proxy`) instead of old `middleware.ts` conventions.
- **Turbopack Compilation**: Configure your bundlers to build natively with Turbopack for sub-millisecond hot-reloading speeds.
