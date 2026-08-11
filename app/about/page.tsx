'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import { Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 font-jakarta">
      <Navbar />

      <main className="pt-36">
        {/* Page Header */}
        <section className="relative py-16 bg-[#0D0D14] border-b border-white/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="tag-luxury mb-3">
                <Sparkles size={13} className="text-amber-400" />
                <span>Who We Are</span>
              </div>
              <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] text-white">
                About <span className="gradient-text-gold">Unique Visions</span>
              </h1>
              <p className="font-jakarta text-slate-300 mt-3 text-base max-w-xl mx-auto leading-relaxed">
                Discover our journey, mission, core values, timeline, and why 10+ brands choose Unique Visions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full About Section */}
        <About />

        {/* Bottom Callout */}
        <section className="py-20 bg-[#0D0D14] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-white mb-4">
              Ready To Work With Our Agency?
            </h2>
            <p className="font-jakarta text-slate-300 text-base mb-8 max-w-xl mx-auto">
              Place an order or send us an inquiry today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/order')}
                className="btn-gold px-8 py-4 uppercase text-xs tracking-widest font-bold inline-flex items-center gap-2"
              >
                <span>Book A Project</span>
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
    </div>
  )
}
