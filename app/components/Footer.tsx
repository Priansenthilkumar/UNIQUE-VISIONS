'use client'
import { Instagram, Facebook, MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Pricing Plans', href: '/pricing' },
  { label: 'Client Reviews', href: '/reviews' },
  { label: 'Help Center', href: '/help' },
  { label: 'Contact Us', href: '/contact' },
]

const serviceLinks = [
  'Social Media Management', 'Poster Design', 'Story Design',
  'Reel Editing', 'Video Editing', 'Web Design',
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#080203] border-t border-rose-500/20 text-slate-400 font-jakarta pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <Logo size={42} showText={true} />
            </Link>
            <p className="font-jakarta text-slate-400 text-sm leading-relaxed">
              Premium digital marketing & design agency elevating brands with result-oriented digital solutions.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: MessageCircle, href: 'https://wa.me/919363964142', label: 'WhatsApp' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#120507] border border-rose-500/20 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500/50 transition-all"
                  title={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-jakarta text-xs text-slate-400 hover:text-rose-400 transition-colors uppercase tracking-wider block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href={`/order?service=${encodeURIComponent(s)}`}
                    className="font-jakarta text-xs text-slate-400 hover:text-rose-400 transition-colors uppercase tracking-wider block text-left"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm uppercase tracking-widest mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-rose-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold">Call Us</p>
                  <a href="tel:+919363964142" className="text-sm font-semibold text-white hover:text-rose-400 transition-colors">
                    +91 9363964142
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-rose-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold">Location</p>
                  <p className="text-sm font-semibold text-white">Rasipuram, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Unique Visions. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-rose-400 hover:text-rose-300 font-bold uppercase tracking-wider transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  )
}
