'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import PortfolioShowcase from './components/PortfolioShowcase'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, MessageCircle } from 'lucide-react'

const Loader = dynamic(() => import('./components/Loader'), { ssr: false })
const ScrollProgress = dynamic(() => import('./components/ScrollProgress'), { ssr: false })
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), { ssr: false })

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />

      <main className="bg-[#070709] text-slate-100 font-jakarta overflow-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Brand Marquee */}
        <Marquee />

        {/* 3. Visual Portfolio & Work Deliverables Gallery */}
        <PortfolioShowcase />

        {/* 4. Complete Services Catalog */}
        <Services />

        {/* 5. Pricing & Interactive Custom Package Calculator */}
        <Pricing />

        {/* 6. Client Reviews & Feedback */}
        <Testimonials />

        {/* 7. Portal Navigation Cards */}
        <section className="section-padding relative overflow-hidden bg-[#070709]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <div className="tag-luxury mb-3">
                <Sparkles size={13} className="text-amber-400" />
                <span>Quick Agency Navigation</span>
              </div>
              <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
                Explore The Agency <span className="gradient-text-gold">Hub</span>
              </h2>
              <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                Direct access to our story, full services catalog, transparent rates, client reviews, and instant order booking.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* About Link Card */}
              <Link
                href="/about"
                className="luxury-card p-8 border border-white/10 hover:border-amber-500/40 cursor-pointer group flex flex-col justify-between transition-all block"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                    About Us
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Discover our journey, core values, timeline, and why 10+ brands trust Unique Visions.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Learn Our Story</span>
                  <ArrowRight size={14} />
                </div>
              </Link>

              {/* Services Link Card */}
              <Link
                href="/services"
                className="luxury-card p-8 border border-white/10 hover:border-amber-500/40 cursor-pointer group flex flex-col justify-between transition-all block"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Services
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Full catalog of 8 core services: Social Media, Poster Design, Reel Editing, & Web Design.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Catalog</span>
                  <ArrowRight size={14} />
                </div>
              </Link>

              {/* Pricing Link Card */}
              <Link
                href="/pricing"
                className="luxury-card p-8 border border-white/10 hover:border-amber-500/40 cursor-pointer group flex flex-col justify-between transition-all block"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Pricing & Calculator
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Transparent rates starting at ₹99/story, ₹149/post, ₹200/reel, and ₹1,999/mo retainers.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>View Pricing & Calculator</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Bottom CTA Banner */}
        <section className="py-24 bg-[#070709] border-t border-white/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white mb-4 leading-tight">
              Ready To Transform Your <span className="font-serif-accent italic text-amber-300">Digital Presence?</span>
            </h2>
            <p className="font-jakarta text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Book your deliverable today or request a custom monthly growth retainer strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="btn-gold px-8 py-4 uppercase text-xs tracking-widest font-bold inline-flex items-center justify-center gap-2"
              >
                <span>Book A Project Now</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="btn-glass px-8 py-4 uppercase text-xs tracking-widest font-bold inline-flex items-center justify-center"
              >
                <span>Contact Agency</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
