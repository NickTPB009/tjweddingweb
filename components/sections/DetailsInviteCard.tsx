"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/useI18n";

export default function DetailsInviteCard() {
  const { t } = useI18n();

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#7e7661] text-white text-center px-5 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="mx-auto w-full max-w-xl text-[15px] sm:text-base leading-relaxed opacity-95">
            <p className="m-0 mb-5 sm:mb-6 break-words">
              {t("details.invite.p1")}
            </p>
            <p className="m-0 break-words">{t("details.invite.ceremony")}</p>
          </div>

          <div className="mt-7 sm:mt-9 flex justify-center">
            <Link
              href="/rsvp"
              className="inline-flex w-full sm:w-auto sm:min-w-[320px] max-w-full items-center justify-center rounded-full bg-[rgba(245,241,232,0.75)] px-6 py-3 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#222] shadow-sm transition hover:bg-[rgba(245,241,232,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {t("details.invite.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
