import resumePdf from "../Mudassir_Farooqui.pdf";

/**
 * Single source of truth for all portfolio copy/links.
 * Every fact here is real content carried over from the previous version
 * of the site — nothing invented. Add real values (e.g. `meta.location`)
 * as they become available; UI only renders fields that are present.
 */
export const DATA = {
  meta: {
    firstName: "Mudassir",
    lastName: "Farooqui",
    role: "Software & Data Engineer",
    eyebrow: "Software · Data · AI",
    tagline:
      "Enterprise pipelines at DuPont. Intelligent LLM systems at ASU. Production-grade software that ships.",
    // Add a real city/region here to surface a location badge in the hero.
    location: "",
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
      { n: "2+", l: "Years at DuPont" },
      { n: "25", l: "Yrs Enterprise Data" },
      { n: "45K", l: "FDA Records Processed" },
      { n: "86.8%", l: "ML Model Accuracy" },
    ],
    paragraph:
      "Two years at DuPont engineering enterprise-grade data pipelines on Azure — standardizing 25 years of corporate data into governed lakehouses powering Power BI and Tableau at scale. Now at ASU completing an MS in Software Engineering, building AI systems that bridge large language models with real user behavior. I care about data quality, system reliability, and software that actually ships.",
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
      company: "DuPont",
      role: "Software Developer – Data Services",
      period: "Aug 2022 – Aug 2024",
      bullets: [
        "Engineered scalable enterprise data pipelines with Python, PySpark, SQL, Azure Data Factory, Databricks, and Delta Lake.",
        "Standardized access to 25 years of enterprise data via reusable ingestion, transformation, and data-modeling workflows for Power BI and Tableau.",
        "Improved platform reliability with pytest suites and Azure DevOps CI/CD catching schema, SQL, and data-quality regressions before production.",
        "Translated cross-functional business requirements into maintainable ETL/ELT components and production-ready datasets.",
      ],
    },
    {
      company: "DuPont",
      role: "Software Developer Intern – Data Analytics",
      period: "Jan 2022 – Jul 2022",
      bullets: [
        "Built self-service Power BI dashboards using DAX, Power Query/M, SQL, and Excel for business stakeholders.",
        "Refactored Power Query transformations and DAX measures across production reporting workflows to improve performance.",
        "Gathered requirements from analysts and delivered production-ready visualizations and semantic data models.",
        "Validated report outputs, source-to-target mappings, and refresh workflows for cross-functional consistency.",
      ],
    },
    {
      company: "Arizona State University",
      role: "MS Software Engineering · Currently enrolled",
      period: "Jan 2025 – Dec 2026",
      bullets: [],
      isEducation: true,
    },
  ],

  projects: [
    {
      name: "FocusFlow",
      sub: "LLM-Powered Agentic Nudging System",
      year: "2026",
      category: "AI / Full-Stack",
      period: "Spring 2026",
      stack: ["Next.js", "FastAPI", "Supabase", "GPT-4o-mini", "Python"],
      accent: "#4D9EFF",
      bullets: [
        "Two-stage AI architecture separating passive behavioral detection from LLM-based nudge generation using FastAPI and Next.js.",
        "Privacy-bounded 11-field JSON context contract with structured-output workflow to limit unnecessary data exposure.",
        "Validated in a 26-participant study: 56% user preference, 4.56/5 personalization score, 57.4% engagement rate.",
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
        "End-to-end ML pipeline on ~45,000 harmonized openFDA enforcement records across food, drug, and device domains.",
        "300-tree Random Forest achieving 86.8% accuracy, 0.741 macro-F1, and 0.937 precision for Class I recalls.",
        "Outperformed four logistic-regression baselines; validated three preregistered feature hypotheses.",
      ],
    },
  ],

  skills: {
    Languages: ["Python", "SQL", "PySpark", "JavaScript", "HTML/CSS", "DAX", "M Language"],
    Frameworks: [
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "OpenCV",
    ],
    "Data & Cloud": [
      "Azure Data Factory",
      "Databricks",
      "Delta Lake",
      "PostgreSQL",
      "MSSQL",
      "MongoDB",
      "Power BI",
      "Tableau",
      "Supabase",
    ],
    "DevOps & Tools": ["Git", "GitHub", "Azure DevOps", "CI/CD", "pytest", "REST APIs", "Agile"],
    "AI & ML": [
      "OpenAI API",
      "GPT-4o-mini",
      "Prompt Engineering",
      "LLM Evaluation",
      "Random Forest",
      "CNNs",
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
