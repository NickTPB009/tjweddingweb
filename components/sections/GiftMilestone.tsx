"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/useI18n";

const LEVELS = [200, 800, 1500, 2500] as const;

export default function GiftMilestone() {
  const { t } = useI18n();

  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const [adminOpen, setAdminOpen] = useState(false);
  const [pwd, setPwd] = useState("");
  const [tmpValue, setTmpValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [wrong, setWrong] = useState<string | null>(null);

  const [secretClicks, setSecretClicks] = useState(0);

  useEffect(() => {
    let alive = true;

    (async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/site-settings/gift-amount", {
          cache: "no-store",
        });
        const json = await res.json();
        if (!alive) return;

        if (json?.ok) setAmount(Number(json.value ?? 0));
        else console.error("GiftMilestone GET error:", json?.error);
      } catch (e) {
        console.error("GiftMilestone GET exception:", e);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const max = LEVELS[LEVELS.length - 1];
  const ratio = Math.max(0, Math.min(1, amount / max));

  const reachedIndex = useMemo(() => {
    let idx = -1;
    for (let i = 0; i < LEVELS.length; i++) if (amount >= LEVELS[i]) idx = i;
    return idx;
  }, [amount]);

  function openAdmin() {
    setAdminOpen(true);
    setPwd("");
    setTmpValue(String(amount));
    setWrong(null);
  }

  function closeAdmin() {
    setAdminOpen(false);
    setPwd("");
    setWrong(null);
    setSaving(false);
  }

  async function saveAmountToDB() {
    setWrong(null);

    const n = Number(tmpValue);
    if (!Number.isFinite(n) || n < 0) {
      setWrong("Invalid number.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/site-settings/gift-amount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd, value: n }),
      });

      const json = await res.json();
      if (!res.ok || !json?.ok) {
        setWrong(json?.error || "Save failed.");
        setSaving(false);
        return;
      }

      setAmount(Number(json.value ?? n));
      closeAdmin();
    } catch (e) {
      console.error(e);
      setWrong("Network error.");
      setSaving(false);
    }
  }

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 bg-[#f4f2ee] p-4 sm:p-6 lg:p-8">
          {/* Title */}
          <div className="text-center">
            <div
              className="select-none cursor-default uppercase tracking-[0.14em] text-[11px] sm:text-xs opacity-80"
              onClick={(e) => {
                if (!e.shiftKey) return;
                setSecretClicks((c) => {
                  const next = c + 1;
                  if (next >= 5) {
                    openAdmin();
                    return 0;
                  }
                  return next;
                });
              }}
            >
              {t("gifts.milestone.kicker")}
            </div>

            <div className="mt-2 text-sm sm:text-base opacity-90">
              {t("gifts.milestone.subtitle")}
            </div>
          </div>

          {/* Meter */}
          <div className="mt-5 sm:mt-6">
            <div className="h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-[#8a826f] transition-[width] duration-700 ease-out"
                style={{ width: `${ratio * 100}%` }}
              />
            </div>

            {loading && (
              <div className="mt-3 text-center text-xs opacity-60">
                Loading…
              </div>
            )}
          </div>

          {/* Levels */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {LEVELS.map((_, i) => {
              const reached = i <= reachedIndex;

              const labelKey =
                i === 0
                  ? "gifts.milestone.level1"
                  : i === 1
                    ? "gifts.milestone.level2"
                    : i === 2
                      ? "gifts.milestone.level3"
                      : "gifts.milestone.level4";

              return (
                <div
                  key={i}
                  className={[
                    "rounded-2xl border border-black/10 bg-white/55 px-3 py-4 text-center transition",
                    reached ? "opacity-100 -translate-y-[1px]" : "opacity-60",
                  ].join(" ")}
                >
                  <div className="uppercase tracking-[0.14em] text-[10px] sm:text-[11px] md:text-xs opacity-90 leading-snug">
                    {t(labelKey)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 你原来不显示金额的要求保持不变 */}
        </div>
      </div>

      {/* Admin modal */}
      {adminOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4"
          onClick={closeAdmin}
        >
          <div
            className="w-full max-w-[520px] rounded-2xl bg-[#f4f2ee] p-4 sm:p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] max-h-[85vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="uppercase tracking-[0.14em] text-xs opacity-80">
                Couple Admin
              </div>
              <div className="mt-2 text-sm sm:text-base opacity-85">
                Update received amount (hidden from guests)
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              <label className="grid gap-1.5">
                <span className="text-xs tracking-[0.06em]">Password</span>
                <input
                  type="password"
                  value={pwd}
                  onChange={(e) => {
                    setPwd(e.target.value);
                    setWrong(null);
                  }}
                  className="w-full rounded-xl border border-black/15 bg-white px-3 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="••••••"
                  disabled={saving}
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-xs tracking-[0.06em]">
                  Received (AUD)
                </span>
                <input
                  value={tmpValue}
                  onChange={(e) => setTmpValue(e.target.value)}
                  className="w-full rounded-xl border border-black/15 bg-white px-3 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="e.g. 400"
                  disabled={saving}
                />
              </label>

              {wrong && <div className="text-xs text-[#b00020]">{wrong}</div>}
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                className="rounded-full border border-black/15 bg-white/40 px-5 py-3 text-xs uppercase tracking-[0.12em] text-black"
                onClick={closeAdmin}
                disabled={saving}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-full bg-[#8a826f] px-5 py-3 text-xs uppercase tracking-[0.14em] text-white disabled:opacity-70"
                onClick={saveAmountToDB}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>

            <div className="mt-4 text-center text-xs opacity-65 leading-relaxed">
              Tip: Hold <strong>Shift</strong> and click the title 5 times to
              open.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
