
"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

import {
  FaCode,
  FaLayerGroup,
  FaBug,
  FaGaugeHigh,
  FaMobileScreenButton,
  FaShieldHalved,
  FaArrowsRotate,
  FaDiagramProject,
} from "react-icons/fa6";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./DevelopmentPractices_Section.css";

const practices = [
  {
    name: "Clean Code",
    description:
      "Writing readable, organized and maintainable code with clear naming and consistent structure.",
    Icon: FaCode,
    color: "dp-icon-clean",
    category: "Code Quality",
  },
  {
    name: "Reusable Components",
    description:
      "Building modular components that can be reused across different pages and features.",
    Icon: FaLayerGroup,
    color: "dp-icon-components",
    category: "Component Design",
  },
  {
    name: "MVC Architecture",
    description:
      "Separating application responsibilities into Model, View and Controller layers.",
    Icon: FaDiagramProject,
    color: "dp-icon-mvc",
    category: "Application Structure",
  },
  {
    name: "Responsive Design",
    description:
      "Creating layouts that adapt to mobile phones, tablets and desktop screens.",
    Icon: FaMobileScreenButton,
    color: "dp-icon-responsive",
    category: "User Experience",
  },
  {
    name: "Debugging",
    description:
      "Identifying errors, tracing their causes and testing practical fixes.",
    Icon: FaBug,
    color: "dp-icon-debug",
    category: "Problem Solving",
  },
  {
    name: "Performance Optimization",
    description:
      "Reducing unnecessary work and improving application responsiveness.",
    Icon: FaGaugeHigh,
    color: "dp-icon-performance",
    category: "Performance",
  },
  {
    name: "Error Handling",
    description:
      "Managing failed operations and unexpected conditions with useful feedback.",
    Icon: FaShieldHalved,
    color: "dp-icon-errors",
    category: "Reliability",
  },
  {
    name: "Refactoring",
    description:
      "Improving code structure without intentionally changing its behavior.",
    Icon: FaArrowsRotate,
    color: "dp-icon-refactor",
    category: "Code Maintenance",
  },
];

const revealDelay = (index: number): CSSProperties =>
  ({
    "--dp-delay": `${index * 65}ms`,
  }) as CSSProperties;

export default function DevelopmentPractices_Section() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".dp-reveal")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      items.forEach((item) => item.classList.add("dp-visible"));
      return;
    }

    root.classList.add("dp-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dp-visible");
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
      "--dp-mx",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--dp-my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Section
      className="development-practices-section"
      container={false}
    >
      <Container className="development-practices-container">
        <div
          id="development-practices"
          className="dp-anchor"
          ref={sectionRef}
        >
          <span className="dp-orb dp-orb-one" aria-hidden="true" />
          <span className="dp-orb dp-orb-two" aria-hidden="true" />

          {/* Section heading */}
          <header className="dp-heading dp-reveal">
            <span className="dp-eyebrow">
              <span className="dp-eyebrow-line" />
              HOW I BUILD SOFTWARE
              <span className="dp-eyebrow-line" />
            </span>

            <h2 className="dp-title">
              Development
              <br />
              <span>Practices.</span>
            </h2>

            <p className="dp-description">
              Following practical development principles to create
              maintainable, responsive, reliable and efficient
              applications.
            </p>
          </header>

          {/* Overview panel */}
          <div
            className="dp-overview dp-reveal"
            style={revealDelay(1)}
            onMouseMove={handleMouseMove}
          >
            <div className="dp-overview-icon">
              <FaCode aria-hidden="true" />
            </div>

            <div className="dp-overview-copy">
              <span className="dp-overview-label">
                DEVELOPMENT APPROACH
              </span>

              <h3>Thoughtful code. Practical solutions.</h3>

              <p>
                Focusing on reusable architecture, readable code,
                responsive interfaces and systematic debugging.
              </p>
            </div>

            <div className="dp-overview-badge">
              <span className="dp-status-dot" />
              Quality Focused
            </div>
          </div>

          {/* Development workflow */}
          <div
            className="dp-workflow dp-reveal"
            style={revealDelay(2)}
          >
            <div className="dp-workflow-heading">
              <div className="dp-workflow-icon">
                <FaDiagramProject aria-hidden="true" />
              </div>

              <div>
                <span className="dp-workflow-label">
                  DEVELOPMENT WORKFLOW
                </span>
                <h3>Plan, build and improve</h3>
              </div>
            </div>

            <div className="dp-workflow-steps">
              <div className="dp-workflow-step">
                <span className="dp-step-number">01</span>
                <span className="dp-step-title">Plan</span>
                <span className="dp-step-detail">
                  Structure the solution
                </span>
              </div>

              <span className="dp-step-connector" aria-hidden="true" />

              <div className="dp-workflow-step">
                <span className="dp-step-number">02</span>
                <span className="dp-step-title">Develop</span>
                <span className="dp-step-detail">
                  Build and test features
                </span>
              </div>

              <span className="dp-step-connector" aria-hidden="true" />

              <div className="dp-workflow-step">
                <span className="dp-step-number">03</span>
                <span className="dp-step-title">Improve</span>
                <span className="dp-step-detail">
                  Debug and optimize
                </span>
              </div>
            </div>
          </div>

          {/* Practices heading */}
          <div className="dp-section-heading dp-reveal">
            <div>
              <span className="dp-section-label">
                ENGINEERING PRINCIPLES
              </span>
              <h3>Development Toolkit</h3>
            </div>

            <span className="dp-count">
              {String(practices.length).padStart(2, "0")} PRACTICES
            </span>
          </div>

          {/* Practice cards */}
          <div className="dp-grid">
            {practices.map(
              ({ name, description, Icon, color, category }, index) => (
                <article
                  className="dp-card dp-reveal"
                  key={name}
                  style={revealDelay(index % 4)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="dp-card-top">
                    <div className={`dp-skill-icon ${color}`}>
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="dp-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="dp-card-title">{name}</h4>

                  <p className="dp-card-description">
                    {description}
                  </p>

                  <div className="dp-card-bottom">
                    <span>{category}</span>
                    <FaCode aria-hidden="true" />
                  </div>
                </article>
              )
            )}
          </div>

          {/* Closing panel */}
          <footer
            className="dp-bottom-note dp-reveal"
            style={revealDelay(2)}
            onMouseMove={handleMouseMove}
          >
            <div className="dp-bottom-icon">
              <FaLayerGroup aria-hidden="true" />
            </div>

            <div className="dp-bottom-copy">
              <h3>Built to be maintained and improved.</h3>
              <p>
                Clear structure, reusable code and continuous
                improvements help applications evolve over time.
              </p>
            </div>

            <span className="dp-bottom-mark" aria-hidden="true">
              {"</>"}
            </span>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
