import type { IconType } from "react-icons";
import {
  FaCode,
  FaGaugeHigh,
  FaLayerGroup,
  FaMagnifyingGlass,
  FaPenRuler,
  FaQuoteLeft,
  FaRocket,
  FaVial,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./How_Work_Section.css";

type Step = {
  number: string;
  title: string;
  description: string;
  output: string;
  Icon: IconType;
};

type Value = {
  title: string;
  description: string;
  Icon: IconType;
};

/* Edit these freely to match your real process. */
const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start with the goal, the users and the constraints, so we build the right thing from day one.",
    output: "Clear scope",
    Icon: FaMagnifyingGlass,
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "Sketch the interface, structure the components and model the data before writing a single line.",
    output: "UI + architecture",
    Icon: FaPenRuler,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop responsive frontends, backend APIs and database layers with clean, maintainable code.",
    output: "Working features",
    Icon: FaCode,
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "Check every screen size, polish the details and fix issues for a smooth, reliable experience.",
    output: "Polished product",
    Icon: FaVial,
  },
  {
    number: "05",
    title: "Launch & Improve",
    description:
      "Ship it, learn from feedback and keep improving performance and usability over time.",
    output: "Continuous growth",
    Icon: FaRocket,
  },
];

const values: Value[] = [
  {
    title: "Clean architecture",
    description: "Structured, scalable code that stays easy to maintain.",
    Icon: FaLayerGroup,
  },
  {
    title: "Usability first",
    description: "Interfaces that feel natural on every device.",
    Icon: FaWandMagicSparkles,
  },
  {
    title: "Performance",
    description: "Fast load times and smooth interactions.",
    Icon: FaGaugeHigh,
  },
];

export default function How_Work_Section() {
  return (
    <Section className="about-work-section" container={false}>
      <Container className="about-work-container">
        <div className="about-work" id="about-work">
          <div className="about-work-grid-bg" aria-hidden="true" />
          <div
            className="about-work-glow about-work-glow-one"
            aria-hidden="true"
          />
          <div
            className="about-work-glow about-work-glow-two"
            aria-hidden="true"
          />

          {/* ============ LEFT: INTRO ============ */}
          <div className="about-work-intro">
            <span className="about-work-eyebrow">
              <span className="about-work-eyebrow-dot" />
              HOW I WORK
            </span>

            <h2 className="about-work-title">
              From idea to
              <span> working product.</span>
            </h2>

            <p className="about-work-description">
              A simple, repeatable process that keeps every project clear and
              moving &mdash; so the result is something people actually enjoy
              using.
            </p>

            <ul className="about-work-values">
              {values.map(({ title, description, Icon }) => (
                <li className="about-work-value" key={title}>
                  <span className="about-work-value-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{description}</small>
                  </span>
                </li>
              ))}
            </ul>

            <div className="about-work-quote">
              <span className="about-work-quote-icon" aria-hidden="true">
                <FaQuoteLeft />
              </span>
              <p>
                <span>Thoughtful design.</span>
                <span>Reliable code.</span>
                <span>Meaningful impact.</span>
              </p>
            </div>
          </div>

          {/* ============ RIGHT: PROCESS ============ */}
          <div className="about-work-process">
            <div className="about-work-meta">
              <span className="about-work-meta-label">
                <span className="about-work-meta-dot" />
                THE PROCESS
              </span>

              <span className="about-work-meta-count">
                <strong>0{steps.length}</strong>
                <span>STEPS</span>
              </span>
            </div>

            <ol className="about-work-steps">
              {steps.map(({ number, title, description, output, Icon }) => (
                <li className="about-work-step" key={number}>
                  <span className="about-work-step-node">{number}</span>

                  <article className="about-work-step-card">
                    <span className="about-work-step-icon" aria-hidden="true">
                      <Icon />
                    </span>

                    <div className="about-work-step-body">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>

                    <span className="about-work-step-output">
                      <small>Output</small>
                      {output}
                    </span>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}