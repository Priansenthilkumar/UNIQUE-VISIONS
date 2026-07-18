'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Briefcase, Star, TrendingUp } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false })

const stats = [
  { icon: Users, value: '10+', label: 'Happy Clients' },
  { icon: Briefcase, value: '50+', label: 'Projects Completed' },
  { icon: Star, value: '100%', label: 'Client Satisfaction' },
  { icon: TrendingUp, value: '2026', label: 'Founded' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
  }
}

export default function Hero() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-24 md:pt-0">
      <ParticleBackground />
      
      {/* Animated gradient orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-primary-light/20 to-secondary/15 blur-3xl opacity-30 pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -80, 0], 
          y: [0, -60, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-secondary/15 to-primary-light/10 blur-3xl opacity-25 pointer-events-none"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,157,127,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(107,144,118,0.04),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-primary/15 mb-8 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/90"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-light to-primary shadow-glow-sm"
          />
          <span className="text-primary-dark text-[0.7rem] font-semibold tracking-wider uppercase">Premium Digital Marketing Agency</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-playfair font-bold mb-4 leading-tight text-glossy"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            <span className="block text-text">Elevate Your</span>
            <span className="block bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent animate-pulse-glow" style={{
              backgroundSize: '200% 200%',
              animation: 'gradientShift 6s ease infinite'
            }}>
              Digital Presence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="font-poppins text-text-muted text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We craft strategic digital solutions that transform brands into market leaders. From social media excellence to stunning content creation.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={18} />
              </motion.div>
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 rounded-full font-semibold text-base text-primary border-2 border-primary bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 border-t border-primary/10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <motion.div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-light/10 to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-primary/15 shadow-md flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:border-primary/30 group-hover:bg-white transition-all duration-300">
                  <stat.icon size={28} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </motion.div>
              <motion.div className="font-cinzel font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent mb-1">
                {stat.value}
              </motion.div>
              <p className="font-poppins text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-text-muted font-poppins">Scroll to explore</p>
          <div className="w-px h-8 bg-gradient-to-b from-primary via-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
