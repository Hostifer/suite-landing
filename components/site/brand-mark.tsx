import Image from "next/image";

export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/Hostifer%20Suite%20Logo.png"
      alt=""
      width={size}
      height={size}
      aria-hidden
      style={{
        width: size,
        height: size,
        display: "block",
        flexShrink: 0,
        objectFit: "contain",
      }}
    />
  );
}
