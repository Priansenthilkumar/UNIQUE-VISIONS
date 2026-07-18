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
    <section id="about" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf8f5 0%, #f5f3f0 100%)' }}>

      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,157,127,0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,168,122,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeUp>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(26,77,61,0.06)', border: '1px solid rgba(26,77,61,0.12)' }}>
              <Sparkles size={12} className="text-primary" />
              <span className="font-josefin text-[0.6rem] tracking-[0.25em] text-primary uppercase">Who We Are</span>
            </div>
            <h2 className="font-playfair font-bold text-[clamp(2.2rem,5vw,4rem)] text-[#1a2a1a] leading-tight">
              About <span style={{
                background: 'linear-gradient(135deg, #1a4d3d, #3a8a5c, #c8a87a)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>Unique Visions</span>
            </h2>
            <div className="w-16 h-0.5 mx-auto mt-5 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #1a4d3d, transparent)' }} />
          </div>
        </FadeUp>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

          {/* Left — text */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <p className="font-poppins text-[#1a2a1a]/90 text-lg leading-relaxed">
                We're <span className="text-primary font-semibold">Unique Visions</span> — helping brands grow with creative digital marketing that actually works.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-poppins text-text-muted leading-relaxed">
                From managing your social media to creating scroll-stopping content and editing videos — we handle it all so you can focus on what matters.
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-2.5 group"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(26,77,61,0.15), rgba(122,157,127,0.1))' }}>
                      <CheckCircle size={12} className="text-primary" />
                    </div>
                    <span className="font-poppins text-sm text-text-muted group-hover:text-text transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => window.location.href = '/order'}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-josefin text-xs tracking-[0.2em] text-white uppercase mt-2"
                style={{ background: 'linear-gradient(135deg, #1a4d3d, #0d2a25)', boxShadow: '0 12px 32px rgba(26,77,61,0.3), inset 0 1px 0 rgba(255,255,255,0.15)' }}
              >
                Start Your Project
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={15} />
                </motion.div>
              </motion.button>
            </FadeUp>
          </div>

          {/* Right — glass card */}
          <FadeUp delay={0.2}>
            <div className="relative">
              {/* Decorative blob */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(200,168,122,0.2), transparent)' }}
              />

              <div className="rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(32px)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 24px 64px rgba(26,77,61,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
                }}>

                {/* Top shine */}
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)' }} />
                {/* Inner sheen */}
                <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-3xl pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)' }} />

                {/* Mission */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mb-5 p-5 rounded-2xl relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(26,77,61,0.06) 0%, rgba(122,157,127,0.04) 100%)', border: '1px solid rgba(26,77,61,0.1)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(26,77,61,0.15), rgba(122,157,127,0.1))', boxShadow: '0 4px 12px rgba(26,77,61,0.15)' }}>
                      <Target size={16} className="text-primary" />
                    </div>
                    <h3 className="font-josefin text-xs tracking-[0.2em] text-primary uppercase">Our Mission</h3>
                  </div>
                  <p className="font-poppins text-text-muted text-sm leading-relaxed">
                    Help businesses grow online with creative strategies that actually deliver results.
                  </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(200,168,122,0.06) 0%, rgba(168,196,184,0.04) 100%)', border: '1px solid rgba(200,168,122,0.15)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(200,168,122,0.2), rgba(168,196,184,0.1))', boxShadow: '0 4px 12px rgba(200,168,122,0.2)' }}>
                      <Eye size={16} className="text-accent-gold" />
                    </div>
                    <h3 className="font-josefin text-xs tracking-[0.2em] text-accent-gold uppercase">Our Vision</h3>
                  </div>
                  <p className="font-poppins text-text-muted text-sm leading-relaxed">
                    Be the go-to digital marketing team for brands across India.
                  </p>
                </motion.div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6"
                  style={{ borderTop: '1px solid rgba(26,77,61,0.08)' }}>
                  {[['10+', 'Clients'], ['2026', 'Founded'], ['100%', 'Dedication']].map(([val, lbl]) => (
                    <div key={lbl} className="text-center">
                      <div className="font-playfair font-bold text-2xl text-primary">{val}</div>
                      <div className="font-josefin text-[0.55rem] tracking-[0.15em] text-text-muted uppercase mt-0.5">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Timeline */}
        <FadeUp>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(26,77,61,0.06)', border: '1px solid rgba(26,77,61,0.12)' }}>
              <span className="font-josefin text-[0.6rem] tracking-[0.25em] text-primary uppercase">Our Journey</span>
            </div>
            <h3 className="font-playfair font-bold text-[clamp(1.8rem,4vw,3rem)] text-[#1a2a1a]">The Timeline</h3>
          </div>
        </FadeUp>

        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          {/* Animated line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #1a4d3d, rgba(26,77,61,0.1))', transformOrigin: 'top', transform: 'translateX(-50%)' }}
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          <div className="space-y-10">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative flex gap-8 md:gap-0 md:justify-center"
              >
                {/* Dot */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full top-6 border-2 ${item.status === 'active' ? 'bg-primary border-primary' : 'bg-white border-primary/40'}`}
                  style={item.status === 'active' ? { boxShadow: '0 0 0 6px rgba(26,77,61,0.12), 0 0 20px rgba(26,77,61,0.3)' } : {}}>
                  {item.status === 'active' && (
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}
                </div>

                <div className="ml-14 md:ml-0 md:w-[45%] md:odd:mr-auto md:even:ml-auto">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-2xl p-6 relative overflow-hidden"
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${item.status === 'active' ? 'rgba(26,77,61,0.2)' : 'rgba(26,77,61,0.08)'}`,
                      boxShadow: '0 8px 32px rgba(26,77,61,0.06), inset 0 1px 0 rgba(255,255,255,0.8)'
                    }}
                  >
                    {item.status === 'active' && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
                        style={{ background: 'linear-gradient(180deg, #1a4d3d, rgba(26,77,61,0.3))' }} />
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-josefin text-[0.55rem] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                        style={{ background: item.status === 'active' ? 'rgba(26,77,61,0.1)' : 'rgba(26,77,61,0.05)', color: '#1a4d3d' }}>
                        {item.status === 'active' ? '● Ongoing' : '✓ Completed'}
                      </span>
                    </div>
                    <div className="font-playfair font-bold text-2xl text-primary mb-1">{item.date}</div>
                    <h4 className="font-poppins font-semibold text-[#1a2a1a] text-sm mb-1">{item.title}</h4>
                    <p className="font-poppins text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
