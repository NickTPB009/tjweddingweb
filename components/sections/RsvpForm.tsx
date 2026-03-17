"use client";

import React, { useMemo, useState } from "react";
import { useI18n } from "@/components/i18n/useI18n";

const RSVP_DEADLINE = new Date(2026, 2, 30, 23, 59, 59);

const GUESTS: string[] = [
  "Alexandre Nogueira Jahnecke",
  "Alicia Sugita & Felipe Postigo",
  "Andressa Ribeiro & Gustavo Hermes",
  "Anita Andersson",
  "Andreas & Helen Andersson",
  "Arthur Granado",
  "Bethany Grace",
  "Bruna Tesolin",
  "Camilla & Jonas Åkerman",
  "Carla Barbieri",
  "Caroline Ludolf & Joaquim Castro",
  "Carolina Trevisan & Thiago Caldeira",
  "Carter & Wemi",
  "Daniel Malm",
  "Davve Tevell",
  "David & Megan Richardson",
  "Debora Zaltron",
  "Diogo Muramatsu & Mariana Dorta",
  "Duncan & John",
  "Eduardo Matt",
  "Edwin & Scott",
  "Ellen & Shaun Thompson",
  "Emerson Feliciano & Fabio Oliveira",
  "Erika Costa & Caio Paludo",
  "Ewerton Bacinello",
  "Fay",
  "Fegga Karlsson",
  "Fernanda Magalhães & Artur Xavier",
  "Franciele Ponciano",
  "Gabi Gatti",
  "Gaia Quinto",
  "Guilherme Pinotti Webber & Angel De Armani",
  "Gustavo Fineto",
  "Heath & Claire Roberts",
  "Helena & Stefan Revay",
  "Henrik Appelskog & Sandra",
  "Henrique Antunis",
  "Ihyanur",
  "Isabela Inojosa",
  "Jocke o Meilea Holmer",
  "Julia Santin",
  "Juliana Barzan",
  "Junior Donatto",
  "Lars Johansson",
  "Leandro Minello",
  "Leonardo Ferreira & Giselle",
  "Leticia Vilar",
  "Linus & Louise Ekeblad",
  "Lydia & Rob",
  "Magnus & Annelie Frostell",
  "Malin & Chris Ubilla",
  "Malin Holmer",
  "Margareth Laroca",
  "Markus Jonsson & Anniqa Sandell",
  "Mattias & Åsa Vernersson",
  "Neasa",
  "Nick & Melinda",
  "Niklas & Pernilla Nilsson",
  "Peter & Frida Matsson",
  "Per & Ingrid Fahrman",
  "Peterson Dias & Raquel Rios",
  "Pontus & Leah",
  "Raquel Ponciano & Marcio Emerson da Silva",
  "Raquel Veiga",
  "Rafael Almeida & Leticia Gomes",
  "Raphael Ponciano",
  "Regiane Mussa & Gustavo Marcelli",
  "Sabrina Zir & Osmar Loss",
  "Samantha Castro",
  "Sandro Dessou & Natasha Morisita",
  "Stuart & Sally",
  "Talita Sanper & Cassiano Bueno",
  "Ted Malm & Therese",
  "Thomas Killander & Carina",
  "Tiger & Freya Hjelm",
  "Vinicius Tomás",
  "Violeta Virgolino",
];

