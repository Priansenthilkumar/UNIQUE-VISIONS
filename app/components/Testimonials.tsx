'use client'

import { Star, ArrowRight, Sparkles, Quote, ShieldCheck } from 'lucide-react'

const testimonials = [
  {
    quote: "Unique Visions turned our dry social media into a high-engagement reel machine! Our sales doubled in the first month.",
    author: "Priya Sharma",
    role: "Founder, Aura Luxe",
    rating: 5,
    tag: "Reel Editing & Social"
  },
  {
    quote: "Fastest turnaround time in the market. The creative poster designs look like they were made by a top global design agency.",
    author: "Karthik R.",
    role: "Marketing Director, Zenith Fitness",
    rating: 5,
    tag: "Creative Poster Design"
  },
  {
    quote: "Their AI web design and content strategy helped our agency secure 4 new enterprise contracts in 30 days.",
    author: "Arun V.",
    role: "CEO, NexaTech",
    rating: 5,
    tag: "AI Web Design & Strategy"
  }
]

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="tag-luxury mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Trusted By Growing <span className="gradient-text-gold">Brands</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Here is what business owners and marketing directors have to say about working with Unique Visions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="luxury-card p-8 flex flex-col justify-between border border-white/10 hover:border-amber-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {t.tag}
                  </span>
                </div>

                <Quote size={28} className="text-amber-400/30 mb-4" />
                
                <p className="font-jakarta text-slate-200 text-sm leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-syne font-bold text-white text-sm">{t.author}</h4>
                  <p className="font-jakarta text-slate-400 text-xs">{t.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="luxury-card-gold p-8 md:p-12 text-center max-w-4xl mx-auto border border-amber-500/40">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldCheck size={20} className="text-amber-400" />
            <span className="font-syne font-bold text-amber-300 text-xs uppercase tracking-widest">Verified Guarantee</span>
          </div>

          <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-white mb-4">
            Join 10+ Satisfied Brands Scaling Their Digital Reach
          </h3>

          <p className="font-jakarta text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to elevate your social feeds and get scroll-stopping creative deliverables? Check out our full feedback log or leave your review.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/reviews'}
              className="btn-gold px-8 py-3.5 uppercase text-xs tracking-wider font-bold inline-flex items-center justify-center gap-2"
            >
              <span>View All Client Reviews</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => window.location.href = '/reviews'}
              className="btn-glass px-8 py-3.5 uppercase text-xs tracking-wider font-bold"
            >
              <span>Submit A Review</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
