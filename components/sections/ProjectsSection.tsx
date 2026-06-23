'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  category: string
  seed: string
}

const projects: Project[] = [
  { title: 'Dreamy Vision', category: 'Logo, user interface', seed: 'proj_dreamy' },
  { title: 'Energie Brand', category: 'Logo, branding', seed: 'proj_energie' },
  { title: 'Bottle Company', category: 'Marketing', seed: 'proj_bottle' },
  { title: 'Strategy Planning', category: 'E-commerce', seed: 'proj_strategy' },
  { title: 'Digital Transformation', category: 'Finance, Analytics', seed: 'proj_digital' },
  { title: 'Business Process', category: 'Security, branding', seed: 'proj_business' },
]

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 xl:py-32 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 xl:mb-16">
          <div>
            <span className="section-tag mb-4">Projects</span>
            <h2 className="section-title max-w-lg mt-3">
              We specialize in the following{' '}
              <span className="text-primary relative inline-block">
                case studies
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6 C50 1, 120 1, 198 5"
                    stroke="#F8C84B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Nav Buttons (desktop) */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous projects"
              className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-600 transition-colors shadow-lg shadow-primary/25"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next projects"
              className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-600 transition-colors shadow-lg shadow-primary/25"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex-shrink-0 w-72 sm:w-80 xl:w-96 snap-start"
            >
              <Link href="/case-studies">
                <article className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
                  <Image
                    src={`https://picsum.photos/seed/${project.seed}/600/600`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Footer */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-heading font-bold text-lg xl:text-xl mb-1 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm">{project.category}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-200">
                      <ArrowUpRight size={17} className="text-primary" />
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile nav buttons */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous"
            className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next"
            className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
