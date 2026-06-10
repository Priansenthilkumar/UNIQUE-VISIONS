'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Zap } from 'lucide-react'

const plans = [
  { name: 'Social Media Management', price: '₹1,999', period: '/month', desc: 'Complete social media management for your brand', features: ['15 posts per month', 'Story designs included', 'Audience engagement', 'Monthly analytics report', 'Hashtag strategy', 'WhatsApp support'], popular: false },
  { name: 'Poster Design', price: '₹149', period: '/post', desc: 'Premium creative poster designs for your brand', features: ['Custom brand design', '2 revisions included', 'High-res PNG & JPG', '24hr delivery', 'Brand color matching', 'Commercial rights'], popular: true },
  { name: 'Story Design', price: '₹99', period: '/story', desc: 'Engaging Instagram & Facebook story designs', features: ['Animated stories', 'Brand-aligned design', '1 revision included', '12hr delivery', 'Multiple formats', 'Ready to post'], popular: false },
  { name: 'Reel Editing (Short)', price: '₹200', period: '/video', desc: 'Viral short-form reels under 60 seconds', features: ['Trending transitions', 'Music sync', 'Text overlays', 'Color grading', '1080p export', '48hr delivery'], popular: false },
  { name: 'Reel Editing (Long)', price: '₹200', period: '/video', desc: 'Professional long-form video editing', features: ['Cinematic cuts', 'Motion graphics', 'Sound design', 'Color correction', '4K export', '72hr delivery'], popular: false },
]

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className={`relative rounded-2xl p-8 flex flex-col backdrop-blur-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-[#0F6A3D] shadow-2xl' : 'shadow-xl hover:shadow-2xl'}`}
      style={{
        background: plan.popular 
          ? 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(109,40,217,0.08) 100%)'
          : 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(109,40,217,0.04) 100%)',
        border: plan.popular ? '1px solid rgba(15,106,61,0.4)' : '1px solid rgba(15,106,61,0.15)',
        boxShadow: plan.popular 
          ? '0 20px 40px rgba(15,106,61,0.2), inset 0 1px 1px rgba(255,255,255,0.1)'
          : '0 8px 32px rgba(15,106,61,0.1), inset 0 1px 1px rgba(255,255,255,0.05)'
      }}
    >
      {plan.popular && (
        <>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#0F6A3D] to-[#2E8B57] text-white backdrop-blur-sm border border-[#0F6A3D]/30 px-4 py-2 rounded-full shadow-lg">
              <Zap size={12} fill="currentColor" />
              <span className="font-syne text-xs font-bold tracking-wide">MOST POPULAR</span>
            </motion.div>
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F6A3D]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      )}

      <div className="mb-7">
        <h3 className={`font-syne font-bold text-lg mb-2 ${plan.popular ? 'text-[#1F2A1F]' : 'text-[#1F2A1F]'}`}>{plan.name}</h3>
        <p className={`font-poppins text-sm ${plan.popular ? 'text-[#1F2A1F]/80' : 'text-[#1F2A1F]/70'}`}>{plan.desc}</p>
      </div>

      <div className="mb-8 flex items-end gap-2">
        <span className={`font-cinzel text-5xl leading-none font-bold ${plan.popular ? 'text-[#0F6A3D]' : 'gradient-text'}`}>{plan.price}</span>
        <span className={`font-poppins text-sm mb-2 ${plan.popular ? 'text-[#1F2A1F]/70' : 'text-[#1F2A1F]/60'}`}>{plan.period}</span>
      </div>

      <ul className="space-y-3.5 mb-10 flex-1">
        {plan.features.map(f => (
          <motion.li 
            key={f} 
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 group/item">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
              plan.popular 
                ? 'bg-gradient-to-br from-[#0F6A3D] to-[#2E8B57]' 
                : 'bg-gradient-to-br from-[#0F6A3D] to-[#0A4D2C]'
            } group-hover/item:scale-110`}>
              <Check size={12} className="text-white" />
            </div>
            <span className={`font-poppins text-sm transition-colors ${plan.popular ? 'text-[#1F2A1F]/80' : 'text-[#1F2A1F]/70'} group-hover/item:text-[#1F2A1F]`}>{f}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = `/order?plan=${encodeURIComponent(plan.name)}`}
        className={`w-full py-3.5 rounded-xl font-syne font-bold text-sm transition-all duration-300 relative overflow-hidden group ${
          plan.popular
            ? 'bg-gradient-to-r from-[#0F6A3D] to-[#2E8B57] text-white hover:shadow-lg hover:shadow-[#0F6A3D]/40'
            : 'btn-primary text-white'
        }`}
      >
        <span className="relative z-10">Order Now</span>
      </motion.button>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden section-bg">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] hero-shape rounded-full opacity-[0.04] blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="font-oswald text-[clamp(2.2rem,5vw,4.5rem)] font-bold mt-3 gradient-text-dark uppercase tracking-wide">Our Pricing</h2>
          <p className="font-dm text-[#1F2A1F]/70 max-w-xl mx-auto mt-4 text-sm">Premium quality at affordable prices. No hidden charges.</p>
          <div className="red-divider mx-auto mt-4" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan, i) => <PricingCard key={plan.name} plan={plan} index={i} />)}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-12">
          <p className="font-dm text-[#1F2A1F]/60 text-sm">
            Need a custom package?{' '}
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#0F6A3D] hover:text-[#0A4D2C] font-bold transition-colors duration-300">
              Contact us for a tailored quote →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
