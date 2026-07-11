import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { brand } from "./theme";

export type LegalSection = { heading: string; body: ReactNode };

/** Shared layout for simple legal/policy pages (Terms, Privacy). */
export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <SiteHeader />
      <div
        style={{ maxWidth: 820, margin: "0 auto", padding: "72px 32px 96px" }}
      >
        <p
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            color: "#4a6cf7",
            textTransform: "uppercase",
            letterSpacing: ".06em",
            margin: "0 0 12px",
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontFamily: brand.fontHeading,
            fontWeight: 800,
            fontSize: 40,
            letterSpacing: "-0.02em",
            margin: "0 0 10px",
            color: brand.ink,
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: 13, color: brand.muted, margin: "0 0 32px" }}>
          Last updated: {lastUpdated}
        </p>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: brand.secondary,
            margin: "0 0 40px",
          }}
        >
          {intro}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map((section) => (
            <section key={section.heading}>
              <h2
                style={{
                  fontFamily: brand.fontHeading,
                  fontWeight: 700,
                  fontSize: 20,
                  margin: "0 0 10px",
                  color: brand.ink,
                }}
              >
                {section.heading}
              </h2>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: brand.secondary,
                }}
              >
                {section.body}
              </div>
            </section>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            padding: 20,
            background: "#fff",
            border: `1px solid ${brand.border}`,
            borderRadius: 16,
            fontSize: 14,
            color: brand.secondary,
            lineHeight: 1.6,
          }}
        >
          Questions about this page? Contact us at{" "}
          <a
            href="mailto:contact@hostifer.dev"
            style={{ color: "#4a6cf7", fontWeight: 700 }}
          >
            contact@hostifer.dev
          </a>
          .
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
