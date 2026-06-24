'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// ─── SVG Icons (exact match to the image) ─────────────────────────
// Custom SVG icons recreated to match the original rounded-square style

function IconOnePointApp() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#cc1a1a" strokeWidth="2.5" />
      <line x1="12" y1="12" x2="28" y2="12" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="18" x2="22" y2="18" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="24" x2="25" y2="24" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" />
      {/* Cursor/pointer arrow */}
      <path d="M30 28 L30 42 L34 38 L38 44 L41 42 L37 36 L42 36 Z"
        stroke="#cc1a1a" strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function IconIOPS() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Shield outline */}
      <path d="M24 4 L40 10 L40 26 C40 35 32 42 24 44 C16 42 8 35 8 26 L8 10 Z"
        stroke="#cc1a1a" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Circular eye in center */}
      <circle cx="24" cy="24" r="6" stroke="#cc1a1a" strokeWidth="2" />
      <circle cx="24" cy="24" r="2.5" fill="#cc1a1a" />
      {/* Eye lines */}
      <path d="M14 24 C17 18 31 18 34 24 C31 30 17 30 14 24 Z"
        stroke="#cc1a1a" strokeWidth="1.8" fill="none" />
    </svg>
  )
}

function IconFactech() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Person */}
      <circle cx="20" cy="14" r="6" stroke="#cc1a1a" strokeWidth="2.5" />
      <path d="M8 38 C8 30 13 25 20 25 C24 25 27 27 30 30"
        stroke="#cc1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Settings gear badge */}
      <circle cx="36" cy="36" r="8" stroke="#cc1a1a" strokeWidth="2" />
      <circle cx="36" cy="36" r="3" stroke="#cc1a1a" strokeWidth="2" />
      <line x1="36" y1="27" x2="36" y2="25" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="47" x2="36" y2="45" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" />
      <line x1="27" y1="36" x2="25" y2="36" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" />
      <line x1="47" y1="36" x2="45" y2="36" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconMTrainer() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Flask/beaker body */}
      <path d="M18 6 L18 20 L8 38 C8 40 10 42 12 42 L36 42 C38 42 40 40 38 38 L28 20 L28 6 Z"
        stroke="#cc1a1a" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Flask neck line */}
      <line x1="15" y1="6" x2="33" y2="6" stroke="#cc1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bubbles inside */}
      <circle cx="19" cy="34" r="2.5" stroke="#cc1a1a" strokeWidth="1.8" />
      <circle cx="28" cy="30" r="1.8" stroke="#cc1a1a" strokeWidth="1.5" />
    </svg>
  )
}

// ─── Pre-calculated wave particles (fixed values — no Math.random) ─
const PARTICLES: { x: number; y: number; r: number; o: number }[] = [
  { x: 660, y: 18,  r: 2.5, o: 0.95 }, { x: 675, y: 42,  r: 1.8, o: 0.85 },
  { x: 648, y: 65,  r: 2.2, o: 0.90 }, { x: 630, y: 88,  r: 1.5, o: 0.80 },
  { x: 615, y: 112, r: 2.0, o: 0.85 }, { x: 598, y: 135, r: 1.8, o: 0.80 },
  { x: 578, y: 158, r: 2.3, o: 0.88 }, { x: 555, y: 182, r: 1.6, o: 0.78 },
  { x: 535, y: 208, r: 2.1, o: 0.85 }, { x: 510, y: 230, r: 1.9, o: 0.82 },
  { x: 490, y: 255, r: 2.4, o: 0.90 }, { x: 468, y: 278, r: 1.7, o: 0.78 },
  { x: 448, y: 302, r: 2.0, o: 0.82 }, { x: 428, y: 328, r: 1.8, o: 0.75 },
  { x: 410, y: 352, r: 2.2, o: 0.80 }, { x: 395, y: 378, r: 1.5, o: 0.70 },
  // Secondary scatter particles
  { x: 690, y: 100, r: 1.4, o: 0.65 }, { x: 695, y: 185, r: 1.2, o: 0.60 },
  { x: 685, y: 268, r: 1.6, o: 0.65 }, { x: 682, y: 345, r: 1.3, o: 0.58 },
  { x: 640, y: 30,  r: 1.0, o: 0.55 }, { x: 625, y: 75,  r: 1.2, o: 0.60 },
  { x: 572, y: 148, r: 1.1, o: 0.58 }, { x: 520, y: 222, r: 1.3, o: 0.62 },
  { x: 472, y: 290, r: 1.0, o: 0.55 }, { x: 425, y: 362, r: 1.2, o: 0.52 },
  // Bright highlight dots on the main curve
  { x: 645, y: 52,  r: 3.0, o: 1.00 }, { x: 588, y: 172, r: 3.2, o: 1.00 },
  { x: 523, y: 242, r: 2.8, o: 0.95 }, { x: 455, y: 318, r: 3.0, o: 0.92 },
]

