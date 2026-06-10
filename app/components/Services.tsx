'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Share2, Palette, Film, Video, BarChart2, TrendingUp, Facebook, ArrowRight, Check, Globe } from 'lucide-react'

const services = [
  { icon: Share2, title: 'Social Media Management', desc: 'We handle your social media so you don\'t have to.', features: ['Daily posts', 'Reply to comments', 'Monthly reports', 'Hashtag planning'], badge: '' },
  { icon: Palette, title: 'Creative Poster Design', desc: 'Posters that grab attention and look professional.', features: ['Custom designs', '2 free revisions', 'High quality files', 'Quick delivery'], badge: '' },
  { icon: Film, title: 'Reel Editing', desc: 'Short videos edited to get views and likes.', features: ['Trending effects', 'Music added', 'Text & captions', 'Color fixes'], badge: '' },
  { icon: Video, title: 'Video Editing', desc: 'Professional video editing for any type of content.', features: ['Clean cuts', 'Graphics added', 'Better audio', 'Color grading'], badge: '' },
  { icon: BarChart2, title: 'Content Strategy', desc: 'We plan what to post and when to post it.', features: ['Content calendar', 'Check competitors', 'Find trends', 'Track results'], badge: '' },
  { icon: TrendingUp, title: 'Instagram Growth', desc: 'Real strategies to grow your Instagram followers.', features: ['Profile setup', 'Growth tips', 'More engagement', 'Target audience'], badge: '' },
  { icon: Facebook, title: 'Facebook Marketing', desc: 'Facebook ads that actually bring customers.', features: ['Setup campaigns', 'Target right people', 'Test what works', 'Better ROI'], badge: '' },
  { icon: Globe, title: 'Web Design', desc: 'Modern websites built fast with AI + expert touch.', features: ['AI design help', 'Expert finish', 'Mobile friendly', 'SEO ready'], badge: 'New' },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="card-3d rounded-2xl p-7 group relative overflow-hidden flex flex-col backdrop-blur-xl border-white/5 hover:border-white/20 shadow-xl hover:shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(109,40,217,0.04) 100%)',
        boxShadow: '0 8px 32px rgba(139,92,246,0.15), inset 0 1px 1px rgba(255,255,255,0.1)'
      }}
    >
      {service.badge && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-[#0F6A3D] to-[#2E8B57] text-white font-syne font-bold text-[9px] px-3 py-1 rounded-full uppercase tracking-wider">
          {service.badge}
        </motion.div>
      )}
      
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0F6A3D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F6A3D]/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="w-14 h-14 rounded-xl hero-shape flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 relative z-10" 
        style={{ boxShadow: '0 8px 24px rgba(15,106,61,0.4)' }}>
        <service.icon size={24} className="text-[#0F6A3D]" style={{ filter: 'drop-shadow(0 0 10px rgba(15,106,61,0.7))' }} />
      </div>

      <h3 className="font-syne font-bold text-[#1F2A1F] text-lg mb-3 group-hover:text-[#0F6A3D] transition-colors duration-300 relative z-10">{service.title}</h3>
      <p className="font-poppins text-[#1F2A1F]/70 text-sm leading-relaxed mb-6 relative z-10">{service.desc}</p>

      <ul className="space-y-3 mb-8 flex-1 relative z-10">
        {service.features.map(f => (
          <motion.li 
            key={f} 
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 group/item">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0F6A3D] to-[#2E8B57] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
              <Check size={12} className="text-white" />
            </div>
            <span className="font-poppins text-sm text-[#1F2A1F]/70 group-hover/item:text-[#1F2A1F]/90 transition-colors">{f}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button 
        whileHover={{ scale: 1.05, x: 4 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = `/order?service=${encodeURIComponent(service.title)}`} 
        className="flex items-center gap-2 text-[#0F6A3D] font-syne text-sm font-bold hover:text-[#0A4D2C] transition-colors duration-300 relative z-10 group/btn">
        Order Now 
        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
      </motion.button>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden section-bg">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] hero-shape rounded-full opacity-[0.04] blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="font-oswald text-[clamp(2.2rem,5vw,4.5rem)] font-bold mt-3 gradient-text-dark uppercase tracking-wide">Our Services</h2>
          <p className="font-poppins text-[#1F2A1F]/70 max-w-xl mx-auto mt-4 text-sm leading-relaxed">Everything you need to grow your brand online.</p>
          <div className="red-divider mx-auto mt-4" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
