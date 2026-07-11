import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Badge, Button } from "@hostifer/shared-ui";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CtaBand } from "@/components/site/cta-band";
import {
  Eyebrow,
  Inner,
  MiniCard,
  Section,
  SectionIntro,
} from "@/components/site/primitives";
import { brand, CONTENT_MAX } from "@/components/site/theme";

export const metadata: Metadata = pageMetadata({
  title: "Email",
  description:
    "Professional company email, managed for you. Custom domain mailboxes, aliases, groups, webmail, and IMAP/SMTP.",
  path: "/email",
});

const FEATURES: [string, string][] = [
  [
    "Custom domain",
    "Mailboxes on yourcompany.dz, not a generic provider domain.",
  ],
  ["Mailboxes", "Individual mailboxes with admin-managed quotas."],
  ["Aliases", "Route addresses like contact@ to the right people."],
  ["Groups", "Shared team addresses like equipe@ or rh@."],
  ["Webmail", "A clean, fast webmail client, no install required."],
  ["IMAP / SMTP", "Connect Outlook, Apple Mail, or any mail client."],
  ["Spam protection", "Filtering that keeps inboxes clean by default."],
  [
    "Secure mail configuration",
    "SPF, DKIM, and DMARC set up correctly by default.",
  ],
];

export default function EmailPage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div
        style={{
          maxWidth: CONTENT_MAX,
          margin: "0 auto",
          padding: "80px 32px 40px",
          position: "relative",
        }}
      >
        <div
          className="hf-alt-row"
          style={{
            display: "flex",
            gap: 56,
            alignItems: "center",
            position: "relative",
          }}
        >
          <div style={{ flex: 1 }}>
            <Eyebrow tone={{ bg: "#e4f8f4", color: "#1e8a78" }}>Email</Eyebrow>
            <h1
              className="hf-hero-h"
              style={{
                fontFamily: brand.fontHeading,
                fontWeight: 800,
                fontSize: 44,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                margin: "0 0 18px",
                color: brand.ink,
              }}
            >
              Professional company email, managed for you.
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: brand.secondary,
                maxWidth: 460,
                margin: "0 0 30px",
              }}
            >
              Give every team member a mailbox on your own domain — provisioned,
              secured, and supported by Hostifer Suite.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Button asChild variant="primary">
                <Link href="/contact">Start free trial</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <EmailHeroMock />
          </div>
        </div>
      </div>

      {/* ADMIN MAILBOX MOCKUP */}
      <div
        style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 32px 96px" }}
      >
        <MailboxTable />
      </div>

      {/* FEATURES */}
      <Section variant="surface">
        <Inner>
          <SectionIntro title="Everything a business mailbox needs." />
          <div
            className="hf-grid-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 16,
            }}
          >
            {FEATURES.map(([title, copy]) => (
              <MiniCard key={title} title={title}>
                {copy}
              </MiniCard>
            ))}
          </div>
        </Inner>
      </Section>

      {/* MIGRATION / SUPPORT */}
      <Section>
        <Inner>
          <div
            className="hf-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: `1px solid ${brand.border}`,
                borderRadius: 20,
                padding: 32,
              }}
            >
              <h3
                style={{
                  fontFamily: brand.fontHeading,
                  fontWeight: 700,
                  fontSize: 22,
                  margin: "0 0 12px",
                  color: brand.ink,
                }}
              >
                Migrating from another provider?
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: brand.secondary,
                  margin: 0,
                }}
              >
                Our team can help plan and execute migration of existing
                mailboxes, contacts, and calendars — with minimal downtime for
                your team.
              </p>
            </div>
            <div
              style={{
                background: brand.dark,
                borderRadius: 20,
                padding: 32,
                color: "#fff",
              }}
            >
              <h3
                style={{
                  fontFamily: brand.fontHeading,
                  fontWeight: 700,
                  fontSize: 22,
                  margin: "0 0 12px",
                  color: "#fff",
                }}
              >
                Local, responsive support
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#a7adbb",
                  margin: 0,
                }}
              >
                Get help setting up domains, DNS records, and mail clients from
                a team that understands the Algerian market.
              </p>
            </div>
          </div>
        </Inner>
      </Section>

      <CtaBand title="Give your team a professional inbox this week." />
      <SiteFooter />
    </>
  );
}

