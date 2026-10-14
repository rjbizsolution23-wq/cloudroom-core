---
name: legal-state-court-routing-specialist
description: "Use this skill for Supreme Legal: STATE COURT ROUTING SPECIALIST. **User says:** \'I'm in Texas and I need to sue for breach of contract\' **System detects:** Texas jurisdiction **System loads:** - Texas statutes of limitations (4 years ..."
---

# Supreme Legal: STATE COURT ROUTING SPECIALIST

STATE COURT ROUTING SPECIALIST

## Agent Name
**State Routing Master**

## Description
Intelligent 50-state (+DC + PR + territories) routing system. Detects user location and automatically identifies applicable state law, correct court, appropriate Secretary of State, UCC filing office, and jurisdiction-specific rules.

## Instructions
You are the STATE ROUTING MASTER — jurisdiction detection and law routing specialist.

**KNOWLEDGE CUTOFF:** March 25, 2026

### PRIMARY FUNCTION
When user provides ANY state indicator (state name, city, ZIP, address, "my state," "here"):
1. **Detect state** — Parse location clues
2. **Route to state law** — Statutes, courts, agencies
3. **Load state-specific rules** — Choice of law, forum, procedure
4. **Provide URLs** — All state government portals
5. **Coordinate with other specialists** — Pass state context

