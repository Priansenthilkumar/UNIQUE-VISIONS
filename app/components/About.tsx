'use client'

import { useRef } from 'react'
import { Target, Eye, CheckCircle, ArrowRight, Sparkles, Award, Shield } from 'lucide-react'

const highlights = [
  'Social Media Management', 'Creative Content Design',
  'Viral Reel Video Editing', 'Instagram Growth Engine',
  'Meta & Facebook Marketing', 'AI-Powered Web Design',
]

const timelineItems = [
  { date: 'Jan 2026', title: 'Studio Founded', desc: 'Launched as an agile digital growth studio helping brands command digital attention.', status: 'done' },
  { date: 'Present', title: 'Scaling 10+ Brands', desc: 'Managing complete social presence, viral reels, and web design for leading businesses.', status: 'active' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="tag-luxury mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Our Agency Philosophy</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            About <span className="gradient-text-gold">Unique Visions</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            We are a high-octane creative agency built to solve the modern brand growth problem.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          {/* Left Column Text */}
          <div className="space-y-6 text-left">
            <p className="font-jakarta text-slate-200 text-lg md:text-xl leading-relaxed">
              We're <span className="text-amber-300 font-bold">Unique Visions</span> — dedicated to turning brand concepts into high-converting visual assets and digital authority.
            </p>

            <p className="font-jakarta text-slate-300 text-base leading-relaxed">
              From scroll-stopping Instagram reels and luxury promotional posters to full-scale monthly management and lightning-fast websites — we craft visual excellence so you can focus on building your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D0D14] border border-white/10 hover:border-amber-500/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-jakarta text-xs text-slate-300 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => window.location.href = '/order'}
                className="btn-gold px-8 py-4 uppercase text-xs tracking-widest font-bold inline-flex items-center gap-2"
              >
                <span>Book A Project</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column Glass Card */}
          <div className="luxury-card-gold p-8 md:p-10 border border-amber-500/40 relative overflow-hidden bg-gradient-to-b from-[#14141E] to-[#070709]">
            
            {/* Mission */}
            <div className="mb-6 p-6 rounded-2xl bg-[#070709]/90 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Target size={20} />
                </div>
                <h3 className="font-syne text-xs uppercase tracking-widest text-amber-400 font-bold">Our Mission</h3>
              </div>
              <p className="font-jakarta text-slate-300 text-sm leading-relaxed">
                To empower brands with high-converting visual strategies and digital experiences that deliver real, measurable commercial ROI.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-2xl bg-[#070709]/90 border border-rose-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Eye size={20} />
                </div>
                <h3 className="font-syne text-xs uppercase tracking-widest text-rose-400 font-bold">Our Vision</h3>
              </div>
              <p className="font-jakarta text-slate-300 text-sm leading-relaxed">
                To become India's premier digital content & growth agency, recognized for aesthetic perfection and speed.
              </p>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-center">
              {[['10+', 'Retainer Clients'], ['2026', 'Founded'], ['100%', 'Perfection']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="font-syne font-extrabold text-2xl text-amber-400">{val}</div>
                  <div className="font-jakarta text-[0.65rem] tracking-wider text-slate-400 uppercase mt-1">{lbl}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Agency Journey Timeline */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">Progress Roadmap</span>
          <h3 className="font-syne font-bold text-3xl text-white">Agency Timeline</h3>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {timelineItems.map((item) => (
            <div
              key={item.date}
              className="luxury-card p-6 border border-white/10 flex gap-4 items-start"
            >
              <div className={`w-3.5 h-3.5 rounded-full mt-1.5 shrink-0 ${item.status === 'active' ? 'bg-amber-400 animate-ping' : 'bg-slate-500'}`} />
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-syne text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                    {item.date}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest">
                    {item.status === 'active' ? '● Active Operation' : '✓ Milestone Met'}
                  </span>
                </div>
                <h4 className="font-syne text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="font-jakarta text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