function EmailHeroMock() {
  const rows: [string, string, string, string][] = [
    [
      "linear-gradient(135deg,#4A6CF7,#7C5CFC)",
      "Direction générale",
      "75%",
      "09:14",
    ],
    ["linear-gradient(135deg,#2FD1B8,#22C7DE)", "Comptabilité", "60%", "08:02"],
    [
      "linear-gradient(135deg,#22C7DE,#4A6CF7)",
      "RH & recrutement",
      "45%",
      "Hier",
    ],
  ];
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${brand.border}`,
        borderRadius: 20,
        boxShadow: "0 26px 52px -18px rgba(16,20,28,0.16)",
        padding: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#F0C14B",
          }}
        />
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#E88C6B",
          }}
        />
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#5FCB8F",
          }}
        />
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 11.5,
            color: brand.muted,
            fontWeight: 600,
          }}
        >
          mail.hostifer.dz
        </div>
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: brand.muted,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Inbox · amina@hostifer.dz
      </div>
      <div
        style={{
          background: "#F8FAFD",
          border: "1px solid #EEF1F6",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {rows.map(([bg, name, w, time], i) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderBottom:
                i < rows.length - 1 ? "1px solid #EEF1F6" : undefined,
              background: i === 0 ? "#fff" : undefined,
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: bg,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{ fontSize: 12.5, fontWeight: 700, color: brand.ink }}
              >
                {name}
              </div>
              <div
                style={{
                  height: 6,
                  width: w,
                  background: "#EEF1F6",
                  borderRadius: 3,
                  marginTop: 5,
                }}
              />
            </div>
            <span style={{ fontSize: 10.5, color: brand.muted }}>{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MailboxTable() {
  const th: React.CSSProperties = {
    textAlign: "left",
    padding: "11px 22px",
    fontSize: 11.5,
    fontWeight: 700,
    color: brand.muted,
    textTransform: "uppercase",
  };
  const td: React.CSSProperties = {
    padding: "11px 22px",
    fontSize: 13,
    color: brand.secondary,
  };
  const rows: {
    mailbox: string;
    type: string;
    quota: string;
    status: "Active" | "Invited";
  }[] = [
    {
      mailbox: "amina@hostifer.dz",
      type: "Mailbox",
      quota: "2.1 / 10 GB",
      status: "Active",
    },
    {
      mailbox: "contact@hostifer.dev",
      type: "Alias → 3 members",
      quota: "—",
      status: "Active",
    },
    {
      mailbox: "equipe@hostifer.dev",
      type: "Group → 12 members",
      quota: "—",
      status: "Active",
    },
    {
      mailbox: "sara@hostifer.app",
      type: "Mailbox",
      quota: "0.0 / 10 GB",
      status: "Invited",
    },
  ];
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${brand.border}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 20px 40px -18px rgba(15,23,42,0.1)",
      }}
    >
      <div
        style={{
          padding: "16px 22px",
          borderBottom: "1px solid #F0F2F6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: brand.ink }}>
          Admin · Mailboxes &amp; domains
        </div>
        <Badge tone="teal">● 4 domains connected</Badge>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}
        >
          <thead>
            <tr style={{ background: brand.bg }}>
              <th style={th}>Mailbox</th>
              <th style={th}>Type</th>
              <th style={th}>Quota</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.mailbox} style={{ borderTop: "1px solid #F0F2F6" }}>
                <td
                  style={{
                    ...td,
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: brand.ink,
                  }}
                >
                  {r.mailbox}
                </td>
                <td style={td}>{r.type}</td>
                <td style={td}>{r.quota}</td>
                <td style={{ padding: "11px 22px" }}>
                  <Badge tone={r.status === "Active" ? "teal" : "warning"}>
                    {r.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
