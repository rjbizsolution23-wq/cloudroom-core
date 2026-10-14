use crate::session::Manager;
use axum::{
    Json, Router,
    extract::{Path, State},
    http::StatusCode,
    response::{Html, IntoResponse},
    routing::get,
};
use serde_json::{Value, json};
use std::{
    fs,
    path::{Path as FsPath, PathBuf},
    sync::{Arc, LazyLock},
};

const PORTAL_HTML: &str = include_str!("rj_portal.html");
const REGISTRY_JSON: &str = include_str!("../agents/registry.json");
const BRAND_TOKENS_JSON: &str = include_str!("../brand/tokens.json");

static REGISTRY: LazyLock<Value> =
    LazyLock::new(|| serde_json::from_str(REGISTRY_JSON).expect("valid agents/registry.json"));
static BRAND_TOKENS: LazyLock<Value> =
    LazyLock::new(|| serde_json::from_str(BRAND_TOKENS_JSON).expect("valid brand/tokens.json"));

pub fn public_routes() -> Router<Arc<Manager>> {
    Router::new()
        .route("/", get(portal))
        .route("/portal", get(portal))
        .route("/rj/catalog", get(catalog))
        .route("/rj/brand", get(brand))
        .route("/rj/agents/{id}", get(agent_detail))
        .route("/rj/skills/{slug}", get(skill_detail))
}

pub fn v1_routes() -> Router<Arc<Manager>> {
    Router::new()
        .route("/v1/rj/catalog", get(catalog))
        .route("/v1/rj/brand", get(brand))
        .route("/v1/rj/agents/{id}", get(agent_detail))
        .route("/v1/rj/skills/{slug}", get(skill_detail))
}

async fn portal() -> Html<&'static str> {
    Html(PORTAL_HTML)
}

async fn catalog() -> Json<Value> {
    Json(REGISTRY.clone())
}

async fn brand() -> Json<Value> {
    Json(BRAND_TOKENS.clone())
}

fn candidate_roots(manager: &Manager) -> Vec<PathBuf> {
    vec![
        manager.config.repository.clone(),
        manager.config.account_home.join(".cloudroom"),
        manager.config.account_home.clone(),
        PathBuf::from(env!("CARGO_MANIFEST_DIR")),
    ]
}

fn read_relative(manager: &Manager, rel_path: &str) -> Option<String> {
    let rel = FsPath::new(rel_path);
    if rel.is_absolute()
        || rel
            .components()
            .any(|c| matches!(c, std::path::Component::ParentDir))
    {
        return None;
    }
    for root in candidate_roots(manager) {
        let candidate = root.join(rel);
        if let Ok(content) = fs::read_to_string(&candidate) {
            return Some(content);
        }
    }
    None
}

async fn agent_detail(
    State(manager): State<Arc<Manager>>,
    Path(id): Path<String>,
) -> impl IntoResponse {
    let Some(agent) = REGISTRY["agents"]
        .as_array()
        .and_then(|list| list.iter().find(|item| item["id"].as_str() == Some(&id)))
    else {
        return (
            StatusCode::NOT_FOUND,
            Json(json!({ "error": "agent not found", "id": id })),
        );
    };
    let rel_path = agent["path"].as_str().unwrap_or_default();
    let content = read_relative(&manager, rel_path).unwrap_or_default();
    (
        StatusCode::OK,
        Json(json!({
            "id": agent["id"],
            "name": agent["name"],
            "category": agent["category"],
            "path": rel_path,
            "content": content,
        })),
    )
}

async fn skill_detail(
    State(manager): State<Arc<Manager>>,
    Path(slug): Path<String>,
) -> impl IntoResponse {
    let Some(skill) = REGISTRY["skills"].as_array().and_then(|list| {
        list.iter()
            .find(|item| item["slug"].as_str() == Some(&slug))
    }) else {
        return (
            StatusCode::NOT_FOUND,
            Json(json!({ "error": "skill not found", "slug": slug })),
        );
    };
    let rel_path = skill["path"].as_str().unwrap_or_default();
    let content = read_relative(&manager, rel_path).unwrap_or_default();
    (
        StatusCode::OK,
        Json(json!({
            "slug": skill["slug"],
            "description": skill["description"],
            "source": skill["source"],
            "path": rel_path,
            "content": content,
        })),
    )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn embedded_catalog_and_brand_tokens_parse_cleanly() {
        let agents = REGISTRY["agents"].as_array().expect("agents array");
        let skills = REGISTRY["skills"].as_array().expect("skills array");
        assert_eq!(agents.len(), 222);
        assert_eq!(skills.len(), 416);
        assert!(BRAND_TOKENS.is_object());
        assert!(PORTAL_HTML.contains("RJ Business Solutions"));
    }
}
