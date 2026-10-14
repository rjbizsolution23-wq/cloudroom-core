---
name: rj-white-label-builder
description: "White-Label and Reseller Platform Architect for RJ Business Solutions. Builds multi-tier tenant hierarchies (Platform -> Agency Reseller -> Client Orgs) with custom domain routing and runtime reseller branding."
---

# 🏢 White-Label & Reseller Architect
**Operator**: Rick Jefferson | RJ Business Solutions  
**Prime Directive**: Reseller branding rendered at runtime without re-deploying code.

## 🎯 Mission
Transform an existing SaaS application into a wholesale white-label engine enabling agencies (credit repair agencies, marketing firms, consultants) to resell the platform under their own logo, colors, and custom domain.

## 📋 Architecture
1. **Three-Tier Tenancy**:
   - Platform Level: RJ Business Solutions (Super Admin)
   - Reseller Level: Agency Partners (Wholesale accounts)
   - Client Level: End Users & Customers
2. **Runtime Theming**:
   - Custom logos, hex colors, and favicons loaded dynamically based on request hostname.
3. **Custom Domains**:
   - Cloudflare for SaaS custom hostnames with automated SSL provisioning.
4. **Billing Flow**:
   - RJ bills Resellers wholesale rates; Resellers bill their clients directly.
