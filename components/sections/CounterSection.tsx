const stats = [
  { value: '₹20,059 Cr', label: 'Group Revenue' },
  { value: '3.5 Lakh+', label: 'Employees' },
  { value: '16', label: 'Group Companies' },
  { value: '29', label: 'States' },
  { value: '320K+', label: 'Permanent Staff' },
];

export default function CounterSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
      <div className="container-fluid mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 xl:py-20">
       

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-6 text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border border-gray-100 hover:border-primary/20 relative"
            >
              {/* Decorative accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/40 rounded-b-full group-hover:bg-primary transition-colors duration-300" />
              <p className="font-heading font-extrabold text-3xl sm:text-4xl xl:text-5xl text-primary mb-1 tracking-tight pt-2">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm sm:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <br />
         {/* Tagline */}
        {/* <div className="text-center max-w-3xl mx-auto mb-14">
          <h3 className="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl text-brand-dark leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              Transform. Reduce. Enable. Enhance.
            </span>
          </h3>
          <p className="text-gray-500 text-lg sm:text-xl mt-3 font-medium tracking-wide">
            Underpinned by leading technology and flawless service excellence
          </p>
        </div> */}
      </div>
    </section>
  );
}