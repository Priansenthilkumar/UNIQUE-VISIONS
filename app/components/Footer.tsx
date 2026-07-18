'use client'
import { useEffect, useState } from 'react'
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleLink = (href: string) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    else router.push(href)
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-white/95 to-white/90 border-t border-primary/10">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          x: [0, 40, 0], 
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-80 rounded-full pointer-events-none opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgba(26,77,61,0.3), transparent)' }} 
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          y: [0, 40, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-6 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgba(26,77,61,0.2), transparent)' }} 
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <Logo size={40} />
              </motion.div>
              <div>
                <span className="font-playfair text-base font-bold tracking-widest text-primary block leading-none">UNIQUE</span>
                <span className="font-playfair text-base font-bold tracking-widest bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent block leading-none">VISIONS</span>
              </div>
            </motion.div>
            <p className="font-poppins text-text-muted text-sm leading-relaxed mb-8">
              Premium digital marketing agency crafting strategies that drive real growth for your brand.
            </p>
            <div className="flex gap-4">
              {[{ icon: Instagram, href: '#', label: 'Instagram' }, { icon: Facebook, href: '#', label: 'Facebook' }, { icon: MessageCircle, href: 'https://wa.me/919363964142', label: 'WhatsApp' }].map((s, i) => (
                <motion.a 
                  key={i} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.2 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-text-muted hover:text-white transition-all duration-300 backdrop-blur-md bg-white/80 border border-primary/20 hover:border-primary/60 hover:bg-primary/20 shadow-lg"
                  title={s.label}
                >
                  <s.icon size={18} />
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
            <h4 className="font-space font-bold text-text-muted text-sm tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  <motion.button 
                    onClick={() => handleLink(link.href)}
                    whileHover={{ x: 6 }}
                    className="font-poppins text-text-muted text-sm hover:text-primary transition-colors duration-300 text-left flex items-center gap-3 group"
                  >
                    <motion.span 
                      className="w-1.5 h-0.5 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    {link.label}
                  </motion.button>
                </motion.li>
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
            <h4 className="font-space font-bold text-text-muted text-sm tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((s, i) => (
                <motion.li 
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  <motion.button 
                    onClick={() => router.push(`/order?service=${encodeURIComponent(s)}`)}
                    whileHover={{ x: 6 }}
                    className="font-poppins text-text-muted text-sm hover:text-primary transition-colors duration-300 text-left flex items-center gap-3 group"
                  >
                    <motion.span 
                      className="w-1.5 h-0.5 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    {s}
                  </motion.button>
                </motion.li>
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
            <h4 className="font-space font-bold text-text-muted text-sm tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              Contact
            </h4>
            <ul className="space-y-6">
              <li>
                <motion.a 
                  href="tel:+919363964142"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/40 transition-all"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Phone size={14} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-wider">Phone</p>
                    <span className="font-poppins text-text-muted text-sm group-hover:text-primary transition-colors">+91 9363964142</span>
                  </div>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="mailto:Uniquevisions111@gmail.com"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/40 transition-all"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Mail size={14} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-wider">Email</p>
                    <span className="font-poppins text-text-muted text-sm group-hover:text-primary transition-colors line-clamp-2">Uniquevisions111@gmail.com</span>
                  </div>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/40 transition-all"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MapPin size={14} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-wider">Location</p>
                    <span className="font-poppins text-text-muted text-sm">Rasipuram, TN</span>
                  </div>
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-12"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-poppins text-text-muted text-xs"
          >
            © 2026 <span className="text-primary font-semibold">Unique Visions</span>. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 flex-wrap justify-center sm:justify-end"
          >
            <motion.a 
              href="/privacy" 
              whileHover={{ color: '#1a4d3d' }}
              className="font-poppins text-text-muted text-xs hover:text-primary transition-colors"
            >
              Privacy Policy
            </motion.a>
            <span className="w-px h-3 bg-primary/20" />
            <motion.a 
              href="/terms" 
              whileHover={{ color: '#1a4d3d' }}
              className="font-poppins text-text-muted text-xs hover:text-primary transition-colors"
            >
              Terms of Service
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl flex items-center justify-center text-primary transition-all duration-300 z-40 shadow-lg backdrop-blur-md bg-white border border-primary/30 hover:bg-primary/10 hover:border-primary/60"
        >
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowUp size={22} />
          </motion.div>
        </motion.button>
      </div>
    </footer>
  )
}
