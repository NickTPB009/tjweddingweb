"use client";

import FooterBar from "@/components/layout/FooterBar";
import RegistryDashboard from "@/components/sections/RegistryDashboard";

export default function RegistryPage() {
  return (
    <>
      <main className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
          <section className="py-10 sm:py-14 lg:py-16">
            <RegistryDashboard />
          </section>
        </div>
      </main>

      <FooterBar />
    </>
  );
}
