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
  {
    id: 'title',
    title: 'OpenClaw + Azure',
    subtitle: 'Your AI Copilot for Cloud Operations',
    bullets: [
      'Microsoft Netherlands TechFest 2026',
      'Rajkumar Balakrishnan',
      'AI-Powered Cloud Operations at Scale',
    ],
    background: 'cosmos',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'Futuristic blue digital globe with glowing network connections',
    layout: 'image-full',
  },
  {
    id: 'cloud-complexity',
    title: 'The Cloud Complexity Problem',
    subtitle: 'Why Traditional Approaches Are Breaking Down',
    bullets: [
      '73% of enterprises manage 3+ cloud environments simultaneously',
      'Average incident resolution: 4+ hours with manual runbooks',
      'Cloud spend waste exceeds $100B annually across industries',
      'Security misconfigurations cause 65% of cloud breaches',
      'Teams drowning in alerts, dashboards, and repetitive tasks',
    ],
    background: 'chaos',
    accent: '#ff4444',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    imageAlt: 'Dense server room with tangled cables and blinking lights',
    layout: 'image-right',
  },
  {
    id: 'ai-vision',
    title: 'The AI Assistant Vision',
    subtitle: 'From Reactive Operations to Proactive Intelligence',
    bullets: [
      'Natural language interface to your entire cloud estate',
      'Autonomous agents that understand context and intent',
      'Proactive issue detection before users are impacted',
      'Self-healing infrastructure with human-in-the-loop approval',
      'Knowledge that grows with your organization',
    ],
    background: 'galaxy',
    accent: '#50e6ff',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    imageAlt: 'Glowing neural network visualization with AI brain concept',
    layout: 'image-left',
  },
  {
    id: 'openclaw-intro',
    title: 'Introducing OpenClaw',
    subtitle: 'The Open-Source AI Agent Platform for Cloud Operations',
    bullets: [
      'Built on Azure OpenAI with multi-model orchestration',
      'Extensible skill-based architecture for any cloud task',
      'Enterprise-grade security with Azure AD integration',
      'Open-source core with commercial enterprise features',
      'Active community: 2,500+ contributors across 40 countries',
    ],
    background: 'particles',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    imageAlt: 'Diverse team of developers collaborating on open source project',
    layout: 'image-right',
  },
  {
    id: 'architecture',
    title: 'Architecture Overview',
    subtitle: 'How OpenClaw Thinks, Plans, and Acts',
    bullets: [
      'Orchestrator: GPT-4o routing layer with intent classification',
      'Agent Pool: Specialized agents for infra, security, cost, DevOps',
      'Skill Engine: Pluggable skill modules with typed schemas',
      'Memory Layer: Vector DB (Azure AI Search) for context retention',
      'Guardrails: Policy engine with approval workflows',
    ],
    background: 'network',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    imageAlt: 'Close-up of a circuit board with glowing traces and microchips',
    layout: 'image-left',
  },
  {
    id: 'healthcare-demo',
    title: 'Demo: Healthcare Portal Deployment',
    subtitle: 'From Concept to Production in Minutes',
    bullets: [
      '"Deploy a HIPAA-compliant patient portal on Azure"',
      'Agent selects: App Service + SQL + Key Vault + Front Door',
      'Auto-configures encryption, WAF rules, diagnostic logging',
      'Generates Bicep templates with compliance annotations',
      'Total time: 3 minutes vs. 3 days manual setup',
    ],
    background: 'dna',
    accent: '#00cc6a',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Modern medical technology with digital health interface',
    layout: 'image-right',
  },
  {
    id: 'chat-to-deploy',
    title: 'Chat-to-Deployment Flow',
    subtitle: 'Natural Language → Infrastructure as Code → Production',
    bullets: [
      'Step 1: User describes desired outcome in plain English',
      'Step 2: Planning agent decomposes into atomic tasks',
      'Step 3: Specialist agents generate IaC and configs',
      'Step 4: Review agent validates security and compliance',
      'Step 5: Deploy agent executes with rollback capability',
    ],
    background: 'flow',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    imageAlt: 'Developer typing code on a laptop with terminal visible',
    layout: 'image-left',
  },
  {
    id: 'incident-response',
    title: 'Demo: Incident Response',
    subtitle: 'AI-Powered Mean Time to Resolution',
    bullets: [
      'Alert detected: API latency spike > 500ms in production',
      'Agent auto-correlates: App Insights + Log Analytics + metrics',
      'Root cause identified: Memory leak in microservice v2.3.1',
      'Remediation: Auto-scales pods, triggers hotfix deployment',
      'MTTR reduced from 4 hours to 8 minutes',
    ],
    background: 'pulse',
    accent: '#ff8c00',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Data monitoring dashboard with charts and alert indicators',
    layout: 'image-right',
  },
  {
    id: 'finops-demo',
    title: 'Demo: FinOps Intelligence',
    subtitle: 'AI-Driven Cloud Cost Optimization',
    bullets: [
      '"Analyze our Azure spend and find optimization opportunities"',
      'Identifies $47K/month in idle resources across 12 subscriptions',
      'Recommends Reserved Instance purchases saving 38%',
      'Detects anomalous spending patterns in real-time',
      'Automated rightsizing with workload-aware scheduling',
    ],
    background: 'coins',
    accent: '#ffd700',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    imageAlt: 'Financial analytics dashboard with charts and data visualization',
    layout: 'image-left',
  },
  {
    id: 'manufacturing-iot',
    title: 'Demo: Manufacturing IoT',
    subtitle: 'Edge-to-Cloud Intelligence for Industry 4.0',
    bullets: [
      'Manages 10,000+ IoT Edge devices across factory floors',
      'Predictive maintenance: 94% accuracy on equipment failures',
      'Auto-provisions IoT Hub, Stream Analytics, Digital Twins',
      'Real-time anomaly detection with Azure Synapse integration',
      'Natural language queries: "Show me all failing sensors in Plant 3"',
    ],
    background: 'grid',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
    imageAlt: 'Robotic arms on a modern factory assembly line',
    layout: 'image-right',
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Architecture',
    subtitle: 'Specialized Agents Working in Concert',
    bullets: [
      'Infrastructure Agent: Terraform, Bicep, ARM template generation',
      'Security Agent: Defender integration, threat analysis, compliance',
      'Cost Agent: Advisor integration, budget alerts, optimization',
      'DevOps Agent: Pipeline management, release orchestration',
      'Monitoring Agent: Proactive health checks and auto-remediation',
    ],
    background: 'orbits',
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    imageAlt: 'Network of interconnected glowing nodes representing multi-agent system',
    layout: 'image-left',
  },
  {
    id: 'security',
    title: 'Security & Governance',
    subtitle: 'Enterprise-Grade Trust and Compliance',
    bullets: [
      'Azure AD / Entra ID integration with RBAC at every level',
      'All actions logged with immutable audit trail',
      'Human-in-the-loop approval for destructive operations',
      'Data residency controls: EU, US, APAC sovereign regions',
      'SOC 2 Type II, ISO 27001, HIPAA compliance ready',
    ],
    background: 'shield',
    accent: '#00cc6a',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    imageAlt: 'Digital cybersecurity shield with lock and encrypted data',
    layout: 'image-right',
  },
  {
    id: 'clawhub',
    title: 'ClawHub: Skills Marketplace',
    subtitle: 'Extend OpenClaw with Community-Built Skills',
    bullets: [
      '500+ pre-built skills for common cloud operations',
      'Publish and share custom skills with your organization',
      'Verified publisher program for enterprise trust',
      'Semantic versioning with automatic dependency resolution',
      'One-click install: "openclaw skill install azure-k8s-manager"',
    ],
    background: 'hexgrid',
    accent: '#e040fb',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    imageAlt: 'Digital marketplace interface with colorful app icons',
    layout: 'image-left',
  },
  {
    id: 'bicep-example',
    title: 'Generated Bicep Code',
    subtitle: 'AI-Generated Infrastructure as Code',
    code: `// OpenClaw auto-generated Bicep
// Patient Portal - HIPAA Compliant

resource appService 'Microsoft.Web/sites@2023-01-01' = {
  name: 'patient-portal-\${env}'
  location: resourceGroup().location
  properties: {
    httpsOnly: true
    siteConfig: {
      minTlsVersion: '1.2'
      ftpsState: 'Disabled'
      alwaysOn: true
    }
  }
}

resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: 'kv-portal-\${env}'
  properties: {
    enablePurgeProtection: true
    enableSoftDelete: true
    networkAcls: { defaultAction: 'Deny' }
  }
}`,
    codeLanguage: 'bicep',
    bullets: [
      'Compliance annotations auto-injected',
      'Security best practices enforced by default',
      'Environment-aware parameterization',
    ],
    background: 'matrix',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    imageAlt: 'Lines of code on a dark screen with syntax highlighting',
    layout: 'image-top',
  },
  {
    id: 'cli-example',
    title: 'Azure CLI Integration',
    subtitle: 'Seamless Developer Experience',
    code: `# Install OpenClaw CLI
az extension add --name openclaw

# Chat with your cloud
az openclaw chat "Scale my AKS cluster to handle
  Black Friday traffic"

# Run a skill directly
az openclaw run cost-optimizer \\
  --subscription prod-sub-01 \\
  --output report

# Deploy from natural language
az openclaw deploy "Create a Redis cache with
  geo-replication across West Europe and North Europe"`,
    codeLanguage: 'bash',
    bullets: [
      'Native Azure CLI extension for seamless workflow',
      'Works in Cloud Shell, VS Code terminal, and CI/CD pipelines',
      'Full IntelliSense support in VS Code',
    ],
    background: 'terminal',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
    imageAlt: 'Terminal window with command line interface on dark background',
    layout: 'image-top',
  },
  {
    id: 'deployment-flow',
    title: 'Deployment Pipeline',
    subtitle: 'From Chat to Production with Confidence',
    bullets: [
      'Intent Analysis → Risk Assessment → Plan Generation',
      'Automated testing: Unit, integration, compliance scans',
      'Progressive rollout: Canary → Staging → Production',
      'Automatic rollback on health check failures',
      'Full deployment telemetry in Azure Monitor',
    ],
    background: 'pipeline',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80',
    imageAlt: 'Rocket launching into sky representing deployment pipeline',
    layout: 'image-right',
  },
  {
    id: 'developer-productivity',
    title: 'Developer Productivity',
    subtitle: 'Accelerate Your Inner Loop and Outer Loop',
    bullets: [
      'VS Code extension with inline cloud suggestions',
      'GitHub Copilot integration for IaC generation',
      'Automated PR reviews for infrastructure changes',
      '"What-if" analysis before any deployment',
      'Teams report 60% reduction in cloud operations overhead',
    ],
    background: 'cubes',
    accent: '#50e6ff',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    imageAlt: 'Developer working at a modern desk with multiple monitors',
    layout: 'image-left',
  },
  {
    id: 'integrations',
    title: 'Integration Ecosystem',
    subtitle: 'Works With Your Existing Tools',
    bullets: [
      'Azure DevOps & GitHub Actions pipeline integration',
      'ServiceNow, Jira, PagerDuty ticket automation',
      'Terraform, Pulumi, Bicep, ARM template support',
      'Slack, Teams, Discord notification channels',
      'Datadog, Grafana, Prometheus metrics federation',
    ],
    background: 'connections',
    accent: '#00bcf2',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    imageAlt: 'Colorful puzzle pieces connecting together representing integrations',
    layout: 'image-right',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Readiness',
    subtitle: 'Built for the Scale You Need',
    bullets: [
      'Multi-tenant architecture with subscription isolation',
      'Private endpoint support for zero-trust networks',
      'Custom model fine-tuning on your organization\'s data',
      'SLA: 99.95% uptime with geo-redundant deployment',
      'Dedicated support with Azure Unified commitment',
    ],
    background: 'fortress',
    accent: '#0078d4',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    imageAlt: 'Modern corporate glass skyscraper reflecting the sky',
    layout: 'image-left',
  },
  {
    id: 'meta-demo',
    title: 'Meta-Demo: Self-Hosting',
    subtitle: 'OpenClaw Deploys Itself on Azure',
    bullets: [
      '"Deploy OpenClaw to our Azure subscription with HA"',
      'Agent provisions: AKS + Azure OpenAI + Cosmos DB + Redis',
      'Configures monitoring, alerting, and auto-scaling',
      'Sets up CI/CD pipeline for future upgrades',
      'Total deployment time: Under 10 minutes, fully operational',
    ],
    background: 'inception',
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80',
    imageAlt: 'Abstract recursive spiral pattern representing inception and self-reference',
    layout: 'image-full',
  },
  {
    id: 'startup-accelerator',
    title: 'Startup Accelerator',
    subtitle: 'From Zero to Cloud-Native in Hours',
    bullets: [
      '"I need a SaaS platform for my fintech startup"',
      'OpenClaw generates: Landing zone + microservices + CI/CD',
      'Includes: Auth, payments, monitoring, and cost guardrails',
      'Pre-configured for SOC 2 compliance from day one',
      'Azure credits program for qualified startups',
    ],
    background: 'rocket',
    accent: '#ff8c00',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&q=80',
    imageAlt: 'Modern startup office with collaborative workspace and whiteboards',
    layout: 'image-right',
  },
  {
    id: 'roadmap',
    title: 'Roadmap & Vision',
    subtitle: 'What\'s Coming in 2026 and Beyond',
    bullets: [
      'Q2 2026: Multi-cloud support (AWS, GCP orchestration)',
      'Q3 2026: Autonomous SRE with predictive healing',
      'Q4 2026: Natural language compliance auditing',
      '2027: Full autonomous operations with human oversight',
      'Community-driven feature prioritization via GitHub Discussions',
    ],
    background: 'timeline',
    accent: '#50e6ff',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    imageAlt: 'Winding road stretching into a misty horizon at sunrise',
    layout: 'image-full',
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    subtitle: 'Deploy Your First Agent in 5 Minutes',
    code: `# Quick start with Azure Cloud Shell
curl -sL https://aka.ms/openclaw-install | bash

# Initialize with your Azure subscription
openclaw init --provider azure

# Start chatting with your cloud
openclaw chat

> "Show me all resources in my subscription
   that haven't been used in 30 days"

# 🎉 You're ready to go!`,
    codeLanguage: 'bash',
    bullets: [
      'Free tier: 1,000 agent actions per month',
      'Enterprise trial: 30 days full access, no credit card',
      'Comprehensive docs at docs.openclaw.dev',
    ],
    background: 'launchpad',
    accent: '#00cc6a',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    imageAlt: 'Team onboarding with laptops on a bright modern desk',
    layout: 'image-top',
  },
  {
    id: 'community',
    title: 'Join the Community',
    subtitle: 'Open Source. Open Community. Open Future.',
    bullets: [
      'GitHub: github.com/openclaw — Star ⭐ and contribute',
      'Discord: 8,000+ members sharing skills and best practices',
      'Monthly community calls with live demos and roadmap updates',
      'Microsoft Partner Network integration program',
      'Annual OpenClaw Summit — Amsterdam 2026',
    ],
    background: 'wave',
    accent: '#e040fb',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    imageAlt: 'Diverse group of people at a tech community conference event',
    layout: 'image-right',
  },
  {
    id: 'qa',
    title: 'Thank You! Q&A',
    subtitle: 'Let\'s Build the Future of Cloud Operations Together',
    bullets: [
      '📧 rajkumarb@outlook.com',
      '🔗 github.com/openclaw',
      '📖 docs.openclaw.dev',
      '💬 discord.gg/openclaw',
      '🐦 @OpenClawAI',
    ],
    background: 'cosmos',
    accent: '#0078d4',
    note: 'Rajkumar Balakrishnan — Microsoft Netherlands TechFest 2026',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    imageAlt: 'Microphone on stage with blurred audience in background',
    layout: 'image-full',
  },
]
