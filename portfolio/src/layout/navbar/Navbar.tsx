
"use client";

import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
    { label: "Skills", href: "/skill" },
  { label: "Projects", href: "/projects" },

  { label: "Contact", href: "/contact-us" },
];

type Theme = "light" | "dark";

const THEME_KEY = "ritesh-portfolio-theme";

function subscribeToMotionPreference(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);

  return () => media.removeEventListener("change", callback);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerMotionPreference() {
  return false;
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [themeReady, setThemeReady] = useState(false);

  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference
  );

  // Restore the saved theme after hydration.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);

      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      }
    } catch {
      // Continue with the default theme if storage is unavailable.
    }

    setThemeReady(true);
  }, []);

  // Keep the page theme in sync with the control.
  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Theme still works for the current page.
    }
  }, [theme, themeReady]);

  // Throttle scroll updates to at most one per animation frame.
  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      frame = 0;
      setScrolled(window.scrollY > 36);
    };

    const handleScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  // Close the menu when navigating to another route.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Close the menu with Escape and lock background scrolling while open.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

const isActive = (href: string) =>
  pathname !== null &&
  (pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`)));


  const switchTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
  };

  return (
    <header
      className={[
        "site-header",
        scrolled ? "is-scrolled" : "",
        menuOpen ? "menu-is-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-theme-ready={themeReady ? "true" : "false"}
      data-reduced-motion={reduceMotion ? "true" : "false"}
    >
      <Section className="navbar-section" container={false}>
        <Container className="navbar-container">
          <nav className="navbar-navigation" aria-label="Main navigation">
            <Link
              href="/"
              className="navbar-brand"
              aria-label="Ritesh — Portfolio home"
              onClick={closeMenu}
            >
              <span className="navbar-logo" aria-hidden="true">
                R
              </span>

              <span className="navbar-brand-text">
                <span className="navbar-brand-name">Ritesh</span>
                <span className="navbar-brand-role">
                  Full Stack Developer
                </span>
              </span>
            </Link>

            <button
              type="button"
              className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>

            <div
              id="primary-navigation"
              className={`navbar-menu ${menuOpen ? "is-open" : ""}`}
              aria-hidden={undefined}
            >
              <div className="navbar-links">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`navbar-link ${
                        active ? "is-active" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                      tabIndex={menuOpen ? 0 : undefined}
                    >
                      <span>{link.label}</span>
                      <span
                        className="navbar-link-indicator"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="navbar-actions">
                <div className="theme-switch" aria-label="Color theme">
                  <button
                    type="button"
                    className={`theme-option ${
                      theme === "light" ? "is-selected" : ""
                    }`}
                    aria-label="Use light theme"
                    aria-pressed={theme === "light"}
                    onClick={() => switchTheme("light")}
                  >
                    <SunIcon />
                  </button>

                  <button
                    type="button"
                    className={`theme-option ${
                      theme === "dark" ? "is-selected" : ""
                    }`}
                    aria-label="Use dark theme"
                    aria-pressed={theme === "dark"}
                    onClick={() => switchTheme("dark")}
                  >
                    <MoonIcon />
                  </button>
                </div>

                <Link
                  href="/contact-us"
                  className="navbar-cta"
                  onClick={closeMenu}
                >
                  <span>Let's Talk</span>
                  <span className="navbar-cta-icon">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </Container>
      </Section>

      {menuOpen && (
        <button
          type="button"
          className="navbar-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          tabIndex={-1}
        />
      )}
    </header>
  );
}
