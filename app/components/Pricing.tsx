'use client'
import { useState } from 'react'
import { Check, Zap, Sparkles, Calculator, ArrowRight } from 'lucide-react'

const plans = [
  { name: 'Social Media Management', price: '₹1,999', period: '/month', desc: 'Complete social media management for growing brands', features: ['15 posts per month', 'Story designs included', 'Audience engagement boost', 'Monthly analytics report', 'Hashtag strategy & optimization', 'Direct WhatsApp support'], popular: false },
  { name: 'Poster Design', price: '₹149', priceNum: 149, period: '/post', desc: 'Premium creative poster designs for social & print', features: ['Custom brand graphic design', '2 revisions included', 'High-res PNG & JPG exports', '24hr rush delivery option', 'Brand color matching', 'Commercial usage rights'], popular: true },
  { name: 'Story Design', price: '₹99', priceNum: 99, period: '/story', desc: 'Engaging Instagram & Facebook story designs', features: ['Animated story formats', 'Brand-aligned typography', '1 revision included', '12hr turnaround', 'Multiple aspect ratios', 'Ready-to-post graphics'], popular: false },
  { name: 'Reel Editing (Short)', price: '₹200', priceNum: 200, period: '/video', desc: 'Viral short-form reels under 60 seconds', features: ['Trending transitions & cuts', 'Beat-synced audio edit', 'Kinetic captions & overlays', 'Color grading & polish', '1080x1920 HD export', '48hr turnaround'], popular: false },
  { name: 'Reel Editing (Long)', price: '₹200', priceNum: 200, period: '/video', desc: 'Professional long-form video production', features: ['Cinematic cuts & pacing', 'Motion graphics overlays', 'Custom sound design', 'Color correction', '4K master export', '72hr delivery'], popular: false },
]

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div
      className={`p-7 h-full flex flex-col justify-between relative transition-all duration-300 ${
        plan.popular
          ? 'luxury-card-gold shadow-2xl scale-[1.02] z-10'
          : 'luxury-card border-white/10'
      }`}
    >
      {/* Popular Tag */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 px-4 py-1 rounded-full font-syne text-[0.65rem] font-black uppercase tracking-widest shadow-lg shadow-amber-500/30 border border-amber-300">
            <Zap size={12} fill="currentColor" />
            <span>MOST POPULAR</span>
          </div>
        </div>
      )}

      {/* Header Info */}
      <div className={`mb-6 min-h-[90px] flex flex-col justify-start ${plan.popular ? 'pt-4' : 'pt-2'}`}>
        <h3 className={`font-syne font-bold text-lg leading-snug mb-1.5 block ${plan.popular ? 'gradient-text-gold' : 'text-white'}`}>
          {plan.name}
        </h3>
        <p className={`font-jakarta text-xs leading-relaxed block ${plan.popular ? 'text-amber-100/80' : 'text-slate-300'}`}>
          {plan.desc}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8 flex items-baseline gap-1">
        <span className={`font-syne text-4xl font-extrabold ${plan.popular ? 'gradient-text-gold' : 'text-white'}`}>
          {plan.price}
        </span>
        <span className={`font-jakarta text-xs ${plan.popular ? 'text-amber-300/80' : 'text-slate-400'}`}>{plan.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <Check size={14} className={plan.popular ? 'text-amber-400 shrink-0' : 'text-amber-400 shrink-0'} />
            <span className={`font-jakarta text-xs ${plan.popular ? 'text-amber-100/90' : 'text-slate-300'}`}>{f}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        onClick={() => window.location.href = `/order?plan=${encodeURIComponent(plan.name)}`}
        className={`w-full py-3.5 uppercase text-xs tracking-wider font-bold transition-all ${
          plan.popular ? 'btn-gold' : 'btn-glass'
        }`}
      >
        <span>Order Now</span>
      </button>
    </div>
  )
}

