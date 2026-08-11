'use client'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const marqueeItems = [
  'Social Media Management',
  'Creative Poster Design',
  'Short & Long Reel Editing',
  'Instagram Growth Strategy',
  'Facebook Ads & Marketing',
  'AI-Powered Web Design',
  'Brand Identity Creation',
  'Viral Content Planning',
]

export default function Marquee() {
  return (
    <section className="py-7 bg-[#0D0D14] border-y border-white/10 relative overflow-hidden">
      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="font-syne text-sm md:text-base font-bold uppercase tracking-wider text-slate-200 hover:text-amber-400 transition-colors">
                {item}
              </span>
              <Sparkles size={16} className="text-amber-400 animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
