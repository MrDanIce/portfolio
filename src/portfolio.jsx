import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import resumePdf from "./Mudassir_Farooqui.pdf";

/* ═══════════════════════════════════════════════ DATA ══ */
const DATA = {
  contact: {
    email: "danishfarooqui57@gmail.com",
    linkedin: "https://linkedin.com/in/mudassirfarooqui",
    github: "https://github.com/MrDanIce",
    resume: resumePdf,
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
  ],
  projects: [
    {
      name: "FocusFlow",
      sub: "LLM-Powered Agentic Nudging System",
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
    Frameworks: ["FastAPI", "React", "Next.js", "Node.js", "Express.js", "pandas", "NumPy", "scikit-learn", "TensorFlow", "OpenCV"],
    "Data & Cloud": ["Azure Data Factory", "Databricks", "Delta Lake", "PostgreSQL", "MSSQL", "MongoDB", "Power BI", "Tableau", "Supabase"],
    "DevOps & Tools": ["Git", "GitHub", "Azure DevOps", "CI/CD", "pytest", "REST APIs", "Agile"],
    "AI & ML": ["OpenAI API", "GPT-4o-mini", "Prompt Engineering", "LLM Evaluation", "Random Forest", "CNNs", "Q-Learning"],
  },
};

/* ═════════════════════════════════════ CANVAS PARTICLE HOOK ══ */
function useParticleCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const sync = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    sync();
    window.addEventListener("resize", sync);

    const count = Math.max(28, Math.floor((canvas.width * canvas.height) / 13000));
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.36,
      vy: (Math.random() - 0.5) * 0.36,
      p: Math.random() * Math.PI * 2,
      r: Math.random() * 0.8 + 1.2,
    }));

    const tick = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy; n.p += 0.016;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 170) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(77,158,255,${(1 - d / 170) * 0.22})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const g = (Math.sin(n.p) + 1) / 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + g * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77,158,255,${0.28 + g * 0.44})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", sync); };
  }, []);
}

