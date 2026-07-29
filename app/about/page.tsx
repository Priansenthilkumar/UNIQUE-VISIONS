'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import { Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#060D0A] text-slate-100 font-jakarta">
      <Navbar />

      <main className="pt-36">
        {/* Page Header Hero */}
        <section className="relative py-16 bg-[#0A1410] border-b border-white/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-emerald mb-3">
                <Sparkles size={14} />
                <span>Agency Overview</span>
              </div>
              <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] text-white">
                About <span className="gradient-text-emerald">Unique Visions</span>
              </h1>
              <p className="font-jakarta text-slate-400 mt-3 text-base max-w-xl mx-auto">
                Discover our journey, mission, values, and why leading brands choose us as their growth partner.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full About Section */}
        <About />

        {/* Why Us Bento Grid */}
        <WhyUs />

        {/* Bottom CTA Banner */}
        <section className="py-20 bg-[#0A1410] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-white mb-4">
              Ready To Elevate Your Brand Strategy?
            </h2>
            <p className="font-jakarta text-slate-400 text-base mb-8 max-w-xl mx-auto">
              Partner with Unique Visions and start converting your audience into loyal customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/order')}
                className="btn-emerald px-8 py-4 uppercase text-xs tracking-widest font-bold"
              >
                <span>Start Your Project</span>
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
