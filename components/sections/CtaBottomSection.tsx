import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M32 4 L34.9 26.2 L58 32 L34.9 37.8 L32 60 L29.1 37.8 L6 32 L29.1 26.2 Z" />
    </svg>
  )
}

export default function CtaBottomSection() {
  return (
    <section className="py-6 sm:py-10 xl:py-14 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-400 via-primary to-primary-dark py-16 sm:py-20 xl:py-28 px-6 text-center">

          {/* Background texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.3)_0%,_transparent_60%)]" />

          {/* Star Decorations */}
          <StarIcon className="absolute top-8 left-10 xl:left-16 w-10 h-10 xl:w-14 xl:h-14 text-secondary opacity-90" />
          <StarIcon className="absolute top-16 left-20 xl:left-32 w-4 h-4 xl:w-6 xl:h-6 text-secondary/50" />
          <StarIcon className="absolute bottom-8 right-12 xl:right-20 w-7 h-7 xl:w-10 xl:h-10 text-secondary/70" />
          <StarIcon className="absolute bottom-20 right-28 xl:right-40 w-3 h-3 xl:w-5 xl:h-5 text-secondary/40" />

          {/* Content */}
          <div className="relative z-10 max-w-xl sm:max-w-2xl xl:max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl xl:text-6xl text-white mb-4 xl:mb-6 leading-tight">
              Ready to Simplify Your Facility Management?
            </h2>
            <p className="text-white/75 text-base sm:text-lg xl:text-xl mb-8 xl:mb-10">
              Let's build safer, smarter, and more efficient facilities together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-secondary text-brand-dark px-8 xl:px-10 py-4 rounded-xl font-extrabold text-base xl:text-lg bg-yellow-300  mr-2 transition-all duration-200 shadow-2xl group"
            >
              Download Profile
              <Download
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-secondary text-brand-dark px-8 xl:px-10 py-4 rounded-xl font-extrabold text-base xl:text-lg bg-yellow-300 transition-all duration-200 shadow-2xl group"
            >
              Request Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
