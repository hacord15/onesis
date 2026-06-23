'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: '1. What is business consulting?',
    answer:
      'Business consulting involves providing expert advice and tailored strategies to organizations looking to improve performance, solve complex problems, and achieve their strategic goals. Consultants bring specialized knowledge and an objective outside perspective that internal teams often lack.',
  },
  {
    question: "2. Why wouldn't I just hire my own in-house team?",
    answer:
      'Consultants bring specialized expertise, cross-industry experience, and an outside perspective that takes years to develop internally. They also offer flexibility — engaged for specific projects without long-term salary commitments, making them cost-effective for targeted challenges.',
  },
  {
    question: '3. How does OneSIS ensure data privacy and security?',
    answer:
      'We implement rigorous data protection protocols aligned with GDPR and industry standards. All client engagements are covered by NDAs, and our teams follow strict access controls and security practices to ensure confidentiality throughout every project.',
  },
  {
    question: '4. Can I use your services to create and scale a product?',
    answer:
      'Absolutely. Our consulting services span strategy, operations, HR, and technology — all of which work together to help you build, launch, and scale products effectively. We have helped dozens of startups go from concept to market.',
  },
  {
    question: '5. Do you regularly update your service listings?',
    answer:
      'Yes. We continuously review and evolve our service offerings to reflect market changes, emerging trends, and client feedback. This ensures we always deliver maximum, relevant value to every business we work with.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-16 sm:py-24 xl:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 xl:mb-16">
          <span className="section-tag mb-4">Help center</span>
          <h2 className="section-title max-w-lg mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Layout: Image + Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden h-[500px] xl:h-[620px] sticky top-28">
              <Image
                src="https://picsum.photos/seed/faq_OneSIS/900/1200"
                alt="FAQ illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="bg-brand-gray rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 xl:p-6 text-left group"
                >
                  <span className="font-heading font-semibold text-base xl:text-lg text-brand-dark group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expandable Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-56' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 xl:px-6 pb-5 text-gray-500 text-sm xl:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
