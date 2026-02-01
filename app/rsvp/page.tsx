"use client";

import FooterBar from "../../components/layout/FooterBar";
import RsvpHero from "../../components/sections/RsvpHero";
import RsvpForm from "../../components/sections/RsvpForm";

export default function RsvpPage() {
  return (
    <>
      <main className="bg-white">
        <section className="pt-4 sm:pt-6 lg:pt-8">
          <RsvpHero />
        </section>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <section className="py-10 sm:py-14 lg:py-16">
            <RsvpForm />
          </section>
        </div>
      </main>

      <FooterBar />
    </>
  );
}
