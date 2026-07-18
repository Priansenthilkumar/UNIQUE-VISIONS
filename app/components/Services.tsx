'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Share2, Palette, Film, Video, BarChart2, TrendingUp, Facebook, Globe, ArrowRight, Check } from 'lucide-react'

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
  const inView = useInView(ref, { once: true, margin: '-50px' })
  
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, delay: (index % 4) * 0.12, ease: [0.34, 1.56, 0.64, 1] }
    }
  }
  
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -12, rotateY: 2 }}
      className="card-premium p-8 h-full flex flex-col relative group overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: 'none' }}
      />

      {/* Badge */}
      {service.badge && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-primary-accent via-primary to-primary-dark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
        >
          {service.badge}
        </motion.div>
      )}
      
      {/* Icon Container */}
      <motion.div 
        whileHover={{ scale: 1.2, rotateZ: 5 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:shadow-glow-md transition-all duration-300 relative"
      >
        <motion.div 
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <service.icon size={32} className="icon-primary" />
        </motion.div>
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ pointerEvents: 'none' }}
        />
      </motion.div>

      {/* Content */}
      <motion.h3 
        className="font-playfair font-bold text-xl text-text mb-3 group-hover:text-primary transition-colors duration-300"
        whileHover={{ x: 4 }}
      >
        {service.title}
      </motion.h3>
      
      <p className="font-poppins text-text-muted text-sm leading-relaxed mb-6 flex-1">
        {service.desc}
      </p>

      {/* Features List */}
      <ul className="space-y-3 mb-8 flex-1">
        {service.features.map((feature, i) => (
          <motion.li 
            key={feature} 
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 + (index % 4) * 0.12 + i * 0.05 }}
            className="flex items-start gap-2 group/item"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              <Check size={18} className="icon-primary mt-0.5 flex-shrink-0" />
            </motion.div>
            <span className="text-sm text-text-muted group-hover/item:text-text transition-colors">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button 
        whileHover={{ x: 6 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => window.location.href = `/order?service=${encodeURIComponent(service.title)}`}
        className="flex items-center gap-2 text-primary font-semibold text-sm group/btn hover:text-primary-dark transition-colors"
      >
        <span>Learn More</span>
        <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowRight size={16} />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-premium">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-primary/15 to-secondary/10 blur-3xl opacity-40 pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 50, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-secondary/10 to-primary/15 blur-3xl opacity-30 pointer-events-none"
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
            What We Offer
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel font-bold text-5xl md:text-6xl text-text mt-4 mb-6"
          >
            Our <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">Services</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-text-muted text-lg max-w-2xl mx-auto"
          >
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="divider-line mx-auto mt-8"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
