'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Sparkles, Target, Zap, HeadphonesIcon, Layers, ArrowRight } from 'lucide-react'

const reasons = [
  { icon: DollarSign, num: '01', title: 'Affordable Pricing', desc: 'Quality work at fair prices. No hidden fees, just straight-up value.' },
  { icon: Sparkles, num: '02', title: 'Creative Work', desc: 'We create designs and content that actually catch attention.' },
  { icon: Target, num: '03', title: 'Results Matter', desc: 'We focus on what works — more followers, more engagement, more customers.' },
  { icon: Zap, num: '04', title: 'Fast Delivery', desc: 'We respect your time. Quick turnarounds without compromising quality.' },
  { icon: HeadphonesIcon, num: '05', title: 'Always Available', desc: 'Need help? Just message us. We reply fast — real people, not bots.' },
  { icon: Layers, num: '06', title: 'Made For You', desc: 'Every project is custom-made for your brand. No templates, no shortcuts.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden section-bg">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[140px] animate-float"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent)' }} />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.4), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-20">
          <span className="section-label">Why We're Different</span>
          <h2 className="font-cinzel text-[clamp(2.2rem,5vw,4.5rem)] font-bold mt-4 gradient-text-dark uppercase tracking-wide">Why Choose Us</h2>
          <p className="font-poppins text-[#1F2A1F]/70 max-w-2xl mx-auto mt-5 text-base leading-relaxed">
            We combine creativity, strategy, and results-driven approach to help your brand stand out in a crowded digital landscape.
          </p>
          <div className="red-divider mx-auto mt-6" />
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="card-3d rounded-3xl p-8 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(109,40,217,0.04) 100%)',
                boxShadow: '0 12px 40px rgba(139,92,246,0.15)'
              }}>
              
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0F6A3D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Background Number */}
              <motion.div 
                animate={{ y: [0, 20, 0], opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 right-4 font-cinzel text-7xl text-white/5 leading-none select-none">
                {item.num}
              </motion.div>

              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-14 h-14 rounded-xl hero-shape flex items-center justify-center mb-5 group-hover:scale-125 transition-all duration-300" 
                  style={{ boxShadow: '0 8px 28px rgba(15,106,61,0.4)' }}>
                  <item.icon size={24} className="text-[#0F6A3D]" style={{ filter: 'drop-shadow(0 0 10px rgba(15,106,61,0.7))' }} />
                </motion.div>
                
                <h3 className="font-syne font-bold text-[#1F2A1F] text-lg mb-3 group-hover:text-[#0F6A3D] transition-colors duration-300">{item.title}</h3>
                <p className="font-poppins text-[#1F2A1F]/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="text-center">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(139,92,246,0.5)' }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/order'}
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 rounded-full font-syne font-bold text-white text-base tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300">
              Work With Us
              <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ArrowRight size={18} />
              </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
