
"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

import {
  FaMobileScreenButton,
  FaCode,
  FaLayerGroup,
  FaShieldHalved,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa6";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiAndroid,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./MobileSkills_Section.css";

const skills = [
  {
    name: "React Native",
    description: "Building cross-platform mobile applications with React.",
    Icon: SiReact,
    color: "ms-icon-react",
    category: "Mobile Framework",
  },
  {
    name: "JavaScript",
    description: "Writing application logic and interactive features.",
    Icon: SiJavascript,
    color: "ms-icon-js",
    category: "Programming Language",
  },
  {
    name: "TypeScript",
    description: "Creating typed components and maintainable mobile code.",
    Icon: SiTypescript,
    color: "ms-icon-ts",
    category: "Programming Language",
  },
  {
    name: "Navigation",
    description: "Managing screens, routes and navigation flows.",
    Icon: FaLayerGroup,
    color: "ms-icon-navigation",
    category: "App Navigation",
  },
  {
    name: "REST API Integration",
    description: "Connecting mobile screens with backend services.",
    Icon: FaNetworkWired,
    color: "ms-icon-api",
    category: "API Integration",
  },
  {
    name: "Permissions",
    description: "Handling supported Android permissions and access.",
    Icon: FaShieldHalved,
    color: "ms-icon-permissions",
    category: "Device Security",
  },
  {
    name: "Device Storage",
    description: "Working with device files and local application data.",
    Icon: FaDatabase,
    color: "ms-icon-storage",
    category: "Local Data",
  },
  {
    name: "Android Builds",
    description: "Building and testing Android application packages.",
    Icon: SiAndroid,
    color: "ms-icon-android",
    category: "Build & Testing",
  },
];

const revealDelay = (index: number): CSSProperties =>
  ({
    "--ms-delay": `${index * 65}ms`,
  }) as CSSProperties;

export default function MobileSkills_Section() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".ms-reveal")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      items.forEach((item) => item.classList.add("ms-visible"));
      return;
    }

    root.classList.add("ms-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ms-visible");
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
      "--ms-mx",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--ms-my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Section className="mobile-skills-section" container={false}>
      <Container className="mobile-skills-container">
        <div
          id="mobile-skills"
          className="ms-anchor"
          ref={sectionRef}
        >
          <span className="ms-orb ms-orb-one" aria-hidden="true" />
          <span className="ms-orb ms-orb-two" aria-hidden="true" />

          {/* Heading */}
          <header className="ms-heading ms-reveal">
            <span className="ms-eyebrow">
              <span className="ms-eyebrow-line" />
              MOBILE APP DEVELOPMENT
              <span className="ms-eyebrow-line" />
            </span>

            <h2 className="ms-title">
              Mobile
              <br />
              <span>Development.</span>
            </h2>

            <p className="ms-description">
              Creating responsive mobile experiences with reusable
              components, reliable APIs and native device capabilities.
            </p>
          </header>

          {/* Overview */}
          <div
            className="ms-overview ms-reveal"
            style={revealDelay(1)}
            onMouseMove={handleMouseMove}
          >
            <div className="ms-overview-icon">
              <FaMobileScreenButton aria-hidden="true" />
            </div>

            <div className="ms-overview-copy">
              <span className="ms-overview-label">
                MOBILE DEVELOPMENT EXPERTISE
              </span>

              <h3>One codebase. Cross-platform experiences.</h3>

              <p>
                Building mobile interfaces, integrating backend APIs
                and working with device capabilities.
              </p>
            </div>

            <div className="ms-overview-badge">
              <span className="ms-status-dot" />
              Android Focus
            </div>
          </div>

          {/* Mobile development workflow */}
          <div className="ms-workflow ms-reveal" style={revealDelay(2)}>
            <div className="ms-workflow-heading">
              <div className="ms-workflow-icon">
                <FaLayerGroup aria-hidden="true" />
              </div>

              <div>
                <span className="ms-workflow-label">
                  APPLICATION WORKFLOW
                </span>
                <h3>From screen to device</h3>
              </div>
            </div>

            <div className="ms-workflow-steps">
              <div className="ms-workflow-step">
                <span className="ms-step-number">01</span>
                <span className="ms-step-title">Build UI</span>
                <span className="ms-step-detail">Components</span>
              </div>

              <span className="ms-step-connector" aria-hidden="true" />

              <div className="ms-workflow-step">
                <span className="ms-step-number">02</span>
                <span className="ms-step-title">Connect API</span>
                <span className="ms-step-detail">Data & services</span>
              </div>

              <span className="ms-step-connector" aria-hidden="true" />

              <div className="ms-workflow-step">
                <span className="ms-step-number">03</span>
                <span className="ms-step-title">Test App</span>
                <span className="ms-step-detail">Android build</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="ms-section-heading ms-reveal">
            <div>
              <span className="ms-section-label">
                TECHNOLOGIES I USE
              </span>
              <h3>Mobile Stack</h3>
            </div>

            <span className="ms-count">
              {String(skills.length).padStart(2, "0")} SKILLS
            </span>
          </div>

          <div className="ms-grid">
            {skills.map(
              ({ name, description, Icon, color, category }, index) => (
                <article
                  className="ms-card ms-reveal"
                  key={name}
                  style={revealDelay(index % 4)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="ms-card-top">
                    <div className={`ms-skill-icon ${color}`}>
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="ms-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="ms-card-title">{name}</h4>

                  <p className="ms-card-description">
                    {description}
                  </p>

                  <div className="ms-card-bottom">
                    <span>{category}</span>
                    <FaCode aria-hidden="true" />
                  </div>
                </article>
              )
            )}
          </div>

          {/* Closing panel */}
          <footer
            className="ms-bottom-note ms-reveal"
            style={revealDelay(2)}
            onMouseMove={handleMouseMove}
          >
            <div className="ms-bottom-icon">
              <FaMobileScreenButton aria-hidden="true" />
            </div>

            <div className="ms-bottom-copy">
              <h3>Designed for real devices.</h3>
              <p>
                Responsive screens, connected services and
                device-aware mobile application development.
              </p>
            </div>

            <span className="ms-bottom-mark" aria-hidden="true">
              {"</>"}
            </span>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
