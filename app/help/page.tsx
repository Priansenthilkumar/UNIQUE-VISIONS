'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowLeft, ClipboardList, Cog, PackageCheck, MessageCircle, Sparkles } from 'lucide-react'
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
    <div
      className="glass-card border border-rose-500/20 overflow-hidden bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="font-syne text-base font-bold text-white group-hover:text-rose-400 transition-colors">
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} className={`transition-colors ${open ? 'text-rose-400' : 'text-slate-400'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5 border-t border-white/10">
              <p className="font-jakarta text-slate-300 text-sm leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HelpPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0B0304] text-slate-100 font-jakarta">

      {/* Header */}
      <div className="bg-[#120507] border-b border-rose-500/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="flex items-center gap-3">
            <Logo size={36} showText={true} />
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-xs uppercase font-bold text-slate-400 hover:text-rose-400 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back To Home</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 text-center">
          <div className="badge-crimson mb-3">
            <Sparkles size={14} />
            <span>Help Center & FAQ</span>
          </div>
          <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] text-white">
            How Can We <span className="gradient-text-crimson">Help You?</span>
          </h1>
          <p className="font-jakarta text-slate-300 mt-3 text-base max-w-xl mx-auto">
            Everything you need to know about working with Unique Visions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="badge-crimson mb-3">
              <span>Step-By-Step Workflow</span>
            </div>
            <h2 className="font-syne font-bold text-3xl text-white">How It Works</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="glass-card p-6 border border-rose-500/20 relative overflow-hidden bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90"
              >
                <span className="absolute top-2 right-4 font-syne font-extrabold text-5xl text-white/[0.04] select-none">
                  {step.step}
                </span>

                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-5">
                  <step.icon size={22} />
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="font-jakarta text-slate-300 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="text-center mb-12">
            <div className="badge-crimson mb-3">
              <span>Questions Answered</span>
            </div>
            <h2 className="font-syne font-bold text-3xl text-white">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          {/* Contact Trigger Callout */}
          <div className="glass-card p-8 text-center max-w-xl mx-auto mt-16 border border-rose-500/20">
            <h3 className="font-syne font-bold text-xl text-white mb-2">Still Need Help?</h3>
            <p className="font-jakarta text-slate-300 text-xs mb-6">Our team is ready to answer any custom questions directly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919363964142?text=Hi%20Can%20I%20get%20The%20Pricings%20%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson px-6 py-3 uppercase text-xs tracking-wider font-bold inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => router.push('/contact')}
                className="btn-glass px-6 py-3 uppercase text-xs tracking-wider font-bold"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}
