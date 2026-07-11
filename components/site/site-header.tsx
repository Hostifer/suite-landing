"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@hostifer/shared-ui";
import { BrandMark } from "./brand-mark";
import { brand, CONTENT_MAX } from "./theme";

const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/email", label: "Email" },
  { href: "/drive", label: "Cloud Drive" },
  { href: "/#security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(245,248,252,0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${brand.border}`,
      }}
    >
      <div
        style={{
          maxWidth: CONTENT_MAX,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}
        >
          <BrandMark />
          <span
            style={{
              fontFamily: brand.fontHeading,
              fontWeight: 700,
              fontSize: 17,
              color: brand.ink,
            }}
          >
            Hostifer{" "}
            <span
              className="hf-brand-name-suffix"
              style={{ fontWeight: 500, color: brand.secondary }}
            >
              Suite
            </span>
          </span>
        </Link>

        <nav
          className="hf-nav-links"
          style={{ display: "flex", alignItems: "center", gap: 26 }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              style={{
                color: isActive(link.href) ? brand.ink : brand.secondary,
                fontSize: 14.5,
                fontWeight: isActive(link.href) ? 700 : 600,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <Link
            href="/contact"
            className="hf-nav-links"
            style={{
              display: "flex",
              color: brand.ink,
              fontSize: 14,
              fontWeight: 700,
              padding: "10px 6px",
            }}
          >
            Contact sales
          </Link>
          <Button asChild variant="primary" size="small">
            <Link href="/contact">Start free trial</Link>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="hf-hamb"
            style={{
              display: "none",
              width: 38,
              height: 38,
              borderRadius: 10,
              border: `1px solid ${brand.border}`,
              background: "#fff",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 4,
              cursor: "pointer",
            }}
          >
            <span style={{ width: 16, height: 2, background: brand.ink, borderRadius: 2 }} />
            <span style={{ width: 16, height: 2, background: brand.ink, borderRadius: 2 }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: `1px solid ${brand.border}`,
            padding: "20px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 0",
                color: brand.ink,
                fontSize: 15,
                fontWeight: 700,
                borderBottom: `1px solid ${brand.borderSoft}`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 14,
              textAlign: "center",
              color: brand.ink,
              fontSize: 14.5,
              fontWeight: 700,
              padding: 12,
              border: "1.5px solid #dce1ea",
              borderRadius: 100,
            }}
          >
            Contact sales
          </Link>
        </div>
      )}
    </header>
  );
}
