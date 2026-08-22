// src/lib/products.ts
// Central product catalog. Drives the nav mega-menu, homepage grid, and each product page.

export interface ProductStat {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductUseCase {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  summary: string;
  heroDescription: string;
  accent: {
    text: string;      // tailwind text color class
    from: string;       // gradient from
    via?: string;        // gradient via
    to: string;          // gradient to
    ring: string;        // border/ring color
    glow: string;         // box shadow / glow color (rgba)
    chip: string;          // small badge bg/text classes
  };
  heroImageSeed: string;
  sectionImageSeed: string;
  stats: ProductStat[];
  features: ProductFeature[];
  useCases: ProductUseCase[];
  workflow: { title: string; description: string }[];
}

export const products: Product[] = [
  {
    slug: "field-force",
    name: "Field Force Management Suite",
    shortName: "Field Force",
    category: "Workforce Automation",
    tagline: "Command every person in the field, from one screen.",
    summary:
      "A multi-purpose field force application for tracking people, recording visits, assigning tasks, approving leaves, and auto-calculating TA/DA.",
    heroDescription:
      "Brixta Field Force replaces spreadsheets, phone calls, and paper attendance registers with a single live view of your on-ground team. Track real-time location, log client visits, assign and monitor tasks, route leave approvals, and let travel & dearness allowance calculate itself — accurately, every time.",
    accent: {
      text: "text-amber-400",
      from: "from-amber-500",
      via: "via-orange-500",
      to: "to-amber-600",
      ring: "border-amber-500/30",
      glow: "rgba(245,158,11,0.35)",
      chip: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    heroImageSeed: "brixta-fieldforce-hero",
    sectionImageSeed: "brixta-fieldforce-map",
    stats: [
      { value: "10K+", label: "Field agents trackable per instance" },
      { value: "99.5%", label: "TA/DA calculation accuracy" },
      { value: "< 5s", label: "Location ping refresh rate" },
    ],
    features: [
      {
        title: "Live Location Tracking",
        description:
          "See every field agent's position update in near real time on a live map, with geofenced zones for territories, warehouses, and client sites.",
      },
      {
        title: "Visit & Attendance Logging",
        description:
          "Agents check in and out of client visits with GPS and timestamp proof, building a verifiable activity trail for every stop of the day.",
      },
      {
        title: "Task Assignment & Tracking",
        description:
          "Managers assign tasks in bulk or individually, track completion status, and get flagged automatically when a task is at risk of slipping.",
      },
      {
        title: "Leave Approval Workflows",
        description:
          "Configurable multi-level approval chains route leave requests to the right manager instantly, with balances and history visible at a glance.",
      },
      {
        title: "Automated TA/DA Calculation",
        description:
          "Travel and dearness allowance is computed automatically from logged distance, city-tier rules, and company policy — no manual reimbursement math.",
      },
      {
        title: "Manager Dashboards & Reports",
        description:
          "Roll up attendance, visit counts, task velocity, and expense trends into exportable reports for regional and national teams.",
      },
    ],
    useCases: [
      {
        title: "Sales & Distribution Teams",
        description:
          "Track field sales reps across territories, verify retailer visits, and tie incentive payouts directly to logged activity.",
      },
      {
        title: "Service & Maintenance Crews",
        description:
          "Dispatch technicians to job sites, monitor SLA timers, and confirm work completion with photo and location proof.",
      },
      {
        title: "Collections & Field Audit",
        description:
          "Give collection agents a structured visit and task list while giving finance teams a tamper-proof log of every field interaction.",
      },
    ],
    workflow: [
      { title: "Onboard your team", description: "Import employees, set territories, and configure approval hierarchies in minutes." },
      { title: "Assign & track", description: "Push daily tasks and visit targets; watch progress update live through the day." },
      { title: "Auto-settle expenses", description: "TA/DA and reimbursements calculate themselves from verified travel data." },
    ],
  },
  {
    slug: "vector-embeddings",
    name: "Vector Embedding Infrastructure",
    shortName: "Vector Embeddings",
    category: "AI & Data Infrastructure",
    tagline: "Cost-reduced AI workflows, with full self-hosting control.",
    summary:
      "Production-grade vector embedding infrastructure for cost-reduced AI workflows, deployable on our cloud or entirely inside your own environment.",
    heroDescription:
      "Brixta's embedding infrastructure turns unstructured documents, logs, and records into production-ready vectors — without the inference bill of general-purpose AI platforms. Run it as a managed API, or deploy the full engine inside your own cloud boundary for zero data egress and predictable, lower cost at scale.",
    accent: {
      text: "text-cyan-400",
      from: "from-cyan-400",
      via: "via-blue-500",
      to: "to-indigo-500",
      ring: "border-cyan-500/30",
      glow: "rgba(34,211,238,0.35)",
      chip: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    heroImageSeed: "brixta-vector-hero",
    sectionImageSeed: "brixta-vector-cluster",
    stats: [
      { value: "< 12ms", label: "Median inference latency" },
      { value: "60%", label: "Avg. cost reduction vs. general AI APIs" },
      { value: "100%", label: "Data stays in-boundary when self-hosted" },
    ],
    features: [
      {
        title: "Self-Hosted Deployment",
        description:
          "Run the full embedding engine inside your own VPC or on-prem cluster via Docker — nothing leaves your infrastructure.",
      },
      {
        title: "Cost-Optimized Inference",
        description:
          "Purpose-built embedding models sized for the job, not general-purpose LLM pricing, so cost scales sub-linearly with volume.",
      },
      {
        title: "Model Routing",
        description:
          "Automatically route text, code, or document embeddings to the right specialized model without changing your integration.",
      },
      {
        title: "Semantic Search & Retrieval",
        description:
          "Query millions of vectors with sub-15ms response times to power search, recommendation, and RAG pipelines.",
      },
      {
        title: "Batch & Streaming Ingestion",
        description:
          "Bulk-embed historical archives or stream live documents as they're created, with automatic re-indexing on schema changes.",
      },
      {
        title: "Enterprise Access Controls",
        description:
          "Namespace isolation, role-based access, and full audit logging for every embedding and query operation.",
      },
    ],
    useCases: [
      {
        title: "Enterprise Knowledge Search",
        description:
          "Turn internal wikis, tickets, and reports into a semantic search layer employees can actually query in plain language.",
      },
      {
        title: "RAG for Customer Support",
        description:
          "Ground support and sales assistants in your own product and policy documents at a fraction of hosted-AI vector costs.",
      },
      {
        title: "Regulated & Air-Gapped Environments",
        description:
          "Deploy fully self-hosted for finance, healthcare, or government workloads where data cannot leave your network.",
      },
    ],
    workflow: [
      { title: "Connect your data", description: "Point Brixta at documents, databases, or APIs — structured or unstructured." },
      { title: "Embed & index", description: "Choose managed cloud or self-hosted deployment; vectors are generated and indexed automatically." },
      { title: "Query in production", description: "Plug semantic search or retrieval straight into your existing AI workflows." },
    ],
  },
  {
    slug: "research-simulator",
    name: "Industrial Research Simulator",
    shortName: "Research Simulator",
    category: "R&D & Materials Science",
    tagline: "Simulate new formulations before you ever fire a kiln.",
    summary:
      "A research simulation platform for industrial applications, helping design new formulations in cement, clay, and limestone-based production.",
    heroDescription:
      "Brixta's Research Simulator lets materials and process engineers model new cement, clay, and limestone-based formulations digitally before committing to costly physical trial batches. Adjust raw material ratios, kiln parameters, and additive blends, then simulate strength, setting time, and durability outcomes to shortlist only the formulations worth testing on the floor.",
    accent: {
      text: "text-orange-400",
      from: "from-orange-500",
      via: "via-amber-700",
      to: "to-stone-500",
      ring: "border-orange-500/30",
      glow: "rgba(251,146,60,0.3)",
      chip: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    heroImageSeed: "brixta-research-hero",
    sectionImageSeed: "brixta-research-lab",
    stats: [
      { value: "70%", label: "Fewer physical trial batches needed" },
      { value: "1000s", label: "Formulation variants simulated per run" },
      { value: "Days", label: "Not months, from idea to shortlist" },
    ],
    features: [
      {
        title: "Formulation Modeling",
        description:
          "Model raw material blends — clinker, clay, limestone, additives — and simulate resulting chemical and physical properties.",
      },
      {
        title: "Process Parameter Simulation",
        description:
          "Vary kiln temperature curves, grinding fineness, and curing conditions to see predicted impact before a physical run.",
      },
      {
        title: "Strength & Durability Prediction",
        description:
          "Get modeled estimates for compressive strength, setting time, and long-term durability across formulation variants.",
      },
      {
        title: "Batch Comparison Engine",
        description:
          "Run thousands of formulation permutations in parallel and rank them against your target specification automatically.",
      },
      {
        title: "Cost & Emissions Modeling",
        description:
          "Layer raw material cost and estimated emissions onto every simulated formulation to optimize for sustainability, not just performance.",
      },
      {
        title: "Lab-Ready Export",
        description:
          "Export shortlisted formulations directly into lab trial sheets, cutting the gap between simulation and the physical lab.",
      },
    ],
    useCases: [
      {
        title: "Cement Manufacturers",
        description:
          "Explore blended cement formulations with alternative clinker ratios to hit strength targets while reducing raw material cost.",
      },
      {
        title: "Clay & Ceramics Producers",
        description:
          "Test new clay body compositions for firing behavior and shrinkage before running kiln trials.",
      },
      {
        title: "Limestone-Based Product Lines",
        description:
          "Model limestone-based additive and filler formulations for new product lines ahead of physical production runs.",
      },
    ],
    workflow: [
      { title: "Define your baseline", description: "Input your current formulation and target specification as the simulation baseline." },
      { title: "Simulate variants", description: "Let the engine explore ratio and process-parameter variants against your targets." },
      { title: "Shortlist for the lab", description: "Export the top-ranked formulations straight into physical trial workflows." },
    ],
  },
  {
    slug: "geo-mapping",
    name: "Satellite Geo-Mapping Platform",
    shortName: "Geo-Mapping",
    category: "Geospatial Intelligence",
    tagline: "See the ground change before anyone else does.",
    summary:
      "A satellite-based geo-mapping platform that detects terrain changes to surface new constructions, mining activity, and population growth or de-growth.",
    heroDescription:
      "Brixta's Geo-Mapping platform continuously analyzes satellite imagery over time to detect meaningful terrain change — new construction, expanding or idle mining sites, and shifting settlement density — turning raw orbital imagery into a change feed your team can act on, without a single field visit.",
    accent: {
      text: "text-violet-400",
      from: "from-violet-500",
      via: "via-indigo-500",
      to: "to-blue-600",
      ring: "border-violet-500/30",
      glow: "rgba(167,139,250,0.35)",
      chip: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    },
    heroImageSeed: "brixta-geo-hero",
    sectionImageSeed: "brixta-geo-terrain",
    stats: [
      { value: "Global", label: "Satellite imagery coverage" },
      { value: "Weekly", label: "Change-detection refresh cycles" },
      { value: "3", label: "Change categories: build, mine, population" },
    ],
    features: [
      {
        title: "Automated Change Detection",
        description:
          "Compare successive satellite passes over any region and automatically flag statistically significant terrain change.",
      },
      {
        title: "New Construction Alerts",
        description:
          "Identify newly built structures and developments as they appear, before they show up in public records.",
      },
      {
        title: "Mining Activity Monitoring",
        description:
          "Track expansion, contraction, or dormancy of mining sites over time to support compliance and competitive intelligence.",
      },
      {
        title: "Population Density Trends",
        description:
          "Estimate settlement growth or de-growth from built-up area and structural density changes across time-series imagery.",
      },
      {
        title: "Custom Region Monitoring",
        description:
          "Draw any area of interest — a city, a district, a single site — and get change reports scoped exactly to that boundary.",
      },
      {
        title: "Exportable Change Reports",
        description:
          "Generate shareable, time-stamped change reports with imagery overlays for planning, compliance, or investment teams.",
      },
    ],
    useCases: [
      {
        title: "Urban & Infrastructure Planning",
        description:
          "Detect unplanned or unpermitted construction activity across a region without relying on manual site surveys.",
      },
      {
        title: "Mining & Natural Resources",
        description:
          "Monitor the footprint of your own or competitor mining operations across quarters without on-site access.",
      },
      {
        title: "Investment & Market Research",
        description:
          "Use population and construction growth signals as a leading indicator for regional economic activity.",
      },
    ],
    workflow: [
      { title: "Define your area", description: "Draw a region of interest — from a single site to an entire province." },
      { title: "Run change detection", description: "The platform compares historical and current satellite passes automatically." },
      { title: "Act on the change feed", description: "Receive scored, categorized change alerts as new imagery comes in." },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
