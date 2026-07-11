"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@hostifer/shared-ui";
import { brand, CONTENT_MAX } from "@/components/site/theme";

type Plan = {
  eyebrow: string;
  price: string;
  sub: string;
  copy: string;
  features: string[];
  cta: string;
  variant: "muted" | "primary";
  dark?: boolean;
  popular?: boolean;
};

function plans(billingLabel: string): Plan[] {
  return [
    {
      eyebrow: "Starter",
      price: "Coming soon",
      sub: `per user / ${billingLabel}`,
      copy: "For small teams getting started. Shared environment, mail + cloud workspace.",
      features: ["Shared environment", "Business email + cloud drive", "Standard support", "Invoice / bank transfer billing"],
      cta: "Start trial",
      variant: "muted",
    },
    {
      eyebrow: "Business",
      price: "Coming soon",
      sub: `per user / ${billingLabel}`,
      copy: "For growing SMEs. More users and storage, priority support.",
      features: ["Larger user & storage limits", "Priority support", "Advanced admin controls", "Invoice / bank transfer billing"],
      cta: "Contact us",
      variant: "primary",
      dark: true,
      popular: true,
    },
    {
      eyebrow: "Dedicated",
      price: "Talk to sales",
      sub: "custom pricing",
      copy: "Dedicated Nextcloud/mail environment with custom users and storage.",
      features: ["Dedicated environment", "Custom users/storage", "SLA & support discussion", "Invoice / bank transfer billing"],
      cta: "Talk to sales",
      variant: "muted",
    },
  ];
}

export function PricingBilling() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const billingLabel = billing;

  const pillActive: React.CSSProperties = { background: brand.ink, color: "#fff" };
  const pillIdle: React.CSSProperties = { background: "transparent", color: brand.secondary };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 100, padding: 5 }}>
          <button type="button" onClick={() => setBilling("monthly")} style={{ padding: "9px 20px", borderRadius: 100, fontSize: 13.5, fontWeight: 700, cursor: "pointer", border: 0, ...(billing === "monthly" ? pillActive : pillIdle) }}>
            Monthly
          </button>
          <button type="button" onClick={() => setBilling("yearly")} style={{ padding: "9px 20px", borderRadius: 100, fontSize: 13.5, fontWeight: 700, cursor: "pointer", border: 0, display: "flex", alignItems: "center", gap: 6, ...(billing === "yearly" ? pillActive : pillIdle) }}>
            Yearly
            <span style={{ fontSize: 11, fontWeight: 700, color: "#1e8a78", background: "#e4f8f4", padding: "2px 7px", borderRadius: 100 }}>Save</span>
          </button>
        </div>
        <p style={{ fontSize: 12.5, color: brand.muted, margin: "14px 0 0" }}>
          Showing {billingLabel} billing · prices coming soon either way
        </p>
      </div>

      <div style={{ maxWidth: CONTENT_MAX, margin: "0 auto", padding: "0 32px 40px" }}>
        <div className="hf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "stretch" }}>
          {plans(billingLabel).map((p) => (
            <div
              key={p.eyebrow}
              style={{
                background: p.dark ? brand.dark : "#fff",
                border: p.dark ? "none" : `1px solid ${brand.border}`,
                borderRadius: 22,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: p.dark ? "0 24px 48px -20px rgba(15,23,42,0.35)" : undefined,
              }}
            >
              {p.popular && (
                <div style={{ position: "absolute", top: 20, right: 20, fontSize: 11, fontWeight: 700, color: brand.dark, background: "linear-gradient(135deg,#2FD1B8,#4A6CF7)", padding: "5px 11px", borderRadius: 100 }}>
                  Most popular
                </div>
              )}
              <div style={{ fontSize: 12.5, fontWeight: 700, color: p.dark ? "#5ee8d3" : "#4a6cf7", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10 }}>{p.eyebrow}</div>
              <div style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 24, color: p.dark ? "#fff" : brand.ink, marginBottom: 4 }}>{p.price}</div>
              <div style={{ fontSize: 12.5, color: p.dark ? "#a7adbb" : brand.muted, marginBottom: 20 }}>{p.sub}</div>
              <p style={{ fontSize: 14, color: p.dark ? "#a7adbb" : brand.secondary, lineHeight: 1.5, margin: "0 0 20px" }}>{p.copy}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 24, flex: 1 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ fontSize: 13, color: p.dark ? "#fff" : brand.ink, fontWeight: 600 }}>✓ {f}</div>
                ))}
              </div>
              <Button asChild variant={p.variant === "primary" ? "primary" : "secondary"} style={{ justifyContent: "center", width: "100%" }}>
                <Link href="/contact">{p.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
