import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Badge, Button, ProgressBar } from "@hostifer/shared-ui";
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
import { brand, CONTENT_MAX } from "@/components/site/theme";

export const metadata: Metadata = pageMetadata({
  title: "Cloud Drive",
  description:
    "Company files, organized and shared securely. Team folders, sharing links, and permissions on a managed Nextcloud-like environment.",
  path: "/drive",
});

const FEATURES: [string, string][] = [
  ["Team folders", "Organize files by department, project, or client with clear ownership."],
  ["Sharing links", "Send secure links to clients and partners without giving full access."],
  ["Permissions", "Fine-grained view/edit access at the folder or file level."],
  ["Calendar & contacts", "Shared calendars and a company-wide contacts directory."],
  ["Sync compatibility", "Works with desktop and mobile sync clients your team already uses."],
  ["Managed operations", "Updates, backups, and monitoring handled for you."],
];

export default function DrivePage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div style={{ maxWidth: CONTENT_MAX, margin: "0 auto", padding: "80px 32px 40px", position: "relative" }}>
        <div className="hf-alt-row" style={{ display: "flex", gap: 56, alignItems: "center", position: "relative" }}>
          <div style={{ flex: 1 }}>
            <Eyebrow tone={{ bg: "#e9effe", color: "#2456c9" }}>Cloud Drive</Eyebrow>
            <h1 className="hf-hero-h" style={{ fontFamily: brand.fontHeading, fontWeight: 800, fontSize: 44, lineHeight: 1.12, letterSpacing: "-0.02em", margin: "0 0 18px", color: brand.ink }}>
              Company files, organized and shared securely.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: brand.secondary, maxWidth: 460, margin: "0 0 30px" }}>
              Team folders, sharing links, and permissions — built on a Nextcloud-like
              environment, fully managed.
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
            <DriveHeroMock />
          </div>
        </div>
      </div>

      {/* FILE MANAGER MOCKUP */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 32px 96px" }}>
        <FileManagerMock />
      </div>

      {/* FEATURES */}
      <Section variant="surface">
        <Inner>
          <SectionIntro title="Everything a shared drive needs." />
          <div className="hf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {FEATURES.map(([title, copy]) => (
              <FeatureCard key={title} title={title}>{copy}</FeatureCard>
            ))}
          </div>
        </Inner>
      </Section>

      {/* COLLABORATION */}
      <Section>
        <Inner>
          <div className="hf-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "stretch" }}>
            <div style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 20, padding: 32 }}>
              <h3 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 22, margin: "0 0 12px", color: brand.ink }}>Built for daily collaboration</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: brand.secondary, margin: "0 0 16px" }}>
                Shared calendars, a company directory, and team folders work together so
                files, meetings, and people stay connected.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Check>Shared calendars across the company</Check>
                <Check>Company-wide contacts directory</Check>
                <Check>Desktop &amp; mobile sync clients</Check>
              </div>
            </div>
            <div style={{ background: brand.dark, borderRadius: 20, padding: 32, color: "#fff" }}>
              <h3 style={{ fontFamily: brand.fontHeading, fontWeight: 700, fontSize: 22, margin: "0 0 12px", color: "#fff" }}>Managed, not self-hosted</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#a7adbb", margin: 0 }}>
                No servers to patch or storage to provision — Hostifer Suite operates the
                environment so your team can focus on work.
              </p>
            </div>
          </div>
        </Inner>
      </Section>

      <CtaBand title="Give your team a shared drive that just works." />
      <SiteFooter />
    </>
  );
}

function folderIcon(size = 18): React.CSSProperties {
  return { width: size, height: size * 0.78, background: "#F0C14B", clipPath: "polygon(0 22%,38% 22%,46% 0,100% 0,100% 100%,0 100%)", flexShrink: 0 };
}

