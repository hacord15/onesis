import Link from "next/link";

const SOLUTIONS = [
  { title: "Integrated FM", desc: "Soft services, MEP, EHS, security, horticulture & administration.", href: "/solutions/integrated-fm", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", alt: "Integrated Facility Management" },
  { title: "Property Management", desc: "End-to-end residential & commercial property operations.", href: "/solutions/property-management", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80", alt: "Property Management" },
  { title: "Specialized Services", desc: "Civil upgrades, retrofitting, smart maintenance, design & build, PMC.", href: "/solutions/specialized-services", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80", alt: "Specialized Services" },
];

export default function SolutionsSnapshot() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Solutions Built for Every Facility Need</h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm">From day-to-day operations to specialized capital works — one partner, one point of accountability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="relative h-52 overflow-hidden">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#C8102E] mb-2 transition-colors">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-[#C8102E] text-sm font-bold">
                  Learn more <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
