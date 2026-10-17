
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUp,
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Let_Connect_Section.css";

const EMAIL = "chauhanritesh774@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/ritesh-chauhan-21835b254/";
const GITHUB_URL = "https://github.com/Ritesh9369";

const openTo = ["On-site", "Hybrid", "Remote"];

export default function Let_Connect_Section() {
  const [copied, setCopied] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    if (!copied) return;

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Section className="about-connect-section" container={false}>
      <Container className="about-connect-container">
        <div className="about-connect" id="about-connect">
          <div className="about-connect-grid-bg" aria-hidden="true" />

          <div
            className="about-connect-glow about-connect-glow-one"
            aria-hidden="true"
          />

          <div
            className="about-connect-glow about-connect-glow-two"
            aria-hidden="true"
          />

          <div
            className="about-connect-glow about-connect-glow-three"
            aria-hidden="true"
          />

          <div
            className="about-connect-ring about-connect-ring-one"
            aria-hidden="true"
          />

          <div
            className="about-connect-ring about-connect-ring-two"
            aria-hidden="true"
          />

          <div className="about-connect-main">
            <div className="about-connect-copy">
              <span className="about-connect-eyebrow">
                <span className="about-connect-live" />
                OPEN TO NEW OPPORTUNITIES
              </span>

              <p className="about-connect-overline">
                THE NEXT CHAPTER STARTS HERE
              </p>

              <h2 className="about-connect-title">
                Have an idea?
                <span> Let&apos;s build it together.</span>
              </h2>

              <p className="about-connect-description">
                Have a project in mind, an opportunity to discuss or an
                interesting idea to explore? Let&apos;s connect and turn
                possibilities into something meaningful.
              </p>

              <div className="about-connect-actions">
                <a
                  className="about-connect-button about-connect-button-primary"
                  href={`mailto:${EMAIL}`}
                >
                  <FaEnvelope aria-hidden="true" />
                  <span>Let&apos;s talk</span>
                  <FaArrowRight
                    className="about-connect-button-arrow"
                    aria-hidden="true"
                  />
                </a>

                <Link
                  className="about-connect-button about-connect-button-secondary"
                  href="/Contact-Us"
                >
                  <span>Contact page</span>
                </Link>
              </div>

              <div className="about-connect-open">
                <span className="about-connect-open-label">OPEN TO</span>

                <ul>
                  {openTo.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-connect-right">
              <div className="about-connect-card-heading">
                <span className="about-connect-card-heading-icon">
                  <FaEnvelope aria-hidden="true" />
                </span>

                <span>
                  <strong>Find me online</strong>
                  <small>Choose your preferred channel</small>
                </span>
              </div>

              <ul className="about-connect-channels">
                <li className="about-connect-channel about-connect-channel-email">
                  <a
                    className="about-connect-channel-link"
                    href={`mailto:${EMAIL}`}
                  >
                    <span
                      className="about-connect-channel-icon"
                      aria-hidden="true"
                    >
                      <FaEnvelope />
                    </span>

                    <span className="about-connect-channel-text">
                      <small>Email me</small>
                      <strong>{EMAIL}</strong>
                    </span>
                  </a>

                  <button
                    type="button"
                    className="about-connect-copy-btn"
                    onClick={handleCopy}
                    aria-label={
                      copied ? "Email copied" : "Copy email address"
                    }
                  >
                    {copied ? (
                      <FaCheck aria-hidden="true" />
                    ) : (
                      <FaCopy aria-hidden="true" />
                    )}

                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </li>

                <li className="about-connect-channel">
                  <a
                    className="about-connect-channel-link"
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="about-connect-channel-icon"
                      aria-hidden="true"
                    >
                      <FaLinkedinIn />
                    </span>

                    <span className="about-connect-channel-text">
                      <small>LinkedIn</small>
                      <strong>Connect professionally</strong>
                    </span>

                    <FaArrowRight
                      className="about-connect-channel-arrow"
                      aria-hidden="true"
                    />
                  </a>
                </li>

                <li className="about-connect-channel">
                  <a
                    className="about-connect-channel-link"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="about-connect-channel-icon"
                      aria-hidden="true"
                    >
                      <FaGithub />
                    </span>

                    <span className="about-connect-channel-text">
                      <small>GitHub</small>
                      <strong>Explore my projects</strong>
                    </span>

                    <FaArrowRight
                      className="about-connect-channel-arrow"
                      aria-hidden="true"
                    />
                  </a>
                </li>

                <li className="about-connect-channel">
                  <div className="about-connect-channel-link about-connect-channel-static">
                    <span
                      className="about-connect-channel-icon"
                      aria-hidden="true"
                    >
                      <FaLocationDot />
                    </span>

                    <span className="about-connect-channel-text">
                      <small>Based in</small>
                      <strong>Mumbai, Maharashtra, India</strong>
                    </span>
                  </div>
                </li>
              </ul>

              <div className="about-connect-card-footer">
                <span className="about-connect-card-footer-dot" />
                <span>One conversation can start something great.</span>
              </div>
            </div>
          </div>

          
        </div>
      </Container>
    </Section>
  );
}
