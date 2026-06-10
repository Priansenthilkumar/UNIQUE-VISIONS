'use client'
import { motion } from 'framer-motion'
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import Logo from './Logo'
import { useRouter } from 'next/navigation'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Help', href: '/help' },
  { label: 'Contact', href: '#contact' },
]
const serviceLinks = [
  'Social Media Management', 'Poster Design', 'Story Design',
  'Reel Editing', 'Video Editing', 'Web Design',
]

export default function Footer() {
  const router = useRouter()

  const handleLink = (href: string) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    else router.push(href)
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)', borderTop: '1px solid rgba(139,92,246,0.1)' }}>
      <div className="premium-line" />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-80 rounded-full pointer-events-none opacity-[0.04] blur-[120px]"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.5), transparent)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.03] blur-[140px]"
        style={{ background: 'radial-gradient(ellipse, rgba(109,40,217,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Logo size={40} />
              <div>
                <span className="font-cinzel text-base font-bold tracking-widest text-white/90 block leading-none">UNIQUE</span>
                <span className="font-cinzel text-base font-bold tracking-widest gradient-text block leading-none">VISIONS</span>
              </div>
            </div>
            <p className="font-poppins text-white/40 text-sm leading-relaxed mb-6">
              Premium digital marketing agency crafting strategies that drive real growth for your brand.
            </p>
            <div className="flex gap-3">
              {[{ icon: Instagram, href: '#', label: 'Instagram' }, { icon: Facebook, href: '#', label: 'Facebook' }, { icon: MessageCircle, href: 'https://wa.me/919363964142', label: 'WhatsApp' }].map((s, i) => (
                <motion.a 
                  key={i} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white/30 hover:text-[#fbbf24] transition-all duration-300"
                  style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)' }}
                  title={s.label}>
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-syne font-bold text-white/80 text-sm tracking-widest uppercase mb-7">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={link.label}>
                  <motion.button 
                    onClick={() => handleLink(link.href)}
                    whileHover={{ x: 4 }}
                    className="font-poppins text-white/40 text-sm hover:text-[#fbbf24] transition-colors duration-300 text-left flex items-center gap-2 group">
                    <motion.span 
                      className="w-0 h-px bg-gradient-to-r from-[#fbbf24] to-transparent group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-syne font-bold text-white/80 text-sm tracking-widest uppercase mb-7">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((s, i) => (
                <li key={s}>
                  <motion.button 
                    onClick={() => router.push(`/order?service=${encodeURIComponent(s)}`)}
                    whileHover={{ x: 4 }}
                    className="font-poppins text-white/40 text-sm hover:text-[#fbbf24] transition-colors duration-300 text-left flex items-center gap-2 group">
                    <motion.span 
                      className="w-0 h-px bg-gradient-to-r from-[#fbbf24] to-transparent group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                    {s}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-syne font-bold text-white/80 text-sm tracking-widest uppercase mb-7">Contact</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+919363964142" className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <Phone size={16} className="text-[#fbbf24] mt-0.5 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 6px rgba(251,191,36,0.5))' }} />
                  <div>
                    <p className="font-montserrat text-xs font-bold text-white/40 uppercase tracking-wider">Phone</p>
                    <span className="font-poppins text-white/50 text-sm group-hover:text-white transition-colors">+91 9363964142</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:Uniquevisions111@gmail.com" className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <Mail size={16} className="text-[#fbbf24] mt-0.5 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 6px rgba(251,191,36,0.5))' }} />
                  <div>
                    <p className="font-montserrat text-xs font-bold text-white/40 uppercase tracking-wider">Email</p>
                    <span className="font-poppins text-white/50 text-sm group-hover:text-white transition-colors">Uniquevisions111</span>
                    <span className="font-poppins text-white/50 text-sm group-hover:text-white transition-colors">@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <MapPin size={16} className="text-[#fbbf24] mt-0.5 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 6px rgba(251,191,36,0.5))' }} />
                  <div>
                    <p className="font-montserrat text-xs font-bold text-white/40 uppercase tracking-wider">Location</p>
                    <span className="font-poppins text-white/50 text-sm">Rasipuram, TN</span>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#fbbf24]/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-poppins text-white/30 text-xs">
            © 2026 <span className="text-[#fbbf24] font-semibold">Unique Visions</span>. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <a href="/privacy" className="font-poppins text-white/30 text-xs hover:text-[#fbbf24] transition-colors">Privacy Policy</a>
            <span className="w-px h-3 bg-white/10" />
            <a href="/terms" className="font-poppins text-white/30 text-xs hover:text-[#fbbf24] transition-colors">Terms of Service</a>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 z-40"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(109,40,217,0.15))',
            border: '1px solid rgba(139,92,246,0.3)',
            boxShadow: '0 8px 24px rgba(139,92,246,0.2)'
          }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  )
}
