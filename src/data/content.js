import resumePdf from "../Mudassir_Farooqui.pdf";

/**
 * Single source of truth for all portfolio copy/links.
 * Every fact here is real content sourced from Master_Resume.pdf —
 * nothing invented. Add real values (e.g. `meta.location`) as they
 * become available; UI only renders fields that are present.
 */
export const DATA = {
  meta: {
    firstName: "Mudassir",
    lastName: "Farooqui",
    role: "Software & Data Engineer",
    eyebrow: "Software · Data · AI",
    tagline:
      "Enterprise data pipelines at DuPont. LLM and computer-vision systems at ASU. Production-grade software that ships.",
    location: "Tempe, AZ",
    availability: "Available December 2026",
  },

  contact: {
    email: "danishfarooqui57@gmail.com",
    linkedin: "https://linkedin.com/in/mudassirfarooqui",
    github: "https://github.com/MrDanIce",
    resume: resumePdf,
  },

  about: {
    stats: [
      { n: "2", l: "Years at DuPont" },
      { n: "100+", l: "Data Products Shipped" },
      { n: "25", l: "Yrs Enterprise Data Unified" },
      { n: "86.8%", l: "ML Model Accuracy" },
      { n: "45K", l: "FDA Records Processed" },
    ],
    paragraph:
      "Two years at DuPont engineering enterprise-grade data pipelines on Azure — consolidating three enterprise systems into a governed Databricks lakehouse, processing billions of records daily across 100+ data products, and keeping data flowing through an $11B corporate divestiture without interruption. Now at ASU completing an MS in Software Engineering: leading infrastructure for a sponsored capstone building a computer-vision pipeline for a construction-tech startup, shipping LLM-powered systems, and running a self-hosted Kubernetes homelab on the side. I care about data quality, system reliability, and software that actually ships.",
  },

  // Large editorial "positioning statement" — the words are honest
  // characterizations grounded in the real work described in `about`
  // and `experience` (CI/CD + data-quality discipline → reliable;
  // enterprise-scale pipelines → scalable; validated ML methodology →
  // rigorous), not invented marketing claims.
  statement: {
    lead: "Focused on building software that is",
    words: ["Reliable", "Scalable", "Rigorous"],
  },

  experience: [
    {
      company: "Arizona State University — Enterprise Technology",
      role: "Deskside Support Assistant (Student Worker III)",
      period: "Jun 2025 – Present",
      bullets: [
        "Automated post-image provisioning with PowerShell and authored Group Policy Objects enforcing configuration and security standards across university-managed Windows devices.",
        "Deployed and maintained standardized images across Windows and macOS fleets via JAMF and SCCM, and administered Active Directory, Duo MFA enrollment, and Intune compliance policies.",
        "Serve as the senior student team member — onboarding and mentoring newer staff — while leading device imaging and onsite support for a new HIDA service-partnership client.",
        "Resolve hardware, software, and TCP/IP networking issues across a multi-platform environment, escalating only when issues exceed deskside-level scope.",
      ],
    },
    {
      company: "Arizona State University",
      role: "MS Software Engineering · Currently enrolled",
      period: "Jan 2025 – Dec 2026",
      bullets: [
        "Coursework spans software engineering, human-computer interaction, and machine learning, across algorithms, distributed systems, and database systems.",
      ],
      isEducation: true,
    },
    {
      company: "DuPont",
      role: "Software Engineer – Data Services",
      period: "Aug 2022 – Aug 2024",
      bullets: [
        "Consolidated 3 enterprise source systems (SAP BW, SAP HANA, MSSQL) into a single governed Azure data lake, unifying 25 years of enterprise records for cross-functional reporting.",
        "Engineered Python/PySpark pipelines on autoscaled Azure Databricks clusters, processing billions of records daily across 100+ data products in a Medallion-architected Delta Lake.",
        "Designed versioned SQL schemas and data contracts, and built automated pytest + Azure DevOps/GitHub Actions CI/CD suites that caught schema and data-quality regressions before production.",
        "Kept production data flowing without interruption throughout DuPont's ~$11B Mobility & Materials divestiture to Celanese, migrating and segregating enterprise data assets between the separating companies.",
        "Promoted one internal job level (L13 → L12) for increased scope; trained and onboarded 2 new hires over ~6 months.",
      ],
    },
    {
      company: "DuPont",
      role: "Power BI Developer Intern",
      period: "Jan 2022 – Jul 2022",
      bullets: [
        "Built self-service Power BI dashboards using DAX, Power Query/M, and T-SQL, surfacing operational KPIs across multiple business functions.",
        "Refactored DAX measures, semantic models, and Power Query transformations, reducing dashboard load times and eliminating calculation errors in production reports.",
        "Wrote and documented custom SQL queries in SSMS for ad-hoc stakeholder requests, prioritizing reproducibility.",
        "Regression-tested Power BI and SQL pipelines after every data update, validating source-to-target mappings before release.",
      ],
    },
    {
      company: "Jawaharlal Nehru Technological University",
      role: "B.Tech, Computer Science Engineering",
      period: "Jul 2018 – Jun 2022",
      bullets: [],
      isEducation: true,
    },
  ],

  projects: [
    {
      name: "MEP Drawing Intelligence",
      sub: "Computer Vision Pipeline for Construction Drawings",
      year: "2026",
      category: "Computer Vision / Capstone",
      period: "Fall 2026",
      stack: ["Python", "YOLO", "CVAT", "GitHub Actions", "Django", "React"],
      accent: "#FF9F4D",
      bullets: [
        "Leading infrastructure and DevOps for a 5-person SER 517 capstone sponsored by Auto BIM Route, building a YOLO-based computer-vision pipeline to extract MEP symbols from construction drawings.",
        "Set up the GitHub repo, branching strategy, and a GitHub Actions CI/CD pipeline running automated tests on every push and pull request.",
        "Secured GPU compute on ASU's Sol supercomputer for model training and led Sprint 0 requirements work, writing user stories and the initial product backlog.",
      ],
    },
    {
      name: "FocusFlow",
      sub: "LLM-Powered Agentic Nudging System",
      year: "2026",
      category: "AI / Full-Stack",
      period: "Spring 2026",
      stack: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI API", "GPT-4o-mini"],
      accent: "#4D9EFF",
      bullets: [
        "Co-authored a SER 594 capstone paper on a 4-person team; built the FastAPI backend and PostgreSQL data layer powering a browser-based agent that nudges users away from digital distraction.",
        "Owned the GPT-4o-mini integration end-to-end, including a fault-tolerant fallback to template-based nudges when the API call failed or timed out.",
        "Validated in a 26-participant study: 56% preferred AI-generated nudges, a 57.4% engagement rate, and a 4.56/5 personalization score.",
      ],
    },
    {
      name: "Homelab Observability Platform",
      sub: '"solomon" — Self-Hosted Infrastructure & Monitoring Stack',
      year: "2026",
      category: "DevOps / Infrastructure",
      period: "Jan 2026 – Present",
      stack: ["Docker", "k3s", "Tailscale", "Prometheus", "Grafana", "Caddy"],
      accent: "#A78BFA",
      bullets: [
        "Designed and operate a self-hosted homelab running 9 applications — Immich, Nextcloud, Paperless-ngx, and more — as independent Docker Compose projects with persistent storage.",
        "Built a zero-trust network overlay with Tailscale (MagicDNS, per-app sidecar identities) and layered Google OAuth in front of Immich via Caddy and oauth2-proxy.",
        "Introduced a parallel k3s cluster running Prometheus/Grafana monitoring with alert rules for disk, memory, pod, and VPN failures; diagnosed a live networking incident by isolating the fault layer-by-layer.",
      ],
    },
    {
      name: "Self-Hosted LLM Platform",
      sub: "Private, ChatGPT-Style Local AI Platform",
      year: "2025–26",
      category: "AI / Infrastructure",
      period: "Sept 2025 – Feb 2026",
      stack: ["Docker", "Ollama", "Open WebUI", "Cloudflare Tunnel"],
      accent: "#4DD9E8",
      bullets: [
        "Self-hosted multiple open-weight LLMs (Qwen, Gemma, DeepSeek, GPT-OSS) behind a containerized Open WebUI, giving a ChatGPT-style interface with zero third-party data exposure.",
        "Exposed the platform securely via a Cloudflare Tunnel reverse proxy, avoiding open inbound firewall ports.",
        "Currently extending the deployment toward Kubernetes-based orchestration as a learning exercise.",
      ],
    },
    {
      name: "FDA Recall Classifier",
      sub: "ML Severity Classification Pipeline",
      year: "2026",
      category: "Machine Learning",
      period: "Spring 2026",
      stack: ["Python", "scikit-learn", "pandas", "NumPy", "Random Forest", "openFDA API"],
      accent: "#00E5B4",
      bullets: [
        "End-to-end ML pipeline on ~45,000 harmonized openFDA enforcement records spanning food, drug, and device domains.",
        "Benchmarked a 300-tree Random Forest against five model configurations, achieving 86.8% accuracy, 0.741 macro-F1, and 0.937 precision on Class I recalls.",
        "Validated three preregistered feature hypotheses through single-feature and pairwise probability analysis.",
      ],
    },
    {
      name: "Sign Language Translator",
      sub: "Real-Time ASL Recognition with CNNs",
      year: "2022",
      category: "Computer Vision / Deep Learning",
      period: "2022",
      stack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      accent: "#FF6FA5",
      bullets: [
        "Designed and trained a custom 4-layer CNN on 87,000 labeled images across 29 American Sign Language gesture classes.",
        "Built an object-oriented preprocessing pipeline (224×224 resize, one-hot encoding, stratified 80/20 split) and tuned kernel size, pooling stride, and the Adam optimizer.",
        "Integrated the trained model into a real-time OpenCV inference loop with no perceptible lag across devices.",
      ],
    },
  ],

  skills: {
    Languages: ["Python", "SQL", "T-SQL", "PySpark", "JavaScript", "TypeScript", "PowerShell", "HTML/CSS", "DAX", "M Language"],
    Frameworks: [
      "FastAPI",
      "Django",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "OpenCV",
    ],
    "Data & Cloud": [
      "Azure Data Factory",
      "Databricks",
      "Delta Lake",
      "PostgreSQL",
      "MSSQL",
      "MongoDB",
      "Redis",
      "Power BI",
      "Tableau",
    ],
    "DevOps & Infra": [
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "CI/CD",
      "pytest",
      "Docker",
      "Kubernetes (k3s)",
      "Tailscale",
      "Prometheus",
      "Grafana",
      "REST APIs",
      "Agile",
    ],
    "AI & ML": [
      "OpenAI API",
      "GPT-4o-mini",
      "Prompt Engineering",
      "LLM Evaluation",
      "Random Forest",
      "CNNs",
      "YOLO",
      "CVAT",
      "Q-Learning",
    ],
  },
};

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
