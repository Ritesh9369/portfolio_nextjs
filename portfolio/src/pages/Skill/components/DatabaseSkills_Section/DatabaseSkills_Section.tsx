
"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

import {
  FaDatabase,
  FaCode,
  FaLayerGroup,
  FaTable,
  FaMagnifyingGlassChart,
  FaShieldHalved,
  FaUserShield,
} from "react-icons/fa6";

import {
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./DatabaseSkills_Section.css";

const skills = [
  {
    name: "MySQL",
    description: "Relational databases, SQL queries and structured data.",
    Icon: SiMysql,
    color: "ds-icon-mysql",
    category: "Relational Database",
  },
  {
    name: "MongoDB",
    description: "Document-based storage and NoSQL data management.",
    Icon: SiMongodb,
    color: "ds-icon-mongodb",
    category: "NoSQL Database",
  },
  {
    name: "CRUD Operations",
    description: "Creating, reading, updating and deleting records.",
    Icon: FaDatabase,
    color: "ds-icon-crud",
    category: "Data Operations",
  },
  {
    name: "SQL Queries",
    description: "Selecting, filtering and modifying database records.",
    Icon: FaCode,
    color: "ds-icon-sql",
    category: "Query Language",
  },
  {
    name: "Database Design",
    description: "Organizing tables, columns and data relationships.",
    Icon: FaTable,
    color: "ds-icon-design",
    category: "Data Modeling",
  },
  {
    name: "Joins & Relationships",
    description: "Connecting related records across database tables.",
    Icon: FaLayerGroup,
    color: "ds-icon-relations",
    category: "Relational Data",
  },
  {
    name: "Query Optimization",
    description: "Improving query performance and data retrieval.",
    Icon: FaMagnifyingGlassChart,
    color: "ds-icon-query",
    category: "Performance",
  },
  {
    name: "RBAC",
    description:
      "Role-based access control with roles, permissions and restricted access.",
    Icon: FaUserShield,
    color: "ds-icon-rbac",
    category: "Access Control",
  },
];

const revealDelay = (index: number): CSSProperties =>
  ({
    "--ds-delay": `${index * 65}ms`,
  }) as CSSProperties;

export default function DatabaseSkills_Section() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".ds-reveal")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      items.forEach((item) => item.classList.add("ds-visible"));
      return;
    }

    root.classList.add("ds-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ds-visible");
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
      "--ds-mx",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--ds-my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Section className="database-skills-section" container={false}>
      <Container className="database-skills-container">
        <div
          id="database-skills"
          className="ds-anchor"
          ref={sectionRef}
        >
          <span className="ds-orb ds-orb-one" aria-hidden="true" />
          <span className="ds-orb ds-orb-two" aria-hidden="true" />

          {/* Section heading */}
          <header className="ds-heading ds-reveal">
            <span className="ds-eyebrow">
              <span className="ds-eyebrow-line" />
              DATA & SECURITY EXPERTISE
              <span className="ds-eyebrow-line" />
            </span>

            <h2 className="ds-title">
              Database
              <br />
              <span>Management.</span>
            </h2>

            <p className="ds-description">
              Managing structured data, database relationships,
              efficient queries and role-based access control.
            </p>
          </header>

          {/* Overview panel */}
          <div
            className="ds-overview ds-reveal"
            style={revealDelay(1)}
            onMouseMove={handleMouseMove}
          >
            <div className="ds-overview-icon">
              <FaDatabase aria-hidden="true" />
            </div>

            <div className="ds-overview-copy">
              <span className="ds-overview-label">
                DATABASE & SECURITY
              </span>

              <h3>Structured data. Controlled access.</h3>

              <p>
                Organizing application data and managing access
                according to user roles and permissions.
              </p>
            </div>

            <div className="ds-overview-badge">
              <span className="ds-status-dot" />
              Data Driven
            </div>
          </div>

          {/* RBAC explanation */}
          <div
            className="ds-rbac-panel ds-reveal"
            style={revealDelay(2)}
          >
            <div className="ds-rbac-heading">
              <div className="ds-rbac-icon">
                <FaShieldHalved aria-hidden="true" />
              </div>

              <div>
                <span className="ds-rbac-label">
                  ACCESS CONTROL CONCEPT
                </span>
                <h3>Role-Based Access Control (RBAC)</h3>
              </div>
            </div>

            <p className="ds-rbac-description">
              RBAC assigns permissions to roles, and users receive
              access through their assigned roles.
            </p>

            <div className="ds-rbac-roles">
              <div className="ds-role">
                <span className="ds-role-icon">
                  <FaUserShield aria-hidden="true" />
                </span>
                <span className="ds-role-name">Admin</span>
                <span className="ds-role-detail">
                  Manage access
                </span>
              </div>

              <div className="ds-role">
                <span className="ds-role-icon">
                  <FaLayerGroup aria-hidden="true" />
                </span>
                <span className="ds-role-name">Manager</span>
                <span className="ds-role-detail">
                  Assigned access
                </span>
              </div>

              <div className="ds-role">
                <span className="ds-role-icon">
                  <FaCode aria-hidden="true" />
                </span>
                <span className="ds-role-name">User</span>
                <span className="ds-role-detail">
                  Limited access
                </span>
              </div>
            </div>
          </div>

          {/* Skills heading */}
          <div className="ds-section-heading ds-reveal">
            <div>
              <span className="ds-section-label">
                DATABASE TECHNOLOGIES
              </span>
              <h3>Database Stack</h3>
            </div>

            <span className="ds-count">
              {String(skills.length).padStart(2, "0")} SKILLS
            </span>
          </div>

          {/* Skills cards */}
          <div className="ds-grid">
            {skills.map(
              ({ name, description, Icon, color, category }, index) => (
                <article
                  className="ds-card ds-reveal"
                  key={name}
                  style={revealDelay(index % 4)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="ds-card-top">
                    <div className={`ds-skill-icon ${color}`}>
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="ds-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="ds-card-title">{name}</h4>

                  <p className="ds-card-description">
                    {description}
                  </p>

                  <div className="ds-card-bottom">
                    <span>{category}</span>
                    <FaCode aria-hidden="true" />
                  </div>
                </article>
              )
            )}
          </div>

          {/* Closing panel */}
          <footer
            className="ds-bottom-note ds-reveal"
            style={revealDelay(2)}
            onMouseMove={handleMouseMove}
          >
            <div className="ds-bottom-icon">
              <FaShieldHalved aria-hidden="true" />
            </div>

            <div className="ds-bottom-copy">
              <h3>Reliable data. Responsible access.</h3>
              <p>
                Structured storage, meaningful queries and
                permission-aware application design.
              </p>
            </div>

            <span className="ds-bottom-mark" aria-hidden="true">
              {"{ }"}
            </span>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
