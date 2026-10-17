
import type { ReactNode } from "react";
import Container from "../container/Container";
import "./Section.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
}

export default function Section({
  children,
  className = "",
  container = true,
}: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      {container ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
