"use client";

import Image from "next/image";
import Link from "next/link";
import FooterBar from "../../components/layout/FooterBar";
import { useI18n } from "../../components/i18n/useI18n";

export default function OurStoryPage() {
  const { t } = useI18n();

  return (
    <>
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          {/* Top hero image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/our-story/hero.png"
              alt={t("ourStory.hero.alt")}
              width={1200}
              height={750}
              className="h-auto w-full"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Title */}
          <h2 className="mt-10 sm:mt-12 text-center uppercase tracking-[0.12em] text-xs sm:text-sm font-medium text-black/80">
            {t("ourStory.title")}
          </h2>

          {/* Content */}
          <div className="mt-6 text-[15px] sm:text-base leading-[1.9] text-[#222]">
            <Chapter
              title={t("ourStory.ch1.title")}
              text={t("ourStory.ch1.p1")}
            />
            <Chapter
              title={t("ourStory.ch2.title")}
              text={t("ourStory.ch2.p1")}
            />

            {/* Middle couple photo */}
            <div className="my-10 flex justify-center">
              <div className="w-full max-w-[360px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/our-story/couple.png"
                  alt={t("ourStory.couple.alt")}
                  width={900}
                  height={1100}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 85vw, 360px"
                />
              </div>
            </div>

            <Chapter
              title={t("ourStory.ch3.title")}
              text={t("ourStory.ch3.p1")}
            />
            <Chapter
              title={t("ourStory.ch4.title")}
              text={t("ourStory.ch4.p1")}
            />
            <Chapter
              title={t("ourStory.ch5.title")}
              text={t("ourStory.ch5.p1")}
            />
            <Chapter
              title={t("ourStory.ch6.title")}
              text={t("ourStory.ch6.p1")}
            />
            <Chapter
              title={t("ourStory.ch7.title")}
              text={t("ourStory.ch7.p1")}
            />
            <Chapter
              title={t("ourStory.ch8.title")}
              text={t("ourStory.ch8.p1")}
            />

            {/* RSVP button */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/rsvp"
                className="inline-flex items-center justify-center rounded-full bg-[#8a826f] px-7 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm uppercase tracking-[0.14em] text-white shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                {t("ourStory.rsvp")}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterBar />
    </>
  );
}

function Chapter({ title, text }: { title: string; text: string }) {
  return (
    <section className="mt-8 first:mt-0">
      <h3 className="mb-3 text-lg sm:text-xl font-semibold text-black">
        {title}
      </h3>
      <p className="m-0">{text}</p>
    </section>
  );
}
