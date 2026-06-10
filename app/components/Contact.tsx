'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

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
  const { user, openAuth } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) { openAuth(); return }
    setSending(true)
    try {
      await sendToTelegram(form)
      setSent(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch {
      alert('Something went wrong. Please call us directly at +91 9363964142')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden section-bg">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[140px] animate-float"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.3), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <span className="section-label">Get In Touch</span>
          <h2 className="font-cinzel text-[clamp(2.2rem,5vw,4.5rem)] font-bold mt-4 gradient-text-dark uppercase tracking-wide">Let's Talk</h2>
          <p className="font-poppins text-[#1F2A1F]/70 max-w-2xl mx-auto mt-5 text-base">Ready to grow your brand? We'd love to hear from you. Reach out and let's create something amazing together.</p>
          <div className="red-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="space-y-8">
            
            {/* Map Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-3d rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(216,226,200,0.4), rgba(245,240,225,0.8))',
                boxShadow: '0 4px 16px rgba(15,106,61,0.1)'
              }}>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62650.47779287406!2d78.1247!3d11.4646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab8441f4c3f4f9%3A0x8b1e6c7e7b1e6c7e!2sRasipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Rasipuram Location"
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <p className="font-montserrat text-xs font-bold text-[#1F2A1F]/50 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                {[{ icon: Instagram, href: '#', label: 'Instagram' }, { icon: Facebook, href: '#', label: 'Facebook' }, { icon: MessageCircle, href: 'https://wa.me/919363964142', label: 'WhatsApp' }].map((s, i) => (
                  <motion.a 
                    key={i} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.15, y: -4 }} 
                    className="w-12 h-12 card-3d rounded-xl flex items-center justify-center text-[#1F2A1F]/60 hover:text-[#0F6A3D] transition-colors duration-300 group"
                    title={s.label}>
                    <s.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919363964142?text=Hi%20Unique%20Visions!"
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex items-center gap-4 rounded-2xl p-5 group hover:shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(107,142,127,0.15), rgba(90,121,104,0.08))',
                border: '1px solid rgba(107,142,127,0.3)',
                boxShadow: '0 8px 24px rgba(107,142,127,0.2)'
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A9B8E] to-[#6B8E7F] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" 
                style={{ boxShadow: '0 8px 20px rgba(107,142,127,0.4)' }}>
                <MessageCircle size={22} className="text-green-500 fill-green-500" />
              </div>
              <div>
                <p className="font-syne font-bold text-black text-base">Chat on WhatsApp</p>
                <p className="font-poppins text-black/50 text-sm">Quick response guaranteed</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}>
            <form onSubmit={handleSubmit} className="card-3d rounded-3xl p-8 sm:p-10 space-y-6 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(109,40,217,0.05) 100%)',
                boxShadow: '0 16px 48px rgba(139,92,246,0.2), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}>
              
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-cinzel font-bold text-[#1F2A1F] text-2xl tracking-wide">Send us a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-montserrat text-xs font-bold text-[#1F2A1F]/50 uppercase tracking-widest block mb-3">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe" 
                    className="input-field w-full rounded-xl text-sm font-poppins" />
                </div>
                <div>
                  <label className="font-montserrat text-xs font-bold text-[#1F2A1F]/50 uppercase tracking-widest block mb-3">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    placeholder="+91 XXXXX XXXXX" 
                    className="input-field w-full rounded-xl text-sm font-poppins" />
                </div>
              </div>

              <div>
                <label className="font-montserrat text-xs font-bold text-[#1F2A1F]/50 uppercase tracking-widest block mb-3">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="your@email.com" 
                  className="input-field w-full rounded-xl text-sm font-poppins" />
              </div>

              <div>
                <label className="font-montserrat text-xs font-bold text-[#1F2A1F]/50 uppercase tracking-widest block mb-3">Service Interested</label>
                <select 
                  name="service" 
                  value={form.service} 
                  onChange={handleChange} 
                  className="input-field w-full rounded-xl text-sm font-poppins appearance-none bg-right bg-no-repeat"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27%3E%3Cpath fill=%27%23f8f8f8%27 opacity=%270.5%27 d=%27M4 6l4 4 4-4%27/%3E%3C/svg%3E")', backgroundPosition: 'right 12px center' }}>
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="poster">Poster Design</option>
                  <option value="story">Story Design</option>
                  <option value="reel-short">Reel Editing (Short)</option>
                  <option value="reel-long">Reel Editing (Long)</option>
                  <option value="web-design">Web Design (AI + Expert)</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div>
                <label className="font-montserrat text-xs font-bold text-[#1F2A1F]/50 uppercase tracking-widest block mb-3">Your Message</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={4} 
                  placeholder="Tell us about your project, goals, and timeline..." 
                  className="input-field w-full rounded-xl text-sm font-poppins resize-none" />
              </div>

              <motion.button 
                type="submit" 
                disabled={sending || sent} 
                whileHover={{ scale: sending || sent ? 1 : 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                className="btn-primary w-full py-3.5 rounded-xl font-syne font-bold text-white text-base flex items-center justify-center gap-2 disabled:opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl">
                {sent ? (
                  <>
                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 1 }}>✓</motion.span>
                    Message Sent Successfully!
                  </>
                ) : sending ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
