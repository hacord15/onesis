import Link from 'next/link'
import {
  Scissors,
  Rocket,
  Users,
  UserCheck,
  BookOpen,
  Layers,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react'
import { ElementType } from 'react'

type Service = {
  Icon: ElementType
  title: string
  description: string
}

const services: Service[] = [
  {
    Icon: Scissors,
    title: 'Staffing Solution',
    description:
      'Empowering your team dynamics with precision talent matching. Our staffing solutions ensure the right fit for every role.',
  },
  {
    Icon: Rocket,
    title: 'Strategic Planning',
    description:
      'Shaping the future with meticulous foresight. Our strategic planning paves the way for decisive, impactful action.',
  },
  {
    Icon: Users,
    title: 'HR Outsourcing',
    description:
      'Optimizing HR processes while you focus on core business. Trust our HR outsource team for streamlined operations.',
  },
  {
    Icon: UserCheck,
    title: 'Talent Acquisition',
    description:
      "Connecting you with the industry's finest talent. Our acquisition strategies prioritize culture fit and long-term success.",
  },
  {
    Icon: BookOpen,
    title: 'HR Consulting',
    description:
      'Expert HR guidance that aligns your people strategy with your business objectives for sustainable growth.',
  },
  {
    Icon: Layers,
    title: 'Improving Resource',
    description:
      'Empowering your team dynamics with precision talent matching. Our staffing solutions ensure the right fit.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 xl:mb-16">
          <span className="section-tag mb-4">Services</span>
          <h2 className="section-title max-w-2xl mt-3">
            Dive Deep Into Our Expertise,{' '}
            <br className="hidden sm:block" />
            Explore All Our Services
          </h2>
        </div>

        {/* Service Rows */}
        <div className="divide-y divide-gray-100">
          {services.map(({ Icon, title, description }) => (
            <Link
              key={title}
              href="/services"
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-10 py-5 sm:py-6 xl:py-7 px-4 -mx-4 rounded-2xl hover:bg-primary-25 transition-all duration-200 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-200">
                <Icon size={26} className="text-white" />
              </div>

              {/* Title */}
              <div className="sm:w-48 lg:w-60 flex-shrink-0">
                <h3 className="font-heading font-bold text-lg xl:text-2xl text-brand-dark group-hover:text-primary transition-colors duration-200">
                  {title}
                </h3>
              </div>

              {/* Description */}
              <p className="flex-1 text-gray-500 text-sm xl:text-base leading-relaxed">
                {description}
              </p>

              {/* Arrow */}
              <div className="hidden sm:flex flex-shrink-0">
                <ArrowUpRight
                  size={22}
                  className="text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary/40 pb-0.5 hover:gap-4 hover:border-primary transition-all duration-200"
          >
            View all services <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}
