export default function FooterBar() {
  return (
    <footer className="bg-[#EAE3D7]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-12 lg:py-14">
          <div className="flex justify-center">
            <div className="text-center text-[#222]">
              {/* T&J */}
              <div
                className="leading-none font-normal tracking-[0.02em] text-[clamp(22px,4vw,30px)]"
                style={{
                  fontFamily: `
                    "Century Schoolbook",
                    "New Century Schoolbook",
                    "Georgia",
                    "Times New Roman",
                    serif
                  `,
                }}
              >
                T&amp;J
              </div>

              {/* Date */}
              <div className="mt-3 uppercase tracking-[0.12em] text-[11px] sm:text-xs opacity-90 leading-relaxed">
                Saturday,
                <br />
                July 18, 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
