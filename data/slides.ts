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
    background: 'particles',
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
      'This loop runs 24/7 on Azure VM or Windows 365 Cloud PC',
    ],
    background: 'flow',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    imageAlt: 'Abstract circular workflow representing the agent loop',
    layout: 'image-left',
  },

  // ── SECTION 3 — LIVE DEMO / WHAT I BUILT ─────────────────────
  {
    id: '72-hours',
    title: 'What My Agent Did in 72 Hours',
    subtitle: 'Meet Benji 🐾 — Running on Azure',
    bullets: [
      '📧 99,235 → 13,418 inbox emails (86.5% reduction)',
      '📋 94 inbox rules created, 18 organized folders',
      '🌐 3 web apps built and deployed to Azure Static Web Apps',
      '🐙 9 GitHub repos managed, 14 archived repos cleaned up',
      '🤖 15 cron automations running (Telegram delivery)',
      '📊 All through conversations on Telegram + Discord',
    ],
    background: 'cosmos',
    accent: '#00cc6a',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Analytics dashboard showing metrics and data',
    layout: 'image-right',
  },
  {
    id: 'email-demo',
    title: 'Demo: Autonomous Email Cleanup',
    subtitle: 'From 99K Chaos to Organized Inbox',
    bullets: [
      'Connected to Microsoft Graph API via OAuth (Azure AD app)',
      'Analyzed sender patterns across 99,235 emails',
      'Categorized into 18 folders: Finance, Shopping, Travel, Health...',
      'Created 94 auto-processing inbox rules',
      'Deleted 47,000+ spam emails, moved 39,000+ to folders',
      'Unsubscribed from 155+ mailing lists — all conversationally',
    ],
    background: 'pulse',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    layout: 'image-right',
  },
  {
    id: 'this-deck',
    title: 'This Deck Was Built by an Agent',
    subtitle: 'Inception: AI Building Its Own Presentation',
    bullets: [
      'Benji used GitHub Copilot CLI as a sub-agent (Claude Opus 4.6)',
      'Generated: Next.js 14 + shadcn/ui + Three.js + Framer Motion',
      '25 slides with animated 3D backgrounds',
      'Deployed to Azure Static Web Apps in one command',
      'Total human input: one Telegram message',
      '🔗 Live: ms-demo-deck-v2.azurestaticapps.net',
    ],
    background: 'inception',
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    imageAlt: 'Code on a screen representing AI-generated presentation',
    layout: 'image-right',
  },
  {
    id: 'multi-channel',
    title: 'Multi-Channel: Same Brain, Every Surface',
    subtitle: 'One Agent, All Your Interfaces',
    bullets: [
      '📱 Telegram — quick commands on mobile',
      '💬 Discord — team collaboration and monitoring',
      '💻 TUI — terminal power users',
      '🌐 Web — browser-based dashboard',
      '🔄 Persistent memory: context follows you across all channels',
      'Say it once. Benji remembers everywhere.',
    ],
    background: 'connections',
    accent: '#50e6ff',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    layout: 'image-left',
  },
  {
    id: 'automations',
    title: '15 Cron Automations Running Now',
    subtitle: 'Always-On Intelligence',
    bullets: [
      '☀️ Morning Briefing (7AM) — emails, calendar, weather, Azure alerts',
      '💱 Wise Rate Watch (3x/day) — EUR→INR alerts for money transfers',
      '📧 Email Watchdog (every 2h) — flags urgent emails',
      '✈️ Flight Price Watch (Tue/Fri) — AMS→India deals',
      '💰 Azure Cost Monitor (Monday) — spending report',
      '🐙 GitHub Monitor (daily) — PRs, issues, security alerts',
      '📊 Notion Daily Log (9PM) — auto-documents everything',
    ],
    background: 'grid',
    accent: '#ff8c00',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    imageAlt: 'Robot representing always-on automation',
    layout: 'image-left',
  },

  // ── SECTION 4 — AZURE INTEGRATION ────────────────────────────
  {
    id: 'azure-backbone',
    title: 'Azure Is the Backbone',
    subtitle: 'Why Azure Is the Natural Home',
    bullets: [
      '☁️ Azure VM / Windows 365 — always-on compute for the agent',
      '🌐 Azure Static Web Apps — deploy apps in one command',
      '🔐 Azure AD / Entra ID — OAuth for Graph API, SSO, RBAC',
      '📊 Azure Monitor — observability for agent actions',
      '🧠 Azure OpenAI — model backend (GPT-4o, Claude via GitHub)',
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
    subtitle: 'What the Deployment Looks Like',
    bullets: [
      'Azure VM → OpenClaw Gateway (Node.js)',
      'Gateway → Channels: Telegram, Discord, WhatsApp, Web',
      'Gateway → Tools: exec, browser, file system, Graph API',
      'Gateway → Azure Services: ARM, CLI, Monitor, OpenAI',
      'Gateway → Sub-agents: Copilot CLI, Claude Code, custom skills',
      'All within your Azure subscription. Your data never leaves.',
    ],
    background: 'network',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'Network blueprint showing system architecture',
    layout: 'image-right',
  },
  {
    id: 'azure-skills',
    title: 'Real Azure Operations via Natural Language',
    subtitle: 'What You Can Actually Do',
    code: `# Actual commands Benji runs
az webapp list --output table
az monitor metrics list --resource $APP_ID
az cost management query --timeframe MonthToDate
az aks scale --node-count 5
az staticwebapp create --name my-app`,
    codeLanguage: 'bash',
    bullets: [
      'Cost analysis and optimization recommendations',
      'Resource management: scale, deploy, configure',
      'AKS cluster management and monitoring',
      'App Service + Functions deployment',
      'Security posture assessment via Defender',
    ],
    background: 'terminal',
    accent: '#00bcf2',
    layout: 'image-top',
  },
  {
    id: 'deploy-flow',
    title: 'From Conversation to Deployment',
    subtitle: 'The Full Pipeline',
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
    subtitle: 'Yes, Your AI Agent Has...',
    bullets: [
      '🖥️ Shell access — can execute any command',
      '📁 File system access — can read and write files',
      '🌐 Network access — can call APIs, browse the web',
      '💬 Messaging access — can send messages to anyone',
      'So what could possibly go wrong? ...Everything.',
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
    subtitle: 'Identity First, Scope Next, Model Last',
    bullets: [
      '🔐 IDENTITY: Who can talk to the bot? DM pairing, allowlists',
      '📋 SCOPE: What tools are allowed? Tool policies, exec approvals',
      '🧠 MODEL: Assume it CAN be manipulated — limit blast radius',
      'Sandboxing: exec runs in isolated containers',
      'Exec approvals: dangerous commands require human confirmation',
      'The model is the LAST line of defense, not the first',
    ],
    background: 'shield',
    accent: '#00cc6a',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    layout: 'image-right',
  },
  {
    id: 'control',
    title: 'What We Control vs. What We Don\'t',
    subtitle: 'Honest Assessment',
    bullets: [
      '✅ WE CONTROL: Channel access, tool permissions, exec approvals',
      '✅ WE CONTROL: Workspace isolation, network policies, audit logs',
      '✅ WE CONTROL: Model selection, token budgets, rate limits',
      '⚠️ WE DON\'T CONTROL: Model hallucinations (mitigate: validation)',
      '⚠️ WE DON\'T CONTROL: Prompt injection from forwarded content (mitigate: content boundaries)',
      '⚠️ WE DON\'T CONTROL: Novel attack vectors (mitigate: defense in depth, regular audits)',
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
      '5️⃣ Security is a design decision, not an afterthought',
    ],
    background: 'cosmos',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    imageAlt: 'Checklist and notepad for key takeaways',
    layout: 'image-right',
  },
  {
    id: 'key-message',
    title: 'The Key Message',
    subtitle: 'What I Want You to Walk Away With',
    bullets: [
      'The future of cloud operations is:',
      '🗣️ CONVERSATIONAL — talk to your infrastructure',
      '🤖 AUTONOMOUS — agents that work while you sleep',
      '🔄 ALWAYS-ON — 15 cron jobs running right now on my Azure VM',
      'Your AI agent should have the keys to your cloud.',
      'But YOU hold the master key. 🔑',
    ],
    background: 'galaxy',
    accent: '#50e6ff',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    imageAlt: 'Golden key symbolizing the key message',
    layout: 'image-left',
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
      '📝 This deck: github.com/raj-microsoft/ms-demo-deck-v2',
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