function DriveHeroMock() {
  const items: [string, string, boolean][] = [
    ["Ressources humaines", "128", true],
    ["Finance", "64", true],
    ["Contrat_client_2026.pdf", "2.1 MB", false],
  ];
  return (
    <div style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 20, boxShadow: "0 26px 52px -18px rgba(16,20,28,0.16)", padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#F0C14B" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E88C6B" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5FCB8F" }} />
        <div style={{ flex: 1, textAlign: "center", fontSize: 11.5, color: brand.muted, fontWeight: 600 }}>drive.hostifer.dz</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: brand.muted, textTransform: "uppercase" }}>Team Drive / Contrats</div>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: "#2456c9", background: "#e9effe", padding: "3px 8px", borderRadius: 100 }}>Shared</span>
      </div>
      <div style={{ background: "#F8FAFD", border: "1px solid #EEF1F6", borderRadius: 12, overflow: "hidden" }}>
        {items.map(([name, meta, isFolder], i) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderBottom: i < 2 ? "1px solid #EEF1F6" : undefined, background: i === 0 ? "#fff" : undefined }}>
            <span style={isFolder ? folderIcon(18) : { width: 16, height: 18, background: "#DCE1EA", borderRadius: 3 }} />
            <div style={{ flex: 1, fontSize: 12.5, fontWeight: 600, color: brand.ink }}>{name}</div>
            <span style={{ fontSize: 10.5, color: brand.muted }}>{meta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FileManagerMock() {
  const folders = ["Contrats", "Marketing", "RH", "Finance"];
  const th: React.CSSProperties = { textAlign: "left", padding: "8px 0", fontSize: 11, fontWeight: 700, color: brand.muted, textTransform: "uppercase" };
  const rows: { name: string; isFolder: boolean; shared: string; perm: string; permTone: "blue" | "neutral" | "teal"; size: string }[] = [
    { name: "Fournisseurs", isFolder: true, shared: "Finance team", perm: "Can edit", permTone: "blue", size: "—" },
    { name: "Bail_siège_2026.pdf", isFolder: false, shared: "Direction", perm: "Can view", permTone: "neutral", size: "1.4 MB" },
    { name: "Contrat_client_2026.pdf", isFolder: false, shared: "Public link", perm: "Link shared", permTone: "teal", size: "2.1 MB" },
  ];
  return (
    <div style={{ background: "#fff", border: `1px solid ${brand.border}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px -18px rgba(15,23,42,0.1)" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: 200, background: "#F8FAFD", borderRight: "1px solid #F0F2F6", padding: "18px 14px", flexShrink: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: brand.muted, textTransform: "uppercase", marginBottom: 12 }}>Team folders</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {folders.map((f, i) => (
              <div key={f} style={{ padding: "8px 10px", borderRadius: 8, background: i === 0 ? "#e9effe" : undefined, color: i === 0 ? "#2456c9" : brand.secondary, fontSize: 12.5, fontWeight: i === 0 ? 700 : 600 }}>{f}</div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 280, padding: "18px 22px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: brand.ink }}>Recent activity · Contrats</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {["linear-gradient(135deg,#2FD1B8,#4A6CF7)", "linear-gradient(135deg,#4A6CF7,#7C5CFC)"].map((bg, i) => (
                <span key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: bg, border: "2px solid #fff", marginRight: -7 }} />
              ))}
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#EEF1F6", border: "2px solid #fff", fontSize: 9, fontWeight: 700, color: brand.secondary, display: "flex", alignItems: "center", justifyContent: "center" }}>+9</span>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 420 }}>
              <thead>
                <tr>
                  <th style={th}>Name</th>
                  <th style={th}>Shared with</th>
                  <th style={th}>Permission</th>
                  <th style={th}>Size</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} style={{ borderTop: "1px solid #F0F2F6" }}>
                    <td style={{ padding: "10px 0", fontSize: 13, fontWeight: 600, color: brand.ink }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={r.isFolder ? folderIcon(16) : { width: 14, height: 16, background: "#DCE1EA", borderRadius: 2 }} />
                        {r.name}
                      </span>
                    </td>
                    <td style={{ padding: "10px 0", fontSize: 12.5, color: brand.secondary }}>{r.shared}</td>
                    <td style={{ padding: "10px 0" }}><Badge tone={r.permTone}>{r.perm}</Badge></td>
                    <td style={{ padding: "10px 0", fontSize: 12.5, color: brand.secondary }}>{r.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 16, background: "#F8FAFD", border: "1px solid #EEF1F6", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, fontWeight: 700, color: brand.ink, marginBottom: 8 }}>
              <span>Storage usage</span>
              <span>1.4 TB of 2 TB</span>
            </div>
            <ProgressBar value={70} />
          </div>
        </div>
      </div>
    </div>
  );
}
