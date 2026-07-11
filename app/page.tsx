import Link from "next/link";
import { Badge, Button, ProgressBar } from "@hostifer/shared-ui";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CtaBand } from "@/components/site/cta-band";
import {
  Eyebrow,
  FeatureCard,
  Inner,
  MiniCard,
  Section,
  SectionIntro,
} from "@/components/site/primitives";
import {
  CalendarIcon,
  FolderIcon,
  GearIcon,
  MailIcon,
  ShieldIcon,
} from "@/components/site/icons";
import { brand, CONTENT_MAX } from "@/components/site/theme";
import { HomeFaq } from "./_sections/home-faq";

const heading = (size: number, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: brand.fontHeading,
  fontWeight: 700,
  fontSize: size,
  letterSpacing: "-0.01em",
  color: brand.ink,
  margin: 0,
  ...extra,
});

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div style={{ maxWidth: CONTENT_MAX, margin: "0 auto", padding: "80px 32px 60px", position: "relative" }}>
        <div
          className="hf-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 60,
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            <Eyebrow>Made for Algerian companies</Eyebrow>
            <h1
              className="hf-hero-h"
              style={{
                fontFamily: brand.fontHeading,
                fontWeight: 800,
                fontSize: 52,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                margin: "0 0 20px",
                color: brand.ink,
              }}
            >
              Your company workspace, hosted for Algeria.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: brand.secondary, maxWidth: 480, margin: "0 0 32px" }}>
              Professional email, cloud files, collaboration, and admin control in one
              simple SaaS platform.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Button asChild variant="primary">
                <Link href="/contact">Start free trial</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
            <p style={{ fontSize: 13, color: brand.muted, margin: "18px 0 0" }}>
              14-day free trial · no international card required
            </p>
          </div>

          <HeroMock />
        </div>
      </div>

      {/* TRUST STRIP */}
      <div style={{ borderTop: `1px solid ${brand.border}`, borderBottom: `1px solid ${brand.border}`, background: "#fff", padding: "28px 32px" }}>
        <div
          style={{
            maxWidth: CONTENT_MAX,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div style={{ fontSize: 14.5, fontWeight: 700, color: brand.secondary, maxWidth: 340 }}>
            Built for Algerian SMEs, agencies, schools, clinics, offices, and startups.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Badge tone="teal">Local billing</Badge>
            <Badge tone="blue">Business email</Badge>
            <Badge tone="purple">Cloud files</Badge>
            <Badge tone="cyan">Admin control</Badge>
            <Badge tone="neutral">Data residency focus</Badge>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <Section>
        <Inner>
          <SectionIntro title="Business tools should not be this complicated." />
          <div className="hf-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {[
              "International subscriptions are hard to pay for locally.",
              "Email and file tools are often fragmented across providers.",
              "Self-hosting mail and cloud storage is technically complex.",
              "Companies need local support and clearer data control.",
            ].map((text, i) => (
              <div key={i} style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 18, padding: 24 }}>
                <div style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 20, color: "#dce1ea", marginBottom: 10 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 14.5, lineHeight: 1.55, color: brand.ink, fontWeight: 600 }}>{text}</div>
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      {/* PRODUCT SUITE */}
      <Section variant="surface">
        <Inner>
          <SectionIntro
            title="One suite for your company's daily work."
            copy="Everything a team needs to work online, in a single subscription."
          />
          <div className="hf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            <FeatureCard title="Mail" icon={<MailIcon />}>Custom domain email, webmail, aliases, and groups.</FeatureCard>
            <FeatureCard title="Drive" icon={<FolderIcon />}>File storage, sharing links, team folders, and permissions.</FeatureCard>
            <FeatureCard title="Collaboration" icon={<CalendarIcon />}>Calendar, contacts, and shared team workspaces.</FeatureCard>
            <FeatureCard title="Admin Console" icon={<GearIcon />}>Users, domains, mailboxes, quotas, and plans in one place.</FeatureCard>
            <FeatureCard title="Security" icon={<ShieldIcon />}>Backups, access control, tenant isolation, and monitoring.</FeatureCard>
            <div
              style={{
                borderRadius: 20,
                padding: 26,
                background: brand.gradient,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 18, margin: "0 0 8px", color: "#fff" }}>
                See the full product
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: "0 0 16px" }}>
                Explore every module in detail.
              </p>
              <Button asChild variant="dark" size="small" style={{ alignSelf: "flex-start" }}>
                <Link href="/product">Product overview</Link>
              </Button>
            </div>
          </div>
        </Inner>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Inner>
          <SectionIntro title="From company domain to working team workspace." max={640} />
          <div className="hf-steps" style={{ display: "flex", gap: 16 }}>
            {[
              ["01", "Choose a plan", "Pick shared or dedicated based on your team size."],
              ["02", "Add your company domain", "Connect your existing domain or get help choosing one."],
              ["03", "Create your users", "Invite your team and assign mailboxes in bulk."],
              ["04", "Start using mail & cloud workspace", "Your team is live — mail, files, and calendars ready."],
            ].map(([num, title, copy]) => (
              <div key={num} style={{ flex: 1, background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 18, padding: "26px 22px" }}>
                <div style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 26, background: brand.gradient, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", marginBottom: 14 }}>
                  {num}
                </div>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: brand.ink, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13.5, color: brand.secondary, lineHeight: 1.5 }}>{copy}</div>
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      {/* EMAIL HIGHLIGHT */}
      <Section variant="surface">
        <Inner>
          <div className="hf-alt-row" style={{ display: "flex", gap: 64, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <Eyebrow tone={{ bg: "#e4f8f4", color: "#1e8a78" }}>Email</Eyebrow>
              <h2 style={heading(32, { margin: "0 0 16px" })}>Professional email for every team member.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {["Custom domain mailboxes", "Webmail, IMAP & SMTP support", "Aliases and groups", "Spam protection", "Admin-controlled provisioning"].map((f) => (
                  <FeatureDot key={f}>{f}</FeatureDot>
                ))}
              </div>
              <Link href="/email" style={{ color: "#4a6cf7", fontSize: 14.5, fontWeight: 700 }}>Explore Email →</Link>
            </div>
            <div style={{ flex: 1 }}>
              <InboxMock />
            </div>
          </div>
        </Inner>
      </Section>

      {/* DRIVE HIGHLIGHT */}
      <Section>
        <Inner>
          <div className="hf-alt-row" style={{ display: "flex", gap: 64, alignItems: "center", flexDirection: "row-reverse" }}>
            <div style={{ flex: 1 }}>
              <Eyebrow tone={{ bg: "#e9effe", color: "#2456c9" }}>Cloud Drive</Eyebrow>
              <h2 style={heading(32, { margin: "0 0 16px" })}>Secure files, shared across your company.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {["Team folders with permissions", "Secure sharing links", "Calendar and contacts", "Desktop and mobile sync compatibility", "Managed workspace operations"].map((f) => (
                  <FeatureDot key={f} color="#4a6cf7">{f}</FeatureDot>
                ))}
              </div>
              <Link href="/drive" style={{ color: "#4a6cf7", fontSize: 14.5, fontWeight: 700 }}>Explore Cloud Drive →</Link>
            </div>
            <div style={{ flex: 1 }}>
              <DriveMock />
            </div>
          </div>
        </Inner>
      </Section>

      {/* LOCAL ADVANTAGE */}
      <Section variant="surface">
        <Inner>
          <SectionIntro title="Designed around Algerian business realities." />
          <div className="hf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {[
              ["DZD-friendly invoicing", "Built with Algerian payment and invoicing realities in mind."],
              ["Bank transfer payment", "Pay by invoice or bank transfer, no international card needed."],
              ["Local & regional hosting", "Data residency focus, with infrastructure close to your users."],
              ["Local support", "Support that understands the Algerian market and language mix."],
              ["Dedicated environments", "Available for companies with stricter isolation requirements."],
              ["Built for SMEs & teams", "Sized and priced for small and mid-sized professional teams."],
            ].map(([title, copy]) => (
              <div key={title} style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 18, padding: 24 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: brand.ink, marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 13.5, color: brand.secondary, lineHeight: 1.5 }}>{copy}</div>
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      {/* SECURITY */}
      <Section id="security" variant="dark">
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(74,108,247,0.25),transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -140, left: -100, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,rgba(47,209,184,0.2),transparent 70%)" }} />
        <Inner>
          <SectionIntro
            dark
            title="Secure by design, managed for you."
            copy="Calm, sensible protections — not a cybersecurity dashboard."
          />
          <div className="hf-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {[
              ["Tenant isolation", "Each company's data is kept separate."],
              ["Encrypted connections", "Traffic to mail and cloud services is encrypted in transit."],
              ["Backups", "Regular backups across mail and files."],
              ["Access control", "Admin-managed roles and permissions."],
              ["Audit logs", "Track key admin actions across your workspace."],
              ["Secure mail configuration", "SPF, DKIM and DMARC set up correctly by default."],
              ["Monitoring", "Infrastructure is monitored to catch issues early."],
              ["Optional dedicated environments", "For companies with stricter requirements."],
            ].map(([title, copy]) => (
              <MiniCard key={title} dark title={title}>{copy}</MiniCard>
            ))}
          </div>
        </Inner>
      </Section>

      {/* PRICING PREVIEW */}
      <Section>
        <Inner>
          <SectionIntro
            title="Simple plans, built for growing teams."
            copy="14-day free trial. Invoice and bank transfer supported · CIB payment planned."
          />
          <div className="hf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "stretch" }}>
            <PlanCard eyebrow="Starter" price="Coming soon" copy="For small teams getting started. Shared environment, mail + cloud workspace." features={["Shared environment", "Mail + cloud workspace", "Standard support"]} cta="Start trial" ctaVariant="muted" />
            <PlanCard dark popular eyebrow="Business" price="Coming soon" copy="For growing SMEs. More users and storage, priority support." features={["Larger user & storage limits", "Priority support", "Advanced admin controls"]} cta="Contact us" ctaVariant="primary" />
            <PlanCard eyebrow="Dedicated" price="Talk to sales" copy="Dedicated Nextcloud/mail environment with custom users and storage." features={["Dedicated environment", "Custom users/storage", "SLA & support discussion"]} cta="Talk to sales" ctaVariant="muted" />
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/pricing" style={{ color: "#4a6cf7", fontSize: 14.5, fontWeight: 700 }}>See full pricing & comparison →</Link>
          </div>
        </Inner>
      </Section>

      {/* COMPARISON */}
      <Section variant="surface">
        <Inner>
          <SectionIntro title="How Hostifer Suite compares." copy="An honest look — every option has trade-offs." />
          <ComparisonTable />
        </Inner>
      </Section>

      {/* USE CASES */}
      <Section>
        <Inner>
          <SectionIntro title="Built for how Algerian teams actually work." />
          <div className="hf-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {[
              ["SME", "SMEs", "#e9effe", "#2456c9"],
              ["AG", "Agencies", "#f1ebfe", "#6b3fd9"],
              ["ED", "Schools & training centers", "#e4f8f4", "#1e8a78"],
              ["MD", "Clinics & medical offices", "#e1f5f9", "#0e7a90"],
              ["AC", "Accounting & legal offices", "#fdf4e1", "#b8860b"],
              ["ST", "Startups", "#e9effe", "#2456c9"],
              ["AS", "Associations", "#f1ebfe", "#6b3fd9"],
              ["DT", "Distributed teams", "#e4f8f4", "#1e8a78"],
            ].map(([mark, label, bg, color]) => (
              <div key={label} style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 16, padding: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, color, fontWeight: 800, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  {mark}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: brand.ink }}>{label}</div>
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      {/* FAQ */}
      <Section id="faq" variant="surface">
        <Inner max={820}>
          <SectionIntro title="Frequently asked questions" />
          <HomeFaq />
        </Inner>
      </Section>

      <CtaBand title="Give your team a complete workspace without the international payment headache." />
      <SiteFooter />
    </>
  );
}