export default function RsvpForm() {
  const { t } = useI18n();

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [step, setStep] = useState<"choose" | "form">("choose");
  const [attendance, setAttendance] = useState<"attending" | "declined" | null>(
    null,
  );

  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [guestsNumber, setGuestsNumber] = useState("");
  const [roomType, setRoomType] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const NO_ROOM_VALUE = "No room needed";
  const needsRoom = attendance === "attending" && roomType !== NO_ROOM_VALUE;

  const guests = useMemo(() => GUESTS, []);

  const deadlineText = useMemo(() => {
    const yyyy = RSVP_DEADLINE.getFullYear();
    const mm = String(RSVP_DEADLINE.getMonth() + 1).padStart(2, "0");
    const dd = String(RSVP_DEADLINE.getDate()).padStart(2, "0");
    return `${15}/${mm}/${yyyy}`;
  }, []);

  const isClosed = useMemo(() => {
    const now = new Date();
    return now.getTime() > RSVP_DEADLINE.getTime();
  }, []);

  const submitLabel = useMemo(() => {
    if (attendance === "declined") return t("rsvp.submitDecline");
    return t("rsvp.submitAttend");
  }, [attendance, t]);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl bg-[#f7f5f1] border border-black/10 px-4 py-8 sm:px-8 sm:py-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          {/* Header */}
          <div className="text-center">
            <div className="uppercase tracking-[0.16em] text-xs opacity-80">
              {t("rsvp.title")}
            </div>
            <div className="mt-2 text-sm sm:text-base opacity-80">
              {t("rsvp.subtitle")}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs">
              <span className="opacity-70">{t("rsvp.deadlineLabel")}</span>
              <b>{deadlineText}</b>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (status === "submitting") return;

              if (isClosed) {
                alert("RSVP is closed. The deadline has passed.");
                return;
              }

              if (!attendance) {
                alert("Please choose: YES, WITH JOY or UNABLE TO ATTEND.");
                return;
              }

              if (step !== "form") {
                alert("Please choose an option first.");
                return;
              }

              if (!guestName) {
                alert("Please select your name.");
                return;
              }

              if (attendance === "attending") {
                if (!email) {
                  alert("Please enter your email.");
                  return;
                }
                if (!guestsNumber) {
                  alert("Please select guests number.");
                  return;
                }
                if (!roomType) {
                  alert("Please select room type.");
                  return;
                }
                if (needsRoom && (!checkin || !checkout)) {
                  alert("Please select check-in and check-out.");
                  return;
                }
              }

              const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;
              if (!endpoint) {
                alert(
                  "Missing Formspree URL. Please set NEXT_PUBLIC_FORMSPREE_URL in .env.local",
                );
                return;
              }

              setStatus("submitting");

              const formData = new FormData();
              formData.set("guestName", guestName);
              formData.set("attendance", attendance);

              if (attendance === "attending") {
                formData.set("email", email);
                formData.set("guestsNumber", guestsNumber);
                formData.set("roomType", roomType);

                // Only include dates if a room is needed
                if (needsRoom) {
                  formData.set("checkin", checkin);
                  formData.set("checkout", checkout);
                } else {
                  formData.set("checkin", "");
                  formData.set("checkout", "");
                }
              } else {
                formData.delete("email");
                formData.delete("guestsNumber");
                formData.delete("roomType");
                formData.delete("checkin");
                formData.delete("checkout");
              }

              try {
                const res = await fetch(endpoint, {
                  method: "POST",
                  body: formData,
                  headers: { Accept: "application/json" },
                });

                if (res.ok) {
                  setStatus("success");
                  setStep("choose");
                  setAttendance(null);
                  setGuestName("");
                  setEmail("");
                  setGuestsNumber("");
                  setRoomType("");
                  setCheckin("");
                  setCheckout("");
                } else {
                  alert("Something went wrong. Please try again.");
                  setStatus("idle");
                }
              } catch {
                alert("Network error. Please try again.");
                setStatus("idle");
              }
            }}
            className="mt-8 grid gap-5"
          >
            {/* Choice */}
            <div>
              <div className="text-center text-sm opacity-85">
                {t("rsvp.areYouJoining")}
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setAttendance("attending");
                    setStep("form");
                  }}
                  className={[
                    "rounded-full border px-4 py-3 text-xs uppercase tracking-[0.14em] transition",
                    "bg-[rgba(245,241,232,0.9)] text-[#222] border-black/15",
                    attendance === "attending"
                      ? "bg-[#8a826f] text-white border-transparent"
                      : "",
                    status === "submitting" || isClosed
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:brightness-105",
                  ].join(" ")}
                  disabled={status === "submitting" || isClosed}
                >
                  {t("rsvp.yes")}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAttendance("declined");
                    setStep("form");
                  }}
                  className={[
                    "rounded-full border px-4 py-3 text-xs uppercase tracking-[0.14em] transition",
                    "bg-[rgba(245,241,232,0.9)] text-[#222] border-black/15",
                    attendance === "declined"
                      ? "bg-[#8a826f] text-white border-transparent"
                      : "",
                    status === "submitting" || isClosed
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:brightness-105",
                  ].join(" ")}
                  disabled={status === "submitting" || isClosed}
                >
                  {t("rsvp.no")}
                </button>
              </div>
            </div>

            {/* Expanded form */}
            {step === "form" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Guest name */}
                  <label className="grid gap-2 md:col-span-2">
                    <span className="text-sm opacity-90">
                      {t("rsvp.guestName")} *
                    </span>
                    <select
                      name="guestName"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full rounded-xl border border-black/15 bg-white/90 px-4 py-3 text-sm outline-none focus:border-black/30"
                      disabled={status === "submitting" || isClosed}
                    >
                      <option value="" disabled>
                        {t("rsvp.selectName")}
                      </option>
                      {guests.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </label>

                  {attendance === "attending" && (
                    <>
                      {/* Email */}
                      <label className="grid gap-2 md:col-span-2">
                        <span className="text-sm opacity-90">
                          {t("rsvp.email")} *
                        </span>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-black/15 bg-white/90 px-4 py-3 text-sm outline-none focus:border-black/30"
                          disabled={status === "submitting" || isClosed}
                        />
                      </label>

                      {/* Guests number */}
                      <label className="grid gap-2">
                        <span className="text-sm opacity-90">
                          {t("rsvp.guestsNumber")} *
                        </span>
                        <select
                          name="guestsNumber"
                          required
                          value={guestsNumber}
                          onChange={(e) => setGuestsNumber(e.target.value)}
                          className="w-full rounded-xl border border-black/15 bg-white/90 px-4 py-3 text-sm outline-none focus:border-black/30"
                          disabled={status === "submitting" || isClosed}
                        >
                          <option value="" disabled>
                            Select…
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </label>

                      {/* Room type */}
                      <label className="grid gap-2">
                        <span className="text-sm opacity-90">
                          {t("rsvp.roomType")} *
                        </span>
                        <select
                          name="roomType"
                          required
                          value={roomType}
                          onChange={(e) => {
                            const v = e.target.value;
                            setRoomType(v);

                            if (v === NO_ROOM_VALUE) {
                              setCheckin("");
                              setCheckout("");
                            }
                          }}
                          className="w-full rounded-xl border border-black/15 bg-white/90 px-4 py-3 text-sm outline-none focus:border-black/30"
                          disabled={status === "submitting" || isClosed}
                        >
                          <option value="" disabled>
                            Select…
                          </option>
                          <option value="Single, shared bathroom (SEK 695)">
                            Single, shared bathroom (SEK 695)
                          </option>
                          <option value="Double, shared bathroom (SEK 980)">
                            Double, shared bathroom (SEK 980)
                          </option>
                          <option value="Triple, shared bathroom (SEK 1195)">
                            Triple, shared bathroom (SEK 1195)
                          </option>
                          <option value="Single, ensuite (SEK 1190)">
                            Single, ensuite (SEK 1190)
                          </option>
                          <option value="Double, ensuite (SEK 1350)">
                            Double, ensuite (SEK 1350)
                          </option>
                          <option value="Triple, ensuite (SEK 1600)">
                            Triple, ensuite (SEK 1600)
                          </option>
                          <option value="No room needed">No room needed</option>
                        </select>
                      </label>

                      {/* Stay details */}
                      <div className="md:col-span-2 rounded-2xl border border-black/10 bg-white/50 p-4 sm:p-5">
                        <div className="text-center text-sm opacity-85">
                          {t("rsvp.stayDetails")}
                        </div>

                        {!needsRoom && (
                          <div className="mt-2 text-center text-xs opacity-70">
                            No stay dates required when you select “No room
                            needed”.
                          </div>
                        )}

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <label className="grid gap-2">
                            <span className="text-sm opacity-90">
                              {t("rsvp.checkin")} {needsRoom ? "*" : ""}
                            </span>

                            <input
                              type="date"
                              name="checkin"
                              required={needsRoom}
                              value={checkin}
                              onChange={(e) => setCheckin(e.target.value)}
                              min="2026-07-01"
                              max="2026-07-31"
                              className="w-full rounded-xl border border-black/15 bg-white/90 px-4 py-3 text-sm outline-none focus:border-black/30"
                              disabled={
                                status === "submitting" ||
                                isClosed ||
                                !needsRoom
                              }
                            />
                            <span className="text-[11px] opacity-60">
                              {t("rsvp.julyOnly")}
                            </span>
                          </label>

                          <label className="grid gap-2">
                            <span className="text-sm opacity-90">
                              {t("rsvp.checkout")} {needsRoom ? "*" : ""}
                            </span>

                            <input
                              name="checkout"
                              type="date"
                              required={needsRoom}
                              value={checkout}
                              onChange={(e) => setCheckout(e.target.value)}
                              min={checkin || "2026-07-01"}
                              max="2026-07-31"
                              className="w-full rounded-xl border border-black/15 bg-white/90 px-4 py-3 text-sm outline-none focus:border-black/30"
                              disabled={
                                status === "submitting" ||
                                isClosed ||
                                !needsRoom
                              }
                            />
                            <span className="text-[11px] opacity-60">
                              {t("rsvp.julyOnly")}
                            </span>
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Submit */}
                <div className="mt-2 flex justify-center">
                  <button
                    type="submit"
                    className={[
                      "inline-flex w-full sm:w-auto sm:min-w-[280px] items-center justify-center rounded-full",
                      "bg-[#8a826f] px-6 py-3 text-xs sm:text-sm uppercase tracking-[0.14em] text-white",
                      "border border-black/10 shadow-sm transition hover:brightness-110",
                      status === "submitting" || isClosed
                        ? "opacity-70 cursor-not-allowed"
                        : "",
                    ].join(" ")}
                    disabled={status === "submitting" || isClosed}
                  >
                    {submitLabel}
                  </button>
                </div>

                <div className="text-center text-xs sm:text-sm text-rose-800 opacity-65 leading-relaxed">
                  {attendance === "attending"
                    ? t("rsvp.collectAttend")
                    : t("rsvp.collectDecline")}
                </div>
              </>
            )}

            {isClosed && (
              <div className="text-center text-xs opacity-75">
                This RSVP form is closed after {deadlineText}.
              </div>
            )}
          </form>

          {status === "success" && (
            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4 text-center">
              <div className="uppercase tracking-[0.12em] text-xs opacity-80">
                Thank you
              </div>
              <div className="mt-2 text-sm sm:text-base opacity-90">
                We’ve received your RSVP.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
