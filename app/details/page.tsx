import FooterBar from "../../components/layout/FooterBar";

import DetailsHero from "../../components/sections/DetailsHero";
import DetailsInviteCard from "../../components/sections/DetailsInviteCard";
import DetailsImage from "../../components/sections/DetailsImage";
import DetailsInfoGrid from "../../components/sections/DetailsInfoGrid";
import TravelStayHero from "../../components/sections/TravelStayHero";
import TravelCards from "../../components/sections/TravelCards";
import DetailsGuestInfo from "../../components/sections/DetailsGuestInfo";

export default function DetailsPage() {
  return (
    <>
      <main className="bg-white">
        <section className="pt-4 sm:pt-6 lg:pt-8">
          <DetailsHero />
        </section>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="py-10 sm:py-14 lg:py-16">
            <DetailsInviteCard />
          </section>

          <section className="pb-10 sm:pb-14 lg:pb-16">
            <DetailsImage />
          </section>

          <section className="pb-10 sm:pb-14 lg:pb-16">
            <DetailsInfoGrid />
          </section>

          <section className="pb-10 sm:pb-14 lg:pb-16">
            <DetailsGuestInfo />
          </section>
        </div>

        <section className="py-10 sm:py-14 lg:py-16">
          <TravelStayHero />
        </section>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="pb-12 sm:pb-16 lg:pb-20">
            <TravelCards />
          </section>
        </div>
      </main>

      <FooterBar />
    </>
  );
}
