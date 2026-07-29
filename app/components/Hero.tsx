'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Briefcase, Star, TrendingUp, Play, CheckCircle2 } from 'lucide-react'
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
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-[#060D0A]"
    >
      <ParticleBackground />

      {/* Cyber Emerald Ambient Spotlight Orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(5,150,105,0.05) 60%, transparent 80%)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(230,198,135,0.04) 60%, transparent 80%)' }}
        />
      </motion.div>

      {/* Tech Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 bg-[#0A1410]/80 border border-emerald-500/30 backdrop-blur-xl shadow-lg shadow-emerald-950/50"
        >
          <Sparkles size={14} className="text-emerald-400 animate-pulse" />
          <span className="font-jakarta text-xs font-bold tracking-widest text-emerald-300 uppercase">
            Next-Gen Digital Marketing Agency
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </motion.div>

        {/* Headline */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-syne font-extrabold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.08] tracking-tight mb-6"
          >
            <span className="block text-slate-100">Transform Brands With</span>
            <span className="gradient-text-emerald">Visionary Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-jakarta text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We accelerate business growth with high-converting social media strategy, viral reel editing, luxury brand design, and AI-powered web solutions.
          </motion.p>
        </div>

        {/* CTA Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-emerald px-8 py-4 uppercase text-xs tracking-widest font-bold shadow-xl shadow-emerald-500/25 w-full sm:w-auto"
          >
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glass px-8 py-4 uppercase text-xs tracking-widest font-bold w-full sm:w-auto"
          >
            <span>Explore Services</span>
          </motion.button>
        </motion.div>

        {/* Floating Showcase Visual Card & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-20"
        >
          <div className="glass-card p-6 md:p-8 border border-white/10 rounded-3xl relative overflow-hidden bg-gradient-to-b from-[#0A1410]/90 to-[#0F1F19]/90">
            {/* Top Shine */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  <CheckCircle2 size={14} />
                  <span>Proven Growth Engine</span>
                </div>
                <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-2">
                  Social Media & Creative Content Done Right
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  From custom Instagram reels to full-scale monthly management, our strategies consistently drive higher engagement and sales conversions.
                </p>
              </div>

              <div className="bg-[#060D0A]/80 p-5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Play size={20} className="ml-1 fill-emerald-400" />
                </div>
                <span className="font-syne text-2xl font-extrabold text-white">500K+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">Views Delivered</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/20">
                <stat.icon size={22} />
              </div>
              <div className="font-syne text-3xl md:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <p className="font-jakarta text-xs uppercase tracking-widest text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
