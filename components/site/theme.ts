/** Shared brand tokens for the Hostifer Suite marketing site.
 *  Mirrors the design-system variables in @hostifer/shared-ui/styles.css so the
 *  marketing pages can reference them from inline styles. */
export const brand = {
  bg: "#f5f8fc",
  ink: "#10141c",
  secondary: "#4b5768",
  muted: "#8a96a8",
  border: "#e3e8f0",
  borderSoft: "#f0f2f6",
  dark: "#25262a",
  surface: "#ffffff",
  gradient: "linear-gradient(135deg,#2FD1B8,#4A6CF7 55%,#7C5CFC)",
  ctaGradient: "linear-gradient(135deg,#1a3a4d,#25262A 55%,#2a2140)",
  fontHeading: "'Sora', sans-serif",
} as const;

/** Max content width used across sections. */
export const CONTENT_MAX = 1280;
