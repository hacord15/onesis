import Link from 'next/link'
import { Check } from 'lucide-react'

type Plan = {
  name: string
  price: string
  period: string
  tagline: string
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/ mo',
    tagline: 'Free forever and can be upgraded.',
    features: [
      'Up to 10 individual users',
      'Basic reporting and analytics',
      'Project management tools',
      '20 GB individual data per user',
      'Basic chat and email support',
    ],
    cta: 'Try for Free',
  },
  {
    name: 'Agency',
    price: '$99',
    period: '/ mo',
    tagline: 'Value for money and can be upgraded.',
    features: [
      'Up to 10 individual users',
      'Advanced reporting and analytics',
      'Full project management suite',
      '20 GB individual data per user',
      'Priority chat and email support',
    ],
    cta: 'Try for Free',
    highlighted: true,
    badge: 'Popular',
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/ mo',
    tagline: 'All features and options included.',
    features: [
      'Up to 10 individual users',
      'Standard reporting and analytics',
      'Project management tools',
      '20 GB individual data per user',
      'Basic chat and email support',
    ],
    cta: 'Try for Free',
  },
]

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 xl:mb-16">
          <span className="section-tag mb-4">Pricing</span>
          <h2 className="section-title max-w-lg mt-3">
            {"We've offered the "}
            <span className="text-primary relative inline-block">
              best pricing
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" fill="none">
                <path d="M2 6 C45 1, 120 1, 178 5" stroke="#F8C84B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{' '}
            for you
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl flex flex-col transition-transform duration-200 ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-2xl shadow-primary/30 sm:scale-105 z-10 p-7 xl:p-9'
                  : 'bg-brand-gray border border-gray-100 p-6 xl:p-8'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute top-4 right-4 text-[11px] font-bold tracking-wide uppercase bg-white/20 text-white px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg ${
                    plan.highlighted
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className={`font-heading font-extrabold text-5xl xl:text-6xl leading-none ${
                    plan.highlighted ? 'text-white' : 'text-brand-dark'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-lg xl:text-xl font-medium mb-1 ${
                    plan.highlighted ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/60' : 'text-gray-400'}`}>
                {plan.tagline}
              </p>

              <hr className={`mb-6 ${plan.highlighted ? 'border-white/20' : 'border-gray-200'}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-white/20' : 'bg-primary-25'
                      }`}
                    >
                      <Check
                        size={11}
                        className={plan.highlighted ? 'text-white' : 'text-primary'}
                        strokeWidth={3}
                      />
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? 'text-white/85' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/sign-up"
                className={`block text-center py-3.5 rounded-xl font-bold text-sm xl:text-base transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-secondary text-brand-dark hover:bg-yellow-300 shadow-lg'
                    : 'bg-primary text-white hover:bg-primary-600 shadow-md shadow-primary/20'
                }`}
              >
                {plan.cta}
              </Link>
              <p className={`text-center text-xs mt-3 ${plan.highlighted ? 'text-white/40' : 'text-gray-400'}`}>
                {plan.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
