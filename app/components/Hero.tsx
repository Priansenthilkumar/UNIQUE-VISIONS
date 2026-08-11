'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Users,
  Briefcase,
  Star,
  TrendingUp,
  Play,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Flame,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const stats = [
  { icon: Users, value: '10+', label: 'Active Retainer Clients' },
  { icon: Briefcase, value: '50+', label: 'Projects Delivered' },
  { icon: Star, value: '100%', label: 'Client Satisfaction' },
  { icon: TrendingUp, value: '2026', label: 'Agency Growth Engine' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 bg-[#070709]">
      
      {/* Subtle Satin Warm Lighting Background */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(225,29,72,0.15) 50%, transparent 80%)' }}
      />
      <div
        className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,209,102,0.3) 0%, transparent 70%)' }}
      />

      {/* Architectural Fine Line Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Architectural Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#12121A] border border-amber-500/30 backdrop-blur-xl shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-jakarta text-xs font-bold tracking-widest text-amber-300 uppercase">
                Premium Digital Growth & Content Studio
              </span>
              <span className="text-[10px] text-slate-400 border-l border-white/10 pl-3 hidden sm:inline">
                Est. 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-syne font-extrabold text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[1.08] tracking-tight text-white"
            >
              We Turn Social Feeds Into <br className="hidden sm:inline" />
              <span className="font-serif-accent italic font-normal text-amber-300">Viral Brand</span>{' '}
              <span className="gradient-text-gold">Engines</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-jakarta text-slate-300 text-base md:text-xl max-w-2xl leading-relaxed"
            >
              From viral Instagram Reels and high-converting creative posters to full monthly brand management & Next.js websites — we engineer measurable digital dominance.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/order"
                className="btn-gold px-8 py-4 uppercase text-xs tracking-widest font-bold inline-flex items-center justify-center gap-2"
              >
                <span>Book A Project</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/services"
                className="btn-glass px-8 py-4 uppercase text-xs tracking-widest font-bold inline-flex items-center justify-center"
              >
                <span>Explore Services</span>
              </Link>

              <a
                href="#portfolio"
                className="text-slate-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 py-3 px-4 transition-colors sm:ml-2"
              >
                <span>View Portfolio</span>
                <Sparkles size={14} className="text-amber-400" />
              </a>
            </motion.div>

            {/* Micro Client Proof Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400 font-jakarta"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-amber-400" />
                <span>Transparent Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame size={16} className="text-rose-400" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-amber-400" />
                <span>100% Satisfaction</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual Interactive Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="luxury-card-gold p-6 rounded-3xl relative overflow-hidden bg-gradient-to-b from-[#14141E]/95 via-[#0D0D14]/95 to-[#070709]/95 border border-amber-500/40 shadow-2xl">
              
              {/* Highlight Banner Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-syne text-xs font-bold uppercase tracking-wider text-amber-300">
                    Live Deliverables Showcase
                  </span>
                </div>
                <span className="text-[10px] bg-amber-500/10 border border-amber-500/30 text-amber-300 px-2.5 py-0.5 rounded-full font-bold">
                  VIRAL REELS
                </span>
              </div>

              {/* Simulated Reel Player Frame */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group mb-5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Reel Editing Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label="Play sample reel preview"
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 hover:scale-110 transition-transform"
                  >
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </button>
                </div>

                {/* Floating Metrics Badge on Video Frame */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="font-syne text-xs font-bold text-white">450K+ Views</span>
                </div>

                {/* Bottom Video Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block mb-1">
                    Featured Deliverable • Short Reel
                  </span>
                  <p className="font-syne font-bold text-white text-base">
                    Beat-Synced Kinetic Caption Reel
                  </p>
                </div>
              </div>

              {/* Bottom Quick Feature Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="text-amber-400 font-syne font-extrabold text-xl">₹200</div>
                  <div className="text-slate-400 text-[11px] font-jakarta">Starting per Reel Video</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="text-emerald-400 font-syne font-extrabold text-xl">24 Hours</div>
                  <div className="text-slate-400 text-[11px] font-jakarta">Average Turnaround</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="luxury-card p-6 text-center border border-white/10 hover:border-amber-500/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={22} />
              </div>
              <div className="font-syne text-3xl md:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <p className="font-jakarta text-xs uppercase tracking-widest text-slate-400 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
