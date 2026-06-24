'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowUpRight } from 'lucide-react'

type Tab = {
  label: string
  title: string
  description: string
  points: string[]
  image: string
}

const tabs: Tab[] = [
  {
    label: 'Innovation',
    title: 'Backed by a diverse and experienced team',
    description:
      "OneSIS's strength lies in its diverse and experienced team. Our experts are well-versed in various marketing disciplines and business transformation strategies.",
    points: [
      'Stories that speak to who you are and what you do',
      'As we work with you, building stronger outcomes together',
    ],
    image: 'https://picsum.photos/seed/about_inno/900/700',
  },
  {
    label: 'Solutions',
    title: 'Choose a plan that fits your needs',
    description:
      'Enjoy a range of features designed to enhance your project management experience, all at a price that fits your budget and scales with your business.',
    points: [
      'Flexible plans built around your specific business goals',
      'Scale seamlessly as your team and organization grows',
    ],
    image: 'https://picsum.photos/seed/about_sol/900/700',
  },
  {
    label: 'Growing',
    title: 'Helping startups manage their workforce easily',
    description:
      "OneSIS's strength lies in its diverse and experienced team. Our experts are well-versed in workforce management and startup growth strategies.",
    points: [
      'Streamlined HR tools designed for fast-growing companies',
      'Centralized workforce management from day one',
    ],
    image: 'https://picsum.photos/seed/about_grow/900/700',
  },
]

const statCards = [
  { value: '10M', label: 'Clients worldwide have been benefited by OneSIS', icon: '👥' },
  { value: '500+', label: 'Total projects served for marketing and growth purposes', icon: '📋' },
  { value: '3.8%', label: 'Improved cost disbursement and increased revenue', icon: '📈' },
]

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  return (
    <section className="py-16  bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 xl:mb-16">
          <span className="section-tag mb-4">About us</span>
          <h2 className="section-title max-w-xl mt-3">
            Globally Recruitment and Consultation Solutions
          </h2>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Tab Controls + Body */}
          <div className="order-2 lg:order-1">

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-brand-gray text-gray-600 hover:bg-primary-25 hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl xl:text-4xl text-brand-dark leading-tight">
                {current.title}
              </h3>
              <p className="text-gray-500 text-base xl:text-lg leading-relaxed">
                {current.description}
              </p>
              <ul className="space-y-3 pt-1">
                {current.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-primary text-primary flex items-center justify-center">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary/50 pb-0.5 hover:gap-4 hover:border-primary transition-all duration-200 mt-2"
              >
                Read More <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-5 -right-5 w-28 h-28 rounded-full border-4 border-primary/15 hidden lg:block pointer-events-none" />
            <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full border-4 border-secondary/30 hidden lg:block pointer-events-none" />
          </div>
        </div>

        {/* Stat Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-6 mt-16 xl:mt-24">
          {statCards.map((card) => (
            <div key={card.value} className="bg-brand-gray rounded-2xl p-6 xl:p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-extrabold text-4xl xl:text-5xl text-brand-dark">
                  {card.value}
                </span>
                <span className="text-3xl" role="img" aria-hidden="true">
                  {card.icon}
                </span>
              </div>
              <p className="text-gray-500 text-sm xl:text-base leading-relaxed">{card.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
