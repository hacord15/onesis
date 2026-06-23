const STATS = [
  { value: "₹20K Cr", label: "Group Revenue" },
  { value: "3.5L+", label: "Employees" },
  { value: "368", label: "Offices" },
  { value: "29", label: "States" },
];

export default function SISGroupBand() {
  return (
    <section className="bg-[#C8102E]  bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.3)_0%,_transparent_60%)] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2">Backed by</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">A Billion-Dollar Listed Indian Multinational</h2>
            <p className="mt-2 text-red-100 max-w-md text-sm leading-relaxed">Ranked #157 in Fortune India 500. India's #1 in Security & Facility Management, #2 in Cash Logistics.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center flex-shrink-0">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-red-200 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
