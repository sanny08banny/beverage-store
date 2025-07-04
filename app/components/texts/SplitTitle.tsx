'use client';

export default function SplitTitle() {
  const words = ["unleash", "your", "potential"];

  return (
    <div className="relative w-full pointer-events-none px-4 py-12 md:py-24 overflow-hidden">
      <div className="text-center leading-[0.9] w-full max-w-screen-xl mx-auto">
        {words.map((word, index) => (
          <h1
            key={index}
            className="relative text-transparent text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold uppercase font-[var(--font-josefin-sans)]"
            style={{
              marginTop: `-${index * 0.5}rem`,
            }}
          >
            {/* Visible top layer */}
            <span className="text-white font-bold tracking-tight">{word}</span>

            {/* Background layer 1 */}
            <span
              aria-hidden="true"
              className="absolute inset-0 text-white font-normal"
              style={{
                clipPath: 'polygon(60% 0, 20% 100%, 0 100%, 0 0)',
                WebkitClipPath: 'polygon(60% 0, 20% 100%, 0 100%, 0 0)',
                zIndex: -1,
              }}
            >
              {word}
            </span>

            {/* Background layer 2 */}
            <span
              aria-hidden="true"
              className="absolute inset-0 text-white font-bold tracking-tight"
              style={{
                clipPath: 'polygon(80% 0, 100% 0, 100% 100%, 40% 100%)',
                WebkitClipPath: 'polygon(80% 0, 100% 0, 100% 100%, 40% 100%)',
                zIndex: -1,
              }}
            >
              {word}
            </span>
          </h1>
        ))}
      </div>
    </div>
  );
}
