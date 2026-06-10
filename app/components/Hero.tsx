'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Briefcase, Star, Clock, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false })

const stats = [
  { icon: Users, value: '10+', label: 'Happy Clients' },
  { icon: Briefcase, value: '50+', label: 'Projects Done' },
  { icon: Star, value: '100%', label: 'Satisfaction' },
  { icon: Clock, value: '2026', label: 'Est. Year' },
]

const slideVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.25,
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function Hero() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      <ParticleBackground />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Premium Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse, rgba(216,226,200,0.25) 0%, transparent 70%)', 
          filter: 'blur(80px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(46,139,87,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(216,226,200,0.15) 0%, transparent 70%)', 
          filter: 'blur(70px)',
          animation: 'float-slow 6s ease-in-out infinite'
        }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">

        {/* Animated Label */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-4 mb-12">
          <motion.div 
            className="h-px w-8" 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ background: 'linear-gradient(90deg, transparent, rgba(15,106,61,0.7))', transformOrigin: 'right' }} />
          <span className="section-label">Premium Digital Marketing Agency</span>
          <motion.div 
            className="h-px w-8" 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ background: 'linear-gradient(90deg, rgba(15,106,61,0.7), transparent)', transformOrigin: 'left' }} />
        </motion.div>

        {/* Main Heading with Premium Animation */}
        <motion.h1 
          className="font-cinzel uppercase mb-10 leading-[0.95] tracking-tight font-black text-3d"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}>
          <motion.span 
            custom={0}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            className="block text-[#1F2A1F]">Creative</motion.span>
          <motion.span 
            custom={1}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            className="block gradient-text text-3d">Digital</motion.span>
          <motion.span 
            custom={2}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            className="block text-[#1F2A1F]">Solutions</motion.span>
        </motion.h1>

        {/* Subheading with Fade Animation */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-poppins text-[#1F2A1F]/80 max-w-2xl mx-auto mb-14 leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)' }}>
          We create content and strategies that help your brand grow online. Premium digital marketing with proven results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 rounded-full btn-primary font-syne font-bold text-base flex items-center gap-3 shadow-lg"
          >
            Start Your Growth
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('#services')}
            className="px-10 py-4 rounded-full btn-outline font-syne font-bold text-base"
          >
            View Services
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-white/5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group text-center"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                className="flex justify-center mb-3"
              >
                <div className="w-12 h-12 rounded-xl hero-shape flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ boxShadow: '0 8px 24px rgba(15,106,61,0.3)' }}>
                  <stat.icon size={20} className="text-[#0F6A3D]" style={{ filter: 'drop-shadow(0 0 8px rgba(15,106,61,0.6))' }} />
                </div>
              </motion.div>
              <div className="stat-number text-2xl sm:text-3xl mb-1">{stat.value}</div>
              <p className="font-poppins text-xs text-[#1F2A1F]/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-xs font-poppins tracking-widest text-[#1F2A1F]/60">SCROLL</span>
        <div className="w-px h-6 bg-gradient-to-b from-[#1F2A1F]/50 to-transparent" />
      </motion.div>
    </section>
  )
}
