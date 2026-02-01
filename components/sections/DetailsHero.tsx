import Image from "next/image";

export default function DetailsHero() {
  return (
    <section className="pt-4 sm:pt-6 lg:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px]">
          <Image
            src="/images/details/hero.png"
            alt="Details hero"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 980px"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/35" />

          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <div
              className="uppercase tracking-[0.12em] text-white drop-shadow"
              style={{
                fontSize: "clamp(18px, 4vw, 34px)",
              }}
            >
              THE DETAILS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
