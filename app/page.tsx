'use client'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import Stats from './components/Stats'
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Loader = dynamic(() => import('./components/Loader'), { ssr: false })
const ScrollProgress = dynamic(() => import('./components/ScrollProgress'), { ssr: false })
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), { ssr: false })

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />

      <main className="bg-[#0B0304] text-slate-100 font-jakarta">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Marquee Ticker */}
        <Marquee />

        {/* 3. Agency Portal Direct Navigation Cards */}
        <section className="section-padding relative overflow-hidden bg-[#0B0304]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="badge-crimson mb-3">
                <Sparkles size={14} />
                <span>Explore Agency</span>
              </div>
              <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
                Everything You Need To <span className="gradient-text-crimson">Scale Digital Growth</span>
              </h2>
              <p className="font-jakarta text-slate-300 text-base md:text-lg max-w-2xl mx-auto mt-4">
                Select a section to explore our story, full services catalog, transparent pricing, client reviews, or contact details.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* About Link Card */}
              <div
                onClick={() => router.push('/about')}
                className="glass-card p-8 border border-rose-500/20 hover:border-rose-500/50 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90 cursor-pointer group flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-rose-400 transition-colors">
                    About Us
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Discover our journey, mission, core values, timeline, and why 10+ brands choose Unique Visions.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 group-hover:translate-x-1 transition-transform">
                  <span>Learn Our Story</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Services Link Card */}
              <div
                onClick={() => router.push('/services')}
                className="glass-card p-8 border border-rose-500/20 hover:border-rose-500/50 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90 cursor-pointer group flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-rose-400 transition-colors">
                    Our Services
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Full catalog of 8 services: Social Media Management, Creative Design, Reel Editing, Video Production & AI Web Design.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Catalog</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Pricing Link Card */}
              <div
                onClick={() => router.push('/pricing')}
                className="glass-card p-8 border border-amber-500/20 hover:border-amber-500/50 bg-gradient-to-b from-[#200A0D]/90 to-[#1A070A]/90 cursor-pointer group flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Pricing & Plans
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Transparent rates starting at ₹99/story, ₹149/post, ₹200/reel, and ₹1,999/mo for complete monthly management.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>View Pricing</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Reviews Link Card */}
              <div
                onClick={() => router.push('/reviews')}
                className="glass-card p-8 border border-rose-500/20 hover:border-rose-500/50 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90 cursor-pointer group flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-rose-400 transition-colors">
                    Client Reviews
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Read verified client feedback and ratings, or leave a review about your experience working with us.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Reviews</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Contact Link Card */}
              <div
                onClick={() => router.push('/contact')}
                className="glass-card p-8 border border-rose-500/20 hover:border-rose-500/50 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90 cursor-pointer group flex flex-col justify-between transition-all sm:col-span-2 lg:col-span-2"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-2 group-hover:text-rose-400 transition-colors">
                    Contact & Inquiry
                  </h3>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
                    Get in touch with us via inquiry form, phone call (+91 9363964142), direct WhatsApp, or find our Rasipuram office location on the map.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 group-hover:translate-x-1 transition-transform">
                  <span>Contact Us Directly</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stats Section */}
        <Stats />

        {/* 5. Bottom Callout Banner */}
        <section className="py-20 bg-[#120507] border-t border-rose-500/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white mb-4 leading-tight">
              Ready To Start Your Growth Journey?
            </h2>
            <p className="font-jakarta text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Place an order or send us an inquiry today to receive a personalized digital strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/order')}
                className="btn-crimson px-8 py-4 uppercase text-xs tracking-widest font-bold"
              >
                <span>Place Order Now</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="btn-glass px-8 py-4 uppercase text-xs tracking-widest font-bold"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