/* ---------- local presentational helpers ---------- */

function FeatureDot({ children, color = "#2fd1b8" }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: brand.ink, fontWeight: 600 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
      {children}
    </div>
  );
}

function PlanCard({
  eyebrow,
  price,
  copy,
  features,
  cta,
  ctaVariant,
  dark = false,
  popular = false,
}: {
  eyebrow: string;
  price: string;
  copy: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "muted";
  dark?: boolean;
  popular?: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? brand.dark : "#fff",
        border: dark ? "none" : `1px solid ${brand.border}`,
        borderRadius: 22,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: dark ? "0 24px 48px -20px rgba(15,23,42,0.35)" : undefined,
      }}
    >
      {popular && (
        <div style={{ position: "absolute", top: 20, right: 20, fontSize: 11, fontWeight: 700, color: brand.dark, background: "linear-gradient(135deg,#2FD1B8,#4A6CF7)", padding: "5px 11px", borderRadius: 100 }}>
          Most popular
        </div>
      )}
      <div style={{ fontSize: 12.5, fontWeight: 700, color: dark ? "#5ee8d3" : "#4a6cf7", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10 }}>{eyebrow}</div>
      <div style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 22, color: dark ? "#fff" : brand.ink, marginBottom: 8 }}>{price}</div>
      <p style={{ fontSize: 14, color: dark ? "#a7adbb" : brand.secondary, lineHeight: 1.5, margin: "0 0 20px" }}>{copy}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 24, flex: 1 }}>
        {features.map((f) => (
          <div key={f} style={{ fontSize: 13, color: dark ? "#fff" : brand.ink, fontWeight: 600 }}>✓ {f}</div>
        ))}
      </div>
      <Button asChild variant={ctaVariant === "primary" ? "primary" : "secondary"} style={{ justifyContent: "center", width: "100%" }}>
        <Link href="/contact">{cta}</Link>
      </Button>
    </div>
  );
}

