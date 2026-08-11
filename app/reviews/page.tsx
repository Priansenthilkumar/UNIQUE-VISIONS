'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, User, Briefcase, MessageSquare, CheckCircle, Quote, Sparkles } from 'lucide-react'
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
          <Star size={28} className={`transition-all ${i <= (hovered || value) ? 'text-amber-400 fill-amber-400 scale-110' : 'text-slate-700 fill-slate-800'}`} />
        </button>
      ))}
    </div>
  )
}

function StarDisplay({ value }: { value: number }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={14} className={i <= value ? 'text-amber-400 fill-amber-400' : 'text-slate-700 fill-slate-800'} />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div
      className="luxury-card p-6 border border-white/10 flex flex-col justify-between hover:border-amber-500/40 transition-all bg-[#0D0D14]"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <StarDisplay value={review.rating} />
          <span className="font-syne text-[0.65rem] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-500/30">
            {review.service}
          </span>
        </div>
        <Quote size={20} className="text-amber-400/40 mb-2" />
        <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-syne font-bold text-sm border border-amber-500/30">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-syne font-bold text-white text-sm">{review.name}</p>
            <p className="font-jakarta text-slate-400 text-xs">{review.role}</p>
          </div>
        </div>
        <span className="font-jakarta text-slate-400 text-xs">{review.date}</span>
      </div>
    </div>
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.rating === 0) { setError('Please select a star rating.'); return }
    if (form.text.trim().length < 10) { setError('Please write at least 10 characters.'); return }
    setSending(true)
    await new Promise(r => setTimeout(r, 600))
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
    <div className="min-h-screen bg-[#070709] text-slate-100 font-jakarta">
      <Navbar />

      <main className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="tag-luxury mb-3">
              <Sparkles size={13} className="text-amber-400" />
              <span>Real Testimonials</span>
            </div>
            <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,4rem)] text-white">
              Client Feedback & <span className="gradient-text-gold">Reviews</span>
            </h1>
            <p className="font-jakarta text-slate-300 mt-3 text-base max-w-xl mx-auto">
              Real reviews from real business owners who trust Unique Visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-12">

            {/* Reviews List Column */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-syne font-bold text-xl text-white">
                  {reviews.length > 0 ? `${reviews.length} Verified Reviews` : 'Community Feedback'}
                </h2>
                <span className="font-jakarta text-xs text-slate-400">Latest entries</span>
              </div>

              {reviews.length === 0 ? (
                <div className="luxury-card p-12 text-center border border-white/10">
                  <MessageSquare size={36} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="font-syne font-bold text-lg text-white mb-2">No custom reviews posted yet</h3>
                  <p className="font-jakarta text-slate-300 text-sm">Be the first to share your experience with Unique Visions!</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {reviews.map((review, i) => (
                    <ReviewCard key={review.id} review={review} index={i} />
                  ))}
                </div>
              )}
            </div>

            {/* Form Column */}
            <div className="luxury-card-gold p-8 border border-amber-500/40 h-fit bg-[#0D0D14]">
              <h3 className="font-syne font-bold text-xl text-white mb-2">Leave A Review</h3>
              <p className="font-jakarta text-slate-300 text-xs mb-6">Share your rating and feedback on our work.</p>

              {sent && (
                <div className="p-4 mb-6 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>Thank you! Your review has been posted.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-jakarta text-xs uppercase tracking-widest text-slate-300 block mb-2 font-semibold">Rating *</label>
                  <StarPicker value={form.rating} onChange={v => { setForm(p => ({ ...p, rating: v })); setError('') }} />
                  {error && <p className="text-rose-400 text-xs mt-2">{error}</p>}
                </div>

                <div>
                  <label className="font-jakarta text-xs uppercase tracking-widest text-slate-300 block mb-2 font-semibold">Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="input-glass text-sm" />
                </div>

                <div>
                  <label className="font-jakarta text-xs uppercase tracking-widest text-slate-300 block mb-2 font-semibold">Role / Business</label>
                  <input type="text" name="role" value={form.role} onChange={handleChange} placeholder="e.g. Founder, Brand X" className="input-glass text-sm" />
                </div>

                <div>
                  <label className="font-jakarta text-xs uppercase tracking-widest text-slate-300 block mb-2 font-semibold">Service Used</label>
                  <select name="service" value={form.service} onChange={handleChange} className="input-glass text-sm bg-[#070709]">
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-jakarta text-xs uppercase tracking-widest text-slate-300 block mb-2 font-semibold">Review Message *</label>
                  <textarea name="text" value={form.text} onChange={handleChange} required rows={4} placeholder="Describe your experience working with us..." className="input-glass text-sm resize-none" />
                </div>

                <button type="submit" disabled={sending || sent} className="btn-gold w-full py-3.5 uppercase tracking-wider text-xs font-bold">
                  {sending ? 'Posting Review...' : 'Submit Review'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
