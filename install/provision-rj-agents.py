#!/usr/bin/env python3
"""Provision RJ Business Solutions Autonomous Agents & Skills into the Cloudroom Agent Home.

Engineered by Rick Jefferson | RJ Business Solutions (https://rjbusinesssolutions.org)
Copies the repository's `.agents/skills/` (416 skills), `agents/` (222 agent modules),
and `brand/` (RJ Business Solutions design tokens) into the target agent home directory
and maintains the `.claude/skills -> ../.agents/skills` symlink.
"""
import argparse
import os
import pwd
import shutil
from pathlib import Path


def resolve_repo_root() -> Path:
    return Path(__file__).resolve().parents[1]


def provision(target_home: Path, owner_user: str | None = None) -> dict:
    repo_root = resolve_repo_root()
    src_skills = repo_root / ".agents" / "skills"
    src_agents = repo_root / "agents"
    src_brand = repo_root / "brand"

    if not src_skills.is_dir():
        raise FileNotFoundError(f"Missing skills directory: {src_skills}")

    target_home = target_home.resolve()
    dest_agents_dir = target_home / ".agents"
    dest_skills = dest_agents_dir / "skills"
    dest_catalog = dest_agents_dir / "agents"
    dest_brand = dest_agents_dir / "brand"
    dest_claude = target_home / ".claude"
    dest_claude_skills = dest_claude / "skills"

    dest_skills.mkdir(parents=True, exist_ok=True)
    dest_claude.mkdir(parents=True, exist_ok=True)

    # Copy skills
    skill_count = 0
    for item in sorted(src_skills.iterdir()):
        if item.is_dir() and (item / "SKILL.md").is_file():
            shutil.copytree(item, dest_skills / item.name, dirs_exist_ok=True)
            skill_count += 1

    # Copy agent definitions & registry
    agent_count = 0
    if src_agents.is_dir():
        shutil.copytree(src_agents, dest_catalog, dirs_exist_ok=True)
        agent_count = sum(1 for _ in dest_catalog.rglob("*.md"))

    # Copy RJ Brand Universe tokens
    if src_brand.is_dir():
        shutil.copytree(src_brand, dest_brand, dirs_exist_ok=True)

    # Ensure .claude/skills points to ../.agents/skills if not already present
    if not dest_claude_skills.exists() and not dest_claude_skills.is_symlink():
        dest_claude_skills.symlink_to("../.agents/skills")

    # Apply ownership if running as root for cloudroom-agent
    if owner_user and os.geteuid() == 0:
        pw = pwd.getpwnam(owner_user)
        for root_dir in (dest_agents_dir, dest_claude):
            for path in [root_dir, *root_dir.rglob("*")]:
                if not path.is_symlink():
                    os.chown(path, pw.pw_uid, pw.pw_gid)

    return {
        "status": "provisioned",
        "target_home": str(target_home),
        "skills_installed": skill_count,
        "agents_installed": agent_count,
    }


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Provision RJ Business Solutions skills and agents into a Cloudroom agent home."
    )
    parser.add_argument(
        "--home",
        type=Path,
        default=Path.home(),
        help="Target agent home directory (default: current user's HOME)",
    )
    parser.add_argument(
        "--user",
        type=str,
        default=None,
        help="Optional Unix account name (e.g. cloudroom-agent) to chown files to when running as root",
    )
    args = parser.parse_args()
    report = provision(args.home, args.user)
    print(
        f"RJ Cloudroom Core: Provisioned {report['skills_installed']} skills and "
        f"{report['agents_installed']} agent docs into {report['target_home']}"
    )


if __name__ == "__main__":
    main()
