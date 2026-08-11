'use client'

export const dynamic = 'force-dynamic'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Home,
  MessageSquare,
  Clock,
  Mail,
  Phone,
  User,
  PackageCheck,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ThankYouContent() {
  const searchParams = useSearchParams()

  const orderId = searchParams.get('orderId') || `UV-${Math.floor(100000 + Math.random() * 900000)}`
  const name = searchParams.get('name') || 'Valued Client'
  const email = searchParams.get('email') || ''
  const phone = searchParams.get('phone') || ''
  const service = searchParams.get('service') || 'Digital Service'
  const message = searchParams.get('message') || ''

  const [copied, setCopied] = useState(false)

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Unique Visions team! I just placed an order (Order ID: ${orderId}) for "${service}". My name is ${name}.`
  )
  const whatsappUrl = `https://wa.me/917867807090?text=${whatsappMessage}`

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero Animation Badge & Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* Animated Glowing Checkmark */}
        <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl animate-pulse"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 border border-amber-200/40 shadow-lg shadow-amber-500/30 flex items-center justify-center text-slate-950 font-bold"
          >
            <CheckCircle2 size={44} className="stroke-[2.5]" />
          </motion.div>
        </div>

        <div className="tag-luxury inline-flex mb-4">
          <Sparkles size={13} className="text-amber-400" />
          <span>Order Confirmed</span>
        </div>

        <h1 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
          Thank You, <span className="gradient-text-gold">{name}</span>!
        </h1>
        <p className="font-jakarta text-slate-300 mt-3 text-base max-w-xl mx-auto leading-relaxed">
          Your order has been placed successfully. Our agency team has received your brief and is preparing next steps.
        </p>

        {/* Order Reference Badge */}
        <div className="mt-6 inline-flex items-center gap-3 bg-[#070709] border border-amber-500/40 rounded-2xl px-5 py-2.5 shadow-md">
          <span className="font-jakarta text-xs text-slate-400 uppercase tracking-wider font-semibold">
            Order Reference ID:
          </span>
          <span className="font-mono font-bold text-amber-300 text-sm tracking-wide">
            #{orderId}
          </span>
          <button
            onClick={handleCopyOrderId}
            title="Copy Order ID"
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-amber-500/20"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
          </button>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 luxury-card p-8 border border-white/10 bg-[#0D0D14] space-y-6 text-left"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="font-syne font-bold text-xl text-white flex items-center gap-2">
              <PackageCheck size={22} className="text-amber-400" />
              <span>Order Details</span>
            </h2>
            <span className="tag-luxury text-[10px]">Processing</span>
          </div>

          <div className="space-y-4 font-jakarta text-sm">
            <div className="bg-[#070709] border border-white/10 rounded-xl p-4 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Requested Service</p>
                <p className="font-syne font-bold text-white text-base mt-0.5">{service}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#070709] border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                <User size={16} className="text-amber-400 shrink-0" />
                <div className="truncate">
                  <p className="text-slate-400 text-[11px] font-semibold uppercase">Client Name</p>
                  <p className="text-white font-medium text-xs truncate">{name}</p>
                </div>
              </div>

              {email && (
                <div className="bg-[#070709] border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                  <Mail size={16} className="text-amber-400 shrink-0" />
                  <div className="truncate">
                    <p className="text-slate-400 text-[11px] font-semibold uppercase">Email Copy Sent</p>
                    <p className="text-amber-300 font-medium text-xs truncate">{email}</p>
                  </div>
                </div>
              )}

              {phone && (
                <div className="bg-[#070709] border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                  <Phone size={16} className="text-amber-400 shrink-0" />
                  <div className="truncate">
                    <p className="text-slate-400 text-[11px] font-semibold uppercase">Phone Number</p>
                    <p className="text-white font-medium text-xs truncate">{phone}</p>
                  </div>
                </div>
              )}
            </div>

            {message && (
              <div className="bg-[#070709] border border-white/10 rounded-xl p-4">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Additional Project Brief</p>
                <p className="text-slate-300 text-xs leading-relaxed italic">"{message}"</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-5 luxury-card-gold p-8 border border-amber-500/40 bg-[#0D0D14] flex flex-col justify-between text-left"
        >
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Clock size={20} className="text-amber-400" />
              <span>What Happens Next</span>
            </h2>

            <div className="space-y-6 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-white/10">
              <div className="relative flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-bold shrink-0 shadow-md">
                  ✓
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-sm">Order Dispatched</h3>
                  <p className="font-jakarta text-slate-400 text-xs mt-0.5">Confirmation brief logged in studio system.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-sm">Brief Review</h3>
                  <p className="font-jakarta text-slate-400 text-xs mt-0.5">Our creative team evaluates scope within 24 hours.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-sm">Kickoff & Delivery</h3>
                  <p className="font-jakarta text-slate-400 text-xs mt-0.5">Direct WhatsApp updates and draft delivery begin.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-medium">
              <ShieldCheck size={16} className="text-amber-400" />
              <span>Priority Studio Queue Guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
      >
        <Link
          href="/"
          className="btn-gold w-full sm:w-auto px-8 py-4 uppercase text-xs tracking-wider font-bold inline-flex items-center justify-center gap-2"
        >
          <Home size={16} />
          <span>Back to Home</span>
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass w-full sm:w-auto px-8 py-4 uppercase text-xs tracking-wider font-bold inline-flex items-center justify-center gap-2 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/60"
        >
          <MessageSquare size={16} />
          <span>Chat on WhatsApp</span>
        </a>

        <Link
          href="/services"
          className="btn-glass w-full sm:w-auto px-8 py-4 uppercase text-xs tracking-wider font-bold inline-flex items-center justify-center gap-2"
        >
          <span>Explore More Services</span>
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070709] pt-36 pb-24 font-jakarta text-slate-100">
        <Suspense
          fallback={
            <div className="max-w-xl mx-auto text-center py-20 font-jakarta text-slate-400 text-sm">
              Loading order confirmation details...
            </div>
          }
        >
          <ThankYouContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
