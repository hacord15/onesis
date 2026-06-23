import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

const avatarSeeds = ['ava1', 'ava2', 'ava3', 'ava4']

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container-fluid">
        <div className="flex flex-col lg:flex-row items-center">

          {/* ── Hero Image (left on desktop) ── */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative h-72 sm:h-[420px] lg:h-[600px] xl:h-[600px] rounded-b-3xl lg:rounded-none lg:rounded-r-3xl overflow-hidden">
              {/* <Image
                src="https://picsum.photos/seed/hero_OneSIS/1200/1600"
                alt="Business consulting professionals"
                fill
                className="object-cover"
                priority
              /> */}
              {/* hero banner video public\assets\hero_banner.mp4  */}
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/about-banner.png"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/assets/hero_banner1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
          </div>

          {/* ── Text Content (right on desktop) ── */}
          {/* <div className="w-full lg:w-1/2 order-2 text-center lg:text-left px-4 sm:px-8 py-12 lg:py-0 lg:pl-12 xl:pl-20">

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-[62px] text-brand-dark leading-[1.1] mb-6">
              Your Partner in{' '}
              <span className="relative inline-block text-primary">
                Business
                <br />
                Transformation
                
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 340 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8 C85 2, 170 2, 255 6 S310 9, 338 5"
                    stroke="#F8C84B"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg xl:text-xl leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Our business consulting services are rooted in a deep understanding of industry trends, best practices, and the latest technologies.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2.5 bg-primary text-white px-8 py-4 rounded-xl font-bold text-base xl:text-lg hover:bg-primary-600 transition-all duration-200 shadow-xl shadow-primary/25 group"
            >
              Get started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>

           
            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                {avatarSeeds.map((seed) => (
                  <div
                    key={seed}
                    className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative"
                  >
                    <Image
                      src={`https://picsum.photos/seed/${seed}/80/80`}
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                  Based on 4,200+ reviews
                </span>
              </div>
            </div>
          </div> */}

          <div className="w-full lg:w-1/2 order-2 text-center lg:text-left px-4 sm:px-8 py-12 lg:py-0 lg:pl-12 xl:pl-20">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-[62px] text-brand-dark leading-[1.1] mb-6">
              Your One-Stop Partner for{' '}
              <span className="relative inline-block text-primary">
                Integrated Facility
                <br />
                Management
                {/* Wavy underline */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 340 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8 C85 2, 170 2, 255 6 S310 9, 338 5" stroke="#F8C84B" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg xl:text-xl leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Technology-driven, self-delivered facility solutions backed by India's #1 business services group.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 bg-primary text-white px-8 py-4 rounded-xl font-bold text-base xl:text-lg hover:bg-primary-600 transition-all duration-200 shadow-xl shadow-primary/25 group"
              >
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-base xl:text-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-base xl:text-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                Download Profile
              </Link>
            </div>

            {/* Review Badge */}
            {/* <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                {avatarSeeds.map((seed) => (
                  <div key={seed} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/${seed}/80/80`} alt="User avatar" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
            <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-secondary text-secondary" />
                ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
                Based on 4,200+ reviews
            </span>
        </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
