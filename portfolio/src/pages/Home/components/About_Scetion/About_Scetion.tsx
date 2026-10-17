"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaMobileScreenButton,
  FaLightbulb,
  FaCheck,
} from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./About_Scetion.css";

const technologies = [
  { name: "React", Icon: SiReact, className: "about-tech-react" },
  { name: "Next.js", Icon: SiNextdotjs, className: "about-tech-next" },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    className: "about-tech-typescript",
  },
  { name: "Node.js", Icon: SiNodedotjs, className: "about-tech-node" },
  { name: "MySQL", Icon: SiMysql, className: "about-tech-mysql" },
  { name: "MongoDB", Icon: SiMongodb, className: "about-tech-mongo" },
];

const strengths = [
  {
    number: "01",
    title: "Clean Code",
    description:
      "Readable, maintainable code with reusable components and solid architecture.",
    Icon: FaCode,
    className: "about-strength-blue",
  },
  {
    number: "02",
    title: "Responsive Design",
    description:
      "Interfaces that adapt naturally to mobile, tablet and desktop screens.",
    Icon: FaMobileScreenButton,
    className: "about-strength-purple",
  },
  {
    number: "03",
    title: "Full Stack Thinking",
    description:
      "Connecting intuitive interfaces with practical APIs, databases and backend logic.",
    Icon: FaLaptopCode,
    className: "about-strength-cyan",
  },
];

const checks = [
  "Responsive and accessible interfaces",
  "Reusable and maintainable code",
  "Frontend and backend development",
];

const delay = (index: number): CSSProperties =>
  ({ "--about-delay": `${index * 90}ms` }) as CSSProperties;

export default function About_Section() {
  const anchorRef = useRef<HTMLDivElement | null>(null);

  // Scroll reveal animation
  useEffect(() => {
    const root = anchorRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".about-reveal")
    );

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    root.classList.add("about-js");

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

  // Mouse-follow spotlight
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--about-mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--about-my", `${event.clientY - rect.top}px`);
  };

  return (
    <Section className="about-section" container={false}>
      <Container className="about-container">
        <div id="about" className="about-anchor" ref={anchorRef}>
          {/* Background glow orbs */}
          <span className="about-orb about-orb-one" aria-hidden="true" />
          <span className="about-orb about-orb-two" aria-hidden="true" />

          {/* Section heading */}
          <div className="about-heading about-reveal">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line" />
              GET TO KNOW ME
              <span className="about-eyebrow-line" />
            </span>

            <h2 className="about-title">
              More than code.
              <br />
              <span>Focused on impact.</span>
            </h2>

            <p className="about-heading-description">
              A developer who turns complex ideas into useful, polished and
              user-friendly digital experiences.
            </p>
          </div>

          {/* Main content */}
          <div className="about-content">
            <div className="about-intro about-reveal" style={delay(1)}>
              <div className="about-intro-label">
                <span className="about-live-dot" />
                A LITTLE ABOUT ME
              </div>

              <h3 className="about-intro-title">
                Hello, I&apos;m <span>Ritesh Chauhan.</span>
              </h3>

              <p className="about-paragraph">
                I&apos;m a Full Stack Developer passionate about building
                modern web applications and mobile-friendly experiences. I
                work across the stack, from creating intuitive interfaces to
                developing APIs and database-driven features.
              </p>

              <p className="about-paragraph">
                My approach combines thoughtful design, structured code and
                practical problem-solving. I focus on building products that
                are responsive, maintainable and easy to use.
              </p>

              <p className="about-paragraph">
                I continuously explore new technologies and improve my
                approach to application performance, reliability and overall
                user experience.
              </p>

              <div className="about-check-list">
                {checks.map((text) => (
                  <div className="about-check-item" key={text}>
                    <span className="about-check-icon">
                      <FaCheck size={10} aria-hidden="true" />
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact-us" className="about-contact-button">
                <span>Let&apos;s Connect</span>
                <FaArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>

            {/* Development highlights */}
            <div
              className="about-highlights about-reveal"
              style={delay(2)}
              onMouseMove={handleMouseMove}
            >
              <div className="about-highlight-top">
                <span className="about-highlight-overline">
                  HOW I APPROACH DEVELOPMENT
                </span>

                <span className="about-highlight-symbol" aria-hidden="true">
                  {"</>"}
                </span>
              </div>

              <h3 className="about-highlight-title">
                Built with purpose.
                <br />
                <span>Designed with care.</span>
              </h3>

              <p className="about-highlight-description">
                Good software should do more than work. It should be
                understandable, adaptable and designed around real user needs.
              </p>

              <div className="about-strength-list">
                {strengths.map(
                  ({ number, title, description, Icon, className }) => (
                    <article
                      className={`about-strength-card ${className}`}
                      key={number}
                    >
                      <div className="about-strength-icon">
                        <Icon size={19} aria-hidden="true" />
                      </div>

                      <div className="about-strength-copy">
                        <div className="about-strength-heading">
                          <h4>{title}</h4>
                          <span>{number}</span>
                        </div>

                        <p>{description}</p>
                      </div>
                    </article>
                  )
                )}
              </div>

              <div className="about-note">
                <span className="about-note-icon">
                  <FaLightbulb size={16} aria-hidden="true" />
                </span>

                <p>
                  <strong>My mindset:</strong> keep learning, solve the right
                  problem and make every detail count.
                </p>
              </div>
            </div>
          </div>

          {/* Technology stack */}
          <div
            className="about-tech-panel about-reveal"
            onMouseMove={handleMouseMove}
          >
            <div className="about-tech-copy">
              <span className="about-tech-eyebrow">TOOLS OF MY TRADE</span>

              <h3>Technologies I work with</h3>

              <p>A practical toolkit for building complete digital products.</p>
            </div>

            <div className="about-tech-list">
              {technologies.map(({ name, Icon, className }) => (
                <div
                  className={`about-tech-item ${className}`}
                  key={name}
                  aria-label={name}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}