function ComparisonTable() {
  const cols = ["Hostifer Suite", "M365 / Google Workspace", "Self-hosted Nextcloud + Mail", "Classic VPS hosting"];
  const rows: [string, string, string, string, string][] = [
    ["Local billing", "Yes", "Limited", "N/A", "N/A"],
    ["Managed business email", "Yes", "Yes", "Self-managed", "Self-managed"],
    ["Cloud file workspace", "Yes", "Yes", "Yes", "DIY"],
    ["Admin console", "Yes", "Yes", "Basic", "None"],
    ["Local support", "Yes", "Limited", "None", "None"],
    ["Technical complexity", "Low", "Low", "High", "High"],
    ["Data residency focus", "Yes", "Varies", "Possible", "Possible"],
    ["Cost predictability", "High", "FX-exposed", "Variable", "Variable"],
  ];
  const cell: React.CSSProperties = { textAlign: "center", borderTop: `1px solid ${brand.borderSoft}`, color: brand.secondary, padding: "12px 16px", fontSize: 13.5 };
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="hf-cmp-table" style={{ width: "100%", minWidth: 720, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "14px 16px" }} />
            <th style={{ textAlign: "center", padding: "14px 16px", background: "#f1ebfe", borderRadius: "12px 12px 0 0", fontSize: 13.5, fontWeight: 800, color: brand.ink }}>{cols[0]}</th>
            {cols.slice(1).map((c) => (
              <th key={c} style={{ textAlign: "center", padding: "14px 16px", fontSize: 13.5, fontWeight: 700, color: brand.secondary }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td style={{ padding: "12px 16px", fontSize: 13.5, fontWeight: 600, color: brand.ink, borderTop: `1px solid ${brand.borderSoft}` }}>{row[0]}</td>
              <td style={{ ...cell, background: "#f8f4fe", color: "#1e8a78", fontWeight: 700 }}>{row[1]}</td>
              <td style={cell}>{row[2]}</td>
              <td style={cell}>{row[3]}</td>
              <td style={cell}>{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- hero + module mockups ---------- */

function HeroMock() {
  const cardBox: React.CSSProperties = { background: "#F8FAFD", border: "1px solid #EEF1F6", borderRadius: 14, padding: 14 };
  const label: React.CSSProperties = { fontSize: 11.5, fontWeight: 700, color: brand.muted, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10 };
  const avatar = (bg: string): React.CSSProperties => ({ width: 22, height: 22, borderRadius: "50%", background: bg, flexShrink: 0 });
  return (
    <div className="hf-hero-visual" style={{ position: "relative" }}>
      <div style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 24, boxShadow: "0 30px 60px -20px rgba(16,20,28,0.18)", padding: 20, position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#F0C14B" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E88C6B" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5FCB8F" }} />
          <div style={{ flex: 1, textAlign: "center", fontSize: 12, color: brand.muted, fontWeight: 600 }}>workspace.hostifer.dz</div>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: brand.borderSoft, borderRadius: 10, padding: "8px 12px", fontSize: 12, fontWeight: 700, color: brand.ink }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: "linear-gradient(135deg,#2FD1B8,#22C7DE)" }} />Mail
          </div>
          {["Drive", "Calendar", "Admin"].map((t) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", fontSize: 12, fontWeight: 600, color: brand.muted }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: "#DCE1EA" }} />{t}
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 10 }}>
          <div style={cardBox}>
            <div style={label}>Inbox</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {["linear-gradient(135deg,#4A6CF7,#7C5CFC)", "linear-gradient(135deg,#2FD1B8,#22C7DE)", "linear-gradient(135deg,#22C7DE,#4A6CF7)"].map((bg, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={avatar(bg)} />
                  <div style={{ flex: 1, height: 7, borderRadius: 4, background: brand.border }} />
                  <span style={{ fontSize: 10, color: brand.muted }}>{["9:14", "9:02", "8:47"][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={cardBox}>
            <div style={label}>Storage</div>
            <div style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 22, color: brand.ink }}>64%</div>
            <div style={{ margin: "8px 0" }}>
              <ProgressBar value={64} />
            </div>
            <div style={{ fontSize: 11, color: brand.muted }}>1.2 TB of 2 TB used</div>
          </div>
          <div style={cardBox}>
            <div style={label}>Team</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {["linear-gradient(135deg,#2FD1B8,#4A6CF7)", "linear-gradient(135deg,#4A6CF7,#7C5CFC)", "linear-gradient(135deg,#7C5CFC,#22C7DE)"].map((bg, i) => (
                <span key={i} style={{ width: 24, height: 24, borderRadius: "50%", background: bg, border: "2px solid #fff", marginRight: -8 }} />
              ))}
              <span style={{ width: 24, height: 24, borderRadius: "50%", background: "#EEF1F6", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: brand.secondary }}>+21</span>
            </div>
            <div style={{ fontSize: 11, color: brand.muted, marginTop: 8 }}>24 members</div>
          </div>
          <div style={cardBox}>
            <div style={label}>Domain</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2FD1B8" }} />
              <span style={{ fontSize: 12.5, fontWeight: 700, color: brand.ink }}>Connected</span>
            </div>
            <div style={{ fontSize: 11, color: brand.muted, fontFamily: "monospace" }}>hostifer.dz</div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: -18, right: -22, background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 14, padding: "10px 14px", boxShadow: "0 12px 24px -8px rgba(16,20,28,0.16)", zIndex: 3, fontSize: 12, fontWeight: 700, color: brand.ink, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 18, height: 18, borderRadius: 5, background: "#E4F8F4", color: "#1E8A78", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>✓</span>Mailbox provisioned
      </div>
      <div style={{ position: "absolute", bottom: -16, left: -20, background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 14, padding: "10px 14px", boxShadow: "0 12px 24px -8px rgba(16,20,28,0.16)", zIndex: 3, fontSize: 12, fontWeight: 700, color: brand.ink }}>
        Recent files · 3 shared today
      </div>
    </div>
  );
}

function InboxMock() {
  const rows: [string, string, string, string][] = [
    ["linear-gradient(135deg,#4A6CF7,#7C5CFC)", "Comptabilité", "70%", "08:41"],
    ["linear-gradient(135deg,#2FD1B8,#22C7DE)", "RH & recrutement", "55%", "Hier"],
    ["linear-gradient(135deg,#22C7DE,#4A6CF7)", "Direction générale", "80%", "Lun."],
  ];
  return (
    <div style={{ background: "#F8FAFD", border: `1px solid ${brand.border}`, borderRadius: 20, padding: 18, boxShadow: "0 20px 40px -16px rgba(15,23,42,0.12)" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: brand.muted, marginBottom: 10 }}>Inbox · amina@hostifer.dz</div>
      <div style={{ background: "#fff", border: "1px solid #EEF1F6", borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
        {rows.map(([bg, name, w, time], i) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderBottom: i < rows.length - 1 ? "1px solid #F0F2F6" : undefined }}>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: bg }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: brand.ink }}>{name}</div>
              <div style={{ height: 6, width: w, background: "#EEF1F6", borderRadius: 3, marginTop: 5 }} />
            </div>
            <span style={{ fontSize: 10.5, color: brand.muted }}>{time}</span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: brand.muted, marginBottom: 10 }}>Admin · Mailboxes</div>
      <div style={{ background: "#fff", border: "1px solid #EEF1F6", borderRadius: 12, padding: "12px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 9 }}>
          <span style={{ fontWeight: 700, color: brand.ink }}>hostifer.dz</span>
          <span style={{ color: "#1e8a78", fontWeight: 700 }}>● Active</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: brand.secondary, marginBottom: 5 }}>
          <span>contact@ (alias)</span><span>3 members</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: brand.secondary }}>
          <span>equipe@ (group)</span><span>12 members</span>
        </div>
      </div>
    </div>
  );
}

function DriveMock() {
  const folder = { width: 20, height: 16, background: "#F0C14B", clipPath: "polygon(0 22%,38% 22%,46% 0,100% 0,100% 100%,0 100%)" } as React.CSSProperties;
  return (
    <div style={{ background: "#F8FAFD", border: `1px solid ${brand.border}`, borderRadius: 20, padding: 18, boxShadow: "0 20px 40px -16px rgba(15,23,42,0.12)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: brand.muted }}>Team Drive · /Contrats</div>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#2456c9", background: "#e9effe", padding: "4px 9px", borderRadius: 100 }}>Shared</span>
      </div>
      <div style={{ background: "#fff", border: "1px solid #EEF1F6", borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
        {[["Ressources humaines", "128 fichiers", true], ["Finance", "64 fichiers", true], ["Contrat_client_2026.pdf", "2.1 MB", false]].map(([name, meta, isFolder], i) => (
          <div key={name as string} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderBottom: i < 2 ? "1px solid #F0F2F6" : undefined }}>
            <span style={isFolder ? folder : { width: 18, height: 20, background: "#DCE1EA", borderRadius: 3 }} />
            <div style={{ flex: 1, fontSize: 12.5, fontWeight: 600, color: brand.ink }}>{name}</div>
            <span style={{ fontSize: 11, color: brand.muted }}>{meta}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {["linear-gradient(135deg,#2FD1B8,#4A6CF7)", "linear-gradient(135deg,#4A6CF7,#7C5CFC)", "linear-gradient(135deg,#7C5CFC,#22C7DE)"].map((bg, i) => (
            <span key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: bg, border: "2px solid #F8FAFD", marginRight: i < 2 ? -7 : 0 }} />
          ))}
        </div>
        <div style={{ fontSize: 11.5, color: brand.muted }}>1.4 TB of 2 TB used</div>
      </div>
    </div>
  );
}
