import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@hostifer/shared-ui";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CtaBand } from "@/components/site/cta-band";
import {
  Check,
  Eyebrow,
  FeatureCard,
  Inner,
  Section,
  SectionIntro,
} from "@/components/site/primitives";
import {
  CalendarIcon,
  FolderIcon,
  GearIcon,
  MailIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/site/icons";
import { brand, CONTENT_MAX } from "@/components/site/theme";

export const metadata: Metadata = pageMetadata({
  title: "Product overview",
  description:
    "Mail, files, calendars, contacts, and admin control — one subscription, one login, one team workspace.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "88px 32px 60px", textAlign: "center", position: "relative" }}>
        <Eyebrow>Product overview</Eyebrow>
        <h1
          className="hf-hero-h"
          style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 18px", color: brand.ink }}
        >
          Everything your company needs to work online.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: brand.secondary, maxWidth: 600, margin: "0 auto 32px" }}>
          Mail, files, calendars, contacts, and admin control — one subscription, one
          login, one team workspace.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          <Button asChild variant="primary">
            <Link href="/contact">Start free trial</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact sales</Link>
          </Button>
        </div>
      </div>

      {/* SUITE MODULES */}
      <div style={{ maxWidth: CONTENT_MAX, margin: "0 auto", padding: "40px 32px 96px" }}>
        <div className="hf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          <FeatureCard title="Mail" icon={<MailIcon />}>Professional mailboxes on your own domain, with webmail and full IMAP/SMTP support.</FeatureCard>
          <FeatureCard title="Drive" icon={<FolderIcon />}>Company file storage with team folders, sharing links, and granular permissions.</FeatureCard>
          <FeatureCard title="Calendar" icon={<CalendarIcon />}>Shared team calendars for meetings, deadlines, and company-wide events.</FeatureCard>
          <FeatureCard title="Contacts" icon={<UsersIcon />}>A shared company directory kept in sync across mail and mobile.</FeatureCard>
          <FeatureCard title="Admin Console" icon={<GearIcon />}>Manage users, domains, mailboxes, quotas, plans, and invoices in one place.</FeatureCard>
          <FeatureCard title="Security" icon={<ShieldIcon />}>Tenant isolation, encrypted connections, backups, and access control.</FeatureCard>
        </div>
      </div>

      {/* WORKSPACE MOCKUP */}
      <Section variant="surface">
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 34, letterSpacing: "-0.01em", margin: "0 0 14px", color: brand.ink }}>
            One workspace, every module at hand.
          </h2>
          <p style={{ fontSize: 16, color: brand.secondary, margin: "0 0 40px" }}>
            Switch between mail, files, calendar, and admin without leaving your browser.
          </p>
        </div>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <WorkspaceMock />
        </div>
      </Section>

      {/* ADMIN LIFECYCLE */}
      <Section>
        <Inner>
          <SectionIntro title="Setting up your workspace, step by step." />
          <div className="hf-steps" style={{ display: "flex", gap: 14 }}>
            {[
              ["01", "Create company", "Set up your workspace and choose shared or dedicated."],
              ["02", "Connect domain", "Point your domain's DNS to Hostifer Suite."],
              ["03", "Add users", "Invite your team and assign mailboxes."],
              ["04", "Assign quotas", "Set mailbox and storage limits per user or group."],
              ["05", "Manage billing", "Track invoices and pay by transfer or invoice."],
            ].map(([num, title, copy]) => (
              <div key={num} style={{ flex: 1, background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 18, padding: "24px 18px" }}>
                <div style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 22, background: brand.gradient, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", marginBottom: 12 }}>{num}</div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: brand.ink, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: brand.secondary, lineHeight: 1.5 }}>{copy}</div>
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      {/* SHARED VS DEDICATED */}
      <Section variant="surface">
        <Inner>
          <SectionIntro
            title="Shared or dedicated — your choice."
            copy="Most teams start shared. Larger organizations can move to a dedicated environment."
          />
          <div className="hf-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: `1px solid ${brand.border}`, borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#4a6cf7", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10 }}>Shared environment</div>
              <h3 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 20, margin: "0 0 14px", color: brand.ink }}>Efficient and cost-effective</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Check>Multi-tenant infrastructure with tenant isolation</Check>
                <Check>Fast provisioning, lower cost per user</Check>
                <Check>Ideal for SMEs, schools, and small teams</Check>
              </div>
            </div>
            <div style={{ borderRadius: 20, padding: 28, background: brand.dark }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#5ee8d3", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10 }}>Dedicated environment</div>
              <h3 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 20, margin: "0 0 14px", color: "#fff" }}>Isolated and customizable</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Check dark>Dedicated Nextcloud/mail environment</Check>
                <Check dark>Custom users, storage, and SLA discussion</Check>
                <Check dark>Ideal for larger organizations with stricter requirements</Check>
              </div>
            </div>
          </div>
        </Inner>
      </Section>

      <CtaBand title="Ready to give your team a complete workspace?" />
      <SiteFooter />
    </>
  );
}

function WorkspaceMock() {
  const label: React.CSSProperties = { fontSize: 11.5, fontWeight: 700, color: brand.muted, textTransform: "uppercase", marginBottom: 10 };
  const tile: React.CSSProperties = { background: "#fff", border: "1px solid #EEF1F6", borderRadius: 12, padding: 14 };
  return (
    <div style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 22, boxShadow: "0 30px 60px -20px rgba(16,20,28,0.16)", padding: 22 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#F0C14B" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E88C6B" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5FCB8F" }} />
        <div style={{ flex: 1, textAlign: "center", fontSize: 12, color: brand.muted, fontWeight: 600 }}>workspace.hostifer.dz</div>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ width: 64, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10, alignItems: "center", paddingTop: 6 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#2FD1B8,#22C7DE)" }} />
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 38, height: 38, borderRadius: 10, background: brand.borderSoft }} />
          ))}
        </div>
        <div style={{ flex: 1, background: "#F8FAFD", border: "1px solid #EEF1F6", borderRadius: 14, padding: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={tile}>
            <div style={label}>Inbox</div>
            {["linear-gradient(135deg,#4A6CF7,#7C5CFC)", "linear-gradient(135deg,#2FD1B8,#22C7DE)"].map((bg, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: bg }} />
                <div style={{ flex: 1, height: 6, borderRadius: 3, background: brand.border }} />
              </div>
            ))}
          </div>
          <div style={tile}>
            <div style={label}>Team Drive</div>
            {[0, 1].map((i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 16, height: 13, background: "#DCE1EA", borderRadius: 2 }} />
                <div style={{ flex: 1, height: 6, borderRadius: 3, background: brand.border }} />
              </div>
            ))}
          </div>
          <div style={tile}>
            <div style={label}>Calendar</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 3 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} style={{ height: 10, borderRadius: 2, background: i === 2 ? "linear-gradient(135deg,#2FD1B8,#4A6CF7)" : brand.borderSoft }} />
              ))}
            </div>
          </div>
          <div style={tile}>
            <div style={label}>Admin</div>
            <div style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 18, color: brand.ink }}>
              24 <span style={{ fontSize: 11, fontWeight: 600, color: brand.muted }}>users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
