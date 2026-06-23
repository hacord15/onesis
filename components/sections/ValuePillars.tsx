import Image from 'next/image';

const PILLARS = [
  {
    letter: "T",
    title: "Transform",
    desc: "Self-delivered and digitized last-mile operations across all service lines.",
    bg: "bg-[#C8102E]",
    imgSeed: "transform",   // seeds for consistent Picsum images
  },
  {
    letter: "R",
    title: "Reduce",
    desc: "Lower people costs and energy costs through technology-led efficiencies.",
    bg: "bg-[#9B0C23]",
    imgSeed: "reduce",
  },
  {
    letter: "E",
    title: "Enable",
    desc: "Business control and compliance management with real-time dashboards.",
    bg: "bg-neutral-700",
    imgSeed: "enable",
  },
  {
    letter: "E",
    title: "Enhance",
    desc: "Office experience and staff satisfaction through best-in-class practices.",
    bg: "bg-neutral-800",
    imgSeed: "enhance",
  },
];

export default function ValuePillars() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-3">
            Why Choose OneSIS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Four Value Pillars
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm">
            Everything we deliver is anchored to four measurable outcomes that make your facilities perform better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${p.imgSeed}/600/400`}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Letter badge – positioned over image */}
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 ${p.bg} group-hover:bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-colors z-10`}
                >
                  {p.letter}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#C8102E] transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-neutral-700 transition-colors leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}