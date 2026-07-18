'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '#contact' },
]

const linkVariants = {
  initial: { opacity: 0, y: -10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
  }),
  hover: { y: -3, color: '#317978' }
}

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!mounted) return null

  const handleNav = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl py-3 shadow-lg border-b border-primary/10' 
            : 'bg-white/60 backdrop-blur-md py-5 border-b border-primary/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a 
            href="#" 
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              animate={scrolled ? {} : { y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Logo size={48} />
            </motion.div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-playfair text-sm font-bold tracking-wider text-primary group-hover:text-primary-dark transition-colors duration-300">UNIQUE</span>
              <span className="font-playfair text-sm font-bold tracking-wider bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent group-hover:from-primary to-primary-dark transition-all duration-300">VISIONS</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.button 
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onClick={() => handleNav(link.href)}
                className="font-montserrat text-xs font-bold text-text-muted tracking-widest uppercase transition-colors relative group"
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Animated underline */}
                <motion.span 
                  className="absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-primary-light to-primary rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Background glow */}
                <motion.span 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/15"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-3"
          >
            <motion.button 
              onClick={() => router.push('/order')} 
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-primary p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
              onClick={() => setMenuOpen(false)} 
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 flex flex-col border-l border-primary/10"
            >
              {/* Mobile Menu Header */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-6 border-b border-primary/15 bg-gradient-to-r from-white/50 to-white/30"
              >
                <span className="font-cinzel text-lg font-bold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">UNIQUE VISIONS</span>
                <motion.button 
                  onClick={() => setMenuOpen(false)} 
                  className="text-text-muted hover:text-primary transition-colors p-1.5 hover:bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>

              {/* Mobile Menu Items */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-2 p-6 flex-1"
              >
                {navLinks.map((link, i) => (
                  <motion.button 
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.15 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ x: 8 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left font-medium text-text-muted hover:text-primary py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all relative group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {link.label}
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} className="rotate-90" />
                      </motion.span>
                    </span>
                  </motion.button>
                ))}

                {/* Mobile CTA Button */}
                <motion.button 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setMenuOpen(false); router.push('/order') }}
                  className="btn-primary mt-6 py-4 px-6 rounded-xl font-semibold shadow-lg w-full"
                >
                  Get Started Now
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
