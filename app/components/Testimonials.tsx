'use client'
import { motion } from 'framer-motion'
import { Star, MessageSquarePlus, ArrowRight } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent)' }} 
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 80, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent)' }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
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
            Client Success
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-6xl md:text-7xl font-bold mt-4 mb-6 text-text"
          >
            What Our <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Clients</span> Say
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-text-muted text-lg max-w-2xl mx-auto"
          >
            Since launching in January 2026, we've been working with incredible brands and helping them grow their online presence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="divider-line mx-auto mt-8"
          />
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{ y: -8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-premium-alt p-12 sm:p-16 relative overflow-hidden group rounded-3xl">
            
            {/* Animated gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/8 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
              style={{ pointerEvents: 'none' }}
            />

            {/* Top accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
            />
            
            {/* Star Rating */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-2 mb-10"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.2, rotate: 12 }}
                >
                  <Star size={36} className="text-primary fill-primary drop-shadow-lg" />
                </motion.div>
              ))}
            </motion.div>

            {/* Icon */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex justify-center mb-10"
            >
              <motion.div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/20 shadow-lg"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquarePlus size={40} className="text-primary drop-shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-cinzel text-4xl md:text-5xl font-bold text-text text-center mb-6 uppercase tracking-tight"
            >
              Amazing Client Stories
            </motion.h3>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-poppins text-text-muted text-center text-lg leading-relaxed mb-12"
            >
              Since launching in <span className="text-primary font-semibold">January 2026</span>, we've been working with incredible brands and helping them grow their online presence through strategic digital marketing and creative content.
            </motion.p>

            {/* Client Avatar Group */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-4 rounded-2xl px-8 py-5 mb-12 w-full justify-center backdrop-blur-md bg-white/50 border border-primary/20 shadow-lg"
            >
              <div className="flex -space-x-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.25, zIndex: 10 }}
                    className="w-12 h-12 rounded-full border-3 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, hsl(${49 + i * 45}, 80%, 50%), hsl(${49 + i * 45}, 80%, 40%))`,
                      borderColor: 'white',
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-cinzel font-bold text-text text-lg">10+ Happy Clients</p>
                <p className="font-poppins text-text-muted text-sm">Growing their brands</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/reviews'}
                className="btn-primary px-10 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  See All Reviews
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={18} />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/order'}
                className="btn-outline px-10 py-4 rounded-full font-semibold text-base"
              >
                Start Growing Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
