import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Eyebrow } from "@/components/site/primitives";
import { brand } from "@/components/site/theme";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contact sales",
  description:
    "Let's set up your company workspace. Tell us about your team and we'll help you get started — no international card required.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "72px 32px 8px", textAlign: "center" }}>
        <Eyebrow>Start your trial</Eyebrow>
        <h1 className="hf-hero-h" style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 42, lineHeight: 1.12, letterSpacing: "-0.02em", margin: "0 0 16px", color: brand.ink }}>
          Let&apos;s set up your company workspace.
        </h1>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: brand.secondary, maxWidth: 560, margin: "0 auto" }}>
          Tell us about your team and we&apos;ll help you get started — no international card
          required.
        </p>
      </div>

      {/* FORM + SIDEBAR */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 32px 96px" }}>
        <ContactForm />
      </div>

      <SiteFooter />
    </>
  );
}
