"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import type { CSSProperties, MouseEvent } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUpRightFromSquare,
  FaArrowUp,
} from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Footer.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skill" },
  { label: "Contact", href: "/contact-us" },
];

const technologies = [
  { name: "React", Icon: SiReact, className: "footer-tech-react" },
  { name: "Next.js", Icon: SiNextdotjs, className: "footer-tech-next" },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    className: "footer-tech-typescript",
  },
  { name: "Node.js", Icon: SiNodedotjs, className: "footer-tech-node" },
  { name: "MongoDB", Icon: SiMongodb, className: "footer-tech-mongo" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    Icon: FaEnvelope,
  },
];

// Year helpers: the server uses a fixed fallback, the browser uses the real year.
// This avoids calling new Date() while the page is being prerendered.
const FALLBACK_YEAR = 2026;
const subscribeToNothing = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => FALLBACK_YEAR;

const delay = (index: number): CSSProperties =>
  ({ "--footer-delay": `${index * 100}ms` }) as CSSProperties;

export default function Footer() {
  const year = useSyncExternalStore(
    subscribeToNothing,
    getClientYear,
    getServerYear
  );
  const rootRef = useRef<HTMLElement | null>(null);

  // Scroll reveal animation
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".footer-reveal")
    );

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    root.classList.add("footer-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Mouse-follow spotlight on CTA
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--footer-mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--footer-my", `${event.clientY - rect.top}px`);
  };

  return (
    <footer className="site-footer" id="footer" ref={rootRef}>
      <Section className="footer-section" container={false}>
        <div className="footer-glow footer-glow-blue" aria-hidden="true" />
        <div className="footer-glow footer-glow-purple" aria-hidden="true" />

        <Container className="footer-container">
          {/* Contact CTA */}
          <section
            className="footer-cta footer-reveal"
            aria-labelledby="footer-cta-title"
            onMouseMove={handleMouseMove}
          >
            <div className="footer-cta-content">
              <span className="footer-kicker">
                <span className="footer-kicker-dot" />
                HAVE A PROJECT IN MIND?
              </span>

              <h2 className="footer-cta-title" id="footer-cta-title">
                Let&apos;s build something
                <span> extraordinary.</span>
              </h2>

              <p className="footer-cta-description">
                Have an idea, a project, or an opportunity? Let&apos;s turn
                your vision into a modern digital experience.
              </p>
            </div>

            <Link href="/contact-us" className="footer-cta-button">
              <FaEnvelope size={16} aria-hidden="true" />
              <span>Let&apos;s Talk</span>
              <FaArrowUpRightFromSquare size={13} aria-hidden="true" />
            </Link>
          </section>

          <div className="footer-divider" />

          {/* Main footer */}
          <div className="footer-main">
            <div className="footer-brand footer-reveal" style={delay(0)}>
              <Link href="/" className="footer-logo" aria-label="Ritesh home">
                <span className="footer-logo-mark" aria-hidden="true">
                  <span>{"<"}</span>
                  <span>/</span>
                  <span>{">"}</span>
                </span>

                <span className="footer-logo-text">
                  Ritesh<span className="footer-logo-accent">.</span>
                </span>
              </Link>

              <p className="footer-description">
                Full Stack Developer crafting scalable web applications and
                seamless mobile experiences with clean, maintainable code.
              </p>

              <div className="footer-socials">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="footer-social-link"
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <nav
              className="footer-navigation footer-reveal"
              aria-label="Footer navigation"
              style={delay(1)}
            >
              <h3 className="footer-heading">Quick Links</h3>

              <ul className="footer-link-list">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer-nav-link">
                      <span>{item.label}</span>
                      <FaArrowUpRightFromSquare
                        size={11}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer-expertise footer-reveal" style={delay(2)}>
              <h3 className="footer-heading">Tech Stack</h3>

              <p className="footer-column-description">
                Technologies I use to build reliable digital products.
              </p>

              <div className="footer-tech-list">
                {technologies.map(({ name, Icon, className }) => (
                  <span
                    key={name}
                    className={`footer-tech-item ${className}`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom-divider" />

          {/* Copyright bar */}
          <div className="footer-bottom footer-reveal">
            <p className="footer-copyright">
              © {year} Ritesh Chauhan. All rights reserved.
            </p>

            <p className="footer-built">
              Designed with <span className="footer-heart">♥</span> and built
              with <SiNextdotjs aria-label="Next.js" />
              <span>Next.js</span>
            </p>

            <a
              href="/"
              className="footer-back-to-top"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <span className="footer-back-to-top-icon">
                <FaArrowUp size={14} aria-hidden="true" />
              </span>
            </a>
          </div>
        </Container>
      </Section>
    </footer>
  );
}