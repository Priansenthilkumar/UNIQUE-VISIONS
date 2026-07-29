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
    <div className="min-h-screen bg-[#0B0304] text-slate-100 font-jakarta">
      <Navbar />

      <main className="pt-36">
        {/* Page Header */}
        <section className="relative py-16 bg-[#120507] border-b border-rose-500/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-crimson mb-3">
                <Sparkles size={14} />
                <span>Honest Pricing</span>
              </div>
              <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] text-white">
                Pricing & <span className="gradient-text-crimson">Plans</span>
              </h1>
              <p className="font-jakarta text-slate-300 mt-3 text-base max-w-xl mx-auto">
                Affordable, transparent pricing tailored for startups, small businesses, and growing brands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full Pricing Table */}
        <Pricing />

        {/* FAQ Navigation CTA */}
        <section className="py-16 bg-[#120507] border-t border-rose-500/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto mb-4">
              <HelpCircle size={24} />
            </div>
            <h2 className="font-syne font-bold text-2xl text-white mb-2">Have Questions About Billing Or Scope?</h2>
            <p className="font-jakarta text-slate-300 text-sm mb-6">
              Check our Help Center for detailed answers regarding revisions, turnarounds, and custom contracts.
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
