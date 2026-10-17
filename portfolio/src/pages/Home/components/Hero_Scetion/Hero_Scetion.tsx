
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Hero_Scetion.css";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "React Native Developer",
  "Mobile App Developer",
  "Next.js Developer",
  "Software Developer",
];

const technologies = [
  {
    name: "React",
    Icon: SiReact,
    className: "tech-react",
  },
  {
    name: "React Native",
    Icon: SiReact,
    className: "tech-react-native",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    className: "tech-next",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    className: "tech-typescript",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    className: "tech-javascript",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    className: "tech-node",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    className: "tech-mysql",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    className: "tech-mongo",
  },
];

function useTypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = text === currentRole;
    const isEmpty = text.length === 0;

    const timer = window.setTimeout(() => {
      if (isComplete && !deleting) {
        setDeleting(true);
        return;
      }

      if (isEmpty && deleting) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setText(
        deleting
          ? text.slice(0, -1)
          : currentRole.slice(0, text.length + 1)
      );
    }, isComplete && !deleting ? 1600 : isEmpty && deleting ? 350 : deleting ? 40 : 85);

    return () => window.clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return text;
}

export default function Hero_Section() {
  const animatedRole = useTypingAnimation();

  return (
    <Section className="portfolio-hero-section" container={false}>
      <section className="portfolio-hero" aria-labelledby="hero-title">
        <div className="hero-scene" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-ambient hero-ambient-blue" />
          <div className="hero-ambient hero-ambient-purple" />
          <div className="hero-stars" />
          <div className="hero-horizon" />
        </div>

        <Container className="hero-layout">
          <div className="hero-content">
            <div className="hero-availability hero-enter hero-delay-1">
              <span className="hero-availability-dot" />
              <span>Building Digital Experiences</span>
            </div>

            <p className="hero-eyebrow hero-enter hero-delay-2">
              HELLO, WORLD. I&apos;M
            </p>

            <h1
              id="hero-title"
              className="hero-heading hero-enter hero-delay-3"
            >
              <span className="hero-name-first">Ritesh</span>{" "}
              <span className="hero-name-last">
                Chauhan<span className="hero-heading-dot">.</span>
              </span>
            </h1>

            <div className="hero-role hero-enter hero-delay-4">
              <span className="hero-role-prefix">I&apos;m a</span>

              <span className="hero-role-gradient" aria-hidden="true">
                {animatedRole}
              </span>

              <span className="hero-role-cursor" aria-hidden="true" />

              <span className="sr-only">
                Full Stack Developer, React Developer, React Native Developer,
                Mobile App Developer, Next.js Developer
              </span>
            </div>

            <p className="hero-description hero-enter hero-delay-5">
              I design and develop modern web applications and mobile apps
              with seamless user experiences. From responsive interfaces
              using React and Next.js to cross-platform mobile applications
              with React Native, I build scalable solutions powered by
              Node.js, TypeScript, MySQL and MongoDB.
            </p>

            <div className="hero-actions hero-enter hero-delay-6">
              <Link
                href="/projects"
                className="hero-button hero-button-primary"
              >
                <span className="hero-button-code" aria-hidden="true">
                  {"</>"}
                </span>

                <span>Explore My Work</span>

                <span className="hero-button-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>

              <a
                href="/Ritesh-Chauhan-Resume.pdf"
                className="hero-button hero-button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v12m-5-5 5 5 5-5M5 17v3h14v-3" />
                </svg>

                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero-tech-stack hero-enter hero-delay-7">
              <span className="hero-stack-label">
                TECHNOLOGIES I WORK WITH
              </span>

              <div className="hero-tech-list">
                {technologies.map(({ name, Icon, className }) => (
                  <div
                    key={name}
                    className={`hero-tech-item ${className}`}
                    title={name}
                  >
                    <span className="hero-tech-symbol" aria-hidden="true">
                      <Icon />
                    </span>

                    <span className="hero-tech-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-bottom-note hero-enter hero-delay-7">
              <span className="hero-note-line" />
              <span>Web Development · Mobile Apps · Clean Code</span>
            </div>
          </div>

          <div
            className="hero-visual"
            role="img"
            aria-label="Animated holographic programming core representing web and mobile application development"
          >
            <div className="holo-stage">
              <div className="holo-aura" />

              <div className="holo-orbit holo-orbit-outer">
                <span className="holo-orbit-point orbit-point-one" />
                <span className="holo-orbit-point orbit-point-two" />
              </div>

              <div className="holo-orbit holo-orbit-middle">
                <span className="holo-orbit-point orbit-point-three" />
              </div>

              <div className="holo-orbit holo-orbit-inner" />

              <div className="holo-beam holo-beam-one" />
              <div className="holo-beam holo-beam-two" />

              <div className="holo-core-wrap">
                <div className="holo-core-halo" />

                <div className="holo-core">
                  <div className="holo-core-top" />
                  <div className="holo-core-grid" />

                  <div className="holo-core-symbol" aria-hidden="true">
                    <span>{"<"}</span>
                    <span>/</span>
                    <span>{">"}</span>
                  </div>

                  <div className="holo-core-caption">
                    DIGITAL INNOVATION
                  </div>
                </div>

                <div className="holo-core-bottom" />
              </div>

              <div className="holo-tech-card holo-card-react">
                <span className="holo-card-icon react-icon">
                  <SiReact aria-hidden="true" />
                </span>
                <span>
                  <strong>React</strong>
                  <small>Web Interfaces</small>
                </span>
              </div>

              <div className="holo-tech-card holo-card-next">
                <span className="holo-card-icon next-icon">
                  <SiReact aria-hidden="true" />
                </span>
                <span>
                  <strong>React Native</strong>
                  <small>Mobile Apps</small>
                </span>
              </div>

              <div className="holo-tech-card holo-card-ts">
                <span className="holo-card-icon ts-icon">
                  <SiTypescript aria-hidden="true" />
                </span>
                <span>
                  <strong>TypeScript</strong>
                  <small>Type Safety</small>
                </span>
              </div>

              <div className="holo-tech-card holo-card-node">
                <span className="holo-card-icon node-icon">
                  <SiNodedotjs aria-hidden="true" />
                </span>
                <span>
                  <strong>Node.js</strong>
                  <small>Backend APIs</small>
                </span>
              </div>

              <div className="holo-code-panel holo-code-front">
                <div className="holo-panel-header">
                  <span className="holo-panel-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>component.tsx</span>
                </div>

                <div className="holo-code-lines">
                  <p>
                    <span>01</span> <b>const</b> developer = {"{"}
                  </p>
                  <p>
                    <span>02</span> &nbsp; name: <em>&quot;Ritesh&quot;</em>,
                  </p>
                  <p>
                    <span>03</span> &nbsp; focus: <em>&quot;Web + Mobile&quot;</em>,
                  </p>
                  <p>
                    <span>04</span> &nbsp; code: <strong>&quot;Clean&quot;</strong>
                  </p>
                  <p>
                    <span>05</span> {"}"};
                  </p>
                </div>
              </div>

              <div className="holo-code-panel holo-code-back">
                <div className="holo-panel-header">
                  <span className="holo-panel-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>server.js</span>
                </div>

                <div className="holo-code-lines">
                  <p>
                    <span>01</span> <b>app</b>.get(<em>&quot;/&quot;</em>,
                  </p>
                  <p>
                    <span>02</span> &nbsp; (req, res) =&gt; {"{"}
                  </p>
                  <p>
                    <span>03</span> &nbsp; &nbsp; res.send(
                  </p>
                  <p>
                    <span>04</span> &nbsp; &nbsp; &nbsp;{" "}
                    <strong>&quot;Hello!&quot;</strong>
                  </p>
                  <p>
                    <span>05</span> &nbsp; &nbsp; );
                  </p>
                  <p>
                    <span>06</span> {"}"});{" "}
                  </p>
                </div>
              </div>

              <div className="holo-platform">
                <div className="holo-platform-ring platform-ring-one" />
                <div className="holo-platform-ring platform-ring-two" />
                <div className="holo-platform-ring platform-ring-three" />

                <div className="holo-platform-base">
                  <span className="platform-light" />
                  <span className="platform-label">WEB + MOBILE</span>
                  <span className="platform-light" />
                </div>
              </div>

              <div className="holo-side-label">
                <span className="holo-side-label-line" />
                <span>IDEAS INTO REALITY</span>
              </div>
            </div>
          </div>
        </Container>

        <a
          href="#about"
          className="hero-scroll-hint"
          aria-label="Scroll down to learn more about Ritesh"
        >
          <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
          <span className="hero-scroll-chevron" aria-hidden="true">
            ↓
          </span>
        </a>
      </section>
    </Section>
  );
}
