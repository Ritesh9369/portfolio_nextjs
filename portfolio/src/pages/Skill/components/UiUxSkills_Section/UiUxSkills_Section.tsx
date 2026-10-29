
"use client";

import { useEffect, useRef } from "react";
import {
  FaPalette,
  FaEye,
  FaMobileScreenButton,
  FaUniversalAccess,
  FaShapes,
  FaRulerCombined,
  FaMagnifyingGlass,
  FaLayerGroup,
  FaPenRuler,
  FaObjectGroup,
  FaRegLightbulb,
  FaLaptop,
} from "react-icons/fa6";
import { SiFigma } from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";
import "./UiUxSkills_Section.css";

const uiUxSkills = [
  {
    title: "UI Design",
    category: "Visual Design",
    description:
      "Create clean, modern interfaces with consistent colors, typography, and visual hierarchy.",
    icon: FaPalette,
    className: "ux-purple",
    number: "01",
  },
  {
    title: "UX Principles",
    category: "User Experience",
    description:
      "Design intuitive user journeys with a focus on usability, clarity, and user needs.",
    icon: FaRegLightbulb,
    className: "ux-orange",
    number: "02",
  },
  {
    title: "Responsive Design",
    category: "Multi-device UI",
    description:
      "Build layouts that adapt smoothly to mobile, tablet, laptop, and desktop screens.",
    icon: FaMobileScreenButton,
    className: "ux-cyan",
    number: "03",
  },
  {
    title: "Accessibility",
    category: "Inclusive Design",
    description:
      "Consider readable contrast, keyboard navigation, semantic structure, and accessible controls.",
    icon: FaUniversalAccess,
    className: "ux-green",
    number: "04",
  },
  {
    title: "Typography",
    category: "Content Hierarchy",
    description:
      "Use font sizes, weights, spacing, and line heights to improve readability.",
    icon: FaRulerCombined,
    className: "ux-blue",
    number: "05",
  },
  {
    title: "Design Systems",
    category: "Consistency",
    description:
      "Maintain reusable design patterns, shared components, and consistent interface styles.",
    icon: FaLayerGroup,
    className: "ux-pink",
    number: "06",
  },
  {
    title: "Wireframing",
    category: "Layout Planning",
    description:
      "Plan page structure, content placement, and user flows before detailed implementation.",
    icon: FaObjectGroup,
    className: "ux-indigo",
    number: "07",
  },
  {
    title: "Visual Hierarchy",
    category: "Information Design",
    description:
      "Guide attention through spacing, alignment, size, contrast, and component placement.",
    icon: FaEye,
    className: "ux-yellow",
    number: "08",
  },
  {
    title: "Spacing & Layout",
    category: "Interface Structure",
    description:
      "Create balanced layouts with consistent spacing, grids, alignment, and proportions.",
    icon: FaShapes,
    className: "ux-teal",
    number: "09",
  },
  {
    title: "Prototyping",
    category: "Interaction Design",
    description:
      "Plan and communicate interface interactions and screen-to-screen user flows.",
    icon: FaPenRuler,
    className: "ux-red",
    number: "10",
  },
  {
    title: "Figma",
    category: "Design Tool",
    description:
      "Work with interface mockups, design references, reusable components, and prototypes.",
    icon: SiFigma,
    className: "ux-figma",
    number: "11",
  },
  {
    title: "UI Implementation",
    category: "Design to Code",
    description:
      "Translate design references into responsive React and Next.js interfaces.",
    icon: FaLaptop,
    className: "ux-sky",
    number: "12",
  },
];

const designPrinciples = [
  {
    title: "Clarity",
    description: "Make information easy to understand.",
  },
  {
    title: "Consistency",
    description: "Keep components and patterns predictable.",
  },
  {
    title: "Responsiveness",
    description: "Adapt the experience to every screen.",
  },
  {
    title: "Usability",
    description: "Make interactions straightforward.",
  },
];

