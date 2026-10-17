"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCartShopping,
  FaComments,
  FaDumbbell,
  FaGithub,
  FaListCheck,
  FaPenNib,
  FaUtensils,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Project_Section.css";

/* =========================================
   DATA (replace dummy projects with your own)
   ========================================= */

type Category = "web" | "mobile" | "fullstack";
type Filter = "all" | Category;

type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  category: Category;
  Icon: IconType;
  className: string;
  tech: string[];
  liveUrl: string;
  codeUrl: string;
};

const techIcons: Record<string, IconType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "React Native": SiReact,
};

const projects: Project[] = [
  {
    id: "shopverse",
    number: "01",
    title: "ShopVerse E-Commerce",
    description:
      "A complete online store with product search, cart, secure checkout and an admin dashboard for managing orders.",
    category: "fullstack",
    Icon: FaCartShopping,
    className: "projects-tone-blue",
    tech: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    codeUrl: "https://github.com/",
  },
  {
    id: "taskflow",
    number: "02",
    title: "TaskFlow Manager",
    description:
      "A clean task and project tracker with boards, due dates, priorities and team progress overview.",
    category: "web",
    Icon: FaListCheck,
    className: "projects-tone-purple",
    tech: ["React.js", "TypeScript", "MySQL"],
    liveUrl: "#",
    codeUrl: "https://github.com/",
  },
  {
    id: "fitpulse",
    number: "03",
    title: "FitPulse Tracker",
    description:
      "A cross-platform fitness app to log workouts, track weekly goals and visualise progress over time.",
    category: "mobile",
    Icon: FaDumbbell,
    className: "projects-tone-green",
    tech: ["React Native", "Node.js", "MySQL"],
    liveUrl: "#",
    codeUrl: "https://github.com/",
  },
  {
    id: "inkwell",
    number: "04",
    title: "Inkwell Blog Platform",
    description:
      "A fast, SEO-friendly publishing platform with rich-text editing, categories and reader-friendly layouts.",
    category: "web",
    Icon: FaPenNib,
    className: "projects-tone-cyan",
    tech: ["Next.js", "TypeScript"],
    liveUrl: "#",
    codeUrl: "https://github.com/",
  },
  {
    id: "chatsphere",
    number: "05",
    title: "ChatSphere Messenger",
    description:
      "A real-time chat application with private rooms, typing indicators, online status and message history.",
    category: "fullstack",
    Icon: FaComments,
    className: "projects-tone-pink",
    tech: ["React.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    codeUrl: "https://github.com/",
  },
  {
    id: "quickbite",
    number: "06",
    title: "QuickBite Food Delivery",
    description:
      "A mobile ordering app with restaurant discovery, live order tracking and a simple reorder flow.",
    category: "mobile",
    Icon: FaUtensils,
    className: "projects-tone-orange",
    tech: ["React Native", "Express.js", "MySQL"],
    liveUrl: "#",
    codeUrl: "https://github.com/",
  },
];

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "fullstack", label: "Full Stack" },
];

const delay = (index: number): CSSProperties =>
  ({ "--projects-delay": `${index * 90}ms` }) as CSSProperties;

/* =========================================
   COMPONENT
   ========================================= */

export default function Project_Section() {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Scroll reveal animation (re-runs when the filter changes)
  useEffect(() => {
    const root = anchorRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".projects-reveal:not(.is-visible)")
    );

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    root.classList.add("projects-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filter]);

  // Mouse-follow spotlight
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--projects-mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--projects-my", `${event.clientY - rect.top}px`);
  };

  return (
    <Section className="projects-section" container={false}>
      <Container className="projects-container">
        <div id="projects" className="projects-anchor" ref={anchorRef}>
          {/* Background glow orbs */}
          <span className="projects-orb projects-orb-one" aria-hidden="true" />
          <span className="projects-orb projects-orb-two" aria-hidden="true" />

          {/* Section heading */}
          <div className="projects-heading projects-reveal">
            <span className="projects-eyebrow">
              <span className="projects-eyebrow-line" />
              SELECTED WORK
              <span className="projects-eyebrow-line" />
            </span>

            <h2 className="projects-title">
              Projects that <span>make an impact.</span>
            </h2>

            <p className="projects-description">
              A selection of web and mobile applications I&apos;ve designed
              and built, from interface to database.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="projects-filters projects-reveal"
            style={delay(1)}
            role="tablist"
            aria-label="Filter projects"
          >
            {filters.map(({ id, label }) => {
              const count =
                id === "all"
                  ? projects.length
                  : projects.filter((project) => project.category === id)
                      .length;

              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={filter === id}
                  className={`projects-filter${
                    filter === id ? " is-active" : ""
                  }`}
                  onClick={() => setFilter(id)}
                >
                  <span>{label}</span>
                  <span className="projects-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Project cards */}
          <div className="projects-grid">
            {visibleProjects.map(
              (
                {
                  id,
                  number,
                  title,
                  description,
                  category,
                  Icon,
                  className,
                  tech,
                  liveUrl,
                  codeUrl,
                },
                index
              ) => (
                <article
                  className={`projects-card projects-reveal ${className}`}
                  key={id}
                  style={delay(index % 3)}
                  onMouseMove={handleMouseMove}
                >
                  {/* Preview */}
                  <div className="projects-preview" aria-hidden="true">
                    <div className="projects-window">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="projects-preview-lines">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="projects-preview-icon">
                      <Icon size={34} />
                    </div>

                    <span className="projects-category">
                      {category === "fullstack"
                        ? "FULL STACK"
                        : category.toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="projects-body">
                    <div className="projects-body-top">
                      <h3 className="projects-card-title">{title}</h3>
                      <span className="projects-card-number">{number}</span>
                    </div>

                    <p className="projects-card-description">{description}</p>

                    <div className="projects-tech">
                      {tech.map((name) => {
                        const TechIcon = techIcons[name];

                        return (
                          <span className="projects-tech-item" key={name}>
                            {TechIcon && (
                              <TechIcon size={13} aria-hidden="true" />
                            )}
                            {name}
                          </span>
                        );
                      })}
                    </div>

                    <div className="projects-card-divider" />

                    <div className="projects-links">
                      <a
                        href={liveUrl}
                        className="projects-link projects-link-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Demo</span>
                        <FaArrowUpRightFromSquare
                          size={12}
                          aria-hidden="true"
                        />
                      </a>

                      <a
                        href={codeUrl}
                        className="projects-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${title} source code on GitHub`}
                      >
                        <FaGithub size={15} aria-hidden="true" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          {/* Closing panel */}
          <div
            className="projects-bottom-note projects-reveal"
            onMouseMove={handleMouseMove}
          >
            <div className="projects-bottom-copy">
              <h3>Have a project in mind?</h3>
              <p>
                I&apos;m always open to new ideas and opportunities. Let&apos;s
                build something great together.
              </p>
            </div>

            <Link href="/contact-us" className="projects-bottom-button">
              <span>Start a Project</span>
              <FaArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}