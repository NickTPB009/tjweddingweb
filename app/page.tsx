import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import QuickLinks from "../components/sections/QuickLinks";
import FooterBar from "../components/layout/FooterBar";
import GiftMilestone from "@/components/sections/GiftMilestone";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero 通常需要更大边距/更宽展示：如果 Hero 内部已经做了容器，就把下面这层删掉 */}
        <section className="py-8 sm:py-12 lg:py-16">
          <Hero />
        </section>

        <section className="py-10 sm:py-14 lg:py-16">
          <QuickLinks />
        </section>

        <section className="py-10 sm:py-14 lg:py-16">
          <GiftMilestone />
        </section>
      </main>

      <FooterBar />
    </div>
  );
}
