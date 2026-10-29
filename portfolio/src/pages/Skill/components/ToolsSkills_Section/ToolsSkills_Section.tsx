
"use client";

import { useEffect, useRef } from "react";
import {
  FaCodeBranch,
  FaTerminal,
  FaUsers,
  FaArrowsRotate,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaBug,
  FaScrewdriverWrench,
  FaLaptopCode,
  FaServer,
  FaGears,
  FaRocket,
} from "react-icons/fa6";
import {
  SiPostman,
  SiVite,
  SiNpm,
  SiFigma,
  SiJira,
  SiDocker,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";
import "./ToolsSkills_Section.css";

const tools = [
  {
    name: "VS Code",
    category: "Code Editor",
    description: "Daily development, debugging, extensions, and productivity.",
    icon: VscCode,
    className: "ts-vscode",
  },
  {
    name: "Git",
    category: "Version Control",
    description: "Track changes, manage commits, and maintain project history.",
    icon: FaGitAlt,
    className: "ts-git",
  },
  {
    name: "GitHub",
    category: "Code Hosting",
    description: "Host repositories and collaborate through pull requests.",
    icon: FaGithub,
    className: "ts-github",
  },
  {
    name: "Git Branching",
    category: "Collaboration",
    description: "Work with branches, merges, and feature-based workflows.",
    icon: FaCodeBranch,
    className: "ts-branch",
  },
  {
    name: "Postman",
    category: "API Testing",
    description: "Test REST APIs, inspect responses, and validate endpoints.",
    icon: SiPostman,
    className: "ts-postman",
  },
  {
    name: "npm",
    category: "Package Manager",
    description: "Install dependencies and manage project packages.",
    icon: SiNpm,
    className: "ts-npm",
  },
  {
    name: "Vite",
    category: "Build Tool",
    description: "Run fast development servers and build frontend projects.",
    icon: SiVite,
    className: "ts-vite",
  },
  {
    name: "Terminal",
    category: "CLI Workflow",
    description: "Run commands, manage scripts, and troubleshoot applications.",
    icon: FaTerminal,
    className: "ts-terminal",
  },
  {
    name: "Database Tools",
    category: "Data Management",
    description: "Inspect database records and troubleshoot data issues.",
    icon: FaDatabase,
    className: "ts-database",
  },
  {
    name: "Debugging",
    category: "Problem Solving",
    description: "Trace errors, inspect application behavior, and fix issues.",
    icon: FaBug,
    className: "ts-debug",
  },
  {
    name: "Figma",
    category: "Design Collaboration",
    description: "Review UI designs and translate layouts into interfaces.",
    icon: SiFigma,
    className: "ts-figma",
  },
//   {
//     name: "Jira",
//     category: "Project Tracking",
//     description: "Organize tasks and follow development progress.",
//     icon: SiJira,
//     className: "ts-jira",
//   },
//   {
//     name: "Docker",
//     category: "Containers",
//     description: "Understand containerized development and deployment workflows.",
//     icon: SiDocker,
//     className: "ts-docker",
//   },
  {
    name: "Development Workflow",
    category: "Productivity",
    description: "Structure tasks, coordinate changes, and streamline delivery.",
    icon: FaGears,
    className: "ts-workflow",
  },
];

const workflow = [
  {
    number: "01",
    title: "Develop",
    description: "Write maintainable code and build application features.",
    icon: FaLaptopCode,
  },
  {
    number: "02",
    title: "Test",
    description: "Validate API behavior and debug unexpected issues.",
    icon: FaScrewdriverWrench,
  },
  {
    number: "03",
    title: "Collaborate",
    description: "Manage changes and coordinate work using Git workflows.",
    icon: FaUsers,
  },
  {
    number: "04",
    title: "Deliver",
    description: "Prepare builds and support reliable application delivery.",
    icon: FaRocket,
  },
];

export default function ToolsSkills_Section() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>(
      ".ts-reveal"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("ts-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ts-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Section>
      <section
        ref={sectionRef}
        className="ts-section"
        id="development-tools"
        aria-labelledby="ts-heading"
      >
        <Container>
          <div className="ts-shell">
            <div className="ts-orb ts-orb-one" aria-hidden="true" />
            <div className="ts-orb ts-orb-two" aria-hidden="true" />

            <header className="ts-header ts-reveal">
              <span className="ts-eyebrow">
                <span className="ts-eyebrow-dot" />
                MY DEVELOPMENT WORKSPACE
              </span>

              <h2 className="ts-title" id="ts-heading">
                Tools That Power My{" "}
                <span>Workflow</span>
              </h2>

              <p className="ts-description">
                The development tools and workflows I use to write code,
                test APIs, manage version control, debug issues, and build
                reliable applications.
              </p>
            </header>

            <div className="ts-tools-grid">
              {tools.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <article
                    className="ts-card ts-reveal"
                    key={tool.name}
                    style={
                      {
                        "--ts-delay": `${(index % 4) * 70}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="ts-card-top">
                      <div
                        className={`ts-icon-box ${tool.className}`}
                        aria-hidden="true"
                      >
                        <Icon />
                      </div>

                      <span className="ts-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="ts-card-content">
                      <span className="ts-category">
                        {tool.category}
                      </span>

                      <h3>{tool.name}</h3>

                      <p>{tool.description}</p>
                    </div>

                    <div className="ts-card-bottom">
                      <span className="ts-status-dot" />
                      <span>Development toolkit</span>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="ts-workflow ts-reveal">
              <div className="ts-workflow-heading">
                <div>
                  <span className="ts-mini-label">
                    HOW I WORK
                  </span>

                  <h3>From Code to Delivery</h3>
                </div>

                <span className="ts-workflow-icon" aria-hidden="true">
                  <FaArrowsRotate />
                </span>
              </div>

              <div className="ts-workflow-grid">
                {workflow.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article
                      className="ts-workflow-step"
                      key={step.number}
                    >
                      <div className="ts-step-top">
                        <span className="ts-step-number">
                          {step.number}
                        </span>

                        <Icon className="ts-step-icon" />
                      </div>

                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="ts-footer-note ts-reveal">
              <span className="ts-footer-icon" aria-hidden="true">
                <FaServer />
              </span>

              <p>
                A practical workflow focused on{" "}
                <strong>clean code, collaboration, testing,</strong> and{" "}
                <strong>continuous improvement.</strong>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Section>
  );
}
