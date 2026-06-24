'use client'

import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function FacilityCtaBanner() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/*
          Banner card:
          - Rounded corners
          - Gradient: vivid red (left) → very dark maroon (right)
          - 3 horizontal zones: Heading | divider | Text | Buttons
        */}
        <div
          className="rounded-2xl overflow-hidden px-8 sm:px-12 xl:px-16 py-9 xl:py-11"
          style={{
            background:
              'linear-gradient(to right, #b81212 0%, #cc1515 18%, #8b0808 42%, #4d0000 68%, #180000 100%)',
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">

            {/* ── Col 1: Heading ─────────────────────────────── */}
            <div className="lg:w-[40%] lg:pr-10 xl:pr-14 flex-shrink-0">
              <h2
                className="text-white leading-[1.15] text-[28px] sm:text-[34px] xl:text-[40px]"
                style={{ fontWeight: 700 }}
              >
                Ready to Simplify
                <br />
                Facility Management?
              </h2>
            </div>

            {/* ── Vertical Divider ────────────────────────────── */}
            <div
              className="hidden lg:block flex-shrink-0 self-stretch w-px"
              style={{ background: 'rgba(255,255,255,0.28)' }}
            />

            {/* ── Col 2: Sub-text ─────────────────────────────── */}
            <div className="lg:flex-1 lg:px-10 xl:px-14">
              <p
                className="text-white leading-[1.6] text-[15px] xl:text-[16px]"
                style={{ opacity: 0.92 }}
              >
                {"Let's build safer, smarter and"}
                <br />
                more efficient facilities together.
              </p>
            </div>

            {/* ── Col 3: Buttons ──────────────────────────────── */}
            <div className="flex flex-col gap-[10px] flex-shrink-0 lg:min-w-[222px]">

              {/* Request Consultation */}
              <Link
                href="#"
                className="group flex items-center justify-between gap-5 px-5 py-[11px] text-white text-[10.5px] font-bold tracking-[0.20em] uppercase transition-all duration-200"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.80)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'white'
                  el.style.color = '#7a0000'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'transparent'
                  el.style.color = 'white'
                }}
              >
                <span>Request Consultation</span>
                <ArrowRight size={13} strokeWidth={2.5} />
              </Link>

              {/* Download Profile */}
              <Link
                href="#"
                className="flex items-center justify-between gap-5 px-5 py-[11px] text-white text-[10.5px] font-bold tracking-[0.20em] uppercase transition-all duration-200"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.80)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'white'
                  el.style.color = '#7a0000'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'transparent'
                  el.style.color = 'white'
                }}
              >
                <span>Download Profile</span>
                <Download size={13} strokeWidth={2.5} />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}