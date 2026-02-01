"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "../i18n/useI18n";

export default function QuickLinks() {
  const { t } = useI18n();

  const items = [
    {
      title: t("quicklinks.story"),
      href: "/our-story",
      src: "/images/tiles/couple.png",
    },
    {
      title: t("quicklinks.details"),
      href: "/details",
      src: "/images/tiles/church1.png",
    },
    {
      title: t("quicklinks.rsvp"),
      href: "/rsvp",
      src: "/images/tiles/stamp1.png",
    },
    {
      title: t("quicklinks.gifts"),
      href: "/registry",
      src: "/images/tiles/weddinggift.png",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block overflow-hidden rounded-2xl bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 520px"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/35" />

                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <span className="text-white font-semibold uppercase tracking-[0.12em] text-[clamp(14px,2.2vw,20px)] leading-tight drop-shadow">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 group-hover:ring-white/20 transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