/* ═══════════════════════════════════════════════ STYLES ══ */
const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #060E1D; color: #DDE8FF; font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #060E1D; }
  ::-webkit-scrollbar-thumb { background: #1B2E50; border-radius: 99px; }

  .pf-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 56px;
    background: rgba(6,14,29,0.8);
    backdrop-filter: blur(20px) saturate(160%);
    border-bottom: 1px solid rgba(27,46,80,0.5);
  }
  .pf-logo {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-weight: 700; font-size: 18px; letter-spacing: -0.5px;
    color: #4D9EFF; user-select: none;
  }
  .pf-nav ul { display: flex; gap: 32px; list-style: none; }
  .pf-nav-link {
    font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
    text-transform: uppercase; color: #40587A; cursor: pointer;
    transition: color .2s; user-select: none;
  }
  .pf-nav-link:hover, .pf-nav-link.is-active { color: #4D9EFF; }

  .pf-hero {
    position: relative; height: 100vh; min-height: 560px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; overflow: hidden;
  }
  .pf-canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
  .pf-hero::after {
    content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none;
    background: radial-gradient(ellipse 80% 75% at 50% 50%, transparent 20%, rgba(6,14,29,.72) 100%);
  }
  .pf-hero-body {
    position: relative; z-index: 2; text-align: center;
    max-width: 720px; padding: 0 24px;
  }
  .pf-eyebrow {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #00E5B4; margin-bottom: 28px; opacity: 0;
  }
  .pf-hero-name {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-size: clamp(52px, 9vw, 88px); font-weight: 700;
    line-height: 0.96; letter-spacing: -3.5px; margin-bottom: 22px; opacity: 0;
  }
  .pf-hero-name em { font-style: normal; color: #4D9EFF; }
  .pf-hero-role {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-size: clamp(16px, 2.4vw, 22px); font-weight: 300;
    color: #40587A; margin-bottom: 22px; opacity: 0;
  }
  .pf-hero-tag {
    font-size: 14px; color: #506070; line-height: 1.9;
    max-width: 460px; margin: 0 auto 40px; opacity: 0;
  }
  .pf-hero-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; opacity: 0; }
  .btn-p {
    padding: 13px 30px; background: #4D9EFF; color: #060E1D;
    border: none; border-radius: 8px; cursor: pointer;
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-weight: 600; font-size: 13px;
    transition: background .2s, transform .15s;
    text-decoration: none; display: inline-block;
  }
  .btn-p:hover { background: #68AEFF; transform: translateY(-2px); }
  .btn-g {
    padding: 13px 30px; background: transparent; color: #C0D4F0;
    border: 1px solid #1B2E50; border-radius: 8px; cursor: pointer;
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-weight: 500; font-size: 13px;
    transition: border-color .2s, color .2s, transform .15s;
    text-decoration: none; display: inline-block;
  }
  .btn-g:hover { border-color: #4D9EFF; color: #4D9EFF; transform: translateY(-2px); }
  .pf-scroll {
    position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); z-index: 2;
    display: flex; flex-direction: column; align-items: center; gap: 9px;
    color: #243650; font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
  }
  .pf-scroll-arr {
    width: 13px; height: 13px;
    border-right: 1.5px solid #243650; border-bottom: 1.5px solid #243650;
    transform: rotate(45deg); animation: pf-arr 1.9s ease-in-out infinite;
  }
  @keyframes pf-arr {
    0%,100% { transform: rotate(45deg) translate(0,0); }
    50% { transform: rotate(45deg) translate(3px,3px); }
  }

  .pf-sec { max-width: 1040px; margin: 0 auto; padding: 92px 48px; }
  .pf-sec-label {
    font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px;
    letter-spacing: 3.5px; text-transform: uppercase; color: #00E5B4; margin-bottom: 10px;
  }
  .pf-sec-h {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-size: clamp(28px, 4vw, 42px); font-weight: 700;
    letter-spacing: -1.5px; margin-bottom: 48px; line-height: 1.08;
  }
  .pf-reveal { opacity: 0; transform: translateY(26px); }

  .pf-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); gap: 14px; margin-bottom: 40px; }
  .pf-stat {
    background: #0A1728; border: 1px solid #172640; border-radius: 12px;
    padding: 26px 20px; text-align: center; transition: border-color .25s;
  }
  .pf-stat:hover { border-color: rgba(77,158,255,.4); }
  .pf-stat-n {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-size: 36px; font-weight: 700; color: #4D9EFF; line-height: 1; margin-bottom: 8px;
  }
  .pf-stat-l { font-size: 11px; color: #40587A; font-weight: 500; }
  .pf-about-p { font-size: 15px; color: #506070; line-height: 1.9; max-width: 600px; }

  .pf-tl { position: relative; padding-left: 44px; }
  .pf-tl-line {
    position: absolute; left: 18px; top: 10px; bottom: 0; width: 1px;
    background: linear-gradient(to bottom, #4D9EFF 0%, rgba(77,158,255,0) 100%);
  }
  .pf-tl-item { position: relative; margin-bottom: 44px; }
  .pf-tl-dot {
    position: absolute; left: -32px; top: 9px;
    width: 11px; height: 11px; border-radius: 50%;
    background: #4D9EFF; border: 2px solid #060E1D;
    box-shadow: 0 0 10px rgba(77,158,255,.55);
  }
  .pf-tl-period {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px; color: #00E5B4; margin-bottom: 6px;
  }
  .pf-tl-co {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-size: 20px; font-weight: 700; margin-bottom: 3px;
  }
  .pf-tl-role { font-size: 13px; color: #40587A; margin-bottom: 14px; }
  .pf-tl-ul { list-style: none; }
  .pf-tl-ul li {
    font-size: 13px; color: #506070; padding: 4px 0 4px 18px;
    position: relative; line-height: 1.68;
  }
  .pf-tl-ul li::before { content: '→'; position: absolute; left: 0; color: #4D9EFF; font-size: 11px; top: 5px; }

  .pf-pg { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px; }
  .pf-pc {
    background: #0A1728; border: 1px solid #172640; border-radius: 14px; padding: 30px;
    transition: border-color .25s, transform .2s;
  }
  .pf-pc:hover { border-color: #4D9EFF; transform: translateY(-4px); }
  .pf-pc-n {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-size: 20px; font-weight: 700; margin-bottom: 3px;
  }
  .pf-pc-s { font-size: 13px; color: #40587A; margin-bottom: 3px; }
  .pf-pc-p {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px; color: #00E5B4; margin-bottom: 16px;
  }
  .pf-pc-ul { list-style: none; margin-bottom: 18px; }
  .pf-pc-ul li {
    font-size: 13px; color: #506070; padding: 4px 0 4px 16px;
    position: relative; line-height: 1.68;
  }
  .pf-pc-ul li::before { content: '▸'; position: absolute; left: 0; color: #4D9EFF; font-size: 11px; top: 5px; }
  .pf-stack { display: flex; flex-wrap: wrap; gap: 6px; }
  .pf-stag {
    font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px;
    padding: 3px 9px; border-radius: 4px;
    background: rgba(77,158,255,.07); border: 1px solid rgba(77,158,255,.18); color: #4D9EFF;
  }

  .pf-sg { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 30px; }
  .pf-cat-l {
    font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px;
    letter-spacing: 2.5px; text-transform: uppercase; color: #00E5B4;
    margin-bottom: 12px; padding-bottom: 9px; border-bottom: 1px solid #172640;
  }
  .pf-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .pf-tag {
    font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px;
    padding: 5px 11px; border-radius: 6px;
    background: #0A1728; border: 1px solid #172640; color: #B0C4E0;
    opacity: 0; transform: scale(0.87); cursor: default;
    transition: border-color .2s, color .2s, background .2s;
  }
  .pf-tag:hover { border-color: #4D9EFF; color: #4D9EFF; background: rgba(77,158,255,.05); }

  .pf-cbox {
    background: linear-gradient(135deg, #0A1728 0%, #0C1E3C 100%);
    border: 1px solid #172640; border-radius: 16px; padding: 52px 48px; text-align: center;
  }
  .pf-cbox-h {
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
    font-size: clamp(26px, 4vw, 38px); font-weight: 700; letter-spacing: -1px; margin-bottom: 12px;
  }
  .pf-cbox-p { font-size: 14px; color: #40587A; line-height: 1.8; margin-bottom: 36px; }
  .pf-cls { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .pf-cl {
    display: flex; align-items: center; gap: 7px;
    padding: 11px 20px; background: #0C1E38; border: 1px solid #172640;
    border-radius: 8px; color: #B0C4E0; text-decoration: none;
    font-family: 'Space Grotesk', ui-sans-serif, sans-serif; font-weight: 500; font-size: 13px;
    transition: border-color .2s, color .2s, transform .15s;
  }
  .pf-cl:hover { border-color: #4D9EFF; color: #4D9EFF; transform: translateY(-2px); }

  .pf-div { height: 1px; margin: 0 48px; background: linear-gradient(to right, transparent, #172640, transparent); }
  .pf-foot {
    text-align: center; padding: 28px 24px;
    color: #243650; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 1px;
  }

  @media (max-width: 680px) {
    .pf-nav { padding: 14px 20px; }
    .pf-nav ul { gap: 20px; }
    .pf-nav-link { font-size: 10px; }
    .pf-sec { padding: 64px 20px; }
    .pf-pg { grid-template-columns: 1fr; }
    .pf-cbox { padding: 32px 20px; }
    .pf-div { margin: 0 20px; }
  }
  @media (max-width: 440px) { .pf-nav ul { display: none; } }
`;

/* ══════════════════════════════════════════ COMPONENTS ══ */

function Nav({ active }) {
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className="pf-nav">
      <div className="pf-logo">MF.</div>
      <ul>
        {["about", "experience", "projects", "skills", "contact"].map((id) => (
          <li key={id}>
            <span className={`pf-nav-link${active === id ? " is-active" : ""}`} onClick={() => goto(id)}>
              {id}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  const canvasRef = useRef(null);
  useParticleCanvas(canvasRef);
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    anime.timeline({ easing: "easeOutExpo" })
      .add({ targets: ".pf-eyebrow", opacity: [0, 1], translateY: [16, 0], duration: 700 }, 300)
      .add({ targets: ".pf-hero-name", opacity: [0, 1], translateY: [30, 0], duration: 860 }, "-=340")
      .add({ targets: ".pf-hero-role", opacity: [0, 1], translateY: [14, 0], duration: 700 }, "-=430")
      .add({ targets: ".pf-hero-tag", opacity: [0, 1], duration: 650 }, "-=340")
      .add({ targets: ".pf-hero-ctas", opacity: [0, 1], translateY: [12, 0], duration: 580 }, "-=290");
  }, []);

  return (
    <section className="pf-hero">
      <canvas ref={canvasRef} className="pf-canvas" />
      <div className="pf-hero-body">
        <p className="pf-eyebrow">Software · Data · AI</p>
        <h1 className="pf-hero-name">
          Mudassir<br /><em>Farooqui</em>
        </h1>
        <p className="pf-hero-role">Software & Data Engineer</p>
        <p className="pf-hero-tag">
          Enterprise pipelines at DuPont. Intelligent LLM systems at ASU.<br />
          Production-grade software that ships.
        </p>
        <div className="pf-hero-ctas">
          <span className="btn-p" onClick={() => goto("projects")}>View Projects</span>
          <a className="btn-g" href={`mailto:${DATA.contact.email}`}>Get in Touch</a>
        </div>
      </div>
      <div className="pf-scroll">scroll<div className="pf-scroll-arr" /></div>
    </section>
  );
}

function About() {
  const stats = [
    { n: "2+", l: "Years at DuPont" },
    { n: "25", l: "Yrs Enterprise Data" },
    { n: "45K", l: "FDA Records Processed" },
    { n: "86.8%", l: "ML Model Accuracy" },
  ];
  return (
    <section className="pf-sec" id="about">
      <div className="pf-reveal">
        <div className="pf-sec-label">About</div>
        <h2 className="pf-sec-h">Data engineer.<br />ML builder.</h2>
      </div>
      <div className="pf-stats">
        {stats.map((s, i) => (
          <div key={i} className="pf-stat pf-reveal">
            <div className="pf-stat-n">{s.n}</div>
            <div className="pf-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
      <p className="pf-about-p pf-reveal">
        Two years at DuPont engineering enterprise-grade data pipelines on Azure —
        standardizing 25 years of corporate data into governed lakehouses powering Power BI
        and Tableau at scale. Now at ASU completing an MS in Software Engineering, building AI
        systems that bridge large language models with real user behavior. I care about data
        quality, system reliability, and software that actually ships.
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section className="pf-sec" id="experience">
      <div className="pf-reveal">
        <div className="pf-sec-label">Experience</div>
        <h2 className="pf-sec-h">Where I've worked.</h2>
      </div>
      <div className="pf-tl">
        <div className="pf-tl-line" />
        {DATA.experience.map((e, i) => (
          <div key={i} className="pf-tl-item pf-reveal">
            <div className="pf-tl-dot" />
            <div className="pf-tl-period">{e.period}</div>
            <div className="pf-tl-co">{e.company}</div>
            <div className="pf-tl-role">{e.role}</div>
            <ul className="pf-tl-ul">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
        <div className="pf-tl-item pf-reveal">
          <div className="pf-tl-dot" style={{ background: "#00E5B4", boxShadow: "0 0 10px rgba(0,229,180,.5)" }} />
          <div className="pf-tl-period">Jan 2025 – Dec 2026</div>
          <div className="pf-tl-co" style={{ color: "#00E5B4" }}>Arizona State University</div>
          <div className="pf-tl-role">MS Software Engineering · Currently enrolled</div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="pf-sec" id="projects">
      <div className="pf-reveal">
        <div className="pf-sec-label">Projects</div>
        <h2 className="pf-sec-h">What I've built.</h2>
      </div>
      <div className="pf-pg">
        {DATA.projects.map((p, i) => (
          <div key={i} className="pf-pc pf-reveal">
            <div className="pf-pc-n" style={{ color: p.accent }}>{p.name}</div>
            <div className="pf-pc-s">{p.sub}</div>
            <div className="pf-pc-p">{p.period}</div>
            <ul className="pf-pc-ul">
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="pf-stack">
              {p.stack.map((t) => <span key={t} className="pf-stag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="pf-sec" id="skills">
      <div className="pf-reveal">
        <div className="pf-sec-label">Skills</div>
        <h2 className="pf-sec-h">The toolkit.</h2>
      </div>
      <div className="pf-sg">
        {Object.entries(DATA.skills).map(([cat, tags], i) => (
          <div key={i} className="pf-reveal">
            <div className="pf-cat-l">{cat}</div>
            <div className="pf-tags">
              {tags.map((t, j) => <span key={j} className="pf-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="pf-sec" id="contact">
      <div className="pf-cbox pf-reveal">
        <h2 className="pf-cbox-h">Let's build something.</h2>
        <p className="pf-cbox-p">
          Open to data engineering, ML engineering, and full-stack roles.<br />
          Available December 2026.
        </p>
        <div className="pf-cls">
          <a className="pf-cl" href={`mailto:${DATA.contact.email}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>
          <a className="pf-cl" href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a className="pf-cl" href={DATA.contact.github} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
          <a className="pf-cl" href={DATA.contact.resume} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ APP ══ */
export default function App() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;

          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [26, 0],
            duration: 700,
            easing: "easeOutExpo",
            complete() {
              const tags = el.querySelectorAll(".pf-tag");
              if (tags.length) {
                anime({
                  targets: tags,
                  opacity: [0, 1],
                  scale: [0.85, 1],
                  duration: 380,
                  delay: anime.stagger(38),
                  easing: "easeOutBack",
                });
              }
            },
          });

          io.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".pf-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ["about", "experience", "projects", "skills", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <Nav active={active} />
      <Hero />
      <div className="pf-div" />
      <About />
      <div className="pf-div" />
      <Experience />
      <div className="pf-div" />
      <Projects />
      <div className="pf-div" />
      <Skills />
      <div className="pf-div" />
      <Contact />
      <footer className="pf-foot">
        © 2026 Mudassir Farooqui · React + Anime.js
      </footer>
    </>
  );
}
