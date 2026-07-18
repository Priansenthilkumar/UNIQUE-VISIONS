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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.94, skewY: 3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      skewY: 0,
      transition: { duration: 0.65, delay: (index % 3) * 0.12, ease: [0.34, 1.56, 0.64, 1] }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -20, scale: 1.05, rotateZ: -0.5 }}
      className={`relative rounded-3xl p-10 flex flex-col backdrop-blur-xl transition-all duration-300 overflow-hidden group ${
        plan.popular 
          ? 'card-premium-alt ring-2 ring-primary/40' 
          : 'card-premium-alt'
      }`}
    >
      {/* Animated background gradient */}
      <motion.div 
        className={`absolute inset-0 ${
          plan.popular 
            ? 'bg-gradient-to-br from-primary/15 to-secondary/10' 
            : 'bg-gradient-to-br from-primary/8 to-secondary/5'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ pointerEvents: 'none' }}
      />

      {/* Popular Badge */}
      {plan.popular && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div 
            animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 bg-gradient-to-r from-primary-accent via-primary to-primary-dark text-white backdrop-blur-md border border-primary-light/40 px-5 py-2.5 rounded-full shadow-lg"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
              <Zap size={14} fill="currentColor" />
            </motion.div>
            <span className="font-space text-xs font-bold tracking-widest">MOST POPULAR</span>
          </motion.div>
        </motion.div>
      )}

      {/* Shine effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ opacity: 0, x: '-100%' }}
        whileHover={{ opacity: 1, x: '100%' }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: 'none' }}
      />

      <div className={`mb-8 relative z-10 ${plan.popular ? 'pt-6' : ''}`}>
        <motion.h3 
          className="font-playfair font-bold text-2xl mb-3 text-text group-hover:text-primary transition-colors duration-300"
          whileHover={{ x: 4 }}
        >
          {plan.name}
        </motion.h3>
        <p className="font-poppins text-sm text-text-muted">{plan.desc}</p>
      </div>

      {/* Price */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="mb-10 flex items-end gap-2 relative z-10"
      >
        <span className={`font-playfair text-6xl leading-none font-bold ${
          plan.popular 
            ? 'bg-gradient-to-r from-primary-accent to-primary bg-clip-text text-transparent' 
            : 'text-text'
        }`}>
          {plan.price}
        </span>
        <span className="font-poppins text-sm text-text-muted mb-2">{plan.period}</span>
      </motion.div>

      {/* Features List */}
      <ul className="space-y-4 mb-12 flex-1 relative z-10">
        {plan.features.map((f, i) => (
          <motion.li 
            key={f}
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.06 }}
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 group/item"
          >
            <motion.div 
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.4 }}
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary-accent to-primary' 
                  : 'bg-gradient-to-br from-primary to-primary-dark'
              }`}
            >
              <Check size={14} className="text-white" />
            </motion.div>
            <span className="font-poppins text-sm text-text-muted group-hover/item:text-text transition-colors">{f}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = `/order?plan=${encodeURIComponent(plan.name)}`}
        className={`relative z-10 w-full py-4 rounded-2xl font-cinzel font-bold text-sm transition-all duration-300 overflow-hidden group/btn shadow-lg ${
          plan.popular
            ? 'btn-primary text-white'
            : 'bg-white/70 border border-primary/30 text-primary hover:bg-white/90 hover:border-primary/50'
        }`}
      >
        <span className="relative z-10">Order Now</span>
      </motion.button>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          x: [0, 80, 0], 
          y: [0, -50, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-primary-light/12 to-secondary/8 blur-3xl opacity-25 pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -60, 0], 
          y: [0, 80, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-secondary/8 to-primary-light/12 blur-3xl opacity-25 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label inline-block"
          >
            Transparent Pricing
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-6xl md:text-7xl font-bold mt-4 mb-6 text-text"
          >
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">Our Pricing</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-text-muted text-lg max-w-2xl mx-auto"
          >
            Premium quality at affordable prices. No hidden charges, transparent billing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="divider-line mx-auto mt-8"
          />
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-xl border border-primary/15 rounded-3xl p-8 md:p-12"
        >
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-text mb-4">
            Need Something Custom?
          </h3>
          <p className="font-poppins text-text-muted text-lg mb-6 max-w-2xl mx-auto">
            Let's create a tailored solution that fits your specific business needs and budget.
          </p>
          <motion.button 
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-4 rounded-full font-semibold text-base shadow-lg"
          >
            Get a Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
