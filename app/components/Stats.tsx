'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Users, Briefcase, Award, Calendar } from 'lucide-react'

const stats = [
  { value: 10, suffix: '+', label: 'Trusted Clients Worldwide', icon: Users },
  { value: 50, suffix: '+', label: 'Successful Campaigns', icon: Briefcase },
  { value: 100, suffix: '%', label: 'Client Satisfaction Rate', icon: Award },
  { value: 2026, suffix: '', label: 'Established Since', icon: Calendar },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (!inView || !mounted) return
    let start = 0
    const step = Math.ceil(value / 80)
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, value, mounted])

  return (
    <span ref={ref} suppressHydrationWarning
      className="font-bebas leading-none gradient-text-gold"
      style={{ fontSize: 'clamp(3rem,6vw,5rem)' }}>
      {mounted ? count : 0}{suffix}
    </span>
  )
}

export default function Stats() {
  const router = useRouter()
  return (
    <section className="section-padding relative overflow-hidden section-bg">
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.08] blur-[140px] animate-float"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.5), transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: 'radial-gradient(ellipse, rgba(109,40,217,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-20">
          <span className="section-label">Achievement</span>
          <h2 className="font-cinzel text-[clamp(2.2rem,5vw,4.5rem)] font-bold mt-4 gradient-text-dark uppercase tracking-wide">By The Numbers</h2>
          <p className="font-poppins text-[#1F2A1F]/70 max-w-2xl mx-auto mt-5 text-base">Real metrics that show the impact we deliver for our clients since our launch.</p>
          <div className="red-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -8 }}
              className="card-3d rounded-3xl p-8 text-center group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(109,40,217,0.05) 100%)',
                boxShadow: '0 12px 40px rgba(139,92,246,0.15)'
              }}>
              
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0F6A3D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mb-6">
                {stat.icon && (
                  <stat.icon 
                    size={48} 
                    className="mx-auto mb-4 text-[#0F6A3D] group-hover:text-[#0F6A3D]/80 transition-colors"
                    strokeWidth={1.5}
                  />
                )}
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              
              <div className="w-10 h-px mx-auto my-4 bg-gradient-to-r from-transparent via-[#0F6A3D]/40 to-transparent" />
              
              <p className="font-montserrat text-[#1F2A1F]/60 text-xs tracking-widest uppercase font-bold group-hover:text-[#1F2A1F]/80 transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          className="text-center">
          <motion.button 
            whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(139,92,246,0.5)' }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/order')}
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 rounded-full font-syne font-bold text-white text-base tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300">
            Start Your Journey
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>→</motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
