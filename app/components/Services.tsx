'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Share2, Palette, Film, Video, BarChart2, TrendingUp, Facebook, Globe, ArrowRight, Check, Sparkles } from 'lucide-react'

const services = [
  { 
    icon: Share2, 
    title: 'Social Media Management', 
    desc: 'Comprehensive social media strategy and daily management to grow your online presence.',
    features: ['Daily Content Posts', 'Community Management', 'Analytics & Reports', 'Hashtag Strategy']
  },
  { 
    icon: Palette, 
    title: 'Creative Design', 
    desc: 'Eye-catching posters and graphics that make your brand stand out from the competition.',
    features: ['Custom Designs', 'Brand Consistency', 'Unlimited Revisions', 'Fast Turnaround']
  },
  { 
    icon: Film, 
    title: 'Reel Editing', 
    desc: 'Viral-worthy reels edited with trending effects, music, and captions that drive engagement.',
    features: ['Trending Effects', 'Music Integration', 'Captions & Text', 'Color Correction']
  },
  { 
    icon: Video, 
    title: 'Video Production', 
    desc: 'Professional video editing for all content types with cinematic quality and polish.',
    features: ['Professional Cuts', 'Motion Graphics', 'Audio Enhancement', 'Color Grading']
  },
  { 
    icon: BarChart2, 
    title: 'Content Strategy', 
    desc: 'Data-driven content planning that ensures your message reaches the right audience.',
    features: ['Content Calendar', 'Competitor Analysis', 'Trend Research', 'Performance Tracking']
  },
  { 
    icon: TrendingUp, 
    title: 'Instagram Growth', 
    desc: 'Proven strategies to grow your Instagram following organically and build engagement.',
    features: ['Profile Optimization', 'Growth Tactics', 'Engagement Boost', 'Audience Targeting']
  },
  { 
    icon: Facebook, 
    title: 'Facebook Ads', 
    desc: 'Targeted advertising campaigns that convert browsers into customers and drive ROI.',
    features: ['Campaign Setup', 'Audience Targeting', 'A/B Testing', 'ROI Optimization']
  },
  { 
    icon: Globe, 
    title: 'Web Design', 
    desc: 'Modern, responsive websites built with AI assistance and expert finishing touches.',
    features: ['Modern Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading'],
    badge: 'New'
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div
      ref={ref}
      className="glass-card p-8 h-full flex flex-col relative group border border-rose-500/20 hover:border-rose-500/50 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90"
    >
      {/* Badge */}
      {service.badge && (
        <span className="absolute top-6 right-6 font-syne text-[0.65rem] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
          {service.badge}
        </span>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all">
        <service.icon size={26} />
      </div>

      {/* Title & Desc */}
      <h3 className="font-syne text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
        {service.title}
      </h3>
      <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
        {service.desc}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <Check size={15} className="text-rose-400 shrink-0" />
            <span className="font-jakarta text-xs text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        onClick={() => window.location.href = `/order?service=${encodeURIComponent(service.title)}`}
        className="w-full btn-glass py-3 text-xs uppercase tracking-wider font-bold group-hover:border-rose-500/50 group-hover:bg-rose-500/15 transition-all flex items-center justify-center gap-2"
      >
        <span>Book Service</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#0B0304]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-crimson mb-4">
            <Sparkles size={14} />
            <span>What We Offer</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Our <span className="gradient-text-crimson">Services</span>
          </h2>
          <p className="font-jakarta text-slate-300 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Comprehensive digital solutions engineered to elevate your brand and maximize market ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
