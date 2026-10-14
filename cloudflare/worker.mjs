import PORTAL_HTML from "../src/rj_portal.html";
import REGISTRY from "../agents/registry.json";
import BRAND_TOKENS from "../brand/tokens.json";

const FEATURES = [
  "stop", "resume", "launch_settings", "prompt_reasoning", "workspaces",
  "sync", "mcp_sync", "direct_workspaces", "root_workspace", "teleport",
  "command_guard", "strip_ai_co_authors", "system_prompt", "computer_use",
  "codex_auth", "codex_auth_import", "cursor_auth", "claude_auth",
  "pi_auth_import", "pi_setup", "structured_prompt", "queue_edit",
  "queue_cancel", "queue_reorder", "steer", "rewind", "fork", "side_chat",
  "attachments", "upload_parts", "compact", "goal", "usage", "subagents",
  "child_threads", "session_list", "drain", "terminals", "files_wait"
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Cloudroom-Token"
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...CORS_HEADERS
    }
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // 1. Executive RJ Business Solutions Command Center UI
    if (path === "/" || path === "/portal") {
      return new Response(PORTAL_HTML, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          ...CORS_HEADERS
        }
      });
    }

    // 2. Bundled 222 Agents & 416 Skills Catalog + RJ Brand Tokens
    if (path === "/rj/catalog" || path === "/v1/rj/catalog") {
      return jsonResponse(REGISTRY);
    }

    if (path === "/rj/brand" || path === "/v1/rj/brand") {
      return jsonResponse(BRAND_TOKENS);
    }

    // 3. Individual Agent Specification Lookup
    const agentMatch = path.match(/^\/(?:v1\/)?rj\/agents\/([^/]+)$/);
    if (agentMatch) {
      const id = decodeURIComponent(agentMatch[1]);
      const agent = REGISTRY.agents.find((a) => a.id === id);
      if (!agent) {
        return jsonResponse({ error: "agent not found", id }, 404);
      }
      const rawBase = env.GITHUB_RAW_BASE || "https://raw.githubusercontent.com/rjbizsolution23-wq/cloudroom-core/main";
      let content = "";
      try {
        const res = await fetch(`${rawBase}/${agent.path}`);
        if (res.ok) content = await res.text();
      } catch (_) {}
      return jsonResponse({
        id: agent.id,
        name: agent.name,
        category: agent.category,
        path: agent.path,
        content
      });
    }

    // 4. Individual Runtime Skill SKILL.md Lookup
    const skillMatch = path.match(/^\/(?:v1\/)?rj\/skills\/([^/]+)$/);
    if (skillMatch) {
      const slug = decodeURIComponent(skillMatch[1]);
      const skill = REGISTRY.skills.find((s) => s.slug === slug);
      if (!skill) {
        return jsonResponse({ error: "skill not found", slug }, 404);
      }
      const rawBase = env.GITHUB_RAW_BASE || "https://raw.githubusercontent.com/rjbizsolution23-wq/cloudroom-core/main";
      let content = "";
      try {
        const res = await fetch(`${rawBase}/${skill.path}`);
        if (res.ok) content = await res.text();
      } catch (_) {}
      return jsonResponse({
        slug: skill.slug,
        description: skill.description,
        source: skill.source,
        path: skill.path,
        content
      });
    }

    // 5. Proxy to live Cloudroom Core upstream daemon if configured
    if (env.CLOUDROOM_UPSTREAM_URL && path.startsWith("/v1/")) {
      try {
        const upstreamUrl = new URL(path + url.search, env.CLOUDROOM_UPSTREAM_URL);
        const upstreamRes = await fetch(upstreamUrl.toString(), {
          method: request.method,
          headers: request.headers,
          body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body
        });
        return new Response(upstreamRes.body, {
          status: upstreamRes.status,
          headers: {
            ...Object.fromEntries(upstreamRes.headers.entries()),
            ...CORS_HEADERS
          }
        });
      } catch (_) {
        // Fall through to Cloudflare Edge responses if upstream tunnel is offline
      }
    }

    // 6. Cloudflare Edge Core Endpoints (/v1/health, /v1/ready, /v1/capabilities, /v1/dashboard, /v1/sessions)
    if (path === "/v1/health") {
      return jsonResponse({
        status: "ok",
        service: "rj-cloudroom-core",
        organization: "RJ Business Solutions",
        architect: "Rick Jefferson, CEO",
        version: env.VERSION || "0.1.57",
        mode: "cloudflare-edge",
        bundled_agents: REGISTRY.total_agents,
        bundled_skills: REGISTRY.total_skills
      });
    }

    if (path === "/v1/ready") {
      return jsonResponse({
        ready: true,
        organization: "RJ Business Solutions",
        bundled_agents: REGISTRY.total_agents,
        bundled_skills: REGISTRY.total_skills
      });
    }

    if (path === "/v1/capabilities") {
      return jsonResponse({
        version: env.VERSION || "0.1.57",
        organization: "RJ Business Solutions",
        features: FEATURES,
        rj_enterprise: {
          agents_count: REGISTRY.total_agents,
          skills_count: REGISTRY.total_skills,
          divisions: [...new Set(REGISTRY.agents.map((a) => a.category))].sort()
        }
      });
    }

    if (path === "/v1/dashboard") {
      return jsonResponse({
        organization: "RJ Business Solutions",
        architect: "Rick Jefferson, CEO",
        engine: "Cloudroom Core v0.1.57 (Cloudflare Edge + Local Rust Daemon)",
        status: "online",
        agents_registered: REGISTRY.total_agents,
        skills_registered: REGISTRY.total_skills,
        active_sessions: 0,
        harnesses: ["claude-code", "codex", "pi", "cursor", "opencode", "fx", "hermes"]
      });
    }

    if (path === "/v1/sessions") {
      return jsonResponse({
        sessions: [],
        note: "Connect a live Cloudroom Core Rust daemon tunnel via CLOUDROOM_UPSTREAM_URL or run ./start-cloudroom.sh locally to spawn OS-level container/PTY sessions."
      });
    }

    return jsonResponse({ error: "not_found", path }, 404);
  }
};
