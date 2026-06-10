'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowLeft, ClipboardList, Cog, PackageCheck, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

const faqs = [
  {
    q: 'What services does Unique Visions offer?',
    a: 'We offer Social Media Management, Creative Poster Design, Story Design, Reel Editing (Short & Long), Video Editing, Content Strategy, Instagram Growth, and Facebook Marketing.',
  },
  {
    q: 'How do I place an order?',
    a: 'Click the "Order Now" or "Get Started" button on any page, fill in your details and select your service, and we will contact you within 24 hours to get started.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Delivery times vary by service — Poster Design: 24hrs, Story Design: 12hrs, Reel Editing: 48–72hrs, Social Media Management: ongoing monthly. We always deliver on time.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes! Poster Design includes 2 revisions, Story Design includes 1 revision. For other services, revisions are discussed based on the scope of work.',
  },
  {
    q: 'How do I contact you for support?',
    a: 'You can reach us via WhatsApp at +91 9363964142, email at Uniquevisions111@gmail.com, or use the Contact form on our website. We respond quickly — usually within a few hours.',
  },
  {
    q: 'What are your pricing plans?',
    a: 'Our pricing starts at ₹99 for Story Design, ₹149 for Poster Design, ₹200 for Reel Editing, and ₹1,999/month for full Social Media Management. Visit our Pricing section for full details.',
  },
  {
    q: 'Do you work with businesses outside Tamil Nadu?',
    a: 'Absolutely! We work with clients across India and internationally. All our services are delivered digitally, so location is never a barrier.',
  },
  {
    q: 'Can I get a custom package?',
    a: 'Yes! If our standard plans don\'t fit your needs, contact us and we\'ll build a custom package tailored specifically to your brand and budget.',
  },
]

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Place Your Order',
    desc: 'Fill out our simple order form with your name, service needed, and any specific requirements. Takes less than 2 minutes.',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: 'We Reach Out',
    desc: 'Our team contacts you within 24 hours via WhatsApp or email to confirm details, understand your brand, and align on expectations.',
  },
  {
    icon: Cog,
    step: '03',
    title: 'We Get to Work',
    desc: 'Our creative team starts crafting your content — designs, videos, or strategy — with full attention to your brand identity.',
  },
  {
    icon: PackageCheck,
    step: '04',
    title: 'Deliver & Refine',
    desc: 'We deliver your work on time. You review it, request revisions if needed, and we finalize until you\'re 100% satisfied.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="card-3d rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="font-oswald text-base font-semibold text-[#1a1a1a] group-hover:text-[#d10000] transition-colors duration-300 uppercase tracking-wide pr-4">
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown size={18} className={`transition-colors duration-300 ${open ? 'text-[#d10000]' : 'text-[#aaa]'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 border-t border-gray-100">
              <p className="font-dm text-[#666] text-sm leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function HelpPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d10000] rounded-full opacity-[0.08] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#d10000] rounded-full opacity-[0.05] blur-[100px]" />

        {/* Navbar */}
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-10 border-b border-white/5">
          <button onClick={() => router.push('/')} className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="font-bebas text-xl tracking-widest text-white">UNIQUE <span className="gradient-text">VISIONS</span></span>
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 font-dm"
          >
            <ArrowLeft size={14} /> Back to Home
          </button>
        </div>

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="font-syne text-xs font-bold tracking-[0.4em] text-[#d10000] uppercase">Help Center</span>
            <h1 className="font-oswald text-[clamp(2.5rem,6vw,5rem)] font-bold text-white mt-3 uppercase tracking-wide">
              How Can We <span className="gradient-text">Help You?</span>
            </h1>
            <p className="font-dm text-white/50 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
              Everything you need to know about working with Unique Visions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* How It Works */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="font-syne text-xs font-bold tracking-[0.4em] text-[#d10000] uppercase">The Process</span>
            <h2 className="font-oswald text-[clamp(2rem,5vw,3.5rem)] font-bold mt-3 gradient-text-dark uppercase tracking-wide">How It Works</h2>
            <div className="red-divider mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-3d rounded-3xl p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d10000] to-[#ff4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 font-bebas text-6xl text-gray-100 group-hover:text-red-50 transition-colors duration-500 leading-none select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl hero-shape flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: '0 8px 24px rgba(209,0,0,0.3)' }}
                  >
                    <step.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-oswald text-lg font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide group-hover:text-[#d10000] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-dm text-[#777] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="font-syne text-xs font-bold tracking-[0.4em] text-[#d10000] uppercase">Got Questions?</span>
            <h2 className="font-oswald text-[clamp(2rem,5vw,3.5rem)] font-bold mt-3 gradient-text-dark uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
            <div className="red-divider mx-auto mt-4" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          {/* Still need help CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16"
          >
            <div className="card-3d rounded-3xl p-10 max-w-xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d10000] to-[#ff4444]" />
              <h3 className="font-oswald text-2xl font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">Still Need Help?</h3>
              <p className="font-dm text-[#777] text-sm mb-6">Can't find your answer? Reach out to us directly — we're always happy to help.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="https://wa.me/919363964142"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-syne font-bold text-white text-sm"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
                </motion.a>
                <motion.button
                  onClick={() => router.push('/#contact')}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-outline inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-syne font-bold text-sm"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
