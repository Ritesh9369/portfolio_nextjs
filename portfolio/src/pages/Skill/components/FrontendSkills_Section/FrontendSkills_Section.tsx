
"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

import {
  FaLaptopCode,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa6";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./FrontendSkills_Section.css";

const skills = [
  {
    name: "React.js",
    description: "Reusable components and interactive interfaces.",
    Icon: SiReact,
    color: "fs-icon-react",
    category: "Frontend Framework",
  },
  {
    name: "Next.js",
    description: "Modern React applications and routing.",
    Icon: SiNextdotjs,
    color: "fs-icon-next",
    category: "React Framework",
  },
  {
    name: "JavaScript",
    description: "Dynamic functionality and application logic.",
    Icon: SiJavascript,
    color: "fs-icon-js",
    category: "Programming Language",
  },
  {
    name: "TypeScript",
    description: "Type-safe and maintainable application code.",
    Icon: SiTypescript,
    color: "fs-icon-ts",
    category: "Programming Language",
  },
  {
    name: "HTML5",
    description: "Semantic structure and accessible markup.",
    Icon: SiHtml5,
    color: "fs-icon-html",
    category: "Core Technology",
  },
  {
    name: "CSS3",
    description: "Responsive layouts, styling and animations.",
    Icon: SiCss,
    color: "fs-icon-css",
    category: "Core Technology",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first responsive interface styling.",
    Icon: SiTailwindcss,
    color: "fs-icon-tailwind",
    category: "CSS Framework",
  },
  {
    name: "Vite",
    description: "Fast development server and build tooling.",
    Icon: SiVite,
    color: "fs-icon-vite",
    category: "Development Tool",
  },
];

const revealDelay = (index: number): CSSProperties =>
  ({
    "--fs-delay": `${index * 65}ms`,
  }) as CSSProperties;

export default function FrontendSkills_Section() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".fs-reveal")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      items.forEach((item) => item.classList.add("fs-visible"));
      return;
    }

    root.classList.add("fs-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fs-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    element.style.setProperty(
      "--fs-mx",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--fs-my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Section className="frontend-skills-section" container={false}>
      <Container className="frontend-skills-container">
        <div
          id="frontend-skills"
          className="fs-anchor"
          ref={sectionRef}
        >
          <span className="fs-orb fs-orb-one" aria-hidden="true" />
          <span className="fs-orb fs-orb-two" aria-hidden="true" />

          <header className="fs-heading fs-reveal">
            <span className="fs-eyebrow">
              <span className="fs-eyebrow-line" />
              MY TECHNICAL TOOLKIT
              <span className="fs-eyebrow-line" />
            </span>

            <h2 className="fs-title">
              Frontend
              <br />
              <span>Development.</span>
            </h2>

            <p className="fs-description">
              Creating responsive, accessible and engaging digital
              experiences with modern frontend technologies.
            </p>
          </header>

          <div
            className="fs-overview fs-reveal"
            style={revealDelay(1)}
            onMouseMove={handleMouseMove}
          >
            <div className="fs-overview-icon">
              <FaLaptopCode aria-hidden="true" />
            </div>

            <div className="fs-overview-copy">
              <span className="fs-overview-label">
                FRONTEND EXPERTISE
              </span>

              <h3>From design to interactive experiences.</h3>

              <p>
                Building reusable UI components, responsive layouts
                and maintainable interfaces for modern applications.
              </p>
            </div>

            <div className="fs-overview-badge">
              <span className="fs-status-dot" />
              Continuous Learning
            </div>
          </div>

          <div className="fs-section-heading fs-reveal">
            <div>
              <span className="fs-section-label">
                TECHNOLOGIES I USE
              </span>
              <h3>Frontend Stack</h3>
            </div>

            <span className="fs-count">
              {String(skills.length).padStart(2, "0")} TECHNOLOGIES
            </span>
          </div>

          <div className="fs-grid">
            {skills.map(
              ({ name, description, Icon, color, category }, index) => (
                <article
                  className="fs-card fs-reveal"
                  key={name}
                  style={revealDelay(index % 4)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="fs-card-top">
                    <div className={`fs-skill-icon ${color}`}>
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="fs-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="fs-card-title">{name}</h4>

                  <p className="fs-card-description">
                    {description}
                  </p>

                  <div className="fs-card-bottom">
                    <span>{category}</span>
                    <FaCode aria-hidden="true" />
                  </div>
                </article>
              )
            )}
          </div>

          <footer
            className="fs-bottom-note fs-reveal"
            style={revealDelay(2)}
            onMouseMove={handleMouseMove}
          >
            <div className="fs-bottom-icon">
              <FaLayerGroup aria-hidden="true" />
            </div>

            <div className="fs-bottom-copy">
              <h3>Built with purpose. Designed for people.</h3>
              <p>
                Clean components, responsive interfaces and
                accessible user experiences.
              </p>
            </div>

            <span className="fs-bottom-mark" aria-hidden="true">
              {"</>"}
            </span>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
