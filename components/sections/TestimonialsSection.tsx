'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  role: string
  seed: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Innovar has been a game-changer for us. They turned our old approach into a high-performing conversion machine. Our conversion rates have increased by 125% since they revamped our website and messaging strategy.",
    name: 'Mark Zellers',
    role: 'Co-Founder',
    seed: 'team_mark',
  },
  {
    quote:
      "It's been a pure joy working with Innovar. The expertise they have in unifying content and paid channels — setting it up as one unified team — means we are always optimizing from every possible angle.",
    name: 'André Garcia',
    role: 'UX Researcher',
    seed: 'team_andre',
  },
  {
    quote:
      "Velocity is crucial in marketing. The more campaigns we run together, the bigger the impact. Innovar has delivered consistent results since we revamped our strategy and messaging with their guidance.",
    name: 'Henry Matt',
    role: 'Customer Success',
    seed: 'team_henry',
  },
  {
    quote:
      "The depth of Innovar's consulting expertise is truly unmatched. They understood our challenges and delivered solutions that created tangible, lasting impact across every department in our organization.",
    name: 'Peter Lary',
    role: 'Engineering Manager',
    seed: 'team_peter',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  const current = testimonials[index]

  return (
    <section className="py-16 sm:py-24 xl:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 xl:mb-16">
          <span className="section-tag mb-4">Clients</span>
          <h2 className="section-title max-w-md mt-3">
            What our valuable customers said
          </h2>
        </div>

        {/* Card */}
        <div className="bg-brand-gray rounded-3xl p-6 sm:p-10 xl:p-14 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Avatar */}
            <div className="relative aspect-square rounded-2xl overflow-hidden max-w-xs mx-auto sm:mx-0 w-full">
              <Image
                src={`https://picsum.photos/seed/${current.seed}/600/600`}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Quote Content */}
            <div className="flex flex-col gap-5 xl:gap-7">
              <Quote size={48} className="text-primary" />

              <p className="text-brand-dark text-base sm:text-lg xl:text-2xl font-medium leading-relaxed">
                {current.quote}
              </p>

              <div>
                <h5 className="font-heading font-bold text-xl xl:text-2xl text-brand-dark">
                  {current.name}
                </h5>
                <p className="text-gray-400 text-base mt-1">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 sm:mt-10">
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white text-gray-500 transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white text-gray-500 transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
