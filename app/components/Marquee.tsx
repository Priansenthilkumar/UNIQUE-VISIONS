'use client'
import { motion } from 'framer-motion'

export default function Marquee() {
  return (
    <section className="py-16 section-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center gap-8 relative z-10">
        <motion.div className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(15,106,61,0.4))' }}
          initial={{ scaleX: 0, originX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} />

        <motion.div className="relative flex items-center justify-center flex-shrink-0"
          initial={{ opacity: 0, scale: 0 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}>
          <div className="w-3 h-3 rounded-full bg-[#0F6A3D]" style={{ boxShadow: '0 0 20px rgba(15,106,61,0.8)' }} />
          <motion.div className="absolute w-7 h-7 rounded-full border-2 border-[#0F6A3D]"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }} />
          <motion.div className="absolute w-12 h-12 rounded-full border border-[#0F6A3D]/40"
            animate={{ scale: [0.6, 1.4, 0.6], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }} />
        </motion.div>

        <motion.div className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, rgba(15,106,61,0.4), transparent)' }}
          initial={{ scaleX: 0, originX: 1 }} 
          whileInView={{ scaleX: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} />
      </div>
    </section>
  )
}
