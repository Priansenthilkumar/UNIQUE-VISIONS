'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Briefcase, Star, TrendingUp } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRef, useState, useEffect } from 'react'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false })

const stats = [
  { icon: Users, value: '10+', label: 'Happy Clients' },
  { icon: Briefcase, value: '50+', label: 'Projects Done' },
  { icon: Star, value: '100%', label: 'Satisfaction' },
  { icon: TrendingUp, value: '2026', label: 'Founded' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
      style={{ background: 'linear-gradient(160deg, #f8faf8 0%, #f0f5f0 40%, #faf8f5 100%)' }}>
      <ParticleBackground />

      {/* Large decorative orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(122,157,127,0.18) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(26,77,61,0.12) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(200,168,122,0.1) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(26,77,61,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,77,61,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-10 relative"
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(26,77,61,0.15)',
            boxShadow: '0 8px 32px rgba(26,77,61,0.08), inset 0 1px 0 rgba(255,255,255,0.9)'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles size={14} className="text-primary" />
          </motion.div>
          <span className="font-josefin text-[0.65rem] tracking-[0.25em] text-primary-dark uppercase">Premium Digital Marketing Agency</span>
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary"
          />
        </motion.div>

        {/* Main heading */}
        <div className="mb-8 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="font-playfair font-bold leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            <span className="block text-[#1a2a1a]">Elevate Your</span>
            <span className="block relative">
              <span
                className="relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #1a4d3d 0%, #3a8a5c 35%, #c8a87a 65%, #1a4d3d 100%)',
                  backgroundSize: '300% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'foilShift 5s linear infinite',
                }}
              >
                Digital Presence
              </span>
              {/* Underline accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full origin-left"
                style={{ background: 'linear-gradient(90deg, #1a4d3d, #c8a87a, #1a4d3d)' }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-poppins text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We craft strategic digital solutions that transform brands into market leaders — from social media to stunning content creation.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <motion.button
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative overflow-hidden px-10 py-4 rounded-full font-josefin text-xs tracking-[0.2em] text-white uppercase shadow-xl group"
            style={{ background: 'linear-gradient(135deg, #1a4d3d 0%, #0d2a25 100%)', boxShadow: '0 12px 40px rgba(26,77,61,0.35), inset 0 1px 0 rgba(255,255,255,0.2)' }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, #2e6b50 0%, #1a4d3d 100%)' }}
            />
            <span className="relative z-10 flex items-center gap-3">
              Get Started Today
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={16} />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 rounded-full font-josefin text-xs tracking-[0.2em] text-primary uppercase relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(26,77,61,0.2)',
              boxShadow: '0 8px 24px rgba(26,77,61,0.08), inset 0 1px 0 rgba(255,255,255,0.9)'
            }}
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(26,77,61,0.1)',
                boxShadow: '0 4px 24px rgba(26,77,61,0.06), inset 0 1px 0 rgba(255,255,255,0.8)'
              }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(26,77,61,0.06) 0%, rgba(122,157,127,0.04) 100%)' }}
              />
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)' }} />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(26,77,61,0.12) 0%, rgba(122,157,127,0.08) 100%)' }}>
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-1">{stat.value}</div>
                <p className="font-josefin text-[0.6rem] tracking-[0.15em] text-text-muted uppercase">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity cursor-pointer"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-josefin text-[0.6rem] tracking-[0.2em] text-text-muted uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