// ─── Red Wave SVG ─────────────────────────────────────────────────
function RedWave() {
  return (
    <svg
      aria-hidden="true"
      className="absolute right-0 top-0 h-full pointer-events-none select-none"
      style={{ width: '62%' }}
      viewBox="0 0 700 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Ambient glow gradient */}
        <radialGradient id="ambientGlow" cx="85%" cy="45%" r="55%">
          <stop offset="0%"   stopColor="#cc1414" stopOpacity="0.30" />
          <stop offset="45%"  stopColor="#8b0000" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0"    />
        </radialGradient>
        {/* Secondary glow - bottom right */}
        <radialGradient id="glowBot" cx="90%" cy="80%" r="35%">
          <stop offset="0%"   stopColor="#ff2020" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#000"    stopOpacity="0"    />
        </radialGradient>
        {/* Particle glow filter */}
        <filter id="particleGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Line glow filter */}
        <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background ambient red glow */}
      <rect width="100%" height="100%" fill="url(#ambientGlow)" />
      <rect width="100%" height="100%" fill="url(#glowBot)" />

      {/* Filled wave shape (subtle red fill) */}
      <path
        d="M 700 0 C 580 20 620 100 520 155 C 420 210 500 295 400 348 C 340 378 370 395 350 400 L 700 400 Z"
        fill="#cc1414" fillOpacity="0.06"
      />
      <path
        d="M 700 0 C 610 40 640 115 545 168 C 445 222 522 308 422 360 C 365 388 392 398 375 400 L 700 400 Z"
        fill="#cc1414" fillOpacity="0.04"
      />

      {/* Main wave lines with glow */}
      <g filter="url(#lineGlow)" stroke="#dd1515" strokeWidth="1.5" fill="none" opacity="0.65">
        <path d="M 700 8  C 575 35 618 110 512 162 C 408 214 490 298 388 350 C 328 380 362 396 340 400" />
        <path d="M 700 22 C 590 48 628 122 526 174 C 424 226 504 310 404 360 C 346 386 376 398 356 400" />
        <path d="M 700 38 C 605 60 636 132 538 184 C 438 236 515 318 418 368 C 362 392 388 400 370 400" />
      </g>

      {/* Thinner accent lines */}
      <g filter="url(#lineGlow)" stroke="#ff3030" strokeWidth="0.8" fill="none" opacity="0.40">
        <path d="M 700 55 C 618 75 648 142 550 192 C 450 244 528 328 432 376" />
        <path d="M 700 72 C 630 90 658 152 562 202 C 462 252 540 336 444 382" />
        <path d="M 700 0  C 555 25 605 102 498 152 C 392 202 476 288 374 340 C 314 370 348 390 326 400" />
      </g>

      {/* Particle dots */}
      <g filter="url(#particleGlow)">
        {PARTICLES.map(({ x, y, r, o }, i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#ff2828" opacity={o} />
        ))}
      </g>
    </svg>
  )
}

// ─── Feature data ─────────────────────────────────────────────────
const features = [
  {
    Icon: IconOnePointApp,
    name: 'ONE POINT APP',
    desc: 'Real-time reporting and task management in your pocket.',
  },
  {
    Icon: IconIOPS,
    name: 'iOPS',
    desc: 'Integrated Operations Management Platform.',
  },
  {
    Icon: IconFactech,
    name: 'FACTECH',
    desc: 'Smart FM through digital workflows and automation.',
  },
  {
    Icon: IconMTrainer,
    name: 'M-TRAINER',
    desc: 'Digital training and upskilling platform for frontline staff.',
  },
]

// ─── Main Section ─────────────────────────────────────────────────
export default function TechPlatformsSection() {
  return (
    <section className="relative bg-[#0c0b0b] overflow-hidden">
      {/* Red wave background */}
      <RedWave />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 sm:px-8 xl:px-12 py-14 xl:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-0">

          {/* ── Left: Heading + CTA ──────────────────────────── */}
          <div className="w-full lg:w-[34%] lg:pr-10 xl:pr-14 pb-10 lg:pb-0 lg:border-r border-white/15">
            {/* Eyebrow */}
            <p className="text-[#cc1a1a] text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              Technology that powers every site
            </p>

            {/* Headline */}
            <h2 className="text-white font-bold text-4xl sm:text-5xl xl:text-[52px] leading-[1.08] mb-5">
              Intelligence.{' '}
              <br />
              Visibility.
              <br />
              Control.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm xl:text-[15px] leading-relaxed mb-8 max-w-xs">
              Our proprietary platforms bring visibility, automation and intelligence to facility operations.
            </p>

            {/* Ghost CTA button */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-white/70 text-white text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-3 hover:bg-white hover:text-black transition-all duration-200"
            >
              See technology in action
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── Right: 4 Feature Columns ─────────────────────── */}
          <div className="w-full lg:w-[66%] grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/15">
            {features.map(({ Icon, name, desc }) => (
              <div
                key={name}
                className="flex flex-col gap-4 px-6 xl:px-8 py-2 lg:py-0"
              >
                {/* Icon — rounded square with red border + subtle bg */}
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-[#cc1a1a]/10 border border-[#cc1a1a]/50 flex items-center justify-center p-2.5 flex-shrink-0">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-[#cc1a1a] text-[11px] xl:text-[12px] font-extrabold tracking-[0.15em] uppercase leading-snug">
                  {name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm xl:text-[14px] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}