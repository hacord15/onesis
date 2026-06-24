// import Image from 'next/image';

// const PILLARS = [
//   {
//     letter: "T",
//     title: "Transform",
//     desc: "Self-delivered and digitized last-mile operations across all service lines.",
//     bg: "bg-[#C8102E]",
//     imgSeed: "transform",   // seeds for consistent Picsum images
//   },
//   {
//     letter: "R",
//     title: "Reduce",
//     desc: "Lower people costs and energy costs through technology-led efficiencies.",
//     bg: "bg-[#9B0C23]",
//     imgSeed: "reduce",
//   },
//   {
//     letter: "E",
//     title: "Enable",
//     desc: "Business control and compliance management with real-time dashboards.",
//     bg: "bg-neutral-700",
//     imgSeed: "enable",
//   },
//   {
//     letter: "E",
//     title: "Enhance",
//     desc: "Office experience and staff satisfaction through best-in-class practices.",
//     bg: "bg-neutral-800",
//     imgSeed: "enhance",
//   },
// ];

// export default function ValuePillars() {
//   return (
//     <section className="bg-white py-20 md:py-28">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-14">
//           <p className="text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-3">
//             Why Choose OneSIS
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
//             Four Value Pillars
//           </h2>
//           <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm">
//             Everything we deliver is anchored to four measurable outcomes that make your facilities perform better.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {PILLARS.map((p) => (
//             <div
//               key={p.title}
//               className="group relative rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300"
//             >
//               {/* Background Image */}
//               <div className="relative h-48 w-full overflow-hidden">
//                 <Image
//                   src={`https://picsum.photos/seed/${p.imgSeed}/600/400`}
//                   alt={p.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Gradient overlay for readability */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                 {/* Letter badge – positioned over image */}
//                 <div
//                   className={`absolute bottom-4 left-4 w-12 h-12 ${p.bg} group-hover:bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-colors z-10`}
//                 >
//                   {p.letter}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 pt-4">
//                 <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#C8102E] transition-colors mb-2">
//                   {p.title}
//                 </h3>
//                 <p className="text-sm text-neutral-500 group-hover:text-neutral-700 transition-colors leading-relaxed">
//                   {p.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { RotateCw, ArrowDownCircle, BarChart2, Star } from "lucide-react";

const PILLARS = [
  {
    title: "Transform",
    desc: "Digitized operations and standardized processes.",
    Icon: RotateCw,
  },
  {
    title: "Reduce",
    desc: "Technology-led efficiencies that reduce costs.",
    Icon: ArrowDownCircle,
  },
  {
    title: "Enable",
    desc: "Real-time dashboards and data-driven decisions.",
    Icon: BarChart2,
  },
  {
    title: "Enhance",
    desc: "Elevating workplace experience and staff satisfaction.",
    Icon: Star,
  },
];

export default function ValuePillars() {
  return (
    <section className="bg-neutral-100 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">

          {/* ── Left: Heading block ── */}
          <div className="flex-shrink-0 lg:w-56 xl:w-64">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C8102E]">
              The OneSIS Promise
            </p>
            <h2 className="mb-4 text-4xl font-bold leading-[1.1] text-neutral-950 xl:text-5xl">
              Transform.<br />
              Reduce. Enable.<br />
              Enhance.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-500">
              We combine technology, people and processes to create efficient,
              safe and better workplaces across India.
            </p>
          </div>

          {/* ── Right: 4 cards ── */}
          <div className="flex-1 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {PILLARS.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-xl border border-neutral-100 bg-white p-6 text-center shadow-sm"
              >
                {/* Red outline icon */}
                <div className="mb-5 flex items-center justify-center">
                  <Icon
                    size={42}
                    strokeWidth={1.4}
                    className="text-[#C8102E]"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-neutral-900">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}