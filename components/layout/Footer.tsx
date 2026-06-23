import Link from 'next/link'
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react'

const mainLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Contact v2', href: '/contact-v2' },
]

const shopLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'With sidebar', href: '/shop/sidebar' },
  { label: 'Product detail', href: '/shop/product' },
  { label: 'Product detail v2', href: '/shop/product-v2' },
  { label: 'Cart', href: '/cart' },
  { label: 'Checkout', href: '/checkout' },
  { label: 'Order confirmation', href: '/order' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
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
                <span className="text-brand-dark">Inno</span>
                <span className="text-primary">var</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm xl:text-base leading-relaxed max-w-xs mb-6">
              A business consulting firm that offers a range of services to help clients improve and scale their businesses globally.
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

          {/* Main Pages */}
          <div>
            <h5 className="font-heading font-bold text-brand-dark text-base xl:text-lg mb-5">
              Main pages
            </h5>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
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

          {/* Shop Pages */}
          <div>
            <h5 className="font-heading font-bold text-brand-dark text-base xl:text-lg mb-5">
              Shop pages
            </h5>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
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

          {/* Office */}
          <div>
            <h5 className="font-heading font-bold text-brand-dark text-base xl:text-lg mb-5">
              Office
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm xl:text-base">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>116 Royal ln, London</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm xl:text-base">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Innovar@business.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm xl:text-base">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>+123-234-324-917</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-10 xl:mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025{' '}
            <Link href="/" className="text-primary hover:underline font-semibold">
              Innovar
            </Link>{' '}
            — All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">
              Terms of use
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">
              Privacy notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
