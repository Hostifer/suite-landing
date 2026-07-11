import { brand } from "./theme";

/** Hostifer Suite logo mark — a gradient rounded square with an "H" monogram.
 *  Rendered in CSS so the site has no binary logo dependency. */
export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.25,
        background: brand.gradient,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: "#fff",
        fontFamily: brand.fontHeading,
        fontWeight: 800,
        fontSize: size * 0.56,
        lineHeight: 1,
      }}
    >
      H
    </span>
  );
}
