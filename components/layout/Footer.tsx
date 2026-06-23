import Link from 'next/link'
import { Facebook, Twitter, Instagram, Briefcase, Mail, Download } from 'lucide-react'

const companyLinks = [
  { label: 'About SIS Group', href: '/company/about-sis' },
  { label: 'About OneSIS',    href: '/company/about-onesis' },
  { label: 'Board & Management', href: '/company/board' },
  { label: 'Why OneSIS',     href: '/company/why-onesis' },
  { label: 'News & Media',   href: '/company/news' },
  { label: 'Training',       href: '/company/training' },
]

const solutionLinks = [
  { label: 'Integrated FM',        href: '/solutions/integrated-fm' },
  { label: 'Property Management',  href: '/solutions/property-management' },
  { label: 'Specialized Services', href: '/solutions/specialized-services' },
  { label: 'Case Studies',         href: '/solutions/case-studies' },
]

const socialLinks = [
  { icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook' },
  { icon: Twitter,   href: 'https://twitter.com',   label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

const contactItems = [
  { icon: Briefcase, label: 'Careers',          href: '/career' },
  { icon: Mail,      label: 'Contact Us',        href: '/contact' },
  { icon: Download,  label: 'Download Profile',  href: '/company/profile' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 xl:py-16">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-12">

          {/* Brand Column */}
          <div className="col-span-2 xl:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-extrabold font-heading">
                <span className="text-brand-dark">One</span>
                <span className="text-primary">SIS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm xl:text-base leading-relaxed max-w-xs mb-6">
              A 100% subsidiary of SIS Ltd. — India&apos;s #1 Security &amp; Facility
              Management Group. Integrated Solutions, Self Delivered.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-heading font-bold text-brand-dark text-base xl:text-lg mb-5">
              Company
            </h5>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-sm xl:text-base font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="font-heading font-bold text-brand-dark text-base xl:text-lg mb-5">
              Solutions
            </h5>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-sm xl:text-base font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h5 className="font-heading font-bold text-brand-dark text-base xl:text-lg mb-5">
              Get in Touch
            </h5>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={href} className="flex items-start gap-3 text-sm xl:text-base">
                  <Icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-10 xl:mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="text-primary hover:underline font-semibold">
              OneSIS
            </Link>{' '}
            — All Rights Reserved. A SIS Group Company.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">
              Terms of use
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">
              Privacy notice
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}