export default function UiUxSkills_Section() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>(".ux-reveal");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("ux-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ux-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Section>
      <section
        ref={sectionRef}
        className="ux-section"
        id="ui-ux-skills"
        aria-labelledby="ux-heading"
      >
        <Container>
          <div className="ux-shell">
            <div className="ux-glow ux-glow-one" aria-hidden="true" />
            <div className="ux-glow ux-glow-two" aria-hidden="true" />

            <header className="ux-header ux-reveal">
              <span className="ux-eyebrow">
                <span className="ux-eyebrow-dot" />
                DESIGNING BETTER EXPERIENCES
              </span>

              <h2 className="ux-title" id="ux-heading">
                UI/UX &{" "}
                <span>Design Thinking</span>
              </h2>

              <p className="ux-description">
                I focus on creating interfaces that look polished, feel
                intuitive, and work consistently across devices. My approach
                combines visual design principles with practical frontend
                implementation.
              </p>

              <div className="ux-header-tags">
                <span>Visual Design</span>
                <span>User Experience</span>
                <span>Responsive Interfaces</span>
              </div>
            </header>

            <div className="ux-feature ux-reveal">
              <div className="ux-feature-copy">
                <span className="ux-feature-label">
                  DESIGN APPROACH
                </span>

                <h3>
                  Good design is more than{" "}
                  <span>just appearance.</span>
                </h3>

                <p>
                  Every interface should communicate clearly, guide users
                  naturally, and remain easy to use on different screen sizes.
                  I apply these principles when building frontend applications.
                </p>

                <div className="ux-feature-points">
                  <span>
                    <FaEye aria-hidden="true" />
                    Clear visual hierarchy
                  </span>

                  <span>
                    <FaMobileScreenButton aria-hidden="true" />
                    Responsive layouts
                  </span>

                  <span>
                    <FaUniversalAccess aria-hidden="true" />
                    Accessible interactions
                  </span>
                </div>
              </div>

              <div className="ux-preview" aria-label="Illustrative interface design preview">
                <div className="ux-preview-window">
                  <div className="ux-window-top">
                    <div className="ux-window-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className="ux-window-label">
                      Interface Preview
                    </span>
                  </div>

                  <div className="ux-preview-body">
                    <div className="ux-preview-sidebar">
                      <span className="ux-sidebar-logo">
                        <FaShapes />
                      </span>
                      <span className="ux-sidebar-line active" />
                      <span className="ux-sidebar-line" />
                      <span className="ux-sidebar-line short" />
                      <span className="ux-sidebar-line" />
                    </div>

                    <div className="ux-preview-content">
                      <div className="ux-preview-heading">
                        <div>
                          <span className="ux-skeleton small" />
                          <span className="ux-skeleton heading" />
                        </div>

                        <span className="ux-preview-avatar">U</span>
                      </div>

                      <div className="ux-preview-banner">
                        <span className="ux-skeleton banner-small" />
                        <span className="ux-skeleton banner-large" />
                        <span className="ux-preview-button" />
                      </div>

                      <div className="ux-preview-cards">
                        <div className="ux-preview-card">
                          <span className="ux-mini-shape purple" />
                          <span className="ux-skeleton medium" />
                          <span className="ux-skeleton tiny" />
                        </div>

                        <div className="ux-preview-card">
                          <span className="ux-mini-shape cyan" />
                          <span className="ux-skeleton medium" />
                          <span className="ux-skeleton tiny" />
                        </div>
                      </div>

                      <div className="ux-preview-chart">
                        <span className="ux-skeleton chart-title" />
                        <div className="ux-chart-bars">
                          <span style={{ height: "38%" }} />
                          <span style={{ height: "63%" }} />
                          <span style={{ height: "48%" }} />
                          <span style={{ height: "82%" }} />
                          <span style={{ height: "58%" }} />
                          <span style={{ height: "94%" }} />
                          <span style={{ height: "72%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ux-floating-tag ux-floating-top">
                  <FaPalette aria-hidden="true" />
                  Visual balance
                </div>

                <div className="ux-floating-tag ux-floating-bottom">
                  <FaMagnifyingGlass aria-hidden="true" />
                  User focused
                </div>
              </div>
            </div>

            <div className="ux-skills-heading ux-reveal">
              <div>
                <span className="ux-sub-eyebrow">
                  CORE CAPABILITIES
                </span>

                <h3>Design Skills & Principles</h3>
              </div>

              <span className="ux-skill-count">
                {String(uiUxSkills.length).padStart(2, "0")} SKILLS
              </span>
            </div>

            <div className="ux-skills-grid">
              {uiUxSkills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <article
                    className="ux-skill-card ux-reveal"
                    key={skill.title}
                  >
                    <div className="ux-skill-top">
                      <div
                        className={`ux-skill-icon ${skill.className}`}
                        aria-hidden="true"
                      >
                        <Icon />
                      </div>

                      <span className="ux-skill-number">
                        {skill.number}
                      </span>
                    </div>

                    <span className="ux-skill-category">
                      {skill.category}
                    </span>

                    <h4>{skill.title}</h4>

                    <p>{skill.description}</p>

                    <div className="ux-skill-bottom">
                      <span />
                      <span>Design capability</span>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="ux-principles ux-reveal">
              <div className="ux-principles-heading">
                <span className="ux-principles-icon">
                  <FaRegLightbulb aria-hidden="true" />
                </span>

                <div>
                  <span className="ux-sub-eyebrow">
                    MY DESIGN MINDSET
                  </span>

                  <h3>Principles Behind Every Interface</h3>
                </div>
              </div>

              <div className="ux-principles-grid">
                {designPrinciples.map((principle, index) => (
                  <article
                    className="ux-principle"
                    key={principle.title}
                  >
                    <span className="ux-principle-number">
                      0{index + 1}
                    </span>

                    <h4>{principle.title}</h4>

                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <footer className="ux-footer ux-reveal">
              <span className="ux-footer-icon">
                <FaPenRuler aria-hidden="true" />
              </span>

              <p>
                My goal: turn design ideas into{" "}
                <strong>clean, responsive, user-friendly interfaces.</strong>
              </p>
            </footer>
          </div>
        </Container>
      </section>
    </Section>
  );
}
