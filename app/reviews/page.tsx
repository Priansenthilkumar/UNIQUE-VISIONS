'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Send, User, Briefcase, MessageSquare, CheckCircle, Quote } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Review {
  id: string; name: string; role: string
  rating: number; text: string; service: string; date: string
}

const STORAGE_KEY = 'uv_reviews'
const services = [
  'Social Media Management', 'Poster Design', 'Story Design',
  'Reel Editing', 'Video Editing', 'Content Strategy', 'Other',
]

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-2">
      {[1,2,3,4,5].map(i => (
        <button key={i} type="button" onClick={() => onChange(i)}
          onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(0)}>
          <Star size={30} className={`transition-all duration-150 ${i <= (hovered || value) ? 'text-[#1a4d3d] fill-[#1a4d3d] scale-110' : 'text-[#2a2a2a]/20 fill-[#2a2a2a]/20'}`} style={{ filter: i <= (hovered || value) ? 'drop-shadow(0 0 8px rgba(26,77,61,0.4))' : 'none' }} />
        </button>
      ))}
    </div>
  )
}

function StarDisplay({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={12} className={i <= value ? 'text-[#1a4d3d] fill-[#1a4d3d]' : 'text-[#2a2a2a]/20 fill-[#2a2a2a]/20'} style={{ filter: i <= value ? 'drop-shadow(0 0 4px rgba(26,77,61,0.4))' : 'none' }} />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="card-premium rounded-2xl p-6 flex flex-col relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a4d3d] via-[#7a9d7f] to-[#1a4d3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Quote size={18} className="text-[#1a4d3d] mb-3" style={{ filter: 'drop-shadow(0 0 6px rgba(26,77,61,0.3))' }} />
      <StarDisplay value={review.rating} />
      <p className="text-[#2a2a2a]/70 text-sm leading-relaxed mt-3 mb-5 flex-1 font-poppins">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-[#1a4d3d]/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full hero-shape flex items-center justify-center flex-shrink-0 text-white text-sm font-bold font-cinzel bg-gradient-to-br from-[#1a4d3d] to-[#0d2a25]"
            style={{ boxShadow: '0 4px 12px rgba(26,77,61,0.3)' }}>
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-[#2a2a2a] text-sm font-semibold font-inter">{review.name}</p>
            <p className="text-[#2a2a2a]/60 text-xs font-inter">{review.role}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold text-white bg-[#1a4d3d] px-2.5 py-1 rounded-lg font-montserrat">{review.service}</span>
          <p className="text-[#2a2a2a]/50 text-xs mt-1 font-inter">{review.date}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [form, setForm] = useState({ name: '', role: '', service: '', rating: 0, text: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setReviews(JSON.parse(stored))
    } catch {}
  }, [])

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '0.0'

  const ratingCounts = [5,4,3,2,1].map(star => ({
    star,
    count: reviews.filter(r => r.rating === star).length,
    pct: reviews.length ? Math.round((reviews.filter(r => r.rating === star).length / reviews.length) * 100) : 0,
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.rating === 0) { setError('Please select a star rating.'); return }
    if (form.text.trim().length < 10) { setError('Please write at least 10 characters.'); return }
    setSending(true)
    await new Promise(r => setTimeout(r, 800))
    const newReview: Review = {
      id: Date.now().toString(),
      name: form.name, role: form.role || 'Client',
      service: form.service || 'General', rating: form.rating, text: form.text,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    }
    const updated = [newReview, ...reviews]
    setReviews(updated)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch {}
    setSending(false); setSent(true)
    setForm({ name: '', role: '', service: '', rating: 0, text: '' })
    setTimeout(() => setSent(false), 4000)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      {/* Header */}
      <div className="bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a4d3d] rounded-full opacity-[0.08] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1a4d3d] rounded-full opacity-[0.05] blur-[100px]" />

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold tracking-[0.3em] text-[#1a4d3d] uppercase font-montserrat">
              Client Reviews
            </span>
            <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-cormorant font-semibold text-[#2a2a2a] mt-3 leading-[1.1] tracking-tight">
              Real words from<br />
              <span className="text-foil">real clients.</span>
            </h1>
            <p className="text-[#2a2a2a]/60 mt-5 text-[15px] leading-relaxed max-w-md font-poppins">
              We launched in <span className="text-[#2a2a2a] font-semibold">January 2026</span> and are building our story one happy client at a time.
            </p>
          </motion.div>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-8 mt-8 card-premium p-8"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-foil leading-none tracking-tight font-cinzel">{avgRating}</div>
              <div className="flex gap-1 justify-center mt-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={13} className={i <= Math.round(Number(avgRating)) ? 'text-[#1a4d3d] fill-[#1a4d3d]' : 'text-[#2a2a2a]/20 fill-[#2a2a2a]/20'} style={{ filter: i <= Math.round(Number(avgRating)) ? 'drop-shadow(0 0 4px rgba(26,77,61,0.4))' : 'none' }} />
                ))}
              </div>
              <p className="text-[#2a2a2a]/40 text-xs font-medium mt-2 tracking-wide font-inter">
                {reviews.length} review{reviews.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex-1 space-y-2.5">
              {ratingCounts.map(({ star, count, pct }) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-[#2a2a2a]/40 text-xs w-2 font-medium font-inter">{star}</span>
                  <Star size={9} className="text-[#1a4d3d] fill-[#1a4d3d] flex-shrink-0" style={{ filter: 'drop-shadow(0 0 4px rgba(26,77,61,0.4))' }} />
                  <div className="flex-1 h-1.5 bg-[#2a2a2a]/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#1a4d3d] to-[#7a9d7f] rounded-full" />
                  </div>
                  <span className="text-[#2a2a2a]/30 text-xs w-3 font-medium font-inter">{count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">

          {/* Reviews List */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-[#2a2a2a] font-cinzel">
                {reviews.length > 0 ? `${reviews.length} Review${reviews.length !== 1 ? 's' : ''}` : 'No reviews yet'}
              </h2>
              {reviews.length > 0 && (
                <span className="text-xs font-medium text-[#2a2a2a]/40 tracking-wide font-inter">Most recent first</span>
              )}
            </div>

            {reviews.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card-premium rounded-2xl p-16 text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-br from-[#1a4d3d] to-[#0d2a25]"
                  style={{ boxShadow: '0 8px 24px rgba(26,77,61,0.2)' }}>
                  <MessageSquare size={24} className="text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(26,77,61,0.4))' }} />
                </div>
                <h3 className="text-lg font-bold text-[#2a2a2a] mb-2 font-cinzel">No reviews yet</h3>
                <p className="text-[#2a2a2a]/60 text-sm font-poppins">Be the first to share your experience!</p>
              </motion.div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <AnimatePresence>
                  {reviews.map((review, i) => <ReviewCard key={review.id} review={review} index={i} />)}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="card-premium rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a4d3d] to-[#7a9d7f]" />

              <h3 className="text-xl font-bold text-[#2a2a2a] mb-1 font-cinzel">Write a Review</h3>
              <p className="text-[#2a2a2a]/60 text-sm mb-6 font-poppins">Your feedback helps us grow 🙏</p>

              <AnimatePresence>
                {sent && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-[#1a4d3d]/10 border border-[#1a4d3d]/30 rounded-xl p-4 mb-5">
                    <CheckCircle size={16} className="text-[#1a4d3d] flex-shrink-0" />
                    <p className="text-[#1a4d3d] text-sm font-semibold font-montserrat">Thank you! Your review is live.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#2a2a2a]/50 uppercase tracking-widest block mb-2 font-montserrat">Your Rating *</label>
                  <StarPicker value={form.rating} onChange={v => { setForm(p => ({ ...p, rating: v })); setError('') }} />
                  {error && <p className="text-[#1a4d3d] text-xs mt-2 font-medium font-inter">{error}</p>}
                </div>

                {[
                  { label: 'Your Name *', name: 'name', type: 'text', placeholder: 'Your name', icon: User, required: true },
                  { label: 'Role / Business', name: 'role', type: 'text', placeholder: 'e.g. Shop Owner, Chennai', icon: Briefcase, required: false },
                ].map(field => (
                  <div key={field.name}>
                    <label className="text-xs font-bold text-[#2a2a2a]/50 uppercase tracking-widest block mb-2 font-montserrat">{field.label}</label>
                    <div className="relative">
                      <field.icon size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2a2a2a]/30" />
                      <input type={field.type} name={field.name}
                        value={form[field.name as keyof typeof form] as string}
                        onChange={handleChange} required={field.required}
                        placeholder={field.placeholder}
                        className="input-field w-full pl-9 pr-4 py-3 rounded-xl text-sm font-inter" />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="text-xs font-bold text-[#2a2a2a]/50 uppercase tracking-widest block mb-2 font-montserrat">Service Used</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="input-field w-full px-4 py-3 rounded-xl text-sm appearance-none font-inter">
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2a2a2a]/50 uppercase tracking-widest block mb-2 font-montserrat">Your Review *</label>
                  <textarea name="text" value={form.text} onChange={handleChange} required rows={4}
                    placeholder="Tell others about your experience..."
                    className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none font-poppins" />
                </div>

                <motion.button type="submit" disabled={sending || sent}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 disabled:opacity-70 font-montserrat">
                  {sending ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                      Posting...
                    </>
                  ) : sent ? '✓ Review Posted!' : <><Send size={14} />Post Review</>}
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
