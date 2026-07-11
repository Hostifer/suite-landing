import Link from "next/link";
import { Button } from "@hostifer/shared-ui";
import { brand } from "./theme";

/** Dark gradient call-to-action band used at the bottom of every marketing page. */
export function CtaBand({ title }: { title: string }) {
  return (
    <section
      style={{
        background: brand.ctaGradient,
        color: "#fff",
        padding: "100px 32px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: brand.fontHeading,
          fontWeight: 800,
          fontSize: 36,
          letterSpacing: "-0.01em",
          margin: "0 auto 28px",
          maxWidth: 640,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
        <Button asChild variant="primary">
          <Link href="/contact">Start free trial</Link>
        </Button>
        <Button asChild variant="dark-outline">
          <Link href="/contact">Contact sales</Link>
        </Button>
      </div>
    </section>
  );
}
