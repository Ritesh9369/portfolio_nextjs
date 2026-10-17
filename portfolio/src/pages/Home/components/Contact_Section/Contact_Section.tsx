"use client";

import { useEffect, useRef, useState } from "react";
import type {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  FormEvent,
  MouseEvent,
  ReactNode,
} from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCheck,
  FaTriangleExclamation,
} from "react-icons/fa6";

import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/Section/Section";

import "./Contact_Section.css";

/* =========================================
   EDIT THESE VALUES
   ========================================= */

const CONTACT_EMAIL = "your-email@example.com";
const CONTACT_LOCATION = "India";
const CONTACT_AVAILABILITY = "Open to freelance and full-time roles";
const CONTACT_RESPONSE = "I usually reply within 24 hours";

/* =========================================
   FORM LIMITS
   ========================================= */

const LIMITS = {
  nameMin: 2,
  nameMax: 60,
  emailMax: 100,
  phoneMinDigits: 7,
  phoneMaxDigits: 15,
  phoneMax: 20,
  companyMax: 80,
  subjectMin: 3,
  subjectMax: 100,
  messageMin: 20,
  messageMax: 1000,
};

const COOLDOWN_MS = 30_000;

const projectTypes = [
  "Website Development",
  "Web Application",
  "Mobile App",
  "API / Backend",
  "UI Improvements",
  "Something else",
];

const budgets = [
  "Not decided yet",
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
];

const contactCards = [
  {
    id: "email",
    label: "EMAIL",
    title: CONTACT_EMAIL,
    description: "Send me a message anytime.",
    Icon: FaEnvelope,
    className: "contact-card-blue",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: "location",
    label: "LOCATION",
    title: CONTACT_LOCATION,
    description: "Working with clients remotely.",
    Icon: FaLocationDot,
    className: "contact-card-purple",
    href: undefined,
  },
  {
    id: "availability",
    label: "AVAILABILITY",
    title: CONTACT_AVAILABILITY,
    description: CONTACT_RESPONSE,
    Icon: FaClock,
    className: "contact-card-cyan",
    href: undefined,
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: FaLinkedin },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
];

/* =========================================
   TYPES + VALIDATION
   ========================================= */

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  subject: string;
  message: string;
  website: string; // honeypot (must stay empty)
  consent: boolean;
};

type FieldName = Exclude<keyof FormValues, "website">;
type FormErrors = Partial<Record<FieldName, string>>;

const emptyForm: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  subject: "",
  message: "",
  website: "",
  consent: false,
};

