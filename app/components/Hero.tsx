'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Briefcase, Star, TrendingUp, Play, CheckCircle2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-[#0B0304]"
    >
      <ParticleBackground />

      {/* Crimson Ambient Spotlight Orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full blur-[140px] opacity-35 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.3) 0%, rgba(153,27,27,0.08) 60%, transparent 80%)' }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(225,29,72,0.05) 60%, transparent 80%)' }}
        />
      </motion.div>

      {/* Tech Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(225,29,72,1) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,72,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 bg-[#120507]/80 border border-rose-500/30 backdrop-blur-xl shadow-lg shadow-rose-950/50"
        >
          <Sparkles size={14} className="text-rose-400 animate-pulse" />
          <span className="font-jakarta text-xs font-bold tracking-widest text-rose-300 uppercase">
            Premium Digital Marketing Agency
          </span>
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
        </motion.div>

        {/* Headline */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-syne font-extrabold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.08] tracking-tight mb-6"
          >
            <span className="block text-slate-100">Elevate Your Brand With</span>
            <span className="gradient-text-crimson">Unique Visions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-jakarta text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
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
          <Link
            href="/contact"
            className="btn-crimson px-8 py-4 uppercase text-xs tracking-widest font-bold w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/services"
            className="btn-glass px-8 py-4 uppercase text-xs tracking-widest font-bold w-full sm:w-auto inline-flex items-center justify-center text-center"
          >
            <span>Explore Services</span>
          </Link>
        </motion.div>

        {/* Floating Showcase Visual Card & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-20"
        >
          <div className="glass-card p-6 md:p-8 border border-rose-500/20 rounded-3xl relative overflow-hidden bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90">
            {/* Top Shine */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  <CheckCircle2 size={14} />
                  <span>Proven Growth Engine</span>
                </div>
                <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-2">
                  Social Media & Creative Content Done Right
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  From custom Instagram reels to full-scale monthly management, our strategies consistently drive higher engagement and sales conversions.
                </p>
              </div>

              <div className="bg-[#0B0304]/80 p-5 rounded-2xl border border-rose-500/20 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                  <Play size={20} className="ml-1 fill-rose-400" />
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
            <div
              key={i}
              className="glass-card p-6 text-center border border-rose-500/20 hover:border-rose-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={22} />
              </div>
              <div className="font-syne text-3xl md:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <p className="font-jakarta text-xs uppercase tracking-widest text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
