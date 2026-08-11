'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  Eye,
  TrendingUp,
  Sparkles,
  ExternalLink,
  X,
  Layers,
  ArrowRight,
  Video,
  Palette,
  Layout,
  Instagram
} from 'lucide-react'

export interface PortfolioItem {
  id: string
  title: string
  category: 'reels' | 'posters' | 'social' | 'web'
  categoryLabel: string
  client: string
  metrics: string
  description: string
  type: 'video' | 'graphic' | 'web'
  gradient: string
  previewImage: string
  videoUrl?: string
  tags: string[]
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Viral Product Launch Reel',
    category: 'reels',
    categoryLabel: 'Reel Editing',
    client: 'Aura Luxe Fashion',
    metrics: '420K+ Views • 28K Likes',
    description: 'High-energy fast-cut Instagram Reel with beat syncing, custom kinetic captions, color grading, and custom sound design that drove 4.5x sales conversions during product drop.',
    type: 'video',
    gradient: 'from-amber-600/30 via-rose-600/20 to-purple-900/40',
    previewImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tags: ['Kinetic Captions', 'Beat Sync', '1080x1920 HD', 'Viral Effects']
  },
  {
    id: 'p2',
    title: 'Luxury Brand Poster Campaign',
    category: 'posters',
    categoryLabel: 'Creative Graphic Design',
    client: 'Velvet Cafe & Bistro',
    metrics: '12K+ Saves • 3.2X Reach',
    description: 'Bespoke promotional poster series designed for social media feeds & print. Clean typography hierarchy, golden color palette, and high-impact visual composition.',
    type: 'graphic',
    gradient: 'from-yellow-600/30 via-amber-800/20 to-stone-900/40',
    previewImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    tags: ['Custom Typography', 'Brand Palette', 'High-Res PNG', 'Social Ad']
  },
  {
    id: 'p3',
    title: '30-Day Instagram Grid & Feed System',
    category: 'social',
    categoryLabel: 'Social Media Management',
    client: 'Zenith Fitness Academy',
    metrics: '+340% Follower Growth',
    description: 'End-to-end aesthetic Instagram feed makeover, strategic post scheduling, engagement boost, story highlights redesign, and monthly analytics reporting.',
    type: 'graphic',
    gradient: 'from-rose-600/30 via-purple-800/20 to-slate-950/40',
    previewImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    tags: ['Grid Layout', 'Content Strategy', '30 Posts/mo', 'Story Packs']
  },
  {
    id: 'p4',
    title: 'Modern AI-Powered Business Website',
    category: 'web',
    categoryLabel: 'Web Design',
    client: 'NexaTech Innovations',
    metrics: '99 Performance Score',
    description: 'Sleek, responsive dark-mode web application built with modern Next.js framework, glassmorphism aesthetics, lightning-fast animations, and SEO structure.',
    type: 'web',
    gradient: 'from-cyan-600/30 via-indigo-900/20 to-slate-950/40',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Responsive UI', 'SEO Ready', 'Fast Loading']
  },
  {
    id: 'p5',
    title: 'Cinematic Story & Reel Motion Graphics',
    category: 'reels',
    categoryLabel: 'Reel Editing',
    client: 'Elite Real Estate Group',
    metrics: '180K+ Views • 94% Retention',
    description: 'Smooth property tour reel with cinematic color grading, ambient acoustic background music, floating metric overlays, and clear call-to-action cards.',
    type: 'video',
    gradient: 'from-amber-500/30 via-yellow-700/20 to-slate-900/40',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Cinematic Cuts', 'Sound Design', '4K Export', 'Color Grading']
  },
  {
    id: 'p6',
    title: 'Event & Festival Poster Series',
    category: 'posters',
    categoryLabel: 'Creative Graphic Design',
    client: 'Pulse Music Festival',
    metrics: 'Sold Out Event',
    description: 'Vibrant concert poster set designed with bold neon contrast, dynamic typography, and social media storytelling stories that drove record ticket pre-sales.',
    type: 'graphic',
    gradient: 'from-purple-600/30 via-pink-700/20 to-slate-900/40',
    previewImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    tags: ['Event Branding', 'Social Stories', 'Print Ready', 'Ad Banners']
  }
]

const categories = [
  { id: 'all', label: 'All Showcase' },
  { id: 'reels', label: 'Reel Editing', icon: Video },
  { id: 'posters', label: 'Creative Posters', icon: Palette },
  { id: 'social', label: 'Social Management', icon: Instagram },
  { id: 'web', label: 'Web Design', icon: Layout },
]

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-[#070709]">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="tag-luxury mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Visual Deliverables Showcase</span>
          </div>

          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Selected Works & <span className="gradient-text-gold">Creative Excellence</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Take a look at how we transform brand identities with scroll-stopping Reels, high-converting social graphics, and sleek web experiences.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-jakarta text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-slate-950 shadow-lg shadow-amber-500/20 border border-amber-300'
                    : 'bg-[#12121A] text-slate-300 border border-white/10 hover:border-amber-500/40 hover:text-white'
                }`}
              >
                {Icon && <Icon size={14} />}
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="luxury-card group cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Image Banner with Gradient Overlay */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-80 group-hover:opacity-60 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-transparent to-transparent opacity-90" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 font-jakarta text-[0.65rem] font-bold uppercase tracking-widest bg-slate-950/80 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
                    {item.categoryLabel}
                  </span>

                  {/* Play Overlay for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/40 group-hover:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Metric Tag at bottom of banner */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-syne font-bold flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-amber-400">
                      <TrendingUp size={14} />
                      <span>{item.metrics}</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Client: {item.client}
                    </span>
                    <h3 className="font-syne text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-jakarta text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap max-w-[70%]">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] bg-white/5 text-slate-300 px-2.5 py-0.5 rounded-md border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox Preview */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="luxury-card-gold w-full max-w-3xl overflow-hidden bg-[#0D0D14] border border-amber-500/40 relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 border border-white/20 text-slate-300 hover:text-white flex items-center justify-center"
                >
                  <X size={20} />
                </button>

                {/* Modal Visual Top */}
                <div className="relative h-72 md:h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src={selectedItem.previewImage}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedItem.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 border border-amber-500/40 px-3 py-1 rounded-full">
                      {selectedItem.categoryLabel}
                    </span>
                    <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-white mt-3">
                      {selectedItem.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6 font-jakarta">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-semibold">Client Project</span>
                      <span className="font-syne font-bold text-white text-base">{selectedItem.client}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block uppercase font-semibold">Performance Metric</span>
                      <span className="font-syne font-extrabold text-amber-400 text-base">{selectedItem.metrics}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-syne font-bold text-base text-white mb-2">Project Brief & Execution</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-syne font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">Deliverable Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map(t => (
                        <span key={t} className="text-xs bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-lg font-semibold">
                          ✓ {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        const target = selectedItem.title
                        setSelectedItem(null)
                        window.location.href = `/order?service=${encodeURIComponent(target)}`
                      }}
                      className="btn-gold flex-1 py-3.5 uppercase tracking-wider text-xs font-bold inline-flex items-center justify-center gap-2"
                    >
                      <Sparkles size={16} />
                      <span>Order Similar Project</span>
                    </button>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="btn-glass px-6 py-3.5 uppercase tracking-wider text-xs font-bold"
                    >
                      <span>Close Preview</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
