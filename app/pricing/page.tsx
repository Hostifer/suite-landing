import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CtaBand } from "@/components/site/cta-band";
import { Eyebrow, Inner, MiniCard, Section } from "@/components/site/primitives";
import { Accordion } from "@hostifer/shared-ui";
import { brand } from "@/components/site/theme";
import { PricingBilling } from "./pricing-billing";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "Simple plans, built for growing teams. 14-day free trial, invoice and bank transfer supported, CIB card payment planned.",
  path: "/pricing",
});

const COMPARISON: [string, string, string, string][] = [
  ["Users included", "Up to 10", "Up to 50", "Custom"],
  ["Storage", "Shared pool", "Larger pool", "Custom"],
  ["Environment", "Shared", "Shared", "Dedicated"],
  ["Support", "Standard", "Priority", "SLA discussion"],
  ["Admin console", "Included", "Included", "Included"],
];

const ADDONS: [string, string][] = [
  ["Additional storage", "Extend your shared storage pool as your team grows."],
  ["Additional mailboxes", "Add mailboxes beyond your plan's included user count."],
  ["Migration assistance", "Hands-on help moving existing mail and files over."],
  ["Dedicated environment", "Move to an isolated environment when you need it."],
];

const FAQ = [
  {
    question: "When will exact prices be available?",
    answer:
      "We're finalizing DZD pricing for the Algerian market. Contact sales for an estimate based on your team size.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, every plan starts with a 14-day free trial.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can move between shared plans, or move to a dedicated environment as you grow.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 32px 32px", textAlign: "center" }}>
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="hf-hero-h" style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 46, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 16px", color: brand.ink }}>
          Simple plans, built for growing teams.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: brand.secondary, maxWidth: 560, margin: "0 auto 28px" }}>
          14-day free trial. Invoice and bank transfer supported today · CIB card payment
          planned. Exact prices are being finalized for the Algerian market.
        </p>
      </div>

      <PricingBilling />

      {/* FEATURE COMPARISON */}
      <Section variant="surface" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 30, letterSpacing: "-0.01em", margin: "0 0 32px", textAlign: "center", color: brand.ink }}>
            Compare plan features
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table className="hf-cmp-table" style={{ width: "100%", minWidth: 600, borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "12px 16px" }} />
                  <th style={{ textAlign: "center", padding: "12px 16px", fontSize: 13.5, fontWeight: 800, color: brand.ink }}>Starter</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", fontSize: 13.5, fontWeight: 800, color: brand.ink, background: "#f1ebfe", borderRadius: "12px 12px 0 0" }}>Business</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", fontSize: 13.5, fontWeight: 800, color: brand.ink }}>Dedicated</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]}>
                    <td style={{ padding: "12px 16px", fontSize: 13.5, fontWeight: 600, color: brand.ink, borderTop: `1px solid ${brand.borderSoft}` }}>{row[0]}</td>
                    <td style={{ textAlign: "center", borderTop: `1px solid ${brand.borderSoft}`, color: brand.secondary }}>{row[1]}</td>
                    <td style={{ textAlign: "center", background: "#f8f4fe", borderTop: `1px solid ${brand.borderSoft}`, color: "#1e8a78", fontWeight: 700 }}>{row[2]}</td>
                    <td style={{ textAlign: "center", borderTop: `1px solid ${brand.borderSoft}`, color: brand.secondary }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ADD-ONS */}
      <Section style={{ padding: "80px 32px" }}>
        <Inner>
          <h2 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 30, letterSpacing: "-0.01em", margin: "0 0 32px", textAlign: "center", color: brand.ink }}>Add-ons</h2>
          <div className="hf-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {ADDONS.map(([title, copy]) => (
              <MiniCard key={title} title={title}>{copy}</MiniCard>
            ))}
          </div>
        </Inner>
      </Section>

      {/* PAYMENT METHODS */}
      <Section variant="surface" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 30, letterSpacing: "-0.01em", margin: "0 0 32px", color: brand.ink }}>Payment methods</h2>
          <div className="hf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, textAlign: "left" }}>
            <MiniCard title="Invoice">Available today for all plans.</MiniCard>
            <MiniCard title="Bank transfer">Available today, no international card needed.</MiniCard>
            <MiniCard
              title={
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  CIB card
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#b8860b", background: "#fdf4e1", padding: "3px 8px", borderRadius: 100 }}>Planned</span>
                </span>
              }
            >
              Direct CIB payment is planned for a future release.
            </MiniCard>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section style={{ padding: "80px 32px" }}>
        <Inner max={820}>
          <h2 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 30, letterSpacing: "-0.01em", margin: "0 0 32px", textAlign: "center", color: brand.ink }}>Pricing questions</h2>
          <Accordion items={FAQ} />
        </Inner>
      </Section>

      <CtaBand title="Start your 14-day free trial today." />
      <SiteFooter />
    </>
  );
}
