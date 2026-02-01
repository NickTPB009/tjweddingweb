import Image from "next/image";

export default function DetailsImage() {
  return (
    <section className="pb-10 sm:pb-14 lg:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-200">
          <Image
            src="/images/details/Church2.png"
            alt="Venue"
            width={1400}
            height={900}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 980px"
          />
        </div>
      </div>
    </section>
  );
}
