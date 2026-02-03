"use client";

import React from "react";
import { useI18n } from "../i18n/useI18n";

export default function RegistryDashboard() {
  const { t } = useI18n();

  const descLines = [
    t("registry.desc1"),
    t("registry.desc2"),
    t("registry.desc3"),
  ].filter(Boolean);

  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Header */}
        <div className="text-center">
          <div className="uppercase tracking-[0.18em] text-xs opacity-70">
            {t("registry.kicker")}
          </div>

          <div
            className="mt-3 font-medium tracking-[0.08em] text-[#222]"
            style={{ fontSize: "clamp(22px, 3.5vw, 32px)" }}
          >
            {t("registry.title")}
          </div>

          <div className="mt-4 text-[15px] sm:text-base leading-relaxed opacity-85">
            {descLines.map((line, idx) => (
              <p key={idx} className="m-0 mt-2 first:mt-0">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Bank details */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[640px] rounded-2xl border border-black/10 bg-[#f4f2ee] p-5 sm:p-7">
            <div className="text-center uppercase tracking-[0.16em] text-[11px] sm:text-xs opacity-75">
              {t("registry.bankTitle")}
            </div>

            <div className="mt-5 grid gap-3 text-[15px] sm:text-base leading-relaxed text-[#333]">
              <InfoRow
                label={t("registry.accountName")}
                value="Karl Karlsson"
              />
              <InfoRow label={t("registry.bsb")} value="067 103" />
              <InfoRow label={t("registry.accountNumber")} value="1075 7427" />

              <div className="mt-2 rounded-xl border border-black/5 bg-white/55 px-4 py-3">
                <div className="text-xs uppercase tracking-[0.12em] opacity-70">
                  {t("registry.reference")}
                </div>
                <div className="mt-1 break-words">
                  {t("registry.referenceHint")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-3">
      <div className="text-xs uppercase tracking-[0.12em] opacity-70">
        {label}
      </div>
      <div className="font-medium break-words">{value}</div>
    </div>
  );
}
