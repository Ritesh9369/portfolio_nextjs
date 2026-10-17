"use client";

import type { CSSProperties, MouseEvent } from "react";
import type { IconType } from "react-icons";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLaptopCode,
  FaMobileScreenButton,
  FaPlug,
  FaScrewdriverWrench,
  FaServer,
} from "react-icons/fa6";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Technical_Expertise_Section.css";

type Tech = {
  name: string;
  Icon: IconType;
  color: string;
  sub?: string;
};

const ADAPTIVE = "var(--as-text)";

const frontend: Tech[] = [
  { name: "React", Icon: SiReact, color: "#08bdf4" },
  { name: "Next.js", Icon: SiNextdotjs, color: ADAPTIVE },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f0c814" },
  { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572b8" },
];

const backend: Tech[] = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express.js", Icon: SiExpress, color: ADAPTIVE },
  { name: "REST APIs", Icon: FaPlug, color: "#7c5cff" },
];

const database: Tech[] = [
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#1683b5",
    sub: "Relational data & queries",
  },
];

const mobile: Tech[] = [
  {
    name: "React Native",
    Icon: SiReact,
    color: "#08bdf4",
    sub: "Cross-platform apps",
  },
];

const workflow: Tech[] = [
  { name: "Git", Icon: FaGitAlt, color: "#f05133" },
  { name: "GitHub", Icon: FaGithub, color: ADAPTIVE },
  { name: "VS Code", Icon: FaCode, color: "#2f8dd9" },
];

const principles = [
  "Clean architecture",
  "Responsive UI",
  "Performance-minded",
];

const stats = [
  { value: "08", label: "Core technologies" },
  { value: "04", label: "Layers · UI, API, Data, Mobile" },
];

function TechTile({ tech, wide = false }: { tech: Tech; wide?: boolean }) {
  const { name, Icon, color, sub } = tech;

  return (
    <li
      className={`about-skills-tile${wide ? " about-skills-tile-wide" : ""}`}
      style={{ "--as-tile": color } as CSSProperties}
    >
      <span className="about-skills-tile-icon">
        <Icon aria-hidden="true" />
      </span>

      <span className="about-skills-tile-text">
        <strong>{name}</strong>
        {sub && <small>{sub}</small>}
      </span>
    </li>
  );
}

export default function Technical_Expertise_Section() {
  /* Spotlight: every card follows the mouse with a soft glow */
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const cards =
      event.currentTarget.querySelectorAll<HTMLElement>("[data-spot]");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--as-sx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--as-sy", `${event.clientY - rect.top}px`);
    });
  };

  return (
    <Section className="about-skills-section" container={false}>
      <Container className="about-skills-container">
        <div className="about-skills" id="about-skills">
          <div className="about-skills-grid-bg" aria-hidden="true" />
          <div
            className="about-skills-glow about-skills-glow-one"
            aria-hidden="true"
          />
          <div
            className="about-skills-glow about-skills-glow-two"
            aria-hidden="true"
          />

          {/* ============ INTRO ============ */}
          <header className="about-skills-head">
            <div className="about-skills-head-copy">
              <span className="about-skills-eyebrow">
                <span className="about-skills-eyebrow-dot" />
                TECHNICAL EXPERTISE
              </span>

              <h2 className="about-skills-title">
                The stack behind
                <span> everything I build.</span>
              </h2>

              <p className="about-skills-description">
                A focused toolkit for crafting responsive interfaces, reliable
                APIs and database-driven products &mdash; chosen for speed,
                clarity and the ability to scale.
              </p>
            </div>

            <ul className="about-skills-stats">
              {stats.map((stat) => (
                <li className="about-skills-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </header>

          {/* ============ BENTO ============ */}
          <div className="about-skills-bento" onMouseMove={handleMove}>
            <article
              className="about-skills-card about-skills-card-frontend"
              data-spot
            >
              <div className="about-skills-card-head">
                <span className="about-skills-card-icon">
                  <FaLaptopCode aria-hidden="true" />
                </span>
                <div>
                  <h3>Frontend</h3>
                  <p>Interfaces that feel fast and look sharp.</p>
                </div>
                <span className="about-skills-card-count">0{frontend.length}</span>
              </div>

              <ul className="about-skills-tiles about-skills-tiles-3">
                {frontend.map((tech) => (
                  <TechTile tech={tech} key={tech.name} />
                ))}
              </ul>
            </article>

            <article
              className="about-skills-card about-skills-card-backend"
              data-spot
            >
              <div className="about-skills-card-head">
                <span className="about-skills-card-icon">
                  <FaServer aria-hidden="true" />
                </span>
                <div>
                  <h3>Backend</h3>
                  <p>Clean, reliable APIs that power the product.</p>
                </div>
                <span className="about-skills-card-count">0{backend.length}</span>
              </div>

              <ul className="about-skills-tiles about-skills-tiles-3">
                {backend.map((tech) => (
                  <TechTile tech={tech} key={tech.name} />
                ))}
              </ul>
            </article>

            <article
              className="about-skills-card about-skills-card-database"
              data-spot
            >
              <div className="about-skills-card-head">
                <span className="about-skills-card-icon">
                  <FaDatabase aria-hidden="true" />
                </span>
                <div>
                  <h3>Database</h3>
                  <p>Structured, well-modelled data.</p>
                </div>
              </div>

              <ul className="about-skills-tiles about-skills-tiles-1">
                {database.map((tech) => (
                  <TechTile tech={tech} key={tech.name} wide />
                ))}
              </ul>
            </article>

            <article
              className="about-skills-card about-skills-card-mobile"
              data-spot
            >
              <div className="about-skills-card-head">
                <span className="about-skills-card-icon">
                  <FaMobileScreenButton aria-hidden="true" />
                </span>
                <div>
                  <h3>Mobile</h3>
                  <p>One codebase, native feel.</p>
                </div>
              </div>

              <ul className="about-skills-tiles about-skills-tiles-1">
                {mobile.map((tech) => (
                  <TechTile tech={tech} key={tech.name} wide />
                ))}
              </ul>
            </article>
          </div>

          {/* ============ WORKFLOW STRIP ============ */}
          <footer className="about-skills-strip">
            <span className="about-skills-strip-icon" aria-hidden="true">
              <FaScrewdriverWrench />
            </span>

            <p className="about-skills-strip-text">
              <strong>Daily workflow</strong>
              <span>Tools I build with</span>
            </p>

            <ul className="about-skills-strip-tools">
              {workflow.map(({ name, Icon, color }) => (
                <li
                  key={name}
                  style={{ "--as-tile": color } as CSSProperties}
                >
                  <Icon aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>

            <ul className="about-skills-strip-principles">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </footer>
        </div>
      </Container>
    </Section>
  );
}