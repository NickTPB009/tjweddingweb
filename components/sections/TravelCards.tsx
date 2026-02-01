"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "../i18n/useI18n";

function TravelCard({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageSide = "right", // desktop 时图片在左还是右
}: {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imageSide?: "left" | "right";
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-[#f4f2ee]">
      {/* ✅ mobile: 上下; md+: 左右 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div
          className={[
            "relative h-56 sm:h-64 md:h-auto md:min-h-[320px]",
            imageSide === "left" ? "md:order-1" : "md:order-2",
          ].join(" ")}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
          {/* 轻微遮罩让图片更“柔和婚礼感”（可删） */}
          <div className="absolute inset-0 bg-black/0 md:bg-black/0" />
        </div>

        {/* Text */}
        <div
          className={[
            "flex items-center justify-center p-5 sm:p-6 md:p-8",
            imageSide === "left" ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          <div className="w-full max-w-[460px] text-left text-[#333]">
            <div className="uppercase tracking-[0.14em] text-[11px] sm:text-xs opacity-80">
              {title}
            </div>

            <div className="mt-4 space-y-3 text-[15px] sm:text-base leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="m-0 break-words">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TravelCards() {
  const { t } = useI18n();

  return (
    <section className="pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:gap-6 lg:gap-7">
          {/* CARD 1 — Vikings */}
          <TravelCard
            title={t("travel.cards.vikings.title")}
            paragraphs={[
              t("travel.cards.vikings.p1"),
              t("travel.cards.vikings.p2"),
              t("travel.cards.vikings.p3"),
              t("travel.cards.vikings.p4"),
            ]}
            imageSrc="/images/details/sweden1.png"
            imageAlt={t("travel.cards.vikings.alt")}
            imageSide="right"
          />

          {/* CARD 2 — Empire (image left, text right) */}
          <TravelCard
            title={t("travel.cards.empire.title")}
            paragraphs={[t("travel.cards.empire.p1")]}
            imageSrc="/images/details/empire.png"
            imageAlt={t("travel.cards.empire.alt")}
            imageSide="left"
          />

          {/* CARD 3 — Lakes & Göta Canal */}
          <TravelCard
            title={t("travel.cards.lakes.title")}
            paragraphs={[
              t("travel.cards.lakes.p1"),
              t("travel.cards.lakes.p2"),
              t("travel.cards.lakes.p3"),
            ]}
            imageSrc="/images/details/lake.png"
            imageAlt={t("travel.cards.lakes.alt")}
            imageSide="right"
          />

          {/* CARD 4 — Coffee & Innovation (image left, text right) */}
          <TravelCard
            title={t("travel.cards.coffee.title")}
            paragraphs={[
              t("travel.cards.coffee.p1"),
              t("travel.cards.coffee.p2"),
              t("travel.cards.coffee.p3"),
            ]}
            imageSrc="/images/details/coffee2.png"
            imageAlt={t("travel.cards.coffee.alt")}
            imageSide="left"
          />
        </div>
      </div>
    </section>
  );
}
