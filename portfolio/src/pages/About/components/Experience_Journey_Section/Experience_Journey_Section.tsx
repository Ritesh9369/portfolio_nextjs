
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarDays,
  FaGraduationCap,
  FaLocationDot,
  FaRocket,
} from "react-icons/fa6";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Experience_Journey_Section.css";

type JourneyItem = {
  kind: "school" | "college" | "now";
  number: string;
  period: string;
  title: string;
  org: string;
  place: string;
  description: string;
  score?: {
    label: string;
    value: string;
    percent: number;
  };
  tech?: string[];
  badge?: string;
};

const CURRENT_YEAR = new Date().getFullYear();

const journey: JourneyItem[] = [
  {
    kind: "school",
    number: "01",
    period: "JUN 2019 — MAY 2020",
    title: "Secondary School",
    org: "Beenapara Inter College",
    place: "Azamgarh · UP Board",
    description:
      "Completed secondary education with distinction, building the foundation for my academic journey.",
    score: {
      label: "Overall score",
      value: "80%",
      percent: 80,
    },
  },
  {
    kind: "school",
    number: "02",
    period: "JUN 2021 — JUL 2022",
    title: "Higher Secondary · PCM",
    org: "Beenapara Inter College",
    place: "Azamgarh · UP Board",
    description:
      "Studied Physics, Chemistry and Mathematics, strengthening analytical thinking and problem-solving.",
    score: {
      label: "Overall score",
      value: "59%",
      percent: 59,
    },
  },
  {
    kind: "college",
    number: "03",
    period: "JUN 2022 — MAY 2025",
    title: "Bachelor's in Information Technology",
    org: "NKTT Degree College, Thane",
    place: "University of Mumbai",
    description:
      "Completed my bachelor's degree in Information Technology and developed a foundation in software development.",
    score: {
      label: "Final CGPA",
      value: "8.03 / 10",
      percent: 80.3,
    },
  },
  {
    kind: "now",
    number: "04",
    period: `${CURRENT_YEAR} — PRESENT`,
    title: "Full Stack Developer",
    org: "Building digital products",
    place: "Mumbai, India",
    description:
      "Building modern web applications, developing backend APIs and working with databases while continuing to grow as a developer.",
    tech: ["React", "Next.js", "Node.js", "MySQL"],
    badge: "CURRENT FOCUS",
  },
];

const icons = {
  school: FaBookOpen,
  college: FaGraduationCap,
  now: FaRocket,
} as const;

export default function Experience_Journey_Section() {
  return (
    <Section className="about-journey-section" container={false}>
      <Container className="about-journey-container">
        <div className="about-journey" id="about-journey">
          <div
            className="about-journey-glow about-journey-glow-one"
            aria-hidden="true"
          />
          <div
            className="about-journey-glow about-journey-glow-two"
            aria-hidden="true"
          />

          <header className="about-journey-head">
            <div className="about-journey-head-copy">
              <span className="about-journey-eyebrow">
                <span className="about-journey-eyebrow-dot" />
                MY STORY, MY PROGRESS
              </span>

              <h2 className="about-journey-title">
                Every chapter
                <span> moves me forward.</span>
              </h2>

              <p className="about-journey-description">
                From the classroom to software development, every step has
                shaped the way I learn, solve problems and build meaningful
                digital experiences.
              </p>
            </div>

            <Link className="about-journey-cta" href="/contact-us">
              Let’s work together
              <FaArrowRight aria-hidden="true" />
            </Link>
          </header>

          <div className="about-journey-meta">
            <span className="about-journey-meta-label">
              <span className="about-journey-meta-dot" />
              THE JOURNEY SO FAR
            </span>

            <span className="about-journey-meta-count">
              <strong>04</strong>
              <span>CHAPTERS</span>
            </span>
          </div>

          <ol className="about-journey-timeline">
            {journey.map((item) => {
              const Icon = icons[item.kind];

              return (
                <li
                  className={`about-journey-item about-journey-item-${item.kind}`}
                  key={item.number}
                >
                  <div className="about-journey-marker">
                    <span className="about-journey-node">
                      <Icon aria-hidden="true" />
                    </span>

                    <span className="about-journey-step">
                      {item.number}
                    </span>
                  </div>

                  <article className="about-journey-card">
                    <div className="about-journey-card-top">
                      <span className="about-journey-period">
                        <FaCalendarDays aria-hidden="true" />
                        {item.period}
                      </span>

                      {item.badge && (
                        <span className="about-journey-badge">
                          <span className="about-journey-badge-dot" />
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="about-journey-card-title">
                      {item.title}
                    </h3>

                    <p className="about-journey-org">{item.org}</p>

                    <p className="about-journey-place">
                      <FaLocationDot aria-hidden="true" />
                      {item.place}
                    </p>

                    <p className="about-journey-card-text">
                      {item.description}
                    </p>

                    {item.score && (
                      <div
                        className="about-journey-score"
                        role="img"
                        aria-label={`${item.score.label}: ${item.score.value}`}
                      >
                        <div className="about-journey-score-row">
                          <span>{item.score.label}</span>
                          <strong>{item.score.value}</strong>
                        </div>

                        <div className="about-journey-score-track">
                          <span
                            style={
                              {
                                "--aj-fill": `${item.score.percent}%`,
                              } as CSSProperties
                            }
                          />
                        </div>
                      </div>
                    )}

                    {item.tech && (
                      <div className="about-journey-tech">
                        {item.tech.map((name) => (
                          <span key={name}>{name}</span>
                        ))}
                      </div>
                    )}

                    {item.kind === "now" && (
                      <div className="about-journey-current-note">
                        <span className="about-journey-current-icon">
                          <FaRocket aria-hidden="true" />
                        </span>

                        <span>
                          <strong>Always moving forward</strong>
                          <small>
                            Learn. Build. Improve.
                          </small>
                        </span>
                      </div>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>

          <footer className="about-journey-footer">
            <span
              className="about-journey-footer-symbol"
              aria-hidden="true"
            >
              ✳
            </span>

            <p>
              More than writing code.
              <strong> Building what comes next.</strong>
            </p>

            <span className="about-journey-footer-year">
              EST. {CURRENT_YEAR}
            </span>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
