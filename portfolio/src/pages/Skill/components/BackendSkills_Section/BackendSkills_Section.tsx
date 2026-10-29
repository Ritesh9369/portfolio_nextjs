
"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

import {
  FaServer,
  FaCode,
  FaLayerGroup,
  FaShieldHalved,
  FaNetworkWired,
} from "react-icons/fa6";

import {
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./BackendSkills_Section.css";

const skills = [
  {
    name: "Node.js",
    description: "Server-side JavaScript and asynchronous operations.",
    Icon: SiNodedotjs,
    color: "bs-icon-node",
    category: "JavaScript Runtime",
  },
  {
    name: "Express.js",
    description: "Routing, middleware and backend application structure.",
    Icon: SiExpress,
    color: "bs-icon-express",
    category: "Backend Framework",
  },
  {
    name: "REST APIs",
    description: "Building endpoints for client-server communication.",
    Icon: FaNetworkWired,
    color: "bs-icon-api",
    category: "API Development",
  },
  {
    name: "Authentication",
    description: "Login flows, sessions and access control.",
    Icon: FaShieldHalved,
    color: "bs-icon-auth",
    category: "Application Security",
  },
  {
    name: "JWT",
    description: "Token-based authentication concepts and workflows.",
    Icon: SiJsonwebtokens,
    color: "bs-icon-jwt",
    category: "Authentication",
  },
  {
    name: "MVC Architecture",
    description: "Separating models, controllers and application routes.",
    Icon: FaLayerGroup,
    color: "bs-icon-mvc",
    category: "Application Architecture",
  },
  {
    name: "MySQL Integration",
    description: "Connecting backend services with relational databases.",
    Icon: SiMysql,
    color: "bs-icon-mysql",
    category: "Database Integration",
  },
  {
    name: "API Testing",
    description: "Testing requests, responses and endpoint behavior.",
    Icon: SiPostman,
    color: "bs-icon-postman",
    category: "Testing",
  },
];

const revealDelay = (index: number): CSSProperties =>
  ({
    "--bs-delay": `${index * 65}ms`,
  }) as CSSProperties;

export default function BackendSkills_Section() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".bs-reveal")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      items.forEach((item) => item.classList.add("bs-visible"));
      return;
    }

    root.classList.add("bs-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bs-visible");
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
      "--bs-mx",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--bs-my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Section className="backend-skills-section" container={false}>
      <Container className="backend-skills-container">
        <div
          id="backend-skills"
          className="bs-anchor"
          ref={sectionRef}
        >
          <span className="bs-orb bs-orb-one" aria-hidden="true" />
          <span className="bs-orb bs-orb-two" aria-hidden="true" />

          <header className="bs-heading bs-reveal">
            <span className="bs-eyebrow">
              <span className="bs-eyebrow-line" />
              SERVER-SIDE EXPERTISE
              <span className="bs-eyebrow-line" />
            </span>

            <h2 className="bs-title">
              Backend
              <br />
              <span>Development.</span>
            </h2>

            <p className="bs-description">
              Building backend services, structured APIs and reliable
              server-side applications with modern development tools.
            </p>
          </header>

          <div
            className="bs-overview bs-reveal"
            style={revealDelay(1)}
            onMouseMove={handleMouseMove}
          >
            <div className="bs-overview-icon">
              <FaServer aria-hidden="true" />
            </div>

            <div className="bs-overview-copy">
              <span className="bs-overview-label">
                BACKEND EXPERTISE
              </span>

              <h3>Reliable logic. Connected applications.</h3>

              <p>
                Developing API endpoints, server-side workflows,
                authentication and database-connected services.
              </p>
            </div>

            <div className="bs-overview-badge">
              <span className="bs-status-dot" />
              API Focused
            </div>
          </div>

          <div className="bs-section-heading bs-reveal">
            <div>
              <span className="bs-section-label">
                TECHNOLOGIES I USE
              </span>
              <h3>Backend Stack</h3>
            </div>

            <span className="bs-count">
              {String(skills.length).padStart(2, "0")} TECHNOLOGIES
            </span>
          </div>

          <div className="bs-grid">
            {skills.map(
              ({ name, description, Icon, color, category }, index) => (
                <article
                  className="bs-card bs-reveal"
                  key={name}
                  style={revealDelay(index % 4)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="bs-card-top">
                    <div className={`bs-skill-icon ${color}`}>
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="bs-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="bs-card-title">{name}</h4>

                  <p className="bs-card-description">
                    {description}
                  </p>

                  <div className="bs-card-bottom">
                    <span>{category}</span>
                    <FaCode aria-hidden="true" />
                  </div>
                </article>
              )
            )}
          </div>

          <footer
            className="bs-bottom-note bs-reveal"
            style={revealDelay(2)}
            onMouseMove={handleMouseMove}
          >
            <div className="bs-bottom-icon">
              <FaLayerGroup aria-hidden="true" />
            </div>

            <div className="bs-bottom-copy">
              <h3>Structured code. Reliable services.</h3>
              <p>
                Maintainable APIs, organized architecture and
                secure application workflows.
              </p>
            </div>

            <span className="bs-bottom-mark" aria-hidden="true">
              {"</>"}
            </span>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
