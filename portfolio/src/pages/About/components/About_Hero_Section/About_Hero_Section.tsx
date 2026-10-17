"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";
import {
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./About_Hero_Section.css";

const technologies = [
  { name: "React", Icon: SiReact, className: "about-hero-tech-react" },
  { name: "Next.js", Icon: SiNextdotjs, className: "about-hero-tech-next" },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    className: "about-hero-tech-typescript",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    className: "about-hero-tech-javascript",
  },
  { name: "Node.js", Icon: SiNodedotjs, className: "about-hero-tech-node" },
  { name: "Express.js", Icon: SiExpress, className: "about-hero-tech-express" },
  { name: "MySQL", Icon: SiMysql, className: "about-hero-tech-mysql" },
];

export default function About_Hero_Section() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Section className="about-hero-section" container={false}>
      <Container className="about-hero-container">
        <div className="about-hero" id="about-hero">
          <div className="about-hero-grid" aria-hidden="true" />
          <div className="about-hero-glow about-hero-glow-one" aria-hidden="true" />
          <div className="about-hero-glow about-hero-glow-two" aria-hidden="true" />

          {/* ============ LEFT: INTRO ============ */}
          <div className="about-hero-content">
            <div className="about-hero-eyebrow">
              <span className="about-hero-status-dot" />
              <span>Open to work</span>
              <i aria-hidden="true" />
              <FaLocationDot aria-hidden="true" />
              <span>Mumbai, India</span>
            </div>

            <h1 className="about-hero-title">
              <span className="about-hero-title-line">
                I build fast &amp; <em>scalable</em>
              </span>
              <span className="about-hero-title-line">web experiences.</span>
            </h1>

            <p className="about-hero-description">
              <strong>Hi, I&apos;m Ritesh Chauhan</strong>, a Full Stack
              Developer who turns ideas into polished web and mobile products
              &mdash; clean interfaces, reliable APIs and well-structured
              databases.
            </p>

            <div className="about-hero-actions">
              <a
                className="about-hero-button about-hero-button-primary"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FaDownload aria-hidden="true" />
                <span>Download Resume</span>
                <FaArrowRight className="about-hero-button-arrow" aria-hidden="true" />
              </a>

              <Link
                className="about-hero-button about-hero-button-secondary"
                href="/Contact-Us"
              >
                <FaEnvelope aria-hidden="true" />
                <span>Let&apos;s Connect</span>
              </Link>

              <div className="about-hero-socials">
                <a
                  href="https://github.com/Ritesh9369"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <FaGithub aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-chauhan-21835b254/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
                <a
                  href="mailto:chauhanritesh774@gmail.com"
                  aria-label="Send an email"
                  title="Email"
                >
                  <FaEnvelope aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="about-hero-tech-block">
              <span className="about-hero-tech-label">
                Technologies I work with
              </span>

              <div className="about-hero-tech-list">
                {technologies.map(({ name, Icon, className }) => (
                  <span
                    className={`about-hero-tech-chip ${className}`}
                    key={name}
                    title={name}
                  >
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ============ RIGHT: VISUAL ============ */}
          <div className="about-hero-visual" aria-label="Developer profile visual">
            <div className="about-hero-blob" aria-hidden="true" />
            <div className="about-hero-ring about-hero-ring-one" aria-hidden="true" />
            <div className="about-hero-ring about-hero-ring-two" aria-hidden="true" />

            <div className="about-hero-orbit-node about-hero-node-one" aria-hidden="true">
              <SiTypescript />
            </div>
            <div className="about-hero-orbit-node about-hero-node-two" aria-hidden="true">
              <SiMysql />
            </div>

            <div className="about-hero-image-frame">
              <div className="about-hero-image-stage">
                <div className="about-hero-image-fallback" aria-hidden="true">
                  <FaCode />
                  <span>RC</span>
                  <small>FULL STACK</small>
                </div>

                {!imageFailed && (
                  <img
                    className="about-hero-profile-image"
                    src="/images/profile.jpg"
                    alt="Ritesh Chauhan portrait"
                    onError={() => setImageFailed(true)}
                  />
                )}

                <div className="about-hero-image-shade" aria-hidden="true" />
                <div className="about-hero-scan-line" aria-hidden="true" />

                <div className="about-hero-image-caption">
                  <span className="about-hero-caption-icon">
                    <FaCode aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Ritesh Chauhan</strong>
                    <small>Full Stack Developer</small>
                  </span>
                  <span className="about-hero-caption-status" />
                </div>
              </div>
            </div>

            {/* Mini code window */}
            <div className="about-hero-code-card" aria-hidden="true">
              <div className="about-hero-code-dots">
                <span />
                <span />
                <span />
                <small>dev.ts</small>
              </div>
              <div className="about-hero-code-body">
                <div>
                  <span className="ah-k">const</span>{" "}
                  <span className="ah-v">dev</span> = {"{"}
                </div>
                <div className="ah-indent">
                  <span className="ah-p">role</span>:{" "}
                  <span className="ah-s">&quot;Full Stack&quot;</span>,
                </div>
                <div className="ah-indent">
                  <span className="ah-p">location</span>:{" "}
                  <span className="ah-s">&quot;Mumbai&quot;</span>,
                </div>
                <div className="ah-indent">
                  <span className="ah-p">openToWork</span>:{" "}
                  <span className="ah-b">true</span>,
                </div>
                <div>{"};"}</div>
              </div>
            </div>

            <div className="about-hero-floating-card about-hero-card-react">
              <span className="about-hero-floating-icon">
                <SiReact />
              </span>
              <span>
                <strong>React &amp; Next.js</strong>
                <small>Modern UI</small>
              </span>
            </div>

            <div className="about-hero-floating-card about-hero-card-node">
              <span className="about-hero-floating-icon">
                <SiNodedotjs />
              </span>
              <span>
                <strong>Node.js APIs</strong>
                <small>Backend &amp; MySQL</small>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}