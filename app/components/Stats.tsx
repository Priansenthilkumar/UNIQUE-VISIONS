'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Users, Briefcase, Award, Calendar, ArrowRight, Sparkles } from 'lucide-react'

const stats = [
  { value: 10, suffix: '+', label: 'Trusted Clients', icon: Users },
  { value: 50, suffix: '+', label: 'Campaigns Done', icon: Briefcase },
  { value: 100, suffix: '%', label: 'Satisfaction Rate', icon: Award },
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
    const step = Math.ceil(value / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, value, mounted])

  return (
    <span ref={ref} suppressHydrationWarning className="font-syne font-extrabold text-4xl md:text-5xl text-white">
      {mounted ? count : 0}{suffix}
    </span>
  )
}

export default function Stats() {
  const router = useRouter()

  return (
    <section className="section-padding relative overflow-hidden bg-[#060D0A]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge-emerald mb-4">
            <Sparkles size={14} />
            <span>Achievement</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            By The <span className="gradient-text-emerald">Numbers</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-xl mx-auto mt-4">
            Proven performance metrics reflecting real results for our client portfolio.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 text-center border border-white/10 hover:border-emerald-500/40 bg-gradient-to-b from-[#0A1410]/90 to-[#0F1F19]/90"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                <stat.icon size={26} />
              </div>

              <Counter value={stat.value} suffix={stat.suffix} />

              <div className="w-10 h-0.5 bg-emerald-500/30 mx-auto my-3 rounded-full" />

              <p className="font-jakarta text-xs uppercase tracking-widest text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass-card-gold p-10 md:p-14 text-center relative overflow-hidden bg-gradient-to-r from-[#14100A] via-[#1F190F] to-[#0A1410]">
          <span className="font-syne text-xs uppercase tracking-widest text-amber-400 font-bold block mb-3">
            Ready To Scale Your Brand?
          </span>
          <h3 className="font-syne font-extrabold text-white text-[clamp(1.8rem,4vw,3rem)] mb-4 leading-tight">
            Start Your Digital Journey Today
          </h3>
          <p className="font-jakarta text-slate-300 text-base max-w-xl mx-auto mb-8">
            Join 10+ businesses already growing with Unique Visions. Let's create impactful campaigns together.
          </p>
          <button
            onClick={() => router.push('/order')}
            className="btn-gold px-10 py-4 uppercase text-xs tracking-widest font-bold"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
