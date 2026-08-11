'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  PackageCheck,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  ShieldCheck,
  Home,
  RefreshCw
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  'Social Media Management', 'Creative Poster Design', 'Story Design',
  'Reel Editing (Short)', 'Reel Editing (Long)', 'Video Editing',
  'Content Strategy', 'Instagram Growth', 'Facebook Marketing',
  'Web Design (AI + Expert)', 'Custom Package',
]

interface OrderData {
  orderId: string
  name: string
  phone: string
  email: string
  service: string
  message: string
}

function OrderFormContent() {
  const params = useSearchParams()
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [orderSummary, setOrderSummary] = useState<OrderData | null>(null)
  const [copied, setCopied] = useState(false)

  const isWebDesign = form.service === 'Web Design (AI + Expert)'

  useEffect(() => {
    const s = params.get('service') || params.get('plan') || ''
    const msg = params.get('message') || ''
    if (s) setForm(f => ({ ...f, service: s, message: msg || f.message }))
  }, [params])

  const handleCopyOrderId = (id: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(id)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const generatedOrderId = `UV-${Math.floor(100000 + Math.random() * 900000)}`
    const submittedOrder: OrderData = {
      orderId: generatedOrderId,
      name: form.name,
      phone: form.phone,
      email: form.email,
      service: form.service || 'General Service',
      message: form.message,
    }

    try {
      const emailPayload: Record<string, string> = {
        _subject: `📦 New Order Booking [#${generatedOrderId}] — ${submittedOrder.service}`,
        Order_ID: generatedOrderId,
        Client_Name: form.name,
        Client_Phone: form.phone,
        Client_Email: form.email,
        Selected_Service: submittedOrder.service,
        Additional_Details: form.message || 'None',
        _template: 'table',
        _autoresponse: `Thank you for your order with Unique Visions! We have received your order (#${generatedOrderId}) for ${submittedOrder.service}. Our team will review your requirements and get back to you shortly.`,
      }
      if (form.email) {
        emailPayload._cc = form.email
        emailPayload._replyto = form.email
      }

      await fetch('https://formsubmit.co/ajax/uniquevisions111@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(emailPayload),
      })
    } catch {}

    setSending(false)
    setOrderSummary(submittedOrder)
  }

  const resetForm = () => {
    setOrderSummary(null)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <AnimatePresence mode="wait">
      {orderSummary ? (
        /* ================= THANK YOU VIEW ================= */
        <motion.div
          key="thank-you-view"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-8 text-left"
        >
          {/* Animated Checkmark & Heading */}
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="absolute inset-0 rounded-full bg-amber-500/25 blur-xl animate-pulse"
              />
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 border border-amber-200/40 shadow-lg shadow-amber-500/40 flex items-center justify-center text-slate-950 font-bold"
              >
                <CheckCircle2 size={36} className="stroke-[2.5]" />
              </motion.div>
            </div>

            <div className="tag-luxury inline-flex mb-3">
              <Sparkles size={13} className="text-amber-400" />
              <span>Order Received Successfully</span>
            </div>

            <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-white">
              Thank You, <span className="gradient-text-gold">{orderSummary.name}</span>!
            </h2>
            <p className="font-jakarta text-slate-300 mt-2 text-sm max-w-lg mx-auto leading-relaxed">
              Your order has been booked. A confirmation copy has been sent to{' '}
              <span className="text-amber-300 font-semibold">{orderSummary.email}</span>.
            </p>

            {/* Order Reference ID */}
            <div className="mt-5 inline-flex items-center gap-3 bg-[#070709] border border-amber-500/40 rounded-xl px-4 py-2 shadow-inner">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Reference ID:</span>
              <span className="font-mono font-bold text-amber-300 text-sm">#{orderSummary.orderId}</span>
              <button
                type="button"
                onClick={() => handleCopyOrderId(orderSummary.orderId)}
                title="Copy Order ID"
                className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-amber-500/20"
              >
                {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              </button>
            </div>
          </div>

          {/* Order Details Breakdown Card */}
          <div className="bg-[#070709]/80 border border-amber-500/30 rounded-2xl p-6 space-y-4 font-jakarta text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-syne font-bold text-sm text-white flex items-center gap-2">
                <PackageCheck size={18} className="text-amber-400" />
                <span>Order Summary</span>
              </span>
              <span className="text-amber-300 font-semibold bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full text-[11px]">
                Status: Logged
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-[#0D0D14] p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <Sparkles size={16} className="text-amber-400 shrink-0" />
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-semibold">Selected Service</p>
                  <p className="text-white font-bold text-xs">{orderSummary.service}</p>
                </div>
              </div>

              <div className="bg-[#0D0D14] p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <User size={16} className="text-amber-400 shrink-0" />
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-semibold">Client Name</p>
                  <p className="text-white font-bold text-xs">{orderSummary.name}</p>
                </div>
              </div>

              <div className="bg-[#0D0D14] p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <div className="truncate">
                  <p className="text-slate-400 text-[10px] uppercase font-semibold">Client Email</p>
                  <p className="text-amber-300 font-medium text-xs truncate">{orderSummary.email}</p>
                </div>
              </div>

              <div className="bg-[#0D0D14] p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-semibold">Phone Number</p>
                  <p className="text-white font-medium text-xs">{orderSummary.phone}</p>
                </div>
              </div>
            </div>

            {orderSummary.message && (
              <div className="bg-[#0D0D14] p-3.5 rounded-xl border border-white/10">
                <p className="text-slate-400 text-[10px] uppercase font-semibold mb-1">Additional Details</p>
                <p className="text-slate-300 italic text-xs leading-relaxed">"{orderSummary.message}"</p>
              </div>
            )}
          </div>

          {/* Timeline Roadmap */}
          <div className="bg-[#070709]/60 border border-white/10 rounded-2xl p-6">
            <h3 className="font-syne font-bold text-sm text-white mb-4 flex items-center gap-2">
              <Clock size={16} className="text-amber-400" />
              <span>What Happens Next</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 font-jakarta text-xs">
              <div className="bg-[#0D0D14] p-3.5 rounded-xl border border-white/10 space-y-1">
                <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center justify-center mb-2">
                  1
                </div>
                <p className="font-syne font-bold text-white">Order Logged</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">Your order brief has been queued in our studio system.</p>
              </div>

              <div className="bg-[#0D0D14] p-3.5 rounded-xl border border-white/10 space-y-1">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center justify-center mb-2 border border-amber-500/30">
                  2
                </div>
                <p className="font-syne font-bold text-white">Review within 24h</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">Our creative team evaluates scope & requirements.</p>
              </div>

              <div className="bg-[#0D0D14] p-3.5 rounded-xl border border-white/10 space-y-1">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center justify-center mb-2 border border-amber-500/30">
                  3
                </div>
                <p className="font-syne font-bold text-white">Deliverable Kickoff</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">Direct WhatsApp updates and milestone drafts begin.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href={`https://wa.me/917867807090?text=${encodeURIComponent(
                `Hi Unique Visions! I just placed an order (Order ID: #${orderSummary.orderId}) for "${orderSummary.service}". My name is ${orderSummary.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass w-full sm:w-auto flex-1 py-3.5 uppercase tracking-wider text-xs font-bold inline-flex items-center justify-center gap-2 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
            >
              <MessageSquare size={16} />
              <span>Connect on WhatsApp</span>
            </a>

            <Link
              href="/"
              className="btn-gold w-full sm:w-auto flex-1 py-3.5 uppercase tracking-wider text-xs font-bold inline-flex items-center justify-center gap-2"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>

            <button
              type="button"
              onClick={resetForm}
              className="btn-glass w-full sm:w-auto px-5 py-3.5 uppercase tracking-wider text-xs font-bold inline-flex items-center justify-center gap-2 text-slate-300"
            >
              <RefreshCw size={14} />
              <span>Place Another</span>
            </button>
          </div>
        </motion.div>
      ) : (
        /* ================= ORDER FORM VIEW ================= */
        <form onSubmit={handleOrderSubmit} className="space-y-6 text-left font-jakarta">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">
                Full Name *
              </label>
              <input
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="input-glass text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">
                Phone Number *
              </label>
              <input
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                className="input-glass text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="input-glass text-sm"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2">
              Service Deliverable *
            </label>
            <select
              required
              value={form.service}
              onChange={e => setForm({ ...form, service: e.target.value })}
              className="input-glass text-sm bg-[#070709]"
            >
              <option value="">Select a service</option>
              {services.map(s => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {isWebDesign && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 flex items-start gap-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4"
              >
                <Rocket size={20} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-syne font-bold text-amber-300 text-xs uppercase tracking-wide mb-1">
                    AI Web Design Service
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Our web design service combines <span className="text-amber-300 font-semibold">Next.js speed</span> with <span className="text-white font-semibold">expert agency finishing</span>. Place your order now to secure priority queue!
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 tracking-widest uppercase block mb-2 font-semibold">
              Project Details & Requirements
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your brand, goals, or specific timeline requirements..."
              className="input-glass text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn-gold w-full py-4 uppercase tracking-wider text-xs font-bold inline-flex items-center justify-center gap-2"
          >
            <span>{sending ? 'Sending Order...' : 'Place Order Now'}</span>
            <ArrowRight size={16} />
          </button>
        </form>
      )}
    </AnimatePresence>
  )
}

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070709] pt-36 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="tag-luxury mb-3">
              <Sparkles size={13} className="text-amber-400" />
              <span>Direct Booking</span>
            </div>
            <h1 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.5rem)] text-white">Place Your Order</h1>
            <p className="font-jakarta text-slate-300 mt-3 text-sm">Provide your details below and our team will start working on your brief.</p>
          </div>

          <div className="luxury-card-gold p-8 md:p-10 border border-amber-500/40 bg-[#0D0D14]">
            <Suspense fallback={<div className="font-jakarta text-sm text-slate-400">Loading order form...</div>}>
              <OrderFormContent />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
