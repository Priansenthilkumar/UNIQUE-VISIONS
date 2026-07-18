'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const services = [
  'Social Media Management', 'Creative Poster Design', 'Story Design',
  'Reel Editing (Short)', 'Reel Editing (Long)', 'Video Editing',
  'Content Strategy', 'Instagram Growth', 'Facebook Marketing',
  'Web Design (AI + Expert)', 'Custom Package',
]

function OrderForm() {
  const params = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const isWebDesign = form.service === 'Web Design (AI + Expert)'

  useEffect(() => {
    const s = params.get('service') || params.get('plan') || ''
    if (s) setForm(f => ({ ...f, service: s }))
  }, [params])

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <CheckCircle size={64} className="text-[#d10000] mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 20px rgba(209,0,0,0.5))' }} />
        <h2 className="font-oswald text-4xl font-bold text-white mb-3 uppercase tracking-wide">Order Received!</h2>
        <p className="font-dm text-white/50 mb-8">We'll contact you within 24 hours to get started.</p>
        <motion.a href="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-xl font-syne font-bold text-white text-sm">
          Back to Home <ArrowRight size={16} />
        </motion.a>
      </motion.div>
    )
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-syne text-xs font-bold text-white/30 tracking-widest uppercase block mb-2">Full Name *</label>
          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="input-field w-full px-4 py-3 rounded-xl font-dm text-sm" />
        </div>
        <div>
          <label className="font-syne text-xs font-bold text-white/30 tracking-widest uppercase block mb-2">Phone *</label>
          <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="input-field w-full px-4 py-3 rounded-xl font-dm text-sm" />
        </div>
      </div>
      <div>
        <label className="font-syne text-xs font-bold text-white/30 tracking-widest uppercase block mb-2">Email</label>
        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="input-field w-full px-4 py-3 rounded-xl font-dm text-sm" />
      </div>
      <div>
        <label className="font-syne text-xs font-bold text-white/30 tracking-widest uppercase block mb-2">Service *</label>
        <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="input-field w-full px-4 py-3 rounded-xl font-dm text-sm cursor-pointer">
          <option value="">Select a service</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {isWebDesign && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-start gap-3 bg-red-950/20 border border-red-900/20 rounded-xl p-4"
          >
            <span className="text-lg">🚀</span>
            <div>
              <p className="font-syne font-bold text-white text-xs uppercase tracking-wide mb-1">New Service — Launching Soon</p>
              <p className="font-dm text-white/50 text-xs leading-relaxed">
                Our web design service is currently being built — <span className="text-[#ff4444] font-semibold">50% AI-powered</span> for speed and <span className="text-white font-semibold">50% crafted by our experts</span> for quality. Place your order now and we'll reach out with details!
              </p>
            </div>
          </motion.div>
        )}
      </div>
      <div>
        <label className="font-syne text-xs font-bold text-white/30 tracking-widest uppercase block mb-2">Additional Details</label>
        <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your brand, goals, or any specific requirements..." className="input-field w-full px-4 py-3 rounded-xl font-dm text-sm resize-none" />
      </div>
      <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary w-full py-4 rounded-xl font-syne font-bold text-white text-sm flex items-center justify-center gap-2">
        Place Order <ArrowRight size={16} />
      </motion.button>
    </form>
  )
}

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="font-syne text-xs font-bold tracking-[0.4em] text-[#d10000] uppercase">Let's Work Together</span>
            <h1 className="font-oswald text-[clamp(2.5rem,6vw,4rem)] font-bold mt-3 gradient-text-dark uppercase tracking-wide">Place Your Order</h1>
            <p className="font-dm text-white/50 mt-4 text-sm leading-relaxed">Fill in the details below and we'll get back to you within 24 hours.</p>
            <div className="red-divider mx-auto mt-4" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card-3d rounded-3xl p-10">
            <Suspense fallback={<div className="font-dm text-sm text-white/30">Loading...</div>}>
              <OrderForm />
            </Suspense>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
