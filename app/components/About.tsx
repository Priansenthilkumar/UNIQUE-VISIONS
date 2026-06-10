'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, CheckCircle, ArrowRight } from 'lucide-react'

const timelineItems = [
  { date: 'January 1, 2026', title: 'We Started', desc: 'Launched as a digital marketing agency ready to help brands grow online.', status: 'done' },
  { date: 'Now', title: 'Working With Clients', desc: 'Serving 10+ clients with social media, design, video editing, and more.', status: 'active' },
]

const highlights = [
  'Social Media Management', 'Creative Content Creation',
  'Video & Reel Editing', 'Instagram Growth Strategy',
  'Facebook Marketing', 'Brand Identity Design',
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden section-bg-alt">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] hero-shape rounded-full opacity-[0.06] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="section-label">Who We Are</span>
            <h2 className="font-oswald text-[clamp(2.2rem,5vw,4.5rem)] font-bold mt-3 gradient-text-dark uppercase tracking-wide">
              About Unique Visions
            </h2>
            <div className="red-divider mx-auto mt-4" />
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-5">
            <FadeUp delay={0.1}>
              <p className="font-poppins text-[#1F2A1F]/90 text-lg leading-relaxed">
                We're <span className="text-[#0F6A3D] font-bold">Unique Visions</span> — helping brands grow with creative digital marketing that actually works.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-poppins text-[#1F2A1F]/70 leading-relaxed">
                From managing your social media to creating scroll-stopping content and editing videos — we do it all.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="font-poppins text-[#1F2A1F]/70 leading-relaxed">
                Simple goal: make your brand stand out online and get real results.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {highlights.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0F6A3D] flex-shrink-0" style={{ filter: 'drop-shadow(0 0 4px rgba(15,106,61,0.5))' }} />
                    <span className="font-dm text-sm text-[#1F2A1F]/70">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 hero-shape rounded-full opacity-15 blur-2xl blob" />
              <div className="card-3d rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ffffff] to-[#ffffff]" />

                <div className="mb-5 p-5 bg-red-950/20 rounded-2xl border border-red-900/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl hero-shape flex items-center justify-center" style={{ boxShadow: '0 4px 12px rgba(251,191,36,0.4)' }}>
                      <Target size={16} className="text-[#0F6A3D]" style={{ filter: 'drop-shadow(0 0 6px rgba(15,106,61,0.6))' }} />
                    </div>
                    <h3 className="font-syne font-bold text-[#1F2A1F] text-sm tracking-wide">OUR MISSION</h3>
                  </div>
                  <p className="font-poppins text-[#1F2A1F]/80 text-sm leading-relaxed">
                    Help businesses grow online with creative strategies that actually work.
                  </p>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                      <Eye size={16} className="text-[#0F6A3D]" style={{ filter: 'drop-shadow(0 0 6px rgba(15,106,61,0.6))' }} />
                    </div>
                    <h3 className="font-syne font-bold text-[#1F2A1F] text-sm tracking-wide">OUR VISION</h3>
                  </div>
                  <p className="font-poppins text-[#1F2A1F]/80 text-sm leading-relaxed">
                    Be the go-to digital marketing team for brands across India.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                  {[['10+', 'Clients'], ['2026', 'Founded'], ['100%', 'Dedication']].map(([val, lbl]) => (
                    <div key={lbl} className="text-center">
                      <div className="font-bebas text-2xl gradient-text">{val}</div>
                      <div className="font-dm text-xs text-[#1F2A1F]/60">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mt-16 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/order'}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-syne font-bold text-white text-sm"
          >
            Start Your Project <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        <FadeUp>
          <div className="text-center mb-12">
            <span className="section-label">Our Journey</span>
            <h3 className="font-oswald text-[clamp(2rem,4vw,3.5rem)] font-bold mt-2 gradient-text-dark uppercase tracking-wide">The Timeline</h3>
          </div>
        </FadeUp>

        <div ref={ref} className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#ffffff] via-red-900 to-transparent" style={{ transform: 'translateX(-50%)' }} />

          <div className="space-y-10">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex gap-8 md:gap-0 md:justify-center"
              >
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-5 h-5 rounded-full border-2 top-5 ${
                  item.status === 'active' ? 'bg-[#ffffff] border-[#ffffff]' : 'bg-white/10 border-white/20'
                }`} style={{ boxShadow: item.status === 'active' ? '0 0 0 4px rgba(209,0,0,0.15), 0 0 20px rgba(209,0,0,0.4)' : 'none' }}>
                  {item.status === 'active' && (
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-5 h-5 rounded-full bg-[#ffffff]"
                    />
                  )}
                </div>

                <div className="ml-14 md:ml-0 md:w-[45%] md:odd:mr-auto md:even:ml-auto">
                  <div className={`card-3d rounded-2xl p-5 group ${item.status === 'active' ? 'border-l-2 border-[#ffffff]' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`font-syne text-xs font-bold px-2.5 py-1 rounded-full ${
                        item.status === 'active' ? 'bg-red-950/40 text-[#ffffff]' : 'bg-white/5 text-white/40'
                      }`}>
                        {item.status === 'active' ? '🔴 Ongoing' : '✓ Completed'}
                      </span>
                    </div>
                    <span className="font-bebas text-2xl gradient-text">{item.date}</span>
                    <h4 className="font-syne font-bold text-[#1F2A1F] text-sm mt-1 mb-2">{item.title}</h4>
                    <p className="font-dm text-[#1F2A1F]/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
