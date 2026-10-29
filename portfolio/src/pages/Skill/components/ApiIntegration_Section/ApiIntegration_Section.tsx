
"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

import {
  FaCode,
  FaNetworkWired,
  FaShieldHalved,
  FaArrowsRotate,
  FaCircleCheck,
  FaLayerGroup,
} from "react-icons/fa6";

import {
  SiAxios,
  SiJson,
  SiPostman,
  SiJavascript,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./ApiIntegration_Section.css";

const skills = [
  {
    name: "REST APIs",
    description:
      "Connecting frontend and mobile applications with backend services.",
    Icon: FaNetworkWired,
    color: "api-icon-rest",
    category: "API Architecture",
  },
  {
    name: "HTTP Methods",
    description:
      "Using GET, POST, PUT, PATCH and DELETE for API operations.",
    Icon: FaArrowsRotate,
    color: "api-icon-http",
    category: "HTTP Requests",
  },
  {
    name: "Fetch API",
    description:
      "Sending asynchronous requests and handling server responses.",
    Icon: SiJavascript,
    color: "api-icon-fetch",
    category: "JavaScript",
  },
  {
    name: "Axios",
    description:
      "Making HTTP requests and organizing API communication.",
    Icon: SiAxios,
    color: "api-icon-axios",
    category: "HTTP Client",
  },
  {
    name: "JSON Data",
    description:
      "Working with JSON request bodies and response data.",
    Icon: SiJson,
    color: "api-icon-json",
    category: "Data Exchange",
  },
  {
    name: "Authentication",
    description:
      "Working with authentication headers, sessions and protected endpoints.",
    Icon: FaShieldHalved,
    color: "api-icon-auth",
    category: "API Security",
  },
  {
    name: "Error Handling",
    description:
      "Handling HTTP errors, failed requests and unexpected responses.",
    Icon: FaCircleCheck,
    color: "api-icon-errors",
    category: "Reliability",
  },
  {
    name: "API Testing",
    description:
      "Testing endpoints, request parameters and response behavior.",
    Icon: SiPostman,
    color: "api-icon-testing",
    category: "Testing Tools",
  },
];

const revealDelay = (index: number): CSSProperties =>
  ({
    "--api-delay": `${index * 65}ms`,
  }) as CSSProperties;

export default function ApiIntegration_Section() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".api-reveal")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      items.forEach((item) => item.classList.add("api-visible"));
      return;
    }

    root.classList.add("api-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("api-visible");
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
      "--api-mx",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--api-my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Section className="api-integration-section" container={false}>
      <Container className="api-integration-container">
        <div
          id="api-integration"
          className="api-anchor"
          ref={sectionRef}
        >
          <span className="api-orb api-orb-one" aria-hidden="true" />
          <span className="api-orb api-orb-two" aria-hidden="true" />

          {/* Heading */}
          <header className="api-heading api-reveal">
            <span className="api-eyebrow">
              <span className="api-eyebrow-line" />
              CONNECTING APPLICATIONS
              <span className="api-eyebrow-line" />
            </span>

            <h2 className="api-title">
              API
              <br />
              <span>Integration.</span>
            </h2>

            <p className="api-description">
              Connecting web and mobile applications with backend
              services through reliable API requests, structured data
              exchange, authentication and error handling.
            </p>
          </header>

          {/* Overview */}
          <div
            className="api-overview api-reveal"
            style={revealDelay(1)}
            onMouseMove={handleMouseMove}
          >
            <div className="api-overview-icon">
              <FaNetworkWired aria-hidden="true" />
            </div>

            <div className="api-overview-copy">
              <span className="api-overview-label">
                API DEVELOPMENT WORKFLOW
              </span>

              <h3>Connect. Exchange data. Handle responses.</h3>

              <p>
                Integrating frontend interfaces with backend APIs,
                processing responses and handling request failures.
              </p>
            </div>

            <div className="api-overview-badge">
              <span className="api-status-dot" />
              Service Integration
            </div>
          </div>

          {/* Request lifecycle */}
          <div
            className="api-workflow api-reveal"
            style={revealDelay(2)}
          >
            <div className="api-workflow-heading">
              <div className="api-workflow-icon">
                <FaLayerGroup aria-hidden="true" />
              </div>

              <div>
                <span className="api-workflow-label">
                  REQUEST LIFECYCLE
                </span>
                <h3>How API communication works</h3>
              </div>
            </div>

            <div className="api-workflow-steps">
              <div className="api-workflow-step">
                <span className="api-step-number">01</span>
                <span className="api-step-title">Request</span>
                <span className="api-step-detail">
                  Send HTTP request
                </span>
              </div>

              <span className="api-step-connector" aria-hidden="true" />

              <div className="api-workflow-step">
                <span className="api-step-number">02</span>
                <span className="api-step-title">Process</span>
                <span className="api-step-detail">
                  Backend processing
                </span>
              </div>

              <span className="api-step-connector" aria-hidden="true" />

              <div className="api-workflow-step">
                <span className="api-step-number">03</span>
                <span className="api-step-title">Response</span>
                <span className="api-step-detail">
                  Handle returned data
                </span>
              </div>
            </div>
          </div>

          {/* Skills heading */}
          <div className="api-section-heading api-reveal">
            <div>
              <span className="api-section-label">
                API TECHNOLOGIES & CONCEPTS
              </span>
              <h3>Integration Stack</h3>
            </div>

            <span className="api-count">
              {String(skills.length).padStart(2, "0")} SKILLS
            </span>
          </div>

          {/* Skill cards */}
          <div className="api-grid">
            {skills.map(
              ({ name, description, Icon, color, category }, index) => (
                <article
                  className="api-card api-reveal"
                  key={name}
                  style={revealDelay(index % 4)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="api-card-top">
                    <div className={`api-skill-icon ${color}`}>
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="api-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="api-card-title">{name}</h4>

                  <p className="api-card-description">
                    {description}
                  </p>

                  <div className="api-card-bottom">
                    <span>{category}</span>
                    <FaCode aria-hidden="true" />
                  </div>
                </article>
              )
            )}
          </div>

          {/* Closing panel */}
          <footer
            className="api-bottom-note api-reveal"
            style={revealDelay(2)}
            onMouseMove={handleMouseMove}
          >
            <div className="api-bottom-icon">
              <FaArrowsRotate aria-hidden="true" />
            </div>

            <div className="api-bottom-copy">
              <h3>Reliable requests. Meaningful responses.</h3>
              <p>
                Structured communication between user interfaces,
                backend services and application data.
              </p>
            </div>

            <span className="api-bottom-mark" aria-hidden="true">
              {"</>"}
            </span>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
