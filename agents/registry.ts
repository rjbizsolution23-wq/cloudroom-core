/**
 * Auto-generated strongly-typed Agent Registry
 * Engineered for Rick Jefferson | RJ Business Solutions
 * Part of SuperAgents Fusion / OmniFusion AGI
 */

export interface AgentMetadata {
  id: string;
  name: string;
  role: string;
  category: 'orchestrators' | 'directors' | 'engineering' | 'legal_compliance' | 'finance_credit_tax' | 'growth_marketing_sales' | 'media_audio_video' | 'operations_sop' | 'specialized';
  modelAffinity: 'REASONING_DEEP' | 'CODER_DEEP' | 'CODER_FAST' | 'GENERAL_FAST' | 'VISION_MULTIMODAL';
  path: string;
  charCount?: number;
  originalFile?: string;
}

export const AGENT_REGISTRY: Record<string, AgentMetadata> = {
  "50x-sales-system-agent-v2": {
    id: "50x-sales-system-agent-v2",
    name: "50X SALES SYSTEM AGENT v2",
    role: "Senior sales-systems strategist + automation architect. You design funnels, scripts,",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/50x-sales-system-agent-v2.md"
  },
  "8-second-cinematic-ad-director-v2": {
    id: "8-second-cinematic-ad-director-v2",
    name: "8-SECOND CINEMATIC AD DIRECTOR — v2",
    role: "You are a commercial director and AI-video prompt engineer. You make",
    category: "directors",
    modelAffinity: "VISION_MULTIMODAL",
    path: "agents/directors/8-second-cinematic-ad-director-v2.md"
  },
  "prompt-architect-prompt-engineering": {
    id: "prompt-architect-prompt-engineering",
    name: "@prompt_architect — Prompt Engineering",
    role: "@prompt_architect — Prompt Engineering",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/prompt-architect-prompt-engineering.md"
  },
  "api-director-neuronedge-labs-v2": {
    id: "api-director-neuronedge-labs-v2",
    name: "API DIRECTOR — NeuronEdge Labs™ (v2",
    role: "You are the API Director of NeuronEdge Labs. You own API architecture,",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/api-director-neuronedge-labs-v2.md"
  },
  "api-integration-master-v2": {
    id: "api-integration-master-v2",
    name: "API INTEGRATION MASTER — v2",
    role: "You are the API Integration Master, a senior integration architect for",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/api-integration-master-v2.md"
  },
  "app-forge-architect-v2": {
    id: "app-forge-architect-v2",
    name: "APP FORGE ARCHITECT — v2",
    role: "You are App Forge Architect, a principal mobile/web product engineer.",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/app-forge-architect-v2.md"
  },
  "authority-book-engine-v2": {
    id: "authority-book-engine-v2",
    name: "AUTHORITY BOOK ENGINE — v2",
    role: "You are an elite publishing strategist, developmental editor, ghostwriter,",
    category: "finance_credit_tax",
    modelAffinity: "REASONING_DEEP",
    path: "agents/finance_credit_tax/authority-book-engine-v2.md"
  },
  "backend-director-neuronedge-labs-v": {
    id: "backend-director-neuronedge-labs-v",
    name: "BACKEND DIRECTOR — NeuronEdge Labs™ (v",
    role: "You are the Backend Director of NeuronEdge Labs. You own backend",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/backend-director-neuronedge-labs-v.md"
  },
  "codeforge-nexus-v2": {
    id: "codeforge-nexus-v2",
    name: "CODEFORGE NEXUS v2",
    role: "Senior full-stack + multi-agent engineering partner. You clarify, architect,",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/codeforge-nexus-v2.md"
  },
  "content-director-neuronedge-labs-v": {
    id: "content-director-neuronedge-labs-v",
    name: "CONTENT DIRECTOR — NeuronEdge Labs™ (v",
    role: "You are the Content Director of NeuronEdge Labs. You own copywriting,",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/content-director-neuronedge-labs-v.md"
  },
  "credit-repair-compliant-marketing-engi": {
    id: "credit-repair-compliant-marketing-engi",
    name: "CREDIT REPAIR COMPLIANT MARKETING ENGI",
    role: "You are a direct-response copywriter and compliance-aware marketing",
    category: "finance_credit_tax",
    modelAffinity: "REASONING_DEEP",
    path: "agents/finance_credit_tax/credit-repair-compliant-marketing-engi.md"
  },
  "d-i-r-g-e": {
    id: "d-i-r-g-e",
    name: "D.I.R.G.E",
    role: "D.I.R.G.E",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/d-i-r-g-e.md"
  },
  "database-director-neuronedge-labs": {
    id: "database-director-neuronedge-labs",
    name: "DATABASE DIRECTOR — NeuronEdge Labs™ (",
    role: "You are the Database Director of NeuronEdge Labs. You own database",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/database-director-neuronedge-labs.md"
  },
  "db-overlord-v2": {
    id: "db-overlord-v2",
    name: "DB OVERLORD — v2",
    role: "You are DB Overlord, a principal database architect and DBRE. You",
    category: "engineering",
    modelAffinity: "CODER_DEEP",
    path: "agents/engineering/db-overlord-v2.md"
  },
  "devsecops-director-neuronedge-labs": {
    id: "devsecops-director-neuronedge-labs",
    name: "DEVSECOPS DIRECTOR — NeuronEdge Labs™",
    role: "You are the DevSecOps Director of NeuronEdge Labs. You embed security",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/devsecops-director-neuronedge-labs.md"
  },
  "devteam-master-orchestrator-v2": {
    id: "devteam-master-orchestrator-v2",
    name: "DEVTEAM MASTER ORCHESTRATOR v2",
    role: "CTO-level engineering lead. Turn business goals into architectures, roadmaps,",
    category: "orchestrators",
    modelAffinity: "CODER_DEEP",
    path: "agents/orchestrators/devteam-master-orchestrator-v2.md"
  },
  "elite-agent-architect-v2": {
    id: "elite-agent-architect-v2",
    name: "ELITE AGENT ARCHITECT — v2",
    role: "Principal agent engineer. You design, build, test, and ship agent",
    category: "engineering",
    modelAffinity: "CODER_DEEP",
    path: "agents/engineering/elite-agent-architect-v2.md"
  },
  "engineering-director-neuronedge-labs": {
    id: "engineering-director-neuronedge-labs",
    name: "ENGINEERING DIRECTOR — NeuronEdge Labs",
    role: "You are the Engineering Director of NeuronEdge Labs: lead architect",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/engineering-director-neuronedge-labs.md"
  },
  "enterprise-base44-meta-orchestrator": {
    id: "enterprise-base44-meta-orchestrator",
    name: "ENTERPRISE BASE44 META-ORCHESTRATOR —",
    role: "You are the Enterprise Base44 Meta-Orchestrator. You turn any app",
    category: "orchestrators",
    modelAffinity: "CODER_DEEP",
    path: "agents/orchestrators/enterprise-base44-meta-orchestrator.md"
  },
  "finance-director-neuronedge-labs-v": {
    id: "finance-director-neuronedge-labs-v",
    name: "FINANCE DIRECTOR — NeuronEdge Labs™ (v",
    role: "You are the Finance Director of NeuronEdge Labs. You design, build, audit,",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/finance-director-neuronedge-labs-v.md"
  },
  "frontend-director-neuronedge-labs": {
    id: "frontend-director-neuronedge-labs",
    name: "FRONTEND DIRECTOR — NeuronEdge Labs™ (",
    role: "You are the Frontend Director of NeuronEdge Labs. You own UI/UX",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/frontend-director-neuronedge-labs.md"
  },
  "formqualifyai-v2": {
    id: "formqualifyai-v2",
    name: "FormQualifyAI — v2",
    role: "You are FormQualifyAI, a conversion strategist and form-funnel",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/formqualifyai-v2.md"
  },
  "gohighlevel-empire-builder-v2": {
    id: "gohighlevel-empire-builder-v2",
    name: "GOHIGHLEVEL EMPIRE BUILDER — v2",
    role: "GOHIGHLEVEL EMPIRE BUILDER — v2",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/gohighlevel-empire-builder-v2.md"
  },
  "infrastructure-director-neuronedge-l": {
    id: "infrastructure-director-neuronedge-l",
    name: "INFRASTRUCTURE DIRECTOR — NeuronEdge L",
    role: "You are the Infrastructure Director of NeuronEdge Labs. You own cloud",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/infrastructure-director-neuronedge-l.md"
  },
  "jukeyman-grants-federal-contracts": {
    id: "jukeyman-grants-federal-contracts",
    name: "JUKEYMAN — Grants, Federal Contracts,",
    role: "You help organizations win funding and contracts and grow responsibly: grant writing, federal",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/jukeyman-grants-federal-contracts.md"
  },
  "kdvma-master-sgt-v2": {
    id: "kdvma-master-sgt-v2",
    name: "KDVMA MASTER SGT — v2",
    role: "You are KDVMA Master SGT, an expert VA benefits navigation and claims-",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/kdvma-master-sgt-v2.md"
  },
  "knowledge-to-masteragent-genesis-syste": {
    id: "knowledge-to-masteragent-genesis-syste",
    name: "KNOWLEDGE-TO-MASTERAGENT GENESIS SYSTE",
    role: "You turn knowledge sources (documents, transcripts, books, websites,",
    category: "orchestrators",
    modelAffinity: "REASONING_DEEP",
    path: "agents/orchestrators/knowledge-to-masteragent-genesis-syste.md"
  },
  "marketing-director-neuronedge-labs": {
    id: "marketing-director-neuronedge-labs",
    name: "MARKETING DIRECTOR — NeuronEdge Labs™",
    role: "You are the Marketing Director of NeuronEdge Labs. You own funnels,",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/marketing-director-neuronedge-labs.md"
  },
  "men-s-justice-legal-titan-ai-fathers": {
    id: "men-s-justice-legal-titan-ai-fathers",
    name: "MEN'S JUSTICE LEGAL TITAN AI — Fathers",
    role: "You help fathers and men understand and navigate family court — custody, child support, divorce,",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/men-s-justice-legal-titan-ai-fathers.md"
  },
  "qa-director-neuronedge-labs-v2": {
    id: "qa-director-neuronedge-labs-v2",
    name: "QA DIRECTOR — NeuronEdge Labs™ (v2",
    role: "You are the QA Director of NeuronEdge Labs. You own test strategy,",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/qa-director-neuronedge-labs-v2.md"
  },
  "quantum-prompt-genesis-v2": {
    id: "quantum-prompt-genesis-v2",
    name: "QUANTUM PROMPT GENESIS — v2",
    role: "QUANTUM PROMPT GENESIS — v2",
    category: "orchestrators",
    modelAffinity: "CODER_DEEP",
    path: "agents/orchestrators/quantum-prompt-genesis-v2.md"
  },
  "research-director-2-neuronedge-labs": {
    id: "research-director-2-neuronedge-labs",
    name: "RESEARCH DIRECTOR 2— NeuronEdge Labs™ (",
    role: "RESEARCH DIRECTOR 2— NeuronEdge Labs™ (",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/research-director-2-neuronedge-labs.md"
  },
  "research-director-neuronedge-labs": {
    id: "research-director-neuronedge-labs",
    name: "RESEARCH DIRECTOR — NeuronEdge Labs™ (",
    role: "RESEARCH DIRECTOR — NeuronEdge Labs™ (",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/research-director-neuronedge-labs.md"
  },
  "research-director1-neuronedge-labs": {
    id: "research-director1-neuronedge-labs",
    name: "RESEARCH DIRECTOR1 — NeuronEdge Labs™ (",
    role: "RESEARCH DIRECTOR1 — NeuronEdge Labs™ (",
    category: "directors",
    modelAffinity: "CODER_DEEP",
    path: "agents/directors/research-director1-neuronedge-labs.md"
  },
  "rick-jefferson-ai-quantum-image-vi": {
    id: "rick-jefferson-ai-quantum-image-vi",
    name: "RICK JEFFERSON AI — Quantum Image & Vi",
    role: "RICK JEFFERSON AI — Quantum Image & Vi",
    category: "media_audio_video",
    modelAffinity: "REASONING_DEEP",
    path: "agents/media_audio_video/rick-jefferson-ai-quantum-image-vi.md"
  },
  "rick-jefferson-ai-supreme-meta-reaso": {
    id: "rick-jefferson-ai-supreme-meta-reaso",
    name: "RICK JEFFERSON AI — Supreme Meta-Reaso",
    role: "RICK JEFFERSON AI — Supreme Meta-Reaso",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/rick-jefferson-ai-supreme-meta-reaso.md"
  },
  "rick-jefferson-ai-supreme-prompt-eng": {
    id: "rick-jefferson-ai-supreme-prompt-eng",
    name: "RICK JEFFERSON AI — Supreme Prompt Eng",
    role: "RICK JEFFERSON AI — Supreme Prompt Eng",
    category: "legal_compliance",
    modelAffinity: "CODER_DEEP",
    path: "agents/legal_compliance/rick-jefferson-ai-supreme-prompt-eng.md"
  },
  "rick-jefferson-ai-supreme-viral-mult": {
    id: "rick-jefferson-ai-supreme-viral-mult",
    name: "RICK JEFFERSON AI — Supreme Viral Mult",
    role: "RICK JEFFERSON AI — Supreme Viral Mult",
    category: "finance_credit_tax",
    modelAffinity: "CODER_FAST",
    path: "agents/finance_credit_tax/rick-jefferson-ai-supreme-viral-mult.md"
  },
  "rick-jefferson-revenue-catalyst-academ": {
    id: "rick-jefferson-revenue-catalyst-academ",
    name: "RICK JEFFERSON REVENUE CATALYST ACADEM",
    role: "You are the Revenue Catalyst Academy: Rick Jefferson's AI instructor,",
    category: "finance_credit_tax",
    modelAffinity: "REASONING_DEEP",
    path: "agents/finance_credit_tax/rick-jefferson-revenue-catalyst-academ.md"
  },
  "rick-jefferson-supreme-credit-master": {
    id: "rick-jefferson-supreme-credit-master",
    name: "RICK JEFFERSON SUPREME CREDIT MASTER —",
    role: "Multi-agent credit analysis and dispute-drafting system for credit",
    category: "finance_credit_tax",
    modelAffinity: "REASONING_DEEP",
    path: "agents/finance_credit_tax/rick-jefferson-supreme-credit-master.md"
  },
  "rick-jefferson-total-mastery-mentor": {
    id: "rick-jefferson-total-mastery-mentor",
    name: "RICK JEFFERSON TOTAL MASTERY MENTOR —",
    role: "RICK JEFFERSON TOTAL MASTERY MENTOR —",
    category: "specialized",
    modelAffinity: "REASONING_DEEP",
    path: "agents/specialized/rick-jefferson-total-mastery-mentor.md"
  },
  "rick-jefferson-agentic-systems-archi": {
    id: "rick-jefferson-agentic-systems-archi",
    name: "RICK JEFFERSON — AGENTIC SYSTEMS ARCHI",
    role: "RICK JEFFERSON — AGENTIC SYSTEMS ARCHI",
    category: "operations_sop",
    modelAffinity: "CODER_DEEP",
    path: "agents/operations_sop/rick-jefferson-agentic-systems-archi.md"
  },
  "rick-jefferson-credit-oracle-of-the": {
    id: "rick-jefferson-credit-oracle-of-the",
    name: "RICK JEFFERSON — CREDIT ORACLE OF THE",
    role: "RICK JEFFERSON — CREDIT ORACLE OF THE",
    category: "finance_credit_tax",
    modelAffinity: "REASONING_DEEP",
    path: "agents/finance_credit_tax/rick-jefferson-credit-oracle-of-the.md"
  },
  "rick-jefferson-faceless-digital-empi": {
    id: "rick-jefferson-faceless-digital-empi",
    name: "RICK JEFFERSON — FACELESS DIGITAL EMPI",
    role: "RICK JEFFERSON — FACELESS DIGITAL EMPI",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/rick-jefferson-faceless-digital-empi.md"
  },
  "rick-jefferson-personal-social-media": {
    id: "rick-jefferson-personal-social-media",
    name: "RICK JEFFERSON — PERSONAL SOCIAL MEDIA",
    role: "RICK JEFFERSON — PERSONAL SOCIAL MEDIA",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/rick-jefferson-personal-social-media.md"
  },
  "rick-jefferson-s-ai-assistant-consum": {
    id: "rick-jefferson-s-ai-assistant-consum",
    name: "RICK JEFFERSON'S AI ASSISTANT — Consum",
    role: "RICK JEFFERSON'S AI ASSISTANT — Consum",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/rick-jefferson-s-ai-assistant-consum.md"
  },
  "rj-architect-lead-full-stack-archite": {
    id: "rj-architect-lead-full-stack-archite",
    name: "RJ ARCHITECT — Lead Full-Stack Archite",
    role: "You are the principal-level SaaS architect, senior engineer, product",
    category: "engineering",
    modelAffinity: "CODER_DEEP",
    path: "agents/engineering/rj-architect-lead-full-stack-archite.md"
  },
  "rj-boardroom-multidisciplinary-busin": {
    id: "rj-boardroom-multidisciplinary-busin",
    name: "RJ BOARDROOM — Multidisciplinary Busin",
    role: "You are an executive taskforce — Legal, Finance & Tax, Strategy, HR,",
    category: "orchestrators",
    modelAffinity: "REASONING_DEEP",
    path: "agents/orchestrators/rj-boardroom-multidisciplinary-busin.md"
  },
  "rj-seo-architect-v2": {
    id: "rj-seo-architect-v2",
    name: "RJ SEO ARCHITECT — v2",
    role: "Multi-agent SEO strategist: Strategist · Technical SEO · Schema",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/rj-seo-architect-v2.md"
  },
  "rjbs-prime-ai-assistant-v2": {
    id: "rjbs-prime-ai-assistant-v2",
    name: "RJBS PRIME AI ASSISTANT — v2",
    role: "You are RJBS Prime, the official AI assistant of RJ Business Solutions",
    category: "specialized",
    modelAffinity: "REASONING_DEEP",
    path: "agents/specialized/rjbs-prime-ai-assistant-v2.md"
  },
  "sales-director-neuronedge-labs-v2": {
    id: "sales-director-neuronedge-labs-v2",
    name: "SALES DIRECTOR — NeuronEdge Labs™ (v2",
    role: "You are the Sales Director of NeuronEdge Labs. You own sales strategy,",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/sales-director-neuronedge-labs-v2.md"
  },
  "stripe-nexus-payments-integration-ar": {
    id: "stripe-nexus-payments-integration-ar",
    name: "STRIPE NEXUS — Payments Integration Ar",
    role: "You design, build, debug, and harden Stripe integrations: payments, billing, Connect, tax,",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/stripe-nexus-payments-integration-ar.md"
  },
  "support-director-neuronedge-labs-v": {
    id: "support-director-neuronedge-labs-v",
    name: "SUPPORT DIRECTOR — NeuronEdge Labs™ (v",
    role: "You are the Support Director of NeuronEdge Labs. You own customer",
    category: "directors",
    modelAffinity: "REASONING_DEEP",
    path: "agents/directors/support-director-neuronedge-labs-v.md"
  },
  "supreme-meta-agi-rick-mode-v11": {
    id: "supreme-meta-agi-rick-mode-v11",
    name: "SUPREME META AGI — RICK MODE v11",
    role: "SUPREME META AGI — RICK MODE v11",
    category: "orchestrators",
    modelAffinity: "REASONING_DEEP",
    path: "agents/orchestrators/supreme-meta-agi-rick-mode-v11.md"
  },
  "supreme-underwriting-intelligence-agen": {
    id: "supreme-underwriting-intelligence-agen",
    name: "SUPREME UNDERWRITING INTELLIGENCE AGEN",
    role: "You are a senior pre-underwriting analyst and credit strategist for",
    category: "finance_credit_tax",
    modelAffinity: "REASONING_DEEP",
    path: "agents/finance_credit_tax/supreme-underwriting-intelligence-agen.md"
  },
  "the-supreme-full-stack-architect-agent": {
    id: "the-supreme-full-stack-architect-agent",
    name: "THE SUPREME FULL-STACK ARCHITECT AGENT",
    role: "THE SUPREME FULL-STACK ARCHITECT AGENT",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/the-supreme-full-stack-architect-agent.md"
  },
  "universal-metacor-template-engine-v2": {
    id: "universal-metacor-template-engine-v2",
    name: "UNIVERSAL METACOR TEMPLATE ENGINE — v2",
    role: "You are the Universal MetaCoR Template Engine. You convert any AI agent,",
    category: "specialized",
    modelAffinity: "CODER_DEEP",
    path: "agents/specialized/universal-metacor-template-engine-v2.md"
  },
  "unreal-c-engine-authority-v2": {
    id: "unreal-c-engine-authority-v2",
    name: "UNREAL C++ ENGINE AUTHORITY — v2",
    role: "You are a senior Unreal Engine engine/gameplay programmer and technical",
    category: "engineering",
    modelAffinity: "CODER_DEEP",
    path: "agents/engineering/unreal-c-engine-authority-v2.md"
  },
  "wave-professor-wave-music-mentor-s": {
    id: "wave-professor-wave-music-mentor-s",
    name: "WAVE PROFESSOR — Wave Music Mentor & S",
    role: "WAVE PROFESSOR — Wave Music Mentor & S",
    category: "media_audio_video",
    modelAffinity: "REASONING_DEEP",
    path: "agents/media_audio_video/wave-professor-wave-music-mentor-s.md"
  },
  "youtube-intelligence-extractor-v2": {
    id: "youtube-intelligence-extractor-v2",
    name: "YOUTUBE INTELLIGENCE EXTRACTOR — v2",
    role: "You are a business and technical intelligence analyst. You turn YouTube",
    category: "media_audio_video",
    modelAffinity: "REASONING_DEEP",
    path: "agents/media_audio_video/youtube-intelligence-extractor-v2.md"
  },
  "supreme-meta-agi-rick-mode-v12": {
    id: "supreme-meta-agi-rick-mode-v12",
    name: "🔥 SUPREME META AGI — RICK MODE v12",
    role: "🔥 SUPREME META AGI — RICK MODE v12",
    category: "orchestrators",
    modelAffinity: "REASONING_DEEP",
    path: "agents/orchestrators/supreme-meta-agi-rick-mode-v12.md"
  },
  "codeforge-nexus-ai-v2": {
    id: "codeforge-nexus-ai-v2",
    name: "CODEFORGE NEXUS AI — v2.0",
    role: "CODEFORGE NEXUS AI — v2.0",
    category: "engineering",
    modelAffinity: "CODER_DEEP",
    path: "agents/engineering/codeforge-nexus-ai-v2.md"
  },
  "agent-manifest-1": {
    id: "agent-manifest-1",
    name: "AGENT_MANIFEST (1)",
    role: "AGENT_MANIFEST (1)",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/agent-manifest-1.md"
  },
  "activation-phrase-start-every-response": {
    id: "activation-phrase-start-every-response",
    name: "Activation Phrase (start EVERY response",
    role: "S",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/activation-phrase-start-every-response.md"
  },
  "i-built-this-one-by-combining-the-python": {
    id: "i-built-this-one-by-combining-the-python",
    name: "I built this one by combining the Python",
    role: "I built this one by combining the Python",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/i-built-this-one-by-combining-the-python.md"
  },
  "i-rebuilt-excel-master-architect-for-o": {
    id: "i-rebuilt-excel-master-architect-for-o",
    name: "I rebuilt Excel Master Architect for **O",
    role: "Senior Excel / Microsoft 365 data architect. Formulas, modeling, Power Query,",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/i-rebuilt-excel-master-architect-for-o.md"
  },
  "i-rewrote-this-one-too": {
    id: "i-rewrote-this-one-too",
    name: "I rewrote this one too",
    role: "I rewrote this one too",
    category: "specialized",
    modelAffinity: "REASONING_DEEP",
    path: "agents/specialized/i-rewrote-this-one-too.md"
  },
  "i-rewrote-this-one": {
    id: "i-rewrote-this-one",
    name: "I rewrote this one",
    role: "I rewrote this one",
    category: "specialized",
    modelAffinity: "REASONING_DEEP",
    path: "agents/specialized/i-rewrote-this-one.md"
  },
  "rick-jefferson-ultimate-ai-tax-system": {
    id: "rick-jefferson-ultimate-ai-tax-system",
    name: "RICK JEFFERSON ULTIMATE AI TAX SYSTEM",
    role: "RICK JEFFERSON ULTIMATE AI TAX SYSTEM",
    category: "finance_credit_tax",
    modelAffinity: "REASONING_DEEP",
    path: "agents/finance_credit_tax/rick-jefferson-ultimate-ai-tax-system.md"
  },
  "supreme-legal-agi-ecosystem": {
    id: "supreme-legal-agi-ecosystem",
    name: "SUPREME_LEGAL_AGI_ECOSYSTEM",
    role: "SUPREME_LEGAL_AGI_ECOSYSTEM",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/supreme-legal-agi-ecosystem.md"
  },
  "supreme-legal-agi-skill-file": {
    id: "supreme-legal-agi-skill-file",
    name: "SUPREME_LEGAL_AGI_SKILL_FILE",
    role: "SUPREME_LEGAL_AGI_SKILL_FILE",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/supreme-legal-agi-skill-file.md"
  },
  "system-prompt-1": {
    id: "system-prompt-1",
    name: "SYSTEM_PROMPT (1)",
    role: "SYSTEM_PROMPT (1)",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/system-prompt-1.md"
  },
  "this-gpt-helps-create-compliant-high-co": {
    id: "this-gpt-helps-create-compliant-high-co",
    name: "This GPT helps create compliant, high-co",
    role: "This GPT helps create compliant, high-co",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/this-gpt-helps-create-compliant-high-co.md"
  },
  "untitled-2": {
    id: "untitled-2",
    name: "Untitled-2",
    role: "Untitled-2",
    category: "legal_compliance",
    modelAffinity: "CODER_DEEP",
    path: "agents/legal_compliance/untitled-2.md"
  },
  "untitled-39": {
    id: "untitled-39",
    name: "Untitled-39",
    role: "You are the AI/ML Director of NeuronEdge Labs. You design, build,",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/untitled-39.md"
  },
  "you-are-funnelforge-ultra-v2": {
    id: "you-are-funnelforge-ultra-v2",
    name: "You are FunnelForge Ultra™ v2",
    role: "You are FunnelForge Ultra™ v2",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/you-are-funnelforge-ultra-v2.md"
  },
  "you-are-rj-prometheus-rick-jefferson-s": {
    id: "you-are-rj-prometheus-rick-jefferson-s",
    name: "You are RJ PROMETHEUS — Rick Jefferson's",
    role: "You are RJ PROMETHEUS — Rick Jefferson's",
    category: "specialized",
    modelAffinity: "REASONING_DEEP",
    path: "agents/specialized/you-are-rj-prometheus-rick-jefferson-s.md"
  },
  "you-are-rick-jefferson-the-supreme-car": {
    id: "you-are-rick-jefferson-the-supreme-car",
    name: "You are Rick Jefferson — The Supreme Car",
    role: "You are Rick Jefferson — The Supreme Car",
    category: "growth_marketing_sales",
    modelAffinity: "VISION_MULTIMODAL",
    path: "agents/growth_marketing_sales/you-are-rick-jefferson-the-supreme-car.md"
  },
  "you-are-rick-jefferson-the-ultimate-of": {
    id: "you-are-rick-jefferson-the-ultimate-of",
    name: "You are Rick Jefferson — The Ultimate Of",
    role: "You are Rick Jefferson — The Ultimate Of",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/you-are-rick-jefferson-the-ultimate-of.md"
  },
  "you-are-rick-jefferson-elite-ai-system": {
    id: "you-are-rick-jefferson-elite-ai-system",
    name: "You are Rick Jefferson — elite AI system",
    role: "You are Rick Jefferson — elite AI system",
    category: "operations_sop",
    modelAffinity: "CODER_DEEP",
    path: "agents/operations_sop/you-are-rick-jefferson-elite-ai-system.md"
  },
  "you-are-supreme-legal-agi-master-router": {
    id: "you-are-supreme-legal-agi-master-router",
    name: "You are SUPREME LEGAL AGI (MASTER ROUTER",
    role: "You are SUPREME LEGAL AGI (MASTER ROUTER",
    category: "orchestrators",
    modelAffinity: "REASONING_DEEP",
    path: "agents/orchestrators/you-are-supreme-legal-agi-master-router.md"
  },
  "you-are-the-omniscient-legal-enforcer": {
    id: "you-are-the-omniscient-legal-enforcer",
    name: "You are The Omniscient Legal Enforcer™ —",
    role: "You are The Omniscient Legal Enforcer™ —",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/you-are-the-omniscient-legal-enforcer.md"
  },
  "you-are-a-senior-full-stack-software-arc": {
    id: "you-are-a-senior-full-stack-software-arc",
    name: "You are a senior full-stack software arc",
    role: "You are a senior full-stack software arc",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/you-are-a-senior-full-stack-software-arc.md"
  },
  "you-are-the-architecture-omniscient-matr": {
    id: "you-are-the-architecture-omniscient-matr",
    name: "You are the ARCHITECTURE OMNISCIENT MATR",
    role: "You are the ARCHITECTURE OMNISCIENT MATR",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/you-are-the-architecture-omniscient-matr.md"
  },
  "you-are-the-genspark-master-agent-rj-b": {
    id: "you-are-the-genspark-master-agent-rj-b",
    name: "You are the GenSpark Master Agent — RJ B",
    role: "You are the GenSpark Master Agent — RJ B",
    category: "specialized",
    modelAffinity: "REASONING_DEEP",
    path: "agents/specialized/you-are-the-genspark-master-agent-rj-b.md"
  },
  "you-are-the-supreme-quantum-funnel-archi": {
    id: "you-are-the-supreme-quantum-funnel-archi",
    name: "You are the Supreme Quantum Funnel Archi",
    role: "You are the Supreme Quantum Funnel Archi",
    category: "growth_marketing_sales",
    modelAffinity: "REASONING_DEEP",
    path: "agents/growth_marketing_sales/you-are-the-supreme-quantum-funnel-archi.md"
  },
  "you-are-the-supreme-typescript-quantum-d": {
    id: "you-are-the-supreme-typescript-quantum-d",
    name: "You are the Supreme TypeScript Quantum D",
    role: "You are the Supreme TypeScript Quantum D",
    category: "engineering",
    modelAffinity: "REASONING_DEEP",
    path: "agents/engineering/you-are-the-supreme-typescript-quantum-d.md"
  },
  "you-are-the-video-seo-optimization-ass": {
    id: "you-are-the-video-seo-optimization-ass",
    name: "You are the Video SEO Optimization & Ass",
    role: "You are the Video SEO Optimization & Ass",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_DEEP",
    path: "agents/growth_marketing_sales/you-are-the-video-seo-optimization-ass.md"
  },
  "your-doc-was-dated-february-28-and-it-s": {
    id: "your-doc-was-dated-february-28-and-it-s",
    name: "Your doc was dated February 28, and it's",
    role: "Your doc was dated February 28, and it's",
    category: "specialized",
    modelAffinity: "CODER_DEEP",
    path: "agents/specialized/your-doc-was-dated-february-28-and-it-s.md"
  },
  "dennis-personal-brand-strategist": {
    id: "dennis-personal-brand-strategist",
    name: "Personal-Brand-Strategist Agent",
    role: "****",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-personal-brand-strategist.md"
  },
  "dennis-positive-mentions-harvester": {
    id: "dennis-positive-mentions-harvester",
    name: "Dennis Positive Mentions Harvester Agent",
    role: "positive-mentions-harvester",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-positive-mentions-harvester.md"
  },
  "dennis-reputation-gap-analyzer": {
    id: "dennis-reputation-gap-analyzer",
    name: "Dennis Reputation Gap Analyzer Agent",
    role: "reputation-gap-analyzer",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-reputation-gap-analyzer.md"
  },
  "dennis-personal-brand-website-agent": {
    id: "dennis-personal-brand-website-agent",
    name: "Dennis Personal Brand Website Agent Agent",
    role: "personal-brand-website-agent",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-personal-brand-website-agent.md"
  },
  "dennis-knowledge-panel-entity-seo": {
    id: "dennis-knowledge-panel-entity-seo",
    name: "Dennis Knowledge Panel Entity Seo Agent",
    role: "knowledge-panel-entity-seo",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-knowledge-panel-entity-seo.md"
  },
  "dennis-ai-search-visibility": {
    id: "dennis-ai-search-visibility",
    name: "Dennis Ai Search Visibility Agent",
    role: "ai-search-visibility",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-ai-search-visibility.md"
  },
  "dennis-dollar-a-day-strategist": {
    id: "dennis-dollar-a-day-strategist",
    name: "Dennis Dollar A Day Strategist Agent",
    role: "dollar-a-day-strategist",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-dollar-a-day-strategist.md"
  },
  "dennis-content-factory": {
    id: "dennis-content-factory",
    name: "Dennis Content Factory Agent",
    role: "content-factory",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-content-factory.md"
  },
  "dennis-definitive-article-writer": {
    id: "dennis-definitive-article-writer",
    name: "Dennis Definitive Article Writer Agent",
    role: "definitive-article-writer",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-definitive-article-writer.md"
  },
  "dennis-recursive-self-improvement-qa": {
    id: "dennis-recursive-self-improvement-qa",
    name: "Dennis Recursive Self Improvement Qa Agent",
    role: "recursive-self-improvement-qa",
    category: "growth_marketing_sales",
    modelAffinity: "CODER_FAST",
    path: "agents/growth_marketing_sales/dennis-recursive-self-improvement-qa.md"
  },
  "legal-delaware-chancery-specialist": {
    id: "legal-delaware-chancery-specialist",
    name: "Supreme Legal: DELAWARE CHANCERY SPECIALIST",
    role: "DELAWARE CHANCERY SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-delaware-chancery-specialist.md"
  },
  "legal-sec-enforcement-specialist": {
    id: "legal-sec-enforcement-specialist",
    name: "Supreme Legal: SEC ENFORCEMENT SPECIALIST",
    role: "SEC ENFORCEMENT SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-sec-enforcement-specialist.md"
  },
  "legal-m-a-deal-specialist": {
    id: "legal-m-a-deal-specialist",
    name: "Supreme Legal: M&A DEAL SPECIALIST",
    role: "M&A DEAL SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-m-a-deal-specialist.md"
  },
  "legal-business-litigation-specialist": {
    id: "legal-business-litigation-specialist",
    name: "Supreme Legal: BUSINESS LITIGATION SPECIALIST",
    role: "BUSINESS LITIGATION SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-business-litigation-specialist.md"
  },
  "legal-contract-drafting-specialist": {
    id: "legal-contract-drafting-specialist",
    name: "Supreme Legal: CONTRACT DRAFTING SPECIALIST",
    role: "CONTRACT DRAFTING SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-contract-drafting-specialist.md"
  },
  "legal-corporate-formation-specialist": {
    id: "legal-corporate-formation-specialist",
    name: "Supreme Legal: CORPORATE FORMATION SPECIALIST",
    role: "CORPORATE FORMATION SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-corporate-formation-specialist.md"
  },
  "legal-bankruptcy-restructuring-specialist": {
    id: "legal-bankruptcy-restructuring-specialist",
    name: "Supreme Legal: BANKRUPTCY & RESTRUCTURING SPECIALIST",
    role: "BANKRUPTCY & RESTRUCTURING SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-bankruptcy-restructuring-specialist.md"
  },
  "legal-securities-compliance-specialist": {
    id: "legal-securities-compliance-specialist",
    name: "Supreme Legal: SECURITIES COMPLIANCE SPECIALIST",
    role: "SECURITIES COMPLIANCE SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-securities-compliance-specialist.md"
  },
  "legal-public-records-retrieval-specialist": {
    id: "legal-public-records-retrieval-specialist",
    name: "Supreme Legal: PUBLIC RECORDS RETRIEVAL SPECIALIST",
    role: "PUBLIC RECORDS RETRIEVAL SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-public-records-retrieval-specialist.md"
  },
  "legal-state-court-routing-specialist": {
    id: "legal-state-court-routing-specialist",
    name: "Supreme Legal: STATE COURT ROUTING SPECIALIST",
    role: "STATE COURT ROUTING SPECIALIST",
    category: "legal_compliance",
    modelAffinity: "REASONING_DEEP",
    path: "agents/legal_compliance/legal-state-court-routing-specialist.md"
  },
  "legacy-jennifer-2-0": {
    id: "legacy-jennifer-2-0",
    name: "JENNIFER 2.0: Elite Content Quality Enforcer",
    role: "Elite Content Quality Enforcer",
    category: "legal_compliance",
    modelAffinity: "GENERAL_FAST",
    path: "agents/legal_compliance/legacy-jennifer-2-0.md"
  },
  "legacy-brandon-2-0": {
    id: "legacy-brandon-2-0",
    name: "BRANDON 2.0: SEO-Optimized Video-to-Article Pipeline",
    role: "SEO-Optimized Video-to-Article Pipeline",
    category: "growth_marketing_sales",
    modelAffinity: "GENERAL_FAST",
    path: "agents/growth_marketing_sales/legacy-brandon-2-0.md"
  },
  "legacy-stephanie-2-0": {
    id: "legacy-stephanie-2-0",
    name: "STEPHANIE 2.0: SEO Operations Orchestrator",
    role: "SEO Operations Orchestrator",
    category: "orchestrators",
    modelAffinity: "GENERAL_FAST",
    path: "agents/orchestrators/legacy-stephanie-2-0.md"
  },
  "legacy-ethan-2-0": {
    id: "legacy-ethan-2-0",
    name: "ETHAN 2.0: Google Algorithm Intelligence",
    role: "Google Algorithm Intelligence",
    category: "growth_marketing_sales",
    modelAffinity: "GENERAL_FAST",
    path: "agents/growth_marketing_sales/legacy-ethan-2-0.md"
  },
  "legacy-olivia-2-0": {
    id: "legacy-olivia-2-0",
    name: "OLIVIA 2.0: Google Knowledge Panel Domination",
    role: "Google Knowledge Panel Domination",
    category: "growth_marketing_sales",
    modelAffinity: "GENERAL_FAST",
    path: "agents/growth_marketing_sales/legacy-olivia-2-0.md"
  },
  "legacy-christopher-3-0": {
    id: "legacy-christopher-3-0",
    name: "CHRISTOPHER 3.0: Google Algorithm SEO Audit Engine",
    role: "Google Algorithm SEO Audit Engine",
    category: "growth_marketing_sales",
    modelAffinity: "GENERAL_FAST",
    path: "agents/growth_marketing_sales/legacy-christopher-3-0.md"
  },
  "legacy-adrian-4-0": {
    id: "legacy-adrian-4-0",
    name: "ADRIAN 4.0: Local Google Domination",
    role: "Local Google Domination",
    category: "growth_marketing_sales",
    modelAffinity: "GENERAL_FAST",
    path: "agents/growth_marketing_sales/legacy-adrian-4-0.md"
  },
  "legacy-warren-5-0": {
    id: "legacy-warren-5-0",
    name: "WARREN 5.0: Google-Optimized Publishing",
    role: "Google-Optimized Publishing",
    category: "growth_marketing_sales",
    modelAffinity: "GENERAL_FAST",
    path: "agents/growth_marketing_sales/legacy-warren-5-0.md"
  },
};

export const ALL_AGENTS: AgentMetadata[] = Object.values(AGENT_REGISTRY);

export function getAgentById(id: string): AgentMetadata | undefined {
  return AGENT_REGISTRY[id];
}

export function getAgentsByCategory(category: AgentMetadata['category']): AgentMetadata[] {
  return ALL_AGENTS.filter(a => a.category === category);
}

export function getAgentsByAffinity(affinity: AgentMetadata['modelAffinity']): AgentMetadata[] {
  return ALL_AGENTS.filter(a => a.modelAffinity === affinity);
}
