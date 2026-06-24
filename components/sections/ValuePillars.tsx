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
                                className="group flex flex-col items-center rounded-xl border border-neutral-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E] hover:bg-red-50 hover:shadow-lg hover:shadow-[#C8102E]/20"
                            >
                                {/* Red outline icon */}
                                <div className="mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <Icon
                                        size={42}
                                        strokeWidth={1.4}
                                        className="text-[#C8102E] transition-colors duration-300 group-hover:text-[#A00D22]"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 text-base font-bold text-neutral-900 transition-colors duration-300 group-hover:text-[#C8102E]">
                                    {title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">
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