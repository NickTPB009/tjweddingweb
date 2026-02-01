export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 lg:py-16 text-center">
          <h1
            className="m-0 font-normal tracking-[0.04em] leading-[0.95]"
            style={{
              fontSize: "clamp(36px, 7vw, 120px)",
              fontFamily: `
                "Century Schoolbook",
                "New Century Schoolbook",
                "Georgia",
                "Times New Roman",
                serif
              `,
            }}
          >
            TAIS &amp; JOAKIM
          </h1>
        </div>
      </div>
    </header>
  );
}
