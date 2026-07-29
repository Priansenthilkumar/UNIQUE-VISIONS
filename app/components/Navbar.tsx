'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
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
    router.push(href)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060D0A]/90 backdrop-blur-2xl py-3 border-b border-emerald-500/20 shadow-2xl shadow-emerald-950/40'
            : 'bg-[#060D0A]/60 backdrop-blur-md py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <Logo size={42} showText={true} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 bg-[#0A1410]/80 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`font-jakarta text-xs font-semibold uppercase tracking-widest transition-colors duration-200 relative group py-1 ${
                    isActive ? 'text-emerald-400 font-bold' : 'text-slate-300 hover:text-emerald-400'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => router.push('/order')}
              className="btn-emerald text-xs uppercase tracking-wider font-bold"
            >
              <span>Get Started</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-emerald-400 p-2.5 rounded-xl bg-[#0A1410] border border-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#0A1410] border-l border-emerald-500/20 shadow-2xl z-50 flex flex-col p-6"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Logo size={36} showText={true} />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-3 py-8 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNav(link.href)}
                      className={`text-left font-syne text-base font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'text-slate-200 hover:text-emerald-400 hover:bg-emerald-500/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={16} className="opacity-60" />
                    </button>
                  )
                })}
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false)
                  router.push('/order')
                }}
                className="btn-emerald w-full py-4 uppercase tracking-wider text-sm font-bold"
              >
                <span>Start Project</span>
                <Sparkles size={16} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
