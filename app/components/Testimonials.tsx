'use client'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Sparkles, Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden bg-[#0B0304]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-crimson mb-4">
            <Sparkles size={14} />
            <span>Client Success</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            What Our <span className="gradient-text-crimson">Clients</span> Say
          </h2>
          <p className="font-jakarta text-slate-300 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Helping ambitious businesses scale through scroll-stopping marketing strategies.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className="glass-card p-10 md:p-14 border border-rose-500/20 text-center relative overflow-hidden bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90"
        >
          {/* Quote Icon */}
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-8">
            <Quote size={32} />
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
            ))}
          </div>

          <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-white mb-6">
            "Transformative Impact For Our Digital Growth"
          </h3>

          <p className="font-jakarta text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Since launching in <span className="text-rose-400 font-bold">January 2026</span>, Unique Visions has consistently delivered high quality social media designs and viral reel edits with unbelievable speed and professionalism.
          </p>

          {/* Client Avatar Group */}
          <div className="inline-flex items-center gap-4 rounded-full px-8 py-3 bg-[#0B0304] border border-rose-500/20 mb-10">
            <div className="flex -space-x-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#120507] bg-rose-600 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-syne font-bold text-white text-sm">10+ Verified Brands</p>
              <p className="font-jakarta text-xs text-slate-400">100% Satisfaction Rate</p>
            </div>
          </div>

          <div>
            <button
              onClick={() => window.location.href = '/reviews'}
              className="btn-crimson px-8 py-3.5 uppercase text-xs tracking-wider font-bold"
            >
              <span>View All Client Reviews</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