const namePattern = /^[\p{L}][\p{L}\s.'-]*$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneAllowed = /^[+\d\s()-]+$/;

// Removes control characters and collapses messy spacing
const clean = (value: string) =>
  value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");

const delay = (index: number): CSSProperties =>
  ({ "--contact-delay": `${index * 90}ms` }) as CSSProperties;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const name = values.name.trim();
  if (name.length < LIMITS.nameMin) {
    errors.name = "Please enter your full name.";
  } else if (name.length > LIMITS.nameMax) {
    errors.name = `Name must be ${LIMITS.nameMax} characters or fewer.`;
  } else if (!namePattern.test(name)) {
    errors.name = "Name can only contain letters, spaces, . ' and -";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email address is required.";
  } else if (email.length > LIMITS.emailMax || !emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = values.phone.trim();
  if (phone) {
    const digits = phone.replace(/\D/g, "").length;

    if (!phoneAllowed.test(phone)) {
      errors.phone = "Phone can only contain digits, +, spaces, ( ) and -";
    } else if (
      digits < LIMITS.phoneMinDigits ||
      digits > LIMITS.phoneMaxDigits
    ) {
      errors.phone = `Phone number must have ${LIMITS.phoneMinDigits}–${LIMITS.phoneMaxDigits} digits.`;
    }
  }

  if (values.company.trim().length > LIMITS.companyMax) {
    errors.company = `Company name must be ${LIMITS.companyMax} characters or fewer.`;
  }

  if (!values.projectType) {
    errors.projectType = "Please select a project type.";
  }

  const subject = values.subject.trim();
  if (subject.length < LIMITS.subjectMin) {
    errors.subject = `Subject must be at least ${LIMITS.subjectMin} characters.`;
  } else if (subject.length > LIMITS.subjectMax) {
    errors.subject = `Subject must be ${LIMITS.subjectMax} characters or fewer.`;
  }

  const message = values.message.trim();
  if (message.length < LIMITS.messageMin) {
    errors.message = `Message must be at least ${LIMITS.messageMin} characters (currently ${message.length}).`;
  } else if (message.length > LIMITS.messageMax) {
    errors.message = `Message must be ${LIMITS.messageMax} characters or fewer.`;
  }

  if (!values.consent) {
    errors.consent = "Please agree so I can contact you about your enquiry.";
  }

  return errors;
}

/* =========================================
   SMALL FIELD WRAPPER
   ========================================= */

type FieldProps = {
  name: FieldName;
  label: string;
  optional?: boolean;
  error?: string;
  counter?: string;
  children: ReactNode;
};

function Field({ name, label, optional, error, counter, children }: FieldProps) {
  return (
    <div className="contact-field">
      <div className="contact-field-head">
        <label htmlFor={`contact-${name}`}>
          {label}
          {optional && <span className="contact-optional">Optional</span>}
        </label>

        {counter && <span className="contact-counter">{counter}</span>}
      </div>

      {children}

      {error && (
        <span className="contact-error" id={`contact-${name}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}

/* =========================================
   COMPONENT
   ========================================= */

export default function Contact_Section() {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const lastSentRef = useRef(0);

  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sent" | "error" | "cooldown"
  >("idle");

  // Scroll reveal animation
  useEffect(() => {
    const root = anchorRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".contact-reveal")
    );

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    root.classList.add("contact-js");

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
    el.style.setProperty("--contact-mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--contact-my", `${event.clientY - rect.top}px`);
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = event.target;
    const name = target.name as keyof FormValues;

    let value: string | boolean =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : clean(target.value);

    // Type filtering: phone only accepts digits and + ( ) - space
    if (name === "phone" && typeof value === "string") {
      value = value.replace(/[^\d+\s()-]/g, "");
    }

    setValues((current) => ({ ...current, [name]: value }));

    if (name !== "website" && errors[name as FieldName]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }

    if (status !== "idle") setStatus("idle");
  };

  // Validate a single field when the user leaves it
  const handleBlur = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = event.target.name as keyof FormValues;
    if (name === "website") return;

    const fieldError = validate(values)[name as FieldName];
    setErrors((current) => ({ ...current, [name]: fieldError }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Honeypot: bots fill hidden fields, real people never see them
    if (values.website) {
      setValues(emptyForm);
      setStatus("sent");
      return;
    }

    const now = Date.now();
    if (now - lastSentRef.current < COOLDOWN_MS) {
      setStatus("cooldown");
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");

      // Move focus to the first invalid field
      const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const lines = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
      values.company.trim() ? `Company: ${values.company.trim()}` : "",
      `Project type: ${values.projectType}`,
      values.budget ? `Budget: ${values.budget}` : "",
      "",
      values.message.trim(),
    ].filter((line, index, all) => line !== "" || all[index - 1] !== "");

    // Opens the visitor's email app with the message filled in.
    // To send from your own server instead, replace this block with a fetch() call to your API route.
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      values.subject.trim()
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;

    lastSentRef.current = now;
    setStatus("sent");
    setValues(emptyForm);
    setErrors({});
  };

  const fieldProps = (name: FieldName) => ({
    id: `contact-${name}`,
    name,
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <Section className="contact-section" container={false}>
      <Container className="contact-container">
        <div id="contact" className="contact-anchor" ref={anchorRef}>
          {/* Background glow orbs */}
          <span className="contact-orb contact-orb-one" aria-hidden="true" />
          <span className="contact-orb contact-orb-two" aria-hidden="true" />

          {/* Section heading */}
          <div className="contact-heading contact-reveal">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
              GET IN TOUCH
              <span className="contact-eyebrow-line" />
            </span>

            <h2 className="contact-title">
              Let&apos;s work <span>together.</span>
            </h2>

            <p className="contact-description">
              Have a project, an idea or an opportunity? Share a few details
              and I&apos;ll get back to you with the next steps.
            </p>
          </div>

          <div className="contact-content">
            {/* Left: contact details */}
            <div className="contact-info">
              <div className="contact-card-list">
                {contactCards.map(
                  (
                    { id, label, title, description, Icon, className, href },
                    index
                  ) => {
                    const inner = (
                      <>
                        <div className="contact-card-icon">
                          <Icon size={20} aria-hidden="true" />
                        </div>

                        <div className="contact-card-copy">
                          <span className="contact-card-label">{label}</span>
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      </>
                    );

                    return href ? (
                      <a
                        key={id}
                        href={href}
                        className={`contact-card contact-reveal ${className}`}
                        style={delay(index)}
                        onMouseMove={handleMouseMove}
                      >
                        {inner}
                      </a>
                    ) : (
                      <article
                        key={id}
                        className={`contact-card contact-reveal ${className}`}
                        style={delay(index)}
                        onMouseMove={handleMouseMove}
                      >
                        {inner}
                      </article>
                    );
                  }
                )}
              </div>

              <div className="contact-social contact-reveal" style={delay(3)}>
                <span className="contact-social-label">FIND ME ONLINE</span>

                <div className="contact-social-list">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="contact-social-link"
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <form
              className="contact-form contact-reveal"
              style={delay(1)}
              onSubmit={handleSubmit}
              onMouseMove={handleMouseMove}
              noValidate
            >
              <div className="contact-form-top">
                <div>
                  <span className="contact-form-label">PROJECT ENQUIRY</span>
                  <h3 className="contact-form-title">
                    Tell me about your project
                  </h3>
                </div>

                <span className="contact-form-symbol" aria-hidden="true">
                  {"</>"}
                </span>
              </div>

              {/* Honeypot (hidden from people) */}
              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field-row">
                <Field name="name" label="Full name" error={errors.name}>
                  <input
                    {...fieldProps("name")}
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    maxLength={LIMITS.nameMax}
                    value={values.name}
                  />
                </Field>

                <Field name="email" label="Email address" error={errors.email}>
                  <input
                    {...fieldProps("email")}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={LIMITS.emailMax}
                    value={values.email}
                  />
                </Field>
              </div>

              <div className="contact-field-row">
                <Field
                  name="phone"
                  label="Phone"
                  optional
                  error={errors.phone}
                >
                  <input
                    {...fieldProps("phone")}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    maxLength={LIMITS.phoneMax}
                    value={values.phone}
                  />
                </Field>

                <Field
                  name="company"
                  label="Company"
                  optional
                  error={errors.company}
                >
                  <input
                    {...fieldProps("company")}
                    type="text"
                    autoComplete="organization"
                    placeholder="Company or brand"
                    maxLength={LIMITS.companyMax}
                    value={values.company}
                  />
                </Field>
              </div>

              <div className="contact-field-row">
                <Field
                  name="projectType"
                  label="Project type"
                  error={errors.projectType}
                >
                  <select
                    {...fieldProps("projectType")}
                    value={values.projectType}
                  >
                    <option value="">Select a type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  name="budget"
                  label="Budget range"
                  optional
                  error={errors.budget}
                >
                  <select {...fieldProps("budget")} value={values.budget}>
                    <option value="">Select a range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field
                name="subject"
                label="Subject"
                error={errors.subject}
                counter={`${values.subject.length}/${LIMITS.subjectMax}`}
              >
                <input
                  {...fieldProps("subject")}
                  type="text"
                  placeholder="What is this about?"
                  maxLength={LIMITS.subjectMax}
                  value={values.subject}
                />
              </Field>

              <Field
                name="message"
                label="Message"
                error={errors.message}
                counter={`${values.message.length}/${LIMITS.messageMax}`}
              >
                <textarea
                  {...fieldProps("message")}
                  rows={5}
                  placeholder="Tell me about your goals, timeline and any important details..."
                  maxLength={LIMITS.messageMax}
                  value={values.message}
                />
              </Field>

              <div className="contact-consent">
                <label className="contact-check" htmlFor="contact-consent">
                  <input
                    {...fieldProps("consent")}
                    type="checkbox"
                    checked={values.consent}
                  />
                  <span className="contact-check-box" aria-hidden="true">
                    <FaCheck size={10} />
                  </span>
                  <span className="contact-check-text">
                    I agree to be contacted about this enquiry. Your details
                    are only used to reply to you.
                  </span>
                </label>

                {errors.consent && (
                  <span className="contact-error" id="contact-consent-error">
                    {errors.consent}
                  </span>
                )}
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
                <FaPaperPlane size={14} aria-hidden="true" />
              </button>

              <div className="contact-status" role="status" aria-live="polite">
                {status === "sent" && (
                  <span className="contact-status-success">
                    <FaCheck size={12} aria-hidden="true" />
                    Your email app should open with the message ready to send.
                  </span>
                )}

                {status === "error" && (
                  <span className="contact-status-error">
                    <FaTriangleExclamation size={12} aria-hidden="true" />
                    Please fix the highlighted fields and try again.
                  </span>
                )}

                {status === "cooldown" && (
                  <span className="contact-status-error">
                    <FaTriangleExclamation size={12} aria-hidden="true" />
                    Please wait a few seconds before sending another message.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}