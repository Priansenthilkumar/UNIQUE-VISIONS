'use client'
import { useState } from 'react'
import { Send, Sparkles, MapPin, Mail, Instagram } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      const emailPayload: Record<string, string> = {
        _subject: `📩 New Contact Inquiry — ${form.service || 'General'}`,
        Client_Name: form.name,
        Client_Phone: form.phone,
        Client_Email: form.email,
        Selected_Service: form.service || 'General Inquiry',
        Message: form.message,
        _template: 'table',
      }
      if (form.email) {
        emailPayload._cc = form.email
        emailPayload._replyto = form.email
      }

      await fetch('https://formsubmit.co/ajax/uniquevisions111@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(emailPayload)
      })
    } catch {}

    setSent(true)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setSending(false)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="tag-luxury mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-tight">
            Let's Build Something <span className="gradient-text-gold">Iconic</span>
          </h2>
          <p className="font-jakarta text-slate-400 text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Have a project in mind? Reach out to us and let's craft a winning growth strategy together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left - Contact Details & Links */}
          <div className="space-y-6">

            {/* Quick Contact Info Card */}
            <div className="luxury-card p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-syne text-xs uppercase tracking-widest text-slate-400">Direct Email</p>
                  <a href="mailto:uniquevisions111@gmail.com" className="font-syne font-bold text-white text-base hover:text-amber-400 transition-colors">
                    uniquevisions111@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-syne text-xs uppercase tracking-widest text-slate-400">Headquarters</p>
                  <p className="font-syne font-bold text-white text-base">Rasipuram, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="luxury-card p-2 border border-white/10 overflow-hidden rounded-3xl">
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

            {/* Direct Instagram Action */}
            <a
              href="https://www.instagram.com/_unique__visions_?igsh=dWtrYTRxeDZ4cng2"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-card p-6 border border-white/10 flex items-center justify-between hover:border-amber-500/40 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-base">Follow On Instagram</h4>
                  <p className="font-jakarta text-xs text-slate-400">@_unique__visions_</p>
                </div>
              </div>
              <Send size={18} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right - Dark Glass Inquiry Form */}
          <div className="luxury-card-gold p-8 md:p-10 border border-amber-500/40 bg-[#0D0D14]">
            <h3 className="font-syne font-bold text-2xl text-white mb-6">Send An Inquiry</h3>

            {sent && (
              <div className="p-4 mb-6 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                Thank you! Your message has been sent to uniquevisions111@gmail.com. We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 font-jakarta">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="input-glass text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Phone Number *</label>
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
                <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="input-glass text-sm"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Service Needed</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="input-glass text-sm bg-[#070709]"
                >
                  <option value="">Select a service</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Poster Design">Poster Design</option>
                  <option value="Story Design">Story Design</option>
                  <option value="Reel Editing">Reel Editing</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Web Design">Web Design (AI + Expert)</option>
                  <option value="Other">Other / Custom Strategy</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2 font-semibold">Message / Project Details *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your brand, goals, or requirements..."
                  className="input-glass text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-gold w-full py-4 uppercase tracking-wider text-xs font-bold inline-flex items-center justify-center gap-2"
              >
                <span>{sending ? 'Sending Message...' : 'Send Message'}</span>
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
