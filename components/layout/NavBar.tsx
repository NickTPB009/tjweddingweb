"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/components/i18n/useI18n";

export default function NavBar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#6f6f6f",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            height: "84px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Link
              href="/"
              style={{
                fontSize: "36px",
                lineHeight: 1,
                textDecoration: "none",
                color: "white",
                fontFamily:
                  '"Century Schoolbook","Century Schoolbook L","New Century Schoolbook","Times New Roman",serif',
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              T&amp;J
            </Link>

            <span
              className="hidden sm:inline"
              style={{
                fontSize: "14px",
                letterSpacing: "0.05em",
                opacity: 0.9,
              }}
            >
              July 18th, 2026
            </span>
          </div>

          {/* Right - Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{
              gap: "56px",
              fontSize: "13px",
              letterSpacing: "0.18em",
            }}
          >
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              {t("nav.home")}
            </Link>
            <Link
              href="/our-story"
              style={{ color: "white", textDecoration: "none" }}
            >
              {t("nav.ourStory")}
            </Link>
            <Link
              href="/details"
              style={{ color: "white", textDecoration: "none" }}
            >
              {t("nav.details")}
            </Link>
            <Link
              href="/rsvp"
              style={{ color: "white", textDecoration: "none" }}
            >
              {t("nav.rsvp")}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden ${open ? "block" : "hidden"}`}>
        <nav className="border-t border-white/15 px-6 py-2">
          <ul className="flex flex-col">
            <li>
              <Link
                href="/"
                className="block rounded-md px-2 py-2 text-sm tracking-[0.18em] hover:bg-white/10"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/our-story"
                className="block rounded-md px-2 py-2 text-sm tracking-[0.18em] hover:bg-white/10"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                {t("nav.ourStory")}
              </Link>
            </li>
            <li>
              <Link
                href="/details"
                className="block rounded-md px-2 py-2 text-sm tracking-[0.18em] hover:bg-white/10"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                {t("nav.details")}
              </Link>
            </li>
            <li>
              <Link
                href="/rsvp"
                className="block rounded-md px-2 py-2 text-sm tracking-[0.18em] hover:bg-white/10"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                {t("nav.rsvp")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
