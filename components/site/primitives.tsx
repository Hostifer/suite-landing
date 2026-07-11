import type { CSSProperties, ReactNode } from "react";
import { Card } from "@hostifer/shared-ui";
import { brand, CONTENT_MAX } from "./theme";

/** Full-bleed section band. */
export function Section({
  children,
  variant = "plain",
  last = false,
  id,
  style,
}: {
  children: ReactNode;
  variant?: "plain" | "surface" | "dark";
  last?: boolean;
  id?: string;
  style?: CSSProperties;
}) {
  const bg =
    variant === "surface" ? "#fff" : variant === "dark" ? brand.dark : "transparent";
  return (
    <section
      id={id}
      style={{
        background: bg,
        color: variant === "dark" ? "#fff" : brand.ink,
        borderTop: variant === "surface" ? `1px solid ${brand.border}` : undefined,
        borderBottom: variant === "surface" ? `1px solid ${brand.border}` : undefined,
        padding: `96px 32px ${last ? "100px" : "96px"}`,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/** Centered max-width content wrapper. */
export function Inner({
  children,
  max = CONTENT_MAX,
  style,
}: {
  children: ReactNode;
  max?: number;
  style?: CSSProperties;
}) {
  return (
    <div style={{ maxWidth: max, margin: "0 auto", position: "relative", ...style }}>
      {children}
    </div>
  );
}

/** Small pill "eyebrow" above a hero/section heading. */
export function Eyebrow({
  children,
  tone,
}: {
  children: ReactNode;
  tone?: { bg: string; color: string };
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: tone ? tone.bg : "#fff",
        border: tone ? "none" : `1px solid ${brand.border}`,
        color: tone ? tone.color : "#4a6cf7",
        padding: "7px 14px",
        borderRadius: 100,
        fontSize: 12.5,
        fontWeight: 700,
        marginBottom: 20,
      }}
    >
      {children}
    </span>
  );
}

/** Centered heading + optional copy block that introduces a section. */
export function SectionIntro({
  title,
  copy,
  dark = false,
  max = 640,
}: {
  title: ReactNode;
  copy?: ReactNode;
  dark?: boolean;
  max?: number;
}) {
  return (
    <div style={{ maxWidth: max, margin: "0 auto 48px", textAlign: "center" }}>
      <h2
        style={{
          fontFamily: brand.fontHeading,
          fontWeight: 700,
          fontSize: 36,
          letterSpacing: "-0.01em",
          margin: copy ? "0 0 14px" : 0,
          color: dark ? "#fff" : brand.ink,
        }}
      >
        {title}
      </h2>
      {copy && (
        <p style={{ fontSize: 16, color: dark ? "#a7adbb" : brand.secondary, margin: 0 }}>
          {copy}
        </p>
      )}
    </div>
  );
}

/** Bordered feature card with an optional gradient icon tile. */
export function FeatureCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <Card style={{ padding: 26 }}>
      {icon && (
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            background: brand.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
            color: "#fff",
            fontFamily: brand.fontHeading,
            fontWeight: 800,
          }}
        >
          {icon}
        </div>
      )}
      <h3
        style={{
          fontFamily: brand.fontHeading,
          fontWeight: 700,
          fontSize: 18,
          margin: "0 0 8px",
          color: brand.ink,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: brand.secondary, margin: 0 }}>
        {children}
      </p>
    </Card>
  );
}

/** A single bordered box for compact feature/use-case grids. */
export function MiniCard({
  title,
  children,
  dark = false,
}: {
  title: ReactNode;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? "rgba(255,255,255,0.05)" : "#fff",
        border: dark ? "1px solid rgba(255,255,255,0.1)" : `1px solid ${brand.border}`,
        borderRadius: 16,
        padding: 20,
      }}
    >
      <div
        style={{
          fontSize: 14.5,
          fontWeight: 700,
          color: dark ? "#fff" : brand.ink,
          marginBottom: children ? 6 : 0,
        }}
      >
        {title}
      </div>
      {children && (
        <div
          style={{
            fontSize: 13,
            color: dark ? "#a7adbb" : brand.secondary,
            lineHeight: 1.5,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/** Checkmark list item. */
export function Check({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 13.5,
        color: dark ? "#fff" : brand.ink,
        fontWeight: 600,
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: 5,
          background: dark ? "rgba(255,255,255,0.14)" : "#e4f8f4",
          color: dark ? "#5ee8d3" : "#1e8a78",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          flexShrink: 0,
        }}
      >
        ✓
      </span>
      {children}
    </div>
  );
}

/** Browser-window chrome wrapper used for product mockups. */
export function BrowserChrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${brand.border}`,
        borderRadius: 22,
        boxShadow: "0 30px 60px -20px rgba(16,20,28,0.16)",
        padding: 22,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#F0C14B" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E88C6B" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5FCB8F" }} />
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 12,
            color: brand.muted,
            fontWeight: 600,
          }}
        >
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}
