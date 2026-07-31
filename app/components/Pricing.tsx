'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Zap, Sparkles } from 'lucide-react'

const plans = [
  { name: 'Social Media Management', price: '₹1,999', period: '/month', desc: 'Complete social media management for your brand', features: ['15 posts per month', 'Story designs included', 'Audience engagement', 'Monthly analytics report', 'Hashtag strategy', 'WhatsApp support'], popular: false },
  { name: 'Poster Design', price: '₹149', period: '/post', desc: 'Premium creative poster designs for your brand', features: ['Custom brand design', '2 revisions included', 'High-res PNG & JPG', '24hr delivery', 'Brand color matching', 'Commercial rights'], popular: true },
  { name: 'Story Design', price: '₹99', period: '/story', desc: 'Engaging Instagram & Facebook story designs', features: ['Animated stories', 'Brand-aligned design', '1 revision included', '12hr delivery', 'Multiple formats', 'Ready to post'], popular: false },
  { name: 'Reel Editing (Short)', price: '₹200', period: '/video', desc: 'Viral short-form reels under 60 seconds', features: ['Trending transitions', 'Music sync', 'Text overlays', 'Color grading', '1080p export', '48hr delivery'], popular: false },
  { name: 'Reel Editing (Long)', price: '₹200', period: '/video', desc: 'Professional long-form video editing', features: ['Cinematic cuts', 'Motion graphics', 'Sound design', 'Color correction', '4K export', '72hr delivery'], popular: false },
]

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div
      ref={ref}
      className={`p-7 h-full flex flex-col relative transition-all duration-300 ${
        plan.popular
          ? 'glass-card-gold bg-gradient-to-b from-[#251708]/95 via-[#1C1206]/95 to-[#120B03]/95 shadow-xl shadow-amber-950/40 border-amber-500/50 scale-[1.02] z-10'
          : 'glass-card border-rose-500/20 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-slate-950 px-4 py-1 rounded-full font-syne text-[0.65rem] font-black uppercase tracking-wider shadow-lg shadow-amber-500/40 border border-amber-300/50">
            <Zap size={12} fill="currentColor" />
            <span>MOST POPULAR</span>
          </div>
        </div>
      )}

      {/* Decorative Gold Ambient Glow */}
      {plan.popular && (
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      )}

      {/* Title & Description Container with Min-Height for Alignment */}
      <div className={`mb-6 min-h-[90px] flex flex-col justify-start ${plan.popular ? 'pt-5' : 'pt-2'}`}>
        <h3 className={`font-syne font-bold text-lg leading-snug mb-1.5 block ${plan.popular ? 'gradient-text-gold' : 'text-white'}`}>
          {plan.name}
        </h3>
        <p className={`font-jakarta text-xs leading-relaxed block ${plan.popular ? 'text-amber-100/80' : 'text-slate-300'}`}>
          {plan.desc}
        </p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className={`font-syne text-4xl font-extrabold ${plan.popular ? 'gradient-text-gold drop-shadow-sm' : 'text-white'}`}>
          {plan.price}
        </span>
        <span className={`font-jakarta text-xs ${plan.popular ? 'text-amber-400/80' : 'text-slate-400'}`}>{plan.period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <Check size={14} className={plan.popular ? 'text-amber-400 shrink-0' : 'text-rose-400 shrink-0'} />
            <span className={`font-jakarta text-xs ${plan.popular ? 'text-amber-100/90' : 'text-slate-300'}`}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => window.location.href = `/order?plan=${encodeURIComponent(plan.name)}`}
        className={`w-full py-3.5 uppercase text-xs tracking-wider font-bold rounded-full transition-all ${
          plan.popular
            ? 'btn-gold'
            : 'btn-crimson'
        }`}
      >
        <span>Order Now</span>
      </button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-[#0B0304]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="badge-crimson mb-4">
            <Sparkles size={14} />
            <span>Transparent Rates</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Simple & Honest <span className="gradient-text-crimson">Pricing</span>
          </h2>
          <p className="font-jakarta text-slate-300 text-base md:text-lg max-w-xl mx-auto mt-4">
            High quality services designed to fit your marketing budget. Zero hidden costs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-6 mb-16">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Custom Package Callout */}
        <div className="glass-card p-8 md:p-10 border border-rose-500/20 text-center max-w-3xl mx-auto">
          <h3 className="font-syne font-bold text-2xl text-white mb-2">Need A Tailored Custom Package?</h3>
          <p className="font-jakarta text-slate-300 text-sm mb-6">
            We can craft custom multi-service monthly contracts or custom video editing bundles tailored specifically to your scope.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glass px-8 py-3.5 uppercase text-xs tracking-wider font-bold"
          >
            <span>Request Custom Quote</span>
          </button>
        </div>

      </div>
    </section>
  )
}
