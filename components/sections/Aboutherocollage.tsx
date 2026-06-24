import Image from 'next/image'

/*
  Grid positions are defined in globals.css via:
    .about-collage  .ac-far-left  .ac-left-top  .ac-left-bot
    .ac-center      .ac-right-top .ac-right-bot  .ac-far-right
*/

type CollageItem = {
  cls: string
  src: string
  alt: string
}

const items: CollageItem[] = [
  {
    // Far left – cozy office interior
    cls: 'ac-far-left',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80&auto=format&fit=crop',
    alt: 'Modern office interior',
  },
  {
    // Left top – business professional in discussion
    cls: 'ac-left-top',
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop',
    alt: 'Business professional discussion',
  },
  {
    // Left bottom – person working on laptop with analytics
    cls: 'ac-left-bot',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop',
    alt: 'Data analytics on laptop',
  },
  {
    // Center – confident business professional (portrait)
    cls: 'ac-center',
    src: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Confident business consultant',
  },
  {
    // Right top – open-plan modern office
    cls: 'ac-right-top',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format&fit=crop',
    alt: 'Open-plan modern office',
  },
  {
    // Right bottom – two colleagues collaborating at desk
    cls: 'ac-right-bot',
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop',
    alt: 'Colleagues collaborating',
  },
  {
    // Far right – professional smiling portrait
    cls: 'ac-far-right',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&auto=format&fit=crop',
    alt: 'Professional business consultant',
  },
]

export default function AboutHeroCollage() {
  return (
    <section className="py-16 sm:py-20 xl:py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Heading ────────────────────────────────────── */}
        {/* <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 xl:mb-20">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl text-brand-dark leading-tight mb-4 xl:mb-6">
            One Partner{' '}
            <br className="hidden xl:block" />
            consultancy
          </h1>
          <p className="text-gray-500 text-base sm:text-lg xl:text-xl leading-relaxed max-w-xl mx-auto">
            With Innovar, hiring becomes effortless. Embrace the future of
            recruitment today our features and take your business to new heights.
          </p>
        </div> */}

        {/* ── Heading ────────────────────────────────────── */}
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 xl:mb-20">
  <p className="text-[#C81020] font-semibold uppercase tracking-[0.2em] mb-4">
    India’s Trusted Facility Management Partner
  </p>

  <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-7xl text-brand-dark leading-tight mb-6">
    One Partner.
    <br className="hidden xl:block" />
    Every Facility.
    <br className="hidden xl:block" />
    Every Time.
  </h1>

  <p className="text-gray-600 text-base sm:text-lg xl:text-xl leading-relaxed max-w-2xl mx-auto">
    OneSIS delivers integrated facility management solutions across
    housekeeping, technical services, property management, and compliance —
    powered by technology, driven by expertise, and backed by the strength of
    the SIS Group.
  </p>
</div>


        {/* ── Photo Collage Grid ─────────────────────────── */}
        <div className="about-collage">
          {items.map(({ cls, src, alt }) => (
            <div
              key={cls}
              className={`${cls} relative rounded-xl lg:rounded-2xl overflow-hidden`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 15vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}