'use client'
import { useRef } from 'react'
import { Share2, Palette, Film, Video, BarChart2, TrendingUp, Facebook, Globe, ArrowRight, Check, Sparkles } from 'lucide-react'

const services = [
  { 
    icon: Share2, 
    title: 'Social Media Management', 
    desc: 'Comprehensive monthly brand management, strategy & daily engagement to scale your digital presence.',
    features: ['15-30 Custom Posts', 'Daily Story Strategy', 'Analytics & Reports', 'Community Engagement'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Palette, 
    title: 'Creative Poster Design', 
    desc: 'High-converting graphics and promotional posters crafted to command attention on crowded feeds.',
    features: ['Custom Brand Aesthetic', 'Commercial Rights', 'Unlimited Revisions', '24hr Rush Delivery'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Film, 
    title: 'Short Reel Editing', 
    desc: 'Viral short-form reels edited with beat sync, trending effects, kinetic text captions, and color grading.',
    features: ['Kinetic Sound Sync', 'Trending Captions', 'Color Correction', '1080x1920 HD Export'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular'
  },
  { 
    icon: Video, 
    title: 'Long-Form Video Production', 
    desc: 'Cinematic video editing for YouTube, agency promos, and product launches with sound design.',
    features: ['Professional Cuts', 'Motion Graphics', 'Sound Design', '4K Master Export'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: BarChart2, 
    title: 'Data Content Strategy', 
    desc: 'Strategic content calendar creation & competitor analysis to ensure maximum audience ROI.',
    features: ['Content Roadmap', 'Competitor Teardowns', 'Audience Insights', 'Performance Metrics'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: TrendingUp, 
    title: 'Organic Instagram Growth', 
    desc: 'Targeted profile optimization and engagement strategies to build a loyal local and national follower base.',
    features: ['Bio & Highlight Audit', 'Growth Tactics', 'Audience Targeting', 'Brand Authority'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Facebook, 
    title: 'Facebook & Meta Ads', 
    desc: 'High-ROI paid advertising campaigns targeted at converting cold traffic into repeat customers.',
    features: ['Ad Creative Design', 'Audience Setup', 'A/B Testing', 'ROAS Optimization'],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Globe, 
    title: 'AI Web Design & Build', 
    desc: 'Modern high-speed websites engineered with Next.js, responsive layouts, and SEO optimization.',
    features: ['Responsive Next.js', 'Sub-second Load', 'SEO Architecture', 'Conversion Layouts'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    badge: 'New'
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div className="luxury-card group h-full flex flex-col justify-between border border-white/10 hover:border-amber-500/40">
      
      {/* Top Visual Image Preview */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />

        {/* Icon Overlay Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#070709]/80 backdrop-blur-md border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-lg">
          <service.icon size={22} />
        </div>

        {service.badge && (
          <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 px-3 py-1 rounded-full shadow-md">
            {service.badge}
          </span>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-syne text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
            {service.title}
          </h3>
          <p className="font-jakarta text-slate-300 text-xs leading-relaxed mb-6">
            {service.desc}
          </p>

          <ul className="space-y-2 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check size={14} className="text-amber-400 shrink-0" />
                <span className="font-jakarta text-xs text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => window.location.href = `/order?service=${encodeURIComponent(service.title)}`}
          className="w-full btn-glass py-3 text-xs uppercase tracking-wider font-bold group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all flex items-center justify-center gap-2"
        >
          <span>Book Service</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="tag-luxury mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Core Digital Solutions</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Comprehensive Digital <span className="gradient-text-gold">Catalog</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            From single reel edits to complete monthly agency retainers — engineered to maximize market impact and customer growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

      </div>
    </section>
  )
}
