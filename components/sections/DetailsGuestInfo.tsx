"use client";

import React from "react";
import { useI18n } from "../i18n/useI18n";

export default function DetailsGuestInfo() {
  const { t } = useI18n();

  return (
    <section className="mt-10">
      <div className="rounded-[20px] border border-[#d9d4ce] bg-[#f5f1eb] px-8 py-10 md:px-12 md:py-12">
        {/* Title */}
        <h2 className="mb-10 text-center text-[12px] uppercase tracking-[0.28em] text-[#7d7770]">
          {t("details.guestInfo.title")}
        </h2>

        <div className="space-y-10 text-[18px] leading-[2.1] text-[#3d3d3d]">
          {/* Toastmaster */}
          <div>
            <h3 className="mb-4 text-[24px] font-semibold text-[#222]">
              {t("details.guestInfo.toastmasterTitle")}
            </h3>

            <p className="mb-6">{t("details.guestInfo.toastmasterBody")}</p>

            <div className="space-y-1">
              <p>
                <span className="font-semibold">
                  {t("details.guestInfo.toastmasterLabel")}
                </span>{" "}
                Linus Ekeblad
              </p>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:linus.ekeblad@outlook.com"
                  className="underline underline-offset-4 hover:opacity-70 transition"
                >
                  linus.ekeblad@outlook.com
                </a>
              </p>

              <p>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a
                  href="tel:+46702411110"
                  className="underline underline-offset-4 hover:opacity-70 transition"
                >
                  +46 70 241 11 10
                </a>
              </p>
            </div>
          </div>

          {/* Tradition */}
          <div>
            <h3 className="mb-4 text-[24px] font-semibold text-[#222]">
              {t("details.guestInfo.traditionTitle")}
            </h3>

            <p className="mb-3">{t("details.guestInfo.traditionBride")}</p>

            <p>{t("details.guestInfo.traditionGroom")}</p>
          </div>

          {/* Dress Code */}
          <div>
            <h3 className="mb-4 text-[24px] font-semibold text-[#222]">
              {t("details.guestInfo.dressCodeTitle")}
            </h3>

            <p className="mb-3">{t("details.guestInfo.dressCode")}</p>

            <p>{t("details.guestInfo.whiteNote")}</p>
          </div>

          {/* Gifts */}
          <div>
            <h3 className="mb-4 text-[24px] font-semibold text-[#222]">
              {t("details.guestInfo.giftsTitle")}
            </h3>

            <p>{t("details.guestInfo.giftsBody")}</p>
          </div>

          {/* Final Note */}
          <div className="pt-4">
            <p className="text-center italic text-[#6e6a65]">
              {t("details.guestInfo.finalNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
