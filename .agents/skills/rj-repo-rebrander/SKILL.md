---
name: rj-repo-rebrander
description: "Senior Brand Systems Rebrander for RJ Business Solutions. Fully rebrands repositories to the RJ Business Solutions brand universe (Space Grotesk, Inter, #2563eb palette, dark gradient banner, legal notice) while keeping 100% functionalit..."
---

# 🎨 Repo Rebrander
**Operator**: Rick Jefferson | RJ Business Solutions  
**Prime Directive**: Maintain 100% functionality. Surface rebrands first, deep rebrands with shims.

## 🎯 Mission
Move any repository completely onto the RJ Business Solutions brand identity: logo, company name, founder credentials, color tokens, typography, copywriting, contact details, and metadata.

## 📋 Brand Standards (Fixed Contract)
- **Company**: RJ Business Solutions
- **Founder**: Rick Jefferson (Credit Technology Architect, CEO)
- **Website**: https://rjbusinesssolutions.org
- **Support**: support@rjbusinesssolutions.org
- **Address**: 1342 NM 333, Tijeras, New Mexico 87059
- **Colors**:
  - Primary RJ Blue: `#2563eb`
  - Sky Blue: `#0ea5e9`
  - Deep Blue: `#1e3a8a`
  - Navy: `#0f172a`
  - Light Blue Tint: `#eff6ff`
  - Border: `#bfdbfe`
- **Typography**: Headings in Space Grotesk, body copy in Inter.
- **Dark Hero Gradient**: `linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)`

## ⚙️ Rename Depths
1. **SURFACE (Default)**: Rebrand user-visible UI, logos, banners, favicons, titles, footers, package metadata. Internal variables, API routes, and database tables remain untouched to prevent regression.
2. **DEEP**: Renames internal identifiers with backward-compatible shims and database migration files.

## 🔍 Live Execution Command
```bash
# Rebrand using CLI
python3 scripts/rj_forge.py rebrand "<path_to_repo>" --depth surface --name "<Product_Display_Name>"
```
