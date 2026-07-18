'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Sparkles, Target, Zap, HeadphonesIcon, Layers, ArrowRight } from 'lucide-react'

const reasons = [
  { icon: DollarSign, num: '01', title: 'Affordable Pricing', desc: 'Quality work at fair prices. No hidden fees, just straight-up value for your investment.' },
  { icon: Sparkles, num: '02', title: 'Creative Work', desc: 'We create designs and content that actually catch attention and stop the scroll.' },
  { icon: Target, num: '03', title: 'Results Matter', desc: 'We focus on what works — more followers, more engagement, more customers for you.' },
  { icon: Zap, num: '04', title: 'Fast Delivery', desc: 'We respect your time. Quick turnarounds without ever compromising on quality.' },
  { icon: HeadphonesIcon, num: '05', title: 'Always Available', desc: 'Need help? Just message us. We reply fast — real people, not bots.' },
  { icon: Layers, num: '06', title: 'Made For You', desc: 'Every project is custom-made for your brand. No templates, no shortcuts.' },
]

const cardColors = [
  { bg: 'rgba(26,77,61,0.05)', border: 'rgba(26,77,61,0.12)', icon: 'rgba(26,77,61,0.15)', glow: 'rgba(26,77,61,0.2)' },
  { bg: 'rgba(200,168,122,0.05)', border: 'rgba(200,168,122,0.15)', icon: 'rgba(200,168,122,0.15)', glow: 'rgba(200,168,122,0.2)' },
  { bg: 'rgba(122,157,127,0.05)', border: 'rgba(122,157,127,0.15)', icon: 'rgba(122,157,127,0.15)', glow: 'rgba(122,157,127,0.2)' },
  { bg: 'rgba(26,77,61,0.05)', border: 'rgba(26,77,61,0.12)', icon: 'rgba(26,77,61,0.15)', glow: 'rgba(26,77,61,0.2)' },
  { bg: 'rgba(200,168,122,0.05)', border: 'rgba(200,168,122,0.15)', icon: 'rgba(200,168,122,0.15)', glow: 'rgba(200,168,122,0.2)' },
  { bg: 'rgba(122,157,127,0.05)', border: 'rgba(122,157,127,0.15)', icon: 'rgba(122,157,127,0.15)', glow: 'rgba(122,157,127,0.2)' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f5f3f0 0%, #faf8f5 100%)' }}>

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,157,127,0.07) 0%, transparent 70%)' }} />

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
            <Sparkles size={12} className="text-primary" />
            <span className="font-josefin text-[0.6rem] tracking-[0.25em] text-primary uppercase">Why We're Different</span>
          </div>
          <h2 className="font-playfair font-bold text-[clamp(2.2rem,5vw,4rem)] text-[#1a2a1a] leading-tight mb-5">
            Why Choose <span style={{
              background: 'linear-gradient(135deg, #1a4d3d, #3a8a5c, #c8a87a)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Us</span>
          </h2>
          <p className="font-poppins text-text-muted max-w-2xl mx-auto text-base leading-relaxed">
            We combine creativity, strategy, and a results-driven approach to help your brand stand out in a crowded digital landscape.
          </p>
          <div className="w-16 h-0.5 mx-auto mt-6 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #1a4d3d, transparent)' }} />
        </motion.div>

        {/* Cards grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, i) => {
            const c = cardColors[i]
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative rounded-3xl p-8 overflow-hidden cursor-default"
                style={{
                  background: `rgba(255,255,255,0.8)`,
                  backdropFilter: 'blur(24px)',
                  border: `1px solid ${c.border}`,
                  boxShadow: `0 8px 32px rgba(26,77,61,0.06), inset 0 1px 0 rgba(255,255,255,0.9)`
                }}
              >
                {/* Top shine */}
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)' }} />

                {/* Hover glow overlay */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${c.bg} 0%, transparent 100%)` }}
                />

                {/* Top accent line on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.glow}, transparent)` }}
                />

                {/* Big background number */}
                <div className="absolute top-2 right-4 font-playfair font-bold text-8xl leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(26,77,61,0.04)' }}>
                  {item.num}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${c.icon}, rgba(255,255,255,0.5))`,
                      boxShadow: `0 8px 24px ${c.glow}`
                    }}
                  >
                    <item.icon size={24} className="text-primary" />
                  </motion.div>

                  {/* Number badge */}
                  <div className="font-josefin text-[0.55rem] tracking-[0.25em] text-primary/50 uppercase mb-2">{item.num}</div>

                  <h3 className="font-playfair font-bold text-lg text-[#1a2a1a] mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/order'}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-josefin text-xs tracking-[0.2em] text-white uppercase"
            style={{ background: 'linear-gradient(135deg, #1a4d3d, #0d2a25)', boxShadow: '0 12px 40px rgba(26,77,61,0.3), inset 0 1px 0 rgba(255,255,255,0.15)' }}
          >
            Work With Us
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowRight size={15} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
