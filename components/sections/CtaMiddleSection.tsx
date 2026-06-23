export default function CtaMiddleSection() {
  return (
    <section className="py-8 sm:py-12 xl:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary-25 rounded-3xl px-6 py-12 sm:p-14 lg:p-16 xl:p-20 overflow-hidden">

          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-primary/8 pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-secondary/15 pointer-events-none" />

          <div className="relative z-10 lg:w-2/3 text-center lg:text-left mx-auto lg:mx-0">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl xl:text-5xl text-brand-dark mb-4 leading-tight">
              Subscribe to our mailing list &amp; stay up to date
            </h3>
            <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              A business consulting website typically offers a range of services to help clients improve and grow their businesses.
            </p>

            {/* Form */}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Your email address..."
                  required
                  className="w-full h-12 pl-4 pr-10 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                {/* Email Icon */}
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="h-12 px-7 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-600 transition-colors shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
