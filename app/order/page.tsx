'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles, Rocket } from 'lucide-react'
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
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <CheckCircle size={64} className="text-rose-400 mx-auto mb-6" />
        <h2 className="font-syne font-extrabold text-3xl text-white mb-3">Order Received!</h2>
        <p className="font-jakarta text-slate-300 mb-8">We will review your requirements and reach out within 24 hours.</p>
        <motion.a href="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-crimson inline-flex items-center gap-2 px-8 py-3.5 uppercase text-xs tracking-wider font-bold">
          <span>Back to Home</span> <ArrowRight size={16} />
        </motion.a>
      </motion.div>
    )
  }

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi Can I get The Pricings ?\n\n*Order Booking Details:*\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nService: ${form.service}\nDetails: ${form.message || 'N/A'}`
    const waUrl = `https://wa.me/919363964142?text=${encodeURIComponent(msg)}`
    window.open(waUrl, '_blank')
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleOrderSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-jakarta text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">Full Name *</label>
          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="input-glass text-sm" />
        </div>
        <div>
          <label className="font-jakarta text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">Phone *</label>
          <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="input-glass text-sm" />
        </div>
      </div>
      <div>
        <label className="font-jakarta text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">Email</label>
        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="input-glass text-sm" />
      </div>
      <div>
        <label className="font-jakarta text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">Service *</label>
        <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="input-glass text-sm bg-[#0B0304]">
          <option value="">Select a service</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {isWebDesign && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-start gap-3 bg-rose-500/10 border border-rose-500/30 rounded-xl p-4"
          >
            <Rocket size={20} className="text-rose-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-syne font-bold text-rose-400 text-xs uppercase tracking-wide mb-1">New Service — Launching Soon</p>
              <p className="font-jakarta text-slate-300 text-xs leading-relaxed">
                Our web design service combines <span className="text-rose-300 font-semibold">AI-driven speed</span> with <span className="text-white font-semibold">expert agency finishing</span>. Place your order now to secure priority queue spot!
              </p>
            </div>
          </motion.div>
        )}
      </div>
      <div>
        <label className="font-jakarta text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2 font-semibold">Additional Details</label>
        <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your brand, goals, or specific timeline requirements..." className="input-glass text-sm resize-none" />
      </div>
      <button type="submit" className="btn-crimson w-full py-4 uppercase tracking-wider text-xs font-bold">
        <span>Place Order Now</span>
        <ArrowRight size={16} />
      </button>
    </form>
  )
}

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0B0304] pt-36 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="badge-crimson mb-3">
              <Sparkles size={14} />
              <span>Direct Booking</span>
            </div>
            <h1 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.5rem)] text-white">Place Your Order</h1>
            <p className="font-jakarta text-slate-300 mt-3 text-sm">Provide your details below and our team will get started.</p>
          </div>

          <div className="glass-card p-8 md:p-10 border border-rose-500/20 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90">
            <Suspense fallback={<div className="font-jakarta text-sm text-slate-400">Loading order form...</div>}>
              <OrderForm />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
