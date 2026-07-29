'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

const highlights = [
  'Social Media Management', 'Creative Content Creation',
  'Video & Reel Editing', 'Instagram Growth Strategy',
  'Facebook Marketing', 'Brand Identity Design',
]

const timelineItems = [
  { date: 'Jan 2026', title: 'We Started', desc: 'Launched as a digital marketing agency ready to help brands grow online.', status: 'done' },
  { date: 'Now', title: 'Growing Strong', desc: 'Serving 10+ clients with social media, design, video editing, and more.', status: 'active' },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export default function About() {
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#0B0304]">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 bg-rose-600" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-15 bg-amber-500" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="badge-crimson mb-4">
              <Sparkles size={14} />
              <span>Who We Are</span>
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
              About <span className="gradient-text-crimson">Unique Visions</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mt-4 rounded-full" />
          </div>
        </FadeUp>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          {/* Left Text */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <p className="font-jakarta text-slate-200 text-lg md:text-xl leading-relaxed">
                We're <span className="text-rose-400 font-bold">Unique Visions</span> — dedicated to helping brands scale rapidly with result-driven digital marketing and high-end design.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="font-jakarta text-slate-300 text-base leading-relaxed">
                From end-to-end social media management to scroll-stopping reels and strategic ad campaigns — we craft compelling visual content so you can focus on expanding your core business.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#120507] border border-rose-500/20 hover:border-rose-500/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                      <CheckCircle size={14} />
                    </div>
                    <span className="font-jakarta text-sm text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <button
                onClick={() => window.location.href = '/order'}
                className="btn-crimson px-8 py-4 uppercase text-xs tracking-widest font-bold mt-4"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </button>
            </FadeUp>
          </div>

          {/* Right Glass Container */}
          <FadeUp delay={0.2}>
            <div className="glass-card p-8 md:p-10 border border-rose-500/20 relative overflow-hidden bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90">
              
              {/* Mission */}
              <div className="mb-6 p-6 rounded-2xl bg-[#0B0304]/80 border border-rose-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  <h3 className="font-syne text-xs uppercase tracking-widest text-rose-400 font-bold">Our Mission</h3>
                </div>
                <p className="font-jakarta text-slate-300 text-sm leading-relaxed">
                  To empower businesses with high-converting creative strategies and digital experiences that deliver real, measurable growth.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-2xl bg-[#0B0304]/80 border border-amber-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Eye size={20} />
                  </div>
                  <h3 className="font-syne text-xs uppercase tracking-widest text-amber-400 font-bold">Our Vision</h3>
                </div>
                <p className="font-jakarta text-slate-300 text-sm leading-relaxed">
                  To become the premiere digital growth partner for ambitious brands across India, known for innovation and perfection.
                </p>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                {[['10+', 'Clients'], ['2026', 'Founded'], ['100%', 'Dedication']].map(([val, lbl]) => (
                  <div key={lbl} className="text-center">
                    <div className="font-syne font-extrabold text-2xl text-rose-400">{val}</div>
                    <div className="font-jakarta text-[0.65rem] tracking-wider text-slate-400 uppercase mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>

        {/* Journey Timeline */}
        <FadeUp>
          <div className="text-center mb-12">
            <div className="badge-crimson mb-3">
              <span>Our Progress</span>
            </div>
            <h3 className="font-syne font-bold text-3xl text-white">The Timeline</h3>
          </div>
        </FadeUp>

        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          <div className="space-y-8">
            {timelineItems.map((item, i) => (
              <div
                key={item.date}
                className="glass-card p-6 border border-rose-500/20 relative overflow-hidden flex gap-4 items-start"
              >
                <div className={`w-3 h-3 rounded-full mt-2 shrink-0 ${item.status === 'active' ? 'bg-rose-400 animate-ping' : 'bg-slate-500'}`} />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-syne text-xs font-bold uppercase tracking-wider text-rose-400 px-3 py-1 rounded-full bg-rose-500/10">
                      {item.date}
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-widest">
                      {item.status === 'active' ? '● Ongoing' : '✓ Completed'}
                    </span>
                  </div>
                  <h4 className="font-syne text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
