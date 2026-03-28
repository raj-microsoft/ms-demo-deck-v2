export type SlideLayout = 'center' | 'image-right' | 'image-left' | 'image-full' | 'image-top'

export interface SlideData {
  id: string
  title: string
  subtitle?: string
  bullets?: string[]
  code?: string
  codeLanguage?: string
  background: string
  icon?: string
  accent?: string
  note?: string
  image?: string
  imageAlt?: string
  layout?: SlideLayout
}

export const slides: SlideData[] = [
  // ── SECTION 1 — THE HOOK ──────────────────────────────────────
  {
    id: 'title',
    title: 'OpenClaw + Azure',
    subtitle: 'When Your AI Agent Has the Keys to the Cloud',
    bullets: [
      'Microsoft Netherlands · TechFest 2026',
      'Rajkumar Balakrishnan & Priyansh Arora',
      'Cloud Solutions Architects',
    ],
    background: 'cosmos',
    accent: '#0078d4',
    layout: 'center',
  },
  {
    id: 'not-this',
    title: 'What This Session Is NOT',
    subtitle: 'Setting Expectations',
    bullets: [
      '❌ Not a product pitch or sales deck',
      '❌ Not a chatbot demo — no \'Hey Siri\' moments',
      '❌ Not prompt engineering tips & tricks',
      '✅ This is about autonomous AI agents managing real cloud infrastructure',
      '✅ Real code, real deployments, real results from the last 72 hours',
    ],
    background: 'chaos',
    accent: '#ff4444',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80',
    imageAlt: 'Stop sign symbolizing what this session is not',
    layout: 'image-left',
  },
  {
    id: 'moment',
    title: 'The Moment We Are In',
    subtitle: 'From Conductor to Orchestrator',
    bullets: [
      'Six months ago: pair programming with one AI in a conversation thread',
      'Today: coordinating multiple agents running asynchronously',
      'The codebase becomes your canvas, not a conversation thread',
      'Addy Osmani: \'Most developers are stuck at Level 3-4. Orchestration starts at Level 6\'',
      'This talk: what Level 6+ looks like with real cloud infrastructure',
    ],
    background: 'galaxy',
    accent: '#50e6ff',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    layout: 'image-right',
  },

  // ── SECTION 2 — WHY OPENCLAW ──────────────────────────────────
  {
    id: 'cloud-complexity',
    title: 'The Cloud Complexity Explosion',
    subtitle: 'Why We Need Agent-Level Help',
    bullets: [
      '73% of enterprises manage 3+ cloud environments',
      'Average incident MTTR: 4+ hours with manual runbooks',
      'Cloud spend waste exceeds $100B annually',
      '65% of cloud breaches caused by misconfiguration',
      'Your team is drowning in alerts, dashboards, and toil',
    ],
    background: 'chaos',
    accent: '#ff4444',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    layout: 'image-right',
  },
  // NEW: introduces OpenClaw before comparing it to anything else
  {
    id: 'meet-openclaw',
    title: 'Meet OpenClaw',
    subtitle: 'An AI Agent That Lives in Your Infrastructure',
    bullets: [
      '🤖 Open-source, self-hosted AI agent framework — not a SaaS product',
      '☁️ Runs 24/7 on your Azure VM or Windows 365 Cloud PC',
      '💬 You talk to it on Telegram, Discord, WhatsApp, or a terminal',
      '🛠️ It executes shell commands, calls APIs, browses the web, writes code',
      '🧠 Persistent memory — it remembers context across every session',
      'Think of it as an ops team member that never sleeps and never forgets',
    ],
    background: 'particles',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    imageAlt: 'Robot representing the OpenClaw AI agent',
    layout: 'image-right',
  },
  {
    id: 'why-not-copilot',
    title: 'But I Already Have GitHub Copilot...',
    subtitle: 'The Most Common Objection',
    bullets: [
      'Copilot writes code. OpenClaw RUNS your infrastructure.',
      'Copilot = pair programmer in your IDE',
      'OpenClaw = ops team member in your Telegram, Discord, WhatsApp',
      'Copilot suggests. OpenClaw executes, monitors, reports back.',
      'They\'re complementary — OpenClaw uses Copilot CLI as a sub-agent!',
    ],
    background: 'network',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    imageAlt: 'Technology comparison showing complementary tools',
    layout: 'image-right',
  },
  {
    id: 'openclaw-usp',
    title: 'What Makes OpenClaw Different',
    subtitle: 'The Unique Value Proposition',
    bullets: [
      '🔓 Open-source and self-hosted — you own everything',
      '📱 Multi-channel: WhatsApp, Telegram, Discord, Teams, Web, TUI',
      '🧠 Persistent memory across sessions and channels',
      '🌐 Browser automation + MCP tool integration',
      '🧩 Extensible skill system — clawhub.com marketplace',
      '🤖 Sub-agent orchestration — agents spawning agents',
    ],
    background: 'flow',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    layout: 'image-left',
  },
  {
    id: 'agent-loop',
    title: 'The Agent Loop',
    subtitle: 'How OpenClaw Thinks and Acts',
    bullets: [
      '1️⃣ DECOMPOSE — Break complex request into discrete steps',
      '2️⃣ EXECUTE — Call tools, run code, browse the web, send messages',
      '3️⃣ OBSERVE — Evaluate results, detect errors, adjust approach',
      '4️⃣ REPORT — Summarize outcomes, flag issues, request human input',
      'This loop ran for 72 hours straight on my Azure VM — here\'s what it accomplished',
    ],
    background: 'connections',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    imageAlt: 'Abstract circular workflow representing the agent loop',
    layout: 'image-left',
  },

  // ── SECTION 3 — LIVE DEMO / WHAT I BUILT ─────────────────────
  {
    id: '72-hours',
    title: 'What Benji Did in 72 Hours',
    // Benji is named here — it was introduced as a concept in meet-openclaw
    subtitle: 'Benji 🐾 — My Agent Running on Azure',
    bullets: [
      '📧 99,235 → 13,418 inbox emails (86.5% reduction)',
      '📋 94 inbox rules created across 18 organized folders',
      '🌐 3 web apps built and deployed to Azure Static Web Apps',
      '🐙 9 GitHub repos managed, 14 archived repos cleaned up',
      '🤖 15 cron automations set up and running',
      '📊 All triggered through conversations — no scripts, no SSH',
    ],
    background: 'cosmos',
    accent: '#00cc6a',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Analytics dashboard showing metrics and data',
    layout: 'image-right',
  },
  // multi-channel moved here: explains HOW the 72-hour results were achieved
  {
    id: 'multi-channel',
    title: 'How I Talked to Benji',
    subtitle: 'Same Agent, Every Surface',
    bullets: [
      '📱 Telegram — quick commands on mobile, anywhere I was',
      '💬 Discord — team collaboration and shared monitoring',
      '💻 TUI — terminal power users and scripting',
      '🌐 Web — browser-based dashboard when at my desk',
      '🔄 Persistent memory: context follows you across all channels',
      'Say it once on Telegram. Pick it up on Discord. Benji remembers.',
    ],
    background: 'network',
    accent: '#50e6ff',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    layout: 'image-left',
  },
  {
    id: 'email-demo',
    title: 'Deep Dive: Autonomous Email Cleanup',
    subtitle: 'From 99K Chaos to Organized Inbox',
    bullets: [
      'Connected to Microsoft Graph API via OAuth (Azure AD app)',
      'Analyzed sender patterns across 99,235 emails',
      'Created 94 inbox rules → categorized into 18 folders (Finance, Travel, Health...)',
      'Deleted 47,000+ spam emails, moved 39,000+ to folders',
      'Unsubscribed from 155+ mailing lists — all conversationally',
      'Total time in conversation: ~25 minutes. Total hours saved: hundreds.',
    ],
    background: 'pulse',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    layout: 'image-right',
  },
  {
    id: 'automations',
    title: '15 Cron Automations Running Right Now',
    subtitle: 'Always-On Intelligence, Zero Manual Triggers',
    bullets: [
      '☀️ Morning Briefing (7AM) — emails, calendar, weather, Azure alerts',
      '💱 Wise Rate Watch (3x/day) — EUR→INR alerts for money transfers',
      '📧 Email Watchdog (every 2h) — flags urgent emails',
      '✈️ Flight Price Watch (Tue/Fri) — AMS→India deals',
      '💰 Azure Cost Monitor (Monday) — spending report',
      '🐙 GitHub Monitor (daily) — PRs, issues, security alerts',
      'All 15 run on a single Azure VM — which brings me to the infrastructure powering this',
    ],
    background: 'grid',
    accent: '#ff8c00',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    imageAlt: 'Robot representing always-on automation',
    layout: 'image-left',
  },
  // this-deck moved here: climax of demo section — "and by the way, this deck itself"
  {
    id: 'this-deck',
    title: 'This Deck Was Built by an Agent',
    subtitle: 'Inception: The Presentation About AI Was Made by AI',
    bullets: [
      'Benji used GitHub Copilot CLI as a sub-agent (Claude Opus 4.6)',
      'Generated: Next.js 14 + shadcn/ui + Three.js + Framer Motion',
      '26 slides with animated 3D backgrounds, fully responsive',
      'Deployed to Azure Static Web Apps in a single command',
      'Total human input: one Telegram message',
      '🔗 Live: https://ms-demo-deck-v2.azurestaticapps.net',
    ],
    background: 'inception',
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    imageAlt: 'Code on a screen representing AI-generated presentation',
    layout: 'image-right',
  },

  // ── SECTION 4 — AZURE INTEGRATION ────────────────────────────
  {
    id: 'azure-backbone',
    title: 'Azure Is the Backbone',
    subtitle: 'Why Azure Is the Natural Home for an Agent Like This',
    bullets: [
      '☁️ Azure VM / Windows 365 — always-on compute for the agent',
      '🌐 Azure Static Web Apps — deploy apps in one command',
      '🔐 Azure AD / Entra ID — OAuth for Graph API, SSO, RBAC',
      '📊 Azure Monitor — observability for every agent action',
      '🧠 Azure OpenAI — model backend (GPT-4o, Claude via GitHub Models)',
      '💰 Azure Cost Management — the agent monitors its own costs',
    ],
    background: 'fortress',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    layout: 'image-right',
  },
  {
    id: 'architecture',
    title: 'The Architecture',
    subtitle: 'A Node.js Gateway on Your Azure VM Routes Everything',
    bullets: [
      'Azure VM runs the OpenClaw Gateway — a Node.js server you own',
      'Gateway → Channels: Telegram, Discord, WhatsApp, Web (inbound)',
      'Gateway → Tools: exec, browser, file system, Microsoft Graph API',
      'Gateway → Azure Services: ARM, CLI, Monitor, OpenAI (outbound)',
      'Gateway → Sub-agents: Copilot CLI, Claude Code, custom skills',
      'Your data never leaves your subscription. No cloud vendor lock-in.',
    ],
    background: 'network',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'Network blueprint showing system architecture',
    layout: 'image-right',
  },
  {
    id: 'azure-skills',
    title: 'Natural Language → Azure CLI',
    subtitle: 'You Ask in English. Benji Runs the Commands.',
    code: `# What Benji translates your requests into:
az webapp list --output table
az monitor metrics list --resource $APP_ID
az costmanagement query --timeframe MonthToDate
az aks scale --node-count 5
az staticwebapp create --name my-app`,
    codeLanguage: 'bash',
    bullets: [
      'Cost analysis: "How much did we spend on AKS this month?"',
      'Resource ops: "Scale down the staging cluster to 2 nodes"',
      'Deployments: "Deploy the latest build to production"',
      'Security: "Run a Defender scan on the storage accounts"',
      'You never write these commands — Benji composes and executes them',
    ],
    background: 'terminal',
    accent: '#00bcf2',
    layout: 'image-top',
  },
  {
    id: 'deploy-flow',
    title: 'From Conversation to Deployment',
    subtitle: 'The Full Pipeline in 6 Steps',
    bullets: [
      '1. You say: \'Deploy a Node.js API with Cosmos DB\'',
      '2. Agent plans: App Service + Cosmos + Key Vault + Monitoring',
      '3. Agent generates Bicep/ARM templates',
      '4. Agent validates security and compliance',
      '5. Agent deploys with rollback capability',
      '6. Agent reports back: \'Done. Here is your endpoint.\'',
    ],
    background: 'pipeline',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    layout: 'image-left',
  },

  // ── SECTION 5 — SECURITY & GOVERNANCE ────────────────────────
  {
    id: 'elephant',
    title: 'The Elephant in the Room 🐘',
    subtitle: 'This Power Comes With Real Risk',
    bullets: [
      '🖥️ Shell access — can execute any command on your VM',
      '📁 File system access — can read and write any file',
      '🌐 Network access — can call external APIs, browse the web',
      '💬 Messaging access — can send messages on your behalf',
      'With great power comes the need for serious security design.',
    ],
    background: 'shield',
    accent: '#ff4444',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80',
    imageAlt: 'Elephant representing the big security question',
    layout: 'image-right',
  },
  {
    id: 'security-model',
    title: 'OpenClaw Security Model',
    subtitle: 'Three Layers: Identity → Scope → Model',
    bullets: [
      '🔐 IDENTITY (Layer 1): Who can talk to the bot? DM pairing + allowlists',
      '📋 SCOPE (Layer 2): What tools are enabled? Per-tool policies + exec approvals',
      '🧠 MODEL (Layer 3): Assume it CAN be manipulated — limit blast radius',
      'Dangerous commands require explicit human confirmation before running',
      'Exec runs in isolated containers — no host system escape',
      'The AI model is the LAST line of defense, not the first',
    ],
    background: 'shield',
    accent: '#00cc6a',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    layout: 'image-right',
  },
  {
    id: 'control',
    title: 'What We Control vs. What We Don\'t',
    subtitle: 'An Honest Assessment',
    bullets: [
      '✅ WE CONTROL: Channel access, tool permissions, exec approvals',
      '✅ WE CONTROL: Workspace isolation, network policies, audit logs',
      '✅ WE CONTROL: Model selection, token budgets, rate limits',
      '⚠️ WE DON\'T: Model hallucinations — mitigate with output validation',
      '⚠️ WE DON\'T: Prompt injection from forwarded content — mitigate with content boundaries',
      '⚠️ WE DON\'T: Novel attack vectors — mitigate with defense in depth + regular audits',
    ],
    background: 'pulse',
    accent: '#ff8c00',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80',
    imageAlt: 'Control panel with switches and dials',
    layout: 'image-left',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Readiness',
    subtitle: 'For When Your CISO Asks',
    bullets: [
      '🔑 SSO/SAML: Azure AD, Okta, Google Workspace integration',
      '👥 RBAC: Granular roles — admin, manager, agent user',
      '📝 Audit: Every action logged with immutable trail',
      '🏛️ Compliance: SOC 2, GDPR, ISO 27001, HIPAA-ready',
      '🌍 Data residency: Deploy in EU, US, or any Azure region',
      '🏢 Dedicated infra: Isolated VMs, private endpoints, VNet integration',
    ],
    background: 'fortress',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    layout: 'image-left',
  },

  // ── SECTION 6 — CLOSE ────────────────────────────────────────
  {
    id: 'takeaways',
    title: 'Key Takeaways',
    subtitle: 'What to Remember from This Session',
    bullets: [
      '1️⃣ AI agents are NOT chatbots — they execute real actions on real infrastructure',
      '2️⃣ Self-hosted = full control over your data, models, and costs',
      '3️⃣ Azure is the natural home — compute, identity, monitoring, AI models',
      '4️⃣ Start small, automate what hurts — email cleanup before AKS management',
      '5️⃣ Security is a design decision, not an afterthought — Identity → Scope → Model',
      '6️⃣ The future of cloud ops is conversational, autonomous, and always-on',
    ],
    background: 'cosmos',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    imageAlt: 'Checklist and notepad for key takeaways',
    layout: 'image-right',
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    subtitle: 'Your First Agent in 5 Minutes',
    code: `# Install
npm install -g openclaw

# Initialize
openclaw onboard

# Connect a channel
openclaw pair telegram

# Start automating
"Check my Azure costs this month"`,
    codeLanguage: 'bash',
    bullets: [
      'docs.openclaw.ai — Full documentation',
      'github.com/openclaw/openclaw — Source code',
      'discord.com/invite/clawd — Community',
      'clawhub.com — Skills marketplace',
    ],
    background: 'launchpad',
    accent: '#00cc6a',
    layout: 'image-top',
  },
  {
    id: 'resources',
    title: 'Resources & Further Reading',
    subtitle: 'Go Deeper',
    bullets: [
      '📖 Addy Osmani: \'The Code Agent Orchestra\' — agent orchestration patterns',
      '📖 OpenClaw Docs: docs.openclaw.ai — security, skills, deployment',
      '🐙 OpenClaw GitHub: github.com/openclaw/openclaw',
      '🛍️ ClawHub: clawhub.com — community skill marketplace',
      '☁️ Azure AI Agent Service: learn.microsoft.com',
      '🏢 Enterprise: clawr.co — managed enterprise deployments',
      '📝 This deck (live): https://ms-demo-deck-v2.azurestaticapps.net',
      '💻 This deck (source): github.com/raj-microsoft/ms-demo-deck-v2',
    ],
    background: 'wave',
    accent: '#e040fb',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    imageAlt: 'Library with books for further reading',
    layout: 'image-right',
  },
  {
    id: 'thank-you',
    title: 'Thank You!',
    subtitle: 'Let\'s Build the Future of Cloud Operations',
    bullets: [
      'Rajkumar Balakrishnan & Priyansh Arora',
      'Cloud Solutions Architects — Microsoft Netherlands',
      'rajkumarb@outlook.com · github.com/raj-microsoft',
      'linkedin.com/in/raj-microsoft',
      'aka.ms/helloraj',
    ],
    background: 'cosmos',
    accent: '#0078d4',
    note: 'Microsoft Netherlands TechFest 2026',
    layout: 'center',
  },
]
