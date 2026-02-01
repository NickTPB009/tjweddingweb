import Image from "next/image";

export default function RsvpHero() {
  return (
    <section className="pt-4 sm:pt-6 lg:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
          <Image
            src="/images/rsvp/hero.png"
            alt="RSVP hero"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 980px"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <div
              className="uppercase tracking-[0.14em] drop-shadow"
              style={{ fontSize: "clamp(18px, 4vw, 32px)" }}
            >
              RSVP
            </div>

            <div
              className="mt-2 sm:mt-3 opacity-95"
              style={{
                fontSize: "clamp(11px, 2.2vw, 14px)",
                letterSpacing: "0.06em",
              }}
            >
              Kindly respond by March 15th, 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
