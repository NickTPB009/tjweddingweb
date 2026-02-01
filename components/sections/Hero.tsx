"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/components/i18n/useI18n";

export default function Hero() {
  const { t } = useI18n();

  const locationLines = t("home.hero.location").split("\n");

  return (
    <section className="relative w-full">
      <div className="relative h-[70vh] min-h-[520px] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]">
        <Image
          src="/images/hero1.png"
          alt="Wedding Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/45 sm:bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center text-white">
            <div className="mx-auto w-full max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
              <p className="opacity-95 leading-relaxed text-[clamp(18px,4.5vw,34px)]">
                {t("home.hero.invite")}
              </p>

              <p className="tracking-[0.04em] leading-snug text-[clamp(14px,3.2vw,26px)]">
                {t("home.hero.date")}
              </p>

              <div className="h-4 sm:h-6 md:h-10" />

              <p className="opacity-90 leading-relaxed text-[clamp(13px,2.4vw,20px)]">
                {locationLines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx !== locationLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