### 50-STATE ROUTING TABLE
See **[STATE ROUTING SYSTEM](#state-routing-system)** below for complete table.

### CONVERSATION STARTERS
1. "I'm in [state] — what applies to my situation?"
2. "Route my [issue] to the correct [state] court"
3. "Find [state]'s equivalent to Delaware Chancery"
4. "What's the statute of limitations for [claim] in [state]?"
5. "Search [state] Secretary of State for [business]"

---

<a id="state-routing-system"></a>
# 🗺️ 50-STATE INTELLIGENT ROUTING SYSTEM

## HOW IT WORKS

**User says:** "I'm in Texas and I need to sue for breach of contract"
**System detects:** Texas jurisdiction
**System loads:**
- Texas statutes of limitations (4 years for written contracts, Tex. Civ. Prac. & Rem. Code §16.004)
- Correct court (District Court for amounts >$500; JP Court <$20K; County Court $500-$250K)
- Texas Rules of Civil Procedure
- Texas Business Organizations Code
- Filing portal URLs
- Local counsel referral network

## COMPLETE 50-STATE + DC + TERRITORIES ROUTING TABLE

| State | Court Portal | Secretary of State | Statute of Limitations (Contract - Written) | Business Court/Commercial Division |
|-------|--------------|--------------------|---------------------------------------------|-----------------------------------|
| **Alabama** | https://judicial.alabama.gov/ | https://arc-sos.state.al.us/CGI/CORPNAME.MBR/INPUT | 6 years | Circuit Court |
| **Alaska** | https://courts.alaska.gov/ | https://www.commerce.alaska.gov/cbp/main/search/entities | 3 years | Superior Court |
| **Arizona** | https://www.azcourts.gov/ | https://ecorp.azcc.gov/EntitySearch/Index | 6 years | Commercial Court (Maricopa) |
| **Arkansas** | https://www.arcourts.gov/ | https://www.sos.arkansas.gov/corps/search_corps.php | 5 years | Business Court |
| **California** | https://www.courts.ca.gov/ | https://bizfileonline.sos.ca.gov/search/business | 4 years | Complex Civil (LA, SF, Santa Clara, OC, San Diego) |
| **Colorado** | https://www.courts.state.co.us/ | https://www.sos.state.co.us/biz/BusinessEntityCriteriaExt.do | 6 years | District Court Business |
| **Connecticut** | https://www.jud.ct.gov/ | https://service.ct.gov/business/s/onlinebusinesssearch | 6 years | Complex Litigation Docket |
| **Delaware** ⭐ | https://courts.delaware.gov/chancery/ | https://icis.corp.delaware.gov/ecorp/entitysearch/ | 3 years | **Court of Chancery** (nation's top business court) |
| **Florida** | https://www.flcourts.org/ | https://dos.myflorida.com/sunbiz/search/ | 5 years | Complex Business Litigation (multiple counties) |
| **Georgia** | https://georgiacourts.gov/ | https://ecorp.sos.ga.gov/BusinessSearch | 6 years | Metro Atlanta Business Court + State Business Court |
| **Hawaii** | https://www.courts.state.hi.us/ | https://hbe.ehawaii.gov/documents/search.html | 6 years | Circuit Court |
| **Idaho** | https://isc.idaho.gov/ | https://sosbiz.idaho.gov/search/business | 5 years | District Court |
| **Illinois** | https://www.illinoiscourts.gov/ | https://apps.ilsos.gov/businessentitysearch/ | 10 years | Commercial Calendar (Cook County) |
| **Indiana** | https://www.in.gov/courts/ | https://bsd.sos.in.gov/publicbusinesssearch | 10 years | Commercial Court |
| **Iowa** | https://www.iowacourts.gov/ | https://sos.iowa.gov/search/business/search.aspx | 10 years | Business Specialty Court |
| **Kansas** | https://www.kscourts.org/ | https://www.kansas.gov/bess/flow/main | 5 years | District Court |
| **Kentucky** | https://kycourts.gov/ | https://web.sos.ky.gov/ftshow/(S())/default.aspx | 15 years | Business Court (pilot) |
| **Louisiana** | https://www.lasc.org/ | https://coraweb.sos.la.gov/CommercialSearch/ | 10 years | District Court (unique civil law) |
| **Maine** | https://www.courts.maine.gov/ | https://icrs.informe.org/nei-sos-icrs/ICRS | 6 years | Business & Consumer Docket |
| **Maryland** | https://www.courts.state.md.us/ | https://egov.maryland.gov/BusinessExpress/EntitySearch | 3 years | Business & Technology Case Program |
| **Massachusetts** | https://www.mass.gov/courts | https://corp.sec.state.ma.us/CorpWeb/CorpSearch/CorpSearch.aspx | 6 years | **Business Litigation Session (BLS)** — highly respected |
| **Michigan** | https://www.courts.michigan.gov/ | https://cofs.lara.state.mi.us/SearchApi/Search/Search | 6 years | Business Court (all circuits) |
| **Minnesota** | https://www.mncourts.gov/ | https://mblsportal.sos.state.mn.us/Business/Search | 6 years | Complex Case Program |
| **Mississippi** | https://courts.ms.gov/ | https://corp.sos.ms.gov/corp/portal/c/page/corpBusinessIdSearch/ | 3 years | Chancery Court + Circuit Court |
| **Missouri** | https://www.courts.mo.gov/ | https://bsd.sos.mo.gov/BusinessEntity/BESearch.aspx | 10 years | Business Court (pilot) |
| **Montana** | https://courts.mt.gov/ | https://biz.sosmt.gov/search/business | 8 years | District Court |
| **Nebraska** | https://supremecourt.nebraska.gov/ | https://www.nebraska.gov/sos/corp/corpsearch.cgi | 5 years | District Court |
| **Nevada** | https://nvcourts.gov/ | https://esos.nv.gov/EntitySearch/OnlineEntitySearch | 6 years | **Business Court** (Clark, Washoe) |
| **New Hampshire** | https://www.courts.nh.gov/ | https://quickstart.sos.nh.gov/online/BusinessInquire | 3 years | Business & Commercial Dispute Docket |
| **New Jersey** | https://www.njcourts.gov/ | https://www.njportal.com/DOR/BusinessNameSearch/ | 6 years | Complex Business Litigation Program |
| **New Mexico** | https://www.nmcourts.gov/ | https://enterprise.sos.nm.gov/search | 6 years | District Court |
| **New York** ⭐ | https://www.nycourts.gov/ | https://apps.dos.ny.gov/publicInquiry/ | 6 years | **Commercial Division** (top-tier business court) |
| **North Carolina** | https://www.nccourts.gov/ | https://www.sosnc.gov/search/index/corp | 3 years | **NC Business Court** |
| **North Dakota** | https://www.ndcourts.gov/ | https://firststop.sos.nd.gov/search/business | 6 years | District Court |
| **Ohio** | https://www.supremecourt.ohio.gov/ | https://businesssearch.ohiosos.gov/ | 8 years | Commercial Docket |
| **Oklahoma** | https://www.oscn.net/ | https://www.sos.ok.gov/corp/corpInquiryFind.aspx | 5 years | District Court |
| **Oregon** | https://www.courts.oregon.gov/ | https://sos.oregon.gov/business/Pages/find.aspx | 6 years | Circuit Court |
| **Pennsylvania** | https://www.pacourts.us/ | https://www.corporations.pa.gov/search/corpsearch | 4 years | Commerce Court (Philadelphia, Allegheny) |
| **Rhode Island** | https://www.courts.ri.gov/ | https://business.sos.ri.gov/CorpSearch/CorpSearchInput.asp | 10 years | Business Calendar |
| **South Carolina** | https://www.sccourts.org/ | https://businessfilings.sc.gov/BusinessFiling/Entity/Search | 3 years | Business Court (pilot) |
| **South Dakota** | https://ujs.sd.gov/ | https://sosenterprise.sd.gov/BusinessServices/Business/RegistrationSearch.aspx | 6 years | Circuit Court |
| **Tennessee** | https://www.tncourts.gov/ | https://tnbear.tn.gov/Ecommerce/FilingSearch.aspx | 6 years | Business Court (pilot) |
| **Texas** ⭐ | https://www.txcourts.gov/ | https://mycpa.cpa.state.tx.us/coa/ | 4 years | **Texas Business Court** (new 2024) |
| **Utah** | https://www.utcourts.gov/ | https://secure.utah.gov/bes/ | 6 years | Business & Chancery Court |
| **Vermont** | https://www.vermontjudiciary.org/ | https://www.vtsosonline.com/online/BusinessInquire | 6 years | Superior Court |
| **Virginia** | https://www.vacourts.gov/ | https://cis.scc.virginia.gov/EntitySearch/Search | 5 years | Circuit Court |
| **Washington** | https://www.courts.wa.gov/ | https://ccfs.sos.wa.gov/#/ | 6 years | Superior Court |
| **West Virginia** | https://www.courtswv.gov/ | https://apps.sos.wv.gov/business/corporations/ | 10 years | Business Court Division |
| **Wisconsin** | https://www.wicourts.gov/ | https://www.wdfi.org/apps/CorpSearch/Search.aspx | 6 years | Commercial Court (pilot) |
| **Wyoming** | https://www.courts.state.wy.us/ | https://wyobiz.wyo.gov/Business/FilingSearch.aspx | 10 years | District Court |
| **DC** | https://www.dccourts.gov/ | https://corponline.dcra.dc.gov/Home.aspx/Landing | 3 years | Civil Division |
| **Puerto Rico** | https://poderjudicial.pr.gov/ | https://prcorpfiling.f1hst.com/ | 15 years | Court of First Instance |

⭐ = Top-tier business jurisdictions

## STATE ROUTING INTELLIGENCE — HOW IT DECIDES

**Location detection triggers:**
1. **Explicit state name:** "I'm in California"
2. **City/metro:** "based in Houston" → Texas
3. **ZIP code:** "77002" → Texas (Houston)
4. **Address:** parses to state
5. **"my state" / "here" / "locally":** asks for clarification
6. **Business incorporated in X:** applies X law + operational state law

**Multi-state routing:**
- **Business incorporated in Delaware, operating in Texas** → Delaware for internal affairs (DGCL, fiduciary), Texas for employment/tort/contract with local parties
- **Contract with choice-of-law clause** → honors clause + checks enforceability under Restatement §187

**Auto-generated response includes:**
- Applicable substantive law
- Correct court venue
- Statute of limitations
- Filing procedures
- Court-specific rules
- Referral to relevant state agencies
- Direct URLs to all portals

---

<a id="monetization-strategies"></a>
# 💰 TOP 5 MONETIZATION STRATEGIES

## Market Reality Check (March 2026)
- **Solo/small firm legal research spend:** $80-$400/user/month
- **Mid-size firm AI tools:** $200-$500/user/month
- **BigLaw AI (Harvey, Legora):** $1,000-$1,200/user/month
- **Compliance automation SMB:** $500-$5,000/month
- **Record retrieval:** $25-$150 per record
- **Gartner:** 40% of enterprise apps to have task-specific AI agents by 2026
- **BCG:** 81% of legal pros expect AI to reshape law firm business model in 3 years

---

## 💎 STRATEGY #1: TIERED SAAS SUBSCRIPTION FOR LEGAL PROFESSIONALS

**Target Market:** Solo attorneys, small firms (2-20 lawyers), in-house legal departments

**Pricing Model (Hybrid — Recommended for 2026):**

| Tier | Price/Month | Target | Includes |
|------|-------------|--------|----------|
| **Starter** | $99/user | Solo attorneys | 500 queries, 1 sub-agent, basic PACER/EDGAR |
| **Professional** | $299/user | Small firms | 2,000 queries, all 10 sub-agents, unlimited state routing |
| **Enterprise** | $799/user | Mid-size firms | Unlimited queries, priority API, custom workflows, dedicated support |
| **BigLaw** | $1,499/user | Large firms | Everything + on-prem option + white-label + custom sub-agents |
| **In-House** | $1,999/seat + $500/user | GC teams | Full deployment + compliance calendar + board reporting |

**Revenue Projection (Year 1):**
- 100 Solo @ $99 = $9,900/mo = **$118,800/yr**
- 50 Small firm avg 5 seats @ $299 = $74,750/mo = **$897,000/yr**
- 20 Enterprise avg 15 seats @ $799 = $239,700/mo = **$2,876,400/yr**
- **TOTAL Y1 ARR potential: $3.89M** with only 170 customers

**Why This Wins:**
- Undercut BigLaw AI (Harvey $1,200) at Enterprise tier by 33%
- Beat Westlaw/Lexis ($3,000-5,000/mo) for solos by 90%+
- Sticky (compliance calendars, saved queries, historical data)

---

## 💎 STRATEGY #2: PUBLIC RECORDS RETRIEVAL-AS-A-SERVICE (RaaS)

**Target Market:** Litigation firms, insurance companies, private investigators, journalists, corporate compliance, M&A due diligence teams, employment screening

**Pricing Model:**

| Service | Price | Delivery |
|---------|-------|----------|
| Federal court docket + complaint | $75 | 24 hours |
| Complete case file (all filings) | $250-$500 | 48 hours |
| SEC filing packet (5 years) | $150 | 24 hours |
| Corporate records + officers | $95 | Same day |
| UCC lien search (single state) | $65 | Same day |
| UCC lien search (all 50 states) | $895 | 3 days |
| Bankruptcy full file | $195 | 48 hours |
| **Monthly retainer (unlimited)** | $2,500/mo | Priority |
| **Enterprise retainer** | $10,000/mo | Dedicated analyst |

**Cost Structure:** APIs are already integrated (CourtListener free, EDGAR free, state SoS mostly free). Your cost per retrieval ≈ $0-$5 (mostly PACER pass-through). **90%+ margins.**

**Revenue Projection:**
- 30 monthly retainers @ $2,500 = **$900K/yr**
- 200 one-off retrievals/month @ avg $180 = **$432K/yr**
- 5 enterprise retainers @ $10K = **$600K/yr**
- **TOTAL Y1: $1.93M**

**Why This Wins:**
- Existing competitors (US Legal Support, Lexitas) charge same but slower and no AI analysis
- Your AI provides not just documents but **analysis + summaries + risk flags**
- Recurring revenue model

---

## 💎 STRATEGY #3: SMB COMPLIANCE AUTOMATION PLATFORM

**Target Market:** Small/mid public companies (post-IPO, SPACs, foreign private issuers), pre-IPO companies, PE portfolio companies, RIAs, broker-dealers

**Product Offering:**

**Compliance Concierge — $2,997/month base**
- Automated 10-K/10-Q/8-K deadline tracking
- Real-time 8-K trigger detection (material events)
- Section 16 filing prep (Forms 3/4/5)
- Board meeting preparation packets
- Insider trading pre-clearance system
- Whistleblower hotline & intake
- SOX §404 documentation
- Cybersecurity incident disclosure (Item 1.05) rapid response
- Climate/ESG disclosure prep
- 10b5-1 plan monitoring

**Add-ons:**
- IPO Readiness Assessment: $25,000 one-time
- Board portal + resolution management: $500/mo
- Insider trading policy build: $5,000 one-time
- Rule 10b5-1 plan drafting: $2,500 per plan

**Target 100 companies at $2,997/mo = $3.6M ARR Year 1**
Plus $500K+ in one-time engagements.

**Why This Wins:**
- Smaller companies can't afford BigLaw compliance ($50K-$500K/yr in outside counsel)
- SEC's 2023-2024 rule expansion (cyber, climate, 10b5-1) massively increased burden
- **Recurring, mission-critical, sticky.**

---

## 💎 STRATEGY #4: DIY-TO-DFY LEGAL SERVICES MARKETPLACE (Consumer + SMB)

**Target Market:** Startup founders, small business owners, real estate investors, freelancers, side-hustlers, credit repair clients

**Product Ladder:**

| Product | Price | Description |
|---------|-------|-------------|
| **Free** | $0 | 3 questions/day, basic entity comparison |
| **DIY Formation Kit** | $199 | LLC/Corp formation with AI-drafted docs, state filing included |
| **Contract Library** | $49/mo | 200+ AI-customized templates (NDAs, MSAs, ICAs) |
| **AI Legal Assistant** | $99/mo | Unlimited AI legal Q&A, contract review, letter drafting |
| **Business Bundle** | $299/mo | Formation + contracts + compliance + record keeping |
| **Done-For-You** | $2,500-$25,000 | Actual formation + governance + first-year compliance |

**Volume plays:**
- LegalZoom alternative but AI-powered
- 10,000 formations/year @ $199 = **$1.99M**
- 500 subscribers @ $99/mo = **$594K/yr**
- 200 subscribers @ $299/mo = **$717K/yr**
- 100 DFY @ avg $8,000 = **$800K/yr**
- **TOTAL: ~$4.1M/yr at moderate scale**

**Why This Wins:**
- LegalZoom is $1B+ market cap; you have better tech + lower cost
- Underserved market: 33M small businesses in US, most cannot afford $500/hr attorneys
- Rick Jefferson Solutions brand + credit repair client base = ready-made funnel

---

## 💎 STRATEGY #5: WHITE-LABEL / API LICENSING TO LAW FIRMS & LEGAL TECH

**Target Market:** Mid-size law firms wanting their own branded AI, insurance carriers, credit unions, franchise systems, accountants (CPAs cross-selling)

**Product Offering:**

**API Access Tiers:**
| Tier | Price/Month | API Calls | Sub-Agents |
|------|-------------|-----------|------------|
| **Developer** | $499 | 10,000 | 3 |
| **Growth** | $2,499 | 100,000 | All 10 |
| **Scale** | $9,999 | 1,000,000 | All 10 + custom |
| **Enterprise** | $25,000+ | Unlimited | White-label full deployment |

**White-Label Package:**
- Custom-branded UI ($15K setup + $5K/mo)
- Firm-specific knowledge base (add their prior work product)
- Custom sub-agents for their practice specialties
- SSO integration
- Dedicated infrastructure
- SLA + support

**Revenue Projection:**
- 20 API developers @ $499 = **$120K/yr**
- 15 Growth firms @ $2,499 = **$450K/yr**
- 8 Scale firms @ $9,999 = **$960K/yr**
- 5 Enterprise white-labels @ avg $30K/mo = **$1.8M/yr**
- **TOTAL: $3.33M/yr**

**Why This Wins:**
- Law firms want AI but won't build it themselves
- White-labeling lets them charge premium fees while you get recurring revenue
- Higher LTV than direct-to-attorney SaaS
- Enterprise deals rarely churn

---

## 🎯 COMBINED ANNUAL REVENUE POTENTIAL (Year 2-3 at Scale)

| Strategy | Y1 | Y2 | Y3 |
|----------|-----|-----|-----|
| **1. Tiered SaaS** | $3.9M | $9.5M | $18M |
| **2. Records Retrieval** | $1.9M | $4.2M | $7.5M |
| **3. SMB Compliance** | $3.6M | $8.5M | $15M |
| **4. Consumer Marketplace** | $4.1M | $9.0M | $20M |
| **5. White-Label API** | $3.3M | $8.5M | $18M |
| **TOTAL POTENTIAL** | **$16.8M** | **$39.7M** | **$78.5M** |

---

<a id="service-menu"></a>
# 🎯 SERVICE MENU — WHAT WE OFFER PEOPLE

## FOR ATTORNEYS (Solo & Small Firm)

1. **Instant Legal Research** — CourtListener + WestLaw-quality analysis at 90% less cost
2. **Motion & Brief Drafting** — Rule 12(b)(6), summary judgment, appellate briefs
3. **Contract Review** — 5-minute AI review with risk flagging
4. **Case Strategy Consultations** — Multi-agent brainstorm of litigation options
5. **PACER Docket Monitoring** — Real-time alerts on your cases + opposing counsel
6. **Judge Analytics** — Predict rulings based on prior decisions
7. **Deposition Prep Kits** — AI-generated outlines from complaint + documents
8. **Client Intake Automation** — AI screens leads, drafts engagement letters

## FOR BUSINESSES (SMB → Enterprise)

9. **Formation Packages** — LLC/Corp in any state, 24 hours, $199-$999
10. **BOI/CTA Compliance** — FinCEN reporting for all beneficial owners
11. **Ongoing Compliance Calendar** — Annual reports, tax elections, franchise fees
12. **Contract Library** — Customized NDAs, employment agreements, vendor contracts
13. **Employee Handbook & Policies** — State-compliant HR docs
14. **IP Protection Package** — Trademark search + application + maintenance
15. **Vendor/Customer Due Diligence** — Background checks, UCC searches, litigation history
16. **Corporate Governance Setup** — Board resolutions, minutes, stockholder agreements

## FOR PUBLIC COMPANIES & PRE-IPO

17. **SEC Reporting Automation** — 10-K/10-Q/8-K prep and filing
18. **Section 16 Filings** — Auto-prep Forms 3/4/5 for insiders
19. **10b5-1 Plan Management** — Cooling-off tracking, certification prep
20. **Cybersecurity Incident Response** — Item 1.05 disclosure within 4 days
21. **Say-on-Pay Advisory** — Compensation disclosure and shareholder outreach
22. **Proxy Season Support** — Proxy statement drafting, ISS/Glass Lewis analysis
23. **IPO Readiness** — S-1 prep, corporate governance overhaul

## FOR LITIGATORS & FIRMS

24. **Case File Retrieval** — Full PACER dockets + all filings
25. **Document Review** — AI-powered privilege log, responsiveness coding
26. **Expert Witness Research** — Prior testimony, publications, Daubert challenges
27. **Class Action Monitoring** — Track filings against your clients
28. **Settlement Analysis** — Comparable verdicts and settlements
29. **Trial Support** — Real-time transcript analysis, cross-exam prep

## FOR CONSUMERS & CREDIT REPAIR (Rick Jefferson Solutions Client Base)

30. **Business Formation** — Convert credit repair clients to LLC/Corp owners
31. **Contract Drafting** — Service agreements, independent contractor agreements
32. **Debt Litigation Defense** — FDCPA/FCRA violation analysis
33. **Small Claims Prep** — Complaints, evidence organization
34. **Landlord-Tenant** — Lease review, security deposit disputes
35. **Employment Issues** — Wrongful termination, wage/hour claims, discrimination

## FOR M&A / TRANSACTIONAL

36. **Deal Structuring** — Optimal structure (asset/stock/merger)
37. **Due Diligence Automation** — 10x faster document review
38. **Merger Agreement Drafting** — From LOI to definitive
39. **Post-Closing Integration** — Playbooks and checklists
40. **Earnout Structuring** — Formulas, disputes, protections

## FOR REGULATORY

41. **Federal Register Monitoring** — Rules affecting your industry
42. **Comment Letter Drafting** — Regulatory advocacy
43. **State Legislation Tracking** — All 50 states via Open States API
44. **Administrative Appeals** — SEC ALJ, FTC, USPTO TTAB/PTAB

---

# 🚀 GO-TO-MARKET SEQUENCE (Recommended)

**Phase 1 (Months 1-3):** Launch Consumer Marketplace (Strategy #4) — fastest revenue, leverages existing Rick Jefferson Solutions audience.

**Phase 2 (Months 3-6):** Add Records Retrieval Service (Strategy #2) — sell to law firms who need docs but not full software.

**Phase 3 (Months 6-9):** Deploy Tiered SaaS (Strategy #1) — bigger sale, but by now you have case studies.

**Phase 4 (Months 9-12):** Roll out SMB Compliance (Strategy #3) — sticky, high-margin, enterprise deals.

**Phase 5 (Year 2):** White-Label API (Strategy #5) — the biggest multiplier once you have a proven product.

---

**READY TO BUILD. READY TO SCALE. READY TO DOMINATE.**

*Ecosystem designed by Supreme Legal AGI | Rick Jefferson Solutions | March 25, 2026*
