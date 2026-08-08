'use client'
import { useState } from 'react'
import { Send, MessageCircle, Sparkles, MapPin, Phone, Instagram } from 'lucide-react'

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'
const TELEGRAM_CHAT_ID   = 'YOUR_CHAT_ID'

async function sendToTelegram(form: Record<string, string>) {
  const text =
    `📩 *New Enquiry — Unique Visions*\n\n` +
    `👤 *Name:* ${form.name}\n` +
    `📞 *Phone:* ${form.phone}\n` +
    `📧 *Email:* ${form.email}\n` +
    `🛠 *Service:* ${form.service}\n\n` +
    `💬 *Message:*\n${form.message}`
  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' }),
  })
  if (!res.ok) throw new Error('Telegram error')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const customDetails = form.name || form.service || form.message
      ? `Hi Can I get The Pricings ?\n\n*Client Details:*\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || 'General'}\nMessage: ${form.message}`
      : `Hi Can I get The Pricings ?`
    const waUrl = `https://wa.me/919363964142?text=${encodeURIComponent(customDetails)}`
    window.open(waUrl, '_blank')
    setSent(true)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setSending(false)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#0B0304]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-crimson mb-4">
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Let's Start <span className="gradient-text-crimson">Building</span>
          </h2>
          <p className="font-jakarta text-slate-300 text-base md:text-lg max-w-xl mx-auto mt-4">
            Have a project in mind? Reach out to us and let's craft a winning strategy together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left - Contact Details & Links */}
          <div className="space-y-6">

            {/* Quick Contact Info Card */}
            <div className="glass-card p-8 border border-rose-500/20 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-syne text-xs uppercase tracking-widest text-slate-400">Call / Message Us</p>
                  <a href="tel:+919363964142" className="font-syne font-bold text-white text-lg hover:text-rose-400 transition-colors">
                    +91 9363964142
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-syne text-xs uppercase tracking-widest text-slate-400">Headquarters</p>
                  <p className="font-syne font-bold text-white text-base">Rasipuram, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="glass-card p-2 border border-rose-500/20 overflow-hidden rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62650.47779287406!2d78.1247!3d11.4646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab8441f4c3f4f9%3A0x8b1e6c7e7b1e6c7e!2sRasipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                title="Location Map"
              />
            </div>

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/919363964142?text=Hi%20Can%20I%20get%20The%20Pricings%20%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 border border-rose-500/30 flex items-center justify-between hover:border-rose-500/60 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-base">Instant WhatsApp Chat</h4>
                  <p className="font-jakarta text-xs text-slate-400">Direct response within minutes</p>
                </div>
              </div>
              <Send size={18} className="text-rose-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Direct Instagram Action */}
            <a
              href="https://www.instagram.com/_unique__visions_?igsh=dWtrYTRxeDZ4cng2"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 border border-rose-500/30 flex items-center justify-between hover:border-rose-500/60 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-base">Follow On Instagram</h4>
                  <p className="font-jakarta text-xs text-slate-400">@_unique__visions_</p>
                </div>
              </div>
              <Send size={18} className="text-rose-400 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right - Dark Glass Inquiry Form */}
          <div className="glass-card p-8 md:p-10 border border-rose-500/20 bg-gradient-to-b from-[#120507]/90 to-[#1A070A]/90">
            <h3 className="font-syne font-bold text-2xl text-white mb-6">Send An Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-jakarta text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="input-glass text-sm"
                  />
                </div>
                <div>
                  <label className="font-jakarta text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="input-glass text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-jakarta text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="input-glass text-sm"
                />
              </div>

              <div>
                <label className="font-jakarta text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Select Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="input-glass text-sm bg-[#0B0304]"
                >
                  <option value="">Select a service</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Poster Design">Poster Design</option>
                  <option value="Story Design">Story Design</option>
                  <option value="Reel Editing (Short)">Reel Editing (Short)</option>
                  <option value="Reel Editing (Long)">Reel Editing (Long)</option>
                  <option value="Web Design">Web Design (AI + Expert)</option>
                  <option value="Custom Package">Custom Package</option>
                </select>
              </div>

              <div>
                <label className="font-jakarta text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold font-jakarta">Project Details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your brand, scope, and timeline..."
                  className="input-glass text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="btn-crimson w-full py-4 uppercase tracking-wider text-xs font-bold"
              >
                {sent ? (
                  <span>✓ Message Sent Successfully!</span>
                ) : sending ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
