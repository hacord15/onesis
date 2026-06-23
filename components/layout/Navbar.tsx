'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">

          {/* Logo */}
      <Link href="/" className="flex-shrink-0">
  <Image
    src="/assets/logo_oneSIS.jpeg"
    alt="OneSIS Logo"
    width={180}
    height={60}
    className="h-12 w-auto lg:h-14"
    priority
  />
</Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-semibold text-[15px] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:flex items-center bg-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-600 transition-all duration-200 shadow-md shadow-primary/20"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="border-t border-gray-100 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-gray-700 hover:text-primary hover:bg-primary-25 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
