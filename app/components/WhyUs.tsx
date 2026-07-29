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

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="whyus" className="section-padding relative overflow-hidden bg-[#0B0304]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-crimson mb-4">
            <Sparkles size={14} />
            <span>Why We're Different</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Why Choose <span className="gradient-text-crimson">Unique Visions</span>
          </h2>
          <p className="font-jakarta text-slate-300 text-base md:text-lg max-w-2xl mx-auto mt-4">
            We combine high-end creative storytelling, strategic distribution, and rapid execution to deliver true competitive advantage.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, i) => (
            <div
              key={item.num}
              className="glass-card p-8 border border-rose-500/20 hover:border-rose-500/50 relative overflow-hidden group bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90"
            >
              {/* Background Number Accent */}
              <span className="absolute top-2 right-4 font-syne font-extrabold text-7xl text-white/[0.03] group-hover:text-rose-500/10 transition-colors select-none pointer-events-none">
                {item.num}
              </span>

              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all">
                <item.icon size={24} />
              </div>

              <span className="font-syne text-xs font-bold uppercase tracking-widest text-rose-400 block mb-2">
                Reason {item.num}
              </span>

              <h3 className="font-syne font-bold text-xl text-white mb-3 group-hover:text-rose-300 transition-colors">
                {item.title}
              </h3>
              <p className="font-jakarta text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => window.location.href = '/order'}
            className="btn-crimson px-10 py-4 uppercase text-xs tracking-widest font-bold"
          >
            <span>Partner With Us</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
