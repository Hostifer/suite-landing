import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo";

export const alt =
  "Hostifer Suite — Your company workspace, hosted for Algeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#10141C",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ambient brand glows */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background:
              "radial-gradient(circle, rgba(74,108,247,0.45), rgba(74,108,247,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background:
              "radial-gradient(circle, rgba(47,209,184,0.4), rgba(47,209,184,0) 70%)",
          }}
        />

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 22,
              background:
                "linear-gradient(135deg,#2FD1B8,#4A6CF7 55%,#7C5CFC)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            H
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>Hostifer Suite</div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Your company workspace, hosted for Algeria.
          </div>
          <div style={{ fontSize: 30, color: "#A7ADBB", maxWidth: 860 }}>
            Professional email, cloud files, collaboration, and admin control —
            one simple platform.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["Business email", "Cloud drive", "Admin console"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontSize: 24,
                  color: "#E3E8F0",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#5EE8D3" }}>
            {SITE.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
