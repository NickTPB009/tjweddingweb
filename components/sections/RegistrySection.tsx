import Image from "next/image";
import Link from "next/link";

export default function RegistrySection() {
  return (
    <section style={{ padding: "0 24px 56px" }}>
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          height: 360,
          background: "#ddd",
        }}
      >
        <Image
          src="/images/registry-bg.png"
          alt="Registry background"
          fill
          className="object-cover"
          priority={false}
        />

        {/* overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.22)",
          }}
        />

        {/* centered content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 520, color: "white" }}>
            <div
              style={{
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontSize: 13,
                marginBottom: 12,
                opacity: 0.95,
              }}
            >
              REGISTRY
            </div>

            <p
              style={{
                margin: "0 0 18px",
                fontSize: 13,
                lineHeight: 1.6,
                opacity: 0.95,
              }}
            >
              Your presence is the most cherished gift. Should you wish to
              contribute, we’ve created a honeymoon registry to help us embark
              on a memorable adventure to the Amalfi Coast.
            </p>

            <Link
              href="/registry"
              style={{
                display: "inline-block",
                padding: "12px 22px",
                borderRadius: 999,
                background: "rgba(245, 241, 232, 0.75)",
                color: "#222",
                textDecoration: "none",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: 11,
              }}
            >
              GO TO REGISTRY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
