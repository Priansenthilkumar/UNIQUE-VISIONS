'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Sparkles, Target, Zap, HeadphonesIcon, Layers, ArrowRight } from 'lucide-react'

const reasons = [
  { icon: DollarSign, num: '01', title: 'Transparent Rates', desc: 'Quality work at fair prices. No hidden fees, just straight-up commercial value for your investment.' },
  { icon: Sparkles, num: '02', title: 'Bespoke Aesthetics', desc: 'We create designs and content that actually catch attention and command the feed.' },
  { icon: Target, num: '03', title: 'Measurable Growth', desc: 'We focus on what matters — more followers, higher engagement, and repeat customers.' },
  { icon: Zap, num: '04', title: 'Rapid Execution', desc: 'We respect your deadlines. Fast turnarounds without ever compromising on precision.' },
  { icon: HeadphonesIcon, num: '05', title: 'Direct Access', desc: 'Need help? Real agency team support — fast, responsive, and dedicated.' },
  { icon: Layers, num: '06', title: 'Tailored Strategy', desc: 'Every project is custom-crafted for your brand identity. No shortcuts, no cookie-cutter templates.' },
]

export default function WhyUs() {
  const ref = useRef(null)

  return (
    <section id="whyus" className="section-padding relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="tag-luxury mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Why We Are Different</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Why Choose <span className="gradient-text-gold">Unique Visions</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            We combine high-end creative storytelling, strategic distribution, and rapid execution to deliver true competitive advantage.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item) => (
            <div
              key={item.num}
              className="luxury-card p-8 border border-white/10 hover:border-amber-500/40 relative overflow-hidden group bg-[#0D0D14]"
            >
              {/* Background Number Accent */}
              <span className="absolute top-2 right-4 font-syne font-extrabold text-7xl text-white/[0.03] group-hover:text-amber-500/10 transition-colors select-none pointer-events-none">
                {item.num}
              </span>

              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <item.icon size={24} />
              </div>

              <span className="font-syne text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Pillar {item.num}
              </span>

              <h3 className="font-syne font-bold text-xl text-white mb-3 group-hover:text-amber-300 transition-colors">
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
            className="btn-gold px-10 py-4 uppercase text-xs tracking-widest font-bold inline-flex items-center gap-2"
          >
            <span>Partner With Us</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
