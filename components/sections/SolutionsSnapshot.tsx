"use client";

import Link from "next/link";
import { Tag, BarChart2, User, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    title: "Integrated Facility Management",
    desc: "Soft services, MEP, EHS, security, horticulture & administration.",
    href: "/solutions/integrated-fm",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    alt: "Facility Management worker",
    Icon: Tag,
  },
  {
    title: "Property Management",
    desc: "End-to-end residential & commercial property operations.",
    href: "/solutions/property-management",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    alt: "Modern property building",
    Icon: BarChart2,
  },
  {
    title: "Specialized Services",
    desc: "Civil upgrades, retrofitting, smart maintenance, design & build, PMC.",
    href: "/solutions/specialized-services",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    alt: "Technical specialist at work",
    Icon: User,
  },
];

export default function SolutionsSnapshot() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Section Header ── */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C8102E]">
              Our Solutions
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-[2.75rem] leading-tight">
              End-to-End. Integrated. Reliable.
            </h2>
          </div>

          <Link
            href="/solutions"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C8102E] hover:opacity-70 transition-opacity flex-shrink-0 mb-1"
          >
            View All Solutions
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SOLUTIONS.map(({ title, desc, href, img, alt, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex overflow-hidden rounded-xl border border-neutral-150 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* ── Left: Image panel ── */}
              <div className="relative w-[38%] flex-shrink-0 overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ── Right: Content panel ── */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  {/* Icon in rose circle */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#C8102E]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-bold leading-snug text-neutral-900">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {desc}
                  </p>
                </div>

                {/* Know More link */}
                <div className="mt-5">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C8102E]">
                    Know More
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}