'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, MessageCircle, Instagram, Facebook } from 'lucide-react'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          x: [0, 60, 0], 
          y: [0, -40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,157,127,0.25), transparent)' }} 
      />
      <motion.div 
        animate={{ 
          x: [0, -70, 0], 
          y: [0, 50, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,157,127,0.2), transparent)' }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label inline-block"
          >
            Get In Touch
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-6xl md:text-7xl font-bold mt-4 mb-6 text-text"
          >
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Talk</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-text-muted text-lg max-w-2xl mx-auto"
          >
            Ready to grow your brand? We'd love to hear from you. Reach out and let's create something amazing together.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="divider-line mx-auto mt-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }} 
            className="space-y-8">
            
            {/* Map Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="card-premium rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-widest mb-5">Follow Us</p>
              <div className="flex gap-4 flex-wrap">
                {[{ icon: Instagram, href: '#', label: 'Instagram' }, { icon: Facebook, href: '#', label: 'Facebook' }, { icon: MessageCircle, href: 'https://wa.me/919363964142', label: 'WhatsApp' }].map((s, i) => (
                  <motion.a 
                    key={i} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08, type: 'spring', stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.2, rotate: 360 }} 
                    className="w-14 h-14 card-premium rounded-2xl flex items-center justify-center text-text-muted hover:text-primary transition-colors duration-300 group shadow-md hover:shadow-lg"
                    title={s.label}
                  >
                    <s.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919363964142?text=Hi%20Unique%20Visions!"
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex items-center gap-4 rounded-3xl p-6 group shadow-lg hover:shadow-xl transition-all duration-300 card-premium"
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-accent to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform" 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle size={24} className="text-white" />
              </motion.div>
              <div>
                <p className="font-cinzel font-bold text-text text-lg">Chat on WhatsApp</p>
                <p className="font-poppins text-text-muted text-sm">Quick response guaranteed</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-premium rounded-3xl p-10 md:p-12 space-y-7 relative overflow-hidden group"
            >
              {/* Animated top line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
              
              <h3 className="font-cinzel font-bold text-text text-3xl tracking-wide">Send us a Message</h3>

              {/* Name and Phone Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-widest block mb-3">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe" 
                    className="input-field w-full rounded-xl text-sm font-poppins focus:bg-white transition-all duration-300" 
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-widest block mb-3">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    placeholder="+91 XXXXX XXXXX" 
                    className="input-field w-full rounded-xl text-sm font-poppins focus:bg-white transition-all duration-300"
                  />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-widest block mb-3">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="your@email.com" 
                  className="input-field w-full rounded-xl text-sm font-poppins focus:bg-white transition-all duration-300"
                />
              </motion.div>

              {/* Service Select */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <label className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-widest block mb-3">Service Interested</label>
                <select 
                  name="service" 
                  value={form.service} 
                  onChange={handleChange} 
                  className="input-field w-full rounded-xl text-sm font-poppins appearance-none bg-right bg-no-repeat focus:bg-white transition-all duration-300"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27%3E%3Cpath fill=%27%23317978%27 opacity=%270.7%27 d=%27M4 6l4 4 4-4%27/%3E%3C/svg%3E")', backgroundPosition: 'right 16px center', paddingRight: '44px' }}>
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="poster">Poster Design</option>
                  <option value="story">Story Design</option>
                  <option value="reel-short">Reel Editing (Short)</option>
                  <option value="reel-long">Reel Editing (Long)</option>
                  <option value="web-design">Web Design (AI + Expert)</option>
                  <option value="custom">Custom Package</option>
                </select>
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="font-montserrat text-xs font-bold text-text-muted uppercase tracking-widest block mb-3">Your Message</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={4} 
                  placeholder="Tell us about your project, goals, and timeline..." 
                  className="input-field w-full rounded-xl text-sm font-poppins resize-none focus:bg-white transition-all duration-300"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button 
                type="submit" 
                disabled={sending || sent} 
                whileHover={{ scale: sending || sent ? 1 : 1.06, y: sending || sent ? 0 : -2 }} 
                whileTap={{ scale: 0.98 }} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="btn-primary w-full py-4 rounded-2xl font-cinzel font-bold text-white text-base flex items-center justify-center gap-2 disabled:opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                {sent ? (
                  <>
                    <motion.span animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 1 }}>✓</motion.span>
                    <span>Message Sent Successfully!</span>
                  </>
                ) : sending ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
