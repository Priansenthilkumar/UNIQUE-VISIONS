'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import { Sparkles, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function PricingPage() {
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
                <span>Honest Pricing & Estimator</span>
              </div>
              <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] text-white">
                Pricing Plans & <span className="gradient-text-gold">Calculator</span>
              </h1>
              <p className="font-jakarta text-slate-300 mt-3 text-base max-w-xl mx-auto leading-relaxed">
                Transparent rates starting at ₹99/story, ₹149/post, ₹200/reel video, and ₹1,999/mo retainers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full Pricing Table & Calculator */}
        <Pricing />

        {/* FAQ Navigation CTA */}
        <section className="py-16 bg-[#0D0D14] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
              <HelpCircle size={24} />
            </div>
            <h2 className="font-syne font-bold text-2xl text-white mb-2">Have Questions About Scope Or Turnarounds?</h2>
            <p className="font-jakarta text-slate-300 text-sm mb-6">
              Check our Help Center for detailed info regarding revisions, formats, and custom contracts.
            </p>
            <button
              onClick={() => router.push('/help')}
              className="btn-glass px-8 py-3.5 uppercase text-xs tracking-wider font-bold"
            >
              <span>Visit Help Center</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
