'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogIn, LogOut, Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Help', href: '/help' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const router = useRouter()
  const { user, openAuth, logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!mounted) return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-transparent py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={48} />
          <span className="hidden sm:block font-cinzel text-lg tracking-wider text-[#1F2A1F]">UNIQUE <span className="gradient-text font-bold">VISIONS</span></span>
        </div>
      </div>
    </nav>
  )

  const handleNav = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    else router.push(href)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled ? 'navbar-light py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <Logo size={56} />
            </motion.div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-cinzel text-sm tracking-wider text-[#1F2A1F]">UNIQUE</span>
              <span className="font-cinzel text-sm tracking-wider gradient-text font-bold">VISIONS</span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <motion.button key={link.href} onClick={() => handleNav(link.href)}
                whileHover={{ y: -2 }}
                className="relative font-montserrat text-[10px] font-bold text-[#1F2A1F]/70 hover:text-[#0F6A3D] tracking-[0.2em] uppercase transition-colors duration-300 group">
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-primary via-primary-light to-primary" />
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-6 h-6 rounded-full hero-shape flex items-center justify-center text-white text-xs font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-inter text-[#1F2A1F]/80 text-xs">{user.name.split(' ')[0]}</span>
                </div>
                <motion.button onClick={() => logout()} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-[#1F2A1F]/60 hover:text-[#0F6A3D] transition-colors text-xs font-inter">
                  <LogOut size={12} /> Logout
                </motion.button>
              </div>
            ) : (
              <>
                <motion.button onClick={() => openAuth()} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 font-montserrat text-[10px] font-bold text-[#1F2A1F]/70 hover:text-[#0F6A3D] tracking-[0.2em] uppercase transition-colors">
                  <LogIn size={13} /> Login
                </motion.button>
                <motion.button onClick={() => router.push('/order')} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="btn-primary px-6 py-2.5 rounded-full font-montserrat text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                  Get Started
                </motion.button>
              </>
            )}
          </div>

          <button className="md:hidden text-[#1F2A1F]/80 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
              onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-72 z-[999] flex flex-col"
              style={{ background: '#080810', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="font-cinzel text-base tracking-wider text-white">UNIQUE <span className="gradient-text font-bold">VISIONS</span></span>
                <button onClick={() => setMenuOpen(false)} className="text-white/25 hover:text-white"><X size={18} /></button>
              </div>
              <div className="flex flex-col gap-1 p-5 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button key={link.href}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left font-montserrat text-xs font-bold text-white/40 hover:text-white py-3 px-4 rounded-xl hover:bg-white/4 transition-all tracking-[0.2em] uppercase">
                    {link.label}
                  </motion.button>
                ))}
                <motion.button initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.06 }}
                  onClick={() => { setMenuOpen(false); router.push('/order') }}
                  className="btn-primary mt-4 py-3 px-4 rounded-full font-montserrat text-xs font-bold text-white tracking-[0.2em] uppercase">
                  Get Started
                </motion.button>
                {!user && (
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    onClick={() => { setMenuOpen(false); openAuth() }}
                    className="mt-2 py-3 px-4 font-montserrat text-[10px] font-bold text-white/30 hover:text-white/60 tracking-[0.2em] uppercase flex items-center gap-2">
                    <LogIn size={12} /> Login
                  </motion.button>
                )}
              </div>
              <div className="p-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="text-white/20 text-xs font-inter">+91 9363964142</p>
                <p className="text-white/20 text-xs font-inter mt-1">Uniquevisions111@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
