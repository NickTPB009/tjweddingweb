"use client";

import Image from "next/image";
import { useI18n } from "@/components/i18n/useI18n";

export default function TravelStayHero() {
  const { t } = useI18n();

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px]">
          <Image
            src="/images/details/castle.png"
            alt="Travel & Stay"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 980px"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/15" />

          {/* Kicker */}
          <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
            <div className="inline-flex items-center rounded-full bg-black/30 px-3 py-2 backdrop-blur-[2px]">
              <span
                className="uppercase tracking-[0.12em] text-white font-semibold"
                style={{ fontSize: "clamp(12px, 2.2vw, 18px)" }}
              >
                {t("travel.hero.kicker")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
