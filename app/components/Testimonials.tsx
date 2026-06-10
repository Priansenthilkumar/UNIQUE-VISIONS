'use client'
import { motion } from 'framer-motion'
import { Star, MessageSquarePlus } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden section-bg">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.1] blur-[140px] animate-float"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent)' }} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.4), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label">Client Success</span>
          <h2 className="font-cinzel text-[clamp(2.2rem,5vw,4.5rem)] font-bold mt-4 gradient-text-dark uppercase tracking-wide">What Our Clients Say</h2>
          <p className="font-poppins text-[#1F2A1F]/70 max-w-2xl mx-auto mt-5 text-base leading-relaxed">
            We launched in January 2026 and are building incredible success stories with our clients. Real results from real brands.
          </p>
          <div className="red-divider mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-3d rounded-3xl p-10 sm:p-14 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(109,40,217,0.05) 100%)',
              boxShadow: '0 16px 48px rgba(139,92,246,0.2), inset 0 1px 1px rgba(255,255,255,0.1)'
            }}>
            
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0F6A3D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Star Rating */}
            <div className="flex justify-center gap-3 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <Star size={32} className="text-[#0F6A3D] fill-[#0F6A3D]" style={{ filter: 'drop-shadow(0 0 12px rgba(15,106,61,0.8))' }} />
                </motion.div>
              ))}
            </div>

            {/* Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(109,40,217,0.4))',
                  boxShadow: '0 12px 40px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                  border: '1px solid rgba(139,92,246,0.4)'
                }}>
                <MessageSquarePlus size={32} className="text-[#0F6A3D]" style={{ filter: 'drop-shadow(0 0 12px rgba(15,106,61,0.7))' }} />
              </div>
            </motion.div>

            {/* Title */}
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F2A1F] uppercase tracking-wider mb-4 text-center">
              Amazing Client Stories
            </h3>
            <p className="font-poppins text-[#1F2A1F]/70 text-center text-base leading-relaxed mb-10">
              Since launching in <span className="text-[#0F6A3D] font-semibold">January 2026</span>, we've been working with incredible brands and helping them grow their online presence through strategic digital marketing and creative content.
            </p>

            {/* Client Avatar Group */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-4 rounded-2xl px-6 py-4 mb-10 w-full justify-center"
              style={{ 
                background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(109,40,217,0.04))',
                border: '1px solid rgba(139,92,246,0.2)',
                boxShadow: '0 8px 24px rgba(139,92,246,0.15)'
              }}>
              <div className="flex -space-x-3">
                {['A', 'B', 'C', 'D'].map((l, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold"
                    style={{ 
                      background: `linear-gradient(135deg, hsla(${i * 90}, 80%, 50%, 0.4), hsla(${i * 90}, 80%, 40%, 0.5))`,
                      borderColor: '#0a0a0a',
                      boxShadow: '0 4px 12px rgba(139,92,246,0.4)'
                    }}>
                    {l}
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-syne font-bold text-[#1F2A1F] text-base">10+ Happy Clients</p>
                <p className="font-poppins text-[#1F2A1F]/60 text-xs">Growing their brands since 2026</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/reviews'}
                className="btn-primary px-8 py-3.5 rounded-xl font-syne font-bold text-white text-base tracking-wider flex items-center justify-center gap-2 group"
              >
                See All Reviews
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>→</motion.span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/order'}
                className="btn-outline px-8 py-3.5 rounded-xl font-syne font-bold text-base tracking-wider"
              >
                Start Growing Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
