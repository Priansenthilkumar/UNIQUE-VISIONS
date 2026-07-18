'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Users, Briefcase, Award, Calendar, ArrowRight } from 'lucide-react'

const stats = [
  { value: 10, suffix: '+', label: 'Trusted Clients', icon: Users, color: 'rgba(26,77,61,0.12)', glow: 'rgba(26,77,61,0.25)' },
  { value: 50, suffix: '+', label: 'Campaigns Done', icon: Briefcase, color: 'rgba(200,168,122,0.12)', glow: 'rgba(200,168,122,0.25)' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate', icon: Award, color: 'rgba(122,157,127,0.12)', glow: 'rgba(122,157,127,0.25)' },
  { value: 2026, suffix: '', label: 'Established Since', icon: Calendar, color: 'rgba(26,77,61,0.12)', glow: 'rgba(26,77,61,0.25)' },
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
    const step = Math.ceil(value / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, value, mounted])

  return (
    <span ref={ref} suppressHydrationWarning className="font-playfair font-bold leading-none"
      style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', background: 'linear-gradient(135deg, #1a4d3d, #3a8a5c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
      {mounted ? count : 0}{suffix}
    </span>
  )
}

export default function Stats() {
  const router = useRouter()

  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf8f5 0%, #f0f5f0 50%, #faf8f5 100%)' }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(26,77,61,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,77,61,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(122,157,127,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(26,77,61,0.06)', border: '1px solid rgba(26,77,61,0.12)' }}>
            <span className="font-josefin text-[0.6rem] tracking-[0.25em] text-primary uppercase">Achievement</span>
          </div>
          <h2 className="font-playfair font-bold text-[clamp(2.2rem,5vw,4rem)] text-[#1a2a1a] leading-tight mb-5">
            By The <span style={{
              background: 'linear-gradient(135deg, #1a4d3d, #3a8a5c, #c8a87a)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Numbers</span>
          </h2>
          <p className="font-poppins text-text-muted max-w-xl mx-auto text-base">
            Real metrics that show the impact we deliver for our clients since our launch.
          </p>
          <div className="w-16 h-0.5 mx-auto mt-6 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #1a4d3d, transparent)' }} />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative rounded-3xl p-8 text-center overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(26,77,61,0.08)',
                boxShadow: '0 8px 32px rgba(26,77,61,0.06), inset 0 1px 0 rgba(255,255,255,0.9)'
              }}
            >
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)' }} />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${stat.color} 0%, transparent 100%)` }}
              />

              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.glow}, transparent)` }} />

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `linear-gradient(135deg, ${stat.color}, rgba(255,255,255,0.5))`, boxShadow: `0 8px 24px ${stat.glow}` }}
                >
                  <stat.icon size={26} className="text-primary" strokeWidth={1.5} />
                </motion.div>

                <Counter value={stat.value} suffix={stat.suffix} />

                <div className="w-8 h-px mx-auto my-3"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(26,77,61,0.3), transparent)' }} />

                <p className="font-josefin text-[0.6rem] tracking-[0.15em] text-text-muted uppercase">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl p-10 md:p-14 overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, #1a4d3d 0%, #0d2a25 60%, #1a3d30 100%)',
            boxShadow: '0 24px 64px rgba(26,77,61,0.3)'
          }}
        >
          {/* Decorative orbs inside banner */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(200,168,122,0.15) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-2xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(122,157,127,0.15) 0%, transparent 70%)' }} />
          {/* Top shine */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />

          <div className="relative z-10">
            <div className="font-josefin text-[0.6rem] tracking-[0.3em] text-primary-accent uppercase mb-4">Ready to grow?</div>
            <h3 className="font-playfair font-bold text-white text-[clamp(1.8rem,4vw,3rem)] mb-4 leading-tight">
              Start Your Digital Journey Today
            </h3>
            <p className="font-poppins text-white/60 text-base max-w-xl mx-auto mb-8">
              Join 10+ brands already growing with Unique Visions. Let's build something remarkable together.
            </p>
            <motion.button
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/order')}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-josefin text-xs tracking-[0.2em] text-primary uppercase"
              style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
            >
              Start Your Journey
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={15} />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
