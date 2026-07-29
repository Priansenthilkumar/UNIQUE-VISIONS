'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
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
                <span>Get In Touch</span>
              </div>
              <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] text-white">
                Contact <span className="gradient-text-crimson">Unique Visions</span>
              </h1>
              <p className="font-jakarta text-slate-300 mt-3 text-base max-w-xl mx-auto">
                Ready to take your digital presence to the next level? Fill in the form below or message us directly on WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full Contact Form & Map */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
