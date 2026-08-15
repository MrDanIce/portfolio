import "./styles/nav.css";
import "./styles/cursor.css";
import "./styles/hero.css";
import "./styles/statement.css";
import "./styles/about.css";
import "./styles/work.css";
import "./styles/skills.css";
import "./styles/contact.css";

import { SECTIONS } from "./data/content";
import { useActiveSection } from "./hooks/useActiveSection";
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

const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Cursor />
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Statement />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