export default function Pricing() {
  // Calculator state
  const [stories, setStories] = useState(0)
  const [posters, setPosters] = useState(2)
  const [reels, setReels] = useState(2)
  const [retainer, setRetainer] = useState(false)

  const calculatedTotal = (stories * 99) + (posters * 149) + (reels * 200) + (retainer ? 1999 : 0)

  const handleBookCustomPackage = () => {
    const details = `Custom Package Breakdown: ${stories} Stories, ${posters} Posters, ${reels} Reels, ${retainer ? 'Includes Monthly Retainer' : 'No Monthly Retainer'}. Total Estimate: ₹${calculatedTotal.toLocaleString()}`
    window.location.href = `/order?service=Custom%20Package&message=${encodeURIComponent(details)}`
  }

  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="tag-luxury mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Honest & Transparent Rates</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Simple & Transparent <span className="gradient-text-gold">Pricing</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            High quality deliverable rates crafted for startups, small businesses, and growing brands. Zero hidden fees.
          </p>
        </div>

        {/* Standard Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Interactive Custom Package Calculator */}
        <div className="luxury-card-gold p-8 md:p-10 border border-amber-500/40 max-w-4xl mx-auto bg-gradient-to-b from-[#14141E] to-[#070709]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Calculator size={24} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">Interactive Tool</span>
              <h3 className="font-syne font-bold text-2xl text-white">Custom Package Cost Calculator</h3>
            </div>
          </div>

          <p className="font-jakarta text-slate-300 text-sm mb-8 leading-relaxed">
            Need a mix of posts, reels, and stories? Adjust the quantity counters below to calculate your estimated custom package price.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Quantity Steppers */}
            <div className="space-y-5 font-jakarta text-sm">
              
              {/* Stories */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="font-syne font-bold text-white block">Story Designs (₹99/ea)</span>
                  <span className="text-xs text-slate-400">Instagram / FB Stories</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setStories(Math.max(0, stories - 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-amber-500/20"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-white text-base w-6 text-center">{stories}</span>
                  <button
                    onClick={() => setStories(stories + 1)}
                    className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-amber-500/20"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Posters */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="font-syne font-bold text-white block">Poster Designs (₹149/ea)</span>
                  <span className="text-xs text-slate-400">Custom feed graphics</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPosters(Math.max(0, posters - 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-amber-500/20"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-white text-base w-6 text-center">{posters}</span>
                  <button
                    onClick={() => setPosters(posters + 1)}
                    className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-amber-500/20"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Reels */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="font-syne font-bold text-white block">Reel Edits (₹200/ea)</span>
                  <span className="text-xs text-slate-400">Viral short videos</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setReels(Math.max(0, reels - 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-amber-500/20"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-white text-base w-6 text-center">{reels}</span>
                  <button
                    onClick={() => setReels(reels + 1)}
                    className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-amber-500/20"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Retainer Checkbox */}
              <div
                onClick={() => setRetainer(!retainer)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 cursor-pointer"
              >
                <div>
                  <span className="font-syne font-bold text-amber-300 block">Include Monthly Management Retainer (+₹1,999/mo)</span>
                  <span className="text-xs text-slate-300">Daily posting, hashtag strategy & report</span>
                </div>
                <div className={`w-6 h-6 rounded-md border flex items-center justify-center ${retainer ? 'bg-amber-400 border-amber-300 text-slate-950 font-bold' : 'border-white/20'}`}>
                  {retainer && '✓'}
                </div>
              </div>

            </div>

            {/* Estimated Output Column */}
            <div className="p-6 rounded-2xl bg-[#070709] border border-amber-500/30 text-center space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block">Calculated Package Total</span>
              <div className="font-syne text-5xl font-extrabold gradient-text-gold">
                ₹{calculatedTotal.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">
                Includes commercial usage rights, revisions, and dedicated communication.
              </p>

              <button
                onClick={handleBookCustomPackage}
                className="btn-gold w-full py-4 uppercase text-xs tracking-wider font-bold inline-flex items-center justify-center gap-2 mt-4"
              >
                <span>Book This Custom Package</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
