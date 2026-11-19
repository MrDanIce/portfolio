import "./styles/nav.css";
import "./styles/cursor.css";
import "./styles/hero.css";
import "./styles/statement.css";
import "./styles/about.css";
import "./styles/work.css";
import "./styles/skills.css";
import "./styles/contact.css";
import "./styles/project.css";

import { Route, Routes, useLocation } from "react-router";
import { SECTIONS } from "./data/content";
import { useActiveSection } from "./hooks/useActiveSection";
import { useScrollOnNavigate } from "./hooks/useScrollOnNavigate";
import { useTheme } from "./hooks/useTheme";
import { Nav } from "./components/Nav";
import { Cursor } from "./components/Cursor";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Statement } from "./components/Statement";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectPage } from "./components/ProjectPage";

const SECTION_IDS = SECTIONS.map((s) => s.id);

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Statement />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  // Section highlighting only means something on the one-page home view.
  const active = useActiveSection(SECTION_IDS, isHome);
  useScrollOnNavigate();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Cursor />
      <Nav active={isHome ? active : ""} isHome={isHome} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
