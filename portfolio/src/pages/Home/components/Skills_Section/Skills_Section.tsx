"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileScreenButton,
  FaLayerGroup,
} from "react-icons/fa6";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiExpress,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Skills_Section.css";

const skillGroups = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive web interfaces and modern user experiences.",
    Icon: FaLaptopCode,
    className: "skills-group-blue",
    skills: [
      { name: "React.js", Icon: SiReact, color: "skills-icon-react" },
      { name: "Next.js", Icon: SiNextdotjs, color: "skills-icon-next" },
      {
        name: "JavaScript",
        Icon: SiJavascript,
        color: "skills-icon-javascript",
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "skills-icon-typescript",
      },
    ],
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Development",
    description:
      "Building mobile applications with cross-platform development tools.",
    Icon: FaMobileScreenButton,
    className: "skills-group-purple",
    skills: [
      { name: "React Native", Icon: SiReact, color: "skills-icon-react" },
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend Development",
    description:
      "Developing server-side applications, APIs and backend logic.",
    Icon: FaServer,
    className: "skills-group-cyan",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "skills-icon-node" },
      { name: "Express.js", Icon: SiExpress, color: "skills-icon-express" },
    ],
  },
  {
    id: "database",
    number: "04",
    title: "Database Management",
    description:
      "Managing relational data for application features and services.",
    Icon: FaDatabase,
    className: "skills-group-green",
    skills: [{ name: "MySQL", Icon: SiMysql, color: "skills-icon-mysql" }],
  },
  {
    id: "tools",
    number: "05",
    title: "Development Tools",
    description: "Version control and project collaboration tools.",
    Icon: FaLayerGroup,
    className: "skills-group-purple",
    skills: [
      { name: "Git", Icon: SiGit, color: "skills-icon-git" },
      { name: "GitHub", Icon: SiGithub, color: "skills-icon-github" },
    ],
  },
];

const totalCategories = skillGroups.length;
const totalTechnologies = skillGroups.reduce(
  (sum, group) => sum + group.skills.length,
  0
);

const stats = [
  { value: String(totalCategories).padStart(2, "0"), label: "Skill Areas" },
  { value: String(totalTechnologies).padStart(2, "0"), label: "Technologies" },
  { value: "Web + Mobile", label: "Platforms" },
];

const delay = (index: number): CSSProperties =>
  ({ "--skills-delay": `${index * 90}ms` }) as CSSProperties;

export default function Skills_Section() {
  const anchorRef = useRef<HTMLDivElement | null>(null);

  // Scroll reveal animation
  useEffect(() => {
    const root = anchorRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".skills-reveal")
    );

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    root.classList.add("skills-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Mouse-follow spotlight on cards
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--skills-mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--skills-my", `${event.clientY - rect.top}px`);
  };

  return (
    <Section className="skills-section" container={false}>
      <Container className="skills-container">
        <div id="skills" className="skills-anchor" ref={anchorRef}>
          {/* Background glow orbs */}
          <span className="skills-orb skills-orb-one" aria-hidden="true" />
          <span className="skills-orb skills-orb-two" aria-hidden="true" />

          {/* Section heading */}
          <div className="skills-heading skills-reveal">
            <span className="skills-eyebrow">
              <span className="skills-eyebrow-line" />
              MY TECHNICAL TOOLKIT
              <span className="skills-eyebrow-line" />
            </span>

            <h2 className="skills-title">
              Skills that bring
              <br />
              <span>ideas to life.</span>
            </h2>

            <p className="skills-description">
              Technologies and tools I use to build modern web applications,
              mobile experiences and reliable digital products.
            </p>
          </div>

          {/* Quick stats */}
          <div className="skills-stats skills-reveal" style={delay(1)}>
            {stats.map(({ value, label }) => (
              <div className="skills-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Introduction panel */}
          <div
            className="skills-overview skills-reveal"
            style={delay(2)}
            onMouseMove={handleMouseMove}
          >
            <div className="skills-overview-icon">
              <FaCode size={24} aria-hidden="true" />
            </div>

            <div className="skills-overview-copy">
              <span className="skills-overview-label">
                DEVELOPMENT APPROACH
              </span>

              <h3>Designed thoughtfully. Built systematically.</h3>

              <p>
                From frontend interfaces to backend APIs and databases, I
                focus on maintainable code, responsive layouts and practical
                application development.
              </p>
            </div>

            <div className="skills-overview-badge">
              <span className="skills-status-dot" />
              <span>Always Learning</span>
            </div>
          </div>

          {/* Skills cards */}
          <div className="skills-grid">
            {skillGroups.map(
              (
                { id, number, title, description, Icon, className, skills },
                index
              ) => (
                <article
                  className={`skills-card skills-reveal ${className}`}
                  key={id}
                  style={delay(index % 2)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="skills-card-top">
                    <div className="skills-category-icon">
                      <Icon size={21} aria-hidden="true" />
                    </div>

                    <span className="skills-card-number">{number}</span>
                  </div>

                  <h3 className="skills-card-title">{title}</h3>

                  <p className="skills-card-description">{description}</p>

                  <div className="skills-card-divider" />

                  <div className="skills-items">
                    {skills.map(({ name, Icon: SkillIcon, color }) => (
                      <div className="skills-item" key={name}>
                        <SkillIcon
                          className={`skills-item-icon ${color}`}
                          size={20}
                          aria-hidden="true"
                        />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            )}
          </div>

          {/* Closing panel */}
          <div
            className="skills-bottom-note skills-reveal"
            onMouseMove={handleMouseMove}
          >
            <div className="skills-bottom-icon">
              <FaMobileScreenButton size={19} aria-hidden="true" />
            </div>

            <div className="skills-bottom-copy">
              <h3>Built for real-world experiences</h3>
              <p>
                Responsive interfaces, connected APIs and data-driven
                applications designed with usability in mind.
              </p>
            </div>

            <span className="skills-bottom-mark" aria-hidden="true">
              {"</>"}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}