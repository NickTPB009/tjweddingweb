"use client";

import React from "react";
import { useI18n } from "../i18n/useI18n";

export default function DetailsInfoGrid() {
  const { t } = useI18n();

  const howToItems = [
    t("details.howToGetThere.option1"),
    t("details.howToGetThere.option2"),
    t("details.howToGetThere.option3"),
  ];

  const day2 = [
    {
      time: t("details.infogrid.schedule.day2.item1.time"),
      text: t("details.infogrid.schedule.day2.item1.text"),
    },
    {
      time: t("details.infogrid.schedule.day2.item2.time"),
      text: t("details.infogrid.schedule.day2.item2.text"),
    },
    {
      time: t("details.infogrid.schedule.day2.item3.time"),
      text: t("details.infogrid.schedule.day2.item3.text"),
    },
    {
      time: t("details.infogrid.schedule.day2.item4.time"),
      text: t("details.infogrid.schedule.day2.item4.text"),
    },
    {
      time: t("details.infogrid.schedule.day2.item5.time"),
      text: t("details.infogrid.schedule.day2.item5.text"),
    },
    {
      time: t("details.infogrid.schedule.day2.item6.time"),
      text: t("details.infogrid.schedule.day2.item6.text"),
    },
    {
      time: t("details.infogrid.schedule.day2.item7.time"),
      text: t("details.infogrid.schedule.day2.item7.text"),
    },
    {
      time: t("details.infogrid.schedule.day2.item8.time"),
      text: t("details.infogrid.schedule.day2.item8.text"),
    },
  ];

  return (
    <section className="pb-10 sm:pb-14 lg:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {/* LEFT CARD */}
          <div className="rounded-2xl border border-black/10 bg-[#f4f2ee] p-5 sm:p-6 text-[#333]">
            <div className="text-center uppercase tracking-[0.12em] text-[11px] sm:text-xs opacity-80">
              {t("details.info.leftTitle")}
            </div>

            <div className="mt-4 space-y-3 text-[15px] sm:text-base leading-relaxed">
              <p className="m-0 break-words">
                {t("details.howToGetThere.intro")}
              </p>
              <p className="m-0 break-words">
                {t("details.howToGetThere.accommodation")}
              </p>

              <div className="pt-2 font-semibold text-sm sm:text-base">
                {t("details.howToGetThere.optionsTitle")}
              </div>

              <ol className="m-0 list-decimal pl-5 space-y-2">
                {howToItems.map((item, i) => (
                  <li key={i} className="break-words">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-2xl border border-black/10 bg-[#f4f2ee] p-5 sm:p-6 text-[#333]">
            <div className="text-center uppercase tracking-[0.12em] text-[11px] sm:text-xs opacity-80">
              {t("details.info.rightTitle")}
            </div>

            <div className="mt-4 space-y-6 text-[15px] sm:text-base leading-relaxed">
              {/* Day 1 */}
              <section>
                <div className="font-semibold">
                  {t("details.infogrid.schedule.day1.date")}
                </div>
                <div className="mt-1 italic opacity-80">
                  {t("details.infogrid.schedule.day1.note")}
                </div>

                <p className="mt-3 m-0 break-words">
                  <strong>
                    {t("details.infogrid.schedule.day1.eventTitle")}
                  </strong>
                  <br />
                  {t("details.infogrid.schedule.day1.body")}
                  <br />
                  {t("details.infogrid.schedule.day1.dress")}
                </p>
              </section>

              {/* Day 2 */}
              <section>
                <div className="font-semibold">
                  {t("details.infogrid.schedule.day2.date")}
                </div>

                <div className="mt-3 space-y-2">
                  {day2.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[90px_1fr] gap-3 rounded-xl bg-white/45 px-3 py-2 border border-black/5"
                    >
                      <div className="font-semibold whitespace-nowrap">
                        {row.time}
                      </div>
                      <div className="break-words">{row.text}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
