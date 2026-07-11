import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { brand, CONTENT_MAX } from "./theme";

const COLUMNS: {
  heading: string;
  links: { label: string; href?: string }[];
}[] = [
  {
    heading: "Product",
    links: [
      { label: "Product overview", href: "/product" },
      { label: "Email", href: "/email" },
      { label: "Cloud Drive", href: "/drive" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Security", href: "/#security" },
      { label: "Contact sales", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of service", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "contact@hostifer.dev", href: "mailto:contact@hostifer.dev" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      style={{
        background: brand.dark,
        color: "#fff",
        padding: "64px 32px 32px",
      }}
    >
      <div style={{ maxWidth: CONTENT_MAX, margin: "0 auto" }}>
        <div
          className="hf-grid-5"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 32,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <BrandMark size={30} />
              <span
                style={{
                  fontFamily: brand.fontHeading,
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Hostifer Suite
              </span>
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: "#a7adbb",
                lineHeight: 1.6,
                maxWidth: 260,
                margin: 0,
              }}
            >
              Hostifer Suite provides managed email, cloud files, and
              collaboration workspaces for Algerian companies.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: ".04em",
                  marginBottom: 16,
                }}
              >
                {col.heading}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {col.links.map((link) => {
                  if (!link.href) {
                    return (
                      <span
                        key={link.label}
                        style={{ fontSize: 13.5, color: "#a7adbb" }}
                      >
                        {link.label}
                      </span>
                    );
                  }
                  const external = /^(mailto:|https?:)/.test(link.href);
                  const style = { fontSize: 13.5, color: "#a7adbb" };
                  return external ? (
                    <a key={link.label} href={link.href} style={style}>
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} style={style}>
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            fontSize: 12.5,
            color: "#7c8494",
          }}
        >
          © 2026 Hostifer Suite